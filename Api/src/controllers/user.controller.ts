import { RequestHandler } from "express";
import { userModel } from "../models";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register: RequestHandler = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new userModel({ name, email, password });
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: {
                name: newUser.name,
                email: newUser.email,
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const login: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                name: user.name,
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );

        res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
            },
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: "Server error" });
    }
};

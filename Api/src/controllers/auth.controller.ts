import { RequestHandler } from "express";
import { userModel } from "../models";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()


export const register: RequestHandler = async (req, res) => {
    const { firstname, lastname, email, password, role } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new userModel({ firstname, lastname, email, password, role });
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: {
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


export const login: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Password incorrect" });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: "JWT secret is not defined" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email, name: user.firstname },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error logging in" });
    }
};


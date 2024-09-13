import { RequestHandler } from "express";
import { productModel } from "../models";

export const createProductController: RequestHandler = async (req, res) => {
    const { title, price, image, category, color, size, rating } = req.body;
    try {
        const newProduct = await new productModel({
            title,
            price,
            image,
            category,
            color,
            size,
            rating,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        newProduct.save()
        return res.status(201).json({
            message: "product created successfully",
            newProduct
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getProductController: RequestHandler = async (req, res) => {
    try {
        const product = await productModel.find({})

        return res.status(200).json({
            product,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getProductByIdController: RequestHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({
                message: "products not found",
            });
        }

        return res.status(200).json({
            product,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

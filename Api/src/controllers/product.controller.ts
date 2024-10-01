import { RequestHandler } from "express";
import { productModel } from "../models";

export const createProductController: RequestHandler = async (req, res) => {
    const { name, title, price, image, category, qty, size, rating } = req.body;

    try {
        const totalQty = (qty.S || 0) + (qty.M || 0) + (qty.L || 0) + (qty.XL || 0) + (qty.Free || 0);

        const newProduct = new productModel({
            name,
            title,
            price,
            image,
            category,
            qty: {
                S: qty.S || 0,
                M: qty.M || 0,
                L: qty.L || 0,
                XL: qty.XL || 0,
                Free: qty.Free || 0,
            },
            totalQty,
            size,
            rating,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await newProduct.save();
        return res.status(201).json({
            message: "Product created successfully",
            newProduct,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getProductController: RequestHandler = async (req, res) => {
    try {
        const products = await productModel.find({});

        return res.status(200).json({
            count: products.length,
            products,
        });
    } catch (error) {
        console.error(error);
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

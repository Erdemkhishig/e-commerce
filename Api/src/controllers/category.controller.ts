import { RequestHandler } from "express";
import { categoryModel } from "../models";

export const createCategoryController: RequestHandler = async (req, res) => {
    const { name } = req.body;
    try {
        const newCategory = await new categoryModel({
            name,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        newCategory.save()
        return res.status(201).json({
            message: "category created successfully",
            newCategory
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getCategoryController: RequestHandler = async (req, res) => {
    try {
        const category = await categoryModel.find({})

        return res.status(200).json({
            category,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const getCategoryByIdController: RequestHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categoryModel.findById(id);

        if (!category) {
            return res.status(404).json({
                message: "category not found",
            });
        }
        return res.status(200).json({
            category,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
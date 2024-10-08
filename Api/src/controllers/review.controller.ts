import { RequestHandler } from "express";
import { reviewModel } from "../models";

export const createReviewController: RequestHandler = async (req, res) => {
    const { userId, productId, rating, comment } = req.body;
    try {
        const newReview = await new reviewModel({
            userId,
            productId,
            rating,
            comment,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        newReview.save()
        return res.status(201).json({
            message: "review created successfully",
            newReview
        });
    } catch (error) {
        return res.status(500).json({
            message: "interna; server error",
        });
    }
};

export const getReviewController: RequestHandler = async (req, res) => {
    try {
        const review = await reviewModel.find({})

        return res.status(200).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getReviewByIdController: RequestHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const review = await reviewModel.findById(id);

        if (!review) {
            return res.status(404).json({
                message: "review not found",
            });
        }

        return res.status(200).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }

}

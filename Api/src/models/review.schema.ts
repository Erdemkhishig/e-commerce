import mongoose from "mongoose";
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
    userId: {
        type: String,
        required: false,
    },
    productId: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: false,
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export const reviewModel = model("Review", reviewSchema)
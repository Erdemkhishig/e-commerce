import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: false,
    },
    category: {
        type: [String],
        required: false,
    },
    qty: {
        type: Number,
        required: false,
    },
    size: {
        type: String,
        required: false,
    },
    rating: {
        type: String,
        required: false,
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

export const productModel = model("Product", productSchema);
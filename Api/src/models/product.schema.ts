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
        required: false,
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
        S: {
            type: Number,
            default: 0,
        },
        M: {
            type: Number,
            default: 0,
        },
        L: {
            type: Number,
            default: 0,
        },
        XL: {
            type: Number,
            default: 0,
        },
        Free: {
            type: Number,
            default: 0,
        },
    },
    totalQty: {
        type: Number,
        default: 0, // Total quantity
    },
    size: {
        type: [String],
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


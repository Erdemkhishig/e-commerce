import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema({
    userId: {
        type: String,
        required: false,
    },
    productId: {
        type: String,
        required: false,
    },
    paid: {
        type: String,
        required: true,
    },
    address: {
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

export const orderModel = model("Order", orderSchema);
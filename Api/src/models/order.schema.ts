// import mongoose from "mongoose";
// const { Schema, model } = mongoose;

// const orderSchema = new Schema({
//     user: {
//         type: [Schema.Types.ObjectId],
//         ref: "User",
//         required: true,
//     },
//     products: {
//         type: [Schema.Types.ObjectId],
//         ref: "Product",
//         required: true,
//     },
//     size: {
//         type: String,
//         required: true,

//     },
//     qty: {
//         type: String,
//         required: true,
//     },
//     totalPrice: {
//         type: String,
//         required: true,
//     },
//     status: {
//         type: String,
//         required: true,
//     },
//     address: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         required: true,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         required: true,
//         default: Date.now,
//     },
// });

import mongoose, { model, Schema } from "mongoose";

const orderProductSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        size: {
            type: String,
            enum: ["FREE", "S", "M", "L", "XL"],
        },
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        status: {
            type: String,
            enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
            default: "Pending",
            require: true,
        },
        address: {
            type: String,
            require: true,
        },
        isPaid: {
            type: Boolean,
            required: false,
        },
        products: {
            type: [orderProductSchema],
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
            min: [0, "Total price cannot be negative"],
        },
    },
    { timestamps: true }
);
export const Order = model("Order", orderSchema);


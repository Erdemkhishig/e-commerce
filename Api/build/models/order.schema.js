"use strict";
// import mongoose from "mongoose";
// const { Schema, model } = mongoose;
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
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
const mongoose_1 = __importStar(require("mongoose"));
const orderProductSchema = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { _id: false });
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.Order = (0, mongoose_1.model)("Order", orderSchema);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
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
        default: 0,
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
exports.productModel = model("Product", productSchema);

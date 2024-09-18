"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
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
exports.reviewModel = model("Review", reviewSchema);

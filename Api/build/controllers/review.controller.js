"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewByIdController = exports.getReviewController = exports.createReviewController = void 0;
const models_1 = require("../models");
const createReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, rating, comment } = req.body;
    try {
        const newReview = yield new models_1.reviewModel({
            userId,
            productId,
            rating,
            comment,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        newReview.save();
        return res.status(201).json({
            message: "review created successfully",
            newReview
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "interna; server error",
        });
    }
});
exports.createReviewController = createReviewController;
const getReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield models_1.reviewModel.find({});
        return res.status(200).json({
            review,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.getReviewController = getReviewController;
const getReviewByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const review = yield models_1.reviewModel.findById(id);
        if (!review) {
            return res.status(404).json({
                message: "review not found",
            });
        }
        return res.status(200).json({
            review,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.getReviewByIdController = getReviewByIdController;

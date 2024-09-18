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
exports.getCategoryByIdController = exports.getCategoryController = exports.createCategoryController = void 0;
const models_1 = require("../models");
const createCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, productId } = req.body;
    try {
        const newCategory = yield new models_1.categoryModel({
            name,
            productId,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        newCategory.save();
        return res.status(201).json({
            message: "category created successfully",
            newCategory
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.createCategoryController = createCategoryController;
const getCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield models_1.categoryModel.find({});
        return res.status(200).json({
            category,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
exports.getCategoryController = getCategoryController;
const getCategoryByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield models_1.categoryModel.findById(id);
        if (!category) {
            return res.status(404).json({
                message: "category not found",
            });
        }
        return res.status(200).json({
            category,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});
exports.getCategoryByIdController = getCategoryByIdController;

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
exports.getProductByIdController = exports.getProductController = exports.createProductController = void 0;
const models_1 = require("../models");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, price, image, category, color, size, rating } = req.body;
    try {
        const newProduct = yield new models_1.productModel({
            title,
            price,
            image,
            category,
            color,
            size,
            rating,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        newProduct.save();
        return res.status(201).json({
            message: "product created successfully",
            newProduct
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.createProductController = createProductController;
const getProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield models_1.productModel.find({});
        return res.status(200).json({
            product,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.getProductController = getProductController;
const getProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const product = yield models_1.productModel.findById(id);
        if (!product) {
            return res.status(404).json({
                message: "products not found",
            });
        }
        return res.status(200).json({
            product,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.getProductByIdController = getProductByIdController;

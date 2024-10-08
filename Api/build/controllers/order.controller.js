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
exports.getOrderByIdController = exports.getOrderController = exports.createOrderController = void 0;
const order_schema_1 = require("../models/order.schema");
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, paid, address } = req.body;
    try {
        const newOrder = yield new order_schema_1.Order({
            userId,
            productId,
            paid,
            address,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        newOrder.save();
        return res.status(201).json({
            message: "Order created successfully",
            newOrder
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.createOrderController = createOrderController;
const getOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_schema_1.Order.find({});
        return res.status(200).json({
            order,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.getOrderController = getOrderController;
const getOrderByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const order = yield order_schema_1.Order.findById(id);
        if (!order) {
            return res.status(404).json({
                message: "order not found",
            });
        }
        return res.status(200).json({
            order,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
});
exports.getOrderByIdController = getOrderByIdController;

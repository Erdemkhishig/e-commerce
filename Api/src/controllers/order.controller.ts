import { RequestHandler } from "express";
import { orderModel } from "../models/order.schema";

export const createOrderController: RequestHandler = async (req, res) => {
    const { userId, productId, paid, address } = req.body;
    try {
        const newOrder = await new orderModel({
            userId,
            productId,
            paid,
            address,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        newOrder.save()
        return res.status(201).json({
            message: "Order created successfully",
            newOrder
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getOrderController: RequestHandler = async (req, res) => {
    try {
        const order = await orderModel.find({})

        return res.status(200).json({
            order,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const getOrderByIdController: RequestHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await orderModel.findById(id);

        if (!order) {
            return res.status(404).json({
                message: "order not found",
            });
        }

        return res.status(200).json({
            order,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

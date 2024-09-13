import { Router } from "express";
import {
    createOrderController,
    getOrderController,
    getOrderByIdController,
} from "../controllers"

const orderRouter = Router();

orderRouter
    .post("/", createOrderController)
    .get("/", getOrderController)
    .get("/", getOrderByIdController)

export { orderRouter };
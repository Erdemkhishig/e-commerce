"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const orderRouter = (0, express_1.Router)();
exports.orderRouter = orderRouter;
orderRouter
    .post("/", controllers_1.createOrderController)
    .get("/", controllers_1.getOrderController)
    .get("/", controllers_1.getOrderByIdController);

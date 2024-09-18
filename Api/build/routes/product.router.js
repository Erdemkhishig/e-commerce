"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter
    .post("/", controllers_1.createProductController)
    .get("/", controllers_1.getProductController)
    .get("/:id", controllers_1.getProductByIdController);

import { Router } from "express";
import {
    getProductByIdController,
    getProductController,
    createProductController,
} from "../controllers";

const productRouter = Router();

productRouter
    .post("/", createProductController)
    .get("/", getProductController)
    .get("/:id", getProductByIdController);

export { productRouter };
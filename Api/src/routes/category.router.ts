import { Router } from "express";
import {
    getCategoryByIdController,
    getCategoryController,
    createCategoryController,
} from "../controllers";

const categoryRouter = Router();

categoryRouter
    .post("/", createCategoryController)
    .get("/", getCategoryController)
    .get("/", getCategoryByIdController);

export { categoryRouter };
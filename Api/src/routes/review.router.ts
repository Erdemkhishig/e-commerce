import { Router } from "express";
import {
    createReviewController,
    getReviewController,
    getReviewByIdController,
} from "../controllers"

const reviewRouter = Router();

reviewRouter
    .post("/", createReviewController)
    .get("/", getReviewController)
    .get("/:id", getReviewByIdController)

export { reviewRouter };
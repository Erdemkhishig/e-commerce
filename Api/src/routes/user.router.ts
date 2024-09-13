import { Router } from "express";
import {
    register,
    login
} from "../controllers"

const userRouter = Router();

userRouter.post("/login", login).post("/register", register);

export { userRouter };


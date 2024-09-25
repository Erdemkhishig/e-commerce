
import { Router } from "express";
import {
    register,
    login
} from "../controllers"

const authRouter = Router();

authRouter.post("/login", login).post("/register", register);
export { authRouter }



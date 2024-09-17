import { getMe } from "../controllers";

const { Router } = require("express");

const authRouter = Router();

authRouter.get("/me", getMe);

export { authRouter };



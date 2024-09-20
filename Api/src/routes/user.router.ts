

import { getMe } from "../controllers";

const { Router } = require("express");

const userRouter = Router();

userRouter.get("/me", getMe);

export { userRouter };


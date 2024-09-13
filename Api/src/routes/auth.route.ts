const { Router } = require("express");
const { getMe } = require("../controllers/auth.controller");

const userRouter = Router();

userRouter.get("/me", getMe);


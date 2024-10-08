"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const controllers_1 = require("../controllers");
const { Router } = require("express");
const userRouter = Router();
exports.userRouter = userRouter;
userRouter.get("/me", controllers_1.getMe);

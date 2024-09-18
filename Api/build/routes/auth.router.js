"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const controllers_1 = require("../controllers");
const { Router } = require("express");
const authRouter = Router();
exports.authRouter = authRouter;
authRouter.get("/me", controllers_1.getMe);

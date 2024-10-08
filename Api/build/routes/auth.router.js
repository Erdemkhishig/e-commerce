"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post("/login", controllers_1.login).post("/register", controllers_1.register);

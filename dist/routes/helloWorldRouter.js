"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helloWorld_1 = __importDefault(require("../controlers/helloWorld"));
const helloWorldRouter = express_1.default.Router();
helloWorldRouter.get('/hello', helloWorld_1.default);
exports.default = helloWorldRouter;

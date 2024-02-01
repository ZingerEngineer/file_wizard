"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helloWorld_1 = __importDefault(require("../controlers/helloWorld"));
const privateRoute = express_1.default.Router();
privateRoute.get('/hello_p', helloWorld_1.default);
exports.default = privateRoute;

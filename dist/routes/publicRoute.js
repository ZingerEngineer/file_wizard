"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helloWorldRouter_1 = __importDefault(require("./helloWorldRouter"));
const publicRoute = express_1.default.Router();
publicRoute.use('/', helloWorldRouter_1.default);
exports.default = publicRoute;

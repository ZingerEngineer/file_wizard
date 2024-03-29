"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../controlers/auth"));
const privateRoute = express_1.default.Router();
privateRoute.get('/', auth_1.default);
exports.default = privateRoute;

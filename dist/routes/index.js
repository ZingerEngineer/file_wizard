"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const publicRoutes_1 = __importDefault(require("./publicRoutes"));
const privateRoutes_1 = __importDefault(require("./privateRoutes"));
const fileRouter_1 = __importDefault(require("./fileRouter"));
const privateRoutesValidator_1 = __importDefault(require("../middlewares/privateRoutesValidator"));
const router = express_1.default.Router();
router.use('/', publicRoutes_1.default);
router.use('/private', privateRoutesValidator_1.default, privateRoutes_1.default);
router.use('/file', fileRouter_1.default);
exports.default = router;

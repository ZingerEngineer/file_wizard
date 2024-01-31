"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const publicRoute_1 = __importDefault(require("./publicRoute"));
const privateRoute_1 = __importDefault(require("./privateRoute"));
const fileRouter_1 = __importDefault(require("./fileRouter"));
const router = express_1.default.Router();
router.use('/', publicRoute_1.default);
router.use('/private', privateRoute_1.default);
router.use('/file', fileRouter_1.default);
exports.default = router;

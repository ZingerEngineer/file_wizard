"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __importDefault(require("../schemas/token"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const internal_token = process.env.INTERNALTOKEN;
const tokenValidation = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const isValid = yield token_1.default.validate(token);
    return isValid && token === internal_token ? 1 : 0;
});
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const internal_token = req.headers['internal_token'];
        if (typeof internal_token != 'string') {
            res.status(401).json('Token was not found');
            return;
        }
        const validationValue = yield tokenValidation(internal_token);
        validationValue
            ? next()
            : res
                .status(401)
                .json('Access denied.')
                .redirect('http://localhost:3001/');
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            console.dir(error);
        }
        console.log('Validation failed.');
    }
});
exports.default = auth;

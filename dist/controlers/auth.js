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
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../actions/auth");
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const internal_token = req.headers['internal_token'];
        if (typeof internal_token != 'string') {
            res.status(401).json('Token was not found');
            return;
        }
        console.log(internal_token);
        const validationValue = yield (0, auth_1.authValidation)(internal_token);
        validationValue
            ? res.status(200).json('Welcome.')
            : res.status(401).json('Access denied.');
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

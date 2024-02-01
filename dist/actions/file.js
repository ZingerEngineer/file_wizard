"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const fs_1 = __importDefault(require("fs"));
const uploadFile = (buffer, fileName, extension) => {
    let isSuccessful = 1;
    fs_1.default.writeFile(`./uploads/${fileName}.${extension}`, buffer, (err) => {
        if (err) {
            isSuccessful = 0;
            console.log(err);
        }
    });
    console.log(isSuccessful);
    return isSuccessful;
};
exports.uploadFile = uploadFile;
const writeFile = () => { };
const readFile = () => { };

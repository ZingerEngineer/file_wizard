"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const fs_1 = __importDefault(require("fs"));
const uploadFile = () => {
    let fileBuffer = null;
    let isSuccessful = 1;
    fs_1.default.readFile('C:/Users/ramye/Desktop/downloade.png', (err, data) => {
        if (err) {
            isSuccessful = 0;
            console.log(err);
        }
        fileBuffer = data;
        console.log('File is ready.');
        fs_1.default.writeFile(`file.png`, fileBuffer, (err) => {
            if (err) {
                isSuccessful = 0;
                console.log(err);
            }
        });
    });
    return isSuccessful;
};
exports.uploadFile = uploadFile;
const writeFile = () => { };
const readFile = () => { };

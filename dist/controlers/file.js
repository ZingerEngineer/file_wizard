"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileControler = void 0;
const file_1 = require("../actions/file");
const mime_types_1 = __importDefault(require("mime-types"));
const uploadFileControler = (req, res) => {
    if (!req.file) {
        throw new Error('Error happened.');
    }
    const reqBuffer = req.file.buffer;
    const extension = mime_types_1.default.extension(req.file.mimetype);
    const fileName = `file_${Date.now()}`;
    if (!extension)
        throw new Error('Unsupported file type.');
    const isSuccessful = (0, file_1.uploadFile)(reqBuffer, fileName, extension);
    isSuccessful
        ? res.status(200).json('Uploaded file successfully.')
        : res.status(400).json('Upload failed.');
};
exports.uploadFileControler = uploadFileControler;

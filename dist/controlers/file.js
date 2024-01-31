"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileControler = void 0;
const file_1 = require("../actions/file");
const uploadFileControler = (req, res) => {
    const isSuccessful = (0, file_1.uploadFile)();
    isSuccessful
        ? res.status(200).json('Uploaded file successfully.')
        : res.status(400).json('Upload failed.');
};
exports.uploadFileControler = uploadFileControler;

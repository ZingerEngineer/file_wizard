"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileFromURLController = exports.uploadFileController = void 0;
const file_1 = require("../actions/file");
const mime_types_1 = __importDefault(require("mime-types"));
const uploadFileController = (req, res) => {
    if (!req.file) {
        console.log({ message: 'Error occured.', cause: 'Missing the file.' });
        res.status(400).redirect('/');
        return;
    }
    const reqBuffer = req.file.buffer;
    const extension = mime_types_1.default.extension(req.file.mimetype);
    const fileName = `file_${Date.now()}`;
    if (!extension) {
        console.log({ message: 'Error occured.', cause: 'Unsupported extension.' });
        res.status(400).redirect('/');
        return;
    }
    (0, file_1.uploadFile)(reqBuffer, fileName, extension, (isSuccessful, fileURL) => {
        if (!isSuccessful && !fileURL) {
            console.log({
                message: 'Error occured.',
                cause: 'Empty upload results.'
            });
            return res.status(400).redirect('/');
        }
        if (!fileURL) {
            console.log({
                message: 'Error occured.',
                cause: 'Empty file url.',
                fileURL
            });
            return res.status(400).redirect('/');
        }
        isSuccessful
            ? res
                .setHeader('fileURL', fileURL)
                .status(200)
                .json({ message: 'Uploaded file successfully.', fileURL })
            : res.status(400).json('Upload failed.');
    });
};
exports.uploadFileController = uploadFileController;
const getFileFromURLController = (req, res) => {
    const fileNumber = req.query['file'];
    if (typeof fileNumber !== 'string') {
        return res.status(400).redirect('/');
    }
    (0, file_1.getFile)(fileNumber, (isSuccessful, file) => {
        isSuccessful
            ? res.status(200).json({ isSuccessful, file })
            : res.status(400).redirect('/');
    });
};
exports.getFileFromURLController = getFileFromURLController;

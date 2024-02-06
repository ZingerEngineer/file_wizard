"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const node_fs_1 = require("node:fs");
const uploadFileCallback = () => { };
const uploadFile = (buffer, fileName, extension, cb) => {
    let isSuccessful = 1;
    let fileURL = null;
    (0, node_fs_1.writeFile)(`./uploads/${fileName}.${extension}`, buffer, (err) => {
        if (err) {
            isSuccessful = 0;
            console.log({
                message: err.message,
                code: err.code,
                cause: 'Write file was unsuccessful.'
            });
        }
        fileURL = new URL(`http://localhost:3001/file?file:${fileName.split('_')[1]}`).href;
        cb(isSuccessful, fileURL);
    });
};
exports.uploadFile = uploadFile;
const getFileFromURL = (URL) => { };
const wr = () => { };
const readFile = () => { };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = exports.uploadFile = void 0;
const node_fs_1 = require("node:fs");
const uploadFile = (buffer, fileName, extension, cb) => {
    let isSuccessful = 0;
    let fileURL = null;
    (0, node_fs_1.writeFile)(`./uploads/${fileName}.${extension}`, buffer, (err) => {
        if (err) {
            console.log({
                message: err.message,
                code: err.code,
                cause: 'Write file was unsuccessful.'
            });
            cb(isSuccessful, fileURL);
        }
        isSuccessful = 1;
        fileURL = new URL(`http://localhost:3001/file/file?file=${fileName.split('_')[1]}`).href;
        cb(isSuccessful, fileURL);
    });
};
exports.uploadFile = uploadFile;
const getFile = (fileNumber, cb) => {
    let isSuccessful = 0;
    let file = null;
    (0, node_fs_1.readdir)('./uploads', (readDirErr, readDirData) => {
        if (readDirErr) {
            console.log({ message: 'Error reading directory.' });
            cb(isSuccessful, file);
        }
        const fileName = readDirData.filter((f) => f.includes(fileNumber))[0];
        (0, node_fs_1.readFile)(`./uploads/${fileName}`, (readFileErr, readFileData) => {
            if (readFileErr) {
                isSuccessful = 0;
                console.log('Error reading file.');
                cb(isSuccessful, null);
            }
            isSuccessful = 1;
            file = readFileData;
            cb(isSuccessful, file);
        });
    });
};
exports.getFile = getFile;
const wr = () => { };
const readFile2 = () => { };

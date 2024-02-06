"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const uploadFile = (buffer, fileName, extension) => {
    let isSuccessful = 1;
    let fileURL = '';
    writeFile(`./uploads/${fileName}.${extension}`, buffer, (err) => {
        if (err) {
            isSuccessful = 0;
            console.log(err);
        }
        else {
            fileURL = new URL(`http://localhost:3001/file?file:${fileName.split('_')[1]}`).href;
        }
    });
    return { isSuccessful, fileURL };
};
exports.uploadFile = uploadFile;
const writeFile = () => { };
const readFile = () => { };

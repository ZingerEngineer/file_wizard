"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_1 = require("../controlers/file");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    dest: 'uploads/',
    storage: storage,
    fileFilter: (req, file, cb) => {
        let currentMimeType = file.mimetype;
        if (currentMimeType.split('/')[0] === 'image' ||
            currentMimeType.split('/')[0] === 'audio' ||
            currentMimeType.split('/')[0] === 'video' ||
            currentMimeType.split('/')[0] === 'text') {
            cb(null, true);
        }
        cb(null, false);
    }
});
const fileRouter = express_1.default.Router();
fileRouter.post('/up_file', upload.single('File'), file_1.uploadFileController);
fileRouter.get('/file', file_1.getFileFromURLController);
exports.default = fileRouter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloWorld = (req, res) => {
    res.json({
        message: 'Hello World.'
    });
};
exports.default = helloWorld;

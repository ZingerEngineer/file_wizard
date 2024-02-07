"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSearchParams_1 = require("./getSearchParams");
describe('testing util functions', () => {
    test('Query params testing...', () => {
        expect((0, getSearchParams_1.getOneSearchParam)('http://localhost:3000/file?file=1231312321')).toEqual({ file: '1231312321' });
    });
});

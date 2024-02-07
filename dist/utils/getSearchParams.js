"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchParams = exports.getOneSearchParam = void 0;
const getOneSearchParam = (incomingURL) => {
    try {
        const searchParamArray = new URL(incomingURL).searchParams
            .toString()
            .split('=');
        const paramObject = { [searchParamArray[0]]: searchParamArray[1] };
        return paramObject;
    }
    catch (error) {
        console.log({
            message: 'Invalid search param.'
        });
        return;
    }
};
exports.getOneSearchParam = getOneSearchParam;
const getSearchParams = (incomingURL) => {
    let searchParamsArray = [];
    try {
        const searchParams = new URL(incomingURL).searchParams.forEach((key, value) => {
            searchParamsArray.push({
                [key]: value
            });
        });
        return searchParamsArray;
    }
    catch (error) {
        console.log({
            message: 'Invalid search param.'
        });
        return;
    }
};
exports.getSearchParams = getSearchParams;

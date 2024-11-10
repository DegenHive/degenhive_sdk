"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StableMathsFunctions = exports.WeightedMathsFunctions = exports.CurvedMathsFunctions = exports.poolmaths = void 0;
var poolmaths;
(function (poolmaths) {
    poolmaths.PACKAGE_ID = "0x6c442d664dffc25e3fda48f15370ffaecac1f94ecb6debb46cd41ac4b38bddfa";
    poolmaths.PUBLISHED_AT = "0x6c442d664dffc25e3fda48f15370ffaecac1f94ecb6debb46cd41ac4b38bddfa";
    poolmaths.PKG_V1 = "0x6c442d664dffc25e3fda48f15370ffaecac1f94ecb6debb46cd41ac4b38bddfa";
})(poolmaths || (exports.poolmaths = poolmaths = {}));
exports.CurvedMathsFunctions = require("./curved-math/functions");
exports.WeightedMathsFunctions = require("./weighted-math/functions");
exports.StableMathsFunctions = require("./stable-math/functions");

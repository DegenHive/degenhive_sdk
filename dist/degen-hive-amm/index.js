"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twopool = void 0;
var twopool;
(function (twopool) {
    twopool.PACKAGE_ID = "0x77855360f1230d599de98e888baeeb842ff9413103da31d09665bcf7dbc05bed";
    twopool.PUBLISHED_AT = "0x22d82cfe023a1c651f8b1018775efc7c678781dbd72ec94df34028c472db8d9d";
    twopool.PKG_V1 = "0x77855360f1230d599de98e888baeeb842ff9413103da31d09665bcf7dbc05bed";
})(twopool || (exports.twopool = twopool = {}));
__exportStar(require("./two-pool/functions"), exports);

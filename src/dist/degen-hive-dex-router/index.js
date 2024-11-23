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
exports.dex = void 0;
var dex;
(function (dex) {
    dex.PACKAGE_ID = "0x950cafef35150568f2b7b9b5cb911656dc5b18ffa1b60fcb8263b2845b3dc0b9";
    dex.PUBLISHED_AT = "0x950cafef35150568f2b7b9b5cb911656dc5b18ffa1b60fcb8263b2845b3dc0b9";
    dex.PKG_V1 = "0x950cafef35150568f2b7b9b5cb911656dc5b18ffa1b60fcb8263b2845b3dc0b9";
    dex.TWO_POOL_REGISTRY = "0xefd672db3df3885a8745803f0ede200402dba2e8cecea9bf62ce7a411e004a5d";
    dex.THREE_POOL_REGISTRY = "0xb7c5c13c91397d411ba3dbba36505b9e843885e5c2ed00cf6ba235890d9a8af5";
    dex.YIELD_FLOW = "0x5a79f26a90cf6a652cf45ad3dfbe1e3565503e70d866e3149292ccbc8fcd1420";
    dex.CLOCK = "0x6";
    dex.SUI_FEE_COLLECTOR = "0x641176d85a5275c2f61e2980defbed0351e9fc37acf356de87cc5336ccb167d9";
})(dex || (exports.dex = dex = {}));
__exportStar(require("./router/functions"), exports);

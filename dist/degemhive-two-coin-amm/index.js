"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleFunction = exports.TwoPoolFunctions = exports.HoneyTradeFunctions = exports.twopool = void 0;
var twopool;
(function (twopool) {
    twopool.PACKAGE_ID = "0x1609ad341cc5ef030d782ee7c2d84070d0768c6cede910e216c3ff1873a84bc1";
    twopool.PUBLISHED_AT = "0x1609ad341cc5ef030d782ee7c2d84070d0768c6cede910e216c3ff1873a84bc1";
    twopool.PKG_V1 = "0x1609ad341cc5ef030d782ee7c2d84070d0768c6cede910e216c3ff1873a84bc1";
})(twopool || (exports.twopool = twopool = {}));
exports.HoneyTradeFunctions = require("./honey-trade/functions");
exports.TwoPoolFunctions = require("./two-pool/functions");
exports.OracleFunction = require("./oracle/functions");
// export { RemoveLiquidityFromXBeePoolArgs, SwapBeeCoinsArgs, removeLiquidityFromXBeePool, swapBeeCoins } from './two-pool/functions';

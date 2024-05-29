"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeighted = exports.isValidCurve = exports.isStable = exports.isCurved = exports.assertValidCurve = void 0;
const __1 = require("..");
// export function init( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curves::init`, arguments: [ ], }) }
function assertValidCurve(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::assert_valid_curve`, typeArguments: [typeArg], arguments: [], }); }
exports.assertValidCurve = assertValidCurve;
function isCurved(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::is_curved`, typeArguments: [typeArg], arguments: [], }); }
exports.isCurved = isCurved;
function isStable(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::is_stable`, typeArguments: [typeArg], arguments: [], }); }
exports.isStable = isStable;
function isValidCurve(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::is_valid_curve`, typeArguments: [typeArg], arguments: [], }); }
exports.isValidCurve = isValidCurve;
function isWeighted(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::is_weighted`, typeArguments: [typeArg], arguments: [], }); }
exports.isWeighted = isWeighted;

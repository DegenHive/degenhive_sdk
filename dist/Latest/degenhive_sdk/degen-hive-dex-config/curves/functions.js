"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.assertValidCurve = assertValidCurve;
exports.isCurved = isCurved;
exports.isStable = isStable;
exports.isValidCurve = isValidCurve;
exports.isWeighted = isWeighted;
const __1 = require("..");
function init(txb) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::init`, arguments: [], }); }
function assertValidCurve(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::assert_valid_curve`, typeArguments: [typeArg], arguments: [], }); }
function isCurved(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::is_curved`, typeArguments: [typeArg], arguments: [], }); }
function isStable(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::is_stable`, typeArguments: [typeArg], arguments: [], }); }
function isValidCurve(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::is_valid_curve`, typeArguments: [typeArg], arguments: [], }); }
function isWeighted(txb, typeArg) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::curves::is_weighted`, typeArguments: [typeArg], arguments: [], }); }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertValidCurve = assertValidCurve;
exports.isCurved = isCurved;
exports.isStable = isStable;
exports.isValidCurve = isValidCurve;
exports.isWeighted = isWeighted;
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
function assertValidCurve(tx, typeArg) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::assert_valid_curve`, typeArguments: [typeArg], arguments: [], }); }
function isCurved(tx, typeArg) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::is_curved`, typeArguments: [typeArg], arguments: [], }); }
function isStable(tx, typeArg) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::is_stable`, typeArguments: [typeArg], arguments: [], }); }
function isValidCurve(tx, typeArg) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::is_valid_curve`, typeArguments: [typeArg], arguments: [], }); }
function isWeighted(tx, typeArg) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::is_weighted`, typeArguments: [typeArg], arguments: [], }); }

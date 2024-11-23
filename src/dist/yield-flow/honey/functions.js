"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.getTotalHoneySupply = getTotalHoneySupply;
exports.setConsumptionPct = setConsumptionPct;
exports.setRules = setRules;
exports.transferHoney = transferHoney;
exports.transferHoneyBalance = transferHoneyBalance;
exports.unwrapHoneyTokensToCoins = unwrapHoneyTokensToCoins;
exports.verify = verify;
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
const util_1 = require("../../_framework/util");
function init(tx, witnessBee) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::init`, arguments: [(0, util_1.obj)(tx, witnessBee)], }); }
function getTotalHoneySupply(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::get_total_honey_Supply`, arguments: [], }); }
function setConsumptionPct(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::set_consumption_pct`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.newBurnPcts)], }); }
function setRules(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::set_rules`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap)], }); }
function transferHoney(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::transfer_honey`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.honeyToken), (0, util_1.obj)(tx, args.honeyPolicyCap), (0, util_1.obj)(tx, args.policy), (0, util_1.pure)(tx, args.transferAmt, `u64`), (0, util_1.pure)(tx, args.receipient, `address`)], }); }
function transferHoneyBalance(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::transfer_honey_balance`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.honeyPolicyCap), (0, util_1.obj)(tx, args.honeyBalance), (0, util_1.pure)(tx, args.recepient, `address`)], }); }
function unwrapHoneyTokensToCoins(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::unwrap_honey_tokens_to_coins`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.honeyToken), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.policy), (0, util_1.pure)(tx, args.toCoinAmt, `u64`)], }); }
function verify(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey::verify`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.request)], }); }

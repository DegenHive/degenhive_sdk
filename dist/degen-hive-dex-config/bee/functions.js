"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalBeeSupply = getTotalBeeSupply;
exports.setBurnPercent = setBurnPercent;
exports.setRules = setRules;
exports.transferBees = transferBees;
exports.transferBeesBalance = transferBeesBalance;
exports.unwrapBeeTokensToCoins = unwrapBeeTokensToCoins;
exports.verify = verify;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.config.PUBLISHED_AT;
// export function init( txb: TransactionBlock, witnessBee: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::init`, arguments: [ obj(txb, witnessBee) ], }) }
function getTotalBeeSupply(txb) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::get_total_bee_Supply`, arguments: [], }); }
function setBurnPercent(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::set_burn_percent`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.policy), (0, util_1.obj)(txb, args.policyCap), (0, util_1.obj)(txb, args.newBurnPcts)], }); }
function setRules(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::set_rules`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.policy), (0, util_1.obj)(txb, args.policyCap)], }); }
function transferBees(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::transfer_bees`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.beeToken), (0, util_1.obj)(txb, args.beePolicyCap), (0, util_1.obj)(txb, args.policy), (0, util_1.pure)(txb, args.transferAmt, `u64`), (0, util_1.pure)(txb, args.receipient, `address`)], }); }
function transferBeesBalance(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::transfer_bees_balance`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.policy), (0, util_1.obj)(txb, args.beePolicyCap), (0, util_1.obj)(txb, args.beesBalance), (0, util_1.pure)(txb, args.recepient, `address`)], }); }
function unwrapBeeTokensToCoins(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::unwrap_bee_tokens_to_coins`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.beeToken), (0, util_1.obj)(txb, args.policyCap), (0, util_1.obj)(txb, args.policy), (0, util_1.pure)(txb, args.toCoinAmt, `u64`)], }); }
function verify(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::verify`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.policy), (0, util_1.obj)(txb, args.request)], }); }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.unwrapBeeTokensToCoins = exports.transferBeesBalance = exports.transferBees = exports.setRules = exports.setBurnPercent = exports.getTotalBeeSupply = void 0;
const __1 = require("..");
const util_1 = require("../../_framework/util");
// export function init( txb: TransactionBlock, witnessBee: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::bee::init`, arguments: [ obj(txb, witnessBee) ], }) }
function getTotalBeeSupply(txb) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::bee::get_total_bee_Supply`, arguments: [], }); }
exports.getTotalBeeSupply = getTotalBeeSupply;
function setBurnPercent(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::bee::set_burn_percent`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.policy), (0, util_1.obj)(txb, args.policyCap), (0, util_1.obj)(txb, args.newBurnPcts)], }); }
exports.setBurnPercent = setBurnPercent;
function setRules(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::bee::set_rules`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.policy), (0, util_1.obj)(txb, args.policyCap)], }); }
exports.setRules = setRules;
function transferBees(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::bee::transfer_bees`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.beeToken), (0, util_1.obj)(txb, args.beePolicyCap), (0, util_1.obj)(txb, args.policy), (0, util_1.pure)(txb, args.transferAmt, `u64`), (0, util_1.pure)(txb, args.receipient, `address`)], }); }
exports.transferBees = transferBees;
function transferBeesBalance(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::bee::transfer_bees_balance`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.policy), (0, util_1.obj)(txb, args.beePolicyCap), (0, util_1.obj)(txb, args.beesBalance), (0, util_1.pure)(txb, args.recepient, `address`)], }); }
exports.transferBeesBalance = transferBeesBalance;
function unwrapBeeTokensToCoins(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::bee::unwrap_bee_tokens_to_coins`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.beeToken), (0, util_1.obj)(txb, args.policyCap), (0, util_1.obj)(txb, args.policy), (0, util_1.pure)(txb, args.toCoinAmt, `u64`)], }); }
exports.unwrapBeeTokensToCoins = unwrapBeeTokensToCoins;
function verify(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::bee::verify`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.policy), (0, util_1.obj)(txb, args.request)], }); }
exports.verify = verify;

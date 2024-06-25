"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyOrTransferBalance = destroyOrTransferBalance;
exports.depositIntoBeeBox0Fruits = depositIntoBeeBox0Fruits;
exports.depositIntoBeeBox1Fruits = depositIntoBeeBox1Fruits;
exports.depositIntoBeeBox2Fruits = depositIntoBeeBox2Fruits;
exports.depositIntoBeeBox3Fruits = depositIntoBeeBox3Fruits;
exports.unbondFromBeeBox0Fruits = unbondFromBeeBox0Fruits;
exports.unbondFromBeeBox1Fruits = unbondFromBeeBox1Fruits;
exports.unbondFromBeeBox2Fruits = unbondFromBeeBox2Fruits;
exports.unbondFromBeeBox3Fruits = unbondFromBeeBox3Fruits;
exports.unlockFromBeeBox = unlockFromBeeBox;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.dexdao.PUBLISHED_AT;
function destroyOrTransferBalance(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::destroy_or_transfer_balance`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.balance), (0, util_1.pure)(txb, args.recipient, `address`)], }); }
function depositIntoBeeBox0Fruits(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::deposit_into_bee_box_0_fruits`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.lpToken), (0, util_1.pure)(txb, args.amount, `u64`)], }); }
function depositIntoBeeBox1Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::deposit_into_bee_box_1_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.lpToken), (0, util_1.pure)(txb, args.amount, `u64`)], }); }
function depositIntoBeeBox2Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::deposit_into_bee_box_2_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.lpToken), (0, util_1.pure)(txb, args.amount, `u64`)], }); }
function depositIntoBeeBox3Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::deposit_into_bee_box_3_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.lpToken), (0, util_1.pure)(txb, args.amount, `u64`)], }); }
function unbondFromBeeBox0Fruits(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_bee_box_0_fruits`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.unbondAmount, `u64`)], }); }
function unbondFromBeeBox1Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_bee_box_1_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.unbondAmount, `u64`)], }); }
function unbondFromBeeBox2Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_bee_box_2_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.unbondAmount, `u64`)], }); }
function unbondFromBeeBox3Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_bee_box_3_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.unbondAmount, `u64`)], }); }
function unlockFromBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unlock_from_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile)], }); }

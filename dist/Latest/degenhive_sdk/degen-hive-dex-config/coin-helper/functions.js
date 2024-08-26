"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmpTypeNames = cmpTypeNames;
exports.createVector = createVector;
exports.destroyOrTransferBalance = destroyOrTransferBalance;
exports.getAssetIndexAndAmount = getAssetIndexAndAmount;
exports.getIndexAssetPrecision2pool = getIndexAssetPrecision2pool;
exports.getIndexAssetPrecision3pool = getIndexAssetPrecision3pool;
exports.isSorted = isSorted;
exports.isSorted2 = isSorted2;
exports.isSorted3 = isSorted3;
exports.isSorted4 = isSorted4;
exports.isSorted5 = isSorted5;
exports.processCoinBalancesProcessingForSwap = processCoinBalancesProcessingForSwap;
exports.u64ToAscii = u64ToAscii;
exports.validCurvedCoins2Pool = validCurvedCoins2Pool;
exports.validCurvedCoins3Pool = validCurvedCoins3Pool;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function cmpTypeNames(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::cmp_type_names`, arguments: [(0, util_1.obj)(txb, args.a), (0, util_1.obj)(txb, args.b)], }); }
function createVector(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::create_vector`, arguments: [(0, util_1.pure)(txb, args.a, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.b, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.c, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.d, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.e, `0x1::option::Option<u64>`)], }); }
function destroyOrTransferBalance(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::destroy_or_transfer_balance`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.balance), (0, util_1.pure)(txb, args.recipient, `address`)], }); }
function getAssetIndexAndAmount(txb, assets) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::get_asset_index_and_amount`, arguments: [(0, util_1.pure)(txb, assets, `vector<u64>`)], }); }
function getIndexAssetPrecision2pool(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::get_index_asset_precision2Pool`, arguments: [(0, util_1.pure)(txb, args.xDecimals, `u8`), (0, util_1.pure)(txb, args.yDecimals, `u8`), (0, util_1.pure)(txb, args.index, `u64`)], }); }
function getIndexAssetPrecision3pool(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::get_index_asset_precision3Pool`, arguments: [(0, util_1.pure)(txb, args.xDecimals, `u8`), (0, util_1.pure)(txb, args.yDecimals, `u8`), (0, util_1.pure)(txb, args.zDecimals, `u8`), (0, util_1.pure)(txb, args.index, `u64`)], }); }
function isSorted(txb, typeArgs) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::is_sorted`, typeArguments: typeArgs, arguments: [], }); }
function isSorted2(txb, typeArgs) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::is_sorted_2`, typeArguments: typeArgs, arguments: [], }); }
function isSorted3(txb, typeArgs) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::is_sorted_3`, typeArguments: typeArgs, arguments: [], }); }
function isSorted4(txb, typeArgs) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::is_sorted_4`, typeArguments: typeArgs, arguments: [], }); }
function isSorted5(txb, typeArgs) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::is_sorted_5`, typeArguments: typeArgs, arguments: [], }); }
function processCoinBalancesProcessingForSwap(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::process_coin_balances_processing_for_swap`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.coinInReserve), (0, util_1.obj)(txb, args.coinIn), (0, util_1.pure)(txb, args.offerAmount, `u64`), (0, util_1.obj)(txb, args.coinOutReserve), (0, util_1.obj)(txb, args.coinOut), (0, util_1.pure)(txb, args.askAmount, `u64`), (0, util_1.pure)(txb, args.feeChargedVal, `u64`), (0, util_1.pure)(txb, args.hiveFeePercent, `u64`)], }); }
function u64ToAscii(txb, num) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::u64_to_ascii`, arguments: [(0, util_1.pure)(txb, num, `u64`)], }); }
function validCurvedCoins2Pool(txb, typeArgs, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::valid_curved_coins_2_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, config)], }); }
function validCurvedCoins3Pool(txb, typeArgs, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::coin_helper::valid_curved_coins_3_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, config)], }); }

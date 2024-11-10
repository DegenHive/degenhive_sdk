"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmpTypeNames = cmpTypeNames;
exports.createVector = createVector;
exports.destroyOrTransferBalance = destroyOrTransferBalance;
exports.getAssetIndexAndAmount = getAssetIndexAndAmount;
exports.getIndexAssetPrecision2pool = getIndexAssetPrecision2pool;
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
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
const structs_1 = require("../../_dependencies/source/0x1/option/structs");
const util_1 = require("../../_framework/util");
function cmpTypeNames(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::cmp_type_names`, arguments: [(0, util_1.obj)(tx, args.a), (0, util_1.obj)(tx, args.b)], }); }
function createVector(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::create_vector`, arguments: [(0, util_1.pure)(tx, args.a, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.b, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.c, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.d, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.e, `${structs_1.Option.$typeName}<u64>`)], }); }
function destroyOrTransferBalance(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::destroy_or_transfer_balance`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.balance), (0, util_1.pure)(tx, args.recipient, `address`)], }); }
function getAssetIndexAndAmount(tx, assets) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::get_asset_index_and_amount`, arguments: [(0, util_1.pure)(tx, assets, `vector<u64>`)], }); }
function getIndexAssetPrecision2pool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::get_index_asset_precision2Pool`, arguments: [(0, util_1.pure)(tx, args.xDecimals, `u8`), (0, util_1.pure)(tx, args.yDecimals, `u8`), (0, util_1.pure)(tx, args.index, `u64`)], }); }
function isSorted(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted`, typeArguments: typeArgs, arguments: [], }); }
function isSorted2(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_2`, typeArguments: typeArgs, arguments: [], }); }
function isSorted3(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_3`, typeArguments: typeArgs, arguments: [], }); }
function isSorted4(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_4`, typeArguments: typeArgs, arguments: [], }); }
function isSorted5(tx, typeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::is_sorted_5`, typeArguments: typeArgs, arguments: [], }); }
function processCoinBalancesProcessingForSwap(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::process_coin_balances_processing_for_swap`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.coinInReserve), (0, util_1.obj)(tx, args.coinIn), (0, util_1.pure)(tx, args.offerAmount, `u64`), (0, util_1.obj)(tx, args.coinOutReserve), (0, util_1.obj)(tx, args.coinOut), (0, util_1.pure)(tx, args.askAmount, `u64`), (0, util_1.pure)(tx, args.feeChargedVal, `u64`), (0, util_1.pure)(tx, args.beesFeePct, `u64`)], }); }
function u64ToAscii(tx, num) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::u64_to_ascii`, arguments: [(0, util_1.pure)(tx, num, `u64`)], }); }
function validCurvedCoins2Pool(tx, typeArgs, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::valid_curved_coins_2_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function validCurvedCoins3Pool(tx, typeArgs, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::coin_helper::valid_curved_coins_3_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }

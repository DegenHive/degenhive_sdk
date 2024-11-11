"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.calculateTwap = calculateTwap;
exports.destroySnapshot = destroySnapshot;
exports.incrementOracle = incrementOracle;
exports.queryAcrossAllSnapshots = queryAcrossAllSnapshots;
exports.setupHiveOracle = setupHiveOracle;
exports.updateHiveOracle = updateHiveOracle;
exports.updateHiveOraclePrice = updateHiveOraclePrice;
const __1 = require("..");
const PUBLISHED_AT = __1.twopool.PUBLISHED_AT;
const structs_1 = require("../../_dependencies/source/0x1/option/structs");
const util_1 = require("../../_framework/util");
function init(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::init`, arguments: [], }); }
function calculateTwap(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::calculate_twap`, arguments: [(0, util_1.pure)(tx, args.latestCumulativePrice, `u256`), (0, util_1.pure)(tx, args.oldCumulativePrice, `u256`), (0, util_1.pure)(tx, args.deltaTs, `u64`)], }); }
function destroySnapshot(tx, snapshot) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::destroy_snapshot`, arguments: [(0, util_1.obj)(tx, snapshot)], }); }
function incrementOracle(tx, oracle) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::increment_oracle`, arguments: [(0, util_1.obj)(tx, oracle)], }); }
function queryAcrossAllSnapshots(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::query_across_all_snapshots`, arguments: [(0, util_1.obj)(tx, args.oracle), (0, util_1.pure)(tx, args.startFrom, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function setupHiveOracle(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::setup_hive_oracle`, arguments: [(0, util_1.obj)(tx, args.updateCap), (0, util_1.pure)(tx, args.suiHivePoolAddr, `address`), (0, util_1.pure)(tx, args.usdcSuiPoolAddr, `address`)], }); }
function updateHiveOracle(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::update_hive_oracle`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.oracle), (0, util_1.pure)(tx, args.suiHivePoolAddr, `${structs_1.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.usdcSuiPoolAddr, `${structs_1.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.newWindowSize, `u64`), (0, util_1.pure)(tx, args.newTolerance, `u64`)], }); }
function updateHiveOraclePrice(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::update_hive_oracle_price`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, args.clock), (0, util_1.obj)(tx, args.oracle), (0, util_1.obj)(tx, args.hiveGraph), (0, util_1.obj)(tx, args.usdcSuiPool), (0, util_1.obj)(tx, args.suiHivePool)], }); }

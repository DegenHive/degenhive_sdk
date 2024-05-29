"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whitelistDecimalPrecisions = exports.vaultSetupByDeployer = exports.updateTreasuryPercent = exports.updateFee = exports.updateDefaultFeeForCurve = exports.removeStableIdentifier = exports.queryStableIdentifiers = exports.queryPrecisionsForCoinTypes = exports.queryAmmFeeCollectors = exports.managerSetupByDeployer = exports.kraftHiveEntryCap = exports.isStableIdentifier = exports.isFeeCollectorPresent = exports.getWeightedPoolFeeInfo = exports.getTreasuryBalance = exports.getStablePoolFeeInfo = exports.getHiveTreasuryFeeInfo = exports.getFeeInfo = exports.getFeeCollectorId = exports.getDecimalsForCoinType = exports.getDecimalsForCoin = exports.getCurvedPoolFeeInfo = exports.extractFeeForCoin3amm = exports.extractFeeForCoin2amm = exports.entryDepositToTreasury = exports.distributeTreasuryResources = exports.depositToTreasury = exports.createFeeCollector = exports.collectFeeForCoin = exports.addStableIdentifierByType = exports.addStableIdentifier = void 0;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function addStableIdentifier(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::add_stable_identifier`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.typeNameIdentifier, `0x1::ascii::String`)], }); }
exports.addStableIdentifier = addStableIdentifier;
function addStableIdentifierByType(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::add_stable_identifier_by_type`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap)], }); }
exports.addStableIdentifierByType = addStableIdentifierByType;
function collectFeeForCoin(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::collect_fee_for_coin`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.feeCoin), (0, util_1.obj)(txb, args.feeBalance)], }); }
exports.collectFeeForCoin = collectFeeForCoin;
function createFeeCollector(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::create_fee_collector`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
exports.createFeeCollector = createFeeCollector;
function depositToTreasury(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::deposit_to_treasury`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.treasury), (0, util_1.obj)(txb, args.balanceX)], }); }
exports.depositToTreasury = depositToTreasury;
function distributeTreasuryResources(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::distribute_treasury_resources`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.obj)(txb, args.treasury), (0, util_1.pure)(txb, args.amt, `u64`), (0, util_1.pure)(txb, args.recepient, `address`)], }); }
exports.distributeTreasuryResources = distributeTreasuryResources;
function entryDepositToTreasury(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::entry_deposit_to_treasury`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.treasury), (0, util_1.obj)(txb, args.coinX), (0, util_1.pure)(txb, args.amtToDeposit, `u64`)], }); }
exports.entryDepositToTreasury = entryDepositToTreasury;
function extractFeeForCoin2amm(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::extract_fee_for_coin_2amm`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.feeCoin)], }); }
exports.extractFeeForCoin2amm = extractFeeForCoin2amm;
function extractFeeForCoin3amm(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::extract_fee_for_coin_3amm`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.feeCoin)], }); }
exports.extractFeeForCoin3amm = extractFeeForCoin3amm;
function getCurvedPoolFeeInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_curved_pool_fee_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
exports.getCurvedPoolFeeInfo = getCurvedPoolFeeInfo;
function getDecimalsForCoin(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_decimals_for_coin`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
exports.getDecimalsForCoin = getDecimalsForCoin;
function getDecimalsForCoinType(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_decimals_for_coin_type`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.token)], }); }
exports.getDecimalsForCoinType = getDecimalsForCoinType;
function getFeeCollectorId(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_fee_collector_id`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
exports.getFeeCollectorId = getFeeCollectorId;
function getFeeInfo(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_fee_info`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
exports.getFeeInfo = getFeeInfo;
function getHiveTreasuryFeeInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_hive_treasury_fee_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
exports.getHiveTreasuryFeeInfo = getHiveTreasuryFeeInfo;
function getStablePoolFeeInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_stable_pool_fee_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
exports.getStablePoolFeeInfo = getStablePoolFeeInfo;
function getTreasuryBalance(txb, typeArg, treasury) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_treasury_balance`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, treasury)], }); }
exports.getTreasuryBalance = getTreasuryBalance;
function getWeightedPoolFeeInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_weighted_pool_fee_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
exports.getWeightedPoolFeeInfo = getWeightedPoolFeeInfo;
function isFeeCollectorPresent(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::is_fee_collector_present`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
exports.isFeeCollectorPresent = isFeeCollectorPresent;
function isStableIdentifier(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::is_stable_identifier`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
exports.isStableIdentifier = isStableIdentifier;
function kraftHiveEntryCap(txb) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::kraft_hive_entry_cap`, arguments: [], }); }
exports.kraftHiveEntryCap = kraftHiveEntryCap;
function managerSetupByDeployer(txb, cap) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::manager_setup_by_deployer`, arguments: [(0, util_1.obj)(txb, cap)], }); }
exports.managerSetupByDeployer = managerSetupByDeployer;
function queryAmmFeeCollectors(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::query_amm_fee_collectors`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryAmmFeeCollectors = queryAmmFeeCollectors;
function queryPrecisionsForCoinTypes(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::query_precisions_for_coin_types`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<0x1::string::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryPrecisionsForCoinTypes = queryPrecisionsForCoinTypes;
function queryStableIdentifiers(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::query_stable_identifiers`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryStableIdentifiers = queryStableIdentifiers;
function removeStableIdentifier(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::remove_stable_identifier`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.typeNameIdentifier, `0x1::ascii::String`)], }); }
exports.removeStableIdentifier = removeStableIdentifier;
function updateDefaultFeeForCurve(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::update_default_fee_for_curve`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.totalFeeBps, `u64`), (0, util_1.pure)(txb, args.hiveFeePercent, `u64`)], }); }
exports.updateDefaultFeeForCurve = updateDefaultFeeForCurve;
function updateFee(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::update_fee`, arguments: [(0, util_1.obj)(txb, args.feeInfo), (0, util_1.pure)(txb, args.totalFeeBps, `u64`), (0, util_1.pure)(txb, args.hiveFeePercent, `u64`)], }); }
exports.updateFee = updateFee;
function updateTreasuryPercent(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::update_treasury_percent`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.newTreasuryPercent, `u64`)], }); }
exports.updateTreasuryPercent = updateTreasuryPercent;
function vaultSetupByDeployer(txb, cap) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::vault_setup_by_deployer`, arguments: [(0, util_1.obj)(txb, cap)], }); }
exports.vaultSetupByDeployer = vaultSetupByDeployer;
function whitelistDecimalPrecisions(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::whitelist_decimal_precisions`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.coinTypes, `vector<0x1::string::String>`), (0, util_1.pure)(txb, args.decimalPrecisions, `vector<u8>`)], }); }
exports.whitelistDecimalPrecisions = whitelistDecimalPrecisions;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.addStableIdentifier = addStableIdentifier;
exports.addStableIdentifierByType = addStableIdentifierByType;
exports.collectFeeForCoin = collectFeeForCoin;
exports.createFeeCollector = createFeeCollector;
exports.depositToTreasury = depositToTreasury;
exports.distributeTreasuryResources = distributeTreasuryResources;
exports.entryDepositToTreasury = entryDepositToTreasury;
exports.extractFeeForCoin2amm = extractFeeForCoin2amm;
exports.extractFeeForCoin3amm = extractFeeForCoin3amm;
exports.getCurvedPoolFeeInfo = getCurvedPoolFeeInfo;
exports.getDecimalsForCoin = getDecimalsForCoin;
exports.getDecimalsForCoinType = getDecimalsForCoinType;
exports.getFeeCollectorId = getFeeCollectorId;
exports.getFeeInfo = getFeeInfo;
exports.getHiveTreasuryFeeInfo = getHiveTreasuryFeeInfo;
exports.getStablePoolFeeInfo = getStablePoolFeeInfo;
exports.getTreasuryBalance = getTreasuryBalance;
exports.getWeightedPoolFeeInfo = getWeightedPoolFeeInfo;
exports.isFeeCollectorPresent = isFeeCollectorPresent;
exports.isStableIdentifier = isStableIdentifier;
exports.kraftHiveEntryCap = kraftHiveEntryCap;
exports.managerSetupByDeployer = managerSetupByDeployer;
exports.queryAmmFeeCollectors = queryAmmFeeCollectors;
exports.queryPrecisionsForCoinTypes = queryPrecisionsForCoinTypes;
exports.queryStableIdentifiers = queryStableIdentifiers;
exports.removeStableIdentifier = removeStableIdentifier;
exports.updateDefaultFeeForCurve = updateDefaultFeeForCurve;
exports.updateFee = updateFee;
exports.updateTreasuryPercent = updateTreasuryPercent;
exports.vaultSetupByDeployer = vaultSetupByDeployer;
exports.whitelistDecimalPrecisions = whitelistDecimalPrecisions;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function init(txb) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::init`, arguments: [], }); }
function addStableIdentifier(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::add_stable_identifier`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.typeNameIdentifier, `0x1::ascii::String`)], }); }
function addStableIdentifierByType(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::add_stable_identifier_by_type`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap)], }); }
function collectFeeForCoin(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::collect_fee_for_coin`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.feeCoin), (0, util_1.obj)(txb, args.feeBalance)], }); }
function createFeeCollector(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::create_fee_collector`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
function depositToTreasury(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::deposit_to_treasury`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.treasury), (0, util_1.obj)(txb, args.balanceX)], }); }
function distributeTreasuryResources(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::distribute_treasury_resources`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.obj)(txb, args.treasury), (0, util_1.pure)(txb, args.amt, `u64`), (0, util_1.pure)(txb, args.recepient, `address`)], }); }
function entryDepositToTreasury(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::entry_deposit_to_treasury`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.treasury), (0, util_1.obj)(txb, args.coinX), (0, util_1.pure)(txb, args.amtToDeposit, `u64`)], }); }
function extractFeeForCoin2amm(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::extract_fee_for_coin_2amm`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.feeCoin)], }); }
function extractFeeForCoin3amm(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::extract_fee_for_coin_3amm`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.feeCoin)], }); }
function getCurvedPoolFeeInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_curved_pool_fee_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
function getDecimalsForCoin(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_decimals_for_coin`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
function getDecimalsForCoinType(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_decimals_for_coin_type`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.token)], }); }
function getFeeCollectorId(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_fee_collector_id`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
function getFeeInfo(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_fee_info`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
function getHiveTreasuryFeeInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_hive_treasury_fee_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
function getStablePoolFeeInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_stable_pool_fee_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
function getTreasuryBalance(txb, typeArg, treasury) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_treasury_balance`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, treasury)], }); }
function getWeightedPoolFeeInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::get_weighted_pool_fee_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
function isFeeCollectorPresent(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::is_fee_collector_present`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
function isStableIdentifier(txb, typeArg, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::is_stable_identifier`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, config)], }); }
function kraftHiveEntryCap(txb) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::kraft_hive_entry_cap`, arguments: [], }); }
function managerSetupByDeployer(txb, cap) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::manager_setup_by_deployer`, arguments: [(0, util_1.obj)(txb, cap)], }); }
function queryAmmFeeCollectors(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::query_amm_fee_collectors`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function queryPrecisionsForCoinTypes(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::query_precisions_for_coin_types`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<0x1::string::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function queryStableIdentifiers(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::query_stable_identifiers`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function removeStableIdentifier(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::remove_stable_identifier`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.typeNameIdentifier, `0x1::ascii::String`)], }); }
function updateDefaultFeeForCurve(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::update_default_fee_for_curve`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.totalFeeBps, `u64`), (0, util_1.pure)(txb, args.hiveFeePercent, `u64`)], }); }
function updateFee(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::update_fee`, arguments: [(0, util_1.obj)(txb, args.feeInfo), (0, util_1.pure)(txb, args.totalFeeBps, `u64`), (0, util_1.pure)(txb, args.hiveFeePercent, `u64`)], }); }
function updateTreasuryPercent(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::update_treasury_percent`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.newTreasuryPercent, `u64`)], }); }
function vaultSetupByDeployer(txb, cap) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::vault_setup_by_deployer`, arguments: [(0, util_1.obj)(txb, cap)], }); }
function whitelistDecimalPrecisions(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::config::whitelist_decimal_precisions`, arguments: [(0, util_1.obj)(txb, args.config), (0, util_1.obj)(txb, args.hiveDaoCap), (0, util_1.pure)(txb, args.coinTypes, `vector<0x1::string::String>`), (0, util_1.pure)(txb, args.decimalPrecisions, `vector<u8>`)], }); }

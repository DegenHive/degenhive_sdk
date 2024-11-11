"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.addBalanceToPoolFlow = addBalanceToPoolFlow;
exports.addNewThreepoolFlow = addNewThreepoolFlow;
exports.addNewTwoPoolFlow = addNewTwoPoolFlow;
exports.addStableIdentifier = addStableIdentifier;
exports.addToTreasury = addToTreasury;
exports.claimFeesFromPoolFlow = claimFeesFromPoolFlow;
exports.collectFeeForCoin = collectFeeForCoin;
exports.createFeeCollector = createFeeCollector;
exports.depositHoneyToBurn = depositHoneyToBurn;
exports.entryAddToTreasury = entryAddToTreasury;
exports.extractFeeForCoin2amm = extractFeeForCoin2amm;
exports.extractFeeForCoin3amm = extractFeeForCoin3amm;
exports.getAllPoolFlowBalances = getAllPoolFlowBalances;
exports.getCurvedPoolFeeInfo = getCurvedPoolFeeInfo;
exports.getDecimalsForCoin = getDecimalsForCoin;
exports.getDecimalsForCoinType = getDecimalsForCoinType;
exports.getFeeAvailableForPool = getFeeAvailableForPool;
exports.getFeeCollectorId = getFeeCollectorId;
exports.getFeeInfo = getFeeInfo;
exports.getStablePoolFeeInfo = getStablePoolFeeInfo;
exports.getSuiFeeDistributionInfo = getSuiFeeDistributionInfo;
exports.getTreasuryBalance = getTreasuryBalance;
exports.getWeightedPoolFeeInfo = getWeightedPoolFeeInfo;
exports.hiddenWorldSetupByDeployer = hiddenWorldSetupByDeployer;
exports.isFeeCollectorPresent = isFeeCollectorPresent;
exports.isStableIdentifier = isStableIdentifier;
exports.managerSetupByDeployer = managerSetupByDeployer;
exports.queryAmmFeeCollectors = queryAmmFeeCollectors;
exports.queryPrecisionsForCoinTypes = queryPrecisionsForCoinTypes;
exports.queryStableIdentifiers = queryStableIdentifiers;
exports.releaseSuiFromTreasury = releaseSuiFromTreasury;
exports.releaseSuiFromTreasuryForBet = releaseSuiFromTreasuryForBet;
exports.removeStableIdentifier = removeStableIdentifier;
exports.updateDefaultFeeForCurve = updateDefaultFeeForCurve;
exports.updateFee = updateFee;
exports.updateModuleVersion = updateModuleVersion;
exports.updateYieldFlowConfigPct = updateYieldFlowConfigPct;
exports.whitelistDecimalPrecisions = whitelistDecimalPrecisions;
exports.withdrawHoneyToBurn = withdrawHoneyToBurn;
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
const YIELD_FLOW_OBJECT = __1.yieldflow.YIELD_FLOW_OBJECT;
const structs_1 = require("../../_dependencies/source/0x1/ascii/structs");
const structs_2 = require("../../_dependencies/source/0x1/option/structs");
const structs_3 = require("../../_dependencies/source/0x1/string/structs");
const util_1 = require("../../_framework/util");
function init(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::init`, arguments: [], }); }
function addBalanceToPoolFlow(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_balance_to_pool_flow`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.pure)(tx, args.poolAddr, `address`), (0, util_1.obj)(tx, args.hiveBalance), (0, util_1.obj)(tx, args.honeyBalance)], }); }
function addNewThreepoolFlow(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_new_threepool_flow`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.cap), (0, util_1.pure)(tx, args.poolAddr, `address`)], }); }
function addNewTwoPoolFlow(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_new_two_pool_flow`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.cap), (0, util_1.pure)(tx, args.poolAddr, `address`)], }); }
function addStableIdentifier(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_stable_identifier`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.pure)(tx, args.typeNameIdentifier, `${structs_1.String.$typeName}`)], }); }
function addToTreasury(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_to_treasury`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.balanceSui)], }); }
function claimFeesFromPoolFlow(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::claim_fees_from_pool_flow`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.dragonFoodCap), (0, util_1.pure)(tx, args.poolAddr, `address`)], }); }
function collectFeeForCoin(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::collect_fee_for_coin`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.feeBalance)], }); }
function createFeeCollector(tx, typeArg, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::create_fee_collector`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function depositHoneyToBurn(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::deposit_honey_to_burn`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.balanceBee)], }); }
function entryAddToTreasury(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::entry_add_to_treasury`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.coinX), (0, util_1.pure)(tx, args.amtToDeposit, `u64`)], }); }
function extractFeeForCoin2amm(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::extract_fee_for_coin_2amm`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.feeCollector)], }); }
function extractFeeForCoin3amm(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::extract_fee_for_coin_3amm`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.feeCollector)], }); }
function getAllPoolFlowBalances(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_all_pool_flow_balances`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.pure)(tx, args.startFrom, `${structs_2.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getCurvedPoolFeeInfo(tx, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_curved_pool_fee_info`, arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function getDecimalsForCoin(tx, typeArg, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_decimals_for_coin`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function getDecimalsForCoinType(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_decimals_for_coin_type`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.token)], }); }
function getFeeAvailableForPool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_fee_available_for_pool`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.pure)(tx, args.poolAddr, `address`)], }); }
function getFeeCollectorId(tx, typeArg, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_fee_collector_id`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function getFeeInfo(tx, typeArg, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_fee_info`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function getStablePoolFeeInfo(tx, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_stable_pool_fee_info`, arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function getSuiFeeDistributionInfo(tx, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_sui_fee_distribution_info`, arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function getTreasuryBalance(tx, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_treasury_balance`, arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function getWeightedPoolFeeInfo(tx, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_weighted_pool_fee_info`, arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function hiddenWorldSetupByDeployer(tx, cap) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::hidden_world_setup_by_deployer`, arguments: [(0, util_1.obj)(tx, cap)], }); }
function isFeeCollectorPresent(tx, typeArg, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::is_fee_collector_present`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function isStableIdentifier(tx, typeArg, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::is_stable_identifier`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function managerSetupByDeployer(tx, cap) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::manager_setup_by_deployer`, arguments: [(0, util_1.obj)(tx, cap)], }); }
function queryAmmFeeCollectors(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::query_amm_fee_collectors`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.pure)(tx, args.startFrom, `${structs_2.Option.$typeName}<${structs_1.String.$typeName}>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function queryPrecisionsForCoinTypes(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::query_precisions_for_coin_types`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.pure)(tx, args.startFrom, `${structs_2.Option.$typeName}<${structs_3.String.$typeName}>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function queryStableIdentifiers(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::query_stable_identifiers`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.pure)(tx, args.startFrom, `${structs_2.Option.$typeName}<${structs_1.String.$typeName}>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function releaseSuiFromTreasury(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::release_sui_from_treasury`, arguments: [(0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.pure)(tx, args.amt, `u64`), (0, util_1.pure)(tx, args.recepient, `address`)], }); }
function releaseSuiFromTreasuryForBet(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::release_sui_from_treasury_for_bet`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.pure)(tx, args.amt, `u64`)], }); }
function removeStableIdentifier(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::remove_stable_identifier`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.pure)(tx, args.typeNameIdentifier, `${structs_1.String.$typeName}`)], }); }
function updateDefaultFeeForCurve(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::update_default_fee_for_curve`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.pure)(tx, args.totalFeeBps, `u64`), (0, util_1.pure)(tx, args.beesFeePct, `u64`)], }); }
function updateFee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::update_fee`, arguments: [(0, util_1.obj)(tx, args.feeInfo), (0, util_1.pure)(tx, args.totalFeeBps, `u64`), (0, util_1.pure)(tx, args.beesFeePct, `u64`)], }); }
function updateModuleVersion(tx, yieldFlow) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::update_module_version`, arguments: [(0, util_1.obj)(tx, yieldFlow)], }); }
function updateYieldFlowConfigPct(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::update_yield_flow_config_pct`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.pure)(tx, args.newTreasuryPercent, `u64`), (0, util_1.pure)(tx, args.newHoneyBuybackPct, `u64`), (0, util_1.pure)(tx, args.newVoterIncentivesPct, `u64`)], }); }
function whitelistDecimalPrecisions(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::whitelist_decimal_precisions`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.dragonDaoCap), (0, util_1.pure)(tx, args.coinTypes, `vector<${structs_3.String.$typeName}>`), (0, util_1.pure)(tx, args.decimalPrecisions, `vector<u8>`)], }); }
function withdrawHoneyToBurn(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::withdraw_honey_to_burn`, arguments: [(0, util_1.obj)(tx, YIELD_FLOW_OBJECT), (0, util_1.obj)(tx, args.cap)], }); }

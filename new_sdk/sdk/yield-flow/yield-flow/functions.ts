import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String as String1} from "../../_dependencies/source/0x1/string/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::init`, arguments: [ ], }) }

export interface AddBalanceToPoolFlowArgs { yieldFlow: TransactionObjectInput; poolAddr: string | TransactionArgument; hiveBalance: TransactionObjectInput; honeyBalance: TransactionObjectInput }

export function addBalanceToPoolFlow( tx: Transaction, args: AddBalanceToPoolFlowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_balance_to_pool_flow`, arguments: [ obj(tx, args.yieldFlow), pure(tx, args.poolAddr, `address`), obj(tx, args.hiveBalance), obj(tx, args.honeyBalance) ], }) }

export interface AddNewThreepoolFlowArgs { yieldFlow: TransactionObjectInput; cap: TransactionObjectInput; poolAddr: string | TransactionArgument }

export function addNewThreepoolFlow( tx: Transaction, args: AddNewThreepoolFlowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_new_threepool_flow`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.cap), pure(tx, args.poolAddr, `address`) ], }) }

export interface AddNewTwoPoolFlowArgs { yieldFlow: TransactionObjectInput; cap: TransactionObjectInput; poolAddr: string | TransactionArgument }

export function addNewTwoPoolFlow( tx: Transaction, args: AddNewTwoPoolFlowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_new_two_pool_flow`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.cap), pure(tx, args.poolAddr, `address`) ], }) }

export interface AddStableIdentifierArgs { yieldFlow: TransactionObjectInput; dragonDaoCap: TransactionObjectInput; typeNameIdentifier: string | TransactionArgument }

export function addStableIdentifier( tx: Transaction, args: AddStableIdentifierArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_stable_identifier`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.dragonDaoCap), pure(tx, args.typeNameIdentifier, `${String.$typeName}`) ], }) }

export interface AddToTreasuryArgs { yieldFlow: TransactionObjectInput; balanceSui: TransactionObjectInput }

export function addToTreasury( tx: Transaction, args: AddToTreasuryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::add_to_treasury`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.balanceSui) ], }) }

export interface ClaimFeesFromPoolFlowArgs { yieldFlow: TransactionObjectInput; dragonFoodCap: TransactionObjectInput; poolAddr: string | TransactionArgument }

export function claimFeesFromPoolFlow( tx: Transaction, args: ClaimFeesFromPoolFlowArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::claim_fees_from_pool_flow`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.dragonFoodCap), pure(tx, args.poolAddr, `address`) ], }) }

export interface CollectFeeForCoinArgs { feeCollector: TransactionObjectInput; feeBalance: TransactionObjectInput }

export function collectFeeForCoin( tx: Transaction, typeArg: string, args: CollectFeeForCoinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::collect_fee_for_coin`, typeArguments: [typeArg], arguments: [ obj(tx, args.feeCollector), obj(tx, args.feeBalance) ], }) }

export function createFeeCollector( tx: Transaction, typeArg: string, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::create_fee_collector`, typeArguments: [typeArg], arguments: [ obj(tx, yieldFlow) ], }) }

export interface DepositHoneyToBurnArgs { yieldFlow: TransactionObjectInput; balanceBee: TransactionObjectInput }

export function depositHoneyToBurn( tx: Transaction, args: DepositHoneyToBurnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::deposit_honey_to_burn`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.balanceBee) ], }) }

export interface EntryAddToTreasuryArgs { yieldFlow: TransactionObjectInput; coinX: TransactionObjectInput; amtToDeposit: bigint | TransactionArgument }

export function entryAddToTreasury( tx: Transaction, args: EntryAddToTreasuryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::entry_add_to_treasury`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.coinX), pure(tx, args.amtToDeposit, `u64`) ], }) }

export interface ExtractFeeForCoin2ammArgs { cap: TransactionObjectInput; feeCollector: TransactionObjectInput }

export function extractFeeForCoin2amm( tx: Transaction, typeArg: string, args: ExtractFeeForCoin2ammArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::extract_fee_for_coin_2amm`, typeArguments: [typeArg], arguments: [ obj(tx, args.cap), obj(tx, args.feeCollector) ], }) }

export interface ExtractFeeForCoin3ammArgs { cap: TransactionObjectInput; feeCollector: TransactionObjectInput }

export function extractFeeForCoin3amm( tx: Transaction, typeArg: string, args: ExtractFeeForCoin3ammArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::extract_fee_for_coin_3amm`, typeArguments: [typeArg], arguments: [ obj(tx, args.cap), obj(tx, args.feeCollector) ], }) }

export interface GetAllPoolFlowBalancesArgs { yieldFlow: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllPoolFlowBalances( tx: Transaction, args: GetAllPoolFlowBalancesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_all_pool_flow_balances`, arguments: [ obj(tx, args.yieldFlow), pure(tx, args.startFrom, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`) ], }) }

export function getCurvedPoolFeeInfo( tx: Transaction, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_curved_pool_fee_info`, arguments: [ obj(tx, yieldFlow) ], }) }

export function getDecimalsForCoin( tx: Transaction, typeArg: string, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_decimals_for_coin`, typeArguments: [typeArg], arguments: [ obj(tx, yieldFlow) ], }) }

export interface GetDecimalsForCoinTypeArgs { yieldFlow: TransactionObjectInput; token: TransactionObjectInput }

export function getDecimalsForCoinType( tx: Transaction, args: GetDecimalsForCoinTypeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_decimals_for_coin_type`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.token) ], }) }

export interface GetFeeAvailableForPoolArgs { yieldFlow: TransactionObjectInput; poolAddr: string | TransactionArgument }

export function getFeeAvailableForPool( tx: Transaction, args: GetFeeAvailableForPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_fee_available_for_pool`, arguments: [ obj(tx, args.yieldFlow), pure(tx, args.poolAddr, `address`) ], }) }

export function getFeeCollectorId( tx: Transaction, typeArg: string, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_fee_collector_id`, typeArguments: [typeArg], arguments: [ obj(tx, yieldFlow) ], }) }

export function getFeeInfo( tx: Transaction, typeArg: string, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_fee_info`, typeArguments: [typeArg], arguments: [ obj(tx, yieldFlow) ], }) }

export function getStablePoolFeeInfo( tx: Transaction, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_stable_pool_fee_info`, arguments: [ obj(tx, yieldFlow) ], }) }

export function getSuiFeeDistributionInfo( tx: Transaction, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_sui_fee_distribution_info`, arguments: [ obj(tx, yieldFlow) ], }) }

export function getTreasuryBalance( tx: Transaction, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_treasury_balance`, arguments: [ obj(tx, yieldFlow) ], }) }

export function getWeightedPoolFeeInfo( tx: Transaction, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::get_weighted_pool_fee_info`, arguments: [ obj(tx, yieldFlow) ], }) }

export function hiddenWorldSetupByDeployer( tx: Transaction, cap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::hidden_world_setup_by_deployer`, arguments: [ obj(tx, cap) ], }) }

export function isFeeCollectorPresent( tx: Transaction, typeArg: string, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::is_fee_collector_present`, typeArguments: [typeArg], arguments: [ obj(tx, yieldFlow) ], }) }

export function isStableIdentifier( tx: Transaction, typeArg: string, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::is_stable_identifier`, typeArguments: [typeArg], arguments: [ obj(tx, yieldFlow) ], }) }

export function managerSetupByDeployer( tx: Transaction, cap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::manager_setup_by_deployer`, arguments: [ obj(tx, cap) ], }) }

export interface QueryAmmFeeCollectorsArgs { yieldFlow: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAmmFeeCollectors( tx: Transaction, args: QueryAmmFeeCollectorsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::query_amm_fee_collectors`, arguments: [ obj(tx, args.yieldFlow), pure(tx, args.startFrom, `${Option.$typeName}<${String.$typeName}>`), pure(tx, args.limit, `u64`) ], }) }

export interface QueryPrecisionsForCoinTypesArgs { yieldFlow: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryPrecisionsForCoinTypes( tx: Transaction, args: QueryPrecisionsForCoinTypesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::query_precisions_for_coin_types`, arguments: [ obj(tx, args.yieldFlow), pure(tx, args.startFrom, `${Option.$typeName}<${String1.$typeName}>`), pure(tx, args.limit, `u64`) ], }) }

export interface QueryStableIdentifiersArgs { yieldFlow: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryStableIdentifiers( tx: Transaction, args: QueryStableIdentifiersArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::query_stable_identifiers`, arguments: [ obj(tx, args.yieldFlow), pure(tx, args.startFrom, `${Option.$typeName}<${String.$typeName}>`), pure(tx, args.limit, `u64`) ], }) }

export interface ReleaseSuiFromTreasuryArgs { dragonDaoCap: TransactionObjectInput; yieldFlow: TransactionObjectInput; amt: bigint | TransactionArgument; recepient: string | TransactionArgument }

export function releaseSuiFromTreasury( tx: Transaction, args: ReleaseSuiFromTreasuryArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::release_sui_from_treasury`, arguments: [ obj(tx, args.dragonDaoCap), obj(tx, args.yieldFlow), pure(tx, args.amt, `u64`), pure(tx, args.recepient, `address`) ], }) }

export interface ReleaseSuiFromTreasuryForBetArgs { cap: TransactionObjectInput; yieldFlow: TransactionObjectInput; amt: bigint | TransactionArgument }

export function releaseSuiFromTreasuryForBet( tx: Transaction, args: ReleaseSuiFromTreasuryForBetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::release_sui_from_treasury_for_bet`, arguments: [ obj(tx, args.cap), obj(tx, args.yieldFlow), pure(tx, args.amt, `u64`) ], }) }

export interface RemoveStableIdentifierArgs { yieldFlow: TransactionObjectInput; dragonDaoCap: TransactionObjectInput; typeNameIdentifier: string | TransactionArgument }

export function removeStableIdentifier( tx: Transaction, args: RemoveStableIdentifierArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::remove_stable_identifier`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.dragonDaoCap), pure(tx, args.typeNameIdentifier, `${String.$typeName}`) ], }) }

export interface UpdateDefaultFeeForCurveArgs { yieldFlow: TransactionObjectInput; dragonDaoCap: TransactionObjectInput; totalFeeBps: bigint | TransactionArgument; beesFeePct: bigint | TransactionArgument }

export function updateDefaultFeeForCurve( tx: Transaction, typeArg: string, args: UpdateDefaultFeeForCurveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::update_default_fee_for_curve`, typeArguments: [typeArg], arguments: [ obj(tx, args.yieldFlow), obj(tx, args.dragonDaoCap), pure(tx, args.totalFeeBps, `u64`), pure(tx, args.beesFeePct, `u64`) ], }) }

export interface UpdateFeeArgs { feeInfo: TransactionObjectInput; totalFeeBps: bigint | TransactionArgument; beesFeePct: bigint | TransactionArgument }

export function updateFee( tx: Transaction, args: UpdateFeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::update_fee`, arguments: [ obj(tx, args.feeInfo), pure(tx, args.totalFeeBps, `u64`), pure(tx, args.beesFeePct, `u64`) ], }) }

export function updateModuleVersion( tx: Transaction, yieldFlow: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::update_module_version`, arguments: [ obj(tx, yieldFlow) ], }) }

export interface UpdateYieldFlowConfigPctArgs { yieldFlow: TransactionObjectInput; dragonDaoCap: TransactionObjectInput; newTreasuryPercent: bigint | TransactionArgument; newHoneyBuybackPct: bigint | TransactionArgument; newVoterIncentivesPct: bigint | TransactionArgument }

export function updateYieldFlowConfigPct( tx: Transaction, args: UpdateYieldFlowConfigPctArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::update_yield_flow_config_pct`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.dragonDaoCap), pure(tx, args.newTreasuryPercent, `u64`), pure(tx, args.newHoneyBuybackPct, `u64`), pure(tx, args.newVoterIncentivesPct, `u64`) ], }) }

export interface WhitelistDecimalPrecisionsArgs { yieldFlow: TransactionObjectInput; dragonDaoCap: TransactionObjectInput; coinTypes: Array<string | TransactionArgument> | TransactionArgument; decimalPrecisions: Array<number | TransactionArgument> | TransactionArgument }

export function whitelistDecimalPrecisions( tx: Transaction, args: WhitelistDecimalPrecisionsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::whitelist_decimal_precisions`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.dragonDaoCap), pure(tx, args.coinTypes, `vector<${String1.$typeName}>`), pure(tx, args.decimalPrecisions, `vector<u8>`) ], }) }

export interface WithdrawHoneyToBurnArgs { yieldFlow: TransactionObjectInput; cap: TransactionObjectInput }

export function withdrawHoneyToBurn( tx: Transaction, args: WithdrawHoneyToBurnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::yield_flow::withdraw_honey_to_burn`, arguments: [ obj(tx, args.yieldFlow), obj(tx, args.cap) ], }) }

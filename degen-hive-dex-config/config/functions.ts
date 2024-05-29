import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

// export function init( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::init`, arguments: [ ], }) }

export interface AddStableIdentifierArgs { config: ObjectArg; hiveDaoCap: ObjectArg; typeNameIdentifier: string | TransactionArgument }

export function addStableIdentifier( txb: TransactionBlock, args: AddStableIdentifierArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::add_stable_identifier`, arguments: [ obj(txb, args.config), obj(txb, args.hiveDaoCap), pure(txb, args.typeNameIdentifier, `0x1::ascii::String`) ], }) }

export interface AddStableIdentifierByTypeArgs { config: ObjectArg; hiveDaoCap: ObjectArg }

export function addStableIdentifierByType( txb: TransactionBlock, typeArg: string, args: AddStableIdentifierByTypeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::add_stable_identifier_by_type`, typeArguments: [typeArg], arguments: [ obj(txb, args.config), obj(txb, args.hiveDaoCap) ], }) }

export interface CollectFeeForCoinArgs { feeCoin: ObjectArg; feeBalance: ObjectArg }

export function collectFeeForCoin( txb: TransactionBlock, typeArg: string, args: CollectFeeForCoinArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::collect_fee_for_coin`, typeArguments: [typeArg], arguments: [ obj(txb, args.feeCoin), obj(txb, args.feeBalance) ], }) }

export function createFeeCollector( txb: TransactionBlock, typeArg: string, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::create_fee_collector`, typeArguments: [typeArg], arguments: [ obj(txb, config) ], }) }

export interface DepositToTreasuryArgs { treasury: ObjectArg; balanceX: ObjectArg }

export function depositToTreasury( txb: TransactionBlock, typeArg: string, args: DepositToTreasuryArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::deposit_to_treasury`, typeArguments: [typeArg], arguments: [ obj(txb, args.treasury), obj(txb, args.balanceX) ], }) }

export interface DistributeTreasuryResourcesArgs { hiveDaoCap: ObjectArg; treasury: ObjectArg; amt: bigint | TransactionArgument; recepient: string | TransactionArgument }

export function distributeTreasuryResources( txb: TransactionBlock, typeArg: string, args: DistributeTreasuryResourcesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::distribute_treasury_resources`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveDaoCap), obj(txb, args.treasury), pure(txb, args.amt, `u64`), pure(txb, args.recepient, `address`) ], }) }

export interface EntryDepositToTreasuryArgs { treasury: ObjectArg; coinX: ObjectArg; amtToDeposit: bigint | TransactionArgument }

export function entryDepositToTreasury( txb: TransactionBlock, typeArg: string, args: EntryDepositToTreasuryArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::entry_deposit_to_treasury`, typeArguments: [typeArg], arguments: [ obj(txb, args.treasury), obj(txb, args.coinX), pure(txb, args.amtToDeposit, `u64`) ], }) }

export interface ExtractFeeForCoin2ammArgs { cap: ObjectArg; feeCoin: ObjectArg }

export function extractFeeForCoin2amm( txb: TransactionBlock, typeArg: string, args: ExtractFeeForCoin2ammArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::extract_fee_for_coin_2amm`, typeArguments: [typeArg], arguments: [ obj(txb, args.cap), obj(txb, args.feeCoin) ], }) }

export interface ExtractFeeForCoin3ammArgs { cap: ObjectArg; feeCoin: ObjectArg }

export function extractFeeForCoin3amm( txb: TransactionBlock, typeArg: string, args: ExtractFeeForCoin3ammArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::extract_fee_for_coin_3amm`, typeArguments: [typeArg], arguments: [ obj(txb, args.cap), obj(txb, args.feeCoin) ], }) }

export function getCurvedPoolFeeInfo( txb: TransactionBlock, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_curved_pool_fee_info`, arguments: [ obj(txb, config) ], }) }

export function getDecimalsForCoin( txb: TransactionBlock, typeArg: string, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_decimals_for_coin`, typeArguments: [typeArg], arguments: [ obj(txb, config) ], }) }

export interface GetDecimalsForCoinTypeArgs { config: ObjectArg; token: ObjectArg }

export function getDecimalsForCoinType( txb: TransactionBlock, args: GetDecimalsForCoinTypeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_decimals_for_coin_type`, arguments: [ obj(txb, args.config), obj(txb, args.token) ], }) }

export function getFeeCollectorId( txb: TransactionBlock, typeArg: string, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_fee_collector_id`, typeArguments: [typeArg], arguments: [ obj(txb, config) ], }) }

export function getFeeInfo( txb: TransactionBlock, typeArg: string, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_fee_info`, typeArguments: [typeArg], arguments: [ obj(txb, config) ], }) }

export function getHiveTreasuryFeeInfo( txb: TransactionBlock, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_hive_treasury_fee_info`, arguments: [ obj(txb, config) ], }) }

export function getStablePoolFeeInfo( txb: TransactionBlock, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_stable_pool_fee_info`, arguments: [ obj(txb, config) ], }) }

export function getTreasuryBalance( txb: TransactionBlock, typeArg: string, treasury: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_treasury_balance`, typeArguments: [typeArg], arguments: [ obj(txb, treasury) ], }) }

export function getWeightedPoolFeeInfo( txb: TransactionBlock, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::get_weighted_pool_fee_info`, arguments: [ obj(txb, config) ], }) }

export function isFeeCollectorPresent( txb: TransactionBlock, typeArg: string, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::is_fee_collector_present`, typeArguments: [typeArg], arguments: [ obj(txb, config) ], }) }

export function isStableIdentifier( txb: TransactionBlock, typeArg: string, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::is_stable_identifier`, typeArguments: [typeArg], arguments: [ obj(txb, config) ], }) }

export function kraftHiveEntryCap( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::kraft_hive_entry_cap`, arguments: [ ], }) }

export function managerSetupByDeployer( txb: TransactionBlock, cap: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::manager_setup_by_deployer`, arguments: [ obj(txb, cap) ], }) }

export interface QueryAmmFeeCollectorsArgs { config: ObjectArg; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAmmFeeCollectors( txb: TransactionBlock, args: QueryAmmFeeCollectorsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::query_amm_fee_collectors`, arguments: [ obj(txb, args.config), pure(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), pure(txb, args.limit, `u64`) ], }) }

export interface QueryPrecisionsForCoinTypesArgs { config: ObjectArg; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryPrecisionsForCoinTypes( txb: TransactionBlock, args: QueryPrecisionsForCoinTypesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::query_precisions_for_coin_types`, arguments: [ obj(txb, args.config), pure(txb, args.startFrom, `0x1::option::Option<0x1::string::String>`), pure(txb, args.limit, `u64`) ], }) }

export interface QueryStableIdentifiersArgs { config: ObjectArg; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryStableIdentifiers( txb: TransactionBlock, args: QueryStableIdentifiersArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::query_stable_identifiers`, arguments: [ obj(txb, args.config), pure(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), pure(txb, args.limit, `u64`) ], }) }

export interface RemoveStableIdentifierArgs { config: ObjectArg; hiveDaoCap: ObjectArg; typeNameIdentifier: string | TransactionArgument }

export function removeStableIdentifier( txb: TransactionBlock, args: RemoveStableIdentifierArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::remove_stable_identifier`, arguments: [ obj(txb, args.config), obj(txb, args.hiveDaoCap), pure(txb, args.typeNameIdentifier, `0x1::ascii::String`) ], }) }

export interface UpdateDefaultFeeForCurveArgs { config: ObjectArg; hiveDaoCap: ObjectArg; totalFeeBps: bigint | TransactionArgument; hiveFeePercent: bigint | TransactionArgument }

export function updateDefaultFeeForCurve( txb: TransactionBlock, typeArg: string, args: UpdateDefaultFeeForCurveArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::update_default_fee_for_curve`, typeArguments: [typeArg], arguments: [ obj(txb, args.config), obj(txb, args.hiveDaoCap), pure(txb, args.totalFeeBps, `u64`), pure(txb, args.hiveFeePercent, `u64`) ], }) }

export interface UpdateFeeArgs { feeInfo: ObjectArg; totalFeeBps: bigint | TransactionArgument; hiveFeePercent: bigint | TransactionArgument }

export function updateFee( txb: TransactionBlock, args: UpdateFeeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::update_fee`, arguments: [ obj(txb, args.feeInfo), pure(txb, args.totalFeeBps, `u64`), pure(txb, args.hiveFeePercent, `u64`) ], }) }

export interface UpdateTreasuryPercentArgs { config: ObjectArg; hiveDaoCap: ObjectArg; newTreasuryPercent: bigint | TransactionArgument }

export function updateTreasuryPercent( txb: TransactionBlock, args: UpdateTreasuryPercentArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::update_treasury_percent`, arguments: [ obj(txb, args.config), obj(txb, args.hiveDaoCap), pure(txb, args.newTreasuryPercent, `u64`) ], }) }

export function vaultSetupByDeployer( txb: TransactionBlock, cap: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::vault_setup_by_deployer`, arguments: [ obj(txb, cap) ], }) }

export interface WhitelistDecimalPrecisionsArgs { config: ObjectArg; hiveDaoCap: ObjectArg; coinTypes: Array<string | TransactionArgument> | TransactionArgument; decimalPrecisions: Array<number | TransactionArgument> | TransactionArgument }

export function whitelistDecimalPrecisions( txb: TransactionBlock, args: WhitelistDecimalPrecisionsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::config::whitelist_decimal_precisions`, arguments: [ obj(txb, args.config), obj(txb, args.hiveDaoCap), pure(txb, args.coinTypes, `vector<0x1::string::String>`), pure(txb, args.decimalPrecisions, `vector<u8>`) ], }) }

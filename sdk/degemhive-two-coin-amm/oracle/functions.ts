import { twopool } from ".."
const PUBLISHED_AT = twopool.PUBLISHED_AT
import { Option } from "../../source/0x1/option/structs";
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export function init(tx: Transaction,) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::init`, arguments: [], }) }

export interface CalculateTwapArgs { latestCumulativePrice: bigint | TransactionArgument; oldCumulativePrice: bigint | TransactionArgument; deltaTs: bigint | TransactionArgument }

export function calculateTwap(tx: Transaction, args: CalculateTwapArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::calculate_twap`, arguments: [pure(tx, args.latestCumulativePrice, `u256`), pure(tx, args.oldCumulativePrice, `u256`), pure(tx, args.deltaTs, `u64`)], }) }

export function destroySnapshot(tx: Transaction, snapshot: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::destroy_snapshot`, arguments: [obj(tx, snapshot)], }) }

export function incrementOracle(tx: Transaction, oracle: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::increment_oracle`, arguments: [obj(tx, oracle)], }) }

export interface QueryAcrossAllSnapshotsArgs { oracle: TransactionObjectInput; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAcrossAllSnapshots(tx: Transaction, args: QueryAcrossAllSnapshotsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::query_across_all_snapshots`, arguments: [obj(tx, args.oracle), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`)], }) }

export interface SetupHiveOracleArgs { updateCap: TransactionObjectInput; suiHivePoolAddr: string | TransactionArgument; usdcSuiPoolAddr: string | TransactionArgument }

export function setupHiveOracle(tx: Transaction, args: SetupHiveOracleArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::setup_hive_oracle`, arguments: [obj(tx, args.updateCap), pure(tx, args.suiHivePoolAddr, `address`), pure(tx, args.usdcSuiPoolAddr, `address`)], }) }

export interface UpdateHiveOracleArgs { cap: TransactionObjectInput; oracle: TransactionObjectInput; suiHivePoolAddr: (string | TransactionArgument | TransactionArgument | null); usdcSuiPoolAddr: (string | TransactionArgument | TransactionArgument | null); newWindowSize: bigint | TransactionArgument; newTolerance: bigint | TransactionArgument }

export function updateHiveOracle(tx: Transaction, args: UpdateHiveOracleArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::update_hive_oracle`, arguments: [obj(tx, args.cap), obj(tx, args.oracle), pure(tx, args.suiHivePoolAddr, `${Option.$typeName}<address>`), pure(tx, args.usdcSuiPoolAddr, `${Option.$typeName}<address>`), pure(tx, args.newWindowSize, `u64`), pure(tx, args.newTolerance, `u64`)], }) }

export interface UpdateHiveOraclePriceArgs { clock: TransactionObjectInput; oracle: TransactionObjectInput; hiveGraph: TransactionObjectInput; usdcSuiPool: TransactionObjectInput; suiHivePool: TransactionObjectInput }

export function updateHiveOraclePrice(tx: Transaction, typeArgs: [string, string, string, string, string, string], args: UpdateHiveOraclePriceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::oracle::update_hive_oracle_price`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.oracle), obj(tx, args.hiveGraph), obj(tx, args.usdcSuiPool), obj(tx, args.suiHivePool)], }) }

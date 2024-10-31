import {PUBLISHED_AT} from "..";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function getSuiAmount( tx: Transaction, poolTokenExchangeRate: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::helper::get_sui_amount`, arguments: [ obj(tx, poolTokenExchangeRate) ], }) }

export function getTokenAmount( tx: Transaction, poolTokenExchangeRate: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::helper::get_token_amount`, arguments: [ obj(tx, poolTokenExchangeRate) ], }) }

export interface PoolTokenExchangeRateAtEpochArgs { poolTokenExchangeRate: TransactionObjectInput; epoch: bigint | TransactionArgument }

export function poolTokenExchangeRateAtEpoch( tx: Transaction, args: PoolTokenExchangeRateAtEpochArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::helper::pool_token_exchange_rate_at_epoch`, arguments: [ obj(tx, args.poolTokenExchangeRate), pure(tx, args.epoch, `u64`) ], }) }

export interface CalculateRewardsArgs { suiSystemState: TransactionObjectInput; poolId: string | TransactionArgument; stakedSuiPrincipalAmount: bigint | TransactionArgument; startEpoch: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function calculateRewards( tx: Transaction, args: CalculateRewardsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::helper::calculate_rewards`, arguments: [ obj(tx, args.suiSystemState), pure(tx, args.poolId, `${ID.$typeName}`), pure(tx, args.stakedSuiPrincipalAmount, `u64`), pure(tx, args.startEpoch, `u64`), pure(tx, args.curEpoch, `u64`) ], }) }

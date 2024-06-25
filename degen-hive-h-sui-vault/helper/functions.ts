import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

import { hsuivault } from "..";
const PUBLISHED_AT = hsuivault.PUBLISHED_AT

export function getSuiAmount( txb: TransactionBlock, poolTokenExchangeRate: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::helper::get_sui_amount`, arguments: [ obj(txb, poolTokenExchangeRate) ], }) }

export function getTokenAmount( txb: TransactionBlock, poolTokenExchangeRate: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::helper::get_token_amount`, arguments: [ obj(txb, poolTokenExchangeRate) ], }) }

export interface PoolTokenExchangeRateAtEpochArgs { poolTokenExchangeRate: ObjectArg; epoch: bigint | TransactionArgument }

export function poolTokenExchangeRateAtEpoch( txb: TransactionBlock, args: PoolTokenExchangeRateAtEpochArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::helper::pool_token_exchange_rate_at_epoch`, arguments: [ obj(txb, args.poolTokenExchangeRate), pure(txb, args.epoch, `u64`) ], }) }

export interface CalculateRewardsArgs { suiSystemState: ObjectArg; poolId: string | TransactionArgument; stakedSuiPrincipalAmount: bigint | TransactionArgument; startEpoch: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function calculateRewards( txb: TransactionBlock, args: CalculateRewardsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::helper::calculate_rewards`, arguments: [ obj(txb, args.suiSystemState), pure(txb, args.poolId, `0x2::object::ID`), pure(txb, args.stakedSuiPrincipalAmount, `u64`), pure(txb, args.startEpoch, `u64`), pure(txb, args.curEpoch, `u64`) ], }) }

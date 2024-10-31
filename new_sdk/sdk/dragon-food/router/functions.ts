import {PUBLISHED_AT} from "..";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface AddHiveToLockedDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; hiveCoin: TransactionObjectInput; hiveAmt: bigint | TransactionArgument }

export function addHiveToLockedDragonBee( tx: Transaction, typeArg: string, args: AddHiveToLockedDragonBeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_hive_to_locked_dragon_bee`, typeArguments: [typeArg], arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.hiveCoin), pure(tx, args.hiveAmt, `u64`) ], }) }

export interface AddHoneyToLockedDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; honeyToken: TransactionObjectInput; honeyAmt: bigint | TransactionArgument }

export function addHoneyToLockedDragonBee( tx: Transaction, typeArg: string, args: AddHoneyToLockedDragonBeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_honey_to_locked_dragon_bee`, typeArguments: [typeArg], arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.honeyToken), pure(tx, args.honeyAmt, `u64`) ], }) }

export interface ClaimVotingRewardsThreePoolArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function claimVotingRewardsThreePool( tx: Transaction, typeArgs: [string, string, string, string], args: ClaimVotingRewardsThreePoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::claim_voting_rewards_three_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), obj(tx, args.dragonTrainer) ], }) }

export interface ClaimVotingRewardsTwoPoolArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function claimVotingRewardsTwoPool( tx: Transaction, typeArgs: [string, string, string], args: ClaimVotingRewardsTwoPoolArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::claim_voting_rewards_two_pool`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), obj(tx, args.dragonTrainer) ], }) }

export interface FeedBeeInDenArgs { dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; beesManager: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function feedBeeInDen( tx: Transaction, typeArg: string, args: FeedBeeInDenArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::feed_bee_in_den`, typeArguments: [typeArg], arguments: [ obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.beesManager), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`) ], }) }

export interface StakeLp0FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; lpToken: TransactionObjectInput; amount: bigint | TransactionArgument }

export function stakeLp0Fruits( tx: Transaction, typeArg: string, args: StakeLp0FruitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::stake_lp_0_fruits`, typeArguments: [typeArg], arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.lpToken), pure(tx, args.amount, `u64`) ], }) }

export interface StakeLp1FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; lpToken: TransactionObjectInput; amount: bigint | TransactionArgument }

export function stakeLp1Fruits( tx: Transaction, typeArgs: [string, string], args: StakeLp1FruitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::stake_lp_1_fruits`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.lpToken), pure(tx, args.amount, `u64`) ], }) }

export interface StakeLp2FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; lpToken: TransactionObjectInput; amount: bigint | TransactionArgument }

export function stakeLp2Fruits( tx: Transaction, typeArgs: [string, string, string], args: StakeLp2FruitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::stake_lp_2_fruits`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.lpToken), pure(tx, args.amount, `u64`) ], }) }

export interface StakeLp3FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; lpToken: TransactionObjectInput; amount: bigint | TransactionArgument }

export function stakeLp3Fruits( tx: Transaction, typeArgs: [string, string, string, string], args: StakeLp3FruitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::stake_lp_3_fruits`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.lpToken), pure(tx, args.amount, `u64`) ], }) }

export interface UnbondFromDragonDen0FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen0Fruits( tx: Transaction, typeArg: string, args: UnbondFromDragonDen0FruitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_dragon_den_0_fruits`, typeArguments: [typeArg], arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.unbondAmount, `u64`) ], }) }

export interface UnbondFromDragonDen1FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen1Fruits( tx: Transaction, typeArgs: [string, string], args: UnbondFromDragonDen1FruitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_dragon_den_1_fruits`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.unbondAmount, `u64`) ], }) }

export interface UnbondFromDragonDen2FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen2Fruits( tx: Transaction, typeArgs: [string, string, string], args: UnbondFromDragonDen2FruitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_dragon_den_2_fruits`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.unbondAmount, `u64`) ], }) }

export interface UnbondFromDragonDen3FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen3Fruits( tx: Transaction, typeArgs: [string, string, string, string], args: UnbondFromDragonDen3FruitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_dragon_den_3_fruits`, typeArguments: typeArgs, arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.unbondAmount, `u64`) ], }) }

export interface WithdrawDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; beesManager: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function withdrawDragonBee( tx: Transaction, typeArg: string, args: WithdrawDragonBeeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::withdraw_dragon_bee`, typeArguments: [typeArg], arguments: [ obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.beesManager), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer) ], }) }

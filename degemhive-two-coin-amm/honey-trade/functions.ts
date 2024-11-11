import { twopool } from ".."
const PUBLISHED_AT = twopool.PUBLISHED_AT
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export interface TransferHoneyArgs { honeyToken: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; transferAmt: bigint | TransactionArgument; receipient: string | TransactionArgument }

export function transferHoney(tx: Transaction, args: TransferHoneyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::transfer_honey`, arguments: [obj(tx, args.honeyToken), obj(tx, args.honeyManager), obj(tx, args.policy), pure(tx, args.transferAmt, `u64`), pure(tx, args.receipient, `address`)], }) }

export interface TransferHoneyBalanceArgs { policy: TransactionObjectInput; honeyManager: TransactionObjectInput; honeyBalance: TransactionObjectInput; recepient: string | TransactionArgument }

export function transferHoneyBalance(tx: Transaction, args: TransferHoneyBalanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::transfer_honey_balance`, arguments: [obj(tx, args.policy), obj(tx, args.honeyManager), obj(tx, args.honeyBalance), pure(tx, args.recepient, `address`)], }) }

export interface UnwrapHoneyTokensToCoinsArgs { cap: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; honeyToken: TransactionObjectInput; honeyBribeAmt: bigint | TransactionArgument }

export function unwrapHoneyTokensToCoins(tx: Transaction, args: UnwrapHoneyTokensToCoinsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::unwrap_honey_tokens_to_coins`, arguments: [obj(tx, args.cap), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.honeyToken), pure(tx, args.honeyBribeAmt, `u64`)], }) }

export interface DeleteDragonTrainerArgs { dragonTrainerStore: TransactionObjectInput; yieldFarm: TransactionObjectInput; hiveGraph: TransactionObjectInput; honeyManager: TransactionObjectInput; dragonTrainer: TransactionObjectInput; policy: TransactionObjectInput }

export function deleteDragonTrainer(tx: Transaction, args: DeleteDragonTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::delete_dragon_trainer`, arguments: [obj(tx, args.dragonTrainerStore), obj(tx, args.yieldFarm), obj(tx, args.hiveGraph), obj(tx, args.honeyManager), obj(tx, args.dragonTrainer), obj(tx, args.policy)], }) }

export interface EntryDepositHoneyInDragonSchoolArgs { profile: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyToAddAmt: bigint | TransactionArgument }

export function entryDepositHoneyInDragonSchool(tx: Transaction, args: EntryDepositHoneyInDragonSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::entry_deposit_honey_in_dragon_school`, arguments: [obj(tx, args.profile), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAddAmt, `u64`)], }) }

export interface EntryDepositHoneyInTrainerArgs { profile: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyToAddAmt: bigint | TransactionArgument }

export function entryDepositHoneyInTrainer(tx: Transaction, args: EntryDepositHoneyInTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::entry_deposit_honey_in_trainer`, arguments: [obj(tx, args.profile), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAddAmt, `u64`)], }) }

export interface HarvestYieldFromBeesArgs { beesManager: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonTrainer: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput }

export function harvestYieldFromBees(tx: Transaction, args: HarvestYieldFromBeesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::harvest_yield_from_bees`, arguments: [obj(tx, args.beesManager), obj(tx, args.yieldFarm), obj(tx, args.dragonTrainer), obj(tx, args.honeyManager), obj(tx, args.policy)], }) }

export interface HarvestYieldFromBeesAndReturnArgs { beesManager: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonTrainer: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput }

export function harvestYieldFromBeesAndReturn(tx: Transaction, args: HarvestYieldFromBeesAndReturnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::harvest_yield_from_bees_and_return`, arguments: [obj(tx, args.beesManager), obj(tx, args.yieldFarm), obj(tx, args.dragonTrainer), obj(tx, args.honeyManager), obj(tx, args.policy)], }) }

export interface InfuseBeeWithEnergyArgs { clock: TransactionObjectInput; yieldFarm: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument; hiveCoin: TransactionObjectInput; hiveToLock: bigint | TransactionArgument; lockupDuration: bigint | TransactionArgument }

export function infuseBeeWithEnergy(tx: Transaction, args: InfuseBeeWithEnergyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::infuse_bee_with_energy`, arguments: [obj(tx, args.clock), obj(tx, args.yieldFarm), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`), obj(tx, args.hiveCoin), pure(tx, args.hiveToLock, `u64`), pure(tx, args.lockupDuration, `u64`)], }) }

export interface InfuseBeeWithHealthArgs { clock: TransactionObjectInput; yieldFarm: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument; honeyTokenIn: TransactionObjectInput; honeyToAddAmt: bigint | TransactionArgument }

export function infuseBeeWithHealth(tx: Transaction, args: InfuseBeeWithHealthArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::infuse_bee_with_health`, arguments: [obj(tx, args.clock), obj(tx, args.yieldFarm), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAddAmt, `u64`)], }) }

export interface ReplenishMasterKeyWithHoneyArgs { cap: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyToAddAmt: bigint | TransactionArgument }

export function replenishMasterKeyWithHoney(tx: Transaction, args: ReplenishMasterKeyWithHoneyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::replenish_master_key_with_honey`, arguments: [obj(tx, args.cap), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAddAmt, `u64`)], }) }

export interface SendToHiddenWorldArgs { clock: TransactionObjectInput; beesManager: TransactionObjectInput; hiddenWorld: TransactionObjectInput; honeyManager: TransactionObjectInput; yieldFarm: TransactionObjectInput; policy: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function sendToHiddenWorld(tx: Transaction, args: SendToHiddenWorldArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::send_to_hidden_world`, arguments: [obj(tx, args.clock), obj(tx, args.beesManager), obj(tx, args.hiddenWorld), obj(tx, args.honeyManager), obj(tx, args.yieldFarm), obj(tx, args.policy), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export interface WithdrawFundsFromTrainerArgs { dragonTrainer: TransactionObjectInput; honeyManager: TransactionObjectInput; yieldFarm: TransactionObjectInput; policy: TransactionObjectInput; toWithdrawSui: boolean | TransactionArgument; toWithdrawHoney: boolean | TransactionArgument }

export function withdrawFundsFromTrainer(tx: Transaction, args: WithdrawFundsFromTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::withdraw_funds_from_trainer`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.honeyManager), obj(tx, args.yieldFarm), obj(tx, args.policy), pure(tx, args.toWithdrawSui, `bool`), pure(tx, args.toWithdrawHoney, `bool`)], }) }

export interface WithdrawFundsFromTrainerAndReturnArgs { dragonTrainer: TransactionObjectInput; honeyManager: TransactionObjectInput; yieldFarm: TransactionObjectInput; policy: TransactionObjectInput; toWithdrawSui: boolean | TransactionArgument; toWithdrawHoney: boolean | TransactionArgument }

export function withdrawFundsFromTrainerAndReturn(tx: Transaction, args: WithdrawFundsFromTrainerAndReturnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::withdraw_funds_from_trainer_and_return`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.honeyManager), obj(tx, args.yieldFarm), obj(tx, args.policy), pure(tx, args.toWithdrawSui, `bool`), pure(tx, args.toWithdrawHoney, `bool`)], }) }

export interface RemoveLiquidityFromXHoneyPoolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoins: TransactionObjectInput; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument; policy: TransactionObjectInput }

export function removeLiquidityFromXHoneyPool(tx: Transaction, typeArgs: [string, string, string], args: RemoveLiquidityFromXHoneyPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::remove_liquidity_from_x_honey_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.lpCoins), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`), obj(tx, args.policy)], }) }

export interface SwapHoneyCoinsArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; xIn: TransactionObjectInput; xInAmt: bigint | TransactionArgument; xOutMin: bigint | TransactionArgument; honeyTokenIn: TransactionObjectInput; yInAmt: bigint | TransactionArgument; yOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument; honeyManager: TransactionObjectInput; policy: TransactionObjectInput }

export function swapHoneyCoins(tx: Transaction, typeArgs: [string, string, string], args: SwapHoneyCoinsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::swap_honey_coins`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.xIn), pure(tx, args.xInAmt, `u64`), pure(tx, args.xOutMin, `u64`), obj(tx, args.honeyTokenIn), pure(tx, args.yInAmt, `u64`), pure(tx, args.yOutMin, `u64`), pure(tx, args.isGiveIn, `bool`), obj(tx, args.honeyManager), obj(tx, args.policy)], }) }

export interface AddLiquidityToXHoneyPoolArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyToAdd: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument; honeyManager: TransactionObjectInput; policy: TransactionObjectInput }

export function addLiquidityToXHoneyPool(tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityToXHoneyPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::add_liquidity_to_x_honey_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAdd, `u64`), pure(tx, args.minLpMinted, `u64`), obj(tx, args.honeyManager), obj(tx, args.policy)], }) }

export interface AddLiquidityToXHoneyPoolAndReturnLpArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; coinX: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyToAdd: bigint | TransactionArgument; minLpMinted: bigint | TransactionArgument; honeyManager: TransactionObjectInput; policy: TransactionObjectInput }

export function addLiquidityToXHoneyPoolAndReturnLp(tx: Transaction, typeArgs: [string, string, string], args: AddLiquidityToXHoneyPoolAndReturnLpArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::add_liquidity_to_x_honey_pool_and_return_lp`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.coinX), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAdd, `u64`), pure(tx, args.minLpMinted, `u64`), obj(tx, args.honeyManager), obj(tx, args.policy)], }) }

export interface BurnHoneyFromSupplyArgs { yieldFlow: TransactionObjectInput; policy: TransactionObjectInput; honeyManager: TransactionObjectInput }

export function burnHoneyFromSupply(tx: Transaction, args: BurnHoneyFromSupplyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::burn_honey_from_supply`, arguments: [obj(tx, args.yieldFlow), obj(tx, args.policy), obj(tx, args.honeyManager)], }) }

export function incrementHoneyManager(tx: Transaction, typeArg: string, honeyManager: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::increment_honey_manager`, typeArguments: [typeArg], arguments: [obj(tx, honeyManager)], }) }

export interface KraftGenesisHoneyArgs { cap: TransactionObjectInput; honeyKraftCap: TransactionObjectInput; beesManager: TransactionObjectInput; lpIncentivesPct: bigint | TransactionArgument; treasuryPct: bigint | TransactionArgument; dragonEggsBasketPct: bigint | TransactionArgument; vestingPct: bigint | TransactionArgument }

export function kraftGenesisHoney(tx: Transaction, args: KraftGenesisHoneyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::kraft_genesis_honey`, arguments: [obj(tx, args.cap), obj(tx, args.honeyKraftCap), obj(tx, args.beesManager), pure(tx, args.lpIncentivesPct, `u64`), pure(tx, args.treasuryPct, `u64`), pure(tx, args.dragonEggsBasketPct, `u64`), pure(tx, args.vestingPct, `u64`)], }) }

export interface KraftMoreHoneyForDragonBeesArgs { cap: TransactionObjectInput; honeyManager: TransactionObjectInput; beesManager: TransactionObjectInput; honeyToMint: bigint | TransactionArgument; lpIncentivesPct: bigint | TransactionArgument }

export function kraftMoreHoneyForDragonBees(tx: Transaction, args: KraftMoreHoneyForDragonBeesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::kraft_more_honey_for_dragon_bees`, arguments: [obj(tx, args.cap), obj(tx, args.honeyManager), obj(tx, args.beesManager), pure(tx, args.honeyToMint, `u64`), pure(tx, args.lpIncentivesPct, `u64`)], }) }

export interface RemoveLiquidityFromXHoneyPoolAndReturnArgs { clock: TransactionObjectInput; pool: TransactionObjectInput; lpCoins: TransactionObjectInput; lpToBurn: bigint | TransactionArgument; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument; policy: TransactionObjectInput; honeyManager: TransactionObjectInput }

export function removeLiquidityFromXHoneyPoolAndReturn(tx: Transaction, typeArgs: [string, string, string], args: RemoveLiquidityFromXHoneyPoolAndReturnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::honey_trade::remove_liquidity_from_x_honey_pool_and_return`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.pool), obj(tx, args.lpCoins), pure(tx, args.lpToBurn, `u64`), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`), obj(tx, args.policy), obj(tx, args.honeyManager)], }) }

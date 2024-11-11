import { dragonfood } from ".."
const PUBLISHED_AT = dragonfood.PUBLISHED_AT
import { String } from "../../_dependencies/source/0x1/ascii/structs";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { String as String1 } from "../../_dependencies/source/0x1/string/structs";
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";


export interface KraftGenesisHoneyArgs { dragonFood: TransactionObjectInput; honeyKraftCap: TransactionObjectInput; beesManager: TransactionObjectInput; lpIncentivesPct: bigint | TransactionArgument; treasuryPct: bigint | TransactionArgument; dragonEggsBasketPct: bigint | TransactionArgument; vestingPct: bigint | TransactionArgument }

export function kraftGenesisHoney(tx: Transaction, args: KraftGenesisHoneyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::kraft_genesis_honey`, arguments: [obj(tx, args.dragonFood), obj(tx, args.honeyKraftCap), obj(tx, args.beesManager), pure(tx, args.lpIncentivesPct, `u64`), pure(tx, args.treasuryPct, `u64`), pure(tx, args.dragonEggsBasketPct, `u64`), pure(tx, args.vestingPct, `u64`)], }) }

export interface AccessDragonDenArgs { poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function accessDragonDen(tx: Transaction, typeArg: string, args: AccessDragonDenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::access_dragon_den`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`)], }) }

export interface AccessDragonDenFruitClaimIndexArgs { poolHive: TransactionObjectInput; user: string | TransactionArgument; honeyFruit: string | TransactionArgument }

export function accessDragonDenFruitClaimIndex(tx: Transaction, typeArg: string, args: AccessDragonDenFruitClaimIndexArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::access_dragon_den_fruit_claim_index`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.user, `address`), pure(tx, args.honeyFruit, `${String.$typeName}`)], }) }

export interface AccessDragonDenWithRewards0FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: string | TransactionArgument }

export function accessDragonDenWithRewards0Fruits(tx: Transaction, typeArg: string, args: AccessDragonDenWithRewards0FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::access_dragon_den_with_rewards_0_fruits`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.dragonTrainer, `address`)], }) }

export interface AccessDragonDenWithRewards1FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: string | TransactionArgument }

export function accessDragonDenWithRewards1Fruits(tx: Transaction, typeArgs: [string, string], args: AccessDragonDenWithRewards1FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::access_dragon_den_with_rewards_1_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.dragonTrainer, `address`)], }) }

export interface AccessDragonDenWithRewards2FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: string | TransactionArgument }

export function accessDragonDenWithRewards2Fruits(tx: Transaction, typeArgs: [string, string, string], args: AccessDragonDenWithRewards2FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::access_dragon_den_with_rewards_2_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.dragonTrainer, `address`)], }) }

export interface AccessDragonDenWithRewards3FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: string | TransactionArgument }

export function accessDragonDenWithRewards3Fruits(tx: Transaction, typeArgs: [string, string, string, string], args: AccessDragonDenWithRewards3FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::access_dragon_den_with_rewards_3_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.dragonTrainer, `address`)], }) }

export interface AccrueYieldForDragonDenArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; curEpoch: bigint | TransactionArgument }

export function accrueYieldForDragonDen(tx: Transaction, typeArg: string, args: AccrueYieldForDragonDenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::accrue_yield_for_dragon_den`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), pure(tx, args.curEpoch, `u64`)], }) }

export interface AddBribeForEmissionsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; bribeToken: TransactionObjectInput; forCycle: bigint | TransactionArgument; bribeForHiveEmisions: bigint | TransactionArgument; bribeForHoneyEmisions: bigint | TransactionArgument }

export function addBribeForEmissions(tx: Transaction, typeArgs: [string, string], args: AddBribeForEmissionsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::add_bribe_for_emissions`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.bribeToken), pure(tx, args.forCycle, `u64`), pure(tx, args.bribeForHiveEmisions, `u64`), pure(tx, args.bribeForHoneyEmisions, `u64`)], }) }

export interface AddHiveBribeForPoolHiveArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; hiveCoin: TransactionObjectInput; hiveBribeAmt: bigint | TransactionArgument }

export function addHiveBribeForPoolHive(tx: Transaction, typeArg: string, args: AddHiveBribeForPoolHiveArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::add_hive_bribe_for_pool_hive`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.hiveCoin), pure(tx, args.hiveBribeAmt, `u64`)], }) }

export interface AddHiveToLockedDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; hiveCoin: TransactionObjectInput; hiveAmt: bigint | TransactionArgument }

export function addHiveToLockedDragonBee(tx: Transaction, typeArg: string, args: AddHiveToLockedDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::add_hive_to_locked_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.hiveCoin), pure(tx, args.hiveAmt, `u64`)], }) }

export interface AddHoneyBribeForPoolHiveArgs { dragonFood: TransactionObjectInput; honeyManager: TransactionObjectInput; poolHive: TransactionObjectInput; policy: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyBribeAmt: bigint | TransactionArgument }

export function addHoneyBribeForPoolHive(tx: Transaction, typeArg: string, args: AddHoneyBribeForPoolHiveArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::add_honey_bribe_for_pool_hive`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.honeyManager), obj(tx, args.poolHive), obj(tx, args.policy), obj(tx, args.honeyTokenIn), pure(tx, args.honeyBribeAmt, `u64`)], }) }

export interface AddHoneyToLockedDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; honeyToken: TransactionObjectInput; honeyAmt: bigint | TransactionArgument }

export function addHoneyToLockedDragonBee(tx: Transaction, typeArg: string, args: AddHoneyToLockedDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::add_honey_to_locked_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.honeyToken), pure(tx, args.honeyAmt, `u64`)], }) }

export interface AddMoreFruitsArgs { poolHive: TransactionObjectInput; fruits: TransactionObjectInput; addAmount: bigint | TransactionArgument }

export function addMoreFruits(tx: Transaction, typeArgs: [string, string], args: AddMoreFruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::add_more_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.poolHive), obj(tx, args.fruits), pure(tx, args.addAmount, `u64`)], }) }

export interface AddMoreFruitsCoinsArgs { poolHive: TransactionObjectInput; fruits: TransactionObjectInput; addAmount: bigint | TransactionArgument }

export function addMoreFruitsCoins(tx: Transaction, typeArgs: [string, string], args: AddMoreFruitsCoinsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::add_more_fruits_coins`, typeArguments: typeArgs, arguments: [obj(tx, args.poolHive), obj(tx, args.fruits), pure(tx, args.addAmount, `u64`)], }) }

export interface CalculateFruitRewardsArgs { fruitRewards: TransactionObjectInput; dragonDen: TransactionObjectInput; totalStaked: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function calculateFruitRewards(tx: Transaction, typeArgs: [string, string], args: CalculateFruitRewardsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::calculate_fruit_rewards`, typeArguments: typeArgs, arguments: [obj(tx, args.fruitRewards), obj(tx, args.dragonDen), pure(tx, args.totalStaked, `u64`), pure(tx, args.curEpoch, `u64`)], }) }

export interface CastvoteArgs { poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; proposalId: bigint | TransactionArgument; curVote: boolean | TransactionArgument }

export function castvote(tx: Transaction, typeArg: string, args: CastvoteArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::castVote`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.proposalId, `u64`), pure(tx, args.curVote, `bool`)], }) }

export interface CastvoteWithcompprofileArgs { poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; proposalId: bigint | TransactionArgument; curVote: boolean | TransactionArgument }

export function castvoteWithcompprofile(tx: Transaction, typeArg: string, args: CastvoteWithcompprofileArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::castVote_withCompProfile`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.proposalId, `u64`), pure(tx, args.curVote, `bool`)], }) }

export interface ClaimBribesForUserArgs { poolHive: TransactionObjectInput; bribeABalAmt: bigint | TransactionArgument; bribeBBalAmt: bigint | TransactionArgument; bribeCBalAmt: bigint | TransactionArgument; isThreePool: boolean | TransactionArgument }

export function claimBribesForUser(tx: Transaction, typeArgs: [string, string, string, string], args: ClaimBribesForUserArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_bribes_for_user`, typeArguments: typeArgs, arguments: [obj(tx, args.poolHive), pure(tx, args.bribeABalAmt, `u64`), pure(tx, args.bribeBBalAmt, `u64`), pure(tx, args.bribeCBalAmt, `u64`), pure(tx, args.isThreePool, `bool`)], }) }

export interface ClaimFeesFromYieldFlowForPoolArgs { dragonFood: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput }

export function claimFeesFromYieldFlowForPool(tx: Transaction, typeArg: string, args: ClaimFeesFromYieldFlowForPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_fees_from_yield_flow_for_pool`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.yieldFlow), obj(tx, args.poolHive)], }) }

export interface ClaimFruitForDragonDenArgs { fruitRewards: TransactionObjectInput; dragonDen: TransactionObjectInput; poolHiveAddr: string | TransactionArgument; totalStaked: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument; trainerAddr: string | TransactionArgument; username: string | TransactionArgument; isWithdraw: boolean | TransactionArgument }

export function claimFruitForDragonDen(tx: Transaction, typeArgs: [string, string], args: ClaimFruitForDragonDenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_fruit_for_dragon_den`, typeArguments: typeArgs, arguments: [obj(tx, args.fruitRewards), obj(tx, args.dragonDen), pure(tx, args.poolHiveAddr, `address`), pure(tx, args.totalStaked, `u64`), pure(tx, args.curEpoch, `u64`), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`), pure(tx, args.isWithdraw, `bool`)], }) }

export interface ClaimRewardsAndUnbondSharesArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainerAddr: string | TransactionArgument; dragonDen: TransactionObjectInput; unbondAmount: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument; isLiquidation: boolean | TransactionArgument }

export function claimRewardsAndUnbondShares(tx: Transaction, typeArg: string, args: ClaimRewardsAndUnbondSharesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_rewards_and_unbond_shares`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.dragonTrainerAddr, `address`), obj(tx, args.dragonDen), pure(tx, args.unbondAmount, `u64`), pure(tx, args.curEpoch, `u64`), pure(tx, args.isLiquidation, `bool`)], }) }

export interface ClaimTradingFeesForUserArgs { poolHive: TransactionObjectInput; dragonBee: TransactionObjectInput; userBeeEnergy: bigint | TransactionArgument; userBeeHealth: bigint | TransactionArgument; feesClaimFrom: bigint | TransactionArgument; feesClaimTill: bigint | TransactionArgument }

export function claimTradingFeesForUser(tx: Transaction, typeArg: string, args: ClaimTradingFeesForUserArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_trading_fees_for_user`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), obj(tx, args.dragonBee), pure(tx, args.userBeeEnergy, `u256`), pure(tx, args.userBeeHealth, `u256`), pure(tx, args.feesClaimFrom, `u64`), pure(tx, args.feesClaimTill, `u64`)], }) }

export interface ClaimVotingRewardsThreePoolArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function claimVotingRewardsThreePool(tx: Transaction, typeArgs: [string, string, string, string], args: ClaimVotingRewardsThreePoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_voting_rewards_three_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), obj(tx, args.dragonTrainer)], }) }

export interface ClaimVotingRewardsThreePoolDragonSchoolArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput }

export function claimVotingRewardsThreePoolDragonSchool(tx: Transaction, typeArgs: [string, string, string, string], args: ClaimVotingRewardsThreePoolDragonSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_voting_rewards_three_pool_dragon_school`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), obj(tx, args.dragonSchool)], }) }

export interface ClaimVotingRewardsTwoPoolArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function claimVotingRewardsTwoPool(tx: Transaction, typeArgs: [string, string, string], args: ClaimVotingRewardsTwoPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_voting_rewards_two_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), obj(tx, args.dragonTrainer)], }) }

export interface ClaimVotingRewardsTwoPoolDragonSchoolArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput }

export function claimVotingRewardsTwoPoolDragonSchool(tx: Transaction, typeArgs: [string, string, string], args: ClaimVotingRewardsTwoPoolDragonSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_voting_rewards_two_pool_dragon_school`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), obj(tx, args.dragonSchool)], }) }

export interface ClaimVotingRewardsTwoPoolWithBurnTaxArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; treasuryCap: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function claimVotingRewardsTwoPoolWithBurnTax(tx: Transaction, typeArgs: [string, string, string], args: ClaimVotingRewardsTwoPoolWithBurnTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::claim_voting_rewards_two_pool_with_burn_tax`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.treasuryCap), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), obj(tx, args.dragonTrainer)], }) }

export interface ComputeBribeForUserArgs { bribe: TransactionObjectInput; emissionsCycle: bigint | TransactionArgument; userBeeEnergy: bigint | TransactionArgument; userBeeHealth: bigint | TransactionArgument; activeHiveEnergy: bigint | TransactionArgument; activeHoneyHealth: bigint | TransactionArgument }

export function computeBribeForUser(tx: Transaction, typeArg: string, args: ComputeBribeForUserArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::compute_bribe_for_user`, typeArguments: [typeArg], arguments: [obj(tx, args.bribe), pure(tx, args.emissionsCycle, `u64`), pure(tx, args.userBeeEnergy, `u256`), pure(tx, args.userBeeHealth, `u256`), pure(tx, args.activeHiveEnergy, `u256`), pure(tx, args.activeHoneyHealth, `u256`)], }) }

export interface ComputeBribesForUserArgs { poolHive: TransactionObjectInput; userBeeEnergy: bigint | TransactionArgument; userBeeHealth: bigint | TransactionArgument; bribesClaimFrom: bigint | TransactionArgument; bribesClaimTill: bigint | TransactionArgument; isThreePool: boolean | TransactionArgument }

export function computeBribesForUser(tx: Transaction, typeArgs: [string, string, string, string], args: ComputeBribesForUserArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::compute_bribes_for_user`, typeArguments: typeArgs, arguments: [obj(tx, args.poolHive), pure(tx, args.userBeeEnergy, `u256`), pure(tx, args.userBeeHealth, `u256`), pure(tx, args.bribesClaimFrom, `u64`), pure(tx, args.bribesClaimTill, `u64`), pure(tx, args.isThreePool, `bool`)], }) }

export interface DepositHiveAsLpIncentivesArgs { dragonFood: TransactionObjectInput; hiveCoins: TransactionObjectInput; incentivesAmount: bigint | TransactionArgument }

export function depositHiveAsLpIncentives(tx: Transaction, args: DepositHiveAsLpIncentivesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::deposit_hive_as_lp_incentives`, arguments: [obj(tx, args.dragonFood), obj(tx, args.hiveCoins), pure(tx, args.incentivesAmount, `u64`)], }) }

export interface DepositHoneyAsIncentivesArgs { dragonFood: TransactionObjectInput; honeyBalance: TransactionObjectInput }

export function depositHoneyAsIncentives(tx: Transaction, args: DepositHoneyAsIncentivesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::deposit_honey_as_incentives`, arguments: [obj(tx, args.dragonFood), obj(tx, args.honeyBalance)], }) }

export function destroyFruitRewards(tx: Transaction, typeArg: string, fruitRewards: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::destroy_fruit_rewards`, typeArguments: [typeArg], arguments: [obj(tx, fruitRewards)], }) }

export function destroyProposal(tx: Transaction, proposal: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::destroy_proposal`, arguments: [obj(tx, proposal)], }) }

export interface EvaluateproposalArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; proposalId: bigint | TransactionArgument; disperser: TransactionObjectInput }

export function evaluateproposal(tx: Transaction, typeArg: string, args: EvaluateproposalArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::evaluateProposal`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.proposalId, `u64`), obj(tx, args.disperser)], }) }

export interface ExecuteproposaltoaddfruitArgs { poolHive: TransactionObjectInput; proposalId: bigint | TransactionArgument }

export function executeproposaltoaddfruit(tx: Transaction, typeArgs: [string, string], args: ExecuteproposaltoaddfruitArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::executeProposalToAddFruit`, typeArguments: typeArgs, arguments: [obj(tx, args.poolHive), pure(tx, args.proposalId, `u64`)], }) }

export interface ExecutethreepoolproposalArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; pool: TransactionObjectInput; proposalId: bigint | TransactionArgument }

export function executethreepoolproposal(tx: Transaction, typeArgs: [string, string, string, string], args: ExecutethreepoolproposalArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::executeThreePoolProposal`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.pool), pure(tx, args.proposalId, `u64`)], }) }

export interface ExecutetwopoolproposalArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; pool: TransactionObjectInput; proposalId: bigint | TransactionArgument }

export function executetwopoolproposal(tx: Transaction, typeArgs: [string, string, string], args: ExecutetwopoolproposalArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::executeTwoPoolProposal`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.pool), pure(tx, args.proposalId, `u64`)], }) }

export interface FeedBeeInDenArgs { dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; beesManager: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function feedBeeInDen(tx: Transaction, typeArg: string, args: FeedBeeInDenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::feed_bee_in_den`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.beesManager), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export interface FeedDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonTrainer: TransactionObjectInput; dragonDen: TransactionObjectInput; honeyEarned: TransactionObjectInput; hiveEarnedAmt: bigint | TransactionArgument }

export function feedDragonBee(tx: Transaction, typeArg: string, args: FeedDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::feed_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.yieldFarm), obj(tx, args.dragonTrainer), obj(tx, args.dragonDen), obj(tx, args.honeyEarned), pure(tx, args.hiveEarnedAmt, `u64`)], }) }

export interface FeedDragonBeeSchoolArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonSchool: TransactionObjectInput; dragonDen: TransactionObjectInput; honeyEarned: TransactionObjectInput; hiveEarnedAmt: bigint | TransactionArgument }

export function feedDragonBeeSchool(tx: Transaction, typeArg: string, args: FeedDragonBeeSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::feed_dragon_bee_school`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.yieldFarm), obj(tx, args.dragonSchool), obj(tx, args.dragonDen), obj(tx, args.honeyEarned), pure(tx, args.hiveEarnedAmt, `u64`)], }) }

export interface GameMasterAddHiveToLockedDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput; hiveCoin: TransactionObjectInput; hiveAmt: bigint | TransactionArgument }

export function gameMasterAddHiveToLockedDragonBee(tx: Transaction, typeArg: string, args: GameMasterAddHiveToLockedDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::game_master_add_hive_to_locked_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonSchool), obj(tx, args.hiveCoin), pure(tx, args.hiveAmt, `u64`)], }) }

export interface GameMasterAddHoneyToLockedDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput; honeyManager: TransactionObjectInput; policy: TransactionObjectInput; honeyToken: TransactionObjectInput; honeyAmt: bigint | TransactionArgument }

export function gameMasterAddHoneyToLockedDragonBee(tx: Transaction, typeArg: string, args: GameMasterAddHoneyToLockedDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::game_master_add_honey_to_locked_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonSchool), obj(tx, args.honeyManager), obj(tx, args.policy), obj(tx, args.honeyToken), pure(tx, args.honeyAmt, `u64`)], }) }

export interface GameMasterFeedBeeInDenArgs { dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput; mysticalBee: TransactionObjectInput }

export function gameMasterFeedBeeInDen(tx: Transaction, typeArg: string, args: GameMasterFeedBeeInDenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::game_master_feed_bee_in_den`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonSchool), obj(tx, args.mysticalBee)], }) }

export interface GameMasterRequestWithdrawalForDragonBeeArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput }

export function gameMasterRequestWithdrawalForDragonBee(tx: Transaction, typeArg: string, args: GameMasterRequestWithdrawalForDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::game_master_request_withdrawal_for_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonSchool)], }) }

export interface GameMasterWithdrawDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput }

export function gameMasterWithdrawDragonBee(tx: Transaction, typeArg: string, args: GameMasterWithdrawDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::game_master_withdraw_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonSchool)], }) }

export interface GetBribesForPoolHiveArgs { poolHive: TransactionObjectInput; cycle: bigint | TransactionArgument }

export function getBribesForPoolHive(tx: Transaction, typeArgs: [string, string], args: GetBribesForPoolHiveArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_bribes_for_pool_hive`, typeArguments: typeArgs, arguments: [obj(tx, args.poolHive), pure(tx, args.cycle, `u64`)], }) }

export interface GetClaimedIndexesForDragonBeeArgs { poolHive: TransactionObjectInput; dragonTrainer: string | TransactionArgument; cycle: bigint | TransactionArgument }

export function getClaimedIndexesForDragonBee(tx: Transaction, typeArg: string, args: GetClaimedIndexesForDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_claimed_indexes_for_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.dragonTrainer, `address`), pure(tx, args.cycle, `u64`)], }) }

export function getDragonFood(tx: Transaction, dragonFood: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_dragon_food`, arguments: [obj(tx, dragonFood)], }) }

export interface GetExpectedYieldArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; curEpoch: bigint | TransactionArgument }

export function getExpectedYield(tx: Transaction, typeArg: string, args: GetExpectedYieldArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_expected_yield`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), pure(tx, args.curEpoch, `u64`)], }) }

export function getFoodEmissions(tx: Transaction, dragonFood: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_food_emissions`, arguments: [obj(tx, dragonFood)], }) }

export interface GetHiveEmissionsVotesArgs { dragonFood: TransactionObjectInput; cycle: bigint | TransactionArgument }

export function getHiveEmissionsVotes(tx: Transaction, args: GetHiveEmissionsVotesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_hive_emissions_votes`, arguments: [obj(tx, args.dragonFood), pure(tx, args.cycle, `u64`)], }) }

export interface GetHoneyEmissionsVotesArgs { dragonFood: TransactionObjectInput; cycle: bigint | TransactionArgument }

export function getHoneyEmissionsVotes(tx: Transaction, args: GetHoneyEmissionsVotesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_honey_emissions_votes`, arguments: [obj(tx, args.dragonFood), pure(tx, args.cycle, `u64`)], }) }

export interface GetLockedBeesInfoArgs { poolHive: TransactionObjectInput; dragonTrainerAddr: string | TransactionArgument }

export function getLockedBeesInfo(tx: Transaction, typeArg: string, args: GetLockedBeesInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_locked_bees_info`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.dragonTrainerAddr, `address`)], }) }

export interface GetLockedDragonBeeInfoArgs { poolHive: TransactionObjectInput; dragonTrainer: string | TransactionArgument }

export function getLockedDragonBeeInfo(tx: Transaction, typeArg: string, args: GetLockedDragonBeeInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_locked_dragon_bee_info`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.dragonTrainer, `address`)], }) }

export function getOngoingCycle(tx: Transaction, dragonFood: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_ongoing_cycle`, arguments: [obj(tx, dragonFood)], }) }

export function getPoolHive(tx: Transaction, typeArg: string, poolHive: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_pool_hive`, typeArguments: [typeArg], arguments: [obj(tx, poolHive)], }) }

export function getPoolHiveAddr(tx: Transaction, typeArg: string, dragonFood: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_pool_hive_addr`, typeArguments: [typeArg], arguments: [obj(tx, dragonFood)], }) }

export interface GetPoolHiveProposalArgs { poolHive: TransactionObjectInput; proposalId: bigint | TransactionArgument }

export function getPoolHiveProposal(tx: Transaction, typeArg: string, args: GetPoolHiveProposalArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_pool_hive_proposal`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.proposalId, `u64`)], }) }

export interface GetPoolHiveProposalFruitLifeArgs { poolHive: TransactionObjectInput; proposalId: bigint | TransactionArgument }

export function getPoolHiveProposalFruitLife(tx: Transaction, typeArg: string, args: GetPoolHiveProposalFruitLifeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_pool_hive_proposal_fruit_life`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.proposalId, `u64`)], }) }

export interface GetPoolHiveProposalParamsArgs { poolHive: TransactionObjectInput; proposalId: bigint | TransactionArgument }

export function getPoolHiveProposalParams(tx: Transaction, typeArg: string, args: GetPoolHiveProposalParamsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_pool_hive_proposal_params`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.proposalId, `u64`)], }) }

export interface GetTotalVotesForDirectingEmissionsArgs { dragonFood: TransactionObjectInput; cycle: bigint | TransactionArgument }

export function getTotalVotesForDirectingEmissions(tx: Transaction, args: GetTotalVotesForDirectingEmissionsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_total_votes_for_directing_emissions`, arguments: [obj(tx, args.dragonFood), pure(tx, args.cycle, `u64`)], }) }

export interface GetUserVoteInfoArgs { poolHive: TransactionObjectInput; proposalId: bigint | TransactionArgument; trainerAddr: string | TransactionArgument }

export function getUserVoteInfo(tx: Transaction, typeArg: string, args: GetUserVoteInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_user_vote_info`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.proposalId, `u64`), pure(tx, args.trainerAddr, `address`)], }) }

export function getVoteConfig(tx: Transaction, dragonFood: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_vote_config`, arguments: [obj(tx, dragonFood)], }) }

export interface GetVotesRcvdForCycleArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; ongoingCycle: bigint | TransactionArgument }

export function getVotesRcvdForCycle(tx: Transaction, typeArg: string, args: GetVotesRcvdForCycleArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::get_votes_rcvd_for_cycle`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.ongoingCycle, `u64`)], }) }

export function incrementDragonFood(tx: Transaction, dragonFood: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::increment_dragon_food`, arguments: [obj(tx, dragonFood)], }) }

export function incrementPoolHive(tx: Transaction, typeArg: string, poolHive: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::increment_pool_hive`, typeArguments: [typeArg], arguments: [obj(tx, poolHive)], }) }

export interface InitializeDragonFoodEmissionsArgs { dragonFoodCap: TransactionObjectInput; startEpoch: bigint | TransactionArgument; hiveProposalDeposit: bigint | TransactionArgument; votingStartDelay: bigint | TransactionArgument; votingPeriodLength: bigint | TransactionArgument; executionDelay: bigint | TransactionArgument; executionPeriodLength: bigint | TransactionArgument; proposalRequiredQuorum: bigint | TransactionArgument; proposalApprovalThreshold: bigint | TransactionArgument; curCycleStartEpoch: bigint | TransactionArgument; cycleDuration: bigint | TransactionArgument; changePctPerCycle: bigint | TransactionArgument }

export function initializeDragonFoodEmissions(tx: Transaction, args: InitializeDragonFoodEmissionsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::initialize_dragon_food_emissions`, arguments: [obj(tx, args.dragonFoodCap), pure(tx, args.startEpoch, `u64`), pure(tx, args.hiveProposalDeposit, `u64`), pure(tx, args.votingStartDelay, `u64`), pure(tx, args.votingPeriodLength, `u64`), pure(tx, args.executionDelay, `u64`), pure(tx, args.executionPeriodLength, `u64`), pure(tx, args.proposalRequiredQuorum, `u64`), pure(tx, args.proposalApprovalThreshold, `u64`), pure(tx, args.curCycleStartEpoch, `u64`), pure(tx, args.cycleDuration, `u64`), pure(tx, args.changePctPerCycle, `u64`)], }) }

export interface InternalAddHiveToDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument; hiveBalanceToAdd: TransactionObjectInput }

export function internalAddHiveToDragonBee(tx: Transaction, typeArg: string, args: InternalAddHiveToDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_add_hive_to_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`), obj(tx, args.hiveBalanceToAdd)], }) }

export interface InternalAddHoneyToDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument; honeyBalanceToAdd: TransactionObjectInput }

export function internalAddHoneyToDragonBee(tx: Transaction, typeArg: string, args: InternalAddHoneyToDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_add_honey_to_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`), obj(tx, args.honeyBalanceToAdd)], }) }

export interface InternalCastvoteArgs { poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument; username: string | TransactionArgument; proposalId: bigint | TransactionArgument; curVote: boolean | TransactionArgument }

export function internalCastvote(tx: Transaction, typeArg: string, args: InternalCastvoteArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_castVote`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`), pure(tx, args.proposalId, `u64`), pure(tx, args.curVote, `bool`)], }) }

export interface InternalClaimVotingRewardsThreePoolArgs { dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function internalClaimVotingRewardsThreePool(tx: Transaction, typeArgs: [string, string, string, string], args: InternalClaimVotingRewardsThreePoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_claim_voting_rewards_three_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`)], }) }

export interface InternalClaimVotingRewardsTwoPoolArgs { dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; yieldFlow: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument; isBribeTokenClaim: boolean | TransactionArgument }

export function internalClaimVotingRewardsTwoPool(tx: Transaction, typeArgs: [string, string, string], args: InternalClaimVotingRewardsTwoPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_claim_voting_rewards_two_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.yieldFlow), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`), pure(tx, args.isBribeTokenClaim, `bool`)], }) }

export interface InternalDepositNoFruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; lpBalance: TransactionObjectInput; trainerAddr: string | TransactionArgument; username: string | TransactionArgument }

export function internalDepositNoFruits(tx: Transaction, typeArg: string, args: InternalDepositNoFruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_deposit_no_fruits`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), obj(tx, args.lpBalance), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`)], }) }

export interface InternalDepositWith1FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; lpBalance: TransactionObjectInput; trainerAddr: string | TransactionArgument; username: string | TransactionArgument }

export function internalDepositWith1Fruits(tx: Transaction, typeArgs: [string, string], args: InternalDepositWith1FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_deposit_with_1_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), obj(tx, args.lpBalance), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`)], }) }

export interface InternalDepositWith2FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; lpBalance: TransactionObjectInput; trainerAddr: string | TransactionArgument; username: string | TransactionArgument }

export function internalDepositWith2Fruits(tx: Transaction, typeArgs: [string, string, string], args: InternalDepositWith2FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_deposit_with_2_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), obj(tx, args.lpBalance), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`)], }) }

export interface InternalDepositWith3FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; lpBalance: TransactionObjectInput; trainerAddr: string | TransactionArgument; username: string | TransactionArgument }

export function internalDepositWith3Fruits(tx: Transaction, typeArgs: [string, string, string, string], args: InternalDepositWith3FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_deposit_with_3_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), obj(tx, args.lpBalance), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`)], }) }

export interface InternalLockDragonBeeArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; mysticalBee: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function internalLockDragonBee(tx: Transaction, typeArg: string, args: InternalLockDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_lock_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.mysticalBee), pure(tx, args.trainerAddr, `address`)], }) }

export interface InternalProcessWithdrawlRequestArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function internalProcessWithdrawlRequest(tx: Transaction, typeArg: string, args: InternalProcessWithdrawlRequestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_process_withdrawl_request`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`)], }) }

export interface InternalUnbondNoFruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; trainerAddr: string | TransactionArgument; unbondAmount: bigint | TransactionArgument }

export function internalUnbondNoFruits(tx: Transaction, typeArg: string, args: InternalUnbondNoFruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_unbond_no_fruits`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), pure(tx, args.trainerAddr, `address`), pure(tx, args.unbondAmount, `u64`)], }) }

export interface InternalUnbondWith1FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; trainerAddr: string | TransactionArgument; username: string | TransactionArgument; unbondAmount: bigint | TransactionArgument }

export function internalUnbondWith1Fruits(tx: Transaction, typeArgs: [string, string], args: InternalUnbondWith1FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_unbond_with_1_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`), pure(tx, args.unbondAmount, `u64`)], }) }

export interface InternalUnbondWith2FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; trainerAddr: string | TransactionArgument; username: string | TransactionArgument; unbondAmount: bigint | TransactionArgument }

export function internalUnbondWith2Fruits(tx: Transaction, typeArgs: [string, string, string], args: InternalUnbondWith2FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_unbond_with_2_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`), pure(tx, args.unbondAmount, `u64`)], }) }

export interface InternalUnbondWith3FruitsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; trainerAddr: string | TransactionArgument; username: string | TransactionArgument; unbondAmount: bigint | TransactionArgument }

export function internalUnbondWith3Fruits(tx: Transaction, typeArgs: [string, string, string, string], args: InternalUnbondWith3FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_unbond_with_3_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`), pure(tx, args.unbondAmount, `u64`)], }) }

export interface InternalVoteOnEmissionsArgs { dragonFood: TransactionObjectInput; dragonDen: TransactionObjectInput; hiveVoteType: number | TransactionArgument; honeyVoteType: number | TransactionArgument }

export function internalVoteOnEmissions(tx: Transaction, typeArg: string, args: InternalVoteOnEmissionsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_vote_on_emissions`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.dragonDen), pure(tx, args.hiveVoteType, `u8`), pure(tx, args.honeyVoteType, `u8`)], }) }

export interface InternalWithdrawDragonBeeArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function internalWithdrawDragonBee(tx: Transaction, typeArg: string, args: InternalWithdrawDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::internal_withdraw_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`)], }) }

export interface KraftNewPoolHiveThreePoolArgs { dragonFood: TransactionObjectInput; pool: TransactionObjectInput }

export function kraftNewPoolHiveThreePool(tx: Transaction, typeArgs: [string, string, string, string], args: KraftNewPoolHiveThreePoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::kraft_new_pool_hive_three_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.pool)], }) }

export interface KraftNewPoolHiveTwoPoolArgs { dragonFood: TransactionObjectInput; pool: TransactionObjectInput }

export function kraftNewPoolHiveTwoPool(tx: Transaction, typeArgs: [string, string, string], args: KraftNewPoolHiveTwoPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::kraft_new_pool_hive_two_pool`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.pool)], }) }

export interface LiquidateLockedLpArgs { cap: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument; amtToLiquidate: bigint | TransactionArgument }

export function liquidateLockedLp(tx: Transaction, typeArg: string, args: LiquidateLockedLpArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::liquidate_locked_lp`, typeArguments: [typeArg], arguments: [obj(tx, args.cap), obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`), pure(tx, args.amtToLiquidate, `u64`)], }) }

export interface LockHiveIfTradingDisabledArgs { dragonTrainer: TransactionObjectInput; yieldFarm: TransactionObjectInput; hiveBal: TransactionObjectInput }

export function lockHiveIfTradingDisabled(tx: Transaction, args: LockHiveIfTradingDisabledArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::lock_hive_if_trading_disabled`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.yieldFarm), obj(tx, args.hiveBal)], }) }

export interface LockLpTokensForSchoolArgs { cap: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput }

export function lockLpTokensForSchool(tx: Transaction, typeArg: string, args: LockLpTokensForSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::lock_lp_tokens_for_school`, typeArguments: [typeArg], arguments: [obj(tx, args.cap), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonSchool)], }) }

export interface LockLpTokensForTrainerArgs { cap: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function lockLpTokensForTrainer(tx: Transaction, typeArg: string, args: LockLpTokensForTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::lock_lp_tokens_for_trainer`, typeArguments: [typeArg], arguments: [obj(tx, args.cap), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonTrainer)], }) }

export interface MarkBribeAsMemeTokenArgs { memeCap: TransactionObjectInput; poolHive: TransactionObjectInput }

export function markBribeAsMemeToken(tx: Transaction, typeArgs: [string, string], args: MarkBribeAsMemeTokenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::mark_bribe_as_meme_token`, typeArguments: typeArgs, arguments: [obj(tx, args.memeCap), obj(tx, args.poolHive)], }) }

export interface QueryAccessDragonDenArgs { poolHive: TransactionObjectInput; dragonTrainer: string | TransactionArgument }

export function queryAccessDragonDen(tx: Transaction, typeArg: string, args: QueryAccessDragonDenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::query_access_dragon_den`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), pure(tx, args.dragonTrainer, `address`)], }) }

export interface RemoveexpiredproposalArgs { poolHive: TransactionObjectInput; disperser: TransactionObjectInput; proposalId: bigint | TransactionArgument }

export function removeexpiredproposal(tx: Transaction, typeArg: string, args: RemoveexpiredproposalArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::removeExpiredProposal`, typeArguments: [typeArg], arguments: [obj(tx, args.poolHive), obj(tx, args.disperser), pure(tx, args.proposalId, `u64`)], }) }

export function removeExpiredFruit(tx: Transaction, typeArgs: [string, string], poolHive: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::remove_expired_fruit`, typeArguments: typeArgs, arguments: [obj(tx, poolHive)], }) }

export interface RequestWithdrawalForDragonBeeArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function requestWithdrawalForDragonBee(tx: Transaction, typeArg: string, args: RequestWithdrawalForDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::request_withdrawal_for_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonTrainer)], }) }

export interface StakeLpArgs { trainerAddr: string | TransactionArgument; username: string | TransactionArgument; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonDen: TransactionObjectInput; lpBalance: TransactionObjectInput; curEpoch: bigint | TransactionArgument }

export function stakeLp(tx: Transaction, typeArg: string, args: StakeLpArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp`, typeArguments: [typeArg], arguments: [pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String1.$typeName}`), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonDen), obj(tx, args.lpBalance), pure(tx, args.curEpoch, `u64`)], }) }

export interface StakeLp0FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; lpBalance: TransactionObjectInput }

export function stakeLp0Fruits(tx: Transaction, typeArg: string, args: StakeLp0FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp_0_fruits`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.lpBalance)], }) }

export interface StakeLp0FruitsWithCompTrainerArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonSchool: TransactionObjectInput; lpBalance: TransactionObjectInput }

export function stakeLp0FruitsWithCompTrainer(tx: Transaction, typeArg: string, args: StakeLp0FruitsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp_0_fruits_with_comp_trainer`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.yieldFarm), obj(tx, args.dragonSchool), obj(tx, args.lpBalance)], }) }

export interface StakeLp1FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; lpBalance: TransactionObjectInput }

export function stakeLp1Fruits(tx: Transaction, typeArgs: [string, string], args: StakeLp1FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp_1_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.lpBalance)], }) }

export interface StakeLp1FruitsWithCompTrainerArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput; lpBalance: TransactionObjectInput }

export function stakeLp1FruitsWithCompTrainer(tx: Transaction, typeArgs: [string, string], args: StakeLp1FruitsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp_1_fruits_with_comp_trainer`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonSchool), obj(tx, args.lpBalance)], }) }

export interface StakeLp2FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; lpBalance: TransactionObjectInput }

export function stakeLp2Fruits(tx: Transaction, typeArgs: [string, string, string], args: StakeLp2FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp_2_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.lpBalance)], }) }

export interface StakeLp2FruitsWithCompTrainerArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput; lpBalance: TransactionObjectInput }

export function stakeLp2FruitsWithCompTrainer(tx: Transaction, typeArgs: [string, string, string], args: StakeLp2FruitsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp_2_fruits_with_comp_trainer`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonSchool), obj(tx, args.lpBalance)], }) }

export interface StakeLp3FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; lpBalance: TransactionObjectInput }

export function stakeLp3Fruits(tx: Transaction, typeArgs: [string, string, string, string], args: StakeLp3FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp_3_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), obj(tx, args.lpBalance)], }) }

export interface StakeLp3FruitsWithCompTrainerArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput; lpBalance: TransactionObjectInput }

export function stakeLp3FruitsWithCompTrainer(tx: Transaction, typeArgs: [string, string, string, string], args: StakeLp3FruitsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::stake_lp_3_fruits_with_comp_trainer`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonSchool), obj(tx, args.lpBalance)], }) }

export interface SubmitProposalArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; hiveLockup: TransactionObjectInput; proposalType: bigint | TransactionArgument; title: string | TransactionArgument; description: string | TransactionArgument; link: string | TransactionArgument; newFeeInfo: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); newParams: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); newWeights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function submitProposal(tx: Transaction, typeArg: string, args: SubmitProposalArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::submit_proposal`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.hiveLockup), pure(tx, args.proposalType, `u64`), pure(tx, args.title, `${String1.$typeName}`), pure(tx, args.description, `${String1.$typeName}`), pure(tx, args.link, `${String1.$typeName}`), pure(tx, args.newFeeInfo, `${Option.$typeName}<vector<u64>>`), pure(tx, args.newParams, `${Option.$typeName}<vector<u64>>`), pure(tx, args.newWeights, `${Option.$typeName}<vector<u64>>`)], }) }

export interface SubmitProposalToAddFruitArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; hiveLockup: TransactionObjectInput; proposalType: bigint | TransactionArgument; title: string | TransactionArgument; description: string | TransactionArgument; link: string | TransactionArgument; fruitStartEpoch: bigint | TransactionArgument; fruitEndEpoch: bigint | TransactionArgument }

export function submitProposalToAddFruit(tx: Transaction, typeArgs: [string, string], args: SubmitProposalToAddFruitArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::submit_proposal_to_add_fruit`, typeArguments: typeArgs, arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.hiveLockup), pure(tx, args.proposalType, `u64`), pure(tx, args.title, `${String1.$typeName}`), pure(tx, args.description, `${String1.$typeName}`), pure(tx, args.link, `${String1.$typeName}`), pure(tx, args.fruitStartEpoch, `u64`), pure(tx, args.fruitEndEpoch, `u64`)], }) }

export interface UnbondFromDragonDen0FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen0Fruits(tx: Transaction, typeArg: string, args: UnbondFromDragonDen0FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unbond_from_dragon_den_0_fruits`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.unbondAmount, `u64`)], }) }

export interface UnbondFromDragonDen0FruitsWithCompTrainerArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonSchool: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen0FruitsWithCompTrainer(tx: Transaction, typeArg: string, args: UnbondFromDragonDen0FruitsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unbond_from_dragon_den_0_fruits_with_comp_trainer`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.yieldFarm), obj(tx, args.dragonSchool), pure(tx, args.unbondAmount, `u64`)], }) }

export interface UnbondFromDragonDen1FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen1Fruits(tx: Transaction, typeArgs: [string, string], args: UnbondFromDragonDen1FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unbond_from_dragon_den_1_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.unbondAmount, `u64`)], }) }

export interface UnbondFromDragonDen1FruitsWithCompTrainerArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonSchool: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen1FruitsWithCompTrainer(tx: Transaction, typeArgs: [string, string], args: UnbondFromDragonDen1FruitsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unbond_from_dragon_den_1_fruits_with_comp_trainer`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.yieldFarm), obj(tx, args.dragonSchool), pure(tx, args.unbondAmount, `u64`)], }) }

export interface UnbondFromDragonDen2FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen2Fruits(tx: Transaction, typeArgs: [string, string, string], args: UnbondFromDragonDen2FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unbond_from_dragon_den_2_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.unbondAmount, `u64`)], }) }

export interface UnbondFromDragonDen2FruitsWithCompTrainerArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonSchool: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen2FruitsWithCompTrainer(tx: Transaction, typeArgs: [string, string, string], args: UnbondFromDragonDen2FruitsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unbond_from_dragon_den_2_fruits_with_comp_trainer`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.yieldFarm), obj(tx, args.dragonSchool), pure(tx, args.unbondAmount, `u64`)], }) }

export interface UnbondFromDragonDen3FruitsArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen3Fruits(tx: Transaction, typeArgs: [string, string, string, string], args: UnbondFromDragonDen3FruitsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unbond_from_dragon_den_3_fruits`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.unbondAmount, `u64`)], }) }

export interface UnbondFromDragonDen3FruitsWithCompTrainerArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; yieldFarm: TransactionObjectInput; dragonSchool: TransactionObjectInput; unbondAmount: bigint | TransactionArgument }

export function unbondFromDragonDen3FruitsWithCompTrainer(tx: Transaction, typeArgs: [string, string, string, string], args: UnbondFromDragonDen3FruitsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unbond_from_dragon_den_3_fruits_with_comp_trainer`, typeArguments: typeArgs, arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.yieldFarm), obj(tx, args.dragonSchool), pure(tx, args.unbondAmount, `u64`)], }) }

export interface UnlockLpTokensArgs { cap: TransactionObjectInput; dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function unlockLpTokens(tx: Transaction, typeArg: string, args: UnlockLpTokensArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::unlock_lp_tokens`, typeArguments: [typeArg], arguments: [obj(tx, args.cap), obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`)], }) }

export interface UpdateEmissionsPerEpochArgs { dragonFood: TransactionObjectInput; cap: TransactionObjectInput; newHoneyPerEpoch: bigint | TransactionArgument; newHivePerEpoch: bigint | TransactionArgument; changePctPerCycle: bigint | TransactionArgument }

export function updateEmissionsPerEpoch(tx: Transaction, args: UpdateEmissionsPerEpochArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::update_emissions_per_epoch`, arguments: [obj(tx, args.dragonFood), obj(tx, args.cap), pure(tx, args.newHoneyPerEpoch, `u64`), pure(tx, args.newHivePerEpoch, `u64`), pure(tx, args.changePctPerCycle, `u64`)], }) }

export function updateFoodCycle(tx: Transaction, dragonFood: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::update_food_cycle`, arguments: [obj(tx, dragonFood)], }) }

export interface UpdateFoodCycleForPoolHiveArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput }

export function updateFoodCycleForPoolHive(tx: Transaction, typeArg: string, args: UpdateFoodCycleForPoolHiveArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::update_food_cycle_for_pool_hive`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive)], }) }

export interface UpdatePoolsGovernanceParamsArgs { dragonFood: TransactionObjectInput; cap: TransactionObjectInput; newParams: Array<bigint | TransactionArgument> | TransactionArgument }

export function updatePoolsGovernanceParams(tx: Transaction, args: UpdatePoolsGovernanceParamsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::update_pools_governance_params`, arguments: [obj(tx, args.dragonFood), obj(tx, args.cap), pure(tx, args.newParams, `vector<u64>`)], }) }

export interface UpdateVotesForLockedBeeArgs { dragonFood: TransactionObjectInput; lockedBee: TransactionObjectInput }

export function updateVotesForLockedBee(tx: Transaction, args: UpdateVotesForLockedBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::update_votes_for_locked_bee`, arguments: [obj(tx, args.dragonFood), obj(tx, args.lockedBee)], }) }

export interface VerifyAndExtractDragonDenArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function verifyAndExtractDragonDen(tx: Transaction, typeArg: string, args: VerifyAndExtractDragonDenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::verify_and_extract_dragon_den`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), pure(tx, args.trainerAddr, `address`)], }) }

export interface VoteOnGlobalEmissionsArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput; hiveVoteType: number | TransactionArgument; honeyVoteType: number | TransactionArgument }

export function voteOnGlobalEmissions(tx: Transaction, typeArg: string, args: VoteOnGlobalEmissionsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::vote_on_global_emissions`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonTrainer), pure(tx, args.hiveVoteType, `u8`), pure(tx, args.honeyVoteType, `u8`)], }) }

export interface VoteOnGlobalEmissionsWithCompTrainerArgs { dragonFood: TransactionObjectInput; poolHive: TransactionObjectInput; dragonSchool: TransactionObjectInput; hiveVoteType: number | TransactionArgument; honeyVoteType: number | TransactionArgument }

export function voteOnGlobalEmissionsWithCompTrainer(tx: Transaction, typeArg: string, args: VoteOnGlobalEmissionsWithCompTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::vote_on_global_emissions_with_comp_trainer`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonFood), obj(tx, args.poolHive), obj(tx, args.dragonSchool), pure(tx, args.hiveVoteType, `u8`), pure(tx, args.honeyVoteType, `u8`)], }) }

export interface WithdrawDragonBeeArgs { clock: TransactionObjectInput; dragonFood: TransactionObjectInput; beesManager: TransactionObjectInput; yieldFarm: TransactionObjectInput; poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function withdrawDragonBee(tx: Transaction, typeArg: string, args: WithdrawDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_food::withdraw_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.clock), obj(tx, args.dragonFood), obj(tx, args.beesManager), obj(tx, args.yieldFarm), obj(tx, args.poolHive), obj(tx, args.dragonTrainer)], }) }

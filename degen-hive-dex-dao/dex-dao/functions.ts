import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

import {dexdao} from ".."
const PUBLISHED_AT = dexdao.PUBLISHED_AT

export function init( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::init`, arguments: [ ], }) }

export interface AuthorityCheckArgs { isCompProfile: boolean | TransactionArgument; owner: string | TransactionArgument; txExector: string | TransactionArgument }

export function authorityCheck( txb: TransactionBlock, args: AuthorityCheckArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::authority_check`, arguments: [ pure(txb, args.isCompProfile, `bool`), pure(txb, args.owner, `address`), pure(txb, args.txExector, `address`) ], }) }

export interface HasUserLikedArgs { poolsGovernor: ObjectArg; profileAddr: string | TransactionArgument; buzzIndex: bigint | TransactionArgument }

export function hasUserLiked( txb: TransactionBlock, args: HasUserLikedArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::has_user_liked`, arguments: [ obj(txb, args.poolsGovernor), pure(txb, args.profileAddr, `address`), pure(txb, args.buzzIndex, `u64`) ], }) }

export interface QueryAcrossLikesArgs { poolsGovernor: ObjectArg; buzzIndex: bigint | TransactionArgument; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryAcrossLikes( txb: TransactionBlock, args: QueryAcrossLikesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::query_across_likes`, arguments: [ obj(txb, args.poolsGovernor), pure(txb, args.buzzIndex, `u64`), pure(txb, args.startFrom, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export interface AccrueHiveForBeeBoxArgs { governor: ObjectArg; poolHive: ObjectArg; beeBox: ObjectArg; curEpoch: bigint | TransactionArgument }

export function accrueHiveForBeeBox( txb: TransactionBlock, typeArg: string, args: AccrueHiveForBeeBoxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::accrue_hive_for_bee_box`, typeArguments: [typeArg], arguments: [ obj(txb, args.governor), obj(txb, args.poolHive), obj(txb, args.beeBox), pure(txb, args.curEpoch, `u64`) ], }) }

export interface AddMoreFruitsArgs { poolHive: ObjectArg; fruits: ObjectArg; addAmount: bigint | TransactionArgument }

export function addMoreFruits( txb: TransactionBlock, typeArgs: [string, string], args: AddMoreFruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::add_more_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolHive), obj(txb, args.fruits), pure(txb, args.addAmount, `u64`) ], }) }

export interface AddMoreFruitsCoinsArgs { poolHive: ObjectArg; fruits: ObjectArg; addAmount: bigint | TransactionArgument }

export function addMoreFruitsCoins( txb: TransactionBlock, typeArgs: [string, string], args: AddMoreFruitsCoinsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::add_more_fruits_coins`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolHive), obj(txb, args.fruits), pure(txb, args.addAmount, `u64`) ], }) }

export interface CalculateFruitRewardsArgs { fruitRewards: ObjectArg; profileBeeBox: ObjectArg; totalStaked: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function calculateFruitRewards( txb: TransactionBlock, typeArgs: [string, string], args: CalculateFruitRewardsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::calculate_fruit_rewards`, typeArguments: typeArgs, arguments: [ obj(txb, args.fruitRewards), obj(txb, args.profileBeeBox), pure(txb, args.totalStaked, `u64`), pure(txb, args.curEpoch, `u64`) ], }) }

export interface CastvoteArgs { poolHive: ObjectArg; hiveProfile: ObjectArg; proposalId: bigint | TransactionArgument; vote: boolean | TransactionArgument }

export function castvote( txb: TransactionBlock, typeArg: string, args: CastvoteArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::castVote`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), obj(txb, args.hiveProfile), pure(txb, args.proposalId, `u64`), pure(txb, args.vote, `bool`) ], }) }

export interface CheckIfAllAreHivesArgs { poolsGovernor: ObjectArg; poolHives: Array<string | TransactionArgument> | TransactionArgument }

export function checkIfAllAreHives( txb: TransactionBlock, args: CheckIfAllAreHivesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::check_if_all_are_hives`, arguments: [ obj(txb, args.poolsGovernor), pure(txb, args.poolHives, `vector<address>`) ], }) }

export interface ClaimFruitForBeeBoxArgs { fruitRewards: ObjectArg; profileBeeBox: ObjectArg; poolHiveAddr: string | TransactionArgument; totalStaked: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument; profileAddr: string | TransactionArgument; username: string | TransactionArgument }

export function claimFruitForBeeBox( txb: TransactionBlock, typeArgs: [string, string], args: ClaimFruitForBeeBoxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::claim_fruit_for_bee_box`, typeArguments: typeArgs, arguments: [ obj(txb, args.fruitRewards), obj(txb, args.profileBeeBox), pure(txb, args.poolHiveAddr, `address`), pure(txb, args.totalStaked, `u64`), pure(txb, args.curEpoch, `u64`), pure(txb, args.profileAddr, `address`), pure(txb, args.username, `0x1::string::String`) ], }) }

export interface CleanupGovBuzzesArgs { poolsGovernor: ObjectArg; maxBuzzesToDelete: bigint | TransactionArgument }

export function cleanupGovBuzzes( txb: TransactionBlock, args: CleanupGovBuzzesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::cleanup_gov_buzzes`, arguments: [ obj(txb, args.poolsGovernor), pure(txb, args.maxBuzzesToDelete, `u64`) ], }) }

export interface DepositGemsAndUnbondSharesArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; hiveProfileAddr: string | TransactionArgument; profileBeeBox: ObjectArg; unbondAmount: bigint | TransactionArgument; curEpoch: bigint | TransactionArgument }

export function depositGemsAndUnbondShares( txb: TransactionBlock, typeArg: string, args: DepositGemsAndUnbondSharesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::deposit_gems_and_unbond_shares`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), pure(txb, args.hiveProfileAddr, `address`), obj(txb, args.profileBeeBox), pure(txb, args.unbondAmount, `u64`), pure(txb, args.curEpoch, `u64`) ], }) }

export interface DepositHiveAsIncentivesArgs { poolsGovernor: ObjectArg; hiveVault: ObjectArg; hiveCoins: ObjectArg; incentivesAmount: bigint | TransactionArgument }

export function depositHiveAsIncentives( txb: TransactionBlock, args: DepositHiveAsIncentivesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::deposit_hive_as_incentives`, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.hiveVault), obj(txb, args.hiveCoins), pure(txb, args.incentivesAmount, `u64`) ], }) }

export function destroyFruitRewards( txb: TransactionBlock, typeArg: string, fruitRewards: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::destroy_fruit_rewards`, typeArguments: [typeArg], arguments: [ obj(txb, fruitRewards) ], }) }

export interface DestroyGovernorBuzzArgs { gIndex: bigint | TransactionArgument; gBuzz: ObjectArg }

export function destroyGovernorBuzz( txb: TransactionBlock, args: DestroyGovernorBuzzArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::destroy_governor_buzz`, arguments: [ pure(txb, args.gIndex, `u64`), obj(txb, args.gBuzz) ], }) }

export function destroyProposal( txb: TransactionBlock, proposal: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::destroy_proposal`, arguments: [ obj(txb, proposal) ], }) }

export interface EvaluateproposalArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveVault: ObjectArg; proposalId: bigint | TransactionArgument; disperser: ObjectArg }

export function evaluateproposal( txb: TransactionBlock, typeArg: string, args: EvaluateproposalArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::evaluateProposal`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveVault), pure(txb, args.proposalId, `u64`), obj(txb, args.disperser) ], }) }

export interface ExecuteproposaltoaddfruitArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; proposalId: bigint | TransactionArgument }

export function executeproposaltoaddfruit( txb: TransactionBlock, typeArgs: [string, string], args: ExecuteproposaltoaddfruitArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::executeProposalToAddFruit`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), pure(txb, args.proposalId, `u64`) ], }) }

export interface ExecutethreepoolproposalArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; pool: ObjectArg; proposalId: bigint | TransactionArgument }

export function executethreepoolproposal( txb: TransactionBlock, typeArgs: [string, string, string, string], args: ExecutethreepoolproposalArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::executeThreePoolProposal`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.pool), pure(txb, args.proposalId, `u64`) ], }) }

export interface ExecutetwopoolproposalArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; pool: ObjectArg; proposalId: bigint | TransactionArgument }

export function executetwopoolproposal( txb: TransactionBlock, typeArgs: [string, string, string], args: ExecutetwopoolproposalArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::executeTwoPoolProposal`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.pool), pure(txb, args.proposalId, `u64`) ], }) }

export function getGemsSchedule( txb: TransactionBlock, poolsGovernor: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_gems_schedule`, arguments: [ obj(txb, poolsGovernor) ], }) }

export interface GetLpBeeBoxArgs { poolHive: ObjectArg; hiveProfile: string | TransactionArgument }

export function getLpBeeBox( txb: TransactionBlock, typeArg: string, args: GetLpBeeBoxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), pure(txb, args.hiveProfile, `address`) ], }) }

export interface GetLpBeeBoxFruitClaimIndexArgs { poolHive: ObjectArg; user: string | TransactionArgument; beeFruit: string | TransactionArgument }

export function getLpBeeBoxFruitClaimIndex( txb: TransactionBlock, typeArg: string, args: GetLpBeeBoxFruitClaimIndexArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_fruit_claim_index`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), pure(txb, args.user, `address`), pure(txb, args.beeFruit, `0x1::ascii::String`) ], }) }

export interface GetLpBeeBoxWithRewards0FruitsArgs { governor: ObjectArg; poolHive: ObjectArg; hiveProfile: string | TransactionArgument }

export function getLpBeeBoxWithRewards0Fruits( txb: TransactionBlock, typeArg: string, args: GetLpBeeBoxWithRewards0FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_0_fruits`, typeArguments: [typeArg], arguments: [ obj(txb, args.governor), obj(txb, args.poolHive), pure(txb, args.hiveProfile, `address`) ], }) }

export interface GetLpBeeBoxWithRewards1FruitsArgs { governor: ObjectArg; poolHive: ObjectArg; hiveProfile: string | TransactionArgument }

export function getLpBeeBoxWithRewards1Fruits( txb: TransactionBlock, typeArgs: [string, string], args: GetLpBeeBoxWithRewards1FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_1_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.governor), obj(txb, args.poolHive), pure(txb, args.hiveProfile, `address`) ], }) }

export interface GetLpBeeBoxWithRewards2FruitsArgs { governor: ObjectArg; poolHive: ObjectArg; hiveProfile: string | TransactionArgument }

export function getLpBeeBoxWithRewards2Fruits( txb: TransactionBlock, typeArgs: [string, string, string], args: GetLpBeeBoxWithRewards2FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_2_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.governor), obj(txb, args.poolHive), pure(txb, args.hiveProfile, `address`) ], }) }

export interface GetLpBeeBoxWithRewards3FruitsArgs { governor: ObjectArg; poolHive: ObjectArg; hiveProfile: string | TransactionArgument }

export function getLpBeeBoxWithRewards3Fruits( txb: TransactionBlock, typeArgs: [string, string, string, string], args: GetLpBeeBoxWithRewards3FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_3_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.governor), obj(txb, args.poolHive), pure(txb, args.hiveProfile, `address`) ], }) }

export interface GetManagedBuzzesArgs { poolsGovernor: ObjectArg; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getManagedBuzzes( txb: TransactionBlock, args: GetManagedBuzzesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_managed_buzzes`, arguments: [ obj(txb, args.poolsGovernor), pure(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), pure(txb, args.limit, `u64`) ], }) }

export function getPoolHive( txb: TransactionBlock, typeArg: string, poolHive: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive`, typeArguments: [typeArg], arguments: [ obj(txb, poolHive) ], }) }

export function getPoolHiveAddr( txb: TransactionBlock, typeArg: string, poolsGovernor: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_addr`, typeArguments: [typeArg], arguments: [ obj(txb, poolsGovernor) ], }) }

export function getPoolHivePoints( txb: TransactionBlock, typeArg: string, poolsGovernor: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_points`, typeArguments: [typeArg], arguments: [ obj(txb, poolsGovernor) ], }) }

export interface GetPoolHiveProposalArgs { poolHive: ObjectArg; proposalId: bigint | TransactionArgument }

export function getPoolHiveProposal( txb: TransactionBlock, typeArg: string, args: GetPoolHiveProposalArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_proposal`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), pure(txb, args.proposalId, `u64`) ], }) }

export interface GetPoolHiveProposalFruitLifeArgs { poolHive: ObjectArg; proposalId: bigint | TransactionArgument }

export function getPoolHiveProposalFruitLife( txb: TransactionBlock, typeArg: string, args: GetPoolHiveProposalFruitLifeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_proposal_fruit_life`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), pure(txb, args.proposalId, `u64`) ], }) }

export interface GetPoolHiveProposalParamsArgs { poolHive: ObjectArg; proposalId: bigint | TransactionArgument }

export function getPoolHiveProposalParams( txb: TransactionBlock, typeArg: string, args: GetPoolHiveProposalParamsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_proposal_params`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), pure(txb, args.proposalId, `u64`) ], }) }

export function getPoolsGovernor( txb: TransactionBlock, poolsGovernor: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pools_governor`, arguments: [ obj(txb, poolsGovernor) ], }) }

export interface GetProfileBeeBoxArgs { poolHive: ObjectArg; hiveProfileAddress: string | TransactionArgument }

export function getProfileBeeBox( txb: TransactionBlock, typeArg: string, args: GetProfileBeeBoxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_profile_bee_box`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), pure(txb, args.hiveProfileAddress, `address`) ], }) }

export function getUnbondingDuration( txb: TransactionBlock, poolsGovernor: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_unbonding_duration`, arguments: [ obj(txb, poolsGovernor) ], }) }

export interface GetUnbondingPsnsAndExpectedHiveArgs { governor: ObjectArg; poolHive: ObjectArg; lpBeeBox: ObjectArg; curEpoch: bigint | TransactionArgument }

export function getUnbondingPsnsAndExpectedHive( txb: TransactionBlock, typeArg: string, args: GetUnbondingPsnsAndExpectedHiveArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_unbonding_psns_and_expected_hive`, typeArguments: [typeArg], arguments: [ obj(txb, args.governor), obj(txb, args.poolHive), obj(txb, args.lpBeeBox), pure(txb, args.curEpoch, `u64`) ], }) }

export function getVoteConfig( txb: TransactionBlock, poolsGovernor: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_vote_config`, arguments: [ obj(txb, poolsGovernor) ], }) }

export function incrementPoolHive( txb: TransactionBlock, typeArg: string, poolHive: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::increment_pool_hive`, typeArguments: [typeArg], arguments: [ obj(txb, poolHive) ], }) }

export function incrementPoolsGovernor( txb: TransactionBlock, poolsGovernor: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::increment_pools_governor`, arguments: [ obj(txb, poolsGovernor) ], }) }

export interface InitializePoolsManagerArgs { clock: ObjectArg; dexDaoCap: ObjectArg; suiSystemState: ObjectArg; hsuiVault: ObjectArg; hiveProfileIdsStore: ObjectArg; hiveManager: ObjectArg; disperser: ObjectArg; suiCoin: ObjectArg; startEpoch: bigint | TransactionArgument; hivePropsoalDeposit: bigint | TransactionArgument; votingStartDelay: bigint | TransactionArgument; votingPeriodLength: bigint | TransactionArgument; executionDelay: bigint | TransactionArgument; executionPeriodLength: bigint | TransactionArgument; proposalRequiredQuorum: bigint | TransactionArgument; proposalApprovalThreshold: bigint | TransactionArgument; unbondingDuration: bigint | TransactionArgument }

export function initializePoolsManager( txb: TransactionBlock, args: InitializePoolsManagerArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::initialize_pools_manager`, arguments: [ obj(txb, args.clock), obj(txb, args.dexDaoCap), obj(txb, args.suiSystemState), obj(txb, args.hsuiVault), obj(txb, args.hiveProfileIdsStore), obj(txb, args.hiveManager), obj(txb, args.disperser), obj(txb, args.suiCoin), pure(txb, args.startEpoch, `u64`), pure(txb, args.hivePropsoalDeposit, `u64`), pure(txb, args.votingStartDelay, `u64`), pure(txb, args.votingPeriodLength, `u64`), pure(txb, args.executionDelay, `u64`), pure(txb, args.executionPeriodLength, `u64`), pure(txb, args.proposalRequiredQuorum, `u64`), pure(txb, args.proposalApprovalThreshold, `u64`), pure(txb, args.unbondingDuration, `u64`) ], }) }

export interface InteractWithGovernanceBuzzArgs { clock: ObjectArg; cap: ObjectArg; hiveManager: ObjectArg; poolsGovernor: ObjectArg; userProfile: ObjectArg; buzzIndex: bigint | TransactionArgument; dialogueIndex: bigint | TransactionArgument; userBuzz: string | TransactionArgument; entropyCost: bigint | TransactionArgument }

export function interactWithGovernanceBuzz( txb: TransactionBlock, args: InteractWithGovernanceBuzzArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::interact_with_governance_buzz`, arguments: [ obj(txb, args.clock), obj(txb, args.cap), obj(txb, args.hiveManager), obj(txb, args.poolsGovernor), obj(txb, args.userProfile), pure(txb, args.buzzIndex, `u64`), pure(txb, args.dialogueIndex, `u64`), pure(txb, args.userBuzz, `0x1::string::String`), pure(txb, args.entropyCost, `u64`) ], }) }

export interface KraftNewPoolHiveThreeTokenAmmArgs { poolsGovernor: ObjectArg; pool: ObjectArg }

export function kraftNewPoolHiveThreeTokenAmm( txb: TransactionBlock, typeArgs: [string, string, string, string], args: KraftNewPoolHiveThreeTokenAmmArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::kraft_new_pool_hive_three_token_amm`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.pool) ], }) }

export interface KraftNewPoolHiveTwoTokenAmmArgs { poolsGovernor: ObjectArg; pool: ObjectArg }

export function kraftNewPoolHiveTwoTokenAmm( txb: TransactionBlock, typeArgs: [string, string, string], args: KraftNewPoolHiveTwoTokenAmmArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::kraft_new_pool_hive_two_token_amm`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.pool) ], }) }

export interface LikeGovernorBuzzArgs { clock: ObjectArg; cap: ObjectArg; hiveManager: ObjectArg; poolsGovernor: ObjectArg; userProfile: ObjectArg; buzzIndex: bigint | TransactionArgument; entropyCost: bigint | TransactionArgument }

export function likeGovernorBuzz( txb: TransactionBlock, args: LikeGovernorBuzzArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::like_governor_buzz`, arguments: [ obj(txb, args.clock), obj(txb, args.cap), obj(txb, args.hiveManager), obj(txb, args.poolsGovernor), obj(txb, args.userProfile), pure(txb, args.buzzIndex, `u64`), pure(txb, args.entropyCost, `u64`) ], }) }

export interface MakeNewGovernorBuzzArgs { governorBuzzesHolder: ObjectArg; poolHive: string | TransactionArgument; buzz: string | TransactionArgument; genAi: (string | TransactionArgument | TransactionArgument | null) }

export function makeNewGovernorBuzz( txb: TransactionBlock, args: MakeNewGovernorBuzzArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::make_new_governor_buzz`, arguments: [ obj(txb, args.governorBuzzesHolder), pure(txb, args.poolHive, `address`), pure(txb, args.buzz, `0x1::string::String`), pure(txb, args.genAi, `0x1::option::Option<0x1::string::String>`) ], }) }

export interface QueryGemsPointsMapArgs { poolsGovernor: ObjectArg; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function queryGemsPointsMap( txb: TransactionBlock, args: QueryGemsPointsMapArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::query_gems_points_map`, arguments: [ obj(txb, args.poolsGovernor), pure(txb, args.startFrom, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export interface RemoveexpiredproposalArgs { poolHive: ObjectArg; hiveVault: ObjectArg; disperser: ObjectArg; proposalId: bigint | TransactionArgument }

export function removeexpiredproposal( txb: TransactionBlock, typeArg: string, args: RemoveexpiredproposalArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::removeExpiredProposal`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), obj(txb, args.hiveVault), obj(txb, args.disperser), pure(txb, args.proposalId, `u64`) ], }) }

export function removeExpiredFruit( txb: TransactionBlock, typeArgs: [string, string], poolHive: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::remove_expired_fruit`, typeArguments: typeArgs, arguments: [ obj(txb, poolHive) ], }) }

export interface SubmitProposalArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveLockup: ObjectArg; proposalType: bigint | TransactionArgument; title: string | TransactionArgument; description: string | TransactionArgument; link: string | TransactionArgument; newFeeInfo: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); newParams: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null); newWeights: (Array<bigint | TransactionArgument> | TransactionArgument | TransactionArgument | null) }

export function submitProposal( txb: TransactionBlock, typeArg: string, args: SubmitProposalArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::submit_proposal`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveLockup), pure(txb, args.proposalType, `u64`), pure(txb, args.title, `0x1::string::String`), pure(txb, args.description, `0x1::string::String`), pure(txb, args.link, `0x1::string::String`), pure(txb, args.newFeeInfo, `0x1::option::Option<vector<u64>>`), pure(txb, args.newParams, `0x1::option::Option<vector<u64>>`), pure(txb, args.newWeights, `0x1::option::Option<vector<u64>>`) ], }) }

export interface SubmitProposalToAddFruitArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveLockup: ObjectArg; proposalType: bigint | TransactionArgument; title: string | TransactionArgument; description: string | TransactionArgument; link: string | TransactionArgument; fruitStartEpoch: bigint | TransactionArgument; fruitEndEpoch: bigint | TransactionArgument }

export function submitProposalToAddFruit( txb: TransactionBlock, typeArgs: [string, string], args: SubmitProposalToAddFruitArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::submit_proposal_to_add_fruit`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveLockup), pure(txb, args.proposalType, `u64`), pure(txb, args.title, `0x1::string::String`), pure(txb, args.description, `0x1::string::String`), pure(txb, args.link, `0x1::string::String`), pure(txb, args.fruitStartEpoch, `u64`), pure(txb, args.fruitEndEpoch, `u64`) ], }) }

export function transitionIntoNextGemsCycle( txb: TransactionBlock, poolsGovernor: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::transition_into_next_gems_cycle`, arguments: [ obj(txb, poolsGovernor) ], }) }

export interface UpdateGemsPerEpochArgs { poolsGovernor: ObjectArg; cap: ObjectArg; newGemsPerEpoch: bigint | TransactionArgument }

export function updateGemsPerEpoch( txb: TransactionBlock, args: UpdateGemsPerEpochArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::update_gems_per_epoch`, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.cap), pure(txb, args.newGemsPerEpoch, `u64`) ], }) }

export interface UpdatePoolHivePointsArgs { poolsGovernor: ObjectArg; cap: ObjectArg; poolHiveAddrs: Array<string | TransactionArgument> | TransactionArgument; pointsForPoolHives: Array<bigint | TransactionArgument> | TransactionArgument }

export function updatePoolHivePoints( txb: TransactionBlock, args: UpdatePoolHivePointsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::update_pool_hive_points`, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.cap), pure(txb, args.poolHiveAddrs, `vector<address>`), pure(txb, args.pointsForPoolHives, `vector<u64>`) ], }) }

export interface UpdatePoolsGovernanceParamsArgs { poolsGovernor: ObjectArg; cap: ObjectArg; newParams: Array<bigint | TransactionArgument> | TransactionArgument }

export function updatePoolsGovernanceParams( txb: TransactionBlock, args: UpdatePoolsGovernanceParamsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::update_pools_governance_params`, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.cap), pure(txb, args.newParams, `vector<u64>`) ], }) }

export interface UpdateSystemBuzzArgs { poolsGovernor: ObjectArg; buidlersCap: ObjectArg; type: string | TransactionArgument; buzz: string | TransactionArgument; genAi: (string | TransactionArgument | TransactionArgument | null) }

export function updateSystemBuzz( txb: TransactionBlock, args: UpdateSystemBuzzArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::update_system_buzz`, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.buidlersCap), pure(txb, args.type, `0x1::ascii::String`), pure(txb, args.buzz, `0x1::string::String`), pure(txb, args.genAi, `0x1::option::Option<0x1::string::String>`) ], }) }

export interface UpvoteDialogueOnBuzzArgs { clock: ObjectArg; cap: ObjectArg; hiveManager: ObjectArg; poolsGovernor: ObjectArg; userProfile: ObjectArg; buzzIndex: bigint | TransactionArgument; userBuzzByProfile: string | TransactionArgument; dialogueIndex: bigint | TransactionArgument; entropyCost: bigint | TransactionArgument }

export function upvoteDialogueOnBuzz( txb: TransactionBlock, args: UpvoteDialogueOnBuzzArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::upvote_dialogue_on_buzz`, arguments: [ obj(txb, args.clock), obj(txb, args.cap), obj(txb, args.hiveManager), obj(txb, args.poolsGovernor), obj(txb, args.userProfile), pure(txb, args.buzzIndex, `u64`), pure(txb, args.userBuzzByProfile, `address`), pure(txb, args.dialogueIndex, `u64`), pure(txb, args.entropyCost, `u64`) ], }) }

export interface VerifyAndExtractBeeBoxArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg }

export function verifyAndExtractBeeBox( txb: TransactionBlock, typeArg: string, args: VerifyAndExtractBeeBoxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::verify_and_extract_bee_box`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile) ], }) }

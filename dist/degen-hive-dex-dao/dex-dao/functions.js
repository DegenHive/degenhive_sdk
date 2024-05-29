"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeexpiredproposal = exports.queryGemsPointsMap = exports.makeNewGovernorBuzz = exports.likeGovernorBuzz = exports.kraftNewPoolHiveTwoTokenAmm = exports.kraftNewPoolHiveThreeTokenAmm = exports.interactWithGovernanceBuzz = exports.initializePoolsManager = exports.incrementPoolsGovernor = exports.incrementPoolHive = exports.getVoteConfig = exports.getUnbondingPsnsAndExpectedHive = exports.getUnbondingDuration = exports.getProfileBeeBox = exports.getPoolsGovernor = exports.getPoolHiveProposalParams = exports.getPoolHiveProposalFruitLife = exports.getPoolHiveProposal = exports.getPoolHivePoints = exports.getPoolHiveAddr = exports.getPoolHive = exports.getManagedBuzzes = exports.getLpBeeBoxWithRewards3Fruits = exports.getLpBeeBoxWithRewards2Fruits = exports.getLpBeeBoxWithRewards1Fruits = exports.getLpBeeBoxWithRewards0Fruits = exports.getLpBeeBoxFruitClaimIndex = exports.getLpBeeBox = exports.getGemsSchedule = exports.executetwopoolproposal = exports.executethreepoolproposal = exports.executeproposaltoaddfruit = exports.evaluateproposal = exports.destroyProposal = exports.destroyGovernorBuzz = exports.destroyFruitRewards = exports.depositHiveAsIncentives = exports.depositGemsAndUnbondShares = exports.cleanupGovBuzzes = exports.claimFruitForBeeBox = exports.checkIfAllAreHives = exports.castvote = exports.calculateFruitRewards = exports.addMoreFruitsCoins = exports.addMoreFruits = exports.accrueHiveForBeeBox = exports.queryAcrossLikes = exports.hasUserLiked = exports.authorityCheck = exports.init = void 0;
exports.verifyAndExtractBeeBox = exports.upvoteDialogueOnBuzz = exports.updateSystemBuzz = exports.updatePoolsGovernanceParams = exports.updatePoolHivePoints = exports.updateGemsPerEpoch = exports.transitionIntoNextGemsCycle = exports.submitProposalToAddFruit = exports.submitProposal = exports.removeExpiredFruit = void 0;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function init(txb) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::init`, arguments: [], }); }
exports.init = init;
function authorityCheck(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::authority_check`, arguments: [(0, util_1.pure)(txb, args.isCompProfile, `bool`), (0, util_1.pure)(txb, args.owner, `address`), (0, util_1.pure)(txb, args.txExector, `address`)], }); }
exports.authorityCheck = authorityCheck;
function hasUserLiked(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::has_user_liked`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.profileAddr, `address`), (0, util_1.pure)(txb, args.buzzIndex, `u64`)], }); }
exports.hasUserLiked = hasUserLiked;
function queryAcrossLikes(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::query_across_likes`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.buzzIndex, `u64`), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryAcrossLikes = queryAcrossLikes;
function accrueHiveForBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::accrue_hive_for_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.beeBox), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
exports.accrueHiveForBeeBox = accrueHiveForBeeBox;
function addMoreFruits(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::add_more_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.fruits), (0, util_1.pure)(txb, args.addAmount, `u64`)], }); }
exports.addMoreFruits = addMoreFruits;
function addMoreFruitsCoins(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::add_more_fruits_coins`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.fruits), (0, util_1.pure)(txb, args.addAmount, `u64`)], }); }
exports.addMoreFruitsCoins = addMoreFruitsCoins;
function calculateFruitRewards(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::calculate_fruit_rewards`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.fruitRewards), (0, util_1.obj)(txb, args.profileBeeBox), (0, util_1.pure)(txb, args.totalStaked, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
exports.calculateFruitRewards = calculateFruitRewards;
function castvote(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::castVote`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.proposalId, `u64`), (0, util_1.pure)(txb, args.vote, `bool`)], }); }
exports.castvote = castvote;
function checkIfAllAreHives(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::check_if_all_are_hives`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.poolHives, `vector<address>`)], }); }
exports.checkIfAllAreHives = checkIfAllAreHives;
function claimFruitForBeeBox(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::claim_fruit_for_bee_box`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.fruitRewards), (0, util_1.obj)(txb, args.profileBeeBox), (0, util_1.pure)(txb, args.poolHiveAddr, `address`), (0, util_1.pure)(txb, args.totalStaked, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`), (0, util_1.pure)(txb, args.profileAddr, `address`), (0, util_1.pure)(txb, args.username, `0x1::string::String`)], }); }
exports.claimFruitForBeeBox = claimFruitForBeeBox;
function cleanupGovBuzzes(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::cleanup_gov_buzzes`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.maxBuzzesToDelete, `u64`)], }); }
exports.cleanupGovBuzzes = cleanupGovBuzzes;
function depositGemsAndUnbondShares(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::deposit_gems_and_unbond_shares`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.hiveProfileAddr, `address`), (0, util_1.obj)(txb, args.profileBeeBox), (0, util_1.pure)(txb, args.unbondAmount, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
exports.depositGemsAndUnbondShares = depositGemsAndUnbondShares;
function depositHiveAsIncentives(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::deposit_hive_as_incentives`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.hiveVault), (0, util_1.obj)(txb, args.hiveCoins), (0, util_1.pure)(txb, args.incentivesAmount, `u64`)], }); }
exports.depositHiveAsIncentives = depositHiveAsIncentives;
function destroyFruitRewards(txb, typeArg, fruitRewards) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::destroy_fruit_rewards`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, fruitRewards)], }); }
exports.destroyFruitRewards = destroyFruitRewards;
function destroyGovernorBuzz(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::destroy_governor_buzz`, arguments: [(0, util_1.pure)(txb, args.gIndex, `u64`), (0, util_1.obj)(txb, args.gBuzz)], }); }
exports.destroyGovernorBuzz = destroyGovernorBuzz;
function destroyProposal(txb, proposal) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::destroy_proposal`, arguments: [(0, util_1.obj)(txb, proposal)], }); }
exports.destroyProposal = destroyProposal;
function evaluateproposal(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::evaluateProposal`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveVault), (0, util_1.pure)(txb, args.proposalId, `u64`), (0, util_1.obj)(txb, args.disperser)], }); }
exports.evaluateproposal = evaluateproposal;
function executeproposaltoaddfruit(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::executeProposalToAddFruit`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
exports.executeproposaltoaddfruit = executeproposaltoaddfruit;
function executethreepoolproposal(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::executeThreePoolProposal`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.pool), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
exports.executethreepoolproposal = executethreepoolproposal;
function executetwopoolproposal(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::executeTwoPoolProposal`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.pool), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
exports.executetwopoolproposal = executetwopoolproposal;
function getGemsSchedule(txb, poolsGovernor) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_gems_schedule`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
exports.getGemsSchedule = getGemsSchedule;
function getLpBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_lp_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
exports.getLpBeeBox = getLpBeeBox;
function getLpBeeBoxFruitClaimIndex(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_lp_bee_box_fruit_claim_index`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.user, `address`), (0, util_1.pure)(txb, args.beeFruit, `0x1::ascii::String`)], }); }
exports.getLpBeeBoxFruitClaimIndex = getLpBeeBoxFruitClaimIndex;
function getLpBeeBoxWithRewards0Fruits(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_0_fruits`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
exports.getLpBeeBoxWithRewards0Fruits = getLpBeeBoxWithRewards0Fruits;
function getLpBeeBoxWithRewards1Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_1_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
exports.getLpBeeBoxWithRewards1Fruits = getLpBeeBoxWithRewards1Fruits;
function getLpBeeBoxWithRewards2Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_2_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
exports.getLpBeeBoxWithRewards2Fruits = getLpBeeBoxWithRewards2Fruits;
function getLpBeeBoxWithRewards3Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_3_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
exports.getLpBeeBoxWithRewards3Fruits = getLpBeeBoxWithRewards3Fruits;
function getManagedBuzzes(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_managed_buzzes`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.getManagedBuzzes = getManagedBuzzes;
function getPoolHive(txb, typeArg, poolHive) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_pool_hive`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, poolHive)], }); }
exports.getPoolHive = getPoolHive;
function getPoolHiveAddr(txb, typeArg, poolsGovernor) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_pool_hive_addr`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
exports.getPoolHiveAddr = getPoolHiveAddr;
function getPoolHivePoints(txb, typeArg, poolsGovernor) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_pool_hive_points`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
exports.getPoolHivePoints = getPoolHivePoints;
function getPoolHiveProposal(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_pool_hive_proposal`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
exports.getPoolHiveProposal = getPoolHiveProposal;
function getPoolHiveProposalFruitLife(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_pool_hive_proposal_fruit_life`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
exports.getPoolHiveProposalFruitLife = getPoolHiveProposalFruitLife;
function getPoolHiveProposalParams(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_pool_hive_proposal_params`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
exports.getPoolHiveProposalParams = getPoolHiveProposalParams;
function getPoolsGovernor(txb, poolsGovernor) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_pools_governor`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
exports.getPoolsGovernor = getPoolsGovernor;
function getProfileBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_profile_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfileAddress, `address`)], }); }
exports.getProfileBeeBox = getProfileBeeBox;
function getUnbondingDuration(txb, poolsGovernor) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_unbonding_duration`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
exports.getUnbondingDuration = getUnbondingDuration;
function getUnbondingPsnsAndExpectedHive(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_unbonding_psns_and_expected_hive`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.lpBeeBox), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
exports.getUnbondingPsnsAndExpectedHive = getUnbondingPsnsAndExpectedHive;
function getVoteConfig(txb, poolsGovernor) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::get_vote_config`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
exports.getVoteConfig = getVoteConfig;
function incrementPoolHive(txb, typeArg, poolHive) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::increment_pool_hive`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, poolHive)], }); }
exports.incrementPoolHive = incrementPoolHive;
function incrementPoolsGovernor(txb, poolsGovernor) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::increment_pools_governor`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
exports.incrementPoolsGovernor = incrementPoolsGovernor;
function initializePoolsManager(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::initialize_pools_manager`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.dexDaoCap), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.hsuiVault), (0, util_1.obj)(txb, args.hiveProfileIdsStore), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.disperser), (0, util_1.obj)(txb, args.suiCoin), (0, util_1.pure)(txb, args.startEpoch, `u64`), (0, util_1.pure)(txb, args.hivePropsoalDeposit, `u64`), (0, util_1.pure)(txb, args.votingStartDelay, `u64`), (0, util_1.pure)(txb, args.votingPeriodLength, `u64`), (0, util_1.pure)(txb, args.executionDelay, `u64`), (0, util_1.pure)(txb, args.executionPeriodLength, `u64`), (0, util_1.pure)(txb, args.proposalRequiredQuorum, `u64`), (0, util_1.pure)(txb, args.proposalApprovalThreshold, `u64`), (0, util_1.pure)(txb, args.unbondingDuration, `u64`)], }); }
exports.initializePoolsManager = initializePoolsManager;
function interactWithGovernanceBuzz(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::interact_with_governance_buzz`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.userProfile), (0, util_1.pure)(txb, args.buzzIndex, `u64`), (0, util_1.pure)(txb, args.dialogueIndex, `u64`), (0, util_1.pure)(txb, args.userBuzz, `0x1::string::String`), (0, util_1.pure)(txb, args.entropyCost, `u64`)], }); }
exports.interactWithGovernanceBuzz = interactWithGovernanceBuzz;
function kraftNewPoolHiveThreeTokenAmm(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::kraft_new_pool_hive_three_token_amm`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.pool)], }); }
exports.kraftNewPoolHiveThreeTokenAmm = kraftNewPoolHiveThreeTokenAmm;
function kraftNewPoolHiveTwoTokenAmm(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::kraft_new_pool_hive_two_token_amm`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.pool)], }); }
exports.kraftNewPoolHiveTwoTokenAmm = kraftNewPoolHiveTwoTokenAmm;
function likeGovernorBuzz(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::like_governor_buzz`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.userProfile), (0, util_1.pure)(txb, args.buzzIndex, `u64`), (0, util_1.pure)(txb, args.entropyCost, `u64`)], }); }
exports.likeGovernorBuzz = likeGovernorBuzz;
function makeNewGovernorBuzz(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::make_new_governor_buzz`, arguments: [(0, util_1.obj)(txb, args.governorBuzzesHolder), (0, util_1.pure)(txb, args.poolHive, `address`), (0, util_1.pure)(txb, args.buzz, `0x1::string::String`), (0, util_1.pure)(txb, args.genAi, `0x1::option::Option<0x1::string::String>`)], }); }
exports.makeNewGovernorBuzz = makeNewGovernorBuzz;
function queryGemsPointsMap(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::query_gems_points_map`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
exports.queryGemsPointsMap = queryGemsPointsMap;
function removeexpiredproposal(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::removeExpiredProposal`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveVault), (0, util_1.obj)(txb, args.disperser), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
exports.removeexpiredproposal = removeexpiredproposal;
function removeExpiredFruit(txb, typeArgs, poolHive) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::remove_expired_fruit`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, poolHive)], }); }
exports.removeExpiredFruit = removeExpiredFruit;
function submitProposal(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::submit_proposal`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveLockup), (0, util_1.pure)(txb, args.proposalType, `u64`), (0, util_1.pure)(txb, args.title, `0x1::string::String`), (0, util_1.pure)(txb, args.description, `0x1::string::String`), (0, util_1.pure)(txb, args.link, `0x1::string::String`), (0, util_1.pure)(txb, args.newFeeInfo, `0x1::option::Option<vector<u64>>`), (0, util_1.pure)(txb, args.newParams, `0x1::option::Option<vector<u64>>`), (0, util_1.pure)(txb, args.newWeights, `0x1::option::Option<vector<u64>>`)], }); }
exports.submitProposal = submitProposal;
function submitProposalToAddFruit(txb, typeArgs, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::submit_proposal_to_add_fruit`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveLockup), (0, util_1.pure)(txb, args.proposalType, `u64`), (0, util_1.pure)(txb, args.title, `0x1::string::String`), (0, util_1.pure)(txb, args.description, `0x1::string::String`), (0, util_1.pure)(txb, args.link, `0x1::string::String`), (0, util_1.pure)(txb, args.fruitStartEpoch, `u64`), (0, util_1.pure)(txb, args.fruitEndEpoch, `u64`)], }); }
exports.submitProposalToAddFruit = submitProposalToAddFruit;
function transitionIntoNextGemsCycle(txb, poolsGovernor) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::transition_into_next_gems_cycle`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
exports.transitionIntoNextGemsCycle = transitionIntoNextGemsCycle;
function updateGemsPerEpoch(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::update_gems_per_epoch`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.cap), (0, util_1.pure)(txb, args.newGemsPerEpoch, `u64`)], }); }
exports.updateGemsPerEpoch = updateGemsPerEpoch;
function updatePoolHivePoints(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::update_pool_hive_points`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.cap), (0, util_1.pure)(txb, args.poolHiveAddrs, `vector<address>`), (0, util_1.pure)(txb, args.pointsForPoolHives, `vector<u64>`)], }); }
exports.updatePoolHivePoints = updatePoolHivePoints;
function updatePoolsGovernanceParams(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::update_pools_governance_params`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.cap), (0, util_1.pure)(txb, args.newParams, `vector<u64>`)], }); }
exports.updatePoolsGovernanceParams = updatePoolsGovernanceParams;
function updateSystemBuzz(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::update_system_buzz`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.buidlersCap), (0, util_1.pure)(txb, args.type, `0x1::ascii::String`), (0, util_1.pure)(txb, args.buzz, `0x1::string::String`), (0, util_1.pure)(txb, args.genAi, `0x1::option::Option<0x1::string::String>`)], }); }
exports.updateSystemBuzz = updateSystemBuzz;
function upvoteDialogueOnBuzz(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::upvote_dialogue_on_buzz`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.userProfile), (0, util_1.pure)(txb, args.buzzIndex, `u64`), (0, util_1.pure)(txb, args.userBuzzByProfile, `address`), (0, util_1.pure)(txb, args.dialogueIndex, `u64`), (0, util_1.pure)(txb, args.entropyCost, `u64`)], }); }
exports.upvoteDialogueOnBuzz = upvoteDialogueOnBuzz;
function verifyAndExtractBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dex_dao::verify_and_extract_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile)], }); }
exports.verifyAndExtractBeeBox = verifyAndExtractBeeBox;

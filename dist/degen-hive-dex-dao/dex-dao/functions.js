"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.authorityCheck = authorityCheck;
exports.hasUserLiked = hasUserLiked;
exports.queryAcrossLikes = queryAcrossLikes;
exports.accrueHiveForBeeBox = accrueHiveForBeeBox;
exports.addMoreFruits = addMoreFruits;
exports.addMoreFruitsCoins = addMoreFruitsCoins;
exports.calculateFruitRewards = calculateFruitRewards;
exports.castvote = castvote;
exports.checkIfAllAreHives = checkIfAllAreHives;
exports.claimFruitForBeeBox = claimFruitForBeeBox;
exports.cleanupGovBuzzes = cleanupGovBuzzes;
exports.depositGemsAndUnbondShares = depositGemsAndUnbondShares;
exports.depositHiveAsIncentives = depositHiveAsIncentives;
exports.destroyFruitRewards = destroyFruitRewards;
exports.destroyGovernorBuzz = destroyGovernorBuzz;
exports.destroyProposal = destroyProposal;
exports.evaluateproposal = evaluateproposal;
exports.executeproposaltoaddfruit = executeproposaltoaddfruit;
exports.executethreepoolproposal = executethreepoolproposal;
exports.executetwopoolproposal = executetwopoolproposal;
exports.getGemsSchedule = getGemsSchedule;
exports.getLpBeeBox = getLpBeeBox;
exports.getLpBeeBoxFruitClaimIndex = getLpBeeBoxFruitClaimIndex;
exports.getLpBeeBoxWithRewards0Fruits = getLpBeeBoxWithRewards0Fruits;
exports.getLpBeeBoxWithRewards1Fruits = getLpBeeBoxWithRewards1Fruits;
exports.getLpBeeBoxWithRewards2Fruits = getLpBeeBoxWithRewards2Fruits;
exports.getLpBeeBoxWithRewards3Fruits = getLpBeeBoxWithRewards3Fruits;
exports.getManagedBuzzes = getManagedBuzzes;
exports.getPoolHive = getPoolHive;
exports.getPoolHiveAddr = getPoolHiveAddr;
exports.getPoolHivePoints = getPoolHivePoints;
exports.getPoolHiveProposal = getPoolHiveProposal;
exports.getPoolHiveProposalFruitLife = getPoolHiveProposalFruitLife;
exports.getPoolHiveProposalParams = getPoolHiveProposalParams;
exports.getPoolsGovernor = getPoolsGovernor;
exports.getProfileBeeBox = getProfileBeeBox;
exports.getUnbondingDuration = getUnbondingDuration;
exports.getUnbondingPsnsAndExpectedHive = getUnbondingPsnsAndExpectedHive;
exports.getVoteConfig = getVoteConfig;
exports.incrementPoolHive = incrementPoolHive;
exports.incrementPoolsGovernor = incrementPoolsGovernor;
exports.initializePoolsManager = initializePoolsManager;
exports.interactWithGovernanceBuzz = interactWithGovernanceBuzz;
exports.kraftNewPoolHiveThreeTokenAmm = kraftNewPoolHiveThreeTokenAmm;
exports.kraftNewPoolHiveTwoTokenAmm = kraftNewPoolHiveTwoTokenAmm;
exports.likeGovernorBuzz = likeGovernorBuzz;
exports.makeNewGovernorBuzz = makeNewGovernorBuzz;
exports.queryGemsPointsMap = queryGemsPointsMap;
exports.removeexpiredproposal = removeexpiredproposal;
exports.removeExpiredFruit = removeExpiredFruit;
exports.submitProposal = submitProposal;
exports.submitProposalToAddFruit = submitProposalToAddFruit;
exports.transitionIntoNextGemsCycle = transitionIntoNextGemsCycle;
exports.updateGemsPerEpoch = updateGemsPerEpoch;
exports.updatePoolHivePoints = updatePoolHivePoints;
exports.updatePoolsGovernanceParams = updatePoolsGovernanceParams;
exports.updateSystemBuzz = updateSystemBuzz;
exports.upvoteDialogueOnBuzz = upvoteDialogueOnBuzz;
exports.verifyAndExtractBeeBox = verifyAndExtractBeeBox;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.dexdao.PUBLISHED_AT;
function init(txb) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::init`, arguments: [], }); }
function authorityCheck(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::authority_check`, arguments: [(0, util_1.pure)(txb, args.isCompProfile, `bool`), (0, util_1.pure)(txb, args.owner, `address`), (0, util_1.pure)(txb, args.txExector, `address`)], }); }
function hasUserLiked(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::has_user_liked`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.profileAddr, `address`), (0, util_1.pure)(txb, args.buzzIndex, `u64`)], }); }
function queryAcrossLikes(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::query_across_likes`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.buzzIndex, `u64`), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function accrueHiveForBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::accrue_hive_for_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.beeBox), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
function addMoreFruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::add_more_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.fruits), (0, util_1.pure)(txb, args.addAmount, `u64`)], }); }
function addMoreFruitsCoins(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::add_more_fruits_coins`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.fruits), (0, util_1.pure)(txb, args.addAmount, `u64`)], }); }
function calculateFruitRewards(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::calculate_fruit_rewards`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.fruitRewards), (0, util_1.obj)(txb, args.profileBeeBox), (0, util_1.pure)(txb, args.totalStaked, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
function castvote(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::castVote`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.proposalId, `u64`), (0, util_1.pure)(txb, args.vote, `bool`)], }); }
function checkIfAllAreHives(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::check_if_all_are_hives`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.poolHives, `vector<address>`)], }); }
function claimFruitForBeeBox(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::claim_fruit_for_bee_box`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.fruitRewards), (0, util_1.obj)(txb, args.profileBeeBox), (0, util_1.pure)(txb, args.poolHiveAddr, `address`), (0, util_1.pure)(txb, args.totalStaked, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`), (0, util_1.pure)(txb, args.profileAddr, `address`), (0, util_1.pure)(txb, args.username, `0x1::string::String`)], }); }
function cleanupGovBuzzes(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::cleanup_gov_buzzes`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.maxBuzzesToDelete, `u64`)], }); }
function depositGemsAndUnbondShares(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::deposit_gems_and_unbond_shares`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.hiveProfileAddr, `address`), (0, util_1.obj)(txb, args.profileBeeBox), (0, util_1.pure)(txb, args.unbondAmount, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
function depositHiveAsIncentives(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::deposit_hive_as_incentives`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.hiveVault), (0, util_1.obj)(txb, args.hiveCoins), (0, util_1.pure)(txb, args.incentivesAmount, `u64`)], }); }
function destroyFruitRewards(txb, typeArg, fruitRewards) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::destroy_fruit_rewards`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, fruitRewards)], }); }
function destroyGovernorBuzz(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::destroy_governor_buzz`, arguments: [(0, util_1.pure)(txb, args.gIndex, `u64`), (0, util_1.obj)(txb, args.gBuzz)], }); }
function destroyProposal(txb, proposal) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::destroy_proposal`, arguments: [(0, util_1.obj)(txb, proposal)], }); }
function evaluateproposal(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::evaluateProposal`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveVault), (0, util_1.pure)(txb, args.proposalId, `u64`), (0, util_1.obj)(txb, args.disperser)], }); }
function executeproposaltoaddfruit(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::executeProposalToAddFruit`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
function executethreepoolproposal(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::executeThreePoolProposal`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.pool), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
function executetwopoolproposal(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::executeTwoPoolProposal`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.pool), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
function getGemsSchedule(txb, poolsGovernor) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_gems_schedule`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
function getLpBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
function getLpBeeBoxFruitClaimIndex(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_fruit_claim_index`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.user, `address`), (0, util_1.pure)(txb, args.beeFruit, `0x1::ascii::String`)], }); }
function getLpBeeBoxWithRewards0Fruits(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_0_fruits`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
function getLpBeeBoxWithRewards1Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_1_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
function getLpBeeBoxWithRewards2Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_2_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
function getLpBeeBoxWithRewards3Fruits(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_lp_bee_box_with_rewards_3_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfile, `address`)], }); }
function getManagedBuzzes(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_managed_buzzes`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<0x1::ascii::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getPoolHive(txb, typeArg, poolHive) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, poolHive)], }); }
function getPoolHiveAddr(txb, typeArg, poolsGovernor) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_addr`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
function getPoolHivePoints(txb, typeArg, poolsGovernor) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_points`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
function getPoolHiveProposal(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_proposal`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
function getPoolHiveProposalFruitLife(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_proposal_fruit_life`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
function getPoolHiveProposalParams(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pool_hive_proposal_params`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
function getPoolsGovernor(txb, poolsGovernor) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_pools_governor`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
function getProfileBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_profile_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.pure)(txb, args.hiveProfileAddress, `address`)], }); }
function getUnbondingDuration(txb, poolsGovernor) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_unbonding_duration`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
function getUnbondingPsnsAndExpectedHive(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_unbonding_psns_and_expected_hive`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.governor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.lpBeeBox), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }
function getVoteConfig(txb, poolsGovernor) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::get_vote_config`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
function incrementPoolHive(txb, typeArg, poolHive) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::increment_pool_hive`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, poolHive)], }); }
function incrementPoolsGovernor(txb, poolsGovernor) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::increment_pools_governor`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
function initializePoolsManager(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::initialize_pools_manager`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.dexDaoCap), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.hsuiVault), (0, util_1.obj)(txb, args.hiveProfileIdsStore), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.disperser), (0, util_1.obj)(txb, args.suiCoin), (0, util_1.pure)(txb, args.startEpoch, `u64`), (0, util_1.pure)(txb, args.hivePropsoalDeposit, `u64`), (0, util_1.pure)(txb, args.votingStartDelay, `u64`), (0, util_1.pure)(txb, args.votingPeriodLength, `u64`), (0, util_1.pure)(txb, args.executionDelay, `u64`), (0, util_1.pure)(txb, args.executionPeriodLength, `u64`), (0, util_1.pure)(txb, args.proposalRequiredQuorum, `u64`), (0, util_1.pure)(txb, args.proposalApprovalThreshold, `u64`), (0, util_1.pure)(txb, args.unbondingDuration, `u64`)], }); }
function interactWithGovernanceBuzz(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::interact_with_governance_buzz`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.userProfile), (0, util_1.pure)(txb, args.buzzIndex, `u64`), (0, util_1.pure)(txb, args.dialogueIndex, `u64`), (0, util_1.pure)(txb, args.userBuzz, `0x1::string::String`), (0, util_1.pure)(txb, args.entropyCost, `u64`)], }); }
function kraftNewPoolHiveThreeTokenAmm(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::kraft_new_pool_hive_three_token_amm`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.pool)], }); }
function kraftNewPoolHiveTwoTokenAmm(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::kraft_new_pool_hive_two_token_amm`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.pool)], }); }
function likeGovernorBuzz(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::like_governor_buzz`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.userProfile), (0, util_1.pure)(txb, args.buzzIndex, `u64`), (0, util_1.pure)(txb, args.entropyCost, `u64`)], }); }
function makeNewGovernorBuzz(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::make_new_governor_buzz`, arguments: [(0, util_1.obj)(txb, args.governorBuzzesHolder), (0, util_1.pure)(txb, args.poolHive, `address`), (0, util_1.pure)(txb, args.buzz, `0x1::string::String`), (0, util_1.pure)(txb, args.genAi, `0x1::option::Option<0x1::string::String>`)], }); }
function queryGemsPointsMap(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::query_gems_points_map`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function removeexpiredproposal(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::removeExpiredProposal`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveVault), (0, util_1.obj)(txb, args.disperser), (0, util_1.pure)(txb, args.proposalId, `u64`)], }); }
function removeExpiredFruit(txb, typeArgs, poolHive) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::remove_expired_fruit`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, poolHive)], }); }
function submitProposal(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::submit_proposal`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveLockup), (0, util_1.pure)(txb, args.proposalType, `u64`), (0, util_1.pure)(txb, args.title, `0x1::string::String`), (0, util_1.pure)(txb, args.description, `0x1::string::String`), (0, util_1.pure)(txb, args.link, `0x1::string::String`), (0, util_1.pure)(txb, args.newFeeInfo, `0x1::option::Option<vector<u64>>`), (0, util_1.pure)(txb, args.newParams, `0x1::option::Option<vector<u64>>`), (0, util_1.pure)(txb, args.newWeights, `0x1::option::Option<vector<u64>>`)], }); }
function submitProposalToAddFruit(txb, typeArgs, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::submit_proposal_to_add_fruit`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveLockup), (0, util_1.pure)(txb, args.proposalType, `u64`), (0, util_1.pure)(txb, args.title, `0x1::string::String`), (0, util_1.pure)(txb, args.description, `0x1::string::String`), (0, util_1.pure)(txb, args.link, `0x1::string::String`), (0, util_1.pure)(txb, args.fruitStartEpoch, `u64`), (0, util_1.pure)(txb, args.fruitEndEpoch, `u64`)], }); }
function transitionIntoNextGemsCycle(txb, poolsGovernor) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::transition_into_next_gems_cycle`, arguments: [(0, util_1.obj)(txb, poolsGovernor)], }); }
function updateGemsPerEpoch(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::update_gems_per_epoch`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.cap), (0, util_1.pure)(txb, args.newGemsPerEpoch, `u64`)], }); }
function updatePoolHivePoints(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::update_pool_hive_points`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.cap), (0, util_1.pure)(txb, args.poolHiveAddrs, `vector<address>`), (0, util_1.pure)(txb, args.pointsForPoolHives, `vector<u64>`)], }); }
function updatePoolsGovernanceParams(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::update_pools_governance_params`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.cap), (0, util_1.pure)(txb, args.newParams, `vector<u64>`)], }); }
function updateSystemBuzz(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::update_system_buzz`, arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.buidlersCap), (0, util_1.pure)(txb, args.type, `0x1::ascii::String`), (0, util_1.pure)(txb, args.buzz, `0x1::string::String`), (0, util_1.pure)(txb, args.genAi, `0x1::option::Option<0x1::string::String>`)], }); }
function upvoteDialogueOnBuzz(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::upvote_dialogue_on_buzz`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.userProfile), (0, util_1.pure)(txb, args.buzzIndex, `u64`), (0, util_1.pure)(txb, args.userBuzzByProfile, `address`), (0, util_1.pure)(txb, args.dialogueIndex, `u64`), (0, util_1.pure)(txb, args.entropyCost, `u64`)], }); }
function verifyAndExtractBeeBox(txb, typeArg, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::dex_dao::verify_and_extract_bee_box`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.poolsGovernor), (0, util_1.obj)(txb, args.poolHive), (0, util_1.obj)(txb, args.hiveProfile)], }); }

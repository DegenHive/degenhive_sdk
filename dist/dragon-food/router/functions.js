"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHiveToLockedDragonBee = addHiveToLockedDragonBee;
exports.addHoneyToLockedDragonBee = addHoneyToLockedDragonBee;
exports.claimVotingRewardsThreePool = claimVotingRewardsThreePool;
exports.claimVotingRewardsTwoPool = claimVotingRewardsTwoPool;
exports.feedBeeInDen = feedBeeInDen;
exports.stakeLp0Fruits = stakeLp0Fruits;
exports.stakeLp1Fruits = stakeLp1Fruits;
exports.stakeLp2Fruits = stakeLp2Fruits;
exports.stakeLp3Fruits = stakeLp3Fruits;
exports.unbondFromDragonDen0Fruits = unbondFromDragonDen0Fruits;
exports.unbondFromDragonDen1Fruits = unbondFromDragonDen1Fruits;
exports.unbondFromDragonDen2Fruits = unbondFromDragonDen2Fruits;
exports.unbondFromDragonDen3Fruits = unbondFromDragonDen3Fruits;
exports.withdrawDragonBee = withdrawDragonBee;
const __1 = require("..");
const PUBLISHED_AT = __1.dragonfood.PUBLISHED_AT;
const CLOCK = __1.dragonfood.CLOCK;
const DRAGON_FOOD = __1.dragonfood.DRAGON_FOOD;
const YIELD_FARM = __1.dragonfood.YIELD_FARM;
const YIELD_FLOW = __1.dragonfood.YIELD_FLOW;
const BEES_MANAGER = __1.dragonfood.BEES_MANAGER;
const util_1 = require("../../_framework/util");
function addHiveToLockedDragonBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_hive_to_locked_dragon_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.hiveCoin), (0, util_1.pure)(tx, args.hiveAmt, `u64`)], }); }
function addHoneyToLockedDragonBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::add_honey_to_locked_dragon_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.honeyManager), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.honeyToken), (0, util_1.pure)(tx, args.honeyAmt, `u64`)], }); }
function claimVotingRewardsThreePool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::claim_voting_rewards_three_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function claimVotingRewardsTwoPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::claim_voting_rewards_two_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function feedBeeInDen(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::feed_bee_in_den`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function stakeLp0Fruits(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::stake_lp_0_fruits`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.lpToken), (0, util_1.pure)(tx, args.amount, `u64`)], }); }
function stakeLp1Fruits(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::stake_lp_1_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.lpToken), (0, util_1.pure)(tx, args.amount, `u64`)], }); }
function stakeLp2Fruits(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::stake_lp_2_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.lpToken), (0, util_1.pure)(tx, args.amount, `u64`)], }); }
function stakeLp3Fruits(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::stake_lp_3_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.lpToken), (0, util_1.pure)(tx, args.amount, `u64`)], }); }
function unbondFromDragonDen0Fruits(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_dragon_den_0_fruits`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.unbondAmount, `u64`)], }); }
function unbondFromDragonDen1Fruits(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_dragon_den_1_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.unbondAmount, `u64`)], }); }
function unbondFromDragonDen2Fruits(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_dragon_den_2_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.unbondAmount, `u64`)], }); }
function unbondFromDragonDen3Fruits(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_dragon_den_3_fruits`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.unbondAmount, `u64`)], }); }
function withdrawDragonBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::router::withdraw_dragon_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer)], }); }

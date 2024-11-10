"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const dragonFood = require("./dragon-food/structs");
function registerClasses(loader) {
    loader.register(dragonFood.AddHiveAndEnergyForNextCycle);
    loader.register(dragonFood.AddedToDragonDen);
    loader.register(dragonFood.BribeAddedForEmissions);
    loader.register(dragonFood.BribeClaimedByTrainerThreePool);
    loader.register(dragonFood.BribeClaimedByTrainerTwoPool);
    loader.register(dragonFood.BribeMarkedAsToken);
    loader.register(dragonFood.Bribes);
    loader.register(dragonFood.DragonBeeWithdrawalRequested);
    loader.register(dragonFood.DragonDen);
    loader.register(dragonFood.DragonFood);
    loader.register(dragonFood.DragonFoodCycleUpdated);
    loader.register(dragonFood.DragonFoodVotingConfigUpdated);
    loader.register(dragonFood.EmissionSchedule);
    loader.register(dragonFood.EmissionsRcvdByPoolHive);
    loader.register(dragonFood.FeedingFoodToBee);
    loader.register(dragonFood.FeesClaimedForEmissions);
    loader.register(dragonFood.FoodCycleUpdatedForPoolHive);
    loader.register(dragonFood.FruitLife);
    loader.register(dragonFood.HivePerEpochUpdated);
    loader.register(dragonFood.HoneyFruit);
    loader.register(dragonFood.HoneyFruitDestroyed);
    loader.register(dragonFood.HoneyFruitKraftedForPoolHive);
    loader.register(dragonFood.LendingPoolCapability);
    loader.register(dragonFood.LiquidatedLP);
    loader.register(dragonFood.LockedDragonBee);
    loader.register(dragonFood.LockedLP);
    loader.register(dragonFood.MoreFruitsAdded);
    loader.register(dragonFood.NewProposalKrafted);
    loader.register(dragonFood.PoolHive);
    loader.register(dragonFood.PoolHiveKrafted);
    loader.register(dragonFood.Proposal);
    loader.register(dragonFood.ProposalDeleted);
    loader.register(dragonFood.ProposalEvaluated);
    loader.register(dragonFood.ProposalExecuted);
    loader.register(dragonFood.RestedLockedDragonBeeReturnedInWild);
    loader.register(dragonFood.RipeFruitsClaimed);
    loader.register(dragonFood.TradingFeeClaimedByTrainer);
    loader.register(dragonFood.TrainerVotedForEmissions);
    loader.register(dragonFood.UnbondingFromDragonDen);
    loader.register(dragonFood.UnlockedLP);
    loader.register(dragonFood.Vote);
    loader.register(dragonFood.VoteCasted);
    loader.register(dragonFood.VoteConfig);
    loader.register(dragonFood.VotingBribes);
    loader.register(dragonFood.VotingPowerIncreasedForLockedBee);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const dexDao = require("./dex-dao/structs");
function registerClasses(loader) {
    loader.register(dexDao.AddedToBeeBox);
    loader.register(dexDao.BeeFruit);
    loader.register(dexDao.BeeFruitDestroyed);
    loader.register(dexDao.BeeFruitKraftedForPoolHive);
    loader.register(dexDao.Dialogue);
    loader.register(dexDao.Dialogues);
    loader.register(dexDao.FruitLife);
    loader.register(dexDao.GemsPerEpochUpdated);
    loader.register(dexDao.GemsSchedule);
    loader.register(dexDao.GemsSetForNewHiveCycle);
    loader.register(dexDao.GovernorBuzz);
    loader.register(dexDao.GovernorBuzzDestroyed);
    loader.register(dexDao.KraftedGemsForPoolHive);
    loader.register(dexDao.LpBeeBox);
    loader.register(dexDao.MoreFruitsAdded);
    loader.register(dexDao.NewGovernorBuzz);
    loader.register(dexDao.NewProposalKrafted);
    loader.register(dexDao.PoolGovernorBuzzes);
    loader.register(dexDao.PoolHive);
    loader.register(dexDao.PoolHiveKrafted);
    loader.register(dexDao.PoolHiveNecatarPointsUpdated);
    loader.register(dexDao.PoolsGovernor);
    loader.register(dexDao.PoolsGovernorUpdated);
    loader.register(dexDao.Proposal);
    loader.register(dexDao.ProposalDeleted);
    loader.register(dexDao.ProposalEvaluated);
    loader.register(dexDao.ProposalExecuted);
    loader.register(dexDao.RipeFruitsClaimed);
    loader.register(dexDao.SystemBuzz);
    loader.register(dexDao.UnbondingFromBeeBox);
    loader.register(dexDao.UnlockFromBeeBox);
    loader.register(dexDao.UserBuzzOnGovernanceBuzzDetected);
    loader.register(dexDao.UserLikedGovernorBuzz);
    loader.register(dexDao.UserUnLikedGovernorBuzz);
    loader.register(dexDao.UserUpvotedGovernanceBuzz);
    loader.register(dexDao.VoteCasted);
    loader.register(dexDao.VoteConfig);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLowercase = toLowercase;
exports.init = init;
exports.u64ToAscii = u64ToAscii;
exports.acceptBid = acceptBid;
exports.addAppToHiveStore = addAppToHiveStore;
exports.addAppToTrainer = addAppToTrainer;
exports.addBeeFriendsForBreeding = addBeeFriendsForBreeding;
exports.addBidToTable = addBidToTable;
exports.addCapabilitiesBasedOnGene = addCapabilitiesBasedOnGene;
exports.addDnaForDragonEgg = addDnaForDragonEgg;
exports.addStoreToBee = addStoreToBee;
exports.addToAdminFee = addToAdminFee;
exports.adjustCapabilityValue = adjustCapabilityValue;
exports.adminMintQueen = adminMintQueen;
exports.attackBee = attackBee;
exports.borrowAppFromTrainer = borrowAppFromTrainer;
exports.borrowFromTrainer = borrowFromTrainer;
exports.borrowNonMutStoreFromBee = borrowNonMutStoreFromBee;
exports.borrowStoreFromBee = borrowStoreFromBee;
exports.breedWithQueenBee = breedWithQueenBee;
exports.calculateDragonDustChance = calculateDragonDustChance;
exports.calculateMaxMultiplier = calculateMaxMultiplier;
exports.cancelActiveTrainerRequest = cancelActiveTrainerRequest;
exports.cancelBid = cancelBid;
exports.cancelListing = cancelListing;
exports.cancelTransferOfBee = cancelTransferOfBee;
exports.chargeMysticalBee = chargeMysticalBee;
exports.chooseRandomDragonBee = chooseRandomDragonBee;
exports.chooseRandomTrainer = chooseRandomTrainer;
exports.claimBeeFromIncomingBox = claimBeeFromIncomingBox;
exports.claimGovYield = claimGovYield;
exports.claimHiddenWorldRewards = claimHiddenWorldRewards;
exports.claimRewardsFromHiddenWorldBees = claimRewardsFromHiddenWorldBees;
exports.claimSuiFromBeehive = claimSuiFromBeehive;
exports.computeVehive = computeVehive;
exports.createBid = createBid;
exports.createBidRecord = createBidRecord;
exports.createHiddenWorldQuest = createHiddenWorldQuest;
exports.createP2pGameSession = createP2pGameSession;
exports.createP2pSessionId = createP2pSessionId;
exports.createTrainerSession = createTrainerSession;
exports.deleteDragonBee = deleteDragonBee;
exports.deleteDragonTrainer = deleteDragonTrainer;
exports.deleteExpiredTrainerRequestFromList = deleteExpiredTrainerRequestFromList;
exports.deleteHiddenBee = deleteHiddenBee;
exports.depositBeeBackToItsOwner = depositBeeBackToItsOwner;
exports.depositBeeInTrainer = depositBeeInTrainer;
exports.depositHiveForDistribution = depositHiveForDistribution;
exports.depositHiveWithDragonEggsBasket = depositHiveWithDragonEggsBasket;
exports.depositHiveWithTreasury = depositHiveWithTreasury;
exports.depositHoneyForDistribution = depositHoneyForDistribution;
exports.depositHoneyInDragonSchool = depositHoneyInDragonSchool;
exports.depositHoneyInTrainer = depositHoneyInTrainer;
exports.depositHoneyTokensForDistribution = depositHoneyTokensForDistribution;
exports.depositHoneyWithDragonEggsBasket = depositHoneyWithDragonEggsBasket;
exports.depositHoneyWithTreasury = depositHoneyWithTreasury;
exports.destroyBid = destroyBid;
exports.destroyBidAmongBids = destroyBidAmongBids;
exports.destroyBidRecord = destroyBidRecord;
exports.destroyListing = destroyListing;
exports.destroyListingRecord = destroyListingRecord;
exports.doesDappNameExist = doesDappNameExist;
exports.doesTrainerOwnsBee = doesTrainerOwnsBee;
exports.dragonFoodClaimGovYield = dragonFoodClaimGovYield;
exports.dragonFoodDepositBee = dragonFoodDepositBee;
exports.dragonFoodInfuseBeeWithEnergy = dragonFoodInfuseBeeWithEnergy;
exports.dragonFoodInfuseBeeWithHealth = dragonFoodInfuseBeeWithHealth;
exports.emitDragonDust = emitDragonDust;
exports.engageHiddenWorldQuest = engageHiddenWorldQuest;
exports.entryAddBeeFriendsForBreeding = entryAddBeeFriendsForBreeding;
exports.entryClaimSuiFromBeehive = entryClaimSuiFromBeehive;
exports.entryDepositHoneyInDragonSchool = entryDepositHoneyInDragonSchool;
exports.entryDepositHoneyInTrainer = entryDepositHoneyInTrainer;
exports.entryRemoveBeeFriendsForBreeding = entryRemoveBeeFriendsForBreeding;
exports.entryUpdatePricingForBreeding = entryUpdatePricingForBreeding;
exports.evolveBeePowers = evolveBeePowers;
exports.evolveDragonBee = evolveDragonBee;
exports.evolvedGeneGenerator = evolvedGeneGenerator;
exports.executeSale = executeSale;
exports.existsForTrainer = existsForTrainer;
exports.followTrainer = followTrainer;
exports.followTrainerAndReturn = followTrainerAndReturn;
exports.freeExpiredSuinsDomainUsername = freeExpiredSuinsDomainUsername;
exports.gameMasterAddsHoneyToTrainerViaBee = gameMasterAddsHoneyToTrainerViaBee;
exports.gameMasterBeesAttack = gameMasterBeesAttack;
exports.gameMasterClaimHiddenWorldRewards = gameMasterClaimHiddenWorldRewards;
exports.gameMasterDepositBee = gameMasterDepositBee;
exports.gameMasterInfusesBeeWithEnergy = gameMasterInfusesBeeWithEnergy;
exports.gameMasterInfusesBeeWithHealth = gameMasterInfusesBeeWithHealth;
exports.gameMasterSendToHiddenWorld = gameMasterSendToHiddenWorld;
exports.gameMasterWithdrawBee = gameMasterWithdrawBee;
exports.gameMasterWithdrawsHiveFromBee = gameMasterWithdrawsHiveFromBee;
exports.getAccruedYieldForBee = getAccruedYieldForBee;
exports.getAccruedYieldForListedBee = getAccruedYieldForListedBee;
exports.getAccruedYieldForOwnedBee = getAccruedYieldForOwnedBee;
exports.getActiveTrainersIndexes = getActiveTrainersIndexes;
exports.getAllOwnersAndTrainersList = getAllOwnersAndTrainersList;
exports.getAllSupportedAppsAndCapabilities = getAllSupportedAppsAndCapabilities;
exports.getAllUsernamesAndCompTrainersList = getAllUsernamesAndCompTrainersList;
exports.getAllUsernamesAndTrainersList = getAllUsernamesAndTrainersList;
exports.getAppearance = getAppearance;
exports.getAvailableHiveInSchool = getAvailableHiveInSchool;
exports.getAvailableHoney = getAvailableHoney;
exports.getAvailableHoneyInSchool = getAvailableHoneyInSchool;
exports.getAvailableSui = getAvailableSui;
exports.getBeeEggContent = getBeeEggContent;
exports.getBeeFamily = getBeeFamily;
exports.getBeeForQueenCompetition = getBeeForQueenCompetition;
exports.getBeeInfo = getBeeInfo;
exports.getBeeTrainer = getBeeTrainer;
exports.getBeeVersion = getBeeVersion;
exports.getBeehiveContent = getBeehiveContent;
exports.getBeesManagerParamsInfo = getBeesManagerParamsInfo;
exports.getBeesToCollectList = getBeesToCollectList;
exports.getBidRecord = getBidRecord;
exports.getBidRecords = getBidRecords;
exports.getBidsForListing = getBidsForListing;
exports.getBreedingRoyaltyInfo = getBreedingRoyaltyInfo;
exports.getCapabilityState = getCapabilityState;
exports.getCurrentTurn = getCurrentTurn;
exports.getDragonBeePower = getDragonBeePower;
exports.getDragonDustInfo = getDragonDustInfo;
exports.getDragonEggsBasketContent = getDragonEggsBasketContent;
exports.getDragonSchoolMetaInfo = getDragonSchoolMetaInfo;
exports.getDragonTrainersList = getDragonTrainersList;
exports.getEggsInfoForBee = getEggsInfoForBee;
exports.getEvolutionMultiplier = getEvolutionMultiplier;
exports.getExecutedListingInfo = getExecutedListingInfo;
exports.getFollowersAndFollowingLength = getFollowersAndFollowingLength;
exports.getFollowersList = getFollowersList;
exports.getFollowingList = getFollowingList;
exports.getHiddenMysticalBeeInfo = getHiddenMysticalBeeInfo;
exports.getHiddenMysticalBeesInfo = getHiddenMysticalBeesInfo;
exports.getHiddenWorldVersionList = getHiddenWorldVersionList;
exports.getListedBeeEggsInfo = getListedBeeEggsInfo;
exports.getListedBeeInfo = getListedBeeInfo;
exports.getListedBeesInMarketplace = getListedBeesInMarketplace;
exports.getListingFromMarketplace = getListingFromMarketplace;
exports.getListingRecord = getListingRecord;
exports.getListingRecords = getListingRecords;
exports.getLockedAssets = getLockedAssets;
exports.getLockedBeesPaginated = getLockedBeesPaginated;
exports.getMasterKeyInfo = getMasterKeyInfo;
exports.getMysticalBeeInfoWithPower = getMysticalBeeInfoWithPower;
exports.getOwnedBeeEggsInfo = getOwnedBeeEggsInfo;
exports.getOwnedBeeInfo = getOwnedBeeInfo;
exports.getOwnedBees = getOwnedBees;
exports.getP2pGameSessionInfo = getP2pGameSessionInfo;
exports.getPaginatedActiveTrainersList = getPaginatedActiveTrainersList;
exports.getPricesForDragonbeeEggs = getPricesForDragonbeeEggs;
exports.getProcessedListingsList = getProcessedListingsList;
exports.getQuestRequestInfo = getQuestRequestInfo;
exports.getRoyaltyInfo = getRoyaltyInfo;
exports.getTrainerAddr = getTrainerAddr;
exports.getTrainerForUsername = getTrainerForUsername;
exports.getTrainerInfo = getTrainerInfo;
exports.getTrainerInfoWithPower = getTrainerInfoWithPower;
exports.getTrainerInscription = getTrainerInscription;
exports.getTrainerJoinedAt = getTrainerJoinedAt;
exports.getTrainerMetaInfo = getTrainerMetaInfo;
exports.getTrainerOwner = getTrainerOwner;
exports.getTrainerSessionInfo = getTrainerSessionInfo;
exports.getTrainerSessions = getTrainerSessions;
exports.getTrainerUsername = getTrainerUsername;
exports.getTreasuryInfo = getTreasuryInfo;
exports.getYieldFarmInfo = getYieldFarmInfo;
exports.handleExpiredListings = handleExpiredListings;
exports.handleExpiredMarketplaceBids = handleExpiredMarketplaceBids;
exports.handleProcessedListing = handleProcessedListing;
exports.handleSuiBet = handleSuiBet;
exports.harvestRoyaltyYieldForBuilders = harvestRoyaltyYieldForBuilders;
exports.harvestYieldFromBees = harvestYieldFromBees;
exports.harvestYieldFromBeesAndReturn = harvestYieldFromBeesAndReturn;
exports.hatchDragonEgg = hatchDragonEgg;
exports.idForDofOfTrainer = idForDofOfTrainer;
exports.incrementBeesManager = incrementBeesManager;
exports.incrementDegenhiveMapStore = incrementDegenhiveMapStore;
exports.incrementGlobalYieldIndexes = incrementGlobalYieldIndexes;
exports.incrementHiddenWorld = incrementHiddenWorld;
exports.incrementMarketplace = incrementMarketplace;
exports.incrementTrainer = incrementTrainer;
exports.incrementYieldFarm = incrementYieldFarm;
exports.infuseBeeAndSchoolWithHoney = infuseBeeAndSchoolWithHoney;
exports.infuseBeeAndTrainerWithHoney = infuseBeeAndTrainerWithHoney;
exports.infuseBeeWithEnergy = infuseBeeWithEnergy;
exports.infuseBeeWithHealth = infuseBeeWithHealth;
exports.internalBreedWithQueenBee = internalBreedWithQueenBee;
exports.internalHandleBattleTurn = internalHandleBattleTurn;
exports.internalHandleBattleTurnImpact = internalHandleBattleTurnImpact;
exports.internalInfuseBeeWithEnergy = internalInfuseBeeWithEnergy;
exports.internalInfuseBeeWithHoney = internalInfuseBeeWithHoney;
exports.internalKraftDragonTrainer = internalKraftDragonTrainer;
exports.internalMakeBeeQueen = internalMakeBeeQueen;
exports.internalReplenishMasterKey = internalReplenishMasterKey;
exports.internalSendToHiddenWorld = internalSendToHiddenWorld;
exports.internalUnlockHiveFromBee = internalUnlockHiveFromBee;
exports.isreadytobreed = isreadytobreed;
exports.isBeeListingExecuted = isBeeListingExecuted;
exports.isDragonBeeEggHatchable = isDragonBeeEggHatchable;
exports.isMysticalBeeListed = isMysticalBeeListed;
exports.isRegisteredAsTrainer = isRegisteredAsTrainer;
exports.isTradingEnabled = isTradingEnabled;
exports.isUsableTrainerName = isUsableTrainerName;
exports.isValidBeeName = isValidBeeName;
exports.isValidTrainerChar = isValidTrainerChar;
exports.isValidTrainerName = isValidTrainerName;
exports.kraftDragonSchool = kraftDragonSchool;
exports.kraftDragonTrainer = kraftDragonTrainer;
exports.kraftDragonTrainerAndReturnSui = kraftDragonTrainerAndReturnSui;
exports.launchMemePoolViaBee = launchMemePoolViaBee;
exports.layDragonEgg = layDragonEgg;
exports.layGenesisDragonbeeEgg = layGenesisDragonbeeEgg;
exports.layGenesisDragonbeeEggLoop = layGenesisDragonbeeEggLoop;
exports.layGenesisDragonbeeEggs = layGenesisDragonbeeEggs;
exports.lockAssetsWithTrainer = lockAssetsWithTrainer;
exports.lockHiveWithBee = lockHiveWithBee;
exports.lockHoneyWithBee = lockHoneyWithBee;
exports.makeBeeQueen = makeBeeQueen;
exports.makeBid = makeBid;
exports.makeDragonEggHatchable = makeDragonEggHatchable;
exports.makeListing = makeListing;
exports.markMarketplaceBidsAsInvalid = markMarketplaceBidsAsInvalid;
exports.matchActiveTrainers = matchActiveTrainers;
exports.processAndStoreQuest = processAndStoreQuest;
exports.processBreedingRequest = processBreedingRequest;
exports.processEvolutionRequest = processEvolutionRequest;
exports.processRoyalty = processRoyalty;
exports.removeAppFromTrainer = removeAppFromTrainer;
exports.removeBeeFriendsForBreeding = removeBeeFriendsForBreeding;
exports.removeStoreFromBee = removeStoreFromBee;
exports.replenishMasterKey = replenishMasterKey;
exports.replenishMasterKeyWithHoney = replenishMasterKeyWithHoney;
exports.returnBeeFromCompetition = returnBeeFromCompetition;
exports.sendToHiddenWorld = sendToHiddenWorld;
exports.setSuinsDomainAsUsername = setSuinsDomainAsUsername;
exports.setupBeesManager = setupBeesManager;
exports.setupHiddenWorld = setupHiddenWorld;
exports.storeExistsForBee = storeExistsForBee;
exports.switchTradingEnabled = switchTradingEnabled;
exports.trainerActiveForQuest = trainerActiveForQuest;
exports.transferBeeToTrainer = transferBeeToTrainer;
exports.transferHiveTreasuryFunds = transferHiveTreasuryFunds;
exports.transferHoneyViaDragonSchool = transferHoneyViaDragonSchool;
exports.unfollowTrainer = unfollowTrainer;
exports.unlockHiveFromBee = unlockHiveFromBee;
exports.unprocessBreedingRequest = unprocessBreedingRequest;
exports.updateBeeOwnership = updateBeeOwnership;
exports.updateBeesManagerConfig = updateBeesManagerConfig;
exports.updateCapabilityInBeeManager = updateCapabilityInBeeManager;
exports.updateDnaForDragonEgg = updateDnaForDragonEgg;
exports.updateEmaQuestsPlayed = updateEmaQuestsPlayed;
exports.updateGlobalMysticPower = updateGlobalMysticPower;
exports.updateHiddenWorldParams = updateHiddenWorldParams;
exports.updateHiveTwapInfo = updateHiveTwapInfo;
exports.updateInscription = updateInscription;
exports.updateListing = updateListing;
exports.updateNameOfBee = updateNameOfBee;
exports.updatePricingForBreeding = updatePricingForBreeding;
exports.updatePricingForGenesisMint = updatePricingForGenesisMint;
exports.updateRoyalty = updateRoyalty;
exports.updateUsername = updateUsername;
exports.usePowerIfCan = usePowerIfCan;
exports.validateIfCanBeed = validateIfCanBeed;
exports.validateIfCanBeedForOwner = validateIfCanBeedForOwner;
exports.whitelistUserForGenesisMint = whitelistUserForGenesisMint;
exports.withdrawBeeForFood = withdrawBeeForFood;
exports.withdrawBeeFromTrainer = withdrawBeeFromTrainer;
exports.withdrawFundsFromTrainer = withdrawFundsFromTrainer;
exports.withdrawFundsFromTrainerAndReturn = withdrawFundsFromTrainerAndReturn;
exports.withdrawHiveFromBee = withdrawHiveFromBee;
exports.withdrawHoneyFromBee = withdrawHoneyFromBee;
exports.withdrawLockedAssets = withdrawLockedAssets;
const __1 = require("..");
const PUBLISHED_AT = __1.dragontrainer.PUBLISHED_AT;
const BEES_MANAGER = __1.dragontrainer.BEES_MANAGER;
const HIDDEN_WORLD = __1.dragontrainer.HIDDEN_WORLD;
const TRAINER_MAPPING_STORE = __1.dragontrainer.TRAINER_MAPPING_STORE;
const YIELD_FARM = __1.dragontrainer.YIELD_FARM;
const MARKETPLACE = __1.dragontrainer.MARKETPLACE;
const HIVE_GRAPH = __1.dragontrainer.HIVE_GRAPH;
const CLOCK = __1.dragontrainer.CLOCK;
const structs_1 = require("../../source/0x1/ascii/structs");
const structs_2 = require("../../source/0x1/option/structs");
const structs_3 = require("../../source/0x1/string/structs");
const util_1 = require("../../_framework/util");
const structs_4 = require("./structs");
function toLowercase(tx, original) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::to_lowercase`, arguments: [(0, util_1.pure)(tx, original, `${structs_1.String.$typeName}`)], }); }
function init(tx, otw) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::init`, arguments: [(0, util_1.obj)(tx, otw)], }); }
function u64ToAscii(tx, num) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::u64_to_ascii`, arguments: [(0, util_1.pure)(tx, num, `u64`)], }); }
function acceptBid(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::accept_bid`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.ownerTrainer), (0, util_1.pure)(tx, args.bidderTrainerAddr, `address`), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function addAppToHiveStore(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_app_to_hive_store`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.mappingStore), (0, util_1.pure)(tx, args.appName, `${structs_1.String.$typeName}`), (0, util_1.pure)(tx, args.hiveRewards, `u64`), (0, util_1.pure)(tx, args.honeyRewards, `u64`), (0, util_1.pure)(tx, args.receipient, `address`)], }); }
function addAppToTrainer(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_app_to_trainer`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.masterKey), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.appId, `address`), (0, util_1.generic)(tx, `${typeArg}`, args.appToAdd)], }); }
function addBeeFriendsForBreeding(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_bee_friends_for_breeding`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.queenBee), (0, util_1.pure)(tx, args.friendlyBee, `u64`), (0, util_1.pure)(tx, args.newPrice, `u64`)], }); }
function addBidToTable(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_bid_to_table`, arguments: [(0, util_1.obj)(tx, args.bidsTable), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.obj)(tx, args.bid), (0, util_1.pure)(tx, args.maxBidsPerBee, `u64`)], }); }
function addCapabilitiesBasedOnGene(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_capabilities_based_on_gene`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.mysticalBee)], }); }
function addDnaForDragonEgg(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_dna_for_dragon_egg`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.gene, `u256`), (0, util_1.pure)(tx, args.img, `vector<${structs_3.String.$typeName}>`)], }); }
function addStoreToBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_store_to_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.masterKey), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.appAddr, `address`), (0, util_1.generic)(tx, `${typeArg}`, args.appToAdd)], }); }
function addToAdminFee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_to_admin_fee`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.suiToAdd)], }); }
function adjustCapabilityValue(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::adjust_capability_value`, arguments: [(0, util_1.pure)(tx, args.value, `u64`), (0, util_1.pure)(tx, args.increasePct, `u64`), (0, util_1.pure)(tx, args.maxValue, `u64`)], }); }
function adminMintQueen(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::admin_mint_queen`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.userTrainer), (0, util_1.obj)(tx, args.payableSui)], }); }
function attackBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::attack_bee`, arguments: [(0, util_1.obj)(tx, args.attacker), (0, util_1.obj)(tx, args.defender), (0, util_1.pure)(tx, args.sessionEnergy, `u64`), (0, util_1.pure)(tx, args.sessionHealth, `u64`), (0, util_1.pure)(tx, args.slot, `u8`), (0, util_1.pure)(tx, args.currentTs, `u64`)], }); }
function borrowAppFromTrainer(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::borrow_app_from_trainer`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.masterKey), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function borrowFromTrainer(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::borrow_from_trainer`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.appName, `${structs_1.String.$typeName}`)], }); }
function borrowNonMutStoreFromBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::borrow_non_mut_store_from_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.appName, `${structs_3.String.$typeName}`)], }); }
function borrowStoreFromBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::borrow_store_from_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.masterKey), (0, util_1.obj)(tx, args.mysticalBee)], }); }
function breedWithQueenBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::breed_with_queen_bee`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, args.yieldFlow), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.queenVersion, `u64`), (0, util_1.obj)(tx, args.userTrainer), (0, util_1.pure)(tx, args.stingerBeeVersion, `u64`), (0, util_1.obj)(tx, args.payableSui), (0, util_1.pure)(tx, args.suiToUse, `u64`)], }); }
function calculateDragonDustChance(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::calculate_dragon_dust_chance`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.questsPlayed, `u64`)], }); }
function calculateMaxMultiplier(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::calculate_max_multiplier`, arguments: [(0, util_1.pure)(tx, args.dustPct, `u64`), (0, util_1.pure)(tx, args.evolutionLevel, `u64`)], }); }
function cancelActiveTrainerRequest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::cancel_active_trainer_request`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function cancelBid(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::cancel_bid`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function cancelListing(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::cancel_listing`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function cancelTransferOfBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::cancel_transfer_of_bee`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.recepientTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function chargeMysticalBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::charge_mystical_bee`, arguments: [(0, util_1.obj)(tx, args.dragonFoodCap), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.hiveEnergyToAdd, `u64`)], }); }
function chooseRandomDragonBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::choose_random_dragon_bee`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.random)], }); }
function chooseRandomTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::choose_random_trainer`, arguments: [(0, util_1.pure)(tx, args.curTimestamp, `u64`), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.random)], }); }
function claimBeeFromIncomingBox(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_bee_from_incoming_box`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.recepientTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function claimGovYield(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_gov_yield`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee)], }); }
function claimHiddenWorldRewards(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_hidden_world_rewards`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.trainer), (0, util_1.pure)(tx, args.vecBees, `vector<u64>`)], }); }
function claimRewardsFromHiddenWorldBees(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_rewards_from_hidden_world_bees`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.trainerAddress, `address`), (0, util_1.pure)(tx, args.vecBees, `vector<u64>`)], }); }
function claimSuiFromBeehive(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_sui_from_beehive`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.queenBee)], }); }
function computeVehive(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::compute_veHive`, arguments: [(0, util_1.pure)(tx, args.lockupWeeks, `u64`), (0, util_1.pure)(tx, args.hiveLockedAmt, `u64`), (0, util_1.pure)(tx, args.evolutionStage, `u64`)], }); }
function createBid(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_bid`, arguments: [(0, util_1.pure)(tx, args.bidderTrainerAddr, `address`), (0, util_1.pure)(tx, args.bidPrice, `u64`), (0, util_1.obj)(tx, args.depositBalance), (0, util_1.pure)(tx, args.expirationSec, `u64`)], }); }
function createBidRecord(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_bid_record`, arguments: [(0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.bidPrice, `u64`), (0, util_1.pure)(tx, args.expirationSec, `u64`)], }); }
function createHiddenWorldQuest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_hidden_world_quest`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.pure)(tx, args.trainerAddr1, `address`), (0, util_1.pure)(tx, args.trainerAddr2, `address`), (0, util_1.obj)(tx, args.suiBetBal), (0, util_1.pure)(tx, args.startGameHealth, `u64`), (0, util_1.pure)(tx, args.startGameEnergy, `u64`), (0, util_1.obj)(tx, args.userDragonBee), (0, util_1.obj)(tx, args.dragonBee2)], }); }
function createP2pGameSession(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_p2p_game_session`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.pure)(tx, args.trainerAddr1, `address`), (0, util_1.pure)(tx, args.trainerAddr2, `address`), (0, util_1.pure)(tx, args.version1, `u64`), (0, util_1.pure)(tx, args.version2, `u64`), (0, util_1.obj)(tx, args.mysticalBee1), (0, util_1.obj)(tx, args.mysticalBee2), (0, util_1.obj)(tx, args.suiBetBal), (0, util_1.pure)(tx, args.startGameHealth, `u64`), (0, util_1.pure)(tx, args.startGameEnergy, `u64`)], }); }
function createP2pSessionId(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_p2p_session_id`, arguments: [(0, util_1.pure)(tx, args.version1, `u64`), (0, util_1.pure)(tx, args.version2, `u64`)], }); }
function createTrainerSession(tx, trainerAddress) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_trainer_session`, arguments: [(0, util_1.pure)(tx, trainerAddress, `address`)], }); }
function deleteDragonBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::delete_dragon_bee`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.dragonBee)], }); }
function deleteDragonTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::delete_dragon_trainer`, arguments: [(0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.recepient, `address`)], }); }
function deleteExpiredTrainerRequestFromList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::delete_expired_trainer_request_from_list`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.dragonTrainerAddr, `address`)], }); }
function deleteHiddenBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::delete_hidden_bee`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.obj)(tx, args.hiddenBee)], }); }
function depositBeeBackToItsOwner(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_bee_back_to_its_owner`, arguments: [(0, util_1.obj)(tx, args.recepientTrainer), (0, util_1.obj)(tx, args.bee)], }); }
function depositBeeInTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_bee_in_trainer`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.mysticalBee)], }); }
function depositHiveForDistribution(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_hive_for_distribution`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.hiveToDeposit)], }); }
function depositHiveWithDragonEggsBasket(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_hive_with_dragon_eggs_basket`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.hiveCoins), (0, util_1.pure)(tx, args.amt, `u64`)], }); }
function depositHiveWithTreasury(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_hive_with_treasury`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.hiveBalance)], }); }
function depositHoneyForDistribution(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_for_distribution`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.honeyToDeposit)], }); }
function depositHoneyInDragonSchool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_in_dragon_school`, arguments: [(0, util_1.obj)(tx, args.school), (0, util_1.obj)(tx, args.honeyToDeposit)], }); }
function depositHoneyInTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_in_trainer`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.honeyToDeposit)], }); }
function depositHoneyTokensForDistribution(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_tokens_for_distribution`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.honeyToDeposit), (0, util_1.pure)(tx, args.depositAmount, `u64`)], }); }
function depositHoneyWithDragonEggsBasket(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_with_dragon_eggs_basket`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.honeyBalance)], }); }
function depositHoneyWithTreasury(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_with_treasury`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.honeyBalance)], }); }
function destroyBid(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_bid`, arguments: [(0, util_1.obj)(tx, args.bid), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function destroyBidAmongBids(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_bid_among_bids`, arguments: [(0, util_1.vector)(tx, `${structs_4.Bid.$typeName}`, args.allBids), (0, util_1.pure)(tx, args.bidderTrainerAddr, `address`), (0, util_1.pure)(tx, args.onlyIfInvalid, `bool`), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function destroyBidRecord(tx, bidRecord) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_bid_record`, arguments: [(0, util_1.obj)(tx, bidRecord)], }); }
function destroyListing(tx, listing) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_listing`, arguments: [(0, util_1.obj)(tx, listing)], }); }
function destroyListingRecord(tx, listingRecord) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_listing_record`, arguments: [(0, util_1.obj)(tx, listingRecord)], }); }
function doesDappNameExist(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::does_dapp_name_exist`, arguments: [(0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.pure)(tx, args.dappName, `${structs_1.String.$typeName}`)], }); }
function doesTrainerOwnsBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::does_trainer_owns_bee`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function dragonFoodClaimGovYield(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::dragon_food_claim_gov_yield`, arguments: [(0, util_1.obj)(tx, args.dragonFoodCap), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonBee)], }); }
function dragonFoodDepositBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::dragon_food_deposit_bee`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.bee)], }); }
function dragonFoodInfuseBeeWithEnergy(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::dragon_food_infuse_bee_with_energy`, arguments: [(0, util_1.obj)(tx, args.dragonFoodCap), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.obj)(tx, args.hiveBalanceToAdd)], }); }
function dragonFoodInfuseBeeWithHealth(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::dragon_food_infuse_bee_with_health`, arguments: [(0, util_1.obj)(tx, args.dragonFoodCap), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.obj)(tx, args.honeyBalanceToAdd)], }); }
function emitDragonDust(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::emit_dragon_dust`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, args.currentQuest), (0, util_1.pure)(tx, args.checkVersion1, `bool`), (0, util_1.pure)(tx, args.suiBetAmt, `u64`)], }); }
function engageHiddenWorldQuest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::engage_hidden_world_quest`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.usePower, `u8`)], }); }
function entryAddBeeFriendsForBreeding(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_add_bee_friends_for_breeding`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.userTrainer), (0, util_1.pure)(tx, args.queenBeeVersion, `u64`), (0, util_1.pure)(tx, args.friendlyBee, `u64`), (0, util_1.pure)(tx, args.newPrice, `u64`)], }); }
function entryClaimSuiFromBeehive(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_claim_sui_from_beehive`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.queenBeeVersion, `u64`)], }); }
function entryDepositHoneyInDragonSchool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_deposit_honey_in_dragon_school`, arguments: [(0, util_1.obj)(tx, args.school), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.honeyTokenIn), (0, util_1.pure)(tx, args.honeyToAddAmt, `u64`)], }); }
function entryDepositHoneyInTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_deposit_honey_in_trainer`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.honeyTokenIn), (0, util_1.pure)(tx, args.honeyToAddAmt, `u64`)], }); }
function entryRemoveBeeFriendsForBreeding(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_remove_bee_friends_for_breeding`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.userTrainer), (0, util_1.pure)(tx, args.queenBeeVersion, `u64`), (0, util_1.pure)(tx, args.friendlyBee, `u64`)], }); }
function entryUpdatePricingForBreeding(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_update_pricing_for_breeding`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.userTrainer), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.pure)(tx, args.isActive, `bool`), (0, util_1.pure)(tx, args.basePrice, `u64`), (0, util_1.pure)(tx, args.curveA, `u64`)], }); }
function evolveBeePowers(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::evolve_bee_powers`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.obj)(tx, args.generator), (0, util_1.pure)(tx, args.maxCapabilityIncrease, `u64`), (0, util_1.pure)(tx, args.maxPowerPct, `u64`), (0, util_1.pure)(tx, args.evolutionStage, `u64`)], }); }
function evolveDragonBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::evolve_dragon_bee`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.newGenerator), (0, util_1.obj)(tx, args.dragonBee)], }); }
function evolvedGeneGenerator(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::evolved_gene_generator`, arguments: [(0, util_1.obj)(tx, args.generator), (0, util_1.pure)(tx, args.genes, `u256`)], }); }
function executeSale(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::execute_sale`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.bidToDelete, `bool`), (0, util_1.pure)(tx, args.bidderTrainerAddr, `address`), (0, util_1.pure)(tx, args.purchasePrice, `u64`), (0, util_1.obj)(tx, args.availBalance)], }); }
function existsForTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::exists_for_trainer`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.appName, `${structs_1.String.$typeName}`)], }); }
function followTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::follow_trainer`, arguments: [(0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.obj)(tx, args.myTrainer), (0, util_1.pure)(tx, args.profileToFollowAddr, `address`)], }); }
function followTrainerAndReturn(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::follow_trainer_and_return`, arguments: [(0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.obj)(tx, args.myTrainer), (0, util_1.pure)(tx, args.profileToFollowAddr, `address`)], }); }
function freeExpiredSuinsDomainUsername(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::free_expired_suins_domain_username`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.pure)(tx, args.suinsDomainName, `${structs_1.String.$typeName}`)], }); }
function gameMasterAddsHoneyToTrainerViaBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_adds_honey_to_trainer_via_bee`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.honeyToDeposit, `u64`)], }); }
function gameMasterBeesAttack(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_bees_attack`, arguments: [(0, util_1.obj)(tx, args.gameMaster), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.attackerBee), (0, util_1.obj)(tx, args.defenderBee), (0, util_1.pure)(tx, args.sessionEnergy, `u64`), (0, util_1.pure)(tx, args.sessionHealth, `u64`), (0, util_1.pure)(tx, args.capSlot, `u64`)], }); }
function gameMasterClaimHiddenWorldRewards(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_claim_hidden_world_rewards`, arguments: [(0, util_1.obj)(tx, args.masterKey), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.vecBees, `vector<u64>`)], }); }
function gameMasterDepositBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_deposit_bee`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.bee)], }); }
function gameMasterInfusesBeeWithEnergy(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_infuses_bee_with_energy`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee), (0, util_1.pure)(tx, args.hiveToLock, `u64`), (0, util_1.pure)(tx, args.lockupWeeks, `u64`)], }); }
function gameMasterInfusesBeeWithHealth(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_infuses_bee_with_health`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee), (0, util_1.pure)(tx, args.honeyToLock, `u64`)], }); }
function gameMasterSendToHiddenWorld(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_send_to_hidden_world`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.mysticalBee)], }); }
function gameMasterWithdrawBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_withdraw_bee`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function gameMasterWithdrawsHiveFromBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_withdraws_hive_from_bee`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee)], }); }
function getAccruedYieldForBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_accrued_yield_for_bee`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee)], }); }
function getAccruedYieldForListedBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_accrued_yield_for_listed_bee`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getAccruedYieldForOwnedBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_accrued_yield_for_owned_bee`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getActiveTrainersIndexes(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_active_trainers_indexes`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD)], }); }
function getAllOwnersAndTrainersList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_all_owners_and_trainers_list`, arguments: [(0, util_1.obj)(tx, args.tableStore), (0, util_1.pure)(tx, args.owner, `${structs_2.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getAllSupportedAppsAndCapabilities(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_all_supported_apps_and_capabilities`, arguments: [(0, util_1.obj)(tx, args.tableStore), (0, util_1.pure)(tx, args.appName, `${structs_2.Option.$typeName}<${structs_1.String.$typeName}>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getAllUsernamesAndCompTrainersList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_all_usernames_and_comp_trainers_list`, arguments: [(0, util_1.obj)(tx, args.tableStore), (0, util_1.pure)(tx, args.username, `${structs_2.Option.$typeName}<${structs_3.String.$typeName}>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getAllUsernamesAndTrainersList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_all_usernames_and_trainers_list`, arguments: [(0, util_1.obj)(tx, args.tableStore), (0, util_1.pure)(tx, args.username, `${structs_2.Option.$typeName}<${structs_3.String.$typeName}>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getAppearance(tx, bee) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_appearance`, arguments: [(0, util_1.obj)(tx, bee)], }); }
function getAvailableHiveInSchool(tx, dragonSchool) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_available_hive_in_school`, arguments: [(0, util_1.obj)(tx, dragonSchool)], }); }
function getAvailableHoney(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_available_honey`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getAvailableHoneyInSchool(tx, dragonSchool) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_available_honey_in_school`, arguments: [(0, util_1.obj)(tx, dragonSchool)], }); }
function getAvailableSui(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_available_sui`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getBeeEggContent(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_egg_content`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.hiveId, `u64`), (0, util_1.pure)(tx, args.eggId, `u64`)], }); }
function getBeeFamily(tx, bee) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_family`, arguments: [(0, util_1.obj)(tx, bee)], }); }
function getBeeForQueenCompetition(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_for_queen_competition`, arguments: [(0, util_1.obj)(tx, args.treasuryCap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.appAddr, `address`), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getBeeInfo(tx, bee) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_info`, arguments: [(0, util_1.obj)(tx, bee)], }); }
function getBeeTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_trainer`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getBeeVersion(tx, bee) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_version`, arguments: [(0, util_1.obj)(tx, bee)], }); }
function getBeehiveContent(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_beehive_content`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.queenVersion, `u64`)], }); }
function getBeesManagerParamsInfo(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bees_manager_params_info`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER)], }); }
function getBeesToCollectList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bees_to_collect_list`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.trainerAddress, `address`)], }); }
function getBidRecord(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bid_record`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getBidRecords(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bid_records`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getBidsForListing(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bids_for_listing`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.pure)(tx, args.startFromIndex, `${structs_2.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.count, `u64`)], }); }
function getBreedingRoyaltyInfo(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_breeding_royalty_info`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER)], }); }
function getCapabilityState(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_capability_state`, arguments: [(0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.slot, `u8`)], }); }
function getCurrentTurn(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_current_turn`, arguments: [(0, util_1.pure)(tx, args.nextTurn, `u64`), (0, util_1.pure)(tx, args.currentTimestamp, `u64`), (0, util_1.pure)(tx, args.lastActionTs, `u64`), (0, util_1.pure)(tx, args.turnDuration, `u64`)], }); }
function getDragonBeePower(tx, mysticalBee) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_bee_power`, arguments: [(0, util_1.obj)(tx, mysticalBee)], }); }
function getDragonDustInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_dust_info`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getDragonEggsBasketContent(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_eggs_basket_content`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.basketId, `u64`)], }); }
function getDragonSchoolMetaInfo(tx, profile) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_school_meta_info`, arguments: [(0, util_1.obj)(tx, profile)], }); }
function getDragonTrainersList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_trainers_list`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.version, `${structs_2.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getEggsInfoForBee(tx, bee) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_eggs_info_for_bee`, arguments: [(0, util_1.obj)(tx, bee)], }); }
function getEvolutionMultiplier(tx, evolutionStage) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_evolution_multiplier`, arguments: [(0, util_1.pure)(tx, evolutionStage, `u8`)], }); }
function getExecutedListingInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_executed_listing_info`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getFollowersAndFollowingLength(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_followers_and_following_length`, arguments: [(0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.pure)(tx, args.dragonTrainerAddr, `address`)], }); }
function getFollowersList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_followers_list`, arguments: [(0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.pure)(tx, args.dragonTrainerAddr, `address`), (0, util_1.pure)(tx, args.subscriber, `${structs_2.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getFollowingList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_following_list`, arguments: [(0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.pure)(tx, args.dragonTrainerAddr, `address`), (0, util_1.pure)(tx, args.subscribedTo, `${structs_2.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getHiddenMysticalBeeInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_hidden_mystical_bee_info`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getHiddenMysticalBeesInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_hidden_mystical_bees_info`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.versions, `vector<u64>`)], }); }
function getHiddenWorldVersionList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_hidden_world_version_list`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.listIndex, `u64`)], }); }
function getListedBeeEggsInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listed_bee_eggs_info`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getListedBeeInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listed_bee_info`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getListedBeesInMarketplace(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listed_bees_in_marketplace`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.startFrom, `${structs_2.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getListingFromMarketplace(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listing_from_marketplace`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getListingRecord(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listing_record`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getListingRecords(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listing_records`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getLockedAssets(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_locked_assets`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getLockedBeesPaginated(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_locked_bees_paginated`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.limit, `u64`), (0, util_1.pure)(tx, args.cursor, `${structs_2.Option.$typeName}<u64>`)], }); }
function getMasterKeyInfo(tx, appMasterKey) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_master_key_info`, arguments: [(0, util_1.obj)(tx, appMasterKey)], }); }
function getMysticalBeeInfoWithPower(tx, mysticalBee) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_mystical_bee_info_with_power`, arguments: [(0, util_1.obj)(tx, mysticalBee)], }); }
function getOwnedBeeEggsInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_owned_bee_eggs_info`, arguments: [(0, util_1.obj)(tx, args.profile), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getOwnedBeeInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_owned_bee_info`, arguments: [(0, util_1.obj)(tx, args.profile), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function getOwnedBees(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_owned_bees`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getP2pGameSessionInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_p2p_game_session_info`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.gameId, `${structs_3.String.$typeName}`)], }); }
function getPaginatedActiveTrainersList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_paginated_active_trainers_list`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.startFrom, `${structs_2.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getPricesForDragonbeeEggs(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_prices_for_dragonbee_eggs`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.beeManager), (0, util_1.pure)(tx, args.userTrainerAddr, `address`), (0, util_1.pure)(tx, args.genesisEggsToLay, `u64`)], }); }
function getProcessedListingsList(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_processed_listings_list`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.startFrom, `${structs_2.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getQuestRequestInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_quest_request_info`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.trainerAddress, `address`)], }); }
function getRoyaltyInfo(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_royalty_info`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER)], }); }
function getTrainerAddr(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_addr`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getTrainerForUsername(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_for_username`, arguments: [(0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.pure)(tx, args.username, `${structs_3.String.$typeName}`)], }); }
function getTrainerInfo(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_info`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getTrainerInfoWithPower(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_info_with_power`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function getTrainerInscription(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_inscription`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getTrainerJoinedAt(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_joined_at`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getTrainerMetaInfo(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_meta_info`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getTrainerOwner(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_owner`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getTrainerSessionInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_session_info`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.trainerAddress, `address`)], }); }
function getTrainerSessions(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_sessions`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getTrainerUsername(tx, dragonTrainer) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_username`, arguments: [(0, util_1.obj)(tx, dragonTrainer)], }); }
function getTreasuryInfo(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_treasury_info`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER)], }); }
function getYieldFarmInfo(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_yield_farm_info`, arguments: [(0, util_1.obj)(tx, YIELD_FARM)], }); }
function handleExpiredListings(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::handle_expired_listings`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function handleExpiredMarketplaceBids(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::handle_expired_marketplace_bids`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function handleProcessedListing(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::handle_processed_listing`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.userDragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function handleSuiBet(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::handle_sui_bet`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.yieldFlow), (0, util_1.obj)(tx, args.suiBet1), (0, util_1.obj)(tx, args.suiBet2)], }); }
function harvestRoyaltyYieldForBuilders(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::harvest_royalty_yield_for_builders`, arguments: [(0, util_1.obj)(tx, args.kraftYieldClaimCap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.recepientAddr, `address`)], }); }
function harvestYieldFromBees(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::harvest_yield_from_bees`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap)], }); }
function harvestYieldFromBeesAndReturn(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::harvest_yield_from_bees_and_return`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap)], }); }
function hatchDragonEgg(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::hatch_dragon_egg`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.eggVersion, `u64`)], }); }
function idForDofOfTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::id_for_dof_of_trainer`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.appName, `${structs_1.String.$typeName}`)], }); }
function incrementBeesManager(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_bees_manager`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER)], }); }
function incrementDegenhiveMapStore(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_degenhive_map_store`, arguments: [(0, util_1.obj)(tx, TRAINER_MAPPING_STORE)], }); }
function incrementGlobalYieldIndexes(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_global_yield_indexes`, arguments: [(0, util_1.obj)(tx, YIELD_FARM)], }); }
function incrementHiddenWorld(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_hidden_world`, arguments: [(0, util_1.obj)(tx, HIDDEN_WORLD)], }); }
function incrementMarketplace(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_marketplace`, arguments: [(0, util_1.obj)(tx, MARKETPLACE)], }); }
function incrementTrainer(tx, profile) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_trainer`, arguments: [(0, util_1.obj)(tx, profile)], }); }
function incrementYieldFarm(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_yield_farm`, arguments: [(0, util_1.obj)(tx, YIELD_FARM)], }); }
function infuseBeeAndSchoolWithHoney(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::infuse_bee_and_school_with_honey`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonSchool), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.obj)(tx, args.honeyBalance)], }); }
function infuseBeeAndTrainerWithHoney(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::infuse_bee_and_trainer_with_honey`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.obj)(tx, args.honeyBalance)], }); }
function infuseBeeWithEnergy(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::infuse_bee_with_energy`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.obj)(tx, args.hiveCoin), (0, util_1.pure)(tx, args.hiveToLock, `u64`), (0, util_1.pure)(tx, args.lockupWeeks, `u64`)], }); }
function infuseBeeWithHealth(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::infuse_bee_with_health`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.obj)(tx, args.honeyTokenIn), (0, util_1.pure)(tx, args.honeyToAddAmt, `u64`)], }); }
function internalBreedWithQueenBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_breed_with_queen_bee`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, args.yieldFlow), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.stingerBee), (0, util_1.pure)(tx, args.queenVersion, `u64`), (0, util_1.obj)(tx, args.payableBalance), (0, util_1.pure)(tx, args.birtherTrainer, `address`), (0, util_1.pure)(tx, args.ownedBy, `address`)], }); }
function internalHandleBattleTurn(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_handle_battle_turn`, arguments: [(0, util_1.obj)(tx, args.dragonBeeUsingPower), (0, util_1.obj)(tx, args.dragonBeeOpponent), (0, util_1.pure)(tx, args.sessionEnergy, `u64`), (0, util_1.pure)(tx, args.sessionHealth, `u64`), (0, util_1.pure)(tx, args.usePower, `u8`), (0, util_1.pure)(tx, args.curTimestamp, `u64`)], }); }
function internalHandleBattleTurnImpact(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_handle_battle_turn_impact`, arguments: [(0, util_1.pure)(tx, args.isTrainer1Turn, `bool`), (0, util_1.obj)(tx, args.currentQuest), (0, util_1.pure)(tx, args.energyCost, `u64`), (0, util_1.pure)(tx, args.healthImpact, `u64`)], }); }
function internalInfuseBeeWithEnergy(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_infuse_bee_with_energy`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee), (0, util_1.obj)(tx, args.hiveBalance), (0, util_1.pure)(tx, args.hiveToLock, `u64`), (0, util_1.pure)(tx, args.lockupWeeks, `u64`)], }); }
function internalInfuseBeeWithHoney(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_infuse_bee_with_honey`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee), (0, util_1.obj)(tx, args.honeyBalance)], }); }
function internalKraftDragonTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_kraft_dragon_trainer`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.pure)(tx, args.name, `${structs_3.String.$typeName}`), (0, util_1.pure)(tx, args.krafter, `address`), (0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.suiReceived)], }); }
function internalMakeBeeQueen(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_make_bee_queen`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.maxEggsLimit, `u64`), (0, util_1.pure)(tx, args.auctionEpoch, `u64`)], }); }
function internalReplenishMasterKey(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_replenish_master_key`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.honeyEarned), (0, util_1.obj)(tx, args.hiveEarned), (0, util_1.pure)(tx, args.addToEnergy, `u64`), (0, util_1.pure)(tx, args.addToHealth, `u64`)], }); }
function internalSendToHiddenWorld(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_send_to_hidden_world`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.dragonTrainerAddr, `address`)], }); }
function internalUnlockHiveFromBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_unlock_hive_from_bee`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee)], }); }
function isreadytobreed(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::isReadyToBreed`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.bee)], }); }
function isBeeListingExecuted(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_bee_listing_executed`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function isDragonBeeEggHatchable(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_dragon_bee_egg_hatchable`, arguments: [(0, util_1.obj)(tx, args.beeManager), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function isMysticalBeeListed(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_mystical_bee_listed`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function isRegisteredAsTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_registered_as_trainer`, arguments: [(0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.pure)(tx, args.userAddr, `address`)], }); }
function isTradingEnabled(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_trading_enabled`, arguments: [(0, util_1.obj)(tx, YIELD_FARM)], }); }
function isUsableTrainerName(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_usable_trainer_name`, arguments: [(0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.pure)(tx, args.name, `${structs_3.String.$typeName}`)], }); }
function isValidBeeName(tx, name) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_valid_bee_name`, arguments: [(0, util_1.pure)(tx, name, `${structs_3.String.$typeName}`)], }); }
function isValidTrainerChar(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_valid_trainer_char`, arguments: [(0, util_1.pure)(tx, args.b, `u8`), (0, util_1.pure)(tx, args.isBeeName, `bool`)], }); }
function isValidTrainerName(tx, name) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_valid_trainer_name`, arguments: [(0, util_1.pure)(tx, name, `${structs_3.String.$typeName}`)], }); }
function kraftDragonSchool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::kraft_dragon_school`, arguments: [(0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.pure)(tx, args.name, `${structs_1.String.$typeName}`)], }); }
function kraftDragonTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::kraft_dragon_trainer`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.name, `${structs_3.String.$typeName}`)], }); }
function kraftDragonTrainerAndReturnSui(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::kraft_dragon_trainer_and_return_sui`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.name, `${structs_3.String.$typeName}`)], }); }
function launchMemePoolViaBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::launch_meme_pool_via_bee`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memeCap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.memeIdentifier, `${structs_1.String.$typeName}`)], }); }
function layDragonEgg(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lay_dragon_egg`, arguments: [(0, util_1.pure)(tx, args.generation, `u64`), (0, util_1.pure)(tx, args.honeyDeposit, `u64`), (0, util_1.pure)(tx, args.birthTime, `u64`), (0, util_1.pure)(tx, args.birtherTrainer, `address`), (0, util_1.pure)(tx, args.queenVersion, `u64`), (0, util_1.pure)(tx, args.queenId, `${structs_2.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.stingerId, `${structs_2.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.beeGene, `u256`), (0, util_1.obj)(tx, args.eggImg), (0, util_1.pure)(tx, args.ownedBy, `address`), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.price, `u64`)], }); }
function layGenesisDragonbeeEgg(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lay_genesis_dragonbee_egg`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.userTrainer), (0, util_1.obj)(tx, args.payableBalance), (0, util_1.pure)(tx, args.adminMintQueen, `bool`)], }); }
function layGenesisDragonbeeEggLoop(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lay_genesis_dragonbee_egg_loop`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.userTrainer), (0, util_1.obj)(tx, args.payableSui), (0, util_1.pure)(tx, args.genesisEggsToLay, `u64`)], }); }
function layGenesisDragonbeeEggs(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lay_genesis_dragonbee_eggs`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.userTrainer), (0, util_1.obj)(tx, args.payableSui), (0, util_1.pure)(tx, args.genesisEggsToLay, `u64`)], }); }
function lockAssetsWithTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lock_assets_with_trainer`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.hiveToAdd), (0, util_1.obj)(tx, args.honeyToAdd)], }); }
function lockHiveWithBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lock_hive_with_bee`, arguments: [(0, util_1.pure)(tx, args.currentTime, `u64`), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee), (0, util_1.obj)(tx, args.hiveToAdd), (0, util_1.pure)(tx, args.lockupWeeks, `u64`)], }); }
function lockHoneyWithBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lock_honey_with_bee`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee), (0, util_1.obj)(tx, args.honeyToAdd)], }); }
function makeBeeQueen(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::make_bee_queen`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.maxEggsLimit, `u64`), (0, util_1.pure)(tx, args.auctionEpoch, `u64`)], }); }
function makeBid(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::make_bid`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.obj)(tx, args.bidderTrainer), (0, util_1.obj)(tx, args.payableSui), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.suiBidAmt, `u64`), (0, util_1.pure)(tx, args.expirationSec, `u64`)], }); }
function makeDragonEggHatchable(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::make_dragon_egg_hatchable`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.pure)(tx, args.dragonbeeImg, `vector<${structs_3.String.$typeName}>`)], }); }
function makeListing(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::make_listing`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.minPrice, `u64`), (0, util_1.pure)(tx, args.expirationSec, `u64`)], }); }
function markMarketplaceBidsAsInvalid(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::mark_marketplace_bids_as_invalid`, arguments: [(0, util_1.obj)(tx, MARKETPLACE), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function matchActiveTrainers(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::match_active_trainers`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.yieldFlow), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function processAndStoreQuest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::process_and_store_quest`, arguments: [(0, util_1.obj)(tx, args.random), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.curSessionId, `${structs_3.String.$typeName}`), (0, util_1.obj)(tx, args.p2PGameSession), (0, util_1.pure)(tx, args.isQuestOver, `bool`), (0, util_1.pure)(tx, args.isTrainer1Won, `bool`)], }); }
function processBreedingRequest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::process_breeding_request`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.queenBeeVersion, `u64`), (0, util_1.pure)(tx, args.stingerIndex, `u64`), (0, util_1.pure)(tx, args.img, `vector<${structs_3.String.$typeName}>`)], }); }
function processEvolutionRequest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::process_evolution_request`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.pure)(tx, args.imgIndex, `u64`), (0, util_1.pure)(tx, args.img, `vector<${structs_3.String.$typeName}>`)], }); }
function processRoyalty(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::process_royalty`, arguments: [(0, util_1.obj)(tx, args.paidBalance), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.feeCollector), (0, util_1.pure)(tx, args.queenVersion, `u64`), (0, util_1.pure)(tx, args.isGenesis, `bool`)], }); }
function removeAppFromTrainer(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::remove_app_from_trainer`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.masterKey), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function removeBeeFriendsForBreeding(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::remove_bee_friends_for_breeding`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.queenBee), (0, util_1.pure)(tx, args.friendlyBee, `u64`)], }); }
function removeStoreFromBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::remove_store_from_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.masterKey), (0, util_1.obj)(tx, args.mysticalBee)], }); }
function replenishMasterKey(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::replenish_master_key`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.honeyEarned), (0, util_1.obj)(tx, args.hiveEarned)], }); }
function replenishMasterKeyWithHoney(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::replenish_master_key_with_honey`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.honeyTokenIn), (0, util_1.pure)(tx, args.honeyToAddAmt, `u64`)], }); }
function returnBeeFromCompetition(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::return_bee_from_competition`, arguments: [(0, util_1.obj)(tx, args.treasuryCap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.bee), (0, util_1.pure)(tx, args.energyIncrease, `u64`), (0, util_1.pure)(tx, args.healthIncrease, `u64`)], }); }
function sendToHiddenWorld(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::send_to_hidden_world`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.myTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function setSuinsDomainAsUsername(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::set_suins_domain_as_username`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.myTrainer), (0, util_1.obj)(tx, args.suinsNft), (0, util_1.obj)(tx, args.hiveFee)], }); }
function setupBeesManager(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::setup_bees_manager`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.pure)(tx, args.tradingRoyaltyPct, `u64`), (0, util_1.pure)(tx, args.tradingGovYieldPct, `u64`), (0, util_1.pure)(tx, args.tradingQueenMakerPct, `u64`), (0, util_1.pure)(tx, args.breedingRoyaltyPlatformPct, `u64`), (0, util_1.pure)(tx, args.breedingRoyaltyGovYieldPct, `u64`), (0, util_1.pure)(tx, args.breedingRoyaltyTreasuryPct, `u64`), (0, util_1.pure)(tx, args.maxBidsPerBee, `u64`), (0, util_1.pure)(tx, args.minBidAmt, `u64`), (0, util_1.pure)(tx, args.trainerOnboardingFee, `u64`), (0, util_1.pure)(tx, args.mutationFee, `u64`), (0, util_1.pure)(tx, args.startTime, `u64`), (0, util_1.pure)(tx, args.eggsCount, `u64`), (0, util_1.pure)(tx, args.queenBeeEggsCount, `u64`), (0, util_1.pure)(tx, args.queenChance, `u64`), (0, util_1.pure)(tx, args.maxEggsLimit, `u64`), (0, util_1.pure)(tx, args.perUserLimit, `u64`), (0, util_1.pure)(tx, args.tradingEnabled, `bool`), (0, util_1.pure)(tx, args.minEnergyToHatch, `u64`), (0, util_1.pure)(tx, args.minHealthToHatch, `u64`)], }); }
function setupHiddenWorld(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::setup_hidden_world`, arguments: [(0, util_1.obj)(tx, args.depCap), (0, util_1.obj)(tx, args.hiddenWorldCap), (0, util_1.pure)(tx, args.maxActiveDuration, `u64`), (0, util_1.pure)(tx, args.turnDuration, `u64`), (0, util_1.pure)(tx, args.expiryPenaltyPct, `u64`), (0, util_1.pure)(tx, args.minSuiBetAmt, `u64`), (0, util_1.pure)(tx, args.maxSuiBetAmt, `u64`), (0, util_1.pure)(tx, args.sessionHealth, `u64`), (0, util_1.pure)(tx, args.sessionEnergy, `u64`), (0, util_1.pure)(tx, args.minDragonDustChance, `u64`), (0, util_1.pure)(tx, args.maxDragonDustChance, `u64`), (0, util_1.pure)(tx, args.halfLife, `u64`), (0, util_1.pure)(tx, args.healthPctToEmitDust, `u64`), (0, util_1.pure)(tx, args.maxCapabilityIncrease, `u64`), (0, util_1.pure)(tx, args.maxPowerPct, `u64`)], }); }
function storeExistsForBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::store_exists_for_bee`, arguments: [(0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.appName, `${structs_1.String.$typeName}`)], }); }
function switchTradingEnabled(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::switch_trading_enabled`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.pure)(tx, args.tradingEnabled, `bool`)], }); }
function trainerActiveForQuest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::trainer_active_for_quest`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.betAmt, `u64`), (0, util_1.pure)(tx, args.playerOnly, `bool`), (0, util_1.pure)(tx, args.withTrainer, `${structs_2.Option.$typeName}<address>`)], }); }
function transferBeeToTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::transfer_bee_to_trainer`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.transferredBy), (0, util_1.pure)(tx, args.recepient, `address`), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function transferHiveTreasuryFunds(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::transfer_hive_treasury_funds`, arguments: [(0, util_1.obj)(tx, args.daoCap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.amountToSpend, `u64`)], }); }
function transferHoneyViaDragonSchool(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::transfer_honey_via_dragon_school`, arguments: [(0, util_1.obj)(tx, args.school), (0, util_1.obj)(tx, args.userDragonTrainer), (0, util_1.pure)(tx, args.honeyToTransferAmt, `u64`)], }); }
function unfollowTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::unfollow_trainer`, arguments: [(0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.obj)(tx, args.myTrainer), (0, util_1.pure)(tx, args.profileToUnfollow, `address`)], }); }
function unlockHiveFromBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::unlock_hive_from_bee`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function unprocessBreedingRequest(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::unprocess_breeding_request`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.queenBeeVersion, `u64`), (0, util_1.pure)(tx, args.stingerIndex, `u64`)], }); }
function updateBeeOwnership(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_bee_ownership`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.pure)(tx, args.newOwnerAddr, `address`)], }); }
function updateBeesManagerConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_bees_manager_config`, arguments: [(0, util_1.obj)(tx, args.daoCap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.newMaxBidsPerBee, `u64`), (0, util_1.pure)(tx, args.newMinBidAmt, `u64`), (0, util_1.pure)(tx, args.newTrainerMintFee, `u64`), (0, util_1.pure)(tx, args.mutationFee, `u64`)], }); }
function updateCapabilityInBeeManager(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_capability_in_bee_manager`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.spot, `u64`), (0, util_1.pure)(tx, args.capType, `u8`), (0, util_1.pure)(tx, args.healthImpactPct, `u64`), (0, util_1.pure)(tx, args.energyCostPct, `u64`), (0, util_1.pure)(tx, args.attempts, `u64`), (0, util_1.pure)(tx, args.cooldown, `u64`), (0, util_1.pure)(tx, args.baseAttempts, `u64`)], }); }
function updateDnaForDragonEgg(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_dna_for_dragon_egg`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.index, `u64`), (0, util_1.pure)(tx, args.gene, `u256`), (0, util_1.pure)(tx, args.img, `vector<${structs_3.String.$typeName}>`)], }); }
function updateEmaQuestsPlayed(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_ema_quests_played`, arguments: [(0, util_1.pure)(tx, args.avgQuestsPlayed, `u64`), (0, util_1.pure)(tx, args.questsPlayedByBee, `u64`), (0, util_1.pure)(tx, args.halfLife, `u64`)], }); }
function updateGlobalMysticPower(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_global_mystic_power`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee), (0, util_1.obj)(tx, args.honeyAdded), (0, util_1.obj)(tx, args.hiveAdded), (0, util_1.pure)(tx, args.lockupWeeks, `u64`), (0, util_1.pure)(tx, args.toWithdrawHive, `bool`), (0, util_1.pure)(tx, args.isDeleted, `bool`)], }); }
function updateHiddenWorldParams(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_hidden_world_params`, arguments: [(0, util_1.obj)(tx, args.daoCap), (0, util_1.obj)(tx, HIDDEN_WORLD), (0, util_1.pure)(tx, args.isActive, `bool`), (0, util_1.pure)(tx, args.maxActiveDuration, `u64`), (0, util_1.pure)(tx, args.turnDuration, `u64`), (0, util_1.pure)(tx, args.expiryPenaltyPct, `u64`), (0, util_1.pure)(tx, args.minSuiBetAmt, `u64`), (0, util_1.pure)(tx, args.maxSuiBetAmt, `u64`), (0, util_1.pure)(tx, args.sessionHealth, `u64`), (0, util_1.pure)(tx, args.sessionEnergy, `u64`), (0, util_1.pure)(tx, args.minDragonDustChance, `u64`), (0, util_1.pure)(tx, args.maxDragonDustChance, `u64`), (0, util_1.pure)(tx, args.halfLife, `u64`), (0, util_1.pure)(tx, args.healthPctToEmitDust, `u64`), (0, util_1.pure)(tx, args.maxCapabilityIncrease, `u64`), (0, util_1.pure)(tx, args.maxPowerPct, `u64`)], }); }
function updateHiveTwapInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_hive_twap_info`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, HIVE_GRAPH), (0, util_1.pure)(tx, args.hiveSuiTwap, `u256`), (0, util_1.pure)(tx, args.suiUsdcTwap, `u256`), (0, util_1.pure)(tx, args.hiveUsdcTwap, `u256`)], }); }
function updateInscription(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_inscription`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.myTrainer), (0, util_1.obj)(tx, args.hiveFee), (0, util_1.pure)(tx, args.inscriptionType, `${structs_3.String.$typeName}`), (0, util_1.pure)(tx, args.inscriptionBase64, `vector<${structs_3.String.$typeName}>`)], }); }
function updateListing(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_listing`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, MARKETPLACE), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.newMinPrice, `u64`), (0, util_1.pure)(tx, args.newExpirationSec, `u64`)], }); }
function updateNameOfBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_name_of_bee`, arguments: [(0, util_1.obj)(tx, args.mapStore), (0, util_1.obj)(tx, args.myTrainer), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.pure)(tx, args.newBeename, `${structs_3.String.$typeName}`)], }); }
function updatePricingForBreeding(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_pricing_for_breeding`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.queenBee), (0, util_1.pure)(tx, args.isActive, `bool`), (0, util_1.pure)(tx, args.basePrice, `u64`), (0, util_1.pure)(tx, args.curveA, `u64`)], }); }
function updatePricingForGenesisMint(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_pricing_for_genesis_mint`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.startTime, `u64`), (0, util_1.pure)(tx, args.basePrice, `u64`), (0, util_1.pure)(tx, args.curveA, `u64`), (0, util_1.pure)(tx, args.perUserLimit, `u64`)], }); }
function updateRoyalty(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_royalty`, arguments: [(0, util_1.obj)(tx, args.daoCap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.royaltyNum, `u64`), (0, util_1.pure)(tx, args.govYieldPct, `u64`), (0, util_1.pure)(tx, args.queenPct, `u64`), (0, util_1.pure)(tx, args.breedingPlatformFeesPct, `u64`), (0, util_1.pure)(tx, args.breedingGovYieldPct, `u64`), (0, util_1.pure)(tx, args.breedingTreasuryPct, `u64`), (0, util_1.pure)(tx, args.minEnergyToHatch, `u64`), (0, util_1.pure)(tx, args.minHealthToHatch, `u64`)], }); }
function updateUsername(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_username`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, TRAINER_MAPPING_STORE), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.myTrainer), (0, util_1.obj)(tx, args.hiveFee), (0, util_1.pure)(tx, args.newUsername, `${structs_3.String.$typeName}`)], }); }
function usePowerIfCan(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::use_power_if_can`, arguments: [(0, util_1.obj)(tx, args.capability), (0, util_1.pure)(tx, args.currentTs, `u64`)], }); }
function validateIfCanBeed(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::validate_if_can_beed`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.queenBeeId, `address`), (0, util_1.pure)(tx, args.queenBeeVersion, `u64`), (0, util_1.pure)(tx, args.queenType, `u64`), (0, util_1.obj)(tx, args.breederBee)], }); }
function validateIfCanBeedForOwner(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::validate_if_can_beed_for_owner`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.queenBeeId, `address`), (0, util_1.pure)(tx, args.queenBeeVersion, `u64`), (0, util_1.pure)(tx, args.queenType, `u64`), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`)], }); }
function whitelistUserForGenesisMint(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::whitelist_user_for_genesis_mint`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.userAddr, `address`), (0, util_1.pure)(tx, args.wlPrice, `u64`), (0, util_1.pure)(tx, args.numEggsLimit, `u64`)], }); }
function withdrawBeeForFood(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_bee_for_food`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.poolHiveAddr, `address`)], }); }
function withdrawBeeFromTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_bee_from_trainer`, arguments: [(0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.pure)(tx, args.newOwnerAddr, `address`)], }); }
function withdrawFundsFromTrainer(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_funds_from_trainer`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.pure)(tx, args.toWithdrawSui, `bool`), (0, util_1.pure)(tx, args.toWithdrawHoney, `bool`)], }); }
function withdrawFundsFromTrainerAndReturn(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_funds_from_trainer_and_return`, arguments: [(0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.pure)(tx, args.toWithdrawSui, `bool`), (0, util_1.pure)(tx, args.toWithdrawHoney, `bool`)], }); }
function withdrawHiveFromBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_hive_from_bee`, arguments: [(0, util_1.pure)(tx, args.currentTime, `u64`), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee), (0, util_1.pure)(tx, args.isDeleted, `bool`)], }); }
function withdrawHoneyFromBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_honey_from_bee`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.bee)], }); }
function withdrawLockedAssets(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_locked_assets`, arguments: [(0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap)], }); }

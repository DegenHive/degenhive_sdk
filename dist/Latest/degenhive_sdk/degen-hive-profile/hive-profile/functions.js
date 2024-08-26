"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.acceptBid = acceptBid;
exports.acceptDirectBid = acceptDirectBid;
exports.addAssetUpgradeToKiosk = addAssetUpgradeToKiosk;
exports.addBidRecordToProfile = addBidRecordToProfile;
exports.addBidToTable = addBidToTable;
exports.addStreamingApp = addStreamingApp;
exports.addToProfile = addToProfile;
exports.authorityCheck = authorityCheck;
exports.beeHiveAccessInfo = beeHiveAccessInfo;
exports.borrowFromAdminProfile = borrowFromAdminProfile;
exports.borrowFromProfile = borrowFromProfile;
exports.borrowHiveAsset = borrowHiveAsset;
exports.borrowMutFromProfile = borrowMutFromProfile;
exports.calcNextPaymentTimestamp = calcNextPaymentTimestamp;
exports.calcVotingPower = calcVotingPower;
exports.calculateHiveToChargeForSubscription = calculateHiveToChargeForSubscription;
exports.calculateKraftPrice = calculateKraftPrice;
exports.calculatePow = calculatePow;
exports.cancelBid = cancelBid;
exports.cancelDirectBid = cancelDirectBid;
exports.cancelListing = cancelListing;
exports.claimAccruedRewardsForAsset = claimAccruedRewardsForAsset;
exports.computeHarvestByGems = computeHarvestByGems;
exports.computeProfileSocialfiInfo = computeProfileSocialfiInfo;
exports.consumeEntropy = consumeEntropy;
exports.consumeEntropyOfProfile = consumeEntropyOfProfile;
exports.createBid = createBid;
exports.createBidRecord = createBidRecord;
exports.deleteHiveProfile = deleteHiveProfile;
exports.depositGemsForHive = depositGemsForHive;
exports.depositGemsInProfile = depositGemsInProfile;
exports.depositGemsWithManagerProfile = depositGemsWithManagerProfile;
exports.depositHiveAsset = depositHiveAsset;
exports.depositHsuiForHive = depositHsuiForHive;
exports.depositHsuiForProfile = depositHsuiForProfile;
exports.destroyBid = destroyBid;
exports.destroyBidAmongBids = destroyBidAmongBids;
exports.destroyBidRecord = destroyBidRecord;
exports.destroyBorrowRecord = destroyBorrowRecord;
exports.destroyExecutedListing = destroyExecutedListing;
exports.destroyLendRecord = destroyLendRecord;
exports.destroyListing = destroyListing;
exports.destroyListingRecord = destroyListingRecord;
exports.destroySubscriptionRecord = destroySubscriptionRecord;
exports.doesCollectionExist = doesCollectionExist;
exports.doesUserOwnProfile = doesUserOwnProfile;
exports.entryAddAppToHiveStore = entryAddAppToHiveStore;
exports.entryAddAppToProfile = entryAddAppToProfile;
exports.entryAddToComposableProfile = entryAddToComposableProfile;
exports.entryBorrowAppFromProfile = entryBorrowAppFromProfile;
exports.entryBorrowMutFromComposableProfile = entryBorrowMutFromComposableProfile;
exports.entryManagerAddToProfile = entryManagerAddToProfile;
exports.entryManagerBorrowMutFromProfile = entryManagerBorrowMutFromProfile;
exports.entryManagerRemoveFromProfile = entryManagerRemoveFromProfile;
exports.entryRemoveAppFromProfile = entryRemoveAppFromProfile;
exports.entryRemoveFromComposableProfile = entryRemoveFromComposableProfile;
exports.executePublicKraft = executePublicKraft;
exports.executeSale = executeSale;
exports.existsForAdminProfile = existsForAdminProfile;
exports.existsForProfile = existsForProfile;
exports.exitHiveOfProfile = exitHiveOfProfile;
exports.extractCollectedCreatorRoyalty = extractCollectedCreatorRoyalty;
exports.getAccessLevel = getAccessLevel;
exports.getAccessToHiveInfo = getAccessToHiveInfo;
exports.getAccruedHarvestForAsset = getAccruedHarvestForAsset;
exports.getActivePower = getActivePower;
exports.getAdminHiveProfileInfo = getAdminHiveProfileInfo;
exports.getAllCreatorsAndKiosksCount = getAllCreatorsAndKiosksCount;
exports.getAllOwnersAndProfilesList = getAllOwnersAndProfilesList;
exports.getAllSupportedAppsAndCapabilities = getAllSupportedAppsAndCapabilities;
exports.getAllUsernamesAndCompProfilesList = getAllUsernamesAndCompProfilesList;
exports.getAllUsernamesAndProfilesList = getAllUsernamesAndProfilesList;
exports.getAssetOwnerProfile = getAssetOwnerProfile;
exports.getAssetProfileOwnersList = getAssetProfileOwnersList;
exports.getAssetUpgradeInfo = getAssetUpgradeInfo;
exports.getAssetUpgradesForVersion = getAssetUpgradesForVersion;
exports.getAvailableGemsInProfile = getAvailableGemsInProfile;
exports.getAvailableHarvestForProfile = getAvailableHarvestForProfile;
exports.getBidRecord = getBidRecord;
exports.getBidsForAsset = getBidsForAsset;
exports.getBidsForListing = getBidsForListing;
exports.getBorrowRecord = getBorrowRecord;
exports.getCollectionKiosk = getCollectionKiosk;
exports.getCreatorRoyaltiesList = getCreatorRoyaltiesList;
exports.getCreatorRoyalty = getCreatorRoyalty;
exports.getExecutedListingInfo = getExecutedListingInfo;
exports.getExecutedListingsList = getExecutedListingsList;
exports.getGemsRoyaltyInfo = getGemsRoyaltyInfo;
exports.getHarvestByAssets = getHarvestByAssets;
exports.getHiveAppName = getHiveAppName;
exports.getHiveAssetInfo = getHiveAssetInfo;
exports.getHiveDisperserInfo = getHiveDisperserInfo;
exports.getHiveManagerInfo = getHiveManagerInfo;
exports.getHiveManagerParamsInfo = getHiveManagerParamsInfo;
exports.getHivekioskInfo = getHivekioskInfo;
exports.getHsuiDisperserInfo = getHsuiDisperserInfo;
exports.getKioskAppName = getKioskAppName;
exports.getKioskInfo = getKioskInfo;
exports.getKiosksListForCreator = getKiosksListForCreator;
exports.getKraftedVersionsForKiosk = getKraftedVersionsForKiosk;
exports.getLendRecord = getLendRecord;
exports.getListedAssetsInMarketplace = getListedAssetsInMarketplace;
exports.getListingFromMarketplace = getListingFromMarketplace;
exports.getListingRecord = getListingRecord;
exports.getPricesForHiveAssetKrafts = getPricesForHiveAssetKrafts;
exports.getProfileAddr = getProfileAddr;
exports.getProfileBio = getProfileBio;
exports.getProfileForUsername = getProfileForUsername;
exports.getProfileInfo = getProfileInfo;
exports.getProfileInfoWithPower = getProfileInfoWithPower;
exports.getProfileInfoWithPowerAndLikes = getProfileInfoWithPowerAndLikes;
exports.getProfileInscription = getProfileInscription;
exports.getProfileMetaInfo = getProfileMetaInfo;
exports.getProfileOwner = getProfileOwner;
exports.getProfileUsername = getProfileUsername;
exports.getPromptsForHiveAsset = getPromptsForHiveAsset;
exports.getPublicKraftConfigInfo = getPublicKraftConfigInfo;
exports.getRoyaltyInfo = getRoyaltyInfo;
exports.getSkinsInfoForAsset = getSkinsInfoForAsset;
exports.getSubscribersAndSubscriptionsLength = getSubscribersAndSubscriptionsLength;
exports.getSubscribersList = getSubscribersList;
exports.getSubscriptionsList = getSubscriptionsList;
exports.getVotingPowerForProfile = getVotingPowerForProfile;
exports.handleExpiredListings = handleExpiredListings;
exports.handleExpiredMarketplaceBidsForProfile = handleExpiredMarketplaceBidsForProfile;
exports.handleInvalidDirectBid = handleInvalidDirectBid;
exports.handleProcessedListing = handleProcessedListing;
exports.harvestHiveRewards = harvestHiveRewards;
exports.harvestHiveRewardsAndTransfer = harvestHiveRewardsAndTransfer;
exports.harvestRoyaltyYieldForBuilders = harvestRoyaltyYieldForBuilders;
exports.idForDofOfAdminProfile = idForDofOfAdminProfile;
exports.idForDofOfProfile = idForDofOfProfile;
exports.incrementConfig = incrementConfig;
exports.incrementGemsGlobalIndex = incrementGemsGlobalIndex;
exports.incrementGlobalIndex = incrementGlobalIndex;
exports.incrementHiveDispenser = incrementHiveDispenser;
exports.incrementHiveKiosk = incrementHiveKiosk;
exports.incrementHsuiDispenser = incrementHsuiDispenser;
exports.incrementMarketplace = incrementMarketplace;
exports.incrementProfile = incrementProfile;
exports.incrementProfileIdsStore = incrementProfileIdsStore;
exports.infuseGemsIntoAsset = infuseGemsIntoAsset;
exports.initializePublicKraft = initializePublicKraft;
exports.initializeSkinForAsset = initializeSkinForAsset;
exports.insertAssetsInKiosk = insertAssetsInKiosk;
exports.internalAddAppToHiveStore = internalAddAppToHiveStore;
exports.internalDestroyProfile = internalDestroyProfile;
exports.internalExtractHiveAssetMeta = internalExtractHiveAssetMeta;
exports.internalJoinHiveOfProfile = internalJoinHiveOfProfile;
exports.internalKraftHiveProfile = internalKraftHiveProfile;
exports.internalKraftHiveverseAsset = internalKraftHiveverseAsset;
exports.internalKraftNewSkin = internalKraftNewSkin;
exports.internalProcessSubscriptionPayment = internalProcessSubscriptionPayment;
exports.internalTransferGems = internalTransferGems;
exports.internalWithdrawGems = internalWithdrawGems;
exports.isAssetListingExecuted = isAssetListingExecuted;
exports.isHiveAssetListed = isHiveAssetListed;
exports.isKeeperAccount = isKeeperAccount;
exports.isUsableProfileName = isUsableProfileName;
exports.isValidProfileChar = isValidProfileChar;
exports.isValidProfileName = isValidProfileName;
exports.joinHiveOfProfile = joinHiveOfProfile;
exports.joinHiveOfProfileViaStream = joinHiveOfProfileViaStream;
exports.kraftCapsForLaunch = kraftCapsForLaunch;
exports.kraftHiveAssetsAndReturnSui = kraftHiveAssetsAndReturnSui;
exports.kraftHiveAssetsLoop = kraftHiveAssetsLoop;
exports.kraftHiveProfileAndReturnSui = kraftHiveProfileAndReturnSui;
exports.kraftKiosksForBuilder = kraftKiosksForBuilder;
exports.kraftNewHiveKiosk = kraftNewHiveKiosk;
exports.kraftNewSkinForAsset = kraftNewSkinForAsset;
exports.kraftOwnedHiveProfile = kraftOwnedHiveProfile;
exports.lockHiveAsset = lockHiveAsset;
exports.makeBidWithHsui = makeBidWithHsui;
exports.makeBidWithSui = makeBidWithSui;
exports.makeDirectBidWithHsui = makeDirectBidWithHsui;
exports.makeDirectBidWithSui = makeDirectBidWithSui;
exports.makeForeverSubscriber = makeForeverSubscriber;
exports.makeForeverSubscriberOfCompProfile = makeForeverSubscriberOfCompProfile;
exports.makeForeverSubscriberViaStream = makeForeverSubscriberViaStream;
exports.makeListing = makeListing;
exports.markMarketplaceBidsAsInvalid = markMarketplaceBidsAsInvalid;
exports.modifyBid = modifyBid;
exports.modifyDirectBid = modifyDirectBid;
exports.newSkinKraftedByOwner = newSkinKraftedByOwner;
exports.onboardProfileAsCreator = onboardProfileAsCreator;
exports.portGemsViaAsset = portGemsViaAsset;
exports.powApprox = powApprox;
exports.powApproxFrac = powApproxFrac;
exports.processGemsRoyalty = processGemsRoyalty;
exports.processHighestBidSaleListing = processHighestBidSaleListing;
exports.processHighestBidSaleListings = processHighestBidSaleListings;
exports.processRoyalty = processRoyalty;
exports.processSubscriptionPayment = processSubscriptionPayment;
exports.removeAssetUpgradeFromKiosk = removeAssetUpgradeFromKiosk;
exports.removeFromProfile = removeFromProfile;
exports.removeFromReservedUsernamesList = removeFromReservedUsernamesList;
exports.returnBorrowedHiveAsset = returnBorrowedHiveAsset;
exports.setupHiveManager = setupHiveManager;
exports.stakeSuiForHsui = stakeSuiForHsui;
exports.subSign = subSign;
exports.switchAccessType = switchAccessType;
exports.transferHiveAsset = transferHiveAsset;
exports.transferHiveGems = transferHiveGems;
exports.transferHiveGemsViaCompProfile = transferHiveGemsViaCompProfile;
exports.transferKiosk = transferKiosk;
exports.unlockHiveAsset = unlockHiveAsset;
exports.unstakeHiveAsset = unstakeHiveAsset;
exports.updateAssetOwnership = updateAssetOwnership;
exports.updateBidAmongBids = updateBidAmongBids;
exports.updateBidRecord = updateBidRecord;
exports.updateBio = updateBio;
exports.updateConfigForSkinKraft = updateConfigForSkinKraft;
exports.updateHiveTwapInfo = updateHiveTwapInfo;
exports.updateInscription = updateInscription;
exports.updateKeeperAccountsList = updateKeeperAccountsList;
exports.updateListing = updateListing;
exports.updatePricingAndAccessForKiosk = updatePricingAndAccessForKiosk;
exports.updateProfileConfigParams = updateProfileConfigParams;
exports.updateReservedUsernamesList = updateReservedUsernamesList;
exports.updateRoyalty = updateRoyalty;
exports.updateSubscriptionPricing = updateSubscriptionPricing;
exports.updateTraitsInHiveKiosk = updateTraitsInHiveKiosk;
exports.updateUsername = updateUsername;
exports.upgradeAssetViaKiosk = upgradeAssetViaKiosk;
exports.withdrawGemsFromCompProfile = withdrawGemsFromCompProfile;
exports.withdrawGemsFromProfile = withdrawGemsFromProfile;
exports.withdrawHiveAsset = withdrawHiveAsset;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function init(txb, otw) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::init`, arguments: [(0, util_1.obj)(txb, otw)], }); }
function acceptBid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::accept_bid`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.ownerProfile), (0, util_1.obj)(txb, args.bidderProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function acceptDirectBid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::accept_direct_bid`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.ownerProfile), (0, util_1.obj)(txb, args.bidderProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function addAssetUpgradeToKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::add_asset_upgrade_to_kiosk`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.upgradeAccess, `u8`), (0, util_1.pure)(txb, args.upgradePrice, `u64`), (0, util_1.pure)(txb, args.newImgUrl, `0x1::string::String`), (0, util_1.pure)(txb, args.upgradeTraitsList, `vector<0x1::string::String>`), (0, util_1.pure)(txb, args.upgradePromptsList, `vector<0x1::string::String>`)], }); }
function addBidRecordToProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::add_bid_record_to_profile`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.obj)(txb, args.bidRecord)], }); }
function addBidToTable(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::add_bid_to_table`, arguments: [(0, util_1.obj)(txb, args.bidsTable), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.obj)(txb, args.bid), (0, util_1.pure)(txb, args.maxBidsPerAsset, `u64`)], }); }
function addStreamingApp(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::add_streaming_app`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.mappingStore), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`), (0, util_1.pure)(txb, args.onlyOwnerCanAddApp, `bool`), (0, util_1.pure)(txb, args.onlyOwnerCanAccessApp, `bool`), (0, util_1.pure)(txb, args.onlyOwnerCanRemoveApp, `bool`)], }); }
function addToProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::add_to_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`), (0, util_1.generic)(txb, `${typeArg}`, args.appToAdd)], }); }
function authorityCheck(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::authority_check`, arguments: [(0, util_1.obj)(txb, args.profile), (0, util_1.pure)(txb, args.txExector, `address`)], }); }
function beeHiveAccessInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::bee_hive_access_info`, arguments: [(0, util_1.obj)(txb, args.profile), (0, util_1.pure)(txb, args.subscriber, `address`)], }); }
function borrowFromAdminProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::borrow_from_admin_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function borrowFromProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::borrow_from_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function borrowHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::borrow_hive_asset`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.borrowerHiveProfile), (0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.obj)(txb, args.suiCoin)], }); }
function borrowMutFromProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::borrow_mut_from_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function calcNextPaymentTimestamp(txb, curTimestamp) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::calc_next_payment_timestamp`, arguments: [(0, util_1.pure)(txb, curTimestamp, `u64`)], }); }
function calcVotingPower(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::calc_voting_power`, arguments: [(0, util_1.pure)(txb, args.availableGemsBal, `u64`), (0, util_1.pure)(txb, args.boost, `u64`)], }); }
function calculateHiveToChargeForSubscription(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::calculate_hive_to_charge_for_subscription`, arguments: [(0, util_1.pure)(txb, args.now, `u64`), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.accessCost, `u64`)], }); }
function calculateKraftPrice(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::calculate_kraft_price`, arguments: [(0, util_1.pure)(txb, args.discount, `u64`), (0, util_1.pure)(txb, args.basePrice, `u64`), (0, util_1.pure)(txb, args.curveA, `u64`), (0, util_1.pure)(txb, args.kraftedAssets, `u64`)], }); }
function calculatePow(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::calculate_pow`, arguments: [(0, util_1.pure)(txb, args.baseNumerator, `u128`), (0, util_1.pure)(txb, args.baseDenominator, `u128`), (0, util_1.pure)(txb, args.expNumerator, `u128`), (0, util_1.pure)(txb, args.expDenominator, `u128`)], }); }
function cancelBid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::cancel_bid`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function cancelDirectBid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::cancel_direct_bid`, arguments: [(0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.bidderHiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function cancelListing(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::cancel_listing`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function claimAccruedRewardsForAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::claim_accrued_rewards_for_asset`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveAsset)], }); }
function computeHarvestByGems(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::compute_harvest_by_gems`, arguments: [(0, util_1.pure)(txb, args.globalDispersalIndex, `u256`), (0, util_1.pure)(txb, args.currentClaimIndex, `u256`), (0, util_1.pure)(txb, args.power, `u64`)], }); }
function computeProfileSocialfiInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::compute_profile_socialfi_info`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function consumeEntropy(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::consume_entropy`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.entropyConsumed, `u64`)], }); }
function consumeEntropyOfProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::consume_entropy_of_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.entropyConsumed, `u64`)], }); }
function createBid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::create_bid`, arguments: [(0, util_1.pure)(txb, args.bidderProfileAddr, `address`), (0, util_1.pure)(txb, args.bidPrice, `u64`), (0, util_1.obj)(txb, args.depositBalance), (0, util_1.pure)(txb, args.expirationSec, `u64`), (0, util_1.pure)(txb, args.isListingLive, `bool`)], }); }
function createBidRecord(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::create_bid_record`, arguments: [(0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.bidPrice, `u64`), (0, util_1.pure)(txb, args.expirationSec, `u64`), (0, util_1.pure)(txb, args.isAssetListed, `bool`)], }); }
function deleteHiveProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::delete_hive_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.profile), (0, util_1.obj)(txb, args.hiveProfileStore), (0, util_1.obj)(txb, args.hiveManager)], }); }
function depositGemsForHive(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::deposit_gems_for_hive`, arguments: [(0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveToDeposit)], }); }
function depositGemsInProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::deposit_gems_in_profile`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.gemsToDeposit)], }); }
function depositGemsWithManagerProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::deposit_gems_with_manager_profile`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveGems)], }); }
function depositHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::deposit_hive_asset`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.hiveAsset)], }); }
function depositHsuiForHive(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::deposit_hsui_for_hive`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hsuiToDeposit)], }); }
function depositHsuiForProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::deposit_hsui_for_profile`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.addHsui)], }); }
function destroyBid(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_bid`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.bid), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function destroyBidAmongBids(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_bid_among_bids`, arguments: [(0, util_1.vector)(txb, `0x0::hive_profile::Bid<0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI>`, args.allBids), (0, util_1.pure)(txb, args.bidderProfileAddr, `address`), (0, util_1.pure)(txb, args.onlyIfInvalid, `bool`), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function destroyBidRecord(txb, bidRecord) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_bid_record`, arguments: [(0, util_1.obj)(txb, bidRecord)], }); }
function destroyBorrowRecord(txb, borrowRecord) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_borrow_record`, arguments: [(0, util_1.obj)(txb, borrowRecord)], }); }
function destroyExecutedListing(txb, typeArg, processedListingRecord) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_executed_listing`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, processedListingRecord)], }); }
function destroyLendRecord(txb, lendRecord) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_lend_record`, arguments: [(0, util_1.obj)(txb, lendRecord)], }); }
function destroyListing(txb, listing) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_listing`, arguments: [(0, util_1.obj)(txb, listing)], }); }
function destroyListingRecord(txb, listingRecord) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_listing_record`, arguments: [(0, util_1.obj)(txb, listingRecord)], }); }
function destroySubscriptionRecord(txb, record) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::destroy_subscription_record`, arguments: [(0, util_1.obj)(txb, record)], }); }
function doesCollectionExist(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::does_collection_exist`, arguments: [(0, util_1.obj)(txb, args.profileIdStore), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`)], }); }
function doesUserOwnProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::does_user_own_profile`, arguments: [(0, util_1.obj)(txb, args.profileIdStore), (0, util_1.pure)(txb, args.userAddr, `address`)], }); }
function entryAddAppToHiveStore(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_add_app_to_hive_store`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.mappingStore), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`), (0, util_1.pure)(txb, args.onlyOwnerCanAddApp, `bool`), (0, util_1.pure)(txb, args.onlyOwnerCanAccessApp, `bool`), (0, util_1.pure)(txb, args.onlyOwnerCanRemoveApp, `bool`), (0, util_1.pure)(txb, args.receipient, `address`)], }); }
function entryAddAppToProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_add_app_to_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.accessCap), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.generic)(txb, `${typeArg}`, args.appToAdd)], }); }
function entryAddToComposableProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_add_to_composable_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`), (0, util_1.generic)(txb, `${typeArg}`, args.appToAdd)], }); }
function entryBorrowAppFromProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_borrow_app_from_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.accessCap), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function entryBorrowMutFromComposableProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_borrow_mut_from_composable_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function entryManagerAddToProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_manager_add_to_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.accessCap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.generic)(txb, `${typeArg}`, args.appToAdd)], }); }
function entryManagerBorrowMutFromProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_manager_borrow_mut_from_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.accessCap), (0, util_1.obj)(txb, args.hiveManager)], }); }
function entryManagerRemoveFromProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_manager_remove_from_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.accessCap), (0, util_1.obj)(txb, args.hiveManager)], }); }
function entryRemoveAppFromProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_remove_app_from_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.accessCap), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function entryRemoveFromComposableProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::entry_remove_from_composable_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function executePublicKraft(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::execute_public_kraft`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.hsuiVault), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveKiosk), (0, util_1.obj)(txb, args.publicKraftConfig), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.discount, `u64`), (0, util_1.obj)(txb, args.payableBalance)], }); }
function executeSale(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::execute_sale`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.bidToDelete, `bool`), (0, util_1.pure)(txb, args.bidderProfileAddr, `address`), (0, util_1.pure)(txb, args.purchasePriceInHsui, `u64`), (0, util_1.obj)(txb, args.availBalance)], }); }
function existsForAdminProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::exists_for_admin_profile`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function existsForProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::exists_for_profile`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function exitHiveOfProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::exit_hive_of_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.myProfile), (0, util_1.obj)(txb, args.profileToUnsubscribeTo)], }); }
function extractCollectedCreatorRoyalty(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::extract_collected_creator_royalty`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.profile)], }); }
function getAccessLevel(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_access_level`, arguments: [(0, util_1.obj)(txb, args.accessRecords), (0, util_1.pure)(txb, args.profileAddr, `address`), (0, util_1.pure)(txb, args.now, `u64`)], }); }
function getAccessToHiveInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_access_to_hive_info`, arguments: [(0, util_1.obj)(txb, args.myProfile), (0, util_1.pure)(txb, args.otherProfile, `address`)], }); }
function getAccruedHarvestForAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_accrued_harvest_for_asset`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.gemsDisperser), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getActivePower(txb, profileConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_active_power`, arguments: [(0, util_1.obj)(txb, profileConfig)], }); }
function getAdminHiveProfileInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_admin_hive_profile_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
function getAllCreatorsAndKiosksCount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_all_creators_and_kiosks_count`, arguments: [(0, util_1.obj)(txb, args.tableStore), (0, util_1.pure)(txb, args.creatorProfile, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getAllOwnersAndProfilesList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_all_owners_and_profiles_list`, arguments: [(0, util_1.obj)(txb, args.tableStore), (0, util_1.pure)(txb, args.owner, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getAllSupportedAppsAndCapabilities(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_all_supported_apps_and_capabilities`, arguments: [(0, util_1.obj)(txb, args.tableStore), (0, util_1.pure)(txb, args.appName, `0x1::option::Option<0x1::ascii::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getAllUsernamesAndCompProfilesList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_all_usernames_and_comp_profiles_list`, arguments: [(0, util_1.obj)(txb, args.tableStore), (0, util_1.pure)(txb, args.username, `0x1::option::Option<0x1::string::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getAllUsernamesAndProfilesList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_all_usernames_and_profiles_list`, arguments: [(0, util_1.obj)(txb, args.tableStore), (0, util_1.pure)(txb, args.username, `0x1::option::Option<0x1::string::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getAssetOwnerProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_asset_owner_profile`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getAssetProfileOwnersList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_asset_profile_owners_list`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.version, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getAssetUpgradeInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_asset_upgrade_info`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.upgradeIndex, `u64`)], }); }
function getAssetUpgradesForVersion(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_asset_upgrades_for_version`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getAvailableGemsInProfile(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_available_gems_in_profile`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getAvailableHarvestForProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_available_harvest_for_profile`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function getBidRecord(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_bid_record`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getBidsForAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_bids_for_asset`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getBidsForListing(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_bids_for_listing`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.startFromIndex, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.count, `u64`)], }); }
function getBorrowRecord(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_borrow_record`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getCollectionKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_collection_kiosk`, arguments: [(0, util_1.obj)(txb, args.profileIdStore), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`)], }); }
function getCreatorRoyaltiesList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_creator_royalties_list`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.creatorAddr, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getCreatorRoyalty(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_creator_royalty`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.creatorAddr, `address`)], }); }
function getExecutedListingInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_executed_listing_info`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getExecutedListingsList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_executed_listings_list`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getGemsRoyaltyInfo(txb, hiveManager) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_gems_royalty_info`, arguments: [(0, util_1.obj)(txb, hiveManager)], }); }
function getHarvestByAssets(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_harvest_by_assets`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.suiDisperser), (0, util_1.obj)(txb, args.gemsDisperser), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function getHiveAppName(txb, appAccessCap) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_hive_app_name`, arguments: [(0, util_1.obj)(txb, appAccessCap)], }); }
function getHiveAssetInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_hive_asset_info`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getHiveDisperserInfo(txb, hiveDisperser) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_hive_disperser_info`, arguments: [(0, util_1.obj)(txb, hiveDisperser)], }); }
function getHiveManagerInfo(txb, config) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_hive_manager_info`, arguments: [(0, util_1.obj)(txb, config)], }); }
function getHiveManagerParamsInfo(txb, hiveManager) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_hive_manager_params_info`, arguments: [(0, util_1.obj)(txb, hiveManager)], }); }
function getHivekioskInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_hivekiosk_info`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`)], }); }
function getHsuiDisperserInfo(txb, typeArg, hsuiDisperser) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_hsui_disperser_info`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, hsuiDisperser)], }); }
function getKioskAppName(txb, collectionName) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_kiosk_app_name`, arguments: [(0, util_1.pure)(txb, collectionName, `0x1::string::String`)], }); }
function getKioskInfo(txb, kiosk) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_kiosk_info`, arguments: [(0, util_1.obj)(txb, kiosk)], }); }
function getKiosksListForCreator(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_kiosks_list_for_creator`, arguments: [(0, util_1.obj)(txb, args.tableStore), (0, util_1.pure)(txb, args.creatorProfile, `address`)], }); }
function getKraftedVersionsForKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_krafted_versions_for_kiosk`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.version, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getLendRecord(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_lend_record`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getListedAssetsInMarketplace(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_listed_assets_in_marketplace`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.startFrom, `0x1::option::Option<u64>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getListingFromMarketplace(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_listing_from_marketplace`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getListingRecord(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_listing_record`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getPricesForHiveAssetKrafts(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_prices_for_hive_asset_krafts`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.userProfileAddr, `address`), (0, util_1.pure)(txb, args.assetsToKraft, `u64`)], }); }
function getProfileAddr(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_addr`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getProfileBio(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_bio`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getProfileForUsername(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_for_username`, arguments: [(0, util_1.obj)(txb, args.profileIdStore), (0, util_1.pure)(txb, args.username, `0x1::string::String`)], }); }
function getProfileInfo(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_info`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getProfileInfoWithPower(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_info_with_power`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function getProfileInfoWithPowerAndLikes(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_info_with_power_and_likes`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function getProfileInscription(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_inscription`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getProfileMetaInfo(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_meta_info`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getProfileOwner(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_owner`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getProfileUsername(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_profile_username`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getPromptsForHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_prompts_for_hive_asset`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function getPublicKraftConfigInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_public_kraft_config_info`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`)], }); }
function getRoyaltyInfo(txb, hiveManager) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_royalty_info`, arguments: [(0, util_1.obj)(txb, hiveManager)], }); }
function getSkinsInfoForAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_skins_info_for_asset`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.skinType, `0x1::option::Option<0x1::string::String>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getSubscribersAndSubscriptionsLength(txb, hiveProfile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_subscribers_and_subscriptions_length`, arguments: [(0, util_1.obj)(txb, hiveProfile)], }); }
function getSubscribersList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_subscribers_list`, arguments: [(0, util_1.obj)(txb, args.profile), (0, util_1.pure)(txb, args.subscriber, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getSubscriptionsList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_subscriptions_list`, arguments: [(0, util_1.obj)(txb, args.profile), (0, util_1.pure)(txb, args.subscribedTo, `0x1::option::Option<address>`), (0, util_1.pure)(txb, args.limit, `u64`)], }); }
function getVotingPowerForProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::get_voting_power_for_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function handleExpiredListings(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::handle_expired_listings`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function handleExpiredMarketplaceBidsForProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::handle_expired_marketplace_bids_for_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function handleInvalidDirectBid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::handle_invalid_direct_bid`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.bidderHiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function handleProcessedListing(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::handle_processed_listing`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.listerHiveProfile), (0, util_1.obj)(txb, args.bidderHiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function harvestHiveRewards(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::harvest_hive_rewards`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function harvestHiveRewardsAndTransfer(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::harvest_hive_rewards_and_transfer`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile)], }); }
function harvestRoyaltyYieldForBuilders(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::harvest_royalty_yield_for_builders`, arguments: [(0, util_1.obj)(txb, args.kraftYieldClaimCap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.recepientAddr, `address`)], }); }
function idForDofOfAdminProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::id_for_dof_of_admin_profile`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function idForDofOfProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::id_for_dof_of_profile`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function incrementConfig(txb, hiveManager) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_config`, arguments: [(0, util_1.obj)(txb, hiveManager)], }); }
function incrementGemsGlobalIndex(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_gems_global_index`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser)], }); }
function incrementGlobalIndex(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_global_index`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser)], }); }
function incrementHiveDispenser(txb, hiveDisperser) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_hive_dispenser`, arguments: [(0, util_1.obj)(txb, hiveDisperser)], }); }
function incrementHiveKiosk(txb, hiveKiosk) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_hive_kiosk`, arguments: [(0, util_1.obj)(txb, hiveKiosk)], }); }
function incrementHsuiDispenser(txb, hsuiDisperser) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_hsui_dispenser`, arguments: [(0, util_1.obj)(txb, hsuiDisperser)], }); }
function incrementMarketplace(txb, marketplace) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_marketplace`, arguments: [(0, util_1.obj)(txb, marketplace)], }); }
function incrementProfile(txb, profile) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_profile`, arguments: [(0, util_1.obj)(txb, profile)], }); }
function incrementProfileIdsStore(txb, hiveProfileStore) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::increment_profile_ids_store`, arguments: [(0, util_1.obj)(txb, hiveProfileStore)], }); }
function infuseGemsIntoAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::infuse_gems_into_asset`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.gemsToInfuseAmt, `u64`), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function initializePublicKraft(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::initialize_public_kraft`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.startTime, `u64`), (0, util_1.pure)(txb, args.perUserLimit, `u64`)], }); }
function initializeSkinForAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::initialize_skin_for_asset`, arguments: [(0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.skinType, `0x1::string::String`), (0, util_1.pure)(txb, args.kraftAccess, `u8`), (0, util_1.pure)(txb, args.defaultDiscount, `u64`), (0, util_1.pure)(txb, args.defaultRoyaltyFeePercent, `u64`)], }); }
function insertAssetsInKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::insert_assets_in_kiosk`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.promptsList, `vector<vector<0x1::string::String>>`), (0, util_1.pure)(txb, args.urlList, `vector<0x1::string::String>`), (0, util_1.pure)(txb, args.namesList, `vector<0x1::string::String>`)], }); }
function internalAddAppToHiveStore(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_add_app_to_hive_store`, arguments: [(0, util_1.obj)(txb, args.mappingStore), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`), (0, util_1.pure)(txb, args.onlyOwnerCanAddApp, `bool`), (0, util_1.pure)(txb, args.onlyOwnerCanAccessApp, `bool`), (0, util_1.pure)(txb, args.onlyOwnerCanRemoveApp, `bool`)], }); }
function internalDestroyProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_destroy_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.profile), (0, util_1.obj)(txb, args.hiveProfileStore), (0, util_1.obj)(txb, args.hiveManager)], }); }
function internalExtractHiveAssetMeta(txb, hiveAsset) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_extract_hive_asset_meta`, arguments: [(0, util_1.obj)(txb, hiveAsset)], }); }
function internalJoinHiveOfProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_join_hive_of_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.myProfile), (0, util_1.obj)(txb, args.profileToSubscribeTo), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.pure)(txb, args.accessType, `u8`), (0, util_1.pure)(txb, args.accessCost, `u64`)], }); }
function internalKraftHiveProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_kraft_hive_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.pure)(txb, args.isComposableProfile, `bool`), (0, util_1.pure)(txb, args.name, `0x1::string::String`), (0, util_1.pure)(txb, args.bio, `0x1::string::String`), (0, util_1.pure)(txb, args.krafter, `address`), (0, util_1.obj)(txb, args.hiveProfileStore), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hsuiReceived)], }); }
function internalKraftHiveverseAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_kraft_hiveverse_asset`, arguments: [(0, util_1.obj)(txb, args.krafterProfile), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.hsuiVault), (0, util_1.pure)(txb, args.user, `address`), (0, util_1.pure)(txb, args.timestamp, `u64`), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveKiosk), (0, util_1.obj)(txb, args.payableBalance), (0, util_1.pure)(txb, args.price, `u64`)], }); }
function internalKraftNewSkin(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_kraft_new_skin`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.pure)(txb, args.krafterProfileAddr, `address`), (0, util_1.pure)(txb, args.krafterUsername, `0x1::ascii::String`), (0, util_1.obj)(txb, args.ownerProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.skinType, `0x1::string::String`), (0, util_1.obj)(txb, args.gemsPaidForSkinKraft), (0, util_1.pure)(txb, args.royaltyFeePercent, `u64`), (0, util_1.pure)(txb, args.totalSkinsKrafted, `u64`)], }); }
function internalProcessSubscriptionPayment(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_process_subscription_payment`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.pure)(txb, args.subscriberProfile, `address`), (0, util_1.pure)(txb, args.profileSubscribedTo, `address`), (0, util_1.obj)(txb, args.gemsToTransfer), (0, util_1.pure)(txb, args.accessType, `u8`), (0, util_1.pure)(txb, args.accessCost, `u64`), (0, util_1.pure)(txb, args.hiveTwapPrice, `u256`), (0, util_1.pure)(txb, args.gemsToTransferAmt, `u64`)], }); }
function internalTransferGems(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_transfer_gems`, arguments: [(0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.recepientHiveProfile), (0, util_1.pure)(txb, args.gemsToTransferAmt, `u64`)], }); }
function internalWithdrawGems(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::internal_withdraw_gems`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.gemsToWithdraw, `u64`)], }); }
function isAssetListingExecuted(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::is_asset_listing_executed`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function isHiveAssetListed(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::is_hive_asset_listed`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function isKeeperAccount(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::is_keeper_account`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.addr, `address`)], }); }
function isUsableProfileName(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::is_usable_profile_name`, arguments: [(0, util_1.obj)(txb, args.hiveProfileStore), (0, util_1.pure)(txb, args.name, `0x1::string::String`)], }); }
function isValidProfileChar(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::is_valid_profile_char`, arguments: [(0, util_1.pure)(txb, args.b, `u8`), (0, util_1.pure)(txb, args.index, `u64`), (0, util_1.pure)(txb, args.len, `u64`)], }); }
function isValidProfileName(txb, name) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::is_valid_profile_name`, arguments: [(0, util_1.pure)(txb, name, `0x1::string::String`)], }); }
function joinHiveOfProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::join_hive_of_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.myProfile), (0, util_1.obj)(txb, args.profileToSubscribeTo), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.pure)(txb, args.accessType, `u8`), (0, util_1.pure)(txb, args.isFreeForSubscriber, `bool`)], }); }
function joinHiveOfProfileViaStream(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::join_hive_of_profile_via_stream`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.myProfile), (0, util_1.obj)(txb, args.profileToSubscribeTo), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.pure)(txb, args.accessType, `u8`), (0, util_1.pure)(txb, args.accessCost, `u64`)], }); }
function kraftCapsForLaunch(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::kraft_caps_for_launch`, arguments: [(0, util_1.obj)(txb, args.deployerCap), (0, util_1.obj)(txb, args.hiveManger), (0, util_1.pure)(txb, args.hiveAirdropAppName, `0x1::ascii::String`), (0, util_1.pure)(txb, args.hiveLockdropAppName, `0x1::ascii::String`), (0, util_1.pure)(txb, args.hiveInfusionAppName, `0x1::ascii::String`), (0, util_1.pure)(txb, args.hiveEntryAppName, `0x1::ascii::String`)], }); }
function kraftHiveAssetsAndReturnSui(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::kraft_hive_assets_and_return_sui`, arguments: [(0, util_1.obj)(txb, args.hiveEntry), (0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.hsuiVault), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.obj)(txb, args.buyerHiveProfile), (0, util_1.obj)(txb, args.payableSui), (0, util_1.pure)(txb, args.assetsToKraft, `u64`)], }); }
function kraftHiveAssetsLoop(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::kraft_hive_assets_loop`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.hsuiVault), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.payableSui), (0, util_1.pure)(txb, args.assetsToKraft, `u64`)], }); }
function kraftHiveProfileAndReturnSui(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::kraft_hive_profile_and_return_sui`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.entryCap), (0, util_1.obj)(txb, args.hiveChronicleAccessCap), (0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hiveProfileStore), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.disperser), (0, util_1.obj)(txb, args.suiCoin), (0, util_1.pure)(txb, args.name, `0x1::string::String`), (0, util_1.pure)(txb, args.bio, `0x1::string::String`), (0, util_1.generic)(txb, `${typeArg}`, args.chronicles)], }); }
function kraftKiosksForBuilder(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::kraft_kiosks_for_builder`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.mappingStore), (0, util_1.pure)(txb, args.maxAssetsLimit, `u64`), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.imgUrl, `0x1::string::String`), (0, util_1.obj)(txb, args.creatorProfile)], }); }
function kraftNewHiveKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::kraft_new_hive_kiosk`, arguments: [(0, util_1.obj)(txb, args.mappingStore), (0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.maxAssetsLimit, `u64`), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.imgUrl, `0x1::string::String`), (0, util_1.pure)(txb, args.timeStream, `u64`)], }); }
function kraftNewSkinForAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::kraft_new_skin_for_asset`, arguments: [(0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.krafterProfile), (0, util_1.obj)(txb, args.ownerProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.skinType, `0x1::string::String`), (0, util_1.pure)(txb, args.maxSkinsPerAsset, `u64`), (0, util_1.pure)(txb, args.skinPrice, `u64`)], }); }
function kraftOwnedHiveProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::kraft_owned_hive_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hiveProfileStore), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.disperser), (0, util_1.obj)(txb, args.suiCoin), (0, util_1.pure)(txb, args.name, `0x1::string::String`), (0, util_1.pure)(txb, args.bio, `0x1::string::String`)], }); }
function lockHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::lock_hive_asset`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.lockupDuration, `u8`)], }); }
function makeBidWithHsui(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::make_bid_with_hsui`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.bidderProfile), (0, util_1.obj)(txb, args.payableHsui), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.hsuiBidAmt, `u64`), (0, util_1.pure)(txb, args.expirationSec, `u64`)], }); }
function makeBidWithSui(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::make_bid_with_sui`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.payableSuiCoin), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.suiBidAmt, `u64`), (0, util_1.pure)(txb, args.expirationSec, `u64`)], }); }
function makeDirectBidWithHsui(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::make_direct_bid_with_hsui`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.bidderHiveProfile), (0, util_1.obj)(txb, args.payableCoin), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.hsuiBidAmt, `u64`), (0, util_1.pure)(txb, args.expirationSec, `u64`)], }); }
function makeDirectBidWithSui(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::make_direct_bid_with_sui`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.bidderHiveProfile), (0, util_1.obj)(txb, args.payableSuiCoin), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.suiBidAmt, `u64`), (0, util_1.pure)(txb, args.expirationSec, `u64`)], }); }
function makeForeverSubscriber(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::make_forever_subscriber`, arguments: [(0, util_1.pure)(txb, args.now, `u64`), (0, util_1.obj)(txb, args.subscriberProfile), (0, util_1.obj)(txb, args.subscribedToProfile)], }); }
function makeForeverSubscriberOfCompProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::make_forever_subscriber_of_comp_profile`, arguments: [(0, util_1.pure)(txb, args.now, `u64`), (0, util_1.obj)(txb, args.subscriberProfile), (0, util_1.obj)(txb, args.subscribedToProfile)], }); }
function makeForeverSubscriberViaStream(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::make_forever_subscriber_via_stream`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.pure)(txb, args.now, `u64`), (0, util_1.obj)(txb, args.subscriberProfile), (0, util_1.obj)(txb, args.subscribedToProfile)], }); }
function makeListing(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::make_listing`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.listingAccess, `u8`), (0, util_1.pure)(txb, args.discountAccess, `u8`), (0, util_1.pure)(txb, args.discount, `u64`), (0, util_1.pure)(txb, args.minSuiPrice, `u64`), (0, util_1.pure)(txb, args.isSaleListing, `bool`), (0, util_1.pure)(txb, args.instantSale, `bool`), (0, util_1.pure)(txb, args.highestBidSale, `bool`), (0, util_1.pure)(txb, args.lockupDuration, `u8`), (0, util_1.pure)(txb, args.startSec, `u64`), (0, util_1.pure)(txb, args.expirationSec, `u64`)], }); }
function markMarketplaceBidsAsInvalid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::mark_marketplace_bids_as_invalid`, arguments: [(0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function modifyBid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::modify_bid`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.obj)(txb, args.payableCoin), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.newBidPriceHsui, `u64`), (0, util_1.pure)(txb, args.newExpirationSec, `u64`)], }); }
function modifyDirectBid(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::modify_direct_bid`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.bidderHiveProfile), (0, util_1.obj)(txb, args.payableCoin), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.newBidPriceHsui, `u64`), (0, util_1.pure)(txb, args.newExpirationSec, `u64`)], }); }
function newSkinKraftedByOwner(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::new_skin_krafted_by_owner`, arguments: [(0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.ownerProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.skinType, `0x1::string::String`), (0, util_1.pure)(txb, args.maxSkinsPerAsset, `u64`), (0, util_1.pure)(txb, args.skinPrice, `u64`)], }); }
function onboardProfileAsCreator(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::onboard_profile_as_creator`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.mappingStore), (0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.maxAssetsLimit, `u64`), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.streamingFromEpoch, `u64`)], }); }
function portGemsViaAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::port_gems_via_asset`, arguments: [(0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.skinType, `0x1::string::String`), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.gemsToPort, `u64`)], }); }
function powApprox(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::pow_approx`, arguments: [(0, util_1.pure)(txb, args.x, `u128`), (0, util_1.pure)(txb, args.expNumerator, `u128`), (0, util_1.pure)(txb, args.expDenominator, `u128`)], }); }
function powApproxFrac(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::pow_approx_frac`, arguments: [(0, util_1.pure)(txb, args.base, `u256`), (0, util_1.pure)(txb, args.exp, `u128`), (0, util_1.pure)(txb, args.precision, `u64`)], }); }
function processGemsRoyalty(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::process_gems_royalty`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.payableGems), (0, util_1.obj)(txb, args.hiveDisperser)], }); }
function processHighestBidSaleListing(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::process_highest_bid_sale_listing`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function processHighestBidSaleListings(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::process_highest_bid_sale_listings`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.marketplace), (0, util_1.pure)(txb, args.assetVersions, `vector<u64>`)], }); }
function processRoyalty(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::process_royalty`, arguments: [(0, util_1.obj)(txb, args.paidBalance), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.pure)(txb, args.creatorProfileAddr, `address`)], }); }
function processSubscriptionPayment(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::process_subscription_payment`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.subscriberProfile), (0, util_1.obj)(txb, args.profileSubscribedTo), (0, util_1.obj)(txb, args.hiveDisperser)], }); }
function removeAssetUpgradeFromKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::remove_asset_upgrade_from_kiosk`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.upgradeIndex, `u64`)], }); }
function removeFromProfile(txb, typeArg, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::remove_from_profile`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.appName, `0x1::ascii::String`)], }); }
function removeFromReservedUsernamesList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::remove_from_reserved_usernames_list`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.mappingStore), (0, util_1.pure)(txb, args.usernamesToRemove, `vector<0x1::string::String>`)], }); }
function returnBorrowedHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::return_borrowed_hive_asset`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.borrowerHiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`)], }); }
function setupHiveManager(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::setup_hive_manager`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.clock), (0, util_1.pure)(txb, args.assetsDispersalPercent, `u64`), (0, util_1.pure)(txb, args.creatorsRoyaltyPercent, `u64`), (0, util_1.pure)(txb, args.maxBidsPerAsset, `u64`), (0, util_1.pure)(txb, args.minSuiBidAllowed, `u64`), (0, util_1.pure)(txb, args.profileKraftFeesSui, `u64`), (0, util_1.pure)(txb, args.socialFeeGems, `u64`), (0, util_1.pure)(txb, args.socialMultiplierForPower, `u64`), (0, util_1.pure)(txb, args.socialMultiplierForGems, `u64`), (0, util_1.pure)(txb, args.lockupDurations, `vector<u8>`), (0, util_1.pure)(txb, args.lockupBoosts, `vector<u64>`), (0, util_1.pure)(txb, args.builderHiveAssets, `u64`)], }); }
function stakeSuiForHsui(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::stake_sui_for_hsui`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.suiBalance), (0, util_1.pure)(txb, args.amtToStake, `u64`)], }); }
function subSign(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::sub_sign`, arguments: [(0, util_1.pure)(txb, args.a, `u256`), (0, util_1.pure)(txb, args.b, `u256`)], }); }
function switchAccessType(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::switch_access_type`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.myProfile), (0, util_1.obj)(txb, args.profileSubscribedTo), (0, util_1.pure)(txb, args.newAccessType, `u8`)], }); }
function transferHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::transfer_hive_asset`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.recepientHiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function transferHiveGems(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::transfer_hive_gems`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.recepientHiveProfile), (0, util_1.pure)(txb, args.gemsToTransferAmt, `u64`)], }); }
function transferHiveGemsViaCompProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::transfer_hive_gems_via_comp_profile`, arguments: [(0, util_1.obj)(txb, args.ownerHiveProfile), (0, util_1.obj)(txb, args.recepientHiveProfile), (0, util_1.pure)(txb, args.gemsToTransferAmt, `u64`)], }); }
function transferKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::transfer_kiosk`, arguments: [(0, util_1.obj)(txb, args.mappingStore), (0, util_1.obj)(txb, args.creatorProfile), (0, util_1.obj)(txb, args.newCreatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`)], }); }
function unlockHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::unlock_hive_asset`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function unstakeHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::unstake_hive_asset`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveAsset)], }); }
function updateAssetOwnership(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_asset_ownership`, arguments: [(0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.newOwnerProfileAddr, `address`)], }); }
function updateBidAmongBids(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_bid_among_bids`, arguments: [(0, util_1.vector)(txb, `0x0::hive_profile::Bid<0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI>`, args.bids), (0, util_1.pure)(txb, args.bidderProfileAddr, `address`), (0, util_1.pure)(txb, args.newBidPrice, `u64`), (0, util_1.pure)(txb, args.newExpirationSec, `u64`), (0, util_1.obj)(txb, args.availBalance), (0, util_1.pure)(txb, args.isListingLive, `bool`), (0, util_1.pure)(txb, args.version, `u64`)], }); }
function updateBidRecord(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_bid_record`, arguments: [(0, util_1.obj)(txb, args.bidRecord), (0, util_1.pure)(txb, args.newBidPrice, `u64`), (0, util_1.pure)(txb, args.newExpirationSec, `u64`), (0, util_1.pure)(txb, args.now, `u64`)], }); }
function updateBio(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_bio`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.myProfile), (0, util_1.pure)(txb, args.newBio, `0x1::string::String`)], }); }
function updateConfigForSkinKraft(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_config_for_skin_kraft`, arguments: [(0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.skinType, `0x1::string::String`), (0, util_1.pure)(txb, args.newRoyaltyFeePercent, `u64`), (0, util_1.pure)(txb, args.newKraftAccess, `u8`), (0, util_1.pure)(txb, args.newDiscountAccess, `u8`), (0, util_1.pure)(txb, args.newDiscount, `u64`), (0, util_1.pure)(txb, args.updateKraftAccess, `bool`), (0, util_1.pure)(txb, args.updateDiscountAccess, `bool`)], }); }
function updateHiveTwapInfo(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_hive_twap_info`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.hiveSuiTwap, `u256`), (0, util_1.pure)(txb, args.suiUsdcTwap, `u256`), (0, util_1.pure)(txb, args.hiveUsdcTwap, `u256`)], }); }
function updateInscription(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_inscription`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.myProfile), (0, util_1.pure)(txb, args.inscriptionType, `0x1::string::String`), (0, util_1.pure)(txb, args.inscriptionBase64, `vector<0x1::string::String>`)], }); }
function updateKeeperAccountsList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_keeper_accounts_list`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.keeperAccountAddr, `address`), (0, util_1.pure)(txb, args.isAllowed, `bool`)], }); }
function updateListing(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_listing`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.marketplace), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.assetVersion, `u64`), (0, util_1.pure)(txb, args.newMinSuiPrice, `u64`), (0, util_1.pure)(txb, args.newLockupDuration, `u8`), (0, util_1.pure)(txb, args.newExpirationSec, `u64`)], }); }
function updatePricingAndAccessForKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_pricing_and_access_for_kiosk`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.basePrice, `u64`), (0, util_1.pure)(txb, args.curveA, `u64`), (0, util_1.pure)(txb, args.kraftAccess, `u8`), (0, util_1.pure)(txb, args.discountAccess, `u8`), (0, util_1.pure)(txb, args.discount, `u64`)], }); }
function updateProfileConfigParams(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_profile_config_params`, arguments: [(0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.newMaxBidsPerAsset, `u64`), (0, util_1.pure)(txb, args.newMinSuiBidAllowed, `u64`), (0, util_1.pure)(txb, args.newProfileKraftFeesSui, `u64`), (0, util_1.pure)(txb, args.socialFeeGems, `u64`), (0, util_1.pure)(txb, args.socialMultiplierForGems, `u64`), (0, util_1.pure)(txb, args.socialMultiplierForPower, `u64`)], }); }
function updateReservedUsernamesList(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_reserved_usernames_list`, arguments: [(0, util_1.obj)(txb, args.cap), (0, util_1.obj)(txb, args.mappingStore), (0, util_1.pure)(txb, args.usernamesToReserve, `vector<0x1::string::String>`), (0, util_1.pure)(txb, args.accessorsList, `vector<address>`)], }); }
function updateRoyalty(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_royalty`, arguments: [(0, util_1.obj)(txb, args.daoCap), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.royaltyNum, `u64`), (0, util_1.pure)(txb, args.royaltyDenom, `u64`), (0, util_1.pure)(txb, args.assetsDispersalPercent, `u64`), (0, util_1.pure)(txb, args.creatorsRoyaltyPercent, `u64`), (0, util_1.pure)(txb, args.gemsRoyaltyNum, `u64`), (0, util_1.pure)(txb, args.gemsRoyaltyDenom, `u64`), (0, util_1.pure)(txb, args.gemsTreasuryPercent, `u64`), (0, util_1.pure)(txb, args.gemsBurnPercent, `u64`)], }); }
function updateSubscriptionPricing(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_subscription_pricing`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.myProfile), (0, util_1.pure)(txb, args.newWorkerAccessCost, `u64`), (0, util_1.pure)(txb, args.newDroneAccessCost, `u64`), (0, util_1.pure)(txb, args.newQueenAccessCost, `u64`)], }); }
function updateTraitsInHiveKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_traits_in_hive_kiosk`, arguments: [(0, util_1.obj)(txb, args.creatorProfile), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.pure)(txb, args.traits, `vector<0x1::string::String>`), (0, util_1.pure)(txb, args.imgUrl, `0x1::string::String`)], }); }
function updateUsername(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::update_username`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveProfileStore), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.myProfile), (0, util_1.pure)(txb, args.newUsername, `0x1::string::String`)], }); }
function upgradeAssetViaKiosk(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::upgrade_asset_via_kiosk`, arguments: [(0, util_1.obj)(txb, args.hiveEntry), (0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.pure)(txb, args.collectionName, `0x1::string::String`), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.creatorProfile), (0, util_1.obj)(txb, args.ownerProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.selectedUpgradeIndex, `u64`)], }); }
function withdrawGemsFromCompProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::withdraw_gems_from_comp_profile`, arguments: [(0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.gemsToWithdraw, `u64`)], }); }
function withdrawGemsFromProfile(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::withdraw_gems_from_profile`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.gemsToWithdraw, `u64`)], }); }
function withdrawHiveAsset(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::hive_profile::withdraw_hive_asset`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.hiveManager), (0, util_1.obj)(txb, args.hsuiDisperser), (0, util_1.obj)(txb, args.hiveDisperser), (0, util_1.obj)(txb, args.hiveProfile), (0, util_1.pure)(txb, args.version, `u64`), (0, util_1.pure)(txb, args.toUnlock, `bool`)], }); }

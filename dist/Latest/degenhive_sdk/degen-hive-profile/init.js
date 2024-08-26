"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const hiveProfile = require("./hive-profile/structs");
function registerClasses(loader) {
    loader.register(hiveProfile.ConfigParams);
    loader.register(hiveProfile.AccessRecord);
    loader.register(hiveProfile.AccessRecordDestroyed);
    loader.register(hiveProfile.AccessTypeSwitchedToNewPlan);
    loader.register(hiveProfile.AddedNewUpgradeForVersion);
    loader.register(hiveProfile.AppAddedToHiveStore);
    loader.register(hiveProfile.AppInstalledByProfile);
    loader.register(hiveProfile.AssetPowerUpdated);
    loader.register(hiveProfile.AssetUpgrade);
    loader.register(hiveProfile.Bid);
    loader.register(hiveProfile.BidCanceled);
    loader.register(hiveProfile.BidDestroyed);
    loader.register(hiveProfile.BidExpired);
    loader.register(hiveProfile.BidMarkedInvalid);
    loader.register(hiveProfile.BidModified);
    loader.register(hiveProfile.BidPlaced);
    loader.register(hiveProfile.BidRecord);
    loader.register(hiveProfile.BioUpdated);
    loader.register(hiveProfile.BorrowRecord);
    loader.register(hiveProfile.DegenHiveYieldHarvested);
    loader.register(hiveProfile.DepositHSuiForProfile);
    loader.register(hiveProfile.ExecutedListing);
    loader.register(hiveProfile.ExecutedListingDestroyed);
    loader.register(hiveProfile.ExitHiveOfProfile);
    loader.register(hiveProfile.GemAddedToProfile);
    loader.register(hiveProfile.GemWithdrawnFromProfile);
    loader.register(hiveProfile.HIVE_PROFILE);
    loader.register(hiveProfile.HSuiAddedForHarvest);
    loader.register(hiveProfile.HSuiDisperser);
    loader.register(hiveProfile.HarvestRewardsForAsset);
    loader.register(hiveProfile.HighestBidListingUnsold);
    loader.register(hiveProfile.HiveAccessPaymentProcessed);
    loader.register(hiveProfile.HiveAccessPlanUpdated);
    loader.register(hiveProfile.HiveAddedForHarvest);
    loader.register(hiveProfile.HiveAppAccessCapability);
    loader.register(hiveProfile.HiveAsset);
    loader.register(hiveProfile.HiveAssetBorrowed);
    loader.register(hiveProfile.HiveAssetStaked);
    loader.register(hiveProfile.HiveAssetTransfered);
    loader.register(hiveProfile.HiveAssetUnstaked);
    loader.register(hiveProfile.HiveAssetUpgraded);
    loader.register(hiveProfile.HiveDisperser);
    loader.register(hiveProfile.HiveGemsDepositedIntoAsset);
    loader.register(hiveProfile.HiveGemsPortedToSkin);
    loader.register(hiveProfile.HiveGemsTransfered);
    loader.register(hiveProfile.HiveKiosk);
    loader.register(hiveProfile.HiveKioskInitialized);
    loader.register(hiveProfile.HiveKioskTransferredToProfile);
    loader.register(hiveProfile.HiveManager);
    loader.register(hiveProfile.HiveProfile);
    loader.register(hiveProfile.HiveProfileDestroyed);
    loader.register(hiveProfile.HiveProfileKrafted);
    loader.register(hiveProfile.HiveProfileMappingStore);
    loader.register(hiveProfile.HiveTwapInfo);
    loader.register(hiveProfile.HiveTwapUpdated);
    loader.register(hiveProfile.Inscription);
    loader.register(hiveProfile.InscriptionSetForProfile);
    loader.register(hiveProfile.JoinedHiveOfProfile);
    loader.register(hiveProfile.KioskOwnershipTransferred);
    loader.register(hiveProfile.KraftRoyaltyUpdated);
    loader.register(hiveProfile.KraftYieldHarvested);
    loader.register(hiveProfile.LendRecord);
    loader.register(hiveProfile.Listing);
    loader.register(hiveProfile.ListingCanceled);
    loader.register(hiveProfile.ListingDestroyed);
    loader.register(hiveProfile.ListingExpired);
    loader.register(hiveProfile.ListingRecord);
    loader.register(hiveProfile.ListingUpdated);
    loader.register(hiveProfile.ManagerAppAccessCapability);
    loader.register(hiveProfile.MarketPlace);
    loader.register(hiveProfile.NewHiveAssetKrafted);
    loader.register(hiveProfile.NewListing);
    loader.register(hiveProfile.NewSkinForAsset);
    loader.register(hiveProfile.NewSkinForAssetKrafted);
    loader.register(hiveProfile.PricingAndAccessSetInHiveKiosk);
    loader.register(hiveProfile.ProfileConfigParamsUpdated);
    loader.register(hiveProfile.PublicKraftConfig);
    loader.register(hiveProfile.PublicKraftInitialized);
    loader.register(hiveProfile.RemovedUpgradeForVersion);
    loader.register(hiveProfile.ReturnBorrowedHiveAsset);
    loader.register(hiveProfile.Royalty);
    loader.register(hiveProfile.RoyaltyCollectedForCreator);
    loader.register(hiveProfile.RoyaltyProcessed);
    loader.register(hiveProfile.SaleExecuted);
    loader.register(hiveProfile.SkinAccessPermissionsUpdated);
    loader.register(hiveProfile.SkinKraftPermissionsUpdated);
    loader.register(hiveProfile.SkinRecord);
    loader.register(hiveProfile.SkinRoyaltyCommissionUpdated);
    loader.register(hiveProfile.SubscriptionRoyalty);
    loader.register(hiveProfile.TotalActivePowerUpdated);
    loader.register(hiveProfile.TraitsSetInHiveKiosk);
    loader.register(hiveProfile.TwapUpdateCap);
    loader.register(hiveProfile.UpdateEntropyForEpoch);
    loader.register(hiveProfile.UserNameUpdated);
}

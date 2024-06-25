import {GenericArg, ObjectArg, generic, obj, pure, vector} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

import { hiveprofile } from "..";
const PUBLISHED_AT = hiveprofile.PUBLISHED_AT

export interface AcceptBidArgs { clock: ObjectArg; hiveManager: ObjectArg; vault: ObjectArg; hsuiDisperser: ObjectArg; marketplace: ObjectArg; ownerProfile: ObjectArg; bidderProfile: ObjectArg; assetVersion: bigint | TransactionArgument }

export function acceptBid( txb: TransactionBlock, args: AcceptBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::accept_bid`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.hsuiDisperser), obj(txb, args.marketplace), obj(txb, args.ownerProfile), obj(txb, args.bidderProfile), pure(txb, args.assetVersion, `u64`) ], }) }

export interface AcceptDirectBidArgs { clock: ObjectArg; hiveManager: ObjectArg; vault: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; ownerProfile: ObjectArg; bidderProfile: ObjectArg; assetVersion: bigint | TransactionArgument }

export function acceptDirectBid( txb: TransactionBlock, args: AcceptDirectBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::accept_direct_bid`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.ownerProfile), obj(txb, args.bidderProfile), pure(txb, args.assetVersion, `u64`) ], }) }

export interface AddAssetUpgradeToKioskArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument; version: bigint | TransactionArgument; upgradeAccess: number | TransactionArgument; upgradePrice: bigint | TransactionArgument; newImgUrl: string | TransactionArgument; upgradeTraitsList: Array<string | TransactionArgument> | TransactionArgument; upgradePromptsList: Array<string | TransactionArgument> | TransactionArgument }

export function addAssetUpgradeToKiosk( txb: TransactionBlock, args: AddAssetUpgradeToKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::add_asset_upgrade_to_kiosk`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.version, `u64`), pure(txb, args.upgradeAccess, `u8`), pure(txb, args.upgradePrice, `u64`), pure(txb, args.newImgUrl, `0x1::string::String`), pure(txb, args.upgradeTraitsList, `vector<0x1::string::String>`), pure(txb, args.upgradePromptsList, `vector<0x1::string::String>`) ], }) }

export interface AddBidRecordToProfileArgs { hiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument; bidRecord: ObjectArg }

export function addBidRecordToProfile( txb: TransactionBlock, args: AddBidRecordToProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::add_bid_record_to_profile`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.assetVersion, `u64`), obj(txb, args.bidRecord) ], }) }

export interface AddBidToTableArgs { bidsTable: ObjectArg; assetVersion: bigint | TransactionArgument; bid: ObjectArg; maxBidsPerAsset: bigint | TransactionArgument }

export function addBidToTable( txb: TransactionBlock, args: AddBidToTableArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::add_bid_to_table`, arguments: [ obj(txb, args.bidsTable), pure(txb, args.assetVersion, `u64`), obj(txb, args.bid), pure(txb, args.maxBidsPerAsset, `u64`) ], }) }

export interface AddStreamingAppArgs { cap: ObjectArg; mappingStore: ObjectArg; appName: string | TransactionArgument; onlyOwnerCanAddApp: boolean | TransactionArgument; onlyOwnerCanAccessApp: boolean | TransactionArgument; onlyOwnerCanRemoveApp: boolean | TransactionArgument }

export function addStreamingApp( txb: TransactionBlock, args: AddStreamingAppArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::add_streaming_app`, arguments: [ obj(txb, args.cap), obj(txb, args.mappingStore), pure(txb, args.appName, `0x1::ascii::String`), pure(txb, args.onlyOwnerCanAddApp, `bool`), pure(txb, args.onlyOwnerCanAccessApp, `bool`), pure(txb, args.onlyOwnerCanRemoveApp, `bool`) ], }) }

export interface AddToProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument; appToAdd: GenericArg }

export function addToProfile( txb: TransactionBlock, typeArg: string, args: AddToProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::add_to_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`), generic(txb, `${typeArg}`, args.appToAdd) ], }) }

export interface BeeHiveAccessInfoArgs { profile: ObjectArg; subscriber: string | TransactionArgument }

export function beeHiveAccessInfo( txb: TransactionBlock, args: BeeHiveAccessInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::bee_hive_access_info`, arguments: [ obj(txb, args.profile), pure(txb, args.subscriber, `address`) ], }) }

export interface BorrowFromAdminProfileArgs { hiveManager: ObjectArg; appName: string | TransactionArgument }

export function borrowFromAdminProfile( txb: TransactionBlock, typeArg: string, args: BorrowFromAdminProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::borrow_from_admin_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveManager), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export interface BorrowFromProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument }

export function borrowFromProfile( txb: TransactionBlock, typeArg: string, args: BorrowFromProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::borrow_from_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export interface BorrowHiveAssetArgs { clock: ObjectArg; suiSystemState: ObjectArg; hiveManager: ObjectArg; vault: ObjectArg; hsuiDisperser: ObjectArg; marketplace: ObjectArg; borrowerHiveProfile: ObjectArg; ownerHiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument; suiCoin: ObjectArg }

export function borrowHiveAsset( txb: TransactionBlock, args: BorrowHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::borrow_hive_asset`, arguments: [ obj(txb, args.clock), obj(txb, args.suiSystemState), obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.hsuiDisperser), obj(txb, args.marketplace), obj(txb, args.borrowerHiveProfile), obj(txb, args.ownerHiveProfile), pure(txb, args.assetVersion, `u64`), obj(txb, args.suiCoin) ], }) }

export interface BorrowMutFromProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument }

export function borrowMutFromProfile( txb: TransactionBlock, typeArg: string, args: BorrowMutFromProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::borrow_mut_from_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export function calcNextPaymentTimestamp( txb: TransactionBlock, curTimestamp: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::calc_next_payment_timestamp`, arguments: [ pure(txb, curTimestamp, `u64`) ], }) }

export interface CalcVotingPowerArgs { availableGemsBal: bigint | TransactionArgument; boost: bigint | TransactionArgument }

export function calcVotingPower( txb: TransactionBlock, args: CalcVotingPowerArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::calc_voting_power`, arguments: [ pure(txb, args.availableGemsBal, `u64`), pure(txb, args.boost, `u64`) ], }) }

export interface CalculateHiveToChargeForSubscriptionArgs { now: bigint | TransactionArgument; hiveManager: ObjectArg; accessCost: bigint | TransactionArgument }

export function calculateHiveToChargeForSubscription( txb: TransactionBlock, args: CalculateHiveToChargeForSubscriptionArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::calculate_hive_to_charge_for_subscription`, arguments: [ pure(txb, args.now, `u64`), obj(txb, args.hiveManager), pure(txb, args.accessCost, `u64`) ], }) }

export interface CalculateKraftPriceArgs { discount: bigint | TransactionArgument; basePrice: bigint | TransactionArgument; curveA: bigint | TransactionArgument; kraftedAssets: bigint | TransactionArgument }

export function calculateKraftPrice( txb: TransactionBlock, args: CalculateKraftPriceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::calculate_kraft_price`, arguments: [ pure(txb, args.discount, `u64`), pure(txb, args.basePrice, `u64`), pure(txb, args.curveA, `u64`), pure(txb, args.kraftedAssets, `u64`) ], }) }

export interface CalculatePowArgs { baseNumerator: bigint | TransactionArgument; baseDenominator: bigint | TransactionArgument; expNumerator: bigint | TransactionArgument; expDenominator: bigint | TransactionArgument }

export function calculatePow( txb: TransactionBlock, args: CalculatePowArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::calculate_pow`, arguments: [ pure(txb, args.baseNumerator, `u128`), pure(txb, args.baseDenominator, `u128`), pure(txb, args.expNumerator, `u128`), pure(txb, args.expDenominator, `u128`) ], }) }

export interface CancelBidArgs { marketplace: ObjectArg; hiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument }

export function cancelBid( txb: TransactionBlock, args: CancelBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::cancel_bid`, arguments: [ obj(txb, args.marketplace), obj(txb, args.hiveProfile), pure(txb, args.assetVersion, `u64`) ], }) }

export interface CancelDirectBidArgs { ownerHiveProfile: ObjectArg; bidderHiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument }

export function cancelDirectBid( txb: TransactionBlock, args: CancelDirectBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::cancel_direct_bid`, arguments: [ obj(txb, args.ownerHiveProfile), obj(txb, args.bidderHiveProfile), pure(txb, args.assetVersion, `u64`) ], }) }

export interface CancelListingArgs { marketplace: ObjectArg; hiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument }

export function cancelListing( txb: TransactionBlock, args: CancelListingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::cancel_listing`, arguments: [ obj(txb, args.marketplace), obj(txb, args.hiveProfile), pure(txb, args.assetVersion, `u64`) ], }) }

export interface ClaimAccruedRewardsForAssetArgs { clock: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveAsset: ObjectArg }

export function claimAccruedRewardsForAsset( txb: TransactionBlock, args: ClaimAccruedRewardsForAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::claim_accrued_rewards_for_asset`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveAsset) ], }) }

export interface ComputeHarvestByGemsArgs { globalDispersalIndex: bigint | TransactionArgument; currentClaimIndex: bigint | TransactionArgument; power: bigint | TransactionArgument }

export function computeHarvestByGems( txb: TransactionBlock, args: ComputeHarvestByGemsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::compute_harvest_by_gems`, arguments: [ pure(txb, args.globalDispersalIndex, `u256`), pure(txb, args.currentClaimIndex, `u256`), pure(txb, args.power, `u64`) ], }) }

export interface ComputeProfileSocialfiInfoArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveProfile: ObjectArg }

export function computeProfileSocialfiInfo( txb: TransactionBlock, args: ComputeProfileSocialfiInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::compute_profile_socialfi_info`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveProfile) ], }) }

export interface ConsumeEntropyArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveProfile: ObjectArg; entropyConsumed: bigint | TransactionArgument }

export function consumeEntropy( txb: TransactionBlock, args: ConsumeEntropyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::consume_entropy`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveProfile), pure(txb, args.entropyConsumed, `u64`) ], }) }

export interface ConsumeEntropyOfProfileArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveProfile: ObjectArg; entropyConsumed: bigint | TransactionArgument }

export function consumeEntropyOfProfile( txb: TransactionBlock, args: ConsumeEntropyOfProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::consume_entropy_of_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveProfile), pure(txb, args.entropyConsumed, `u64`) ], }) }

export interface CreateBidArgs { bidderProfileAddr: string | TransactionArgument; bidPrice: bigint | TransactionArgument; depositBalance: ObjectArg; expirationSec: bigint | TransactionArgument; isListingLive: boolean | TransactionArgument }

export function createBid( txb: TransactionBlock, args: CreateBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::create_bid`, arguments: [ pure(txb, args.bidderProfileAddr, `address`), pure(txb, args.bidPrice, `u64`), obj(txb, args.depositBalance), pure(txb, args.expirationSec, `u64`), pure(txb, args.isListingLive, `bool`) ], }) }

export interface CreateBidRecordArgs { assetVersion: bigint | TransactionArgument; bidPrice: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument; isAssetListed: boolean | TransactionArgument }

export function createBidRecord( txb: TransactionBlock, args: CreateBidRecordArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::create_bid_record`, arguments: [ pure(txb, args.assetVersion, `u64`), pure(txb, args.bidPrice, `u64`), pure(txb, args.expirationSec, `u64`), pure(txb, args.isAssetListed, `bool`) ], }) }

export interface DeleteHiveProfileArgs { clock: ObjectArg; profile: ObjectArg; hiveProfileStore: ObjectArg; hiveManager: ObjectArg }

export function deleteHiveProfile( txb: TransactionBlock, args: DeleteHiveProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::delete_hive_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.profile), obj(txb, args.hiveProfileStore), obj(txb, args.hiveManager) ], }) }

export interface DepositGemsForHiveArgs { hiveDisperser: ObjectArg; hiveToDeposit: ObjectArg }

export function depositGemsForHive( txb: TransactionBlock, args: DepositGemsForHiveArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::deposit_gems_for_hive`, arguments: [ obj(txb, args.hiveDisperser), obj(txb, args.hiveToDeposit) ], }) }

export interface DepositGemsInProfileArgs { hiveProfile: ObjectArg; gemsToDeposit: ObjectArg }

export function depositGemsInProfile( txb: TransactionBlock, args: DepositGemsInProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::deposit_gems_in_profile`, arguments: [ obj(txb, args.hiveProfile), obj(txb, args.gemsToDeposit) ], }) }

export interface DepositGemsWithManagerProfileArgs { hiveManager: ObjectArg; hiveGems: ObjectArg }

export function depositGemsWithManagerProfile( txb: TransactionBlock, args: DepositGemsWithManagerProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::deposit_gems_with_manager_profile`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.hiveGems) ], }) }

export interface DepositHiveAssetArgs { hiveProfile: ObjectArg; hiveAsset: ObjectArg }

export function depositHiveAsset( txb: TransactionBlock, args: DepositHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::deposit_hive_asset`, arguments: [ obj(txb, args.hiveProfile), obj(txb, args.hiveAsset) ], }) }

export interface DepositHsuiForHiveArgs { hsuiDisperser: ObjectArg; hsuiToDeposit: ObjectArg }

export function depositHsuiForHive( txb: TransactionBlock, typeArg: string, args: DepositHsuiForHiveArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::deposit_hsui_for_hive`, typeArguments: [typeArg], arguments: [ obj(txb, args.hsuiDisperser), obj(txb, args.hsuiToDeposit) ], }) }

export interface DepositHsuiForProfileArgs { hiveProfile: ObjectArg; addHsui: ObjectArg }

export function depositHsuiForProfile( txb: TransactionBlock, args: DepositHsuiForProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::deposit_hsui_for_profile`, arguments: [ obj(txb, args.hiveProfile), obj(txb, args.addHsui) ], }) }

export interface DestroyBidArgs { bid: ObjectArg; assetVersion: bigint | TransactionArgument }

export function destroyBid( txb: TransactionBlock, typeArg: string, args: DestroyBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_bid`, typeArguments: [typeArg], arguments: [ obj(txb, args.bid), pure(txb, args.assetVersion, `u64`) ], }) }

export interface DestroyBidAmongBidsArgs { allBids: Array<ObjectArg> | TransactionArgument; bidderProfileAddr: string | TransactionArgument; onlyIfInvalid: boolean | TransactionArgument; assetVersion: bigint | TransactionArgument }

export function destroyBidAmongBids( txb: TransactionBlock, args: DestroyBidAmongBidsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_bid_among_bids`, arguments: [ vector(txb, `0x0::hive_profile::Bid<0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI>`, args.allBids), pure(txb, args.bidderProfileAddr, `address`), pure(txb, args.onlyIfInvalid, `bool`), pure(txb, args.assetVersion, `u64`) ], }) }

export function destroyBidRecord( txb: TransactionBlock, bidRecord: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_bid_record`, arguments: [ obj(txb, bidRecord) ], }) }

export function destroyBorrowRecord( txb: TransactionBlock, borrowRecord: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_borrow_record`, arguments: [ obj(txb, borrowRecord) ], }) }

export function destroyExecutedListing( txb: TransactionBlock, typeArg: string, processedListingRecord: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_executed_listing`, typeArguments: [typeArg], arguments: [ obj(txb, processedListingRecord) ], }) }

export function destroyLendRecord( txb: TransactionBlock, lendRecord: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_lend_record`, arguments: [ obj(txb, lendRecord) ], }) }

export function destroyListing( txb: TransactionBlock, listing: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_listing`, arguments: [ obj(txb, listing) ], }) }

export function destroyListingRecord( txb: TransactionBlock, listingRecord: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_listing_record`, arguments: [ obj(txb, listingRecord) ], }) }

export function destroySubscriptionRecord( txb: TransactionBlock, record: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::destroy_subscription_record`, arguments: [ obj(txb, record) ], }) }

export interface DoesCollectionExistArgs { profileIdStore: ObjectArg; collectionName: string | TransactionArgument }

export function doesCollectionExist( txb: TransactionBlock, args: DoesCollectionExistArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::does_collection_exist`, arguments: [ obj(txb, args.profileIdStore), pure(txb, args.collectionName, `0x1::string::String`) ], }) }

export interface DoesUserOwnProfileArgs { profileIdStore: ObjectArg; userAddr: string | TransactionArgument }

export function doesUserOwnProfile( txb: TransactionBlock, args: DoesUserOwnProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::does_user_own_profile`, arguments: [ obj(txb, args.profileIdStore), pure(txb, args.userAddr, `address`) ], }) }

export interface EntryAddAppToHiveStoreArgs { cap: ObjectArg; mappingStore: ObjectArg; appName: string | TransactionArgument; onlyOwnerCanAddApp: boolean | TransactionArgument; onlyOwnerCanAccessApp: boolean | TransactionArgument; onlyOwnerCanRemoveApp: boolean | TransactionArgument; receipient: string | TransactionArgument }

export function entryAddAppToHiveStore( txb: TransactionBlock, args: EntryAddAppToHiveStoreArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_add_app_to_hive_store`, arguments: [ obj(txb, args.cap), obj(txb, args.mappingStore), pure(txb, args.appName, `0x1::ascii::String`), pure(txb, args.onlyOwnerCanAddApp, `bool`), pure(txb, args.onlyOwnerCanAccessApp, `bool`), pure(txb, args.onlyOwnerCanRemoveApp, `bool`), pure(txb, args.receipient, `address`) ], }) }

export interface EntryAddAppToProfileArgs { accessCap: ObjectArg; hiveProfile: ObjectArg; appToAdd: GenericArg }

export function entryAddAppToProfile( txb: TransactionBlock, typeArg: string, args: EntryAddAppToProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_add_app_to_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.accessCap), obj(txb, args.hiveProfile), generic(txb, `${typeArg}`, args.appToAdd) ], }) }

export interface EntryAddToComposableProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument; appToAdd: GenericArg }

export function entryAddToComposableProfile( txb: TransactionBlock, typeArg: string, args: EntryAddToComposableProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_add_to_composable_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`), generic(txb, `${typeArg}`, args.appToAdd) ], }) }

export interface EntryBorrowAppFromProfileArgs { accessCap: ObjectArg; hiveProfile: ObjectArg }

export function entryBorrowAppFromProfile( txb: TransactionBlock, typeArg: string, args: EntryBorrowAppFromProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_borrow_app_from_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.accessCap), obj(txb, args.hiveProfile) ], }) }

export interface EntryBorrowMutFromComposableProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument }

export function entryBorrowMutFromComposableProfile( txb: TransactionBlock, typeArg: string, args: EntryBorrowMutFromComposableProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_borrow_mut_from_composable_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export interface EntryManagerAddToProfileArgs { accessCap: ObjectArg; hiveManager: ObjectArg; appToAdd: GenericArg }

export function entryManagerAddToProfile( txb: TransactionBlock, typeArg: string, args: EntryManagerAddToProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_manager_add_to_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.accessCap), obj(txb, args.hiveManager), generic(txb, `${typeArg}`, args.appToAdd) ], }) }

export interface EntryManagerBorrowMutFromProfileArgs { accessCap: ObjectArg; hiveManager: ObjectArg }

export function entryManagerBorrowMutFromProfile( txb: TransactionBlock, typeArg: string, args: EntryManagerBorrowMutFromProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_manager_borrow_mut_from_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.accessCap), obj(txb, args.hiveManager) ], }) }

export interface EntryManagerRemoveFromProfileArgs { accessCap: ObjectArg; hiveManager: ObjectArg }

export function entryManagerRemoveFromProfile( txb: TransactionBlock, typeArg: string, args: EntryManagerRemoveFromProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_manager_remove_from_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.accessCap), obj(txb, args.hiveManager) ], }) }

export interface EntryRemoveAppFromProfileArgs { accessCap: ObjectArg; hiveProfile: ObjectArg }

export function entryRemoveAppFromProfile( txb: TransactionBlock, typeArg: string, args: EntryRemoveAppFromProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_remove_app_from_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.accessCap), obj(txb, args.hiveProfile) ], }) }

export interface EntryRemoveFromComposableProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument }

export function entryRemoveFromComposableProfile( txb: TransactionBlock, typeArg: string, args: EntryRemoveFromComposableProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::entry_remove_from_composable_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export interface ExecutePublicKraftArgs { clock: ObjectArg; suiSystemState: ObjectArg; hsuiVault: ObjectArg; hiveManager: ObjectArg; hiveKiosk: ObjectArg; publicKraftConfig: ObjectArg; hiveProfile: ObjectArg; discount: bigint | TransactionArgument; payableBalance: ObjectArg }

export function executePublicKraft( txb: TransactionBlock, args: ExecutePublicKraftArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::execute_public_kraft`, arguments: [ obj(txb, args.clock), obj(txb, args.suiSystemState), obj(txb, args.hsuiVault), obj(txb, args.hiveManager), obj(txb, args.hiveKiosk), obj(txb, args.publicKraftConfig), obj(txb, args.hiveProfile), pure(txb, args.discount, `u64`), obj(txb, args.payableBalance) ], }) }

export interface ExecuteSaleArgs { hiveManager: ObjectArg; vault: ObjectArg; marketplace: ObjectArg; hsuiDisperser: ObjectArg; assetVersion: bigint | TransactionArgument; bidToDelete: boolean | TransactionArgument; bidderProfileAddr: string | TransactionArgument; purchasePriceInHsui: bigint | TransactionArgument; availBalance: ObjectArg }

export function executeSale( txb: TransactionBlock, args: ExecuteSaleArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::execute_sale`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.marketplace), obj(txb, args.hsuiDisperser), pure(txb, args.assetVersion, `u64`), pure(txb, args.bidToDelete, `bool`), pure(txb, args.bidderProfileAddr, `address`), pure(txb, args.purchasePriceInHsui, `u64`), obj(txb, args.availBalance) ], }) }

export interface ExistsForAdminProfileArgs { hiveManager: ObjectArg; appName: string | TransactionArgument }

export function existsForAdminProfile( txb: TransactionBlock, args: ExistsForAdminProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::exists_for_admin_profile`, arguments: [ obj(txb, args.hiveManager), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export interface ExistsForProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument }

export function existsForProfile( txb: TransactionBlock, args: ExistsForProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::exists_for_profile`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export interface ExitHiveOfProfileArgs { clock: ObjectArg; myProfile: ObjectArg; profileToUnsubscribeTo: ObjectArg }

export function exitHiveOfProfile( txb: TransactionBlock, args: ExitHiveOfProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::exit_hive_of_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.myProfile), obj(txb, args.profileToUnsubscribeTo) ], }) }

export interface ExtractCollectedCreatorRoyaltyArgs { hiveManager: ObjectArg; profile: ObjectArg }

export function extractCollectedCreatorRoyalty( txb: TransactionBlock, args: ExtractCollectedCreatorRoyaltyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::extract_collected_creator_royalty`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.profile) ], }) }

export interface GetAccessLevelArgs { accessRecords: ObjectArg; profileAddr: string | TransactionArgument; now: bigint | TransactionArgument }

export function getAccessLevel( txb: TransactionBlock, args: GetAccessLevelArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_access_level`, arguments: [ obj(txb, args.accessRecords), pure(txb, args.profileAddr, `address`), pure(txb, args.now, `u64`) ], }) }

export interface GetAccessToHiveInfoArgs { myProfile: ObjectArg; otherProfile: string | TransactionArgument }

export function getAccessToHiveInfo( txb: TransactionBlock, args: GetAccessToHiveInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_access_to_hive_info`, arguments: [ obj(txb, args.myProfile), pure(txb, args.otherProfile, `address`) ], }) }

export interface GetAccruedHarvestForAssetArgs { hiveManager: ObjectArg; hsuiDisperser: ObjectArg; gemsDisperser: ObjectArg; hiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function getAccruedHarvestForAsset( txb: TransactionBlock, args: GetAccruedHarvestForAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_accrued_harvest_for_asset`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.gemsDisperser), obj(txb, args.hiveProfile), pure(txb, args.version, `u64`) ], }) }

export function getActivePower( txb: TransactionBlock, profileConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_active_power`, arguments: [ obj(txb, profileConfig) ], }) }

export function getAdminHiveProfileInfo( txb: TransactionBlock, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_admin_hive_profile_info`, arguments: [ obj(txb, config) ], }) }

export interface GetAllCreatorsAndKiosksCountArgs { tableStore: ObjectArg; creatorProfile: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllCreatorsAndKiosksCount( txb: TransactionBlock, args: GetAllCreatorsAndKiosksCountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_all_creators_and_kiosks_count`, arguments: [ obj(txb, args.tableStore), pure(txb, args.creatorProfile, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetAllOwnersAndProfilesListArgs { tableStore: ObjectArg; owner: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllOwnersAndProfilesList( txb: TransactionBlock, args: GetAllOwnersAndProfilesListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_all_owners_and_profiles_list`, arguments: [ obj(txb, args.tableStore), pure(txb, args.owner, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetAllSupportedAppsAndCapabilitiesArgs { tableStore: ObjectArg; appName: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllSupportedAppsAndCapabilities( txb: TransactionBlock, args: GetAllSupportedAppsAndCapabilitiesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_all_supported_apps_and_capabilities`, arguments: [ obj(txb, args.tableStore), pure(txb, args.appName, `0x1::option::Option<0x1::ascii::String>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetAllUsernamesAndCompProfilesListArgs { tableStore: ObjectArg; username: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllUsernamesAndCompProfilesList( txb: TransactionBlock, args: GetAllUsernamesAndCompProfilesListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_all_usernames_and_comp_profiles_list`, arguments: [ obj(txb, args.tableStore), pure(txb, args.username, `0x1::option::Option<0x1::string::String>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetAllUsernamesAndProfilesListArgs { tableStore: ObjectArg; username: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllUsernamesAndProfilesList( txb: TransactionBlock, args: GetAllUsernamesAndProfilesListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_all_usernames_and_profiles_list`, arguments: [ obj(txb, args.tableStore), pure(txb, args.username, `0x1::option::Option<0x1::string::String>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetAssetOwnerProfileArgs { hiveManager: ObjectArg; version: bigint | TransactionArgument }

export function getAssetOwnerProfile( txb: TransactionBlock, args: GetAssetOwnerProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_asset_owner_profile`, arguments: [ obj(txb, args.hiveManager), pure(txb, args.version, `u64`) ], }) }

export interface GetAssetProfileOwnersListArgs { hiveManager: ObjectArg; version: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAssetProfileOwnersList( txb: TransactionBlock, args: GetAssetProfileOwnersListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_asset_profile_owners_list`, arguments: [ obj(txb, args.hiveManager), pure(txb, args.version, `0x1::option::Option<u64>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetAssetUpgradeInfoArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument; version: bigint | TransactionArgument; upgradeIndex: bigint | TransactionArgument }

export function getAssetUpgradeInfo( txb: TransactionBlock, args: GetAssetUpgradeInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_asset_upgrade_info`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.version, `u64`), pure(txb, args.upgradeIndex, `u64`) ], }) }

export interface GetAssetUpgradesForVersionArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument; version: bigint | TransactionArgument }

export function getAssetUpgradesForVersion( txb: TransactionBlock, args: GetAssetUpgradesForVersionArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_asset_upgrades_for_version`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.version, `u64`) ], }) }

export function getAvailableGemsInProfile( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_available_gems_in_profile`, arguments: [ obj(txb, hiveProfile) ], }) }

export interface GetAvailableHarvestForProfileArgs { hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg }

export function getAvailableHarvestForProfile( txb: TransactionBlock, args: GetAvailableHarvestForProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_available_harvest_for_profile`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile) ], }) }

export interface GetBidRecordArgs { hiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function getBidRecord( txb: TransactionBlock, args: GetBidRecordArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_bid_record`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.version, `u64`) ], }) }

export interface GetBidsForAssetArgs { hiveProfile: ObjectArg; version: bigint | TransactionArgument; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getBidsForAsset( txb: TransactionBlock, args: GetBidsForAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_bids_for_asset`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.version, `u64`), pure(txb, args.startFrom, `0x1::option::Option<u64>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetBidsForListingArgs { marketplace: ObjectArg; version: bigint | TransactionArgument; startFromIndex: (bigint | TransactionArgument | TransactionArgument | null); count: bigint | TransactionArgument }

export function getBidsForListing( txb: TransactionBlock, args: GetBidsForListingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_bids_for_listing`, arguments: [ obj(txb, args.marketplace), pure(txb, args.version, `u64`), pure(txb, args.startFromIndex, `0x1::option::Option<u64>`), pure(txb, args.count, `u64`) ], }) }

export interface GetBorrowRecordArgs { hiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function getBorrowRecord( txb: TransactionBlock, args: GetBorrowRecordArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_borrow_record`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.version, `u64`) ], }) }

export interface GetCollectionKioskArgs { profileIdStore: ObjectArg; collectionName: string | TransactionArgument }

export function getCollectionKiosk( txb: TransactionBlock, args: GetCollectionKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_collection_kiosk`, arguments: [ obj(txb, args.profileIdStore), pure(txb, args.collectionName, `0x1::string::String`) ], }) }

export interface GetCreatorRoyaltiesListArgs { hiveManager: ObjectArg; creatorAddr: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getCreatorRoyaltiesList( txb: TransactionBlock, args: GetCreatorRoyaltiesListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_creator_royalties_list`, arguments: [ obj(txb, args.hiveManager), pure(txb, args.creatorAddr, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetCreatorRoyaltyArgs { hiveManager: ObjectArg; creatorAddr: string | TransactionArgument }

export function getCreatorRoyalty( txb: TransactionBlock, args: GetCreatorRoyaltyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_creator_royalty`, arguments: [ obj(txb, args.hiveManager), pure(txb, args.creatorAddr, `address`) ], }) }

export interface GetExecutedListingInfoArgs { marketplace: ObjectArg; version: bigint | TransactionArgument }

export function getExecutedListingInfo( txb: TransactionBlock, args: GetExecutedListingInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_executed_listing_info`, arguments: [ obj(txb, args.marketplace), pure(txb, args.version, `u64`) ], }) }

export interface GetExecutedListingsListArgs { marketplace: ObjectArg; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getExecutedListingsList( txb: TransactionBlock, args: GetExecutedListingsListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_executed_listings_list`, arguments: [ obj(txb, args.marketplace), pure(txb, args.startFrom, `0x1::option::Option<u64>`), pure(txb, args.limit, `u64`) ], }) }

export function getGemsRoyaltyInfo( txb: TransactionBlock, hiveManager: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_gems_royalty_info`, arguments: [ obj(txb, hiveManager) ], }) }

export interface GetHarvestByAssetsArgs { hiveManager: ObjectArg; suiDisperser: ObjectArg; gemsDisperser: ObjectArg; hiveProfile: ObjectArg }

export function getHarvestByAssets( txb: TransactionBlock, args: GetHarvestByAssetsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_harvest_by_assets`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.suiDisperser), obj(txb, args.gemsDisperser), obj(txb, args.hiveProfile) ], }) }

export function getHiveAppName( txb: TransactionBlock, appAccessCap: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_hive_app_name`, arguments: [ obj(txb, appAccessCap) ], }) }

export interface GetHiveAssetInfoArgs { hiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function getHiveAssetInfo( txb: TransactionBlock, args: GetHiveAssetInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_hive_asset_info`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.version, `u64`) ], }) }

export function getHiveDisperserInfo( txb: TransactionBlock, hiveDisperser: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_hive_disperser_info`, arguments: [ obj(txb, hiveDisperser) ], }) }

export function getHiveManagerInfo( txb: TransactionBlock, config: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_hive_manager_info`, arguments: [ obj(txb, config) ], }) }

export function getHiveManagerParamsInfo( txb: TransactionBlock, hiveManager: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_hive_manager_params_info`, arguments: [ obj(txb, hiveManager) ], }) }

export interface GetHivekioskInfoArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument }

export function getHivekioskInfo( txb: TransactionBlock, args: GetHivekioskInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_hivekiosk_info`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`) ], }) }

export function getHsuiDisperserInfo( txb: TransactionBlock, typeArg: string, hsuiDisperser: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_hsui_disperser_info`, typeArguments: [typeArg], arguments: [ obj(txb, hsuiDisperser) ], }) }

export function getKioskAppName( txb: TransactionBlock, collectionName: string | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_kiosk_app_name`, arguments: [ pure(txb, collectionName, `0x1::string::String`) ], }) }

export function getKioskInfo( txb: TransactionBlock, kiosk: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_kiosk_info`, arguments: [ obj(txb, kiosk) ], }) }

export interface GetKiosksListForCreatorArgs { tableStore: ObjectArg; creatorProfile: string | TransactionArgument }

export function getKiosksListForCreator( txb: TransactionBlock, args: GetKiosksListForCreatorArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_kiosks_list_for_creator`, arguments: [ obj(txb, args.tableStore), pure(txb, args.creatorProfile, `address`) ], }) }

export interface GetKraftedVersionsForKioskArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument; version: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getKraftedVersionsForKiosk( txb: TransactionBlock, args: GetKraftedVersionsForKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_krafted_versions_for_kiosk`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.version, `0x1::option::Option<u64>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetLendRecordArgs { hiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function getLendRecord( txb: TransactionBlock, args: GetLendRecordArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_lend_record`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.version, `u64`) ], }) }

export interface GetListedAssetsInMarketplaceArgs { marketplace: ObjectArg; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getListedAssetsInMarketplace( txb: TransactionBlock, args: GetListedAssetsInMarketplaceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_listed_assets_in_marketplace`, arguments: [ obj(txb, args.marketplace), pure(txb, args.startFrom, `0x1::option::Option<u64>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetListingFromMarketplaceArgs { marketplace: ObjectArg; version: bigint | TransactionArgument }

export function getListingFromMarketplace( txb: TransactionBlock, args: GetListingFromMarketplaceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_listing_from_marketplace`, arguments: [ obj(txb, args.marketplace), pure(txb, args.version, `u64`) ], }) }

export interface GetListingRecordArgs { hiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function getListingRecord( txb: TransactionBlock, args: GetListingRecordArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_listing_record`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.version, `u64`) ], }) }

export interface GetPricesForHiveAssetKraftsArgs { clock: ObjectArg; creatorProfile: ObjectArg; collectionName: string | TransactionArgument; userProfileAddr: string | TransactionArgument; assetsToKraft: bigint | TransactionArgument }

export function getPricesForHiveAssetKrafts( txb: TransactionBlock, args: GetPricesForHiveAssetKraftsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_prices_for_hive_asset_krafts`, arguments: [ obj(txb, args.clock), obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.userProfileAddr, `address`), pure(txb, args.assetsToKraft, `u64`) ], }) }

export function getProfileAddr( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_addr`, arguments: [ obj(txb, hiveProfile) ], }) }

export function getProfileBio( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_bio`, arguments: [ obj(txb, hiveProfile) ], }) }

export interface GetProfileForUsernameArgs { profileIdStore: ObjectArg; username: string | TransactionArgument }

export function getProfileForUsername( txb: TransactionBlock, args: GetProfileForUsernameArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_for_username`, arguments: [ obj(txb, args.profileIdStore), pure(txb, args.username, `0x1::string::String`) ], }) }

export function getProfileInfo( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_info`, arguments: [ obj(txb, hiveProfile) ], }) }

export interface GetProfileInfoWithPowerArgs { clock: ObjectArg; hiveProfile: ObjectArg }

export function getProfileInfoWithPower( txb: TransactionBlock, args: GetProfileInfoWithPowerArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_info_with_power`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveProfile) ], }) }

export interface GetProfileInfoWithPowerAndLikesArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveProfile: ObjectArg }

export function getProfileInfoWithPowerAndLikes( txb: TransactionBlock, args: GetProfileInfoWithPowerAndLikesArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_info_with_power_and_likes`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveProfile) ], }) }

export function getProfileInscription( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_inscription`, arguments: [ obj(txb, hiveProfile) ], }) }

export function getProfileMetaInfo( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_meta_info`, arguments: [ obj(txb, hiveProfile) ], }) }

export function getProfileOwner( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_owner`, arguments: [ obj(txb, hiveProfile) ], }) }

export function getProfileUsername( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_profile_username`, arguments: [ obj(txb, hiveProfile) ], }) }

export interface GetPromptsForHiveAssetArgs { hiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function getPromptsForHiveAsset( txb: TransactionBlock, args: GetPromptsForHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_prompts_for_hive_asset`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.version, `u64`) ], }) }

export interface GetPublicKraftConfigInfoArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument }

export function getPublicKraftConfigInfo( txb: TransactionBlock, args: GetPublicKraftConfigInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_public_kraft_config_info`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`) ], }) }

export function getRoyaltyInfo( txb: TransactionBlock, hiveManager: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_royalty_info`, arguments: [ obj(txb, hiveManager) ], }) }

export interface GetSkinsInfoForAssetArgs { hiveProfile: ObjectArg; version: bigint | TransactionArgument; skinType: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getSkinsInfoForAsset( txb: TransactionBlock, args: GetSkinsInfoForAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_skins_info_for_asset`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.version, `u64`), pure(txb, args.skinType, `0x1::option::Option<0x1::string::String>`), pure(txb, args.limit, `u64`) ], }) }

export function getSubscribersAndSubscriptionsLength( txb: TransactionBlock, hiveProfile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_subscribers_and_subscriptions_length`, arguments: [ obj(txb, hiveProfile) ], }) }

export interface GetSubscribersListArgs { profile: ObjectArg; subscriber: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getSubscribersList( txb: TransactionBlock, args: GetSubscribersListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_subscribers_list`, arguments: [ obj(txb, args.profile), pure(txb, args.subscriber, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetSubscriptionsListArgs { profile: ObjectArg; subscribedTo: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getSubscriptionsList( txb: TransactionBlock, args: GetSubscriptionsListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_subscriptions_list`, arguments: [ obj(txb, args.profile), pure(txb, args.subscribedTo, `0x1::option::Option<address>`), pure(txb, args.limit, `u64`) ], }) }

export interface GetVotingPowerForProfileArgs { clock: ObjectArg; hiveProfile: ObjectArg }

export function getVotingPowerForProfile( txb: TransactionBlock, args: GetVotingPowerForProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::get_voting_power_for_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveProfile) ], }) }

export interface HandleExpiredListingsArgs { clock: ObjectArg; marketplace: ObjectArg; hiveProfile: ObjectArg }

export function handleExpiredListings( txb: TransactionBlock, args: HandleExpiredListingsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::handle_expired_listings`, arguments: [ obj(txb, args.clock), obj(txb, args.marketplace), obj(txb, args.hiveProfile) ], }) }

export interface HandleExpiredMarketplaceBidsForProfileArgs { clock: ObjectArg; marketplace: ObjectArg; hiveProfile: ObjectArg }

export function handleExpiredMarketplaceBidsForProfile( txb: TransactionBlock, args: HandleExpiredMarketplaceBidsForProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::handle_expired_marketplace_bids_for_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.marketplace), obj(txb, args.hiveProfile) ], }) }

export interface HandleInvalidDirectBidArgs { clock: ObjectArg; ownerHiveProfile: ObjectArg; bidderHiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument }

export function handleInvalidDirectBid( txb: TransactionBlock, args: HandleInvalidDirectBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::handle_invalid_direct_bid`, arguments: [ obj(txb, args.clock), obj(txb, args.ownerHiveProfile), obj(txb, args.bidderHiveProfile), pure(txb, args.assetVersion, `u64`) ], }) }

export interface HandleProcessedListingArgs { hiveManager: ObjectArg; marketplace: ObjectArg; listerHiveProfile: ObjectArg; bidderHiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument }

export function handleProcessedListing( txb: TransactionBlock, args: HandleProcessedListingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::handle_processed_listing`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.marketplace), obj(txb, args.listerHiveProfile), obj(txb, args.bidderHiveProfile), pure(txb, args.assetVersion, `u64`) ], }) }

export interface HarvestHiveRewardsArgs { clock: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg }

export function harvestHiveRewards( txb: TransactionBlock, args: HarvestHiveRewardsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::harvest_hive_rewards`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile) ], }) }

export interface HarvestHiveRewardsAndTransferArgs { clock: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg }

export function harvestHiveRewardsAndTransfer( txb: TransactionBlock, args: HarvestHiveRewardsAndTransferArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::harvest_hive_rewards_and_transfer`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile) ], }) }

export interface HarvestRoyaltyYieldForBuildersArgs { kraftYieldClaimCap: ObjectArg; hiveManager: ObjectArg; recepientAddr: string | TransactionArgument }

export function harvestRoyaltyYieldForBuilders( txb: TransactionBlock, args: HarvestRoyaltyYieldForBuildersArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::harvest_royalty_yield_for_builders`, arguments: [ obj(txb, args.kraftYieldClaimCap), obj(txb, args.hiveManager), pure(txb, args.recepientAddr, `address`) ], }) }

export interface IdForDofOfAdminProfileArgs { hiveManager: ObjectArg; appName: string | TransactionArgument }

export function idForDofOfAdminProfile( txb: TransactionBlock, args: IdForDofOfAdminProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::id_for_dof_of_admin_profile`, arguments: [ obj(txb, args.hiveManager), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export interface IdForDofOfProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument }

export function idForDofOfProfile( txb: TransactionBlock, args: IdForDofOfProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::id_for_dof_of_profile`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export function incrementConfig( txb: TransactionBlock, hiveManager: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_config`, arguments: [ obj(txb, hiveManager) ], }) }

export interface IncrementGemsGlobalIndexArgs { hiveManager: ObjectArg; hiveDisperser: ObjectArg }

export function incrementGemsGlobalIndex( txb: TransactionBlock, args: IncrementGemsGlobalIndexArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_gems_global_index`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.hiveDisperser) ], }) }

export interface IncrementGlobalIndexArgs { hiveManager: ObjectArg; hsuiDisperser: ObjectArg }

export function incrementGlobalIndex( txb: TransactionBlock, args: IncrementGlobalIndexArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_global_index`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser) ], }) }

export function incrementHiveDispenser( txb: TransactionBlock, hiveDisperser: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_hive_dispenser`, arguments: [ obj(txb, hiveDisperser) ], }) }

export function incrementHiveKiosk( txb: TransactionBlock, hiveKiosk: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_hive_kiosk`, arguments: [ obj(txb, hiveKiosk) ], }) }

export function incrementHsuiDispenser( txb: TransactionBlock, hsuiDisperser: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_hsui_dispenser`, arguments: [ obj(txb, hsuiDisperser) ], }) }

export function incrementMarketplace( txb: TransactionBlock, marketplace: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_marketplace`, arguments: [ obj(txb, marketplace) ], }) }

export function incrementProfile( txb: TransactionBlock, profile: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_profile`, arguments: [ obj(txb, profile) ], }) }

export function incrementProfileIdsStore( txb: TransactionBlock, hiveProfileStore: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::increment_profile_ids_store`, arguments: [ obj(txb, hiveProfileStore) ], }) }

export interface InfuseGemsIntoAssetArgs { clock: ObjectArg; daoCap: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg; gemsToInfuseAmt: bigint | TransactionArgument; version: bigint | TransactionArgument }

export function infuseGemsIntoAsset( txb: TransactionBlock, args: InfuseGemsIntoAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::infuse_gems_into_asset`, arguments: [ obj(txb, args.clock), obj(txb, args.daoCap), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile), pure(txb, args.gemsToInfuseAmt, `u64`), pure(txb, args.version, `u64`) ], }) }

export interface InitializePublicKraftArgs { clock: ObjectArg; creatorProfile: ObjectArg; collectionName: string | TransactionArgument; startTime: bigint | TransactionArgument; perUserLimit: bigint | TransactionArgument }

export function initializePublicKraft( txb: TransactionBlock, args: InitializePublicKraftArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::initialize_public_kraft`, arguments: [ obj(txb, args.clock), obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.startTime, `u64`), pure(txb, args.perUserLimit, `u64`) ], }) }

export interface InitializeSkinForAssetArgs { daoCap: ObjectArg; hiveProfile: ObjectArg; version: bigint | TransactionArgument; skinType: string | TransactionArgument; kraftAccess: number | TransactionArgument; defaultDiscount: bigint | TransactionArgument; defaultRoyaltyFeePercent: bigint | TransactionArgument }

export function initializeSkinForAsset( txb: TransactionBlock, args: InitializeSkinForAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::initialize_skin_for_asset`, arguments: [ obj(txb, args.daoCap), obj(txb, args.hiveProfile), pure(txb, args.version, `u64`), pure(txb, args.skinType, `0x1::string::String`), pure(txb, args.kraftAccess, `u8`), pure(txb, args.defaultDiscount, `u64`), pure(txb, args.defaultRoyaltyFeePercent, `u64`) ], }) }

export interface InsertAssetsInKioskArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument; promptsList: Array<Array<string | TransactionArgument> | TransactionArgument> | TransactionArgument; urlList: Array<string | TransactionArgument> | TransactionArgument; namesList: Array<string | TransactionArgument> | TransactionArgument }

export function insertAssetsInKiosk( txb: TransactionBlock, args: InsertAssetsInKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::insert_assets_in_kiosk`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.promptsList, `vector<vector<0x1::string::String>>`), pure(txb, args.urlList, `vector<0x1::string::String>`), pure(txb, args.namesList, `vector<0x1::string::String>`) ], }) }

export interface InternalAddAppToHiveStoreArgs { mappingStore: ObjectArg; appName: string | TransactionArgument; onlyOwnerCanAddApp: boolean | TransactionArgument; onlyOwnerCanAccessApp: boolean | TransactionArgument; onlyOwnerCanRemoveApp: boolean | TransactionArgument }

export function internalAddAppToHiveStore( txb: TransactionBlock, args: InternalAddAppToHiveStoreArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_add_app_to_hive_store`, arguments: [ obj(txb, args.mappingStore), pure(txb, args.appName, `0x1::ascii::String`), pure(txb, args.onlyOwnerCanAddApp, `bool`), pure(txb, args.onlyOwnerCanAccessApp, `bool`), pure(txb, args.onlyOwnerCanRemoveApp, `bool`) ], }) }

export interface InternalDestroyProfileArgs { clock: ObjectArg; profile: ObjectArg; hiveProfileStore: ObjectArg; hiveManager: ObjectArg }

export function internalDestroyProfile( txb: TransactionBlock, args: InternalDestroyProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_destroy_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.profile), obj(txb, args.hiveProfileStore), obj(txb, args.hiveManager) ], }) }

export function internalExtractHiveAssetMeta( txb: TransactionBlock, hiveAsset: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_extract_hive_asset_meta`, arguments: [ obj(txb, hiveAsset) ], }) }

export interface InternalJoinHiveOfProfileArgs { clock: ObjectArg; hiveManager: ObjectArg; myProfile: ObjectArg; profileToSubscribeTo: ObjectArg; hiveDisperser: ObjectArg; accessType: number | TransactionArgument; accessCost: bigint | TransactionArgument }

export function internalJoinHiveOfProfile( txb: TransactionBlock, args: InternalJoinHiveOfProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_join_hive_of_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.myProfile), obj(txb, args.profileToSubscribeTo), obj(txb, args.hiveDisperser), pure(txb, args.accessType, `u8`), pure(txb, args.accessCost, `u64`) ], }) }

export interface InternalKraftHiveProfileArgs { clock: ObjectArg; isComposableProfile: boolean | TransactionArgument; name: string | TransactionArgument; bio: string | TransactionArgument; krafter: string | TransactionArgument; hiveProfileStore: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hsuiReceived: ObjectArg }

export function internalKraftHiveProfile( txb: TransactionBlock, args: InternalKraftHiveProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_kraft_hive_profile`, arguments: [ obj(txb, args.clock), pure(txb, args.isComposableProfile, `bool`), pure(txb, args.name, `0x1::string::String`), pure(txb, args.bio, `0x1::string::String`), pure(txb, args.krafter, `address`), obj(txb, args.hiveProfileStore), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hsuiReceived) ], }) }

export interface InternalKraftHiveverseAssetArgs { krafterProfile: ObjectArg; suiSystemState: ObjectArg; hsuiVault: ObjectArg; user: string | TransactionArgument; timestamp: bigint | TransactionArgument; hiveManager: ObjectArg; hiveKiosk: ObjectArg; payableBalance: ObjectArg; price: bigint | TransactionArgument }

export function internalKraftHiveverseAsset( txb: TransactionBlock, args: InternalKraftHiveverseAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_kraft_hiveverse_asset`, arguments: [ obj(txb, args.krafterProfile), obj(txb, args.suiSystemState), obj(txb, args.hsuiVault), pure(txb, args.user, `address`), pure(txb, args.timestamp, `u64`), obj(txb, args.hiveManager), obj(txb, args.hiveKiosk), obj(txb, args.payableBalance), pure(txb, args.price, `u64`) ], }) }

export interface InternalKraftNewSkinArgs { hiveManager: ObjectArg; hiveDisperser: ObjectArg; krafterProfileAddr: string | TransactionArgument; krafterUsername: string | TransactionArgument; ownerProfile: ObjectArg; version: bigint | TransactionArgument; skinType: string | TransactionArgument; gemsPaidForSkinKraft: ObjectArg; royaltyFeePercent: bigint | TransactionArgument; totalSkinsKrafted: bigint | TransactionArgument }

export function internalKraftNewSkin( txb: TransactionBlock, args: InternalKraftNewSkinArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_kraft_new_skin`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.hiveDisperser), pure(txb, args.krafterProfileAddr, `address`), pure(txb, args.krafterUsername, `0x1::ascii::String`), obj(txb, args.ownerProfile), pure(txb, args.version, `u64`), pure(txb, args.skinType, `0x1::string::String`), obj(txb, args.gemsPaidForSkinKraft), pure(txb, args.royaltyFeePercent, `u64`), pure(txb, args.totalSkinsKrafted, `u64`) ], }) }

export interface InternalProcessSubscriptionPaymentArgs { hiveManager: ObjectArg; hiveDisperser: ObjectArg; subscriberProfile: string | TransactionArgument; profileSubscribedTo: string | TransactionArgument; gemsToTransfer: ObjectArg; accessType: number | TransactionArgument; accessCost: bigint | TransactionArgument; hiveTwapPrice: bigint | TransactionArgument; gemsToTransferAmt: bigint | TransactionArgument }

export function internalProcessSubscriptionPayment( txb: TransactionBlock, args: InternalProcessSubscriptionPaymentArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_process_subscription_payment`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.hiveDisperser), pure(txb, args.subscriberProfile, `address`), pure(txb, args.profileSubscribedTo, `address`), obj(txb, args.gemsToTransfer), pure(txb, args.accessType, `u8`), pure(txb, args.accessCost, `u64`), pure(txb, args.hiveTwapPrice, `u256`), pure(txb, args.gemsToTransferAmt, `u64`) ], }) }

export interface InternalTransferGemsArgs { ownerHiveProfile: ObjectArg; recepientHiveProfile: ObjectArg; gemsToTransferAmt: bigint | TransactionArgument }

export function internalTransferGems( txb: TransactionBlock, args: InternalTransferGemsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_transfer_gems`, arguments: [ obj(txb, args.ownerHiveProfile), obj(txb, args.recepientHiveProfile), pure(txb, args.gemsToTransferAmt, `u64`) ], }) }

export interface InternalWithdrawGemsArgs { hiveProfile: ObjectArg; gemsToWithdraw: bigint | TransactionArgument }

export function internalWithdrawGems( txb: TransactionBlock, args: InternalWithdrawGemsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::internal_withdraw_gems`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.gemsToWithdraw, `u64`) ], }) }

export interface IsAssetListingExecutedArgs { marketplace: ObjectArg; version: bigint | TransactionArgument }

export function isAssetListingExecuted( txb: TransactionBlock, args: IsAssetListingExecutedArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::is_asset_listing_executed`, arguments: [ obj(txb, args.marketplace), pure(txb, args.version, `u64`) ], }) }

export interface IsHiveAssetListedArgs { marketplace: ObjectArg; version: bigint | TransactionArgument }

export function isHiveAssetListed( txb: TransactionBlock, args: IsHiveAssetListedArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::is_hive_asset_listed`, arguments: [ obj(txb, args.marketplace), pure(txb, args.version, `u64`) ], }) }

export interface IsKeeperAccountArgs { hiveManager: ObjectArg; addr: string | TransactionArgument }

export function isKeeperAccount( txb: TransactionBlock, args: IsKeeperAccountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::is_keeper_account`, arguments: [ obj(txb, args.hiveManager), pure(txb, args.addr, `address`) ], }) }

export interface IsUsableProfileNameArgs { hiveProfileStore: ObjectArg; name: string | TransactionArgument }

export function isUsableProfileName( txb: TransactionBlock, args: IsUsableProfileNameArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::is_usable_profile_name`, arguments: [ obj(txb, args.hiveProfileStore), pure(txb, args.name, `0x1::string::String`) ], }) }

export interface IsValidProfileCharArgs { b: number | TransactionArgument; index: bigint | TransactionArgument; len: bigint | TransactionArgument }

export function isValidProfileChar( txb: TransactionBlock, args: IsValidProfileCharArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::is_valid_profile_char`, arguments: [ pure(txb, args.b, `u8`), pure(txb, args.index, `u64`), pure(txb, args.len, `u64`) ], }) }

export function isValidProfileName( txb: TransactionBlock, name: string | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::is_valid_profile_name`, arguments: [ pure(txb, name, `0x1::string::String`) ], }) }

export interface JoinHiveOfProfileArgs { clock: ObjectArg; hiveManager: ObjectArg; myProfile: ObjectArg; profileToSubscribeTo: ObjectArg; hiveDisperser: ObjectArg; accessType: number | TransactionArgument; isFreeForSubscriber: boolean | TransactionArgument }

export function joinHiveOfProfile( txb: TransactionBlock, args: JoinHiveOfProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::join_hive_of_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.myProfile), obj(txb, args.profileToSubscribeTo), obj(txb, args.hiveDisperser), pure(txb, args.accessType, `u8`), pure(txb, args.isFreeForSubscriber, `bool`) ], }) }

export interface JoinHiveOfProfileViaStreamArgs { cap: ObjectArg; clock: ObjectArg; hiveManager: ObjectArg; myProfile: ObjectArg; profileToSubscribeTo: ObjectArg; hiveDisperser: ObjectArg; accessType: number | TransactionArgument; accessCost: bigint | TransactionArgument }

export function joinHiveOfProfileViaStream( txb: TransactionBlock, args: JoinHiveOfProfileViaStreamArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::join_hive_of_profile_via_stream`, arguments: [ obj(txb, args.cap), obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.myProfile), obj(txb, args.profileToSubscribeTo), obj(txb, args.hiveDisperser), pure(txb, args.accessType, `u8`), pure(txb, args.accessCost, `u64`) ], }) }

export interface KraftCapsForLaunchArgs { deployerCap: ObjectArg; hiveManger: ObjectArg; hiveAirdropAppName: string | TransactionArgument; hiveLockdropAppName: string | TransactionArgument; hiveInfusionAppName: string | TransactionArgument; hiveEntryAppName: string | TransactionArgument }

export function kraftCapsForLaunch( txb: TransactionBlock, args: KraftCapsForLaunchArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::kraft_caps_for_launch`, arguments: [ obj(txb, args.deployerCap), obj(txb, args.hiveManger), pure(txb, args.hiveAirdropAppName, `0x1::ascii::String`), pure(txb, args.hiveLockdropAppName, `0x1::ascii::String`), pure(txb, args.hiveInfusionAppName, `0x1::ascii::String`), pure(txb, args.hiveEntryAppName, `0x1::ascii::String`) ], }) }

export interface KraftHiveAssetsAndReturnSuiArgs { hiveEntry: ObjectArg; clock: ObjectArg; suiSystemState: ObjectArg; hsuiVault: ObjectArg; hiveManager: ObjectArg; creatorProfile: ObjectArg; collectionName: string | TransactionArgument; buyerHiveProfile: ObjectArg; payableSui: ObjectArg; assetsToKraft: bigint | TransactionArgument }

export function kraftHiveAssetsAndReturnSui( txb: TransactionBlock, args: KraftHiveAssetsAndReturnSuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::kraft_hive_assets_and_return_sui`, arguments: [ obj(txb, args.hiveEntry), obj(txb, args.clock), obj(txb, args.suiSystemState), obj(txb, args.hsuiVault), obj(txb, args.hiveManager), obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), obj(txb, args.buyerHiveProfile), obj(txb, args.payableSui), pure(txb, args.assetsToKraft, `u64`) ], }) }

export interface KraftHiveAssetsLoopArgs { clock: ObjectArg; suiSystemState: ObjectArg; hsuiVault: ObjectArg; hiveManager: ObjectArg; creatorProfile: ObjectArg; collectionName: string | TransactionArgument; hiveProfile: ObjectArg; payableSui: ObjectArg; assetsToKraft: bigint | TransactionArgument }

export function kraftHiveAssetsLoop( txb: TransactionBlock, args: KraftHiveAssetsLoopArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::kraft_hive_assets_loop`, arguments: [ obj(txb, args.clock), obj(txb, args.suiSystemState), obj(txb, args.hsuiVault), obj(txb, args.hiveManager), obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), obj(txb, args.hiveProfile), obj(txb, args.payableSui), pure(txb, args.assetsToKraft, `u64`) ], }) }

export interface KraftHiveProfileAndReturnSuiArgs { entryCap: ObjectArg; hiveChronicleAccessCap: ObjectArg; clock: ObjectArg; suiSystemState: ObjectArg; vault: ObjectArg; hiveProfileStore: ObjectArg; hiveManager: ObjectArg; disperser: ObjectArg; suiCoin: ObjectArg; name: string | TransactionArgument; bio: string | TransactionArgument; chronicles: GenericArg }

export function kraftHiveProfileAndReturnSui( txb: TransactionBlock, typeArg: string, args: KraftHiveProfileAndReturnSuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::kraft_hive_profile_and_return_sui`, typeArguments: [typeArg], arguments: [ obj(txb, args.entryCap), obj(txb, args.hiveChronicleAccessCap), obj(txb, args.clock), obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.hiveProfileStore), obj(txb, args.hiveManager), obj(txb, args.disperser), obj(txb, args.suiCoin), pure(txb, args.name, `0x1::string::String`), pure(txb, args.bio, `0x1::string::String`), generic(txb, `${typeArg}`, args.chronicles) ], }) }

export interface KraftKiosksForBuilderArgs { cap: ObjectArg; hiveManager: ObjectArg; mappingStore: ObjectArg; maxAssetsLimit: bigint | TransactionArgument; collectionName: string | TransactionArgument; imgUrl: string | TransactionArgument; creatorProfile: ObjectArg }

export function kraftKiosksForBuilder( txb: TransactionBlock, args: KraftKiosksForBuilderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::kraft_kiosks_for_builder`, arguments: [ obj(txb, args.cap), obj(txb, args.hiveManager), obj(txb, args.mappingStore), pure(txb, args.maxAssetsLimit, `u64`), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.imgUrl, `0x1::string::String`), obj(txb, args.creatorProfile) ], }) }

export interface KraftNewHiveKioskArgs { mappingStore: ObjectArg; creatorProfile: ObjectArg; maxAssetsLimit: bigint | TransactionArgument; collectionName: string | TransactionArgument; imgUrl: string | TransactionArgument; timeStream: bigint | TransactionArgument }

export function kraftNewHiveKiosk( txb: TransactionBlock, args: KraftNewHiveKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::kraft_new_hive_kiosk`, arguments: [ obj(txb, args.mappingStore), obj(txb, args.creatorProfile), pure(txb, args.maxAssetsLimit, `u64`), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.imgUrl, `0x1::string::String`), pure(txb, args.timeStream, `u64`) ], }) }

export interface KraftNewSkinForAssetArgs { daoCap: ObjectArg; clock: ObjectArg; hiveManager: ObjectArg; hiveDisperser: ObjectArg; krafterProfile: ObjectArg; ownerProfile: ObjectArg; version: bigint | TransactionArgument; skinType: string | TransactionArgument; maxSkinsPerAsset: bigint | TransactionArgument; skinPrice: bigint | TransactionArgument }

export function kraftNewSkinForAsset( txb: TransactionBlock, args: KraftNewSkinForAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::kraft_new_skin_for_asset`, arguments: [ obj(txb, args.daoCap), obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveDisperser), obj(txb, args.krafterProfile), obj(txb, args.ownerProfile), pure(txb, args.version, `u64`), pure(txb, args.skinType, `0x1::string::String`), pure(txb, args.maxSkinsPerAsset, `u64`), pure(txb, args.skinPrice, `u64`) ], }) }

export interface KraftOwnedHiveProfileArgs { clock: ObjectArg; suiSystemState: ObjectArg; vault: ObjectArg; hiveProfileStore: ObjectArg; hiveManager: ObjectArg; disperser: ObjectArg; suiCoin: ObjectArg; name: string | TransactionArgument; bio: string | TransactionArgument }

export function kraftOwnedHiveProfile( txb: TransactionBlock, args: KraftOwnedHiveProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::kraft_owned_hive_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.hiveProfileStore), obj(txb, args.hiveManager), obj(txb, args.disperser), obj(txb, args.suiCoin), pure(txb, args.name, `0x1::string::String`), pure(txb, args.bio, `0x1::string::String`) ], }) }

export interface LockHiveAssetArgs { clock: ObjectArg; daoCap: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg; version: bigint | TransactionArgument; lockupDuration: number | TransactionArgument }

export function lockHiveAsset( txb: TransactionBlock, args: LockHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::lock_hive_asset`, arguments: [ obj(txb, args.clock), obj(txb, args.daoCap), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile), pure(txb, args.version, `u64`), pure(txb, args.lockupDuration, `u8`) ], }) }

export interface MakeBidWithHsuiArgs { clock: ObjectArg; hiveManager: ObjectArg; vault: ObjectArg; hsuiDisperser: ObjectArg; marketplace: ObjectArg; bidderProfile: ObjectArg; payableHsui: ObjectArg; assetVersion: bigint | TransactionArgument; hsuiBidAmt: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument }

export function makeBidWithHsui( txb: TransactionBlock, args: MakeBidWithHsuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::make_bid_with_hsui`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.hsuiDisperser), obj(txb, args.marketplace), obj(txb, args.bidderProfile), obj(txb, args.payableHsui), pure(txb, args.assetVersion, `u64`), pure(txb, args.hsuiBidAmt, `u64`), pure(txb, args.expirationSec, `u64`) ], }) }

export interface MakeBidWithSuiArgs { clock: ObjectArg; suiSystemState: ObjectArg; vault: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; marketplace: ObjectArg; hiveProfile: ObjectArg; payableSuiCoin: ObjectArg; assetVersion: bigint | TransactionArgument; suiBidAmt: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument }

export function makeBidWithSui( txb: TransactionBlock, args: MakeBidWithSuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::make_bid_with_sui`, arguments: [ obj(txb, args.clock), obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.marketplace), obj(txb, args.hiveProfile), obj(txb, args.payableSuiCoin), pure(txb, args.assetVersion, `u64`), pure(txb, args.suiBidAmt, `u64`), pure(txb, args.expirationSec, `u64`) ], }) }

export interface MakeDirectBidWithHsuiArgs { clock: ObjectArg; hiveManager: ObjectArg; vault: ObjectArg; ownerHiveProfile: ObjectArg; bidderHiveProfile: ObjectArg; payableCoin: ObjectArg; assetVersion: bigint | TransactionArgument; hsuiBidAmt: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument }

export function makeDirectBidWithHsui( txb: TransactionBlock, args: MakeDirectBidWithHsuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::make_direct_bid_with_hsui`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.ownerHiveProfile), obj(txb, args.bidderHiveProfile), obj(txb, args.payableCoin), pure(txb, args.assetVersion, `u64`), pure(txb, args.hsuiBidAmt, `u64`), pure(txb, args.expirationSec, `u64`) ], }) }

export interface MakeDirectBidWithSuiArgs { clock: ObjectArg; suiSystemState: ObjectArg; vault: ObjectArg; hiveManager: ObjectArg; ownerHiveProfile: ObjectArg; bidderHiveProfile: ObjectArg; payableSuiCoin: ObjectArg; assetVersion: bigint | TransactionArgument; suiBidAmt: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument }

export function makeDirectBidWithSui( txb: TransactionBlock, args: MakeDirectBidWithSuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::make_direct_bid_with_sui`, arguments: [ obj(txb, args.clock), obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.hiveManager), obj(txb, args.ownerHiveProfile), obj(txb, args.bidderHiveProfile), obj(txb, args.payableSuiCoin), pure(txb, args.assetVersion, `u64`), pure(txb, args.suiBidAmt, `u64`), pure(txb, args.expirationSec, `u64`) ], }) }

export interface MakeForeverSubscriberArgs { now: bigint | TransactionArgument; subscriberProfile: ObjectArg; subscribedToProfile: ObjectArg }

export function makeForeverSubscriber( txb: TransactionBlock, args: MakeForeverSubscriberArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::make_forever_subscriber`, arguments: [ pure(txb, args.now, `u64`), obj(txb, args.subscriberProfile), obj(txb, args.subscribedToProfile) ], }) }

export interface MakeForeverSubscriberOfCompProfileArgs { now: bigint | TransactionArgument; subscriberProfile: ObjectArg; subscribedToProfile: ObjectArg }

export function makeForeverSubscriberOfCompProfile( txb: TransactionBlock, args: MakeForeverSubscriberOfCompProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::make_forever_subscriber_of_comp_profile`, arguments: [ pure(txb, args.now, `u64`), obj(txb, args.subscriberProfile), obj(txb, args.subscribedToProfile) ], }) }

export interface MakeForeverSubscriberViaStreamArgs { cap: ObjectArg; now: bigint | TransactionArgument; subscriberProfile: ObjectArg; subscribedToProfile: ObjectArg }

export function makeForeverSubscriberViaStream( txb: TransactionBlock, args: MakeForeverSubscriberViaStreamArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::make_forever_subscriber_via_stream`, arguments: [ obj(txb, args.cap), pure(txb, args.now, `u64`), obj(txb, args.subscriberProfile), obj(txb, args.subscribedToProfile) ], }) }

export interface MakeListingArgs { clock: ObjectArg; hiveManager: ObjectArg; marketplace: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument; listingAccess: number | TransactionArgument; discountAccess: number | TransactionArgument; discount: bigint | TransactionArgument; minSuiPrice: bigint | TransactionArgument; isSaleListing: boolean | TransactionArgument; instantSale: boolean | TransactionArgument; highestBidSale: boolean | TransactionArgument; lockupDuration: number | TransactionArgument; startSec: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument }

export function makeListing( txb: TransactionBlock, args: MakeListingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::make_listing`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.marketplace), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile), pure(txb, args.assetVersion, `u64`), pure(txb, args.listingAccess, `u8`), pure(txb, args.discountAccess, `u8`), pure(txb, args.discount, `u64`), pure(txb, args.minSuiPrice, `u64`), pure(txb, args.isSaleListing, `bool`), pure(txb, args.instantSale, `bool`), pure(txb, args.highestBidSale, `bool`), pure(txb, args.lockupDuration, `u8`), pure(txb, args.startSec, `u64`), pure(txb, args.expirationSec, `u64`) ], }) }

export interface MarkMarketplaceBidsAsInvalidArgs { marketplace: ObjectArg; assetVersion: bigint | TransactionArgument }

export function markMarketplaceBidsAsInvalid( txb: TransactionBlock, args: MarkMarketplaceBidsAsInvalidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::mark_marketplace_bids_as_invalid`, arguments: [ obj(txb, args.marketplace), pure(txb, args.assetVersion, `u64`) ], }) }

export interface ModifyBidArgs { clock: ObjectArg; hiveManager: ObjectArg; vault: ObjectArg; hsuiDisperser: ObjectArg; marketplace: ObjectArg; hiveProfile: ObjectArg; payableCoin: ObjectArg; assetVersion: bigint | TransactionArgument; newBidPriceHsui: bigint | TransactionArgument; newExpirationSec: bigint | TransactionArgument }

export function modifyBid( txb: TransactionBlock, args: ModifyBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::modify_bid`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.hsuiDisperser), obj(txb, args.marketplace), obj(txb, args.hiveProfile), obj(txb, args.payableCoin), pure(txb, args.assetVersion, `u64`), pure(txb, args.newBidPriceHsui, `u64`), pure(txb, args.newExpirationSec, `u64`) ], }) }

export interface ModifyDirectBidArgs { clock: ObjectArg; ownerHiveProfile: ObjectArg; bidderHiveProfile: ObjectArg; payableCoin: ObjectArg; assetVersion: bigint | TransactionArgument; newBidPriceHsui: bigint | TransactionArgument; newExpirationSec: bigint | TransactionArgument }

export function modifyDirectBid( txb: TransactionBlock, args: ModifyDirectBidArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::modify_direct_bid`, arguments: [ obj(txb, args.clock), obj(txb, args.ownerHiveProfile), obj(txb, args.bidderHiveProfile), obj(txb, args.payableCoin), pure(txb, args.assetVersion, `u64`), pure(txb, args.newBidPriceHsui, `u64`), pure(txb, args.newExpirationSec, `u64`) ], }) }

export interface NewSkinKraftedByOwnerArgs { daoCap: ObjectArg; hiveManager: ObjectArg; hiveDisperser: ObjectArg; ownerProfile: ObjectArg; version: bigint | TransactionArgument; skinType: string | TransactionArgument; maxSkinsPerAsset: bigint | TransactionArgument; skinPrice: bigint | TransactionArgument }

export function newSkinKraftedByOwner( txb: TransactionBlock, args: NewSkinKraftedByOwnerArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::new_skin_krafted_by_owner`, arguments: [ obj(txb, args.daoCap), obj(txb, args.hiveManager), obj(txb, args.hiveDisperser), obj(txb, args.ownerProfile), pure(txb, args.version, `u64`), pure(txb, args.skinType, `0x1::string::String`), pure(txb, args.maxSkinsPerAsset, `u64`), pure(txb, args.skinPrice, `u64`) ], }) }

export interface OnboardProfileAsCreatorArgs { cap: ObjectArg; mappingStore: ObjectArg; creatorProfile: ObjectArg; maxAssetsLimit: bigint | TransactionArgument; collectionName: string | TransactionArgument; streamingFromEpoch: bigint | TransactionArgument }

export function onboardProfileAsCreator( txb: TransactionBlock, args: OnboardProfileAsCreatorArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::onboard_profile_as_creator`, arguments: [ obj(txb, args.cap), obj(txb, args.mappingStore), obj(txb, args.creatorProfile), pure(txb, args.maxAssetsLimit, `u64`), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.streamingFromEpoch, `u64`) ], }) }

export interface PortGemsViaAssetArgs { daoCap: ObjectArg; clock: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg; skinType: string | TransactionArgument; version: bigint | TransactionArgument; gemsToPort: bigint | TransactionArgument }

export function portGemsViaAsset( txb: TransactionBlock, args: PortGemsViaAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::port_gems_via_asset`, arguments: [ obj(txb, args.daoCap), obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile), pure(txb, args.skinType, `0x1::string::String`), pure(txb, args.version, `u64`), pure(txb, args.gemsToPort, `u64`) ], }) }

export interface PowApproxArgs { x: bigint | TransactionArgument; expNumerator: bigint | TransactionArgument; expDenominator: bigint | TransactionArgument }

export function powApprox( txb: TransactionBlock, args: PowApproxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::pow_approx`, arguments: [ pure(txb, args.x, `u128`), pure(txb, args.expNumerator, `u128`), pure(txb, args.expDenominator, `u128`) ], }) }

export interface PowApproxFracArgs { base: bigint | TransactionArgument; exp: bigint | TransactionArgument; precision: bigint | TransactionArgument }

export function powApproxFrac( txb: TransactionBlock, args: PowApproxFracArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::pow_approx_frac`, arguments: [ pure(txb, args.base, `u256`), pure(txb, args.exp, `u128`), pure(txb, args.precision, `u64`) ], }) }

export interface ProcessGemsRoyaltyArgs { hiveManager: ObjectArg; payableGems: ObjectArg; hiveDisperser: ObjectArg }

export function processGemsRoyalty( txb: TransactionBlock, args: ProcessGemsRoyaltyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::process_gems_royalty`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.payableGems), obj(txb, args.hiveDisperser) ], }) }

export interface ProcessHighestBidSaleListingArgs { clock: ObjectArg; hiveManager: ObjectArg; vault: ObjectArg; hsuiDisperser: ObjectArg; marketplace: ObjectArg; assetVersion: bigint | TransactionArgument }

export function processHighestBidSaleListing( txb: TransactionBlock, args: ProcessHighestBidSaleListingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::process_highest_bid_sale_listing`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.hsuiDisperser), obj(txb, args.marketplace), pure(txb, args.assetVersion, `u64`) ], }) }

export interface ProcessHighestBidSaleListingsArgs { clock: ObjectArg; hiveManager: ObjectArg; vault: ObjectArg; hsuiDisperser: ObjectArg; marketplace: ObjectArg; assetVersions: Array<bigint | TransactionArgument> | TransactionArgument }

export function processHighestBidSaleListings( txb: TransactionBlock, args: ProcessHighestBidSaleListingsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::process_highest_bid_sale_listings`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.vault), obj(txb, args.hsuiDisperser), obj(txb, args.marketplace), pure(txb, args.assetVersions, `vector<u64>`) ], }) }

export interface ProcessRoyaltyArgs { paidBalance: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; creatorProfileAddr: string | TransactionArgument }

export function processRoyalty( txb: TransactionBlock, args: ProcessRoyaltyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::process_royalty`, arguments: [ obj(txb, args.paidBalance), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), pure(txb, args.creatorProfileAddr, `address`) ], }) }

export interface ProcessSubscriptionPaymentArgs { clock: ObjectArg; hiveManager: ObjectArg; subscriberProfile: ObjectArg; profileSubscribedTo: ObjectArg; hiveDisperser: ObjectArg }

export function processSubscriptionPayment( txb: TransactionBlock, args: ProcessSubscriptionPaymentArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::process_subscription_payment`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.subscriberProfile), obj(txb, args.profileSubscribedTo), obj(txb, args.hiveDisperser) ], }) }

export interface RemoveAssetUpgradeFromKioskArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument; version: bigint | TransactionArgument; upgradeIndex: bigint | TransactionArgument }

export function removeAssetUpgradeFromKiosk( txb: TransactionBlock, args: RemoveAssetUpgradeFromKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::remove_asset_upgrade_from_kiosk`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.version, `u64`), pure(txb, args.upgradeIndex, `u64`) ], }) }

export interface RemoveFromProfileArgs { hiveProfile: ObjectArg; appName: string | TransactionArgument }

export function removeFromProfile( txb: TransactionBlock, typeArg: string, args: RemoveFromProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::remove_from_profile`, typeArguments: [typeArg], arguments: [ obj(txb, args.hiveProfile), pure(txb, args.appName, `0x1::ascii::String`) ], }) }

export interface RemoveFromReservedUsernamesListArgs { cap: ObjectArg; mappingStore: ObjectArg; usernamesToRemove: Array<string | TransactionArgument> | TransactionArgument }

export function removeFromReservedUsernamesList( txb: TransactionBlock, args: RemoveFromReservedUsernamesListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::remove_from_reserved_usernames_list`, arguments: [ obj(txb, args.cap), obj(txb, args.mappingStore), pure(txb, args.usernamesToRemove, `vector<0x1::string::String>`) ], }) }

export interface ReturnBorrowedHiveAssetArgs { clock: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; ownerHiveProfile: ObjectArg; borrowerHiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument }

export function returnBorrowedHiveAsset( txb: TransactionBlock, args: ReturnBorrowedHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::return_borrowed_hive_asset`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.ownerHiveProfile), obj(txb, args.borrowerHiveProfile), pure(txb, args.assetVersion, `u64`) ], }) }

export interface SetupHiveManagerArgs { cap: ObjectArg; clock: ObjectArg; assetsDispersalPercent: bigint | TransactionArgument; creatorsRoyaltyPercent: bigint | TransactionArgument; maxBidsPerAsset: bigint | TransactionArgument; minSuiBidAllowed: bigint | TransactionArgument; profileKraftFeesSui: bigint | TransactionArgument; socialFeeGems: bigint | TransactionArgument; socialMultiplierForPower: bigint | TransactionArgument; socialMultiplierForGems: bigint | TransactionArgument; lockupDurations: Array<number | TransactionArgument> | TransactionArgument; lockupBoosts: Array<bigint | TransactionArgument> | TransactionArgument; builderHiveAssets: bigint | TransactionArgument }

export function setupHiveManager( txb: TransactionBlock, args: SetupHiveManagerArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::setup_hive_manager`, arguments: [ obj(txb, args.cap), obj(txb, args.clock), pure(txb, args.assetsDispersalPercent, `u64`), pure(txb, args.creatorsRoyaltyPercent, `u64`), pure(txb, args.maxBidsPerAsset, `u64`), pure(txb, args.minSuiBidAllowed, `u64`), pure(txb, args.profileKraftFeesSui, `u64`), pure(txb, args.socialFeeGems, `u64`), pure(txb, args.socialMultiplierForPower, `u64`), pure(txb, args.socialMultiplierForGems, `u64`), pure(txb, args.lockupDurations, `vector<u8>`), pure(txb, args.lockupBoosts, `vector<u64>`), pure(txb, args.builderHiveAssets, `u64`) ], }) }

export interface StakeSuiForHsuiArgs { suiSystemState: ObjectArg; vault: ObjectArg; suiBalance: ObjectArg; amtToStake: bigint | TransactionArgument }

export function stakeSuiForHsui( txb: TransactionBlock, args: StakeSuiForHsuiArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::stake_sui_for_hsui`, arguments: [ obj(txb, args.suiSystemState), obj(txb, args.vault), obj(txb, args.suiBalance), pure(txb, args.amtToStake, `u64`) ], }) }

export interface SubSignArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument }

export function subSign( txb: TransactionBlock, args: SubSignArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::sub_sign`, arguments: [ pure(txb, args.a, `u256`), pure(txb, args.b, `u256`) ], }) }

export interface SwitchAccessTypeArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveDisperser: ObjectArg; myProfile: ObjectArg; profileSubscribedTo: ObjectArg; newAccessType: number | TransactionArgument }

export function switchAccessType( txb: TransactionBlock, args: SwitchAccessTypeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::switch_access_type`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveDisperser), obj(txb, args.myProfile), obj(txb, args.profileSubscribedTo), pure(txb, args.newAccessType, `u8`) ], }) }

export interface TransferHiveAssetArgs { clock: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; ownerHiveProfile: ObjectArg; recepientHiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function transferHiveAsset( txb: TransactionBlock, args: TransferHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::transfer_hive_asset`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.ownerHiveProfile), obj(txb, args.recepientHiveProfile), pure(txb, args.version, `u64`) ], }) }

export interface TransferHiveGemsArgs { clock: ObjectArg; hiveManager: ObjectArg; ownerHiveProfile: ObjectArg; recepientHiveProfile: ObjectArg; gemsToTransferAmt: bigint | TransactionArgument }

export function transferHiveGems( txb: TransactionBlock, args: TransferHiveGemsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::transfer_hive_gems`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.ownerHiveProfile), obj(txb, args.recepientHiveProfile), pure(txb, args.gemsToTransferAmt, `u64`) ], }) }

export interface TransferHiveGemsViaCompProfileArgs { ownerHiveProfile: ObjectArg; recepientHiveProfile: ObjectArg; gemsToTransferAmt: bigint | TransactionArgument }

export function transferHiveGemsViaCompProfile( txb: TransactionBlock, args: TransferHiveGemsViaCompProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::transfer_hive_gems_via_comp_profile`, arguments: [ obj(txb, args.ownerHiveProfile), obj(txb, args.recepientHiveProfile), pure(txb, args.gemsToTransferAmt, `u64`) ], }) }

export interface TransferKioskArgs { mappingStore: ObjectArg; creatorProfile: ObjectArg; newCreatorProfile: ObjectArg; collectionName: string | TransactionArgument }

export function transferKiosk( txb: TransactionBlock, args: TransferKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::transfer_kiosk`, arguments: [ obj(txb, args.mappingStore), obj(txb, args.creatorProfile), obj(txb, args.newCreatorProfile), pure(txb, args.collectionName, `0x1::string::String`) ], }) }

export interface UnlockHiveAssetArgs { clock: ObjectArg; daoCap: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg; version: bigint | TransactionArgument }

export function unlockHiveAsset( txb: TransactionBlock, args: UnlockHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::unlock_hive_asset`, arguments: [ obj(txb, args.clock), obj(txb, args.daoCap), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile), pure(txb, args.version, `u64`) ], }) }

export interface UnstakeHiveAssetArgs { hiveManager: ObjectArg; hiveAsset: ObjectArg }

export function unstakeHiveAsset( txb: TransactionBlock, args: UnstakeHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::unstake_hive_asset`, arguments: [ obj(txb, args.hiveManager), obj(txb, args.hiveAsset) ], }) }

export interface UpdateAssetOwnershipArgs { hiveManager: ObjectArg; version: bigint | TransactionArgument; newOwnerProfileAddr: string | TransactionArgument }

export function updateAssetOwnership( txb: TransactionBlock, args: UpdateAssetOwnershipArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_asset_ownership`, arguments: [ obj(txb, args.hiveManager), pure(txb, args.version, `u64`), pure(txb, args.newOwnerProfileAddr, `address`) ], }) }

export interface UpdateBidAmongBidsArgs { bids: Array<ObjectArg> | TransactionArgument; bidderProfileAddr: string | TransactionArgument; newBidPrice: bigint | TransactionArgument; newExpirationSec: bigint | TransactionArgument; availBalance: ObjectArg; isListingLive: boolean | TransactionArgument; version: bigint | TransactionArgument }

export function updateBidAmongBids( txb: TransactionBlock, args: UpdateBidAmongBidsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_bid_among_bids`, arguments: [ vector(txb, `0x0::hive_profile::Bid<0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::dsui::DSUI>`, args.bids), pure(txb, args.bidderProfileAddr, `address`), pure(txb, args.newBidPrice, `u64`), pure(txb, args.newExpirationSec, `u64`), obj(txb, args.availBalance), pure(txb, args.isListingLive, `bool`), pure(txb, args.version, `u64`) ], }) }

export interface UpdateBidRecordArgs { bidRecord: ObjectArg; newBidPrice: bigint | TransactionArgument; newExpirationSec: bigint | TransactionArgument; now: bigint | TransactionArgument }

export function updateBidRecord( txb: TransactionBlock, args: UpdateBidRecordArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_bid_record`, arguments: [ obj(txb, args.bidRecord), pure(txb, args.newBidPrice, `u64`), pure(txb, args.newExpirationSec, `u64`), pure(txb, args.now, `u64`) ], }) }

export interface UpdateBioArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveDisperser: ObjectArg; myProfile: ObjectArg; newBio: string | TransactionArgument }

export function updateBio( txb: TransactionBlock, args: UpdateBioArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_bio`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveDisperser), obj(txb, args.myProfile), pure(txb, args.newBio, `0x1::string::String`) ], }) }

export interface UpdateConfigForSkinKraftArgs { daoCap: ObjectArg; hiveProfile: ObjectArg; version: bigint | TransactionArgument; skinType: string | TransactionArgument; newRoyaltyFeePercent: bigint | TransactionArgument; newKraftAccess: number | TransactionArgument; newDiscountAccess: number | TransactionArgument; newDiscount: bigint | TransactionArgument; updateKraftAccess: boolean | TransactionArgument; updateDiscountAccess: boolean | TransactionArgument }

export function updateConfigForSkinKraft( txb: TransactionBlock, args: UpdateConfigForSkinKraftArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_config_for_skin_kraft`, arguments: [ obj(txb, args.daoCap), obj(txb, args.hiveProfile), pure(txb, args.version, `u64`), pure(txb, args.skinType, `0x1::string::String`), pure(txb, args.newRoyaltyFeePercent, `u64`), pure(txb, args.newKraftAccess, `u8`), pure(txb, args.newDiscountAccess, `u8`), pure(txb, args.newDiscount, `u64`), pure(txb, args.updateKraftAccess, `bool`), pure(txb, args.updateDiscountAccess, `bool`) ], }) }

export interface UpdateHiveTwapInfoArgs { cap: ObjectArg; clock: ObjectArg; hiveManager: ObjectArg; hiveSuiTwap: bigint | TransactionArgument; suiUsdcTwap: bigint | TransactionArgument; hiveUsdcTwap: bigint | TransactionArgument }

export function updateHiveTwapInfo( txb: TransactionBlock, args: UpdateHiveTwapInfoArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_hive_twap_info`, arguments: [ obj(txb, args.cap), obj(txb, args.clock), obj(txb, args.hiveManager), pure(txb, args.hiveSuiTwap, `u256`), pure(txb, args.suiUsdcTwap, `u256`), pure(txb, args.hiveUsdcTwap, `u256`) ], }) }

export interface UpdateInscriptionArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveDisperser: ObjectArg; myProfile: ObjectArg; inscriptionType: string | TransactionArgument; inscriptionBase64: Array<string | TransactionArgument> | TransactionArgument }

export function updateInscription( txb: TransactionBlock, args: UpdateInscriptionArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_inscription`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveDisperser), obj(txb, args.myProfile), pure(txb, args.inscriptionType, `0x1::string::String`), pure(txb, args.inscriptionBase64, `vector<0x1::string::String>`) ], }) }

export interface UpdateKeeperAccountsListArgs { cap: ObjectArg; hiveManager: ObjectArg; keeperAccountAddr: string | TransactionArgument; isAllowed: boolean | TransactionArgument }

export function updateKeeperAccountsList( txb: TransactionBlock, args: UpdateKeeperAccountsListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_keeper_accounts_list`, arguments: [ obj(txb, args.cap), obj(txb, args.hiveManager), pure(txb, args.keeperAccountAddr, `address`), pure(txb, args.isAllowed, `bool`) ], }) }

export interface UpdateListingArgs { clock: ObjectArg; hiveManager: ObjectArg; marketplace: ObjectArg; hiveProfile: ObjectArg; assetVersion: bigint | TransactionArgument; newMinSuiPrice: bigint | TransactionArgument; newLockupDuration: number | TransactionArgument; newExpirationSec: bigint | TransactionArgument }

export function updateListing( txb: TransactionBlock, args: UpdateListingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_listing`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.marketplace), obj(txb, args.hiveProfile), pure(txb, args.assetVersion, `u64`), pure(txb, args.newMinSuiPrice, `u64`), pure(txb, args.newLockupDuration, `u8`), pure(txb, args.newExpirationSec, `u64`) ], }) }

export interface UpdatePricingAndAccessForKioskArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument; basePrice: bigint | TransactionArgument; curveA: bigint | TransactionArgument; kraftAccess: number | TransactionArgument; discountAccess: number | TransactionArgument; discount: bigint | TransactionArgument }

export function updatePricingAndAccessForKiosk( txb: TransactionBlock, args: UpdatePricingAndAccessForKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_pricing_and_access_for_kiosk`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.basePrice, `u64`), pure(txb, args.curveA, `u64`), pure(txb, args.kraftAccess, `u8`), pure(txb, args.discountAccess, `u8`), pure(txb, args.discount, `u64`) ], }) }

export interface UpdateProfileConfigParamsArgs { daoCap: ObjectArg; hiveManager: ObjectArg; newMaxBidsPerAsset: bigint | TransactionArgument; newMinSuiBidAllowed: bigint | TransactionArgument; newProfileKraftFeesSui: bigint | TransactionArgument; socialFeeGems: bigint | TransactionArgument; socialMultiplierForGems: bigint | TransactionArgument; socialMultiplierForPower: bigint | TransactionArgument }

export function updateProfileConfigParams( txb: TransactionBlock, args: UpdateProfileConfigParamsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_profile_config_params`, arguments: [ obj(txb, args.daoCap), obj(txb, args.hiveManager), pure(txb, args.newMaxBidsPerAsset, `u64`), pure(txb, args.newMinSuiBidAllowed, `u64`), pure(txb, args.newProfileKraftFeesSui, `u64`), pure(txb, args.socialFeeGems, `u64`), pure(txb, args.socialMultiplierForGems, `u64`), pure(txb, args.socialMultiplierForPower, `u64`) ], }) }

export interface UpdateReservedUsernamesListArgs { cap: ObjectArg; mappingStore: ObjectArg; usernamesToReserve: Array<string | TransactionArgument> | TransactionArgument; accessorsList: Array<string | TransactionArgument> | TransactionArgument }

export function updateReservedUsernamesList( txb: TransactionBlock, args: UpdateReservedUsernamesListArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_reserved_usernames_list`, arguments: [ obj(txb, args.cap), obj(txb, args.mappingStore), pure(txb, args.usernamesToReserve, `vector<0x1::string::String>`), pure(txb, args.accessorsList, `vector<address>`) ], }) }

export interface UpdateRoyaltyArgs { daoCap: ObjectArg; hiveManager: ObjectArg; royaltyNum: bigint | TransactionArgument; royaltyDenom: bigint | TransactionArgument; assetsDispersalPercent: bigint | TransactionArgument; creatorsRoyaltyPercent: bigint | TransactionArgument; gemsRoyaltyNum: bigint | TransactionArgument; gemsRoyaltyDenom: bigint | TransactionArgument; gemsTreasuryPercent: bigint | TransactionArgument; gemsBurnPercent: bigint | TransactionArgument }

export function updateRoyalty( txb: TransactionBlock, args: UpdateRoyaltyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_royalty`, arguments: [ obj(txb, args.daoCap), obj(txb, args.hiveManager), pure(txb, args.royaltyNum, `u64`), pure(txb, args.royaltyDenom, `u64`), pure(txb, args.assetsDispersalPercent, `u64`), pure(txb, args.creatorsRoyaltyPercent, `u64`), pure(txb, args.gemsRoyaltyNum, `u64`), pure(txb, args.gemsRoyaltyDenom, `u64`), pure(txb, args.gemsTreasuryPercent, `u64`), pure(txb, args.gemsBurnPercent, `u64`) ], }) }

export interface UpdateSubscriptionPricingArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveDisperser: ObjectArg; myProfile: ObjectArg; newWorkerAccessCost: bigint | TransactionArgument; newDroneAccessCost: bigint | TransactionArgument; newQueenAccessCost: bigint | TransactionArgument }

export function updateSubscriptionPricing( txb: TransactionBlock, args: UpdateSubscriptionPricingArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_subscription_pricing`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveDisperser), obj(txb, args.myProfile), pure(txb, args.newWorkerAccessCost, `u64`), pure(txb, args.newDroneAccessCost, `u64`), pure(txb, args.newQueenAccessCost, `u64`) ], }) }

export interface UpdateTraitsInHiveKioskArgs { creatorProfile: ObjectArg; collectionName: string | TransactionArgument; traits: Array<string | TransactionArgument> | TransactionArgument; imgUrl: string | TransactionArgument }

export function updateTraitsInHiveKiosk( txb: TransactionBlock, args: UpdateTraitsInHiveKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_traits_in_hive_kiosk`, arguments: [ obj(txb, args.creatorProfile), pure(txb, args.collectionName, `0x1::string::String`), pure(txb, args.traits, `vector<0x1::string::String>`), pure(txb, args.imgUrl, `0x1::string::String`) ], }) }

export interface UpdateUsernameArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveProfileStore: ObjectArg; hiveDisperser: ObjectArg; myProfile: ObjectArg; newUsername: string | TransactionArgument }

export function updateUsername( txb: TransactionBlock, args: UpdateUsernameArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::update_username`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveProfileStore), obj(txb, args.hiveDisperser), obj(txb, args.myProfile), pure(txb, args.newUsername, `0x1::string::String`) ], }) }

export interface UpgradeAssetViaKioskArgs { hiveEntry: ObjectArg; clock: ObjectArg; hiveManager: ObjectArg; collectionName: string | TransactionArgument; hiveDisperser: ObjectArg; creatorProfile: ObjectArg; ownerProfile: ObjectArg; version: bigint | TransactionArgument; selectedUpgradeIndex: bigint | TransactionArgument }

export function upgradeAssetViaKiosk( txb: TransactionBlock, args: UpgradeAssetViaKioskArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::upgrade_asset_via_kiosk`, arguments: [ obj(txb, args.hiveEntry), obj(txb, args.clock), obj(txb, args.hiveManager), pure(txb, args.collectionName, `0x1::string::String`), obj(txb, args.hiveDisperser), obj(txb, args.creatorProfile), obj(txb, args.ownerProfile), pure(txb, args.version, `u64`), pure(txb, args.selectedUpgradeIndex, `u64`) ], }) }

export interface WithdrawGemsFromCompProfileArgs { hiveProfile: ObjectArg; gemsToWithdraw: bigint | TransactionArgument }

export function withdrawGemsFromCompProfile( txb: TransactionBlock, args: WithdrawGemsFromCompProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::withdraw_gems_from_comp_profile`, arguments: [ obj(txb, args.hiveProfile), pure(txb, args.gemsToWithdraw, `u64`) ], }) }

export interface WithdrawGemsFromProfileArgs { clock: ObjectArg; hiveManager: ObjectArg; hiveProfile: ObjectArg; gemsToWithdraw: bigint | TransactionArgument }

export function withdrawGemsFromProfile( txb: TransactionBlock, args: WithdrawGemsFromProfileArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::withdraw_gems_from_profile`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hiveProfile), pure(txb, args.gemsToWithdraw, `u64`) ], }) }

export interface WithdrawHiveAssetArgs { clock: ObjectArg; hiveManager: ObjectArg; hsuiDisperser: ObjectArg; hiveDisperser: ObjectArg; hiveProfile: ObjectArg; version: bigint | TransactionArgument; toUnlock: boolean | TransactionArgument }

export function withdrawHiveAsset( txb: TransactionBlock, args: WithdrawHiveAssetArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_profile::withdraw_hive_asset`, arguments: [ obj(txb, args.clock), obj(txb, args.hiveManager), obj(txb, args.hsuiDisperser), obj(txb, args.hiveDisperser), obj(txb, args.hiveProfile), pure(txb, args.version, `u64`), pure(txb, args.toUnlock, `bool`) ], }) }

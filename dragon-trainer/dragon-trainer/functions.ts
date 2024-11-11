import { dragontrainer } from ".."
const PUBLISHED_AT = dragontrainer.PUBLISHED_AT
const BEES_MANAGER = dragontrainer.BEES_MANAGER
const HIDDEN_WORLD = dragontrainer.HIDDEN_WORLD
const TRAINER_MAPPING_STORE = dragontrainer.TRAINER_MAPPING_STORE
const YIELD_FARM = dragontrainer.YIELD_FARM
const MARKETPLACE = dragontrainer.MARKETPLACE
const HIVE_GRAPH = dragontrainer.HIVE_GRAPH
const CLOCK = dragontrainer.CLOCK


import { String } from "../../_dependencies/source/0x1/ascii/structs";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { String as String1 } from "../../_dependencies/source/0x1/string/structs";
import { GenericArg, generic, obj, pure, vector } from "../../_framework/util";
import { Bid } from "./structs";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export function toLowercase(tx: Transaction, original: string | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::to_lowercase`, arguments: [pure(tx, original, `${String.$typeName}`)], }) }

export function init(tx: Transaction, otw: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::init`, arguments: [obj(tx, otw)], }) }

export function u64ToAscii(tx: Transaction, num: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::u64_to_ascii`, arguments: [pure(tx, num, `u64`)], }) }

export interface AcceptBidArgs {   feeCollector: TransactionObjectInput;  ownerTrainer: TransactionObjectInput; bidderTrainerAddr: string | TransactionArgument; beeVersion: bigint | TransactionArgument }

export function acceptBid(tx: Transaction, args: AcceptBidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::accept_bid`, arguments: [obj(tx, CLOCK), obj(tx, BEES_MANAGER), obj(tx, args.feeCollector), obj(tx, MARKETPLACE), obj(tx, args.ownerTrainer), pure(tx, args.bidderTrainerAddr, `address`), pure(tx, args.beeVersion, `u64`)], }) }

export interface AddAppToHiveStoreArgs { cap: TransactionObjectInput;  mappingStore: TransactionObjectInput; appName: string | TransactionArgument; hiveRewards: bigint | TransactionArgument; honeyRewards: bigint | TransactionArgument; receipient: string | TransactionArgument }

export function addAppToHiveStore(tx: Transaction, args: AddAppToHiveStoreArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_app_to_hive_store`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), obj(tx, args.mappingStore), pure(tx, args.appName, `${String.$typeName}`), pure(tx, args.hiveRewards, `u64`), pure(tx, args.honeyRewards, `u64`), pure(tx, args.receipient, `address`)], }) }

export interface AddAppToTrainerArgs { masterKey: TransactionObjectInput; dragonTrainer: TransactionObjectInput; appId: string | TransactionArgument; appToAdd: GenericArg }

export function addAppToTrainer(tx: Transaction, typeArg: string, args: AddAppToTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_app_to_trainer`, typeArguments: [typeArg], arguments: [obj(tx, args.masterKey), obj(tx, args.dragonTrainer), pure(tx, args.appId, `address`), generic(tx, `${typeArg}`, args.appToAdd)], }) }

export interface AddBeeFriendsForBreedingArgs {  queenBee: TransactionObjectInput; friendlyBee: bigint | TransactionArgument; newPrice: bigint | TransactionArgument }

export function addBeeFriendsForBreeding(tx: Transaction, args: AddBeeFriendsForBreedingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_bee_friends_for_breeding`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.queenBee), pure(tx, args.friendlyBee, `u64`), pure(tx, args.newPrice, `u64`)], }) }

export interface AddBidToTableArgs { bidsTable: TransactionObjectInput; beeVersion: bigint | TransactionArgument; bid: TransactionObjectInput; maxBidsPerBee: bigint | TransactionArgument }

export function addBidToTable(tx: Transaction, args: AddBidToTableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_bid_to_table`, arguments: [obj(tx, args.bidsTable), pure(tx, args.beeVersion, `u64`), obj(tx, args.bid), pure(tx, args.maxBidsPerBee, `u64`)], }) }

export interface AddCapabilitiesBasedOnGeneArgs {  mysticalBee: TransactionObjectInput }

export function addCapabilitiesBasedOnGene(tx: Transaction, args: AddCapabilitiesBasedOnGeneArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_capabilities_based_on_gene`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.mysticalBee)], }) }

export interface AddDnaForDragonEggArgs { cap: TransactionObjectInput;  gene: bigint | TransactionArgument; img: Array<string | TransactionArgument> | TransactionArgument }

export function addDnaForDragonEgg(tx: Transaction, args: AddDnaForDragonEggArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_dna_for_dragon_egg`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), pure(tx, args.gene, `u256`), pure(tx, args.img, `vector<${String1.$typeName}>`)], }) }

export interface AddStoreToBeeArgs { masterKey: TransactionObjectInput; mysticalBee: TransactionObjectInput; appAddr: string | TransactionArgument; appToAdd: GenericArg }

export function addStoreToBee(tx: Transaction, typeArg: string, args: AddStoreToBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_store_to_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.masterKey), obj(tx, args.mysticalBee), pure(tx, args.appAddr, `address`), generic(tx, `${typeArg}`, args.appToAdd)], }) }

export interface AddToAdminFeeArgs {  suiToAdd: TransactionObjectInput }

export function addToAdminFee(tx: Transaction, args: AddToAdminFeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::add_to_admin_fee`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.suiToAdd)], }) }

export interface AdjustCapabilityValueArgs { value: bigint | TransactionArgument; increasePct: bigint | TransactionArgument; maxValue: bigint | TransactionArgument }

export function adjustCapabilityValue(tx: Transaction, args: AdjustCapabilityValueArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::adjust_capability_value`, arguments: [pure(tx, args.value, `u64`), pure(tx, args.increasePct, `u64`), pure(tx, args.maxValue, `u64`)], }) }

export interface AdminMintQueenArgs {  cap: TransactionObjectInput; random: TransactionObjectInput; feeCollector: TransactionObjectInput;  userTrainer: TransactionObjectInput; payableSui: TransactionObjectInput }

export function adminMintQueen(tx: Transaction, args: AdminMintQueenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::admin_mint_queen`, arguments: [obj(tx, CLOCK), obj(tx, args.cap), obj(tx, args.random), obj(tx, args.feeCollector), obj(tx, BEES_MANAGER), obj(tx, YIELD_FARM), obj(tx, args.userTrainer), obj(tx, args.payableSui)], }) }

export interface AttackBeeArgs { attacker: TransactionObjectInput; defender: TransactionObjectInput; sessionEnergy: bigint | TransactionArgument; sessionHealth: bigint | TransactionArgument; slot: number | TransactionArgument; currentTs: bigint | TransactionArgument }

export function attackBee(tx: Transaction, args: AttackBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::attack_bee`, arguments: [obj(tx, args.attacker), obj(tx, args.defender), pure(tx, args.sessionEnergy, `u64`), pure(tx, args.sessionHealth, `u64`), pure(tx, args.slot, `u8`), pure(tx, args.currentTs, `u64`)], }) }

export interface BorrowAppFromTrainerArgs { masterKey: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function borrowAppFromTrainer(tx: Transaction, typeArg: string, args: BorrowAppFromTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::borrow_app_from_trainer`, typeArguments: [typeArg], arguments: [obj(tx, args.masterKey), obj(tx, args.dragonTrainer)], }) }

export interface BorrowFromTrainerArgs { dragonTrainer: TransactionObjectInput; appName: string | TransactionArgument }

export function borrowFromTrainer(tx: Transaction, typeArg: string, args: BorrowFromTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::borrow_from_trainer`, typeArguments: [typeArg], arguments: [obj(tx, args.dragonTrainer), pure(tx, args.appName, `${String.$typeName}`)], }) }

export interface BorrowNonMutStoreFromBeeArgs { mysticalBee: TransactionObjectInput; appName: string | TransactionArgument }

export function borrowNonMutStoreFromBee(tx: Transaction, typeArg: string, args: BorrowNonMutStoreFromBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::borrow_non_mut_store_from_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.mysticalBee), pure(tx, args.appName, `${String1.$typeName}`)], }) }

export interface BorrowStoreFromBeeArgs { masterKey: TransactionObjectInput; mysticalBee: TransactionObjectInput }

export function borrowStoreFromBee(tx: Transaction, typeArg: string, args: BorrowStoreFromBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::borrow_store_from_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.masterKey), obj(tx, args.mysticalBee)], }) }

export interface BreedWithQueenBeeArgs {  random: TransactionObjectInput; yieldFlow: TransactionObjectInput; feeCollector: TransactionObjectInput;  queenVersion: bigint | TransactionArgument; userTrainer: TransactionObjectInput; stingerBeeVersion: bigint | TransactionArgument; payableSui: TransactionObjectInput; suiToUse: bigint | TransactionArgument }

export function breedWithQueenBee(tx: Transaction, args: BreedWithQueenBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::breed_with_queen_bee`, arguments: [obj(tx, CLOCK), obj(tx, args.random), obj(tx, args.yieldFlow), obj(tx, args.feeCollector), obj(tx, BEES_MANAGER), pure(tx, args.queenVersion, `u64`), obj(tx, args.userTrainer), pure(tx, args.stingerBeeVersion, `u64`), obj(tx, args.payableSui), pure(tx, args.suiToUse, `u64`)], }) }

export interface CalculateDragonDustChanceArgs { questsPlayed: bigint | TransactionArgument }

export function calculateDragonDustChance(tx: Transaction, args: CalculateDragonDustChanceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::calculate_dragon_dust_chance`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.questsPlayed, `u64`)], }) }

export interface CalculateMaxMultiplierArgs { dustPct: bigint | TransactionArgument; evolutionLevel: bigint | TransactionArgument }

export function calculateMaxMultiplier(tx: Transaction, args: CalculateMaxMultiplierArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::calculate_max_multiplier`, arguments: [pure(tx, args.dustPct, `u64`), pure(tx, args.evolutionLevel, `u64`)], }) }

export interface CancelActiveTrainerRequestArgs {  dragonTrainer: TransactionObjectInput }

export function cancelActiveTrainerRequest(tx: Transaction, args: CancelActiveTrainerRequestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::cancel_active_trainer_request`, arguments: [obj(tx, HIDDEN_WORLD), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer)], }) }

export interface CancelBidArgs {  dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument }

export function cancelBid(tx: Transaction, args: CancelBidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::cancel_bid`, arguments: [obj(tx, MARKETPLACE), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`)], }) }

export interface CancelListingArgs {  dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument }

export function cancelListing(tx: Transaction, args: CancelListingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::cancel_listing`, arguments: [obj(tx, MARKETPLACE), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`)], }) }

export interface CancelTransferOfBeeArgs {  recepientTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function cancelTransferOfBee(tx: Transaction, args: CancelTransferOfBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::cancel_transfer_of_bee`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.recepientTrainer), pure(tx, args.version, `u64`)], }) }

export interface ChargeMysticalBeeArgs { dragonFoodCap: TransactionObjectInput; mysticalBee: TransactionObjectInput; hiveEnergyToAdd: bigint | TransactionArgument }

export function chargeMysticalBee(tx: Transaction, args: ChargeMysticalBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::charge_mystical_bee`, arguments: [obj(tx, args.dragonFoodCap), obj(tx, args.mysticalBee), pure(tx, args.hiveEnergyToAdd, `u64`)], }) }

export interface ChooseRandomDragonBeeArgs {  random: TransactionObjectInput }

export function chooseRandomDragonBee(tx: Transaction, args: ChooseRandomDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::choose_random_dragon_bee`, arguments: [obj(tx, CLOCK), obj(tx, HIDDEN_WORLD), obj(tx, args.random)], }) }

export interface ChooseRandomTrainerArgs { curTimestamp: bigint | TransactionArgument; random: TransactionObjectInput }

export function chooseRandomTrainer(tx: Transaction, args: ChooseRandomTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::choose_random_trainer`, arguments: [pure(tx, args.curTimestamp, `u64`), obj(tx, HIDDEN_WORLD), obj(tx, args.random)], }) }

export interface ClaimBeeFromIncomingBoxArgs {  recepientTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function claimBeeFromIncomingBox(tx: Transaction, args: ClaimBeeFromIncomingBoxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_bee_from_incoming_box`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.recepientTrainer), pure(tx, args.version, `u64`)], }) }

export interface ClaimGovYieldArgs { bee: TransactionObjectInput }

export function claimGovYield(tx: Transaction, args: ClaimGovYieldArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_gov_yield`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.bee)], }) }

export interface ClaimHiddenWorldRewardsArgs {  trainer: TransactionObjectInput; vecBees: Array<bigint | TransactionArgument> | TransactionArgument }

export function claimHiddenWorldRewards(tx: Transaction, args: ClaimHiddenWorldRewardsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_hidden_world_rewards`, arguments: [obj(tx, CLOCK), obj(tx, HIDDEN_WORLD), obj(tx, args.trainer), pure(tx, args.vecBees, `vector<u64>`)], }) }

export interface ClaimRewardsFromHiddenWorldBeesArgs {  trainerAddress: string | TransactionArgument; vecBees: Array<bigint | TransactionArgument> | TransactionArgument }

export function claimRewardsFromHiddenWorldBees(tx: Transaction, args: ClaimRewardsFromHiddenWorldBeesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_rewards_from_hidden_world_bees`, arguments: [obj(tx, CLOCK), obj(tx, HIDDEN_WORLD), pure(tx, args.trainerAddress, `address`), pure(tx, args.vecBees, `vector<u64>`)], }) }

export interface ClaimSuiFromBeehiveArgs {  queenBee: TransactionObjectInput }

export function claimSuiFromBeehive(tx: Transaction, args: ClaimSuiFromBeehiveArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::claim_sui_from_beehive`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.queenBee)], }) }

export interface ComputeVehiveArgs { lockupWeeks: bigint | TransactionArgument; hiveLockedAmt: bigint | TransactionArgument; evolutionStage: bigint | TransactionArgument }

export function computeVehive(tx: Transaction, args: ComputeVehiveArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::compute_veHive`, arguments: [pure(tx, args.lockupWeeks, `u64`), pure(tx, args.hiveLockedAmt, `u64`), pure(tx, args.evolutionStage, `u64`)], }) }

export interface CreateBidArgs { bidderTrainerAddr: string | TransactionArgument; bidPrice: bigint | TransactionArgument; depositBalance: TransactionObjectInput; expirationSec: bigint | TransactionArgument }

export function createBid(tx: Transaction, args: CreateBidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_bid`, arguments: [pure(tx, args.bidderTrainerAddr, `address`), pure(tx, args.bidPrice, `u64`), obj(tx, args.depositBalance), pure(tx, args.expirationSec, `u64`)], }) }

export interface CreateBidRecordArgs { beeVersion: bigint | TransactionArgument; bidPrice: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument }

export function createBidRecord(tx: Transaction, args: CreateBidRecordArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_bid_record`, arguments: [pure(tx, args.beeVersion, `u64`), pure(tx, args.bidPrice, `u64`), pure(tx, args.expirationSec, `u64`)], }) }

export interface CreateHiddenWorldQuestArgs {  trainerAddr1: string | TransactionArgument; trainerAddr2: string | TransactionArgument; suiBetBal: TransactionObjectInput; startGameHealth: bigint | TransactionArgument; startGameEnergy: bigint | TransactionArgument; userDragonBee: TransactionObjectInput; dragonBee2: TransactionObjectInput }

export function createHiddenWorldQuest(tx: Transaction, args: CreateHiddenWorldQuestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_hidden_world_quest`, arguments: [obj(tx, CLOCK), pure(tx, args.trainerAddr1, `address`), pure(tx, args.trainerAddr2, `address`), obj(tx, args.suiBetBal), pure(tx, args.startGameHealth, `u64`), pure(tx, args.startGameEnergy, `u64`), obj(tx, args.userDragonBee), obj(tx, args.dragonBee2)], }) }

export interface CreateP2pGameSessionArgs {  trainerAddr1: string | TransactionArgument; trainerAddr2: string | TransactionArgument; version1: bigint | TransactionArgument; version2: bigint | TransactionArgument; mysticalBee1: TransactionObjectInput; mysticalBee2: TransactionObjectInput; suiBetBal: TransactionObjectInput; startGameHealth: bigint | TransactionArgument; startGameEnergy: bigint | TransactionArgument }

export function createP2pGameSession(tx: Transaction, args: CreateP2pGameSessionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_p2p_game_session`, arguments: [obj(tx, CLOCK), pure(tx, args.trainerAddr1, `address`), pure(tx, args.trainerAddr2, `address`), pure(tx, args.version1, `u64`), pure(tx, args.version2, `u64`), obj(tx, args.mysticalBee1), obj(tx, args.mysticalBee2), obj(tx, args.suiBetBal), pure(tx, args.startGameHealth, `u64`), pure(tx, args.startGameEnergy, `u64`)], }) }

export interface CreateP2pSessionIdArgs { version1: bigint | TransactionArgument; version2: bigint | TransactionArgument }

export function createP2pSessionId(tx: Transaction, args: CreateP2pSessionIdArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_p2p_session_id`, arguments: [pure(tx, args.version1, `u64`), pure(tx, args.version2, `u64`)], }) }

export function createTrainerSession(tx: Transaction, trainerAddress: string | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::create_trainer_session`, arguments: [pure(tx, trainerAddress, `address`)], }) }

export interface DeleteDragonBeeArgs {  dragonBee: TransactionObjectInput }

export function deleteDragonBee(tx: Transaction, args: DeleteDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::delete_dragon_bee`, arguments: [obj(tx, CLOCK), obj(tx, args.dragonBee)], }) }

export interface DeleteDragonTrainerArgs {  policy: TransactionObjectInput; policyCap: TransactionObjectInput; dragonTrainer: TransactionObjectInput; recepient: string | TransactionArgument }

export function deleteDragonTrainer(tx: Transaction, args: DeleteDragonTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::delete_dragon_trainer`, arguments: [obj(tx, TRAINER_MAPPING_STORE), obj(tx, HIVE_GRAPH), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer), pure(tx, args.recepient, `address`)], }) }

export interface DeleteExpiredTrainerRequestFromListArgs {  dragonTrainerAddr: string | TransactionArgument }

export function deleteExpiredTrainerRequestFromList(tx: Transaction, args: DeleteExpiredTrainerRequestFromListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::delete_expired_trainer_request_from_list`, arguments: [obj(tx, CLOCK), obj(tx, HIDDEN_WORLD), pure(tx, args.dragonTrainerAddr, `address`)], }) }

export interface DeleteHiddenBeeArgs {  version: bigint | TransactionArgument; hiddenBee: TransactionObjectInput }

export function deleteHiddenBee(tx: Transaction, args: DeleteHiddenBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::delete_hidden_bee`, arguments: [obj(tx, CLOCK), obj(tx, HIDDEN_WORLD), pure(tx, args.version, `u64`), obj(tx, args.hiddenBee)], }) }

export interface DepositBeeBackToItsOwnerArgs { recepientTrainer: TransactionObjectInput; bee: TransactionObjectInput }

export function depositBeeBackToItsOwner(tx: Transaction, args: DepositBeeBackToItsOwnerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_bee_back_to_its_owner`, arguments: [obj(tx, args.recepientTrainer), obj(tx, args.bee)], }) }

export interface DepositBeeInTrainerArgs { dragonTrainer: TransactionObjectInput; mysticalBee: TransactionObjectInput }

export function depositBeeInTrainer(tx: Transaction, args: DepositBeeInTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_bee_in_trainer`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.mysticalBee)], }) }

export interface DepositHiveForDistributionArgs { hiveToDeposit: TransactionObjectInput }

export function depositHiveForDistribution(tx: Transaction, args: DepositHiveForDistributionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_hive_for_distribution`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.hiveToDeposit)], }) }

export interface DepositHiveWithDragonEggsBasketArgs {  hiveCoins: TransactionObjectInput; amt: bigint | TransactionArgument }

export function depositHiveWithDragonEggsBasket(tx: Transaction, args: DepositHiveWithDragonEggsBasketArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_hive_with_dragon_eggs_basket`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.hiveCoins), pure(tx, args.amt, `u64`)], }) }

export interface DepositHiveWithTreasuryArgs {  hiveBalance: TransactionObjectInput }

export function depositHiveWithTreasury(tx: Transaction, args: DepositHiveWithTreasuryArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_hive_with_treasury`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.hiveBalance)], }) }

export interface DepositHoneyForDistributionArgs { honeyToDeposit: TransactionObjectInput }

export function depositHoneyForDistribution(tx: Transaction, args: DepositHoneyForDistributionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_for_distribution`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.honeyToDeposit)], }) }

export interface DepositHoneyInDragonSchoolArgs { school: TransactionObjectInput; honeyToDeposit: TransactionObjectInput }

export function depositHoneyInDragonSchool(tx: Transaction, args: DepositHoneyInDragonSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_in_dragon_school`, arguments: [obj(tx, args.school), obj(tx, args.honeyToDeposit)], }) }

export interface DepositHoneyInTrainerArgs { dragonTrainer: TransactionObjectInput; honeyToDeposit: TransactionObjectInput }

export function depositHoneyInTrainer(tx: Transaction, args: DepositHoneyInTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_in_trainer`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.honeyToDeposit)], }) }

export interface DepositHoneyTokensForDistributionArgs { policyCap: TransactionObjectInput; policy: TransactionObjectInput; honeyToDeposit: TransactionObjectInput; depositAmount: bigint | TransactionArgument }

export function depositHoneyTokensForDistribution(tx: Transaction, args: DepositHoneyTokensForDistributionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_tokens_for_distribution`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.policyCap), obj(tx, args.policy), obj(tx, args.honeyToDeposit), pure(tx, args.depositAmount, `u64`)], }) }

export interface DepositHoneyWithDragonEggsBasketArgs {  honeyBalance: TransactionObjectInput }

export function depositHoneyWithDragonEggsBasket(tx: Transaction, args: DepositHoneyWithDragonEggsBasketArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_with_dragon_eggs_basket`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.honeyBalance)], }) }

export interface DepositHoneyWithTreasuryArgs {  honeyBalance: TransactionObjectInput }

export function depositHoneyWithTreasury(tx: Transaction, args: DepositHoneyWithTreasuryArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::deposit_honey_with_treasury`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.honeyBalance)], }) }

export interface DestroyBidArgs { bid: TransactionObjectInput; beeVersion: bigint | TransactionArgument }

export function destroyBid(tx: Transaction, args: DestroyBidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_bid`, arguments: [obj(tx, args.bid), pure(tx, args.beeVersion, `u64`)], }) }

export interface DestroyBidAmongBidsArgs { allBids: Array<TransactionObjectInput> | TransactionArgument; bidderTrainerAddr: string | TransactionArgument; onlyIfInvalid: boolean | TransactionArgument; beeVersion: bigint | TransactionArgument }

export function destroyBidAmongBids(tx: Transaction, args: DestroyBidAmongBidsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_bid_among_bids`, arguments: [vector(tx, `${Bid.$typeName}`, args.allBids), pure(tx, args.bidderTrainerAddr, `address`), pure(tx, args.onlyIfInvalid, `bool`), pure(tx, args.beeVersion, `u64`)], }) }

export function destroyBidRecord(tx: Transaction, bidRecord: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_bid_record`, arguments: [obj(tx, bidRecord)], }) }

export function destroyListing(tx: Transaction, listing: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_listing`, arguments: [obj(tx, listing)], }) }

export function destroyListingRecord(tx: Transaction, listingRecord: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::destroy_listing_record`, arguments: [obj(tx, listingRecord)], }) }

export interface DoesDappNameExistArgs {  dappName: string | TransactionArgument }

export function doesDappNameExist(tx: Transaction, args: DoesDappNameExistArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::does_dapp_name_exist`, arguments: [obj(tx, TRAINER_MAPPING_STORE), pure(tx, args.dappName, `${String.$typeName}`)], }) }

export interface DoesTrainerOwnsBeeArgs { dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument }

export function doesTrainerOwnsBee(tx: Transaction, args: DoesTrainerOwnsBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::does_trainer_owns_bee`, arguments: [obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`)], }) }

export interface DragonFoodClaimGovYieldArgs { dragonFoodCap: TransactionObjectInput; dragonBee: TransactionObjectInput }

export function dragonFoodClaimGovYield(tx: Transaction, args: DragonFoodClaimGovYieldArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::dragon_food_claim_gov_yield`, arguments: [obj(tx, args.dragonFoodCap), obj(tx, YIELD_FARM), obj(tx, args.dragonBee)], }) }

export interface DragonFoodDepositBeeArgs { cap: TransactionObjectInput;  dragonTrainer: TransactionObjectInput; bee: TransactionObjectInput }

export function dragonFoodDepositBee(tx: Transaction, args: DragonFoodDepositBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::dragon_food_deposit_bee`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), obj(tx, args.bee)], }) }

export interface DragonFoodInfuseBeeWithEnergyArgs { dragonFoodCap: TransactionObjectInput;  mysticalBee: TransactionObjectInput; hiveBalanceToAdd: TransactionObjectInput }

export function dragonFoodInfuseBeeWithEnergy(tx: Transaction, args: DragonFoodInfuseBeeWithEnergyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::dragon_food_infuse_bee_with_energy`, arguments: [obj(tx, args.dragonFoodCap), obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.mysticalBee), obj(tx, args.hiveBalanceToAdd)], }) }

export interface DragonFoodInfuseBeeWithHealthArgs { dragonFoodCap: TransactionObjectInput;  mysticalBee: TransactionObjectInput; honeyBalanceToAdd: TransactionObjectInput }

export function dragonFoodInfuseBeeWithHealth(tx: Transaction, args: DragonFoodInfuseBeeWithHealthArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::dragon_food_infuse_bee_with_health`, arguments: [obj(tx, args.dragonFoodCap), obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.mysticalBee), obj(tx, args.honeyBalanceToAdd)], }) }

export interface EmitDragonDustArgs { random: TransactionObjectInput; currentQuest: TransactionObjectInput; checkVersion1: boolean | TransactionArgument; suiBetAmt: bigint | TransactionArgument }

export function emitDragonDust(tx: Transaction, args: EmitDragonDustArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::emit_dragon_dust`, arguments: [obj(tx, HIDDEN_WORLD), obj(tx, args.random), obj(tx, args.currentQuest), pure(tx, args.checkVersion1, `bool`), pure(tx, args.suiBetAmt, `u64`)], }) }

export interface EngageHiddenWorldQuestArgs {  random: TransactionObjectInput;  dragonTrainer: TransactionObjectInput; usePower: number | TransactionArgument }

export function engageHiddenWorldQuest(tx: Transaction, args: EngageHiddenWorldQuestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::engage_hidden_world_quest`, arguments: [obj(tx, CLOCK), obj(tx, args.random), obj(tx, BEES_MANAGER), obj(tx, HIDDEN_WORLD), obj(tx, args.dragonTrainer), pure(tx, args.usePower, `u8`)], }) }

export interface EntryAddBeeFriendsForBreedingArgs {  userTrainer: TransactionObjectInput; queenBeeVersion: bigint | TransactionArgument; friendlyBee: bigint | TransactionArgument; newPrice: bigint | TransactionArgument }

export function entryAddBeeFriendsForBreeding(tx: Transaction, args: EntryAddBeeFriendsForBreedingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_add_bee_friends_for_breeding`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.userTrainer), pure(tx, args.queenBeeVersion, `u64`), pure(tx, args.friendlyBee, `u64`), pure(tx, args.newPrice, `u64`)], }) }

export interface EntryClaimSuiFromBeehiveArgs {  dragonTrainer: TransactionObjectInput; queenBeeVersion: bigint | TransactionArgument }

export function entryClaimSuiFromBeehive(tx: Transaction, args: EntryClaimSuiFromBeehiveArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_claim_sui_from_beehive`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.queenBeeVersion, `u64`)], }) }

export interface EntryDepositHoneyInDragonSchoolArgs { school: TransactionObjectInput; policy: TransactionObjectInput; policyCap: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyToAddAmt: bigint | TransactionArgument }

export function entryDepositHoneyInDragonSchool(tx: Transaction, args: EntryDepositHoneyInDragonSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_deposit_honey_in_dragon_school`, arguments: [obj(tx, args.school), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAddAmt, `u64`)], }) }

export interface EntryDepositHoneyInTrainerArgs { dragonTrainer: TransactionObjectInput; policy: TransactionObjectInput; policyCap: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyToAddAmt: bigint | TransactionArgument }

export function entryDepositHoneyInTrainer(tx: Transaction, args: EntryDepositHoneyInTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_deposit_honey_in_trainer`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAddAmt, `u64`)], }) }

export interface EntryRemoveBeeFriendsForBreedingArgs {  userTrainer: TransactionObjectInput; queenBeeVersion: bigint | TransactionArgument; friendlyBee: bigint | TransactionArgument }

export function entryRemoveBeeFriendsForBreeding(tx: Transaction, args: EntryRemoveBeeFriendsForBreedingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_remove_bee_friends_for_breeding`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.userTrainer), pure(tx, args.queenBeeVersion, `u64`), pure(tx, args.friendlyBee, `u64`)], }) }

export interface EntryUpdatePricingForBreedingArgs {  userTrainer: TransactionObjectInput; version: bigint | TransactionArgument; isActive: boolean | TransactionArgument; basePrice: bigint | TransactionArgument; curveA: bigint | TransactionArgument }

export function entryUpdatePricingForBreeding(tx: Transaction, args: EntryUpdatePricingForBreedingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::entry_update_pricing_for_breeding`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.userTrainer), pure(tx, args.version, `u64`), pure(tx, args.isActive, `bool`), pure(tx, args.basePrice, `u64`), pure(tx, args.curveA, `u64`)], }) }

export interface EvolveBeePowersArgs {  mysticalBee: TransactionObjectInput; generator: TransactionObjectInput; maxCapabilityIncrease: bigint | TransactionArgument; maxPowerPct: bigint | TransactionArgument; evolutionStage: bigint | TransactionArgument }

export function evolveBeePowers(tx: Transaction, args: EvolveBeePowersArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::evolve_bee_powers`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.mysticalBee), obj(tx, args.generator), pure(tx, args.maxCapabilityIncrease, `u64`), pure(tx, args.maxPowerPct, `u64`), pure(tx, args.evolutionStage, `u64`)], }) }

export interface EvolveDragonBeeArgs {  newGenerator: TransactionObjectInput; dragonBee: TransactionObjectInput }

export function evolveDragonBee(tx: Transaction, args: EvolveDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::evolve_dragon_bee`, arguments: [obj(tx, BEES_MANAGER), obj(tx, HIDDEN_WORLD), obj(tx, args.newGenerator), obj(tx, args.dragonBee)], }) }

export interface EvolvedGeneGeneratorArgs { generator: TransactionObjectInput; genes: bigint | TransactionArgument }

export function evolvedGeneGenerator(tx: Transaction, args: EvolvedGeneGeneratorArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::evolved_gene_generator`, arguments: [obj(tx, args.generator), pure(tx, args.genes, `u256`)], }) }

export interface ExecuteSaleArgs {   feeCollector: TransactionObjectInput; beeVersion: bigint | TransactionArgument; bidToDelete: boolean | TransactionArgument; bidderTrainerAddr: string | TransactionArgument; purchasePrice: bigint | TransactionArgument; availBalance: TransactionObjectInput }

export function executeSale(tx: Transaction, args: ExecuteSaleArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::execute_sale`, arguments: [obj(tx, BEES_MANAGER), obj(tx, MARKETPLACE), obj(tx, args.feeCollector), pure(tx, args.beeVersion, `u64`), pure(tx, args.bidToDelete, `bool`), pure(tx, args.bidderTrainerAddr, `address`), pure(tx, args.purchasePrice, `u64`), obj(tx, args.availBalance)], }) }

export interface ExistsForTrainerArgs { dragonTrainer: TransactionObjectInput; appName: string | TransactionArgument }

export function existsForTrainer(tx: Transaction, args: ExistsForTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::exists_for_trainer`, arguments: [obj(tx, args.dragonTrainer), pure(tx, args.appName, `${String.$typeName}`)], }) }

export interface FollowTrainerArgs {  myTrainer: TransactionObjectInput; profileToFollowAddr: string | TransactionArgument }

export function followTrainer(tx: Transaction, args: FollowTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::follow_trainer`, arguments: [obj(tx, HIVE_GRAPH), obj(tx, args.myTrainer), pure(tx, args.profileToFollowAddr, `address`)], }) }

export interface FollowTrainerAndReturnArgs {  myTrainer: TransactionObjectInput; profileToFollowAddr: string | TransactionArgument }

export function followTrainerAndReturn(tx: Transaction, args: FollowTrainerAndReturnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::follow_trainer_and_return`, arguments: [obj(tx, HIVE_GRAPH), obj(tx, args.myTrainer), pure(tx, args.profileToFollowAddr, `address`)], }) }

export interface FreeExpiredSuinsDomainUsernameArgs {  suinsDomainName: string | TransactionArgument }

export function freeExpiredSuinsDomainUsername(tx: Transaction, args: FreeExpiredSuinsDomainUsernameArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::free_expired_suins_domain_username`, arguments: [obj(tx, CLOCK), obj(tx, TRAINER_MAPPING_STORE), pure(tx, args.suinsDomainName, `${String.$typeName}`)], }) }

export interface GameMasterAddsHoneyToTrainerViaBeeArgs { cap: TransactionObjectInput;  dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument; honeyToDeposit: bigint | TransactionArgument }

export function gameMasterAddsHoneyToTrainerViaBee(tx: Transaction, args: GameMasterAddsHoneyToTrainerViaBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_adds_honey_to_trainer_via_bee`, arguments: [obj(tx, args.cap), obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`), pure(tx, args.honeyToDeposit, `u64`)], }) }

export interface GameMasterBeesAttackArgs { gameMaster: TransactionObjectInput;  attackerBee: TransactionObjectInput; defenderBee: TransactionObjectInput; sessionEnergy: bigint | TransactionArgument; sessionHealth: bigint | TransactionArgument; capSlot: bigint | TransactionArgument }

export function gameMasterBeesAttack(tx: Transaction, args: GameMasterBeesAttackArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_bees_attack`, arguments: [obj(tx, args.gameMaster), obj(tx, CLOCK), obj(tx, args.attackerBee), obj(tx, args.defenderBee), pure(tx, args.sessionEnergy, `u64`), pure(tx, args.sessionHealth, `u64`), pure(tx, args.capSlot, `u64`)], }) }

export interface GameMasterClaimHiddenWorldRewardsArgs { masterKey: TransactionObjectInput;  vecBees: Array<bigint | TransactionArgument> | TransactionArgument }

export function gameMasterClaimHiddenWorldRewards(tx: Transaction, args: GameMasterClaimHiddenWorldRewardsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_claim_hidden_world_rewards`, arguments: [obj(tx, args.masterKey), obj(tx, CLOCK), obj(tx, HIDDEN_WORLD), pure(tx, args.vecBees, `vector<u64>`)], }) }

export interface GameMasterDepositBeeArgs { cap: TransactionObjectInput;  dragonTrainer: TransactionObjectInput; bee: TransactionObjectInput }

export function gameMasterDepositBee(tx: Transaction, args: GameMasterDepositBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_deposit_bee`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), obj(tx, args.bee)], }) }

export interface GameMasterInfusesBeeWithEnergyArgs { cap: TransactionObjectInput;  bee: TransactionObjectInput; hiveToLock: bigint | TransactionArgument; lockupWeeks: bigint | TransactionArgument }

export function gameMasterInfusesBeeWithEnergy(tx: Transaction, args: GameMasterInfusesBeeWithEnergyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_infuses_bee_with_energy`, arguments: [obj(tx, args.cap), obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.bee), pure(tx, args.hiveToLock, `u64`), pure(tx, args.lockupWeeks, `u64`)], }) }

export interface GameMasterInfusesBeeWithHealthArgs { cap: TransactionObjectInput;  bee: TransactionObjectInput; honeyToLock: bigint | TransactionArgument }

export function gameMasterInfusesBeeWithHealth(tx: Transaction, args: GameMasterInfusesBeeWithHealthArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_infuses_bee_with_health`, arguments: [obj(tx, args.cap), obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.bee), pure(tx, args.honeyToLock, `u64`)], }) }

export interface GameMasterSendToHiddenWorldArgs { cap: TransactionObjectInput;   mysticalBee: TransactionObjectInput }

export function gameMasterSendToHiddenWorld(tx: Transaction, args: GameMasterSendToHiddenWorldArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_send_to_hidden_world`, arguments: [obj(tx, args.cap), obj(tx, CLOCK), obj(tx, BEES_MANAGER), obj(tx, HIDDEN_WORLD), obj(tx, YIELD_FARM), obj(tx, args.mysticalBee)], }) }

export interface GameMasterWithdrawBeeArgs { cap: TransactionObjectInput;  dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument }

export function gameMasterWithdrawBee(tx: Transaction, args: GameMasterWithdrawBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_withdraw_bee`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`)], }) }

export interface GameMasterWithdrawsHiveFromBeeArgs { cap: TransactionObjectInput;  bee: TransactionObjectInput }

export function gameMasterWithdrawsHiveFromBee(tx: Transaction, args: GameMasterWithdrawsHiveFromBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::game_master_withdraws_hive_from_bee`, arguments: [obj(tx, args.cap), obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.bee)], }) }

export interface GetAccruedYieldForBeeArgs { bee: TransactionObjectInput }

export function getAccruedYieldForBee(tx: Transaction, args: GetAccruedYieldForBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_accrued_yield_for_bee`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.bee)], }) }

export interface GetAccruedYieldForListedBeeArgs {  version: bigint | TransactionArgument }

export function getAccruedYieldForListedBee(tx: Transaction, args: GetAccruedYieldForListedBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_accrued_yield_for_listed_bee`, arguments: [obj(tx, YIELD_FARM), obj(tx, MARKETPLACE), pure(tx, args.version, `u64`)], }) }

export interface GetAccruedYieldForOwnedBeeArgs { dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function getAccruedYieldForOwnedBee(tx: Transaction, args: GetAccruedYieldForOwnedBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_accrued_yield_for_owned_bee`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export function getActiveTrainersIndexes(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_active_trainers_indexes`, arguments: [obj(tx, HIDDEN_WORLD)], }) }

export interface GetAllOwnersAndTrainersListArgs { tableStore: TransactionObjectInput; owner: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllOwnersAndTrainersList(tx: Transaction, args: GetAllOwnersAndTrainersListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_all_owners_and_trainers_list`, arguments: [obj(tx, args.tableStore), pure(tx, args.owner, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`)], }) }

export interface GetAllSupportedAppsAndCapabilitiesArgs { tableStore: TransactionObjectInput; appName: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllSupportedAppsAndCapabilities(tx: Transaction, args: GetAllSupportedAppsAndCapabilitiesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_all_supported_apps_and_capabilities`, arguments: [obj(tx, args.tableStore), pure(tx, args.appName, `${Option.$typeName}<${String.$typeName}>`), pure(tx, args.limit, `u64`)], }) }

export interface GetAllUsernamesAndCompTrainersListArgs { tableStore: TransactionObjectInput; username: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllUsernamesAndCompTrainersList(tx: Transaction, args: GetAllUsernamesAndCompTrainersListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_all_usernames_and_comp_trainers_list`, arguments: [obj(tx, args.tableStore), pure(tx, args.username, `${Option.$typeName}<${String1.$typeName}>`), pure(tx, args.limit, `u64`)], }) }

export interface GetAllUsernamesAndTrainersListArgs { tableStore: TransactionObjectInput; username: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getAllUsernamesAndTrainersList(tx: Transaction, args: GetAllUsernamesAndTrainersListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_all_usernames_and_trainers_list`, arguments: [obj(tx, args.tableStore), pure(tx, args.username, `${Option.$typeName}<${String1.$typeName}>`), pure(tx, args.limit, `u64`)], }) }

export function getAppearance(tx: Transaction, bee: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_appearance`, arguments: [obj(tx, bee)], }) }

export function getAvailableHiveInSchool(tx: Transaction, dragonSchool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_available_hive_in_school`, arguments: [obj(tx, dragonSchool)], }) }

export function getAvailableHoney(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_available_honey`, arguments: [obj(tx, dragonTrainer)], }) }

export function getAvailableHoneyInSchool(tx: Transaction, dragonSchool: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_available_honey_in_school`, arguments: [obj(tx, dragonSchool)], }) }

export function getAvailableSui(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_available_sui`, arguments: [obj(tx, dragonTrainer)], }) }

export interface GetBeeEggContentArgs {  hiveId: bigint | TransactionArgument; eggId: bigint | TransactionArgument }

export function getBeeEggContent(tx: Transaction, args: GetBeeEggContentArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_egg_content`, arguments: [obj(tx, BEES_MANAGER), pure(tx, args.hiveId, `u64`), pure(tx, args.eggId, `u64`)], }) }

export function getBeeFamily(tx: Transaction, bee: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_family`, arguments: [obj(tx, bee)], }) }

export interface GetBeeForQueenCompetitionArgs { treasuryCap: TransactionObjectInput;  appAddr: string | TransactionArgument; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function getBeeForQueenCompetition(tx: Transaction, args: GetBeeForQueenCompetitionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_for_queen_competition`, arguments: [obj(tx, args.treasuryCap), obj(tx, BEES_MANAGER), pure(tx, args.appAddr, `address`), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export function getBeeInfo(tx: Transaction, bee: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_info`, arguments: [obj(tx, bee)], }) }

export interface GetBeeTrainerArgs {  version: bigint | TransactionArgument }

export function getBeeTrainer(tx: Transaction, args: GetBeeTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_trainer`, arguments: [obj(tx, BEES_MANAGER), pure(tx, args.version, `u64`)], }) }

export function getBeeVersion(tx: Transaction, bee: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bee_version`, arguments: [obj(tx, bee)], }) }

export interface GetBeehiveContentArgs {  queenVersion: bigint | TransactionArgument }

export function getBeehiveContent(tx: Transaction, args: GetBeehiveContentArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_beehive_content`, arguments: [obj(tx, BEES_MANAGER), pure(tx, args.queenVersion, `u64`)], }) }

export function getBeesManagerParamsInfo(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bees_manager_params_info`, arguments: [obj(tx, BEES_MANAGER)], }) }

export interface GetBeesToCollectListArgs { trainerAddress: string | TransactionArgument }

export function getBeesToCollectList(tx: Transaction, args: GetBeesToCollectListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bees_to_collect_list`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.trainerAddress, `address`)], }) }

export interface GetBidRecordArgs { dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function getBidRecord(tx: Transaction, args: GetBidRecordArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bid_record`, arguments: [obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export function getBidRecords(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bid_records`, arguments: [obj(tx, dragonTrainer)], }) }

export interface GetBidsForListingArgs {  version: bigint | TransactionArgument; startFromIndex: (bigint | TransactionArgument | TransactionArgument | null); count: bigint | TransactionArgument }

export function getBidsForListing(tx: Transaction, args: GetBidsForListingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_bids_for_listing`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.version, `u64`), pure(tx, args.startFromIndex, `${Option.$typeName}<u64>`), pure(tx, args.count, `u64`)], }) }

export function getBreedingRoyaltyInfo(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_breeding_royalty_info`, arguments: [obj(tx, BEES_MANAGER)], }) }

export interface GetCapabilityStateArgs { mysticalBee: TransactionObjectInput; slot: number | TransactionArgument }

export function getCapabilityState(tx: Transaction, args: GetCapabilityStateArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_capability_state`, arguments: [obj(tx, args.mysticalBee), pure(tx, args.slot, `u8`)], }) }

export interface GetCurrentTurnArgs { nextTurn: bigint | TransactionArgument; currentTimestamp: bigint | TransactionArgument; lastActionTs: bigint | TransactionArgument; turnDuration: bigint | TransactionArgument }

export function getCurrentTurn(tx: Transaction, args: GetCurrentTurnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_current_turn`, arguments: [pure(tx, args.nextTurn, `u64`), pure(tx, args.currentTimestamp, `u64`), pure(tx, args.lastActionTs, `u64`), pure(tx, args.turnDuration, `u64`)], }) }

export function getDragonBeePower(tx: Transaction, mysticalBee: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_bee_power`, arguments: [obj(tx, mysticalBee)], }) }

export interface GetDragonDustInfoArgs { version: bigint | TransactionArgument }

export function getDragonDustInfo(tx: Transaction, args: GetDragonDustInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_dust_info`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.version, `u64`)], }) }

export interface GetDragonEggsBasketContentArgs {  basketId: bigint | TransactionArgument }

export function getDragonEggsBasketContent(tx: Transaction, args: GetDragonEggsBasketContentArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_eggs_basket_content`, arguments: [obj(tx, BEES_MANAGER), pure(tx, args.basketId, `u64`)], }) }

export function getDragonSchoolMetaInfo(tx: Transaction, profile: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_school_meta_info`, arguments: [obj(tx, profile)], }) }

export interface GetDragonTrainersListArgs {  version: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getDragonTrainersList(tx: Transaction, args: GetDragonTrainersListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_dragon_trainers_list`, arguments: [obj(tx, BEES_MANAGER), pure(tx, args.version, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`)], }) }

export function getEggsInfoForBee(tx: Transaction, bee: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_eggs_info_for_bee`, arguments: [obj(tx, bee)], }) }

export function getEvolutionMultiplier(tx: Transaction, evolutionStage: number | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_evolution_multiplier`, arguments: [pure(tx, evolutionStage, `u8`)], }) }

export interface GetExecutedListingInfoArgs {  version: bigint | TransactionArgument }

export function getExecutedListingInfo(tx: Transaction, args: GetExecutedListingInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_executed_listing_info`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.version, `u64`)], }) }

export interface GetFollowersAndFollowingLengthArgs {  dragonTrainerAddr: string | TransactionArgument }

export function getFollowersAndFollowingLength(tx: Transaction, args: GetFollowersAndFollowingLengthArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_followers_and_following_length`, arguments: [obj(tx, HIVE_GRAPH), pure(tx, args.dragonTrainerAddr, `address`)], }) }

export interface GetFollowersListArgs {  dragonTrainerAddr: string | TransactionArgument; subscriber: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getFollowersList(tx: Transaction, args: GetFollowersListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_followers_list`, arguments: [obj(tx, HIVE_GRAPH), pure(tx, args.dragonTrainerAddr, `address`), pure(tx, args.subscriber, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`)], }) }

export interface GetFollowingListArgs {  dragonTrainerAddr: string | TransactionArgument; subscribedTo: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getFollowingList(tx: Transaction, args: GetFollowingListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_following_list`, arguments: [obj(tx, HIVE_GRAPH), pure(tx, args.dragonTrainerAddr, `address`), pure(tx, args.subscribedTo, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`)], }) }

export interface GetHiddenMysticalBeeInfoArgs { version: bigint | TransactionArgument }

export function getHiddenMysticalBeeInfo(tx: Transaction, args: GetHiddenMysticalBeeInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_hidden_mystical_bee_info`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.version, `u64`)], }) }

export interface GetHiddenMysticalBeesInfoArgs { versions: Array<bigint | TransactionArgument> | TransactionArgument }

export function getHiddenMysticalBeesInfo(tx: Transaction, args: GetHiddenMysticalBeesInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_hidden_mystical_bees_info`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.versions, `vector<u64>`)], }) }

export interface GetHiddenWorldVersionListArgs { listIndex: bigint | TransactionArgument }

export function getHiddenWorldVersionList(tx: Transaction, args: GetHiddenWorldVersionListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_hidden_world_version_list`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.listIndex, `u64`)], }) }

export interface GetListedBeeEggsInfoArgs {  version: bigint | TransactionArgument }

export function getListedBeeEggsInfo(tx: Transaction, args: GetListedBeeEggsInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listed_bee_eggs_info`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.version, `u64`)], }) }

export interface GetListedBeeInfoArgs {  version: bigint | TransactionArgument }

export function getListedBeeInfo(tx: Transaction, args: GetListedBeeInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listed_bee_info`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.version, `u64`)], }) }

export interface GetListedBeesInMarketplaceArgs {  startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getListedBeesInMarketplace(tx: Transaction, args: GetListedBeesInMarketplaceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listed_bees_in_marketplace`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`)], }) }

export interface GetListingFromMarketplaceArgs {  version: bigint | TransactionArgument }

export function getListingFromMarketplace(tx: Transaction, args: GetListingFromMarketplaceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listing_from_marketplace`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.version, `u64`)], }) }

export interface GetListingRecordArgs { dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function getListingRecord(tx: Transaction, args: GetListingRecordArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listing_record`, arguments: [obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export function getListingRecords(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_listing_records`, arguments: [obj(tx, dragonTrainer)], }) }

export function getLockedAssets(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_locked_assets`, arguments: [obj(tx, dragonTrainer)], }) }

export interface GetLockedBeesPaginatedArgs { dragonTrainer: TransactionObjectInput; limit: bigint | TransactionArgument; cursor: (bigint | TransactionArgument | TransactionArgument | null) }

export function getLockedBeesPaginated(tx: Transaction, args: GetLockedBeesPaginatedArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_locked_bees_paginated`, arguments: [obj(tx, args.dragonTrainer), pure(tx, args.limit, `u64`), pure(tx, args.cursor, `${Option.$typeName}<u64>`)], }) }

export function getMasterKeyInfo(tx: Transaction, appMasterKey: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_master_key_info`, arguments: [obj(tx, appMasterKey)], }) }

export function getMysticalBeeInfoWithPower(tx: Transaction, mysticalBee: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_mystical_bee_info_with_power`, arguments: [obj(tx, mysticalBee)], }) }

export interface GetOwnedBeeEggsInfoArgs { profile: TransactionObjectInput; version: bigint | TransactionArgument }

export function getOwnedBeeEggsInfo(tx: Transaction, args: GetOwnedBeeEggsInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_owned_bee_eggs_info`, arguments: [obj(tx, args.profile), pure(tx, args.version, `u64`)], }) }

export interface GetOwnedBeeInfoArgs { profile: TransactionObjectInput; version: bigint | TransactionArgument }

export function getOwnedBeeInfo(tx: Transaction, args: GetOwnedBeeInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_owned_bee_info`, arguments: [obj(tx, args.profile), pure(tx, args.version, `u64`)], }) }

export function getOwnedBees(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_owned_bees`, arguments: [obj(tx, dragonTrainer)], }) }

export interface GetP2pGameSessionInfoArgs { gameId: string | TransactionArgument }

export function getP2pGameSessionInfo(tx: Transaction, args: GetP2pGameSessionInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_p2p_game_session_info`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.gameId, `${String1.$typeName}`)], }) }

export interface GetPaginatedActiveTrainersListArgs { startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getPaginatedActiveTrainersList(tx: Transaction, args: GetPaginatedActiveTrainersListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_paginated_active_trainers_list`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`)], }) }

export interface GetPricesForDragonbeeEggsArgs {  beeManager: TransactionObjectInput; userTrainerAddr: string | TransactionArgument; genesisEggsToLay: bigint | TransactionArgument }

export function getPricesForDragonbeeEggs(tx: Transaction, args: GetPricesForDragonbeeEggsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_prices_for_dragonbee_eggs`, arguments: [obj(tx, CLOCK), obj(tx, args.beeManager), pure(tx, args.userTrainerAddr, `address`), pure(tx, args.genesisEggsToLay, `u64`)], }) }

export interface GetProcessedListingsListArgs {  startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getProcessedListingsList(tx: Transaction, args: GetProcessedListingsListArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_processed_listings_list`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`)], }) }

export interface GetQuestRequestInfoArgs { trainerAddress: string | TransactionArgument }

export function getQuestRequestInfo(tx: Transaction, args: GetQuestRequestInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_quest_request_info`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.trainerAddress, `address`)], }) }

export function getRoyaltyInfo(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_royalty_info`, arguments: [obj(tx, BEES_MANAGER)], }) }

export function getTrainerAddr(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_addr`, arguments: [obj(tx, dragonTrainer)], }) }

export interface GetTrainerForUsernameArgs {  username: string | TransactionArgument }

export function getTrainerForUsername(tx: Transaction, args: GetTrainerForUsernameArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_for_username`, arguments: [obj(tx, TRAINER_MAPPING_STORE), pure(tx, args.username, `${String1.$typeName}`)], }) }

export function getTrainerInfo(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_info`, arguments: [obj(tx, dragonTrainer)], }) }

export interface GetTrainerInfoWithPowerArgs { dragonTrainer: TransactionObjectInput }

export function getTrainerInfoWithPower(tx: Transaction, args: GetTrainerInfoWithPowerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_info_with_power`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer)], }) }

export function getTrainerInscription(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_inscription`, arguments: [obj(tx, dragonTrainer)], }) }

export function getTrainerJoinedAt(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_joined_at`, arguments: [obj(tx, dragonTrainer)], }) }

export function getTrainerMetaInfo(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_meta_info`, arguments: [obj(tx, dragonTrainer)], }) }

export function getTrainerOwner(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_owner`, arguments: [obj(tx, dragonTrainer)], }) }

export interface GetTrainerSessionInfoArgs { trainerAddress: string | TransactionArgument }

export function getTrainerSessionInfo(tx: Transaction, args: GetTrainerSessionInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_session_info`, arguments: [obj(tx, HIDDEN_WORLD), pure(tx, args.trainerAddress, `address`)], }) }

export function getTrainerSessions(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_sessions`, arguments: [obj(tx, dragonTrainer)], }) }

export function getTrainerUsername(tx: Transaction, dragonTrainer: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_trainer_username`, arguments: [obj(tx, dragonTrainer)], }) }

export function getTreasuryInfo(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_treasury_info`, arguments: [obj(tx, BEES_MANAGER)], }) }

export function getYieldFarmInfo(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::get_yield_farm_info`, arguments: [obj(tx, YIELD_FARM)], }) }

export interface HandleExpiredListingsArgs {   dragonTrainer: TransactionObjectInput }

export function handleExpiredListings(tx: Transaction, args: HandleExpiredListingsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::handle_expired_listings`, arguments: [obj(tx, CLOCK), obj(tx, MARKETPLACE), obj(tx, args.dragonTrainer)], }) }

export interface HandleExpiredMarketplaceBidsArgs {   dragonTrainer: TransactionObjectInput }

export function handleExpiredMarketplaceBids(tx: Transaction, args: HandleExpiredMarketplaceBidsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::handle_expired_marketplace_bids`, arguments: [obj(tx, CLOCK), obj(tx, MARKETPLACE), obj(tx, args.dragonTrainer)], }) }

export interface HandleProcessedListingArgs {   userDragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument }

export function handleProcessedListing(tx: Transaction, args: HandleProcessedListingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::handle_processed_listing`, arguments: [obj(tx, BEES_MANAGER), obj(tx, MARKETPLACE), obj(tx, args.userDragonTrainer), pure(tx, args.beeVersion, `u64`)], }) }

export interface HandleSuiBetArgs { yieldFlow: TransactionObjectInput; suiBet1: TransactionObjectInput; suiBet2: TransactionObjectInput }

export function handleSuiBet(tx: Transaction, args: HandleSuiBetArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::handle_sui_bet`, arguments: [obj(tx, HIDDEN_WORLD), obj(tx, args.yieldFlow), obj(tx, args.suiBet1), obj(tx, args.suiBet2)], }) }

export interface HarvestRoyaltyYieldForBuildersArgs { kraftYieldClaimCap: TransactionObjectInput;  recepientAddr: string | TransactionArgument }

export function harvestRoyaltyYieldForBuilders(tx: Transaction, args: HarvestRoyaltyYieldForBuildersArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::harvest_royalty_yield_for_builders`, arguments: [obj(tx, args.kraftYieldClaimCap), obj(tx, BEES_MANAGER), pure(tx, args.recepientAddr, `address`)], }) }

export interface HarvestYieldFromBeesArgs {  dragonTrainer: TransactionObjectInput; policy: TransactionObjectInput; policyCap: TransactionObjectInput }

export function harvestYieldFromBees(tx: Transaction, args: HarvestYieldFromBeesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::harvest_yield_from_bees`, arguments: [obj(tx, BEES_MANAGER), obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer), obj(tx, args.policy), obj(tx, args.policyCap)], }) }

export interface HarvestYieldFromBeesAndReturnArgs {  dragonTrainer: TransactionObjectInput; policy: TransactionObjectInput; policyCap: TransactionObjectInput }

export function harvestYieldFromBeesAndReturn(tx: Transaction, args: HarvestYieldFromBeesAndReturnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::harvest_yield_from_bees_and_return`, arguments: [obj(tx, BEES_MANAGER), obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer), obj(tx, args.policy), obj(tx, args.policyCap)], }) }

export interface HatchDragonEggArgs {  dragonTrainer: TransactionObjectInput; eggVersion: bigint | TransactionArgument }

export function hatchDragonEgg(tx: Transaction, args: HatchDragonEggArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::hatch_dragon_egg`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.eggVersion, `u64`)], }) }

export interface IdForDofOfTrainerArgs { dragonTrainer: TransactionObjectInput; appName: string | TransactionArgument }

export function idForDofOfTrainer(tx: Transaction, args: IdForDofOfTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::id_for_dof_of_trainer`, arguments: [obj(tx, args.dragonTrainer), pure(tx, args.appName, `${String.$typeName}`)], }) }

export function incrementBeesManager(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_bees_manager`, arguments: [obj(tx, BEES_MANAGER)], }) }

export function incrementDegenhiveMapStore(tx: Transaction ) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_degenhive_map_store`, arguments: [obj(tx, TRAINER_MAPPING_STORE)], }) }

export function incrementGlobalYieldIndexes(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_global_yield_indexes`, arguments: [obj(tx, YIELD_FARM)], }) }

export function incrementHiddenWorld(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_hidden_world`, arguments: [obj(tx, HIDDEN_WORLD)], }) }

export function incrementMarketplace(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_marketplace`, arguments: [obj(tx, MARKETPLACE)], }) }

export function incrementTrainer(tx: Transaction, profile: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_trainer`, arguments: [obj(tx, profile)], }) }

export function incrementYieldFarm(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::increment_yield_farm`, arguments: [obj(tx, YIELD_FARM)], }) }

export interface InfuseBeeAndSchoolWithHoneyArgs {  dragonSchool: TransactionObjectInput; mysticalBee: TransactionObjectInput; honeyBalance: TransactionObjectInput }

export function infuseBeeAndSchoolWithHoney(tx: Transaction, args: InfuseBeeAndSchoolWithHoneyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::infuse_bee_and_school_with_honey`, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.dragonSchool), obj(tx, args.mysticalBee), obj(tx, args.honeyBalance)], }) }

export interface InfuseBeeAndTrainerWithHoneyArgs {  dragonTrainer: TransactionObjectInput; mysticalBee: TransactionObjectInput; honeyBalance: TransactionObjectInput }

export function infuseBeeAndTrainerWithHoney(tx: Transaction, args: InfuseBeeAndTrainerWithHoneyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::infuse_bee_and_trainer_with_honey`, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer), obj(tx, args.mysticalBee), obj(tx, args.honeyBalance)], }) }

export interface InfuseBeeWithEnergyArgs {  policy: TransactionObjectInput; policyCap: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument; hiveCoin: TransactionObjectInput; hiveToLock: bigint | TransactionArgument; lockupWeeks: bigint | TransactionArgument }

export function infuseBeeWithEnergy(tx: Transaction, args: InfuseBeeWithEnergyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::infuse_bee_with_energy`, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`), obj(tx, args.hiveCoin), pure(tx, args.hiveToLock, `u64`), pure(tx, args.lockupWeeks, `u64`)], }) }

export interface InfuseBeeWithHealthArgs {  policy: TransactionObjectInput; policyCap: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument; honeyTokenIn: TransactionObjectInput; honeyToAddAmt: bigint | TransactionArgument }

export function infuseBeeWithHealth(tx: Transaction, args: InfuseBeeWithHealthArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::infuse_bee_with_health`, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAddAmt, `u64`)], }) }

export interface InternalBreedWithQueenBeeArgs {  random: TransactionObjectInput; yieldFlow: TransactionObjectInput; feeCollector: TransactionObjectInput;  stingerBee: TransactionObjectInput; queenVersion: bigint | TransactionArgument; payableBalance: TransactionObjectInput; birtherTrainer: string | TransactionArgument; ownedBy: string | TransactionArgument }

export function internalBreedWithQueenBee(tx: Transaction, args: InternalBreedWithQueenBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_breed_with_queen_bee`, arguments: [obj(tx, CLOCK), obj(tx, args.random), obj(tx, args.yieldFlow), obj(tx, args.feeCollector), obj(tx, BEES_MANAGER), obj(tx, args.stingerBee), pure(tx, args.queenVersion, `u64`), obj(tx, args.payableBalance), pure(tx, args.birtherTrainer, `address`), pure(tx, args.ownedBy, `address`)], }) }

export interface InternalHandleBattleTurnArgs { dragonBeeUsingPower: TransactionObjectInput; dragonBeeOpponent: TransactionObjectInput; sessionEnergy: bigint | TransactionArgument; sessionHealth: bigint | TransactionArgument; usePower: number | TransactionArgument; curTimestamp: bigint | TransactionArgument }

export function internalHandleBattleTurn(tx: Transaction, args: InternalHandleBattleTurnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_handle_battle_turn`, arguments: [obj(tx, args.dragonBeeUsingPower), obj(tx, args.dragonBeeOpponent), pure(tx, args.sessionEnergy, `u64`), pure(tx, args.sessionHealth, `u64`), pure(tx, args.usePower, `u8`), pure(tx, args.curTimestamp, `u64`)], }) }

export interface InternalHandleBattleTurnImpactArgs { isTrainer1Turn: boolean | TransactionArgument; currentQuest: TransactionObjectInput; energyCost: bigint | TransactionArgument; healthImpact: bigint | TransactionArgument }

export function internalHandleBattleTurnImpact(tx: Transaction, args: InternalHandleBattleTurnImpactArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_handle_battle_turn_impact`, arguments: [pure(tx, args.isTrainer1Turn, `bool`), obj(tx, args.currentQuest), pure(tx, args.energyCost, `u64`), pure(tx, args.healthImpact, `u64`)], }) }

export interface InternalInfuseBeeWithEnergyArgs {  bee: TransactionObjectInput; hiveBalance: TransactionObjectInput; hiveToLock: bigint | TransactionArgument; lockupWeeks: bigint | TransactionArgument }

export function internalInfuseBeeWithEnergy(tx: Transaction, args: InternalInfuseBeeWithEnergyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_infuse_bee_with_energy`, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.bee), obj(tx, args.hiveBalance), pure(tx, args.hiveToLock, `u64`), pure(tx, args.lockupWeeks, `u64`)], }) }

export interface InternalInfuseBeeWithHoneyArgs {  bee: TransactionObjectInput; honeyBalance: TransactionObjectInput }

export function internalInfuseBeeWithHoney(tx: Transaction, args: InternalInfuseBeeWithHoneyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_infuse_bee_with_honey`, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.bee), obj(tx, args.honeyBalance)], }) }

export interface InternalKraftDragonTrainerArgs {  name: string | TransactionArgument; krafter: string | TransactionArgument;   feeCollector: TransactionObjectInput; suiReceived: TransactionObjectInput }

export function internalKraftDragonTrainer(tx: Transaction, args: InternalKraftDragonTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_kraft_dragon_trainer`, arguments: [obj(tx, CLOCK), pure(tx, args.name, `${String1.$typeName}`), pure(tx, args.krafter, `address`), obj(tx, TRAINER_MAPPING_STORE), obj(tx, BEES_MANAGER), obj(tx, HIVE_GRAPH), obj(tx, args.feeCollector), obj(tx, args.suiReceived)], }) }

export interface InternalMakeBeeQueenArgs {  mysticalBee: TransactionObjectInput; maxEggsLimit: bigint | TransactionArgument; auctionEpoch: bigint | TransactionArgument }

export function internalMakeBeeQueen(tx: Transaction, args: InternalMakeBeeQueenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_make_bee_queen`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.mysticalBee), pure(tx, args.maxEggsLimit, `u64`), pure(tx, args.auctionEpoch, `u64`)], }) }

export interface InternalReplenishMasterKeyArgs { cap: TransactionObjectInput; honeyEarned: TransactionObjectInput; hiveEarned: TransactionObjectInput; addToEnergy: bigint | TransactionArgument; addToHealth: bigint | TransactionArgument }

export function internalReplenishMasterKey(tx: Transaction, args: InternalReplenishMasterKeyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_replenish_master_key`, arguments: [obj(tx, args.cap), obj(tx, args.honeyEarned), obj(tx, args.hiveEarned), pure(tx, args.addToEnergy, `u64`), pure(tx, args.addToHealth, `u64`)], }) }

export interface InternalSendToHiddenWorldArgs {   mysticalBee: TransactionObjectInput; dragonTrainerAddr: string | TransactionArgument }

export function internalSendToHiddenWorld(tx: Transaction, args: InternalSendToHiddenWorldArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_send_to_hidden_world`, arguments: [obj(tx, CLOCK), obj(tx, BEES_MANAGER), obj(tx, HIDDEN_WORLD), obj(tx, YIELD_FARM), obj(tx, args.mysticalBee), pure(tx, args.dragonTrainerAddr, `address`)], }) }

export interface InternalUnlockHiveFromBeeArgs {  bee: TransactionObjectInput }

export function internalUnlockHiveFromBee(tx: Transaction, args: InternalUnlockHiveFromBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::internal_unlock_hive_from_bee`, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.bee)], }) }

export interface IsreadytobreedArgs {  bee: TransactionObjectInput }

export function isreadytobreed(tx: Transaction, args: IsreadytobreedArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::isReadyToBreed`, arguments: [obj(tx, CLOCK), obj(tx, args.bee)], }) }

export interface IsBeeListingExecutedArgs {  version: bigint | TransactionArgument }

export function isBeeListingExecuted(tx: Transaction, args: IsBeeListingExecutedArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_bee_listing_executed`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.version, `u64`)], }) }

export interface IsDragonBeeEggHatchableArgs { beeManager: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function isDragonBeeEggHatchable(tx: Transaction, args: IsDragonBeeEggHatchableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_dragon_bee_egg_hatchable`, arguments: [obj(tx, args.beeManager), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export interface IsMysticalBeeListedArgs {  version: bigint | TransactionArgument }

export function isMysticalBeeListed(tx: Transaction, args: IsMysticalBeeListedArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_mystical_bee_listed`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.version, `u64`)], }) }

export interface IsRegisteredAsTrainerArgs {  userAddr: string | TransactionArgument }

export function isRegisteredAsTrainer(tx: Transaction, args: IsRegisteredAsTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_registered_as_trainer`, arguments: [obj(tx, TRAINER_MAPPING_STORE), pure(tx, args.userAddr, `address`)], }) }

export function isTradingEnabled(tx: Transaction) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_trading_enabled`, arguments: [obj(tx, YIELD_FARM)], }) }

export interface IsUsableTrainerNameArgs { name: string | TransactionArgument }

export function isUsableTrainerName(tx: Transaction, args: IsUsableTrainerNameArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_usable_trainer_name`, arguments: [obj(tx, TRAINER_MAPPING_STORE), pure(tx, args.name, `${String1.$typeName}`)], }) }

export function isValidBeeName(tx: Transaction, name: string | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_valid_bee_name`, arguments: [pure(tx, name, `${String1.$typeName}`)], }) }

export interface IsValidTrainerCharArgs { b: number | TransactionArgument; isBeeName: boolean | TransactionArgument }

export function isValidTrainerChar(tx: Transaction, args: IsValidTrainerCharArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_valid_trainer_char`, arguments: [pure(tx, args.b, `u8`), pure(tx, args.isBeeName, `bool`)], }) }

export function isValidTrainerName(tx: Transaction, name: string | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::is_valid_trainer_name`, arguments: [pure(tx, name, `${String1.$typeName}`)], }) }

export interface KraftDragonSchoolArgs { name: string | TransactionArgument }

export function kraftDragonSchool(tx: Transaction, args: KraftDragonSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::kraft_dragon_school`, arguments: [obj(tx, TRAINER_MAPPING_STORE), pure(tx, args.name, `${String.$typeName}`)], }) }

export interface KraftDragonTrainerArgs {    feeCollector: TransactionObjectInput; suiCoin: TransactionObjectInput; name: string | TransactionArgument }

export function kraftDragonTrainer(tx: Transaction, args: KraftDragonTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::kraft_dragon_trainer`, arguments: [obj(tx, CLOCK), obj(tx, TRAINER_MAPPING_STORE), obj(tx, BEES_MANAGER), obj(tx, HIVE_GRAPH), obj(tx, args.feeCollector), obj(tx, args.suiCoin), pure(tx, args.name, `${String1.$typeName}`)], }) }

export interface KraftDragonTrainerAndReturnSuiArgs {    feeCollector: TransactionObjectInput; suiCoin: TransactionObjectInput; name: string | TransactionArgument }

export function kraftDragonTrainerAndReturnSui(tx: Transaction, args: KraftDragonTrainerAndReturnSuiArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::kraft_dragon_trainer_and_return_sui`, arguments: [obj(tx, CLOCK), obj(tx, TRAINER_MAPPING_STORE), obj(tx, BEES_MANAGER), obj(tx, HIVE_GRAPH), obj(tx, args.feeCollector), obj(tx, args.suiCoin), pure(tx, args.name, `${String1.$typeName}`)], }) }

export interface LaunchMemePoolViaBeeArgs {  memeCap: TransactionObjectInput;  dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument; memeIdentifier: string | TransactionArgument }

export function launchMemePoolViaBee(tx: Transaction, args: LaunchMemePoolViaBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::launch_meme_pool_via_bee`, arguments: [obj(tx, CLOCK), obj(tx, args.memeCap), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`), pure(tx, args.memeIdentifier, `${String.$typeName}`)], }) }

export interface LayDragonEggArgs { generation: bigint | TransactionArgument; honeyDeposit: bigint | TransactionArgument; birthTime: bigint | TransactionArgument; birtherTrainer: string | TransactionArgument; queenVersion: bigint | TransactionArgument; queenId: (string | TransactionArgument | TransactionArgument | null); stingerId: (string | TransactionArgument | TransactionArgument | null); beeGene: bigint | TransactionArgument; eggImg: TransactionObjectInput; ownedBy: string | TransactionArgument;  price: bigint | TransactionArgument }

export function layDragonEgg(tx: Transaction, args: LayDragonEggArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lay_dragon_egg`, arguments: [pure(tx, args.generation, `u64`), pure(tx, args.honeyDeposit, `u64`), pure(tx, args.birthTime, `u64`), pure(tx, args.birtherTrainer, `address`), pure(tx, args.queenVersion, `u64`), pure(tx, args.queenId, `${Option.$typeName}<address>`), pure(tx, args.stingerId, `${Option.$typeName}<address>`), pure(tx, args.beeGene, `u256`), obj(tx, args.eggImg), pure(tx, args.ownedBy, `address`), obj(tx, BEES_MANAGER), pure(tx, args.price, `u64`)], }) }

export interface LayGenesisDragonbeeEggArgs {  random: TransactionObjectInput; feeCollector: TransactionObjectInput;  userTrainer: TransactionObjectInput; payableBalance: TransactionObjectInput; adminMintQueen: boolean | TransactionArgument }

export function layGenesisDragonbeeEgg(tx: Transaction, args: LayGenesisDragonbeeEggArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lay_genesis_dragonbee_egg`, arguments: [obj(tx, CLOCK), obj(tx, args.random), obj(tx, args.feeCollector), obj(tx, BEES_MANAGER), obj(tx, YIELD_FARM), obj(tx, args.userTrainer), obj(tx, args.payableBalance), pure(tx, args.adminMintQueen, `bool`)], }) }

export interface LayGenesisDragonbeeEggLoopArgs {  random: TransactionObjectInput; feeCollector: TransactionObjectInput;  userTrainer: TransactionObjectInput; payableSui: TransactionObjectInput; genesisEggsToLay: bigint | TransactionArgument }

export function layGenesisDragonbeeEggLoop(tx: Transaction, args: LayGenesisDragonbeeEggLoopArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lay_genesis_dragonbee_egg_loop`, arguments: [obj(tx, CLOCK), obj(tx, args.random), obj(tx, args.feeCollector), obj(tx, BEES_MANAGER), obj(tx, YIELD_FARM), obj(tx, args.userTrainer), obj(tx, args.payableSui), pure(tx, args.genesisEggsToLay, `u64`)], }) }

export interface LayGenesisDragonbeeEggsArgs {  random: TransactionObjectInput; feeCollector: TransactionObjectInput;  userTrainer: TransactionObjectInput; payableSui: TransactionObjectInput; genesisEggsToLay: bigint | TransactionArgument }

export function layGenesisDragonbeeEggs(tx: Transaction, args: LayGenesisDragonbeeEggsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lay_genesis_dragonbee_eggs`, arguments: [obj(tx, CLOCK), obj(tx, args.random), obj(tx, args.feeCollector), obj(tx, BEES_MANAGER), obj(tx, YIELD_FARM), obj(tx, args.userTrainer), obj(tx, args.payableSui), pure(tx, args.genesisEggsToLay, `u64`)], }) }

export interface LockAssetsWithTrainerArgs { dragonTrainer: TransactionObjectInput; hiveToAdd: TransactionObjectInput; honeyToAdd: TransactionObjectInput }

export function lockAssetsWithTrainer(tx: Transaction, args: LockAssetsWithTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lock_assets_with_trainer`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.hiveToAdd), obj(tx, args.honeyToAdd)], }) }

export interface LockHiveWithBeeArgs { currentTime: bigint | TransactionArgument; bee: TransactionObjectInput; hiveToAdd: TransactionObjectInput; lockupWeeks: bigint | TransactionArgument }

export function lockHiveWithBee(tx: Transaction, args: LockHiveWithBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lock_hive_with_bee`, arguments: [pure(tx, args.currentTime, `u64`), obj(tx, YIELD_FARM), obj(tx, args.bee), obj(tx, args.hiveToAdd), pure(tx, args.lockupWeeks, `u64`)], }) }

export interface LockHoneyWithBeeArgs { bee: TransactionObjectInput; honeyToAdd: TransactionObjectInput }

export function lockHoneyWithBee(tx: Transaction, args: LockHoneyWithBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::lock_honey_with_bee`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.bee), obj(tx, args.honeyToAdd)], }) }

export interface MakeBeeQueenArgs { cap: TransactionObjectInput;  mysticalBee: TransactionObjectInput; maxEggsLimit: bigint | TransactionArgument; auctionEpoch: bigint | TransactionArgument }

export function makeBeeQueen(tx: Transaction, args: MakeBeeQueenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::make_bee_queen`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), obj(tx, args.mysticalBee), pure(tx, args.maxEggsLimit, `u64`), pure(tx, args.auctionEpoch, `u64`)], }) }

export interface MakeBidArgs {    feeCollector: TransactionObjectInput; bidderTrainer: TransactionObjectInput; payableSui: TransactionObjectInput; beeVersion: bigint | TransactionArgument; suiBidAmt: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument }

export function makeBid(tx: Transaction, args: MakeBidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::make_bid`, arguments: [obj(tx, CLOCK), obj(tx, BEES_MANAGER), obj(tx, MARKETPLACE), obj(tx, args.feeCollector), obj(tx, args.bidderTrainer), obj(tx, args.payableSui), pure(tx, args.beeVersion, `u64`), pure(tx, args.suiBidAmt, `u64`), pure(tx, args.expirationSec, `u64`)], }) }

export interface MakeDragonEggHatchableArgs { cap: TransactionObjectInput;  version: bigint | TransactionArgument; dragonbeeImg: Array<string | TransactionArgument> | TransactionArgument }

export function makeDragonEggHatchable(tx: Transaction, args: MakeDragonEggHatchableArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::make_dragon_egg_hatchable`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), pure(tx, args.version, `u64`), pure(tx, args.dragonbeeImg, `vector<${String1.$typeName}>`)], }) }

export interface MakeListingArgs {    dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument; minPrice: bigint | TransactionArgument; expirationSec: bigint | TransactionArgument }

export function makeListing(tx: Transaction, args: MakeListingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::make_listing`, arguments: [obj(tx, CLOCK), obj(tx, BEES_MANAGER), obj(tx, MARKETPLACE), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`), pure(tx, args.minPrice, `u64`), pure(tx, args.expirationSec, `u64`)], }) }

export interface MarkMarketplaceBidsAsInvalidArgs {  beeVersion: bigint | TransactionArgument }

export function markMarketplaceBidsAsInvalid(tx: Transaction, args: MarkMarketplaceBidsAsInvalidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::mark_marketplace_bids_as_invalid`, arguments: [obj(tx, MARKETPLACE), pure(tx, args.beeVersion, `u64`)], }) }

export interface MatchActiveTrainersArgs {  random: TransactionObjectInput; yieldFlow: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function matchActiveTrainers(tx: Transaction, args: MatchActiveTrainersArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::match_active_trainers`, arguments: [obj(tx, CLOCK), obj(tx, args.random), obj(tx, HIDDEN_WORLD), obj(tx, args.yieldFlow), obj(tx, args.dragonTrainer)], }) }

export interface ProcessAndStoreQuestArgs { random: TransactionObjectInput; curSessionId: string | TransactionArgument; p2PGameSession: TransactionObjectInput; isQuestOver: boolean | TransactionArgument; isTrainer1Won: boolean | TransactionArgument }

export function processAndStoreQuest(tx: Transaction, args: ProcessAndStoreQuestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::process_and_store_quest`, arguments: [obj(tx, args.random), obj(tx, HIDDEN_WORLD), pure(tx, args.curSessionId, `${String1.$typeName}`), obj(tx, args.p2PGameSession), pure(tx, args.isQuestOver, `bool`), pure(tx, args.isTrainer1Won, `bool`)], }) }

export interface ProcessBreedingRequestArgs { cap: TransactionObjectInput;  queenBeeVersion: bigint | TransactionArgument; stingerIndex: bigint | TransactionArgument; img: Array<string | TransactionArgument> | TransactionArgument }

export function processBreedingRequest(tx: Transaction, args: ProcessBreedingRequestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::process_breeding_request`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), pure(tx, args.queenBeeVersion, `u64`), pure(tx, args.stingerIndex, `u64`), pure(tx, args.img, `vector<${String1.$typeName}>`)], }) }

export interface ProcessEvolutionRequestArgs { cap: TransactionObjectInput; version: bigint | TransactionArgument; imgIndex: bigint | TransactionArgument; img: Array<string | TransactionArgument> | TransactionArgument }

export function processEvolutionRequest(tx: Transaction, args: ProcessEvolutionRequestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::process_evolution_request`, arguments: [obj(tx, args.cap), obj(tx, HIDDEN_WORLD), pure(tx, args.version, `u64`), pure(tx, args.imgIndex, `u64`), pure(tx, args.img, `vector<${String1.$typeName}>`)], }) }

export interface ProcessRoyaltyArgs { paidBalance: TransactionObjectInput;  feeCollector: TransactionObjectInput; queenVersion: bigint | TransactionArgument; isGenesis: boolean | TransactionArgument }

export function processRoyalty(tx: Transaction, args: ProcessRoyaltyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::process_royalty`, arguments: [obj(tx, args.paidBalance), obj(tx, BEES_MANAGER), obj(tx, args.feeCollector), pure(tx, args.queenVersion, `u64`), pure(tx, args.isGenesis, `bool`)], }) }

export interface RemoveAppFromTrainerArgs { masterKey: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function removeAppFromTrainer(tx: Transaction, typeArg: string, args: RemoveAppFromTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::remove_app_from_trainer`, typeArguments: [typeArg], arguments: [obj(tx, args.masterKey), obj(tx, args.dragonTrainer)], }) }

export interface RemoveBeeFriendsForBreedingArgs {  queenBee: TransactionObjectInput; friendlyBee: bigint | TransactionArgument }

export function removeBeeFriendsForBreeding(tx: Transaction, args: RemoveBeeFriendsForBreedingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::remove_bee_friends_for_breeding`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.queenBee), pure(tx, args.friendlyBee, `u64`)], }) }

export interface RemoveStoreFromBeeArgs { masterKey: TransactionObjectInput; mysticalBee: TransactionObjectInput }

export function removeStoreFromBee(tx: Transaction, typeArg: string, args: RemoveStoreFromBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::remove_store_from_bee`, typeArguments: [typeArg], arguments: [obj(tx, args.masterKey), obj(tx, args.mysticalBee)], }) }

export interface ReplenishMasterKeyArgs { cap: TransactionObjectInput; honeyEarned: TransactionObjectInput; hiveEarned: TransactionObjectInput }

export function replenishMasterKey(tx: Transaction, args: ReplenishMasterKeyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::replenish_master_key`, arguments: [obj(tx, args.cap), obj(tx, args.honeyEarned), obj(tx, args.hiveEarned)], }) }

export interface ReplenishMasterKeyWithHoneyArgs { cap: TransactionObjectInput; policy: TransactionObjectInput; policyCap: TransactionObjectInput; honeyTokenIn: TransactionObjectInput; honeyToAddAmt: bigint | TransactionArgument }

export function replenishMasterKeyWithHoney(tx: Transaction, args: ReplenishMasterKeyWithHoneyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::replenish_master_key_with_honey`, arguments: [obj(tx, args.cap), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, args.honeyTokenIn), pure(tx, args.honeyToAddAmt, `u64`)], }) }

export interface ReturnBeeFromCompetitionArgs { treasuryCap: TransactionObjectInput;  dragonTrainer: TransactionObjectInput; bee: TransactionObjectInput; energyIncrease: bigint | TransactionArgument; healthIncrease: bigint | TransactionArgument }

export function returnBeeFromCompetition(tx: Transaction, args: ReturnBeeFromCompetitionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::return_bee_from_competition`, arguments: [obj(tx, args.treasuryCap), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), obj(tx, args.bee), pure(tx, args.energyIncrease, `u64`), pure(tx, args.healthIncrease, `u64`)], }) }

export interface SendToHiddenWorldArgs {   policy: TransactionObjectInput; policyCap: TransactionObjectInput; myTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function sendToHiddenWorld(tx: Transaction, args: SendToHiddenWorldArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::send_to_hidden_world`, arguments: [obj(tx, CLOCK), obj(tx, BEES_MANAGER), obj(tx, YIELD_FARM), obj(tx, HIDDEN_WORLD), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, args.myTrainer), pure(tx, args.version, `u64`)], }) }

export interface SetSuinsDomainAsUsernameArgs {  myTrainer: TransactionObjectInput; suinsNft: TransactionObjectInput; hiveFee: TransactionObjectInput }

export function setSuinsDomainAsUsername(tx: Transaction, args: SetSuinsDomainAsUsernameArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::set_suins_domain_as_username`, arguments: [obj(tx, BEES_MANAGER), obj(tx, TRAINER_MAPPING_STORE), obj(tx, YIELD_FARM), obj(tx, args.myTrainer), obj(tx, args.suinsNft), obj(tx, args.hiveFee)], }) }

export interface SetupBeesManagerArgs { cap: TransactionObjectInput; tradingRoyaltyPct: bigint | TransactionArgument; tradingGovYieldPct: bigint | TransactionArgument; tradingQueenMakerPct: bigint | TransactionArgument; breedingRoyaltyPlatformPct: bigint | TransactionArgument; breedingRoyaltyGovYieldPct: bigint | TransactionArgument; breedingRoyaltyTreasuryPct: bigint | TransactionArgument; maxBidsPerBee: bigint | TransactionArgument; minBidAmt: bigint | TransactionArgument; trainerOnboardingFee: bigint | TransactionArgument; mutationFee: bigint | TransactionArgument; startTime: bigint | TransactionArgument; eggsCount: bigint | TransactionArgument; queenBeeEggsCount: bigint | TransactionArgument; queenChance: bigint | TransactionArgument; maxEggsLimit: bigint | TransactionArgument; perUserLimit: bigint | TransactionArgument; tradingEnabled: boolean | TransactionArgument; minEnergyToHatch: bigint | TransactionArgument; minHealthToHatch: bigint | TransactionArgument }

export function setupBeesManager(tx: Transaction, args: SetupBeesManagerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::setup_bees_manager`, arguments: [obj(tx, args.cap), pure(tx, args.tradingRoyaltyPct, `u64`), pure(tx, args.tradingGovYieldPct, `u64`), pure(tx, args.tradingQueenMakerPct, `u64`), pure(tx, args.breedingRoyaltyPlatformPct, `u64`), pure(tx, args.breedingRoyaltyGovYieldPct, `u64`), pure(tx, args.breedingRoyaltyTreasuryPct, `u64`), pure(tx, args.maxBidsPerBee, `u64`), pure(tx, args.minBidAmt, `u64`), pure(tx, args.trainerOnboardingFee, `u64`), pure(tx, args.mutationFee, `u64`), pure(tx, args.startTime, `u64`), pure(tx, args.eggsCount, `u64`), pure(tx, args.queenBeeEggsCount, `u64`), pure(tx, args.queenChance, `u64`), pure(tx, args.maxEggsLimit, `u64`), pure(tx, args.perUserLimit, `u64`), pure(tx, args.tradingEnabled, `bool`), pure(tx, args.minEnergyToHatch, `u64`), pure(tx, args.minHealthToHatch, `u64`)], }) }

export interface SetupHiddenWorldArgs { depCap: TransactionObjectInput; hiddenWorldCap: TransactionObjectInput; maxActiveDuration: bigint | TransactionArgument; turnDuration: bigint | TransactionArgument; expiryPenaltyPct: bigint | TransactionArgument; minSuiBetAmt: bigint | TransactionArgument; maxSuiBetAmt: bigint | TransactionArgument; sessionHealth: bigint | TransactionArgument; sessionEnergy: bigint | TransactionArgument; minDragonDustChance: bigint | TransactionArgument; maxDragonDustChance: bigint | TransactionArgument; halfLife: bigint | TransactionArgument; healthPctToEmitDust: bigint | TransactionArgument; maxCapabilityIncrease: bigint | TransactionArgument; maxPowerPct: bigint | TransactionArgument }

export function setupHiddenWorld(tx: Transaction, args: SetupHiddenWorldArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::setup_hidden_world`, arguments: [obj(tx, args.depCap), obj(tx, args.hiddenWorldCap), pure(tx, args.maxActiveDuration, `u64`), pure(tx, args.turnDuration, `u64`), pure(tx, args.expiryPenaltyPct, `u64`), pure(tx, args.minSuiBetAmt, `u64`), pure(tx, args.maxSuiBetAmt, `u64`), pure(tx, args.sessionHealth, `u64`), pure(tx, args.sessionEnergy, `u64`), pure(tx, args.minDragonDustChance, `u64`), pure(tx, args.maxDragonDustChance, `u64`), pure(tx, args.halfLife, `u64`), pure(tx, args.healthPctToEmitDust, `u64`), pure(tx, args.maxCapabilityIncrease, `u64`), pure(tx, args.maxPowerPct, `u64`)], }) }

export interface StoreExistsForBeeArgs { mysticalBee: TransactionObjectInput; appName: string | TransactionArgument }

export function storeExistsForBee(tx: Transaction, args: StoreExistsForBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::store_exists_for_bee`, arguments: [obj(tx, args.mysticalBee), pure(tx, args.appName, `${String.$typeName}`)], }) }

export interface SwitchTradingEnabledArgs { cap: TransactionObjectInput; tradingEnabled: boolean | TransactionArgument }

export function switchTradingEnabled(tx: Transaction, args: SwitchTradingEnabledArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::switch_trading_enabled`, arguments: [obj(tx, args.cap), obj(tx, YIELD_FARM), pure(tx, args.tradingEnabled, `bool`)], }) }

export interface TrainerActiveForQuestArgs {   dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument; suiCoin: TransactionObjectInput; betAmt: bigint | TransactionArgument; playerOnly: boolean | TransactionArgument; withTrainer: (string | TransactionArgument | TransactionArgument | null) }

export function trainerActiveForQuest(tx: Transaction, args: TrainerActiveForQuestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::trainer_active_for_quest`, arguments: [obj(tx, CLOCK), obj(tx, HIDDEN_WORLD), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`), obj(tx, args.suiCoin), pure(tx, args.betAmt, `u64`), pure(tx, args.playerOnly, `bool`), pure(tx, args.withTrainer, `${Option.$typeName}<address>`)], }) }

export interface TransferBeeToTrainerArgs {  transferredBy: TransactionObjectInput; recepient: string | TransactionArgument; version: bigint | TransactionArgument }

export function transferBeeToTrainer(tx: Transaction, args: TransferBeeToTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::transfer_bee_to_trainer`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.transferredBy), pure(tx, args.recepient, `address`), pure(tx, args.version, `u64`)], }) }

export interface TransferHiveTreasuryFundsArgs { daoCap: TransactionObjectInput;  amountToSpend: bigint | TransactionArgument }

export function transferHiveTreasuryFunds(tx: Transaction, args: TransferHiveTreasuryFundsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::transfer_hive_treasury_funds`, arguments: [obj(tx, args.daoCap), obj(tx, BEES_MANAGER), pure(tx, args.amountToSpend, `u64`)], }) }

export interface TransferHoneyViaDragonSchoolArgs { school: TransactionObjectInput; userDragonTrainer: TransactionObjectInput; honeyToTransferAmt: bigint | TransactionArgument }

export function transferHoneyViaDragonSchool(tx: Transaction, args: TransferHoneyViaDragonSchoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::transfer_honey_via_dragon_school`, arguments: [obj(tx, args.school), obj(tx, args.userDragonTrainer), pure(tx, args.honeyToTransferAmt, `u64`)], }) }

export interface UnfollowTrainerArgs {  myTrainer: TransactionObjectInput; profileToUnfollow: string | TransactionArgument }

export function unfollowTrainer(tx: Transaction, args: UnfollowTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::unfollow_trainer`, arguments: [obj(tx, HIVE_GRAPH), obj(tx, args.myTrainer), pure(tx, args.profileToUnfollow, `address`)], }) }

export interface UnlockHiveFromBeeArgs {  policy: TransactionObjectInput; policyCap: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function unlockHiveFromBee(tx: Transaction, args: UnlockHiveFromBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::unlock_hive_from_bee`, arguments: [obj(tx, CLOCK), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export interface UnprocessBreedingRequestArgs { cap: TransactionObjectInput;  queenBeeVersion: bigint | TransactionArgument; stingerIndex: bigint | TransactionArgument }

export function unprocessBreedingRequest(tx: Transaction, args: UnprocessBreedingRequestArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::unprocess_breeding_request`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), pure(tx, args.queenBeeVersion, `u64`), pure(tx, args.stingerIndex, `u64`)], }) }

export interface UpdateBeeOwnershipArgs {  version: bigint | TransactionArgument; newOwnerAddr: string | TransactionArgument }

export function updateBeeOwnership(tx: Transaction, args: UpdateBeeOwnershipArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_bee_ownership`, arguments: [obj(tx, BEES_MANAGER), pure(tx, args.version, `u64`), pure(tx, args.newOwnerAddr, `address`)], }) }

export interface UpdateBeesManagerConfigArgs { daoCap: TransactionObjectInput;  newMaxBidsPerBee: bigint | TransactionArgument; newMinBidAmt: bigint | TransactionArgument; newTrainerMintFee: bigint | TransactionArgument; mutationFee: bigint | TransactionArgument }

export function updateBeesManagerConfig(tx: Transaction, args: UpdateBeesManagerConfigArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_bees_manager_config`, arguments: [obj(tx, args.daoCap), obj(tx, BEES_MANAGER), pure(tx, args.newMaxBidsPerBee, `u64`), pure(tx, args.newMinBidAmt, `u64`), pure(tx, args.newTrainerMintFee, `u64`), pure(tx, args.mutationFee, `u64`)], }) }

export interface UpdateCapabilityInBeeManagerArgs { cap: TransactionObjectInput;  spot: bigint | TransactionArgument; capType: number | TransactionArgument; healthImpactPct: bigint | TransactionArgument; energyCostPct: bigint | TransactionArgument; attempts: bigint | TransactionArgument; cooldown: bigint | TransactionArgument; baseAttempts: bigint | TransactionArgument }

export function updateCapabilityInBeeManager(tx: Transaction, args: UpdateCapabilityInBeeManagerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_capability_in_bee_manager`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), pure(tx, args.spot, `u64`), pure(tx, args.capType, `u8`), pure(tx, args.healthImpactPct, `u64`), pure(tx, args.energyCostPct, `u64`), pure(tx, args.attempts, `u64`), pure(tx, args.cooldown, `u64`), pure(tx, args.baseAttempts, `u64`)], }) }

export interface UpdateDnaForDragonEggArgs { cap: TransactionObjectInput;  index: bigint | TransactionArgument; gene: bigint | TransactionArgument; img: Array<string | TransactionArgument> | TransactionArgument }

export function updateDnaForDragonEgg(tx: Transaction, args: UpdateDnaForDragonEggArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_dna_for_dragon_egg`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), pure(tx, args.index, `u64`), pure(tx, args.gene, `u256`), pure(tx, args.img, `vector<${String1.$typeName}>`)], }) }

export interface UpdateEmaQuestsPlayedArgs { avgQuestsPlayed: bigint | TransactionArgument; questsPlayedByBee: bigint | TransactionArgument; halfLife: bigint | TransactionArgument }

export function updateEmaQuestsPlayed(tx: Transaction, args: UpdateEmaQuestsPlayedArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_ema_quests_played`, arguments: [pure(tx, args.avgQuestsPlayed, `u64`), pure(tx, args.questsPlayedByBee, `u64`), pure(tx, args.halfLife, `u64`)], }) }

export interface UpdateGlobalMysticPowerArgs {  bee: TransactionObjectInput; honeyAdded: TransactionObjectInput; hiveAdded: TransactionObjectInput; lockupWeeks: bigint | TransactionArgument; toWithdrawHive: boolean | TransactionArgument; isDeleted: boolean | TransactionArgument }

export function updateGlobalMysticPower(tx: Transaction, args: UpdateGlobalMysticPowerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_global_mystic_power`, arguments: [obj(tx, CLOCK), obj(tx, YIELD_FARM), obj(tx, args.bee), obj(tx, args.honeyAdded), obj(tx, args.hiveAdded), pure(tx, args.lockupWeeks, `u64`), pure(tx, args.toWithdrawHive, `bool`), pure(tx, args.isDeleted, `bool`)], }) }

export interface UpdateHiddenWorldParamsArgs { daoCap: TransactionObjectInput; isActive: boolean | TransactionArgument; maxActiveDuration: bigint | TransactionArgument; turnDuration: bigint | TransactionArgument; expiryPenaltyPct: bigint | TransactionArgument; minSuiBetAmt: bigint | TransactionArgument; maxSuiBetAmt: bigint | TransactionArgument; sessionHealth: bigint | TransactionArgument; sessionEnergy: bigint | TransactionArgument; minDragonDustChance: bigint | TransactionArgument; maxDragonDustChance: bigint | TransactionArgument; halfLife: bigint | TransactionArgument; healthPctToEmitDust: bigint | TransactionArgument; maxCapabilityIncrease: bigint | TransactionArgument; maxPowerPct: bigint | TransactionArgument }

export function updateHiddenWorldParams(tx: Transaction, args: UpdateHiddenWorldParamsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_hidden_world_params`, arguments: [obj(tx, args.daoCap), obj(tx, HIDDEN_WORLD), pure(tx, args.isActive, `bool`), pure(tx, args.maxActiveDuration, `u64`), pure(tx, args.turnDuration, `u64`), pure(tx, args.expiryPenaltyPct, `u64`), pure(tx, args.minSuiBetAmt, `u64`), pure(tx, args.maxSuiBetAmt, `u64`), pure(tx, args.sessionHealth, `u64`), pure(tx, args.sessionEnergy, `u64`), pure(tx, args.minDragonDustChance, `u64`), pure(tx, args.maxDragonDustChance, `u64`), pure(tx, args.halfLife, `u64`), pure(tx, args.healthPctToEmitDust, `u64`), pure(tx, args.maxCapabilityIncrease, `u64`), pure(tx, args.maxPowerPct, `u64`)], }) }

export interface UpdateHiveTwapInfoArgs { cap: TransactionObjectInput;   hiveSuiTwap: bigint | TransactionArgument; suiUsdcTwap: bigint | TransactionArgument; hiveUsdcTwap: bigint | TransactionArgument }

export function updateHiveTwapInfo(tx: Transaction, args: UpdateHiveTwapInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_hive_twap_info`, arguments: [obj(tx, args.cap), obj(tx, CLOCK), obj(tx, HIVE_GRAPH), pure(tx, args.hiveSuiTwap, `u256`), pure(tx, args.suiUsdcTwap, `u256`), pure(tx, args.hiveUsdcTwap, `u256`)], }) }

export interface UpdateInscriptionArgs {  myTrainer: TransactionObjectInput; hiveFee: TransactionObjectInput; inscriptionType: string | TransactionArgument; inscriptionBase64: Array<string | TransactionArgument> | TransactionArgument }

export function updateInscription(tx: Transaction, args: UpdateInscriptionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_inscription`, arguments: [obj(tx, BEES_MANAGER), obj(tx, YIELD_FARM), obj(tx, args.myTrainer), obj(tx, args.hiveFee), pure(tx, args.inscriptionType, `${String1.$typeName}`), pure(tx, args.inscriptionBase64, `vector<${String1.$typeName}>`)], }) }

export interface UpdateListingArgs {    dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument; newMinPrice: bigint | TransactionArgument; newExpirationSec: bigint | TransactionArgument }

export function updateListing(tx: Transaction, args: UpdateListingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_listing`, arguments: [obj(tx, CLOCK), obj(tx, BEES_MANAGER), obj(tx, MARKETPLACE), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`), pure(tx, args.newMinPrice, `u64`), pure(tx, args.newExpirationSec, `u64`)], }) }

export interface UpdateNameOfBeeArgs { mapStore: TransactionObjectInput; myTrainer: TransactionObjectInput; version: bigint | TransactionArgument; newBeename: string | TransactionArgument }

export function updateNameOfBee(tx: Transaction, args: UpdateNameOfBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_name_of_bee`, arguments: [obj(tx, args.mapStore), obj(tx, args.myTrainer), pure(tx, args.version, `u64`), pure(tx, args.newBeename, `${String1.$typeName}`)], }) }

export interface UpdatePricingForBreedingArgs {  queenBee: TransactionObjectInput; isActive: boolean | TransactionArgument; basePrice: bigint | TransactionArgument; curveA: bigint | TransactionArgument }

export function updatePricingForBreeding(tx: Transaction, args: UpdatePricingForBreedingArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_pricing_for_breeding`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.queenBee), pure(tx, args.isActive, `bool`), pure(tx, args.basePrice, `u64`), pure(tx, args.curveA, `u64`)], }) }

export interface UpdatePricingForGenesisMintArgs { cap: TransactionObjectInput;  startTime: bigint | TransactionArgument; basePrice: bigint | TransactionArgument; curveA: bigint | TransactionArgument; perUserLimit: bigint | TransactionArgument }

export function updatePricingForGenesisMint(tx: Transaction, args: UpdatePricingForGenesisMintArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_pricing_for_genesis_mint`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), pure(tx, args.startTime, `u64`), pure(tx, args.basePrice, `u64`), pure(tx, args.curveA, `u64`), pure(tx, args.perUserLimit, `u64`)], }) }

export interface UpdateRoyaltyArgs { daoCap: TransactionObjectInput;  royaltyNum: bigint | TransactionArgument; govYieldPct: bigint | TransactionArgument; queenPct: bigint | TransactionArgument; breedingPlatformFeesPct: bigint | TransactionArgument; breedingGovYieldPct: bigint | TransactionArgument; breedingTreasuryPct: bigint | TransactionArgument; minEnergyToHatch: bigint | TransactionArgument; minHealthToHatch: bigint | TransactionArgument }

export function updateRoyalty(tx: Transaction, args: UpdateRoyaltyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_royalty`, arguments: [obj(tx, args.daoCap), obj(tx, BEES_MANAGER), pure(tx, args.royaltyNum, `u64`), pure(tx, args.govYieldPct, `u64`), pure(tx, args.queenPct, `u64`), pure(tx, args.breedingPlatformFeesPct, `u64`), pure(tx, args.breedingGovYieldPct, `u64`), pure(tx, args.breedingTreasuryPct, `u64`), pure(tx, args.minEnergyToHatch, `u64`), pure(tx, args.minHealthToHatch, `u64`)], }) }

export interface UpdateUsernameArgs {  myTrainer: TransactionObjectInput; hiveFee: TransactionObjectInput; newUsername: string | TransactionArgument }

export function updateUsername(tx: Transaction, args: UpdateUsernameArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::update_username`, arguments: [obj(tx, BEES_MANAGER), obj(tx, TRAINER_MAPPING_STORE), obj(tx, YIELD_FARM), obj(tx, args.myTrainer), obj(tx, args.hiveFee), pure(tx, args.newUsername, `${String1.$typeName}`)], }) }

export interface UsePowerIfCanArgs { capability: TransactionObjectInput; currentTs: bigint | TransactionArgument }

export function usePowerIfCan(tx: Transaction, args: UsePowerIfCanArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::use_power_if_can`, arguments: [obj(tx, args.capability), pure(tx, args.currentTs, `u64`)], }) }

export interface ValidateIfCanBeedArgs {   queenBeeId: string | TransactionArgument; queenBeeVersion: bigint | TransactionArgument; queenType: bigint | TransactionArgument; breederBee: TransactionObjectInput }

export function validateIfCanBeed(tx: Transaction, args: ValidateIfCanBeedArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::validate_if_can_beed`, arguments: [obj(tx, CLOCK), obj(tx, BEES_MANAGER), pure(tx, args.queenBeeId, `address`), pure(tx, args.queenBeeVersion, `u64`), pure(tx, args.queenType, `u64`), obj(tx, args.breederBee)], }) }

export interface ValidateIfCanBeedForOwnerArgs {   queenBeeId: string | TransactionArgument; queenBeeVersion: bigint | TransactionArgument; queenType: bigint | TransactionArgument; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument }

export function validateIfCanBeedForOwner(tx: Transaction, args: ValidateIfCanBeedForOwnerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::validate_if_can_beed_for_owner`, arguments: [obj(tx, CLOCK), obj(tx, BEES_MANAGER), pure(tx, args.queenBeeId, `address`), pure(tx, args.queenBeeVersion, `u64`), pure(tx, args.queenType, `u64`), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`)], }) }

export interface WhitelistUserForGenesisMintArgs { cap: TransactionObjectInput;  userAddr: string | TransactionArgument; wlPrice: bigint | TransactionArgument; numEggsLimit: bigint | TransactionArgument }

export function whitelistUserForGenesisMint(tx: Transaction, args: WhitelistUserForGenesisMintArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::whitelist_user_for_genesis_mint`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), pure(tx, args.userAddr, `address`), pure(tx, args.wlPrice, `u64`), pure(tx, args.numEggsLimit, `u64`)], }) }

export interface WithdrawBeeForFoodArgs { cap: TransactionObjectInput;  dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument; poolHiveAddr: string | TransactionArgument }

export function withdrawBeeForFood(tx: Transaction, args: WithdrawBeeForFoodArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_bee_for_food`, arguments: [obj(tx, args.cap), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`), pure(tx, args.poolHiveAddr, `address`)], }) }

export interface WithdrawBeeFromTrainerArgs {  dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument; newOwnerAddr: string | TransactionArgument }

export function withdrawBeeFromTrainer(tx: Transaction, args: WithdrawBeeFromTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_bee_from_trainer`, arguments: [obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`), pure(tx, args.newOwnerAddr, `address`)], }) }

export interface WithdrawFundsFromTrainerArgs { dragonTrainer: TransactionObjectInput; policy: TransactionObjectInput; policyCap: TransactionObjectInput; toWithdrawSui: boolean | TransactionArgument; toWithdrawHoney: boolean | TransactionArgument }

export function withdrawFundsFromTrainer(tx: Transaction, args: WithdrawFundsFromTrainerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_funds_from_trainer`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, YIELD_FARM), pure(tx, args.toWithdrawSui, `bool`), pure(tx, args.toWithdrawHoney, `bool`)], }) }

export interface WithdrawFundsFromTrainerAndReturnArgs { dragonTrainer: TransactionObjectInput; policy: TransactionObjectInput; policyCap: TransactionObjectInput; toWithdrawSui: boolean | TransactionArgument; toWithdrawHoney: boolean | TransactionArgument }

export function withdrawFundsFromTrainerAndReturn(tx: Transaction, args: WithdrawFundsFromTrainerAndReturnArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_funds_from_trainer_and_return`, arguments: [obj(tx, args.dragonTrainer), obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, YIELD_FARM), pure(tx, args.toWithdrawSui, `bool`), pure(tx, args.toWithdrawHoney, `bool`)], }) }

export interface WithdrawHiveFromBeeArgs { currentTime: bigint | TransactionArgument; bee: TransactionObjectInput; isDeleted: boolean | TransactionArgument }

export function withdrawHiveFromBee(tx: Transaction, args: WithdrawHiveFromBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_hive_from_bee`, arguments: [pure(tx, args.currentTime, `u64`), obj(tx, YIELD_FARM), obj(tx, args.bee), pure(tx, args.isDeleted, `bool`)], }) }

export interface WithdrawHoneyFromBeeArgs { bee: TransactionObjectInput }

export function withdrawHoneyFromBee(tx: Transaction, args: WithdrawHoneyFromBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_honey_from_bee`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.bee)], }) }

export interface WithdrawLockedAssetsArgs { dragonTrainer: TransactionObjectInput; policy: TransactionObjectInput; policyCap: TransactionObjectInput }

export function withdrawLockedAssets(tx: Transaction, args: WithdrawLockedAssetsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::dragon_trainer::withdraw_locked_assets`, arguments: [obj(tx, YIELD_FARM), obj(tx, args.dragonTrainer), obj(tx, args.policy), obj(tx, args.policyCap)], }) }

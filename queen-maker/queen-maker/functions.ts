import { queenmaker } from ".."
const PUBLISHED_AT = queenmaker.PUBLISHED_AT
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { String } from "../../_dependencies/source/0x1/string/structs";
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export function init(tx: Transaction,) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::init`, arguments: [], }) }

export interface AddToBidArgs { clock: TransactionObjectInput; queenMaker: TransactionObjectInput; dragonTrainer: TransactionObjectInput; suiCoin: TransactionObjectInput; suiAddedToBid: bigint | TransactionArgument }

export function addToBid(tx: Transaction, args: AddToBidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::add_to_bid`, arguments: [obj(tx, args.clock), obj(tx, args.queenMaker), obj(tx, args.dragonTrainer), obj(tx, args.suiCoin), pure(tx, args.suiAddedToBid, `u64`)], }) }

export interface CompeteToBeAQueenArgs { clock: TransactionObjectInput; queenMaker: TransactionObjectInput; beesManager: TransactionObjectInput; dragonTrainer: TransactionObjectInput; version: bigint | TransactionArgument; suiCoin: TransactionObjectInput; suiBidAmt: bigint | TransactionArgument }

export function competeToBeAQueen(tx: Transaction, args: CompeteToBeAQueenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::compete_to_be_a_queen`, arguments: [obj(tx, args.clock), obj(tx, args.queenMaker), obj(tx, args.beesManager), obj(tx, args.dragonTrainer), pure(tx, args.version, `u64`), obj(tx, args.suiCoin), pure(tx, args.suiBidAmt, `u64`)], }) }

export interface CreateUserPositionArgs { auctionStartAt: bigint | TransactionArgument; trainerAddr: string | TransactionArgument; username: string | TransactionArgument; mysticalBee: TransactionObjectInput; familyType: bigint | TransactionArgument; beeVersion: bigint | TransactionArgument; suiBidded: bigint | TransactionArgument; tax: bigint | TransactionArgument }

export function createUserPosition(tx: Transaction, args: CreateUserPositionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::create_user_position`, arguments: [pure(tx, args.auctionStartAt, `u64`), pure(tx, args.trainerAddr, `address`), pure(tx, args.username, `${String.$typeName}`), obj(tx, args.mysticalBee), pure(tx, args.familyType, `u64`), pure(tx, args.beeVersion, `u64`), pure(tx, args.suiBidded, `u64`), pure(tx, args.tax, `u64`)], }) }

export function destroyUserPosition(tx: Transaction, userPosition: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::destroy_user_position`, arguments: [obj(tx, userPosition)], }) }

export interface GetBidPoolInfoArgs { queenMaker: TransactionObjectInput; auctionEpoch: bigint | TransactionArgument }

export function getBidPoolInfo(tx: Transaction, args: GetBidPoolInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_bid_pool_info`, arguments: [obj(tx, args.queenMaker), pure(tx, args.auctionEpoch, `u64`)], }) }

export interface GetBidPoolsInfoArgs { queenMaker: TransactionObjectInput; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getBidPoolsInfo(tx: Transaction, args: GetBidPoolsInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_bid_pools_info`, arguments: [obj(tx, args.queenMaker), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`)], }) }

export interface GetLeadingBeesInfoArgs { queenMaker: TransactionObjectInput; startFrom: (bigint | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getLeadingBeesInfo(tx: Transaction, args: GetLeadingBeesInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_leading_bees_info`, arguments: [obj(tx, args.queenMaker), pure(tx, args.startFrom, `${Option.$typeName}<u64>`), pure(tx, args.limit, `u64`)], }) }

export interface GetPositionsForAllTrainersArgs { queenMaker: TransactionObjectInput; startFrom: (string | TransactionArgument | TransactionArgument | null); limit: bigint | TransactionArgument }

export function getPositionsForAllTrainers(tx: Transaction, args: GetPositionsForAllTrainersArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_positions_for_all_trainers`, arguments: [obj(tx, args.queenMaker), pure(tx, args.startFrom, `${Option.$typeName}<address>`), pure(tx, args.limit, `u64`)], }) }

export function getQueenCompetitionInfo(tx: Transaction, queenMaker: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_queen_competition_info`, arguments: [obj(tx, queenMaker)], }) }

export interface GetQueenCustodyInfoArgs { queenMaker: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function getQueenCustodyInfo(tx: Transaction, args: GetQueenCustodyInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_queen_custody_info`, arguments: [obj(tx, args.queenMaker), pure(tx, args.trainerAddr, `address`)], }) }

export interface GetUserPositionInfoArgs { queenMaker: TransactionObjectInput; trainerAddr: string | TransactionArgument }

export function getUserPositionInfo(tx: Transaction, args: GetUserPositionInfoArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_user_position_info`, arguments: [obj(tx, args.queenMaker), pure(tx, args.trainerAddr, `address`)], }) }

export interface IncrementEnergyAndHealthArgs { cap: TransactionObjectInput; queenMaker: TransactionObjectInput; auctionOverForEpoch: bigint | TransactionArgument; simulatedHiveBuyback: bigint | TransactionArgument; simulatedHoneyBuyback: bigint | TransactionArgument }

export function incrementEnergyAndHealth(tx: Transaction, args: IncrementEnergyAndHealthArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::increment_energy_and_health`, arguments: [obj(tx, args.cap), obj(tx, args.queenMaker), pure(tx, args.auctionOverForEpoch, `u64`), pure(tx, args.simulatedHiveBuyback, `u64`), pure(tx, args.simulatedHoneyBuyback, `u64`)], }) }

export interface IncrementQueenMakerArgs { cap: TransactionObjectInput; beesManager: TransactionObjectInput; queenMaker: TransactionObjectInput }

export function incrementQueenMaker(tx: Transaction, args: IncrementQueenMakerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::increment_queen_maker`, arguments: [obj(tx, args.cap), obj(tx, args.beesManager), obj(tx, args.queenMaker)], }) }

export function incrementQueenMakerObj(tx: Transaction, queenMaker: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::increment_queen_maker_obj`, arguments: [obj(tx, queenMaker)], }) }

export interface InitQueenMakerArgs { clock: TransactionObjectInput; hiveKraftCap: TransactionObjectInput; initTaxAllowed: bigint | TransactionArgument; unlimitedDepositWindow: bigint | TransactionArgument; limitedDepositWindow: bigint | TransactionArgument; cooldownPeriod: bigint | TransactionArgument }

export function initQueenMaker(tx: Transaction, args: InitQueenMakerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::init_queen_maker`, arguments: [obj(tx, args.clock), obj(tx, args.hiveKraftCap), pure(tx, args.initTaxAllowed, `u64`), pure(tx, args.unlimitedDepositWindow, `u64`), pure(tx, args.limitedDepositWindow, `u64`), pure(tx, args.cooldownPeriod, `u64`)], }) }

export interface LimitDepositsForExistingBiddersArgs { queenMaker: TransactionObjectInput; curEpoch: bigint | TransactionArgument; curTimestamp: bigint | TransactionArgument }

export function limitDepositsForExistingBidders(tx: Transaction, args: LimitDepositsForExistingBiddersArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::limit_deposits_for_existing_bidders`, arguments: [obj(tx, args.queenMaker), pure(tx, args.curEpoch, `u64`), pure(tx, args.curTimestamp, `u64`)], }) }

export interface MaxAddableToBidArgs { limitedDepositWindow: bigint | TransactionArgument; unlimitedDepositsCloseMs: bigint | TransactionArgument; curTimestamp: bigint | TransactionArgument; existingBid: bigint | TransactionArgument }

export function maxAddableToBid(tx: Transaction, args: MaxAddableToBidArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::max_addable_to_bid`, arguments: [pure(tx, args.limitedDepositWindow, `u64`), pure(tx, args.unlimitedDepositsCloseMs, `u64`), pure(tx, args.curTimestamp, `u64`), pure(tx, args.existingBid, `u64`)], }) }

export interface MintHiveForDragonBeesArgs { cap: TransactionObjectInput; queenMaker: TransactionObjectInput; beesManager: TransactionObjectInput; hiveToMint: bigint | TransactionArgument; treasuryPct: bigint | TransactionArgument }

export function mintHiveForDragonBees(tx: Transaction, args: MintHiveForDragonBeesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::mint_hive_for_dragon_bees`, arguments: [obj(tx, args.cap), obj(tx, args.queenMaker), obj(tx, args.beesManager), pure(tx, args.hiveToMint, `u64`), pure(tx, args.treasuryPct, `u64`)], }) }

export interface UpdateLeadingBeesArgs { auctionStartEpoch: bigint | TransactionArgument; queenMaker: TransactionObjectInput; username: string | TransactionArgument; trainerAddr: string | TransactionArgument; beeVersion: bigint | TransactionArgument; suiBiddedByUser: bigint | TransactionArgument; familyType: bigint | TransactionArgument }

export function updateLeadingBees(tx: Transaction, args: UpdateLeadingBeesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::update_leading_bees`, arguments: [pure(tx, args.auctionStartEpoch, `u64`), obj(tx, args.queenMaker), pure(tx, args.username, `${String.$typeName}`), pure(tx, args.trainerAddr, `address`), pure(tx, args.beeVersion, `u64`), pure(tx, args.suiBiddedByUser, `u64`), pure(tx, args.familyType, `u64`)], }) }

export interface UpdateQueenMakerArgs { cap: TransactionObjectInput; queenMaker: TransactionObjectInput; newLiveStatus: boolean | TransactionArgument; priceToBeAQueen: bigint | TransactionArgument; bidIncreasePct: bigint | TransactionArgument; bidDecreasePct: bigint | TransactionArgument; maxEggsPerQueen: bigint | TransactionArgument; energyTax: bigint | TransactionArgument; unlimitedDepositWindow: bigint | TransactionArgument; limitedDepositWindow: bigint | TransactionArgument; cooldownPeriod: bigint | TransactionArgument }

export function updateQueenMaker(tx: Transaction, args: UpdateQueenMakerArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::update_queen_maker`, arguments: [obj(tx, args.cap), obj(tx, args.queenMaker), pure(tx, args.newLiveStatus, `bool`), pure(tx, args.priceToBeAQueen, `u64`), pure(tx, args.bidIncreasePct, `u64`), pure(tx, args.bidDecreasePct, `u64`), pure(tx, args.maxEggsPerQueen, `u64`), pure(tx, args.energyTax, `u64`), pure(tx, args.unlimitedDepositWindow, `u64`), pure(tx, args.limitedDepositWindow, `u64`), pure(tx, args.cooldownPeriod, `u64`)], }) }

export interface WithdrawBeeAfterCompetitionArgs { queenMaker: TransactionObjectInput; beesManager: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function withdrawBeeAfterCompetition(tx: Transaction, args: WithdrawBeeAfterCompetitionArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::withdraw_bee_after_competition`, arguments: [obj(tx, args.queenMaker), obj(tx, args.beesManager), obj(tx, args.dragonTrainer)], }) }

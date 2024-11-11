"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.addToBid = addToBid;
exports.competeToBeAQueen = competeToBeAQueen;
exports.createUserPosition = createUserPosition;
exports.destroyUserPosition = destroyUserPosition;
exports.getBidPoolInfo = getBidPoolInfo;
exports.getBidPoolsInfo = getBidPoolsInfo;
exports.getLeadingBeesInfo = getLeadingBeesInfo;
exports.getPositionsForAllTrainers = getPositionsForAllTrainers;
exports.getQueenCompetitionInfo = getQueenCompetitionInfo;
exports.getQueenCustodyInfo = getQueenCustodyInfo;
exports.getUserPositionInfo = getUserPositionInfo;
exports.incrementEnergyAndHealth = incrementEnergyAndHealth;
exports.incrementQueenMaker = incrementQueenMaker;
exports.incrementQueenMakerObj = incrementQueenMakerObj;
exports.initQueenMaker = initQueenMaker;
exports.limitDepositsForExistingBidders = limitDepositsForExistingBidders;
exports.maxAddableToBid = maxAddableToBid;
exports.mintHiveForDragonBees = mintHiveForDragonBees;
exports.updateLeadingBees = updateLeadingBees;
exports.updateQueenMaker = updateQueenMaker;
exports.withdrawBeeAfterCompetition = withdrawBeeAfterCompetition;
const __1 = require("..");
const PUBLISHED_AT = __1.queenmaker.PUBLISHED_AT;
const CLOCK = __1.queenmaker.CLOCK;
const QUEEN_MAKER = __1.queenmaker.QUEEN_MAKER;
const BEES_MANAGER = __1.queenmaker.BEES_MANAGER;
const structs_1 = require("../../_dependencies/source/0x1/option/structs");
const structs_2 = require("../../_dependencies/source/0x1/string/structs");
const util_1 = require("../../_framework/util");
function init(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::init`, arguments: [], }); }
function addToBid(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::add_to_bid`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.suiAddedToBid, `u64`)], }); }
function competeToBeAQueen(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::compete_to_be_a_queen`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.version, `u64`), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.suiBidAmt, `u64`)], }); }
function createUserPosition(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::create_user_position`, arguments: [(0, util_1.pure)(tx, args.auctionStartAt, `u64`), (0, util_1.pure)(tx, args.trainerAddr, `address`), (0, util_1.pure)(tx, args.username, `${structs_2.String.$typeName}`), (0, util_1.obj)(tx, args.mysticalBee), (0, util_1.pure)(tx, args.familyType, `u64`), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.suiBidded, `u64`), (0, util_1.pure)(tx, args.tax, `u64`)], }); }
function destroyUserPosition(tx, userPosition) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::destroy_user_position`, arguments: [(0, util_1.obj)(tx, userPosition)], }); }
function getBidPoolInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_bid_pool_info`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.auctionEpoch, `u64`)], }); }
function getBidPoolsInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_bid_pools_info`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.startFrom, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getLeadingBeesInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_leading_bees_info`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.startFrom, `${structs_1.Option.$typeName}<u64>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getPositionsForAllTrainers(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_positions_for_all_trainers`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.startFrom, `${structs_1.Option.$typeName}<address>`), (0, util_1.pure)(tx, args.limit, `u64`)], }); }
function getQueenCompetitionInfo(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_queen_competition_info`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER)], }); }
function getQueenCustodyInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_queen_custody_info`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.trainerAddr, `address`)], }); }
function getUserPositionInfo(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::get_user_position_info`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.trainerAddr, `address`)], }); }
function incrementEnergyAndHealth(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::increment_energy_and_health`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.auctionOverForEpoch, `u64`), (0, util_1.pure)(tx, args.simulatedHiveBuyback, `u64`), (0, util_1.pure)(tx, args.simulatedHoneyBuyback, `u64`)], }); }
function incrementQueenMaker(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::increment_queen_maker`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, QUEEN_MAKER)], }); }
function incrementQueenMakerObj(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::increment_queen_maker_obj`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER)], }); }
function initQueenMaker(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::init_queen_maker`, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.hiveKraftCap), (0, util_1.pure)(tx, args.initTaxAllowed, `u64`), (0, util_1.pure)(tx, args.unlimitedDepositWindow, `u64`), (0, util_1.pure)(tx, args.limitedDepositWindow, `u64`), (0, util_1.pure)(tx, args.cooldownPeriod, `u64`)], }); }
function limitDepositsForExistingBidders(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::limit_deposits_for_existing_bidders`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.curEpoch, `u64`), (0, util_1.pure)(tx, args.curTimestamp, `u64`)], }); }
function maxAddableToBid(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::max_addable_to_bid`, arguments: [(0, util_1.pure)(tx, args.limitedDepositWindow, `u64`), (0, util_1.pure)(tx, args.unlimitedDepositsCloseMs, `u64`), (0, util_1.pure)(tx, args.curTimestamp, `u64`), (0, util_1.pure)(tx, args.existingBid, `u64`)], }); }
function mintHiveForDragonBees(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::mint_hive_for_dragon_bees`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.pure)(tx, args.hiveToMint, `u64`), (0, util_1.pure)(tx, args.treasuryPct, `u64`)], }); }
function updateLeadingBees(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::update_leading_bees`, arguments: [(0, util_1.pure)(tx, args.auctionStartEpoch, `u64`), (0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.username, `${structs_2.String.$typeName}`), (0, util_1.pure)(tx, args.trainerAddr, `address`), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.suiBiddedByUser, `u64`), (0, util_1.pure)(tx, args.familyType, `u64`)], }); }
function updateQueenMaker(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::update_queen_maker`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.pure)(tx, args.newLiveStatus, `bool`), (0, util_1.pure)(tx, args.priceToBeAQueen, `u64`), (0, util_1.pure)(tx, args.bidIncreasePct, `u64`), (0, util_1.pure)(tx, args.bidDecreasePct, `u64`), (0, util_1.pure)(tx, args.maxEggsPerQueen, `u64`), (0, util_1.pure)(tx, args.energyTax, `u64`), (0, util_1.pure)(tx, args.unlimitedDepositWindow, `u64`), (0, util_1.pure)(tx, args.limitedDepositWindow, `u64`), (0, util_1.pure)(tx, args.cooldownPeriod, `u64`)], }); }
function withdrawBeeAfterCompetition(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::queen_maker::withdraw_bee_after_competition`, arguments: [(0, util_1.obj)(tx, QUEEN_MAKER), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer)], }); }

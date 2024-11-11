"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.setConsumptionPct = setConsumptionPct;
exports.setRules = setRules;
exports.verify = verify;
exports.swapMemeWithTax = swapMemeWithTax;
exports.addBribeForEmissions = addBribeForEmissions;
exports.claimVotingRewardsTwoPoolWithBurnTax = claimVotingRewardsTwoPoolWithBurnTax;
exports.addLiquidityToAmmPoolBurnTax = addLiquidityToAmmPoolBurnTax;
exports.buyMemes = buyMemes;
exports.calculateMarketcap = calculateMarketcap;
exports.claimMemeForBee = claimMemeForBee;
exports.claimMemePoolFee = claimMemePoolFee;
exports.computeMemeToBuy = computeMemeToBuy;
exports.computeNextStepPrice = computeNextStepPrice;
exports.computeSuiToReturnForMemes = computeSuiToReturnForMemes;
exports.entryAddLiquidityToAmmPoolBurnTax = entryAddLiquidityToAmmPoolBurnTax;
exports.entryBuyMemes = entryBuyMemes;
exports.entryBuyMemesSlippage = entryBuyMemesSlippage;
exports.entryBuyMemesWithTax = entryBuyMemesWithTax;
exports.entryBuyMemesWithTaxSlippage = entryBuyMemesWithTaxSlippage;
exports.entryRemoveLiquidityToAmmPoolBurnTax = entryRemoveLiquidityToAmmPoolBurnTax;
exports.entrySellMemes = entrySellMemes;
exports.entrySellMemesSlippage = entrySellMemesSlippage;
exports.entrySellMemesWithTax = entrySellMemesWithTax;
exports.entrySellMemesWithTaxSlippage = entrySellMemesWithTaxSlippage;
exports.initMemeLaunchpad = initMemeLaunchpad;
exports.initMemePool = initMemePool;
exports.internalBuyMemes = internalBuyMemes;
exports.internalSellMemes = internalSellMemes;
exports.migrateLiquidityToAmmPool = migrateLiquidityToAmmPool;
exports.queryMemesBalanceForDragonBee = queryMemesBalanceForDragonBee;
exports.queryMemesByDragonBee = queryMemesByDragonBee;
exports.removeLiquidityFromAmmPoolBurnTax = removeLiquidityFromAmmPoolBurnTax;
exports.sellMemes = sellMemes;
exports.switchMemeLaunchpad = switchMemeLaunchpad;
exports.transferMemeBalanceAsToken = transferMemeBalanceAsToken;
exports.transferMemeToken = transferMemeToken;
exports.unwrapMemeTokensToCoins = unwrapMemeTokensToCoins;
exports.updateLaunchpadMemeSupplyConfig = updateLaunchpadMemeSupplyConfig;
exports.updateLaunchpadPoolInitConfig = updateLaunchpadPoolInitConfig;
exports.updateMemeLaunchpad = updateMemeLaunchpad;
exports.updateMemePool = updateMemePool;
const __1 = require("..");
const PUBLISHED_AT = __1.memepad.PUBLISHED_AT;
const CLOCK = __1.memepad.CLOCK;
const MEME_LAUNCHPAD = __1.memepad.MEME_LAUNCHPAD;
const TWO_POOL_REGISTRY = __1.memepad.TWO_POOL_REGISTRY;
const YIELD_FLOW = __1.memepad.YIELD_FLOW;
const YIELD_FARM = __1.memepad.YIELD_FARM;
const SUI_FEE_COLLECTOR = __1.memepad.SUI_FEE_COLLECTOR;
const BEES_MANAGER = __1.memepad.BEES_MANAGER;
const DRAGON_FOOD = __1.memepad.DRAGON_FOOD;
const structs_1 = require("../../_dependencies/source/0x1/ascii/structs");
const structs_2 = require("../../_dependencies/source/0x1/option/structs");
const structs_3 = require("../../_dependencies/source/0x1/string/structs");
const util_1 = require("../../_framework/util");
function init(tx) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::init`, arguments: [], }); }
function setConsumptionPct(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::set_consumption_pct`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.obj)(tx, args.newBurnPcts)], }); }
function setRules(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::set_rules`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.policyCap), (0, util_1.pure)(tx, args.burnPct, `u64`)], }); }
function verify(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::verify`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.request)], }); }
function swapMemeWithTax(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::swap_meme_with_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.ammPool), (0, util_1.obj)(tx, args.suiIn), (0, util_1.pure)(tx, args.suiInAmt, `u64`), (0, util_1.pure)(tx, args.suiOutMin, `u64`), (0, util_1.obj)(tx, args.memeTokenIn), (0, util_1.pure)(tx, args.memeTokenInAmt, `u64`), (0, util_1.pure)(tx, args.memeOutMin, `u64`), (0, util_1.pure)(tx, args.isGiveIn, `bool`)], }); }
function addBribeForEmissions(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::add_bribe_for_emissions`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, args.poolHive), (0, util_1.pure)(tx, args.numCycles, `u64`)], }); }
function claimVotingRewardsTwoPoolWithBurnTax(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::claim_voting_rewards_two_pool_with_burn_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, DRAGON_FOOD), (0, util_1.obj)(tx, YIELD_FARM), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, args.poolHive), (0, util_1.obj)(tx, args.dragonTrainer)], }); }
function addLiquidityToAmmPoolBurnTax(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::add_liquidity_to_amm_pool_burn_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.ammPool), (0, util_1.obj)(tx, args.suiBalance), (0, util_1.obj)(tx, args.memeBalance), (0, util_1.pure)(tx, args.minLpToMint, `u64`)], }); }
function buyMemes(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::buy_memes`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.suiAmt, `u64`)], }); }
function calculateMarketcap(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::calculate_marketcap`, arguments: [(0, util_1.pure)(tx, args.cur1MPrice, `u64`), (0, util_1.pure)(tx, args.totalMemeSupply, `u64`)], }); }
function claimMemeForBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::claim_meme_for_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function claimMemePoolFee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::claim_meme_pool_fee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, SUI_FEE_COLLECTOR)], }); }
function computeMemeToBuy(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::compute_meme_to_buy`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.memePool), (0, util_1.pure)(tx, args.suiAmt, `u64`)], }); }
function computeNextStepPrice(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::compute_next_step_price`, arguments: [(0, util_1.pure)(tx, args.a, `u256`), (0, util_1.pure)(tx, args.b, `u256`), (0, util_1.pure)(tx, args.curStep, `u64`), (0, util_1.pure)(tx, args.meanFdvIncreasePerStep, `u64`), (0, util_1.pure)(tx, args.curMarketCap, `u64`), (0, util_1.pure)(tx, args.totalMemeSupply, `u64`), (0, util_1.pure)(tx, args.isBuy, `bool`)], }); }
function computeSuiToReturnForMemes(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::compute_sui_to_return_for_memes`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.memePool), (0, util_1.pure)(tx, args.memeAmt, `u64`)], }); }
function entryAddLiquidityToAmmPoolBurnTax(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_add_liquidity_to_amm_pool_burn_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.ammPool), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.suiToAdd, `u64`), (0, util_1.obj)(tx, args.memeToken), (0, util_1.pure)(tx, args.memeToAdd, `u64`), (0, util_1.pure)(tx, args.minLpToMint, `u64`)], }); }
function entryBuyMemes(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_buy_memes`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.suiAmt, `u64`)], }); }
function entryBuyMemesSlippage(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_buy_memes_slippage`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.suiAmt, `u64`), (0, util_1.pure)(tx, args.minMemeToBuy, `u64`)], }); }
function entryBuyMemesWithTax(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_buy_memes_with_tax`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.suiAmt, `u64`)], }); }
function entryBuyMemesWithTaxSlippage(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_buy_memes_with_tax_slippage`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.suiAmt, `u64`), (0, util_1.pure)(tx, args.minMemeToBuy, `u64`)], }); }
function entryRemoveLiquidityToAmmPoolBurnTax(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_remove_liquidity_to_amm_pool_burn_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.ammPool), (0, util_1.obj)(tx, args.lpCoin), (0, util_1.pure)(tx, args.lpToBurn, `u64`), (0, util_1.pure)(tx, args.coinXOutVal, `u64`), (0, util_1.pure)(tx, args.coinYOutVal, `u64`), (0, util_1.pure)(tx, args.maxLpCoinsToBurn, `u64`)], }); }
function entrySellMemes(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_sell_memes`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.memeCoin), (0, util_1.pure)(tx, args.memesAmt, `u64`)], }); }
function entrySellMemesSlippage(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_sell_memes_slippage`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.memeCoin), (0, util_1.pure)(tx, args.memesAmt, `u64`), (0, util_1.pure)(tx, args.minSuiToReceive, `u64`)], }); }
function entrySellMemesWithTax(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_sell_memes_with_tax`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.memeToken), (0, util_1.pure)(tx, args.memesAmt, `u64`)], }); }
function entrySellMemesWithTaxSlippage(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_sell_memes_with_tax_slippage`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.memeToken), (0, util_1.pure)(tx, args.memesAmt, `u64`), (0, util_1.pure)(tx, args.minSuiToReceive, `u64`)], }); }
function initMemeLaunchpad(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::init_meme_launchpad`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.memeCap), (0, util_1.obj)(tx, args.gameMasterKey), (0, util_1.pure)(tx, args.isLive, `bool`), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.weights, `vector<u64>`)], }); }
function initMemePool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::init_meme_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.obj)(tx, YIELD_FLOW), (0, util_1.obj)(tx, TWO_POOL_REGISTRY), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.treasuryCap), (0, util_1.obj)(tx, SUI_FEE_COLLECTOR), (0, util_1.obj)(tx, args.metadata), (0, util_1.pure)(tx, args.name, `${structs_3.String.$typeName}`), (0, util_1.pure)(tx, args.symbol, `${structs_1.String.$typeName}`), (0, util_1.pure)(tx, args.description, `${structs_3.String.$typeName}`), (0, util_1.pure)(tx, args.url, `${structs_1.String.$typeName}`), (0, util_1.pure)(tx, args.twitter, `${structs_3.String.$typeName}`), (0, util_1.pure)(tx, args.telegram, `${structs_3.String.$typeName}`), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.burnTax, `u64`), (0, util_1.pure)(tx, args.bribeCycles, `u64`)], }); }
function internalBuyMemes(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::internal_buy_memes`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.suiBalance)], }); }
function internalSellMemes(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::internal_sell_memes`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.memeBalance)], }); }
function migrateLiquidityToAmmPool(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::migrate_liquidity_to_amm_pool`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.ammPool)], }); }
function queryMemesBalanceForDragonBee(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::query_memes_balance_for_dragon_bee`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`)], }); }
function queryMemesByDragonBee(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::query_memes_by_dragon_bee`, arguments: [(0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.obj)(tx, BEES_MANAGER), (0, util_1.obj)(tx, args.dragonTrainer), (0, util_1.pure)(tx, args.beeVersion, `u64`), (0, util_1.pure)(tx, args.startFrom, `${structs_2.Option.$typeName}<${structs_1.String.$typeName}>`)], }); }
function removeLiquidityFromAmmPoolBurnTax(tx, typeArgs, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::remove_liquidity_from_amm_pool_burn_tax`, typeArguments: typeArgs, arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.ammPool), (0, util_1.obj)(tx, args.lpBalance), (0, util_1.pure)(tx, args.coinXOutVal, `u64`), (0, util_1.pure)(tx, args.coinYOutVal, `u64`), (0, util_1.pure)(tx, args.maxLpCoinsToBurn, `u64`)], }); }
function sellMemes(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::sell_memes`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, CLOCK), (0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.memeCoin), (0, util_1.pure)(tx, args.memesAmt, `u64`)], }); }
function switchMemeLaunchpad(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::switch_meme_launchpad`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.pure)(tx, args.isLive, `bool`), (0, util_1.pure)(tx, args.noBeeLaunchEnabled, `bool`)], }); }
function transferMemeBalanceAsToken(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::transfer_meme_balance_as_token`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.memeBalance), (0, util_1.pure)(tx, args.recepient, `address`)], }); }
function transferMemeToken(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::transfer_meme_token`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.memeToken), (0, util_1.pure)(tx, args.transferAmt, `u64`), (0, util_1.pure)(tx, args.receipient, `address`)], }); }
function unwrapMemeTokensToCoins(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::unwrap_meme_tokens_to_coins`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.memePool), (0, util_1.obj)(tx, args.policy), (0, util_1.obj)(tx, args.memeToken), (0, util_1.pure)(tx, args.toCoinAmt, `u64`)], }); }
function updateLaunchpadMemeSupplyConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::update_launchpad_meme_supply_config`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.pure)(tx, args.bondingCurvePct, `u64`), (0, util_1.pure)(tx, args.poolAmtPct, `u64`), (0, util_1.pure)(tx, args.bribesAmtPct, `u64`), (0, util_1.pure)(tx, args.beeAmtPct, `u64`)], }); }
function updateLaunchpadPoolInitConfig(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::update_launchpad_pool_init_config`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.pure)(tx, args.initParams, `vector<u64>`), (0, util_1.pure)(tx, args.weights, `vector<u64>`)], }); }
function updateMemeLaunchpad(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::update_meme_launchpad`, arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, MEME_LAUNCHPAD), (0, util_1.pure)(tx, args.newPoolInitFee, `u64`), (0, util_1.pure)(tx, args.adminFeePct, `u64`), (0, util_1.pure)(tx, args.newMarketCapForMigration, `u64`), (0, util_1.pure)(tx, args.meanFdvIncreasePerStep, `u64`), (0, util_1.pure)(tx, args.newA, `u64`), (0, util_1.pure)(tx, args.newB, `u64`), (0, util_1.pure)(tx, args.newSwapFeeBps, `u64`)], }); }
function updateMemePool(tx, typeArg, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::update_meme_pool`, typeArguments: [typeArg], arguments: [(0, util_1.obj)(tx, args.cap), (0, util_1.obj)(tx, args.memePool), (0, util_1.pure)(tx, args.newMarketCapForMigration, `u64`), (0, util_1.pure)(tx, args.meanFdvIncreasePerStep, `u64`), (0, util_1.pure)(tx, args.newA, `u64`), (0, util_1.pure)(tx, args.newB, `u64`), (0, util_1.pure)(tx, args.newSwapFeeBps, `u64`)], }); }

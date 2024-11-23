import { memepad } from ".."
const PUBLISHED_AT = memepad.PUBLISHED_AT
const CLOCK = memepad.CLOCK
const MEME_LAUNCHPAD = memepad.MEME_LAUNCHPAD
const TWO_POOL_REGISTRY = memepad.TWO_POOL_REGISTRY
const YIELD_FLOW = memepad.YIELD_FLOW
const YIELD_FARM = memepad.YIELD_FARM
const SUI_FEE_COLLECTOR = memepad.SUI_FEE_COLLECTOR
const BEES_MANAGER = memepad.BEES_MANAGER
const DRAGON_FOOD = memepad.DRAGON_FOOD

import { String as String1 } from "../../source/0x1/ascii/structs";
import { Option } from "../../source/0x1/option/structs";
import { String } from "../../source/0x1/string/structs";
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export function init(tx: Transaction,) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::init`, arguments: [], }) }

export interface SetConsumptionPctArgs { policy: TransactionObjectInput; policyCap: TransactionObjectInput; newBurnPcts: TransactionObjectInput }

export function setConsumptionPct(tx: Transaction, typeArg: string, args: SetConsumptionPctArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::set_consumption_pct`, typeArguments: [typeArg], arguments: [obj(tx, args.policy), obj(tx, args.policyCap), obj(tx, args.newBurnPcts)], }) }

export interface SetRulesArgs { policy: TransactionObjectInput; policyCap: TransactionObjectInput; burnPct: bigint | TransactionArgument }

export function setRules(tx: Transaction, typeArg: string, args: SetRulesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::set_rules`, typeArguments: [typeArg], arguments: [obj(tx, args.policy), obj(tx, args.policyCap), pure(tx, args.burnPct, `u64`)], }) }

export interface VerifyArgs { policy: TransactionObjectInput; request: TransactionObjectInput }

export function verify(tx: Transaction, typeArg: string, args: VerifyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::verify`, typeArguments: [typeArg], arguments: [obj(tx, args.policy), obj(tx, args.request)], }) }

export interface SwapMemeWithTaxArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput; ammPool: TransactionObjectInput; suiIn: TransactionObjectInput; suiInAmt: bigint | TransactionArgument; suiOutMin: bigint | TransactionArgument; memeTokenIn: TransactionObjectInput; memeTokenInAmt: bigint | TransactionArgument; memeOutMin: bigint | TransactionArgument; isGiveIn: boolean | TransactionArgument }

export function swapMemeWithTax(tx: Transaction, typeArgs: [string, string], args: SwapMemeWithTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::swap_meme_with_tax`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.ammPool), obj(tx, args.suiIn), pure(tx, args.suiInAmt, `u64`), pure(tx, args.suiOutMin, `u64`), obj(tx, args.memeTokenIn), pure(tx, args.memeTokenInAmt, `u64`), pure(tx, args.memeOutMin, `u64`), pure(tx, args.isGiveIn, `bool`)], }) }

export interface AddBribeForEmissionsArgs {  memePool: TransactionObjectInput;  poolHive: TransactionObjectInput; numCycles: bigint | TransactionArgument }

export function addBribeForEmissions(tx: Transaction, typeArgs: [string, string], args: AddBribeForEmissionsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::add_bribe_for_emissions`, typeArguments: typeArgs, arguments: [obj(tx, MEME_LAUNCHPAD), obj(tx, args.memePool), obj(tx, DRAGON_FOOD), obj(tx, args.poolHive), pure(tx, args.numCycles, `u64`)], }) }

export interface ClaimVotingRewardsTwoPoolWithBurnTaxArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput;  poolHive: TransactionObjectInput; dragonTrainer: TransactionObjectInput }

export function claimVotingRewardsTwoPoolWithBurnTax(tx: Transaction, typeArgs: [string, string, string], args: ClaimVotingRewardsTwoPoolWithBurnTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::claim_voting_rewards_two_pool_with_burn_tax`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, DRAGON_FOOD), obj(tx, YIELD_FARM), obj(tx, YIELD_FLOW), obj(tx, args.poolHive), obj(tx, args.dragonTrainer)], }) }

export interface AddLiquidityToAmmPoolBurnTaxArgs {  memePool: TransactionObjectInput; ammPool: TransactionObjectInput; suiBalance: TransactionObjectInput; memeBalance: TransactionObjectInput; minLpToMint: bigint | TransactionArgument }

export function addLiquidityToAmmPoolBurnTax(tx: Transaction, typeArgs: [string, string], args: AddLiquidityToAmmPoolBurnTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::add_liquidity_to_amm_pool_burn_tax`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.ammPool), obj(tx, args.suiBalance), obj(tx, args.memeBalance), pure(tx, args.minLpToMint, `u64`)], }) }

export interface BuyMemesArgs {  memePool: TransactionObjectInput; suiCoin: TransactionObjectInput; suiAmt: bigint | TransactionArgument }

export function buyMemes(tx: Transaction, typeArg: string, args: BuyMemesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::buy_memes`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.suiCoin), pure(tx, args.suiAmt, `u64`)], }) }

export interface CalculateMarketcapArgs { cur1MPrice: bigint | TransactionArgument; totalMemeSupply: bigint | TransactionArgument }

export function calculateMarketcap(tx: Transaction, args: CalculateMarketcapArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::calculate_marketcap`, arguments: [pure(tx, args.cur1MPrice, `u64`), pure(tx, args.totalMemeSupply, `u64`)], }) }

export interface ClaimMemeForBeeArgs {   memePool: TransactionObjectInput; policy: TransactionObjectInput; dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument }

export function claimMemeForBee(tx: Transaction, typeArg: string, args: ClaimMemeForBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::claim_meme_for_bee`, typeArguments: [typeArg], arguments: [obj(tx, MEME_LAUNCHPAD), obj(tx, BEES_MANAGER), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`)], }) }

export interface ClaimMemePoolFeeArgs {  memePool: TransactionObjectInput}

export function claimMemePoolFee(tx: Transaction, typeArg: string, args: ClaimMemePoolFeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::claim_meme_pool_fee`, typeArguments: [typeArg], arguments: [obj(tx, MEME_LAUNCHPAD), obj(tx, args.memePool), obj(tx, BEES_MANAGER), obj(tx, SUI_FEE_COLLECTOR)], }) }

export interface ComputeMemeToBuyArgs { memePool: TransactionObjectInput; suiAmt: bigint | TransactionArgument }

export function computeMemeToBuy(tx: Transaction, typeArg: string, args: ComputeMemeToBuyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::compute_meme_to_buy`, typeArguments: [typeArg], arguments: [obj(tx, args.memePool), pure(tx, args.suiAmt, `u64`)], }) }

export interface ComputeNextStepPriceArgs { a: bigint | TransactionArgument; b: bigint | TransactionArgument; curStep: bigint | TransactionArgument; meanFdvIncreasePerStep: bigint | TransactionArgument; curMarketCap: bigint | TransactionArgument; totalMemeSupply: bigint | TransactionArgument; isBuy: boolean | TransactionArgument }

export function computeNextStepPrice(tx: Transaction, args: ComputeNextStepPriceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::compute_next_step_price`, arguments: [pure(tx, args.a, `u256`), pure(tx, args.b, `u256`), pure(tx, args.curStep, `u64`), pure(tx, args.meanFdvIncreasePerStep, `u64`), pure(tx, args.curMarketCap, `u64`), pure(tx, args.totalMemeSupply, `u64`), pure(tx, args.isBuy, `bool`)], }) }

export interface ComputeSuiToReturnForMemesArgs { memePool: TransactionObjectInput; memeAmt: bigint | TransactionArgument }

export function computeSuiToReturnForMemes(tx: Transaction, typeArg: string, args: ComputeSuiToReturnForMemesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::compute_sui_to_return_for_memes`, typeArguments: [typeArg], arguments: [obj(tx, args.memePool), pure(tx, args.memeAmt, `u64`)], }) }

export interface EntryAddLiquidityToAmmPoolBurnTaxArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput; ammPool: TransactionObjectInput; suiCoin: TransactionObjectInput; suiToAdd: bigint | TransactionArgument; memeToken: TransactionObjectInput; memeToAdd: bigint | TransactionArgument; minLpToMint: bigint | TransactionArgument }

export function entryAddLiquidityToAmmPoolBurnTax(tx: Transaction, typeArgs: [string, string], args: EntryAddLiquidityToAmmPoolBurnTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_add_liquidity_to_amm_pool_burn_tax`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.ammPool), obj(tx, args.suiCoin), pure(tx, args.suiToAdd, `u64`), obj(tx, args.memeToken), pure(tx, args.memeToAdd, `u64`), pure(tx, args.minLpToMint, `u64`)], }) }

export interface EntryBuyMemesArgs {  memePool: TransactionObjectInput; suiCoin: TransactionObjectInput; suiAmt: bigint | TransactionArgument }

export function entryBuyMemes(tx: Transaction, typeArg: string, args: EntryBuyMemesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_buy_memes`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.suiCoin), pure(tx, args.suiAmt, `u64`)], }) }

export interface EntryBuyMemesSlippageArgs {  memePool: TransactionObjectInput; suiCoin: TransactionObjectInput; suiAmt: bigint | TransactionArgument; minMemeToBuy: bigint | TransactionArgument }

export function entryBuyMemesSlippage(tx: Transaction, typeArg: string, args: EntryBuyMemesSlippageArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_buy_memes_slippage`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.suiCoin), pure(tx, args.suiAmt, `u64`), pure(tx, args.minMemeToBuy, `u64`)], }) }

export interface EntryBuyMemesWithTaxArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput; suiCoin: TransactionObjectInput; suiAmt: bigint | TransactionArgument }

export function entryBuyMemesWithTax(tx: Transaction, typeArg: string, args: EntryBuyMemesWithTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_buy_memes_with_tax`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.suiCoin), pure(tx, args.suiAmt, `u64`)], }) }

export interface EntryBuyMemesWithTaxSlippageArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput; suiCoin: TransactionObjectInput; suiAmt: bigint | TransactionArgument; minMemeToBuy: bigint | TransactionArgument }

export function entryBuyMemesWithTaxSlippage(tx: Transaction, typeArg: string, args: EntryBuyMemesWithTaxSlippageArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_buy_memes_with_tax_slippage`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.suiCoin), pure(tx, args.suiAmt, `u64`), pure(tx, args.minMemeToBuy, `u64`)], }) }

export interface EntryRemoveLiquidityToAmmPoolBurnTaxArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput; ammPool: TransactionObjectInput; lpCoin: TransactionObjectInput; lpToBurn: bigint | TransactionArgument; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument }

export function entryRemoveLiquidityToAmmPoolBurnTax(tx: Transaction, typeArgs: [string, string], args: EntryRemoveLiquidityToAmmPoolBurnTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_remove_liquidity_to_amm_pool_burn_tax`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.ammPool), obj(tx, args.lpCoin), pure(tx, args.lpToBurn, `u64`), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`)], }) }

export interface EntrySellMemesArgs {  memePool: TransactionObjectInput; memeCoin: TransactionObjectInput; memesAmt: bigint | TransactionArgument }

export function entrySellMemes(tx: Transaction, typeArg: string, args: EntrySellMemesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_sell_memes`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.memeCoin), pure(tx, args.memesAmt, `u64`)], }) }

export interface EntrySellMemesSlippageArgs {  memePool: TransactionObjectInput; memeCoin: TransactionObjectInput; memesAmt: bigint | TransactionArgument; minSuiToReceive: bigint | TransactionArgument }

export function entrySellMemesSlippage(tx: Transaction, typeArg: string, args: EntrySellMemesSlippageArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_sell_memes_slippage`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.memeCoin), pure(tx, args.memesAmt, `u64`), pure(tx, args.minSuiToReceive, `u64`)], }) }

export interface EntrySellMemesWithTaxArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput; memeToken: TransactionObjectInput; memesAmt: bigint | TransactionArgument }

export function entrySellMemesWithTax(tx: Transaction, typeArg: string, args: EntrySellMemesWithTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_sell_memes_with_tax`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.memeToken), pure(tx, args.memesAmt, `u64`)], }) }

export interface EntrySellMemesWithTaxSlippageArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput; memeToken: TransactionObjectInput; memesAmt: bigint | TransactionArgument; minSuiToReceive: bigint | TransactionArgument }

export function entrySellMemesWithTaxSlippage(tx: Transaction, typeArg: string, args: EntrySellMemesWithTaxSlippageArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::entry_sell_memes_with_tax_slippage`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.memeToken), pure(tx, args.memesAmt, `u64`), pure(tx, args.minSuiToReceive, `u64`)], }) }

export interface InitMemeLaunchpadArgs { cap: TransactionObjectInput; memeCap: TransactionObjectInput; gameMasterKey: TransactionObjectInput; isLive: boolean | TransactionArgument; initParams: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function initMemeLaunchpad(tx: Transaction, args: InitMemeLaunchpadArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::init_meme_launchpad`, arguments: [obj(tx, args.cap), obj(tx, args.memeCap), obj(tx, args.gameMasterKey), pure(tx, args.isLive, `bool`), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface InitMemePoolArgs {    treasuryCap: TransactionObjectInput;  metadata: TransactionObjectInput; name: string | TransactionArgument; symbol: string | TransactionArgument; description: string | TransactionArgument; url: string | TransactionArgument; twitter: string | TransactionArgument; telegram: string | TransactionArgument; dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument; suiCoin: TransactionObjectInput; burnTax: bigint | TransactionArgument; bribeCycles: bigint | TransactionArgument }

export function initMemePool(tx: Transaction, typeArgs: [string, string], args: InitMemePoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::init_meme_pool`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, MEME_LAUNCHPAD), obj(tx, YIELD_FLOW), obj(tx, TWO_POOL_REGISTRY), obj(tx, BEES_MANAGER), obj(tx, args.treasuryCap), obj(tx, SUI_FEE_COLLECTOR), obj(tx, args.metadata), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.symbol, `${String1.$typeName}`), pure(tx, args.description, `${String.$typeName}`), pure(tx, args.url, `${String1.$typeName}`), pure(tx, args.twitter, `${String.$typeName}`), pure(tx, args.telegram, `${String.$typeName}`), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`), obj(tx, args.suiCoin), pure(tx, args.burnTax, `u64`), pure(tx, args.bribeCycles, `u64`)], }) }

export interface InternalBuyMemesArgs {  memePool: TransactionObjectInput; suiBalance: TransactionObjectInput }

export function internalBuyMemes(tx: Transaction, typeArg: string, args: InternalBuyMemesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::internal_buy_memes`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.suiBalance)], }) }

export interface InternalSellMemesArgs {  memePool: TransactionObjectInput; memeBalance: TransactionObjectInput }

export function internalSellMemes(tx: Transaction, typeArg: string, args: InternalSellMemesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::internal_sell_memes`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.memeBalance)], }) }

export interface MigrateLiquidityToAmmPoolArgs {   memePool: TransactionObjectInput; ammPool: TransactionObjectInput }

export function migrateLiquidityToAmmPool(tx: Transaction, typeArgs: [string, string], args: MigrateLiquidityToAmmPoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::migrate_liquidity_to_amm_pool`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, MEME_LAUNCHPAD), obj(tx, args.memePool), obj(tx, args.ammPool)], }) }

export interface QueryMemesBalanceForDragonBeeArgs {   dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument }

export function queryMemesBalanceForDragonBee(tx: Transaction, typeArg: string, args: QueryMemesBalanceForDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::query_memes_balance_for_dragon_bee`, typeArguments: [typeArg], arguments: [obj(tx, MEME_LAUNCHPAD), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`)], }) }

export interface QueryMemesByDragonBeeArgs {   dragonTrainer: TransactionObjectInput; beeVersion: bigint | TransactionArgument; startFrom: (string | TransactionArgument | TransactionArgument | null) }

export function queryMemesByDragonBee(tx: Transaction, args: QueryMemesByDragonBeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::query_memes_by_dragon_bee`, arguments: [obj(tx, MEME_LAUNCHPAD), obj(tx, BEES_MANAGER), obj(tx, args.dragonTrainer), pure(tx, args.beeVersion, `u64`), pure(tx, args.startFrom, `${Option.$typeName}<${String1.$typeName}>`)], }) }

export interface RemoveLiquidityFromAmmPoolBurnTaxArgs {  memePool: TransactionObjectInput; policy: TransactionObjectInput; ammPool: TransactionObjectInput; lpBalance: TransactionObjectInput; coinXOutVal: bigint | TransactionArgument; coinYOutVal: bigint | TransactionArgument; maxLpCoinsToBurn: bigint | TransactionArgument }

export function removeLiquidityFromAmmPoolBurnTax(tx: Transaction, typeArgs: [string, string], args: RemoveLiquidityFromAmmPoolBurnTaxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::remove_liquidity_from_amm_pool_burn_tax`, typeArguments: typeArgs, arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.ammPool), obj(tx, args.lpBalance), pure(tx, args.coinXOutVal, `u64`), pure(tx, args.coinYOutVal, `u64`), pure(tx, args.maxLpCoinsToBurn, `u64`)], }) }

export interface SellMemesArgs {  memePool: TransactionObjectInput; memeCoin: TransactionObjectInput; memesAmt: bigint | TransactionArgument }

export function sellMemes(tx: Transaction, typeArg: string, args: SellMemesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::sell_memes`, typeArguments: [typeArg], arguments: [obj(tx, CLOCK), obj(tx, args.memePool), obj(tx, args.memeCoin), pure(tx, args.memesAmt, `u64`)], }) }

export interface SwitchMemeLaunchpadArgs { cap: TransactionObjectInput;  isLive: boolean | TransactionArgument; noBeeLaunchEnabled: boolean | TransactionArgument }

export function switchMemeLaunchpad(tx: Transaction, args: SwitchMemeLaunchpadArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::switch_meme_launchpad`, arguments: [obj(tx, args.cap), obj(tx, MEME_LAUNCHPAD), pure(tx, args.isLive, `bool`), pure(tx, args.noBeeLaunchEnabled, `bool`)], }) }

export interface TransferMemeBalanceAsTokenArgs { memePool: TransactionObjectInput; policy: TransactionObjectInput; memeBalance: TransactionObjectInput; recepient: string | TransactionArgument }

export function transferMemeBalanceAsToken(tx: Transaction, typeArg: string, args: TransferMemeBalanceAsTokenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::transfer_meme_balance_as_token`, typeArguments: [typeArg], arguments: [obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.memeBalance), pure(tx, args.recepient, `address`)], }) }

export interface TransferMemeTokenArgs { memePool: TransactionObjectInput; policy: TransactionObjectInput; memeToken: TransactionObjectInput; transferAmt: bigint | TransactionArgument; receipient: string | TransactionArgument }

export function transferMemeToken(tx: Transaction, typeArg: string, args: TransferMemeTokenArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::transfer_meme_token`, typeArguments: [typeArg], arguments: [obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.memeToken), pure(tx, args.transferAmt, `u64`), pure(tx, args.receipient, `address`)], }) }

export interface UnwrapMemeTokensToCoinsArgs { memePool: TransactionObjectInput; policy: TransactionObjectInput; memeToken: TransactionObjectInput; toCoinAmt: bigint | TransactionArgument }

export function unwrapMemeTokensToCoins(tx: Transaction, typeArg: string, args: UnwrapMemeTokensToCoinsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::unwrap_meme_tokens_to_coins`, typeArguments: [typeArg], arguments: [obj(tx, args.memePool), obj(tx, args.policy), obj(tx, args.memeToken), pure(tx, args.toCoinAmt, `u64`)], }) }

export interface UpdateLaunchpadMemeSupplyConfigArgs { cap: TransactionObjectInput;  bondingCurvePct: bigint | TransactionArgument; poolAmtPct: bigint | TransactionArgument; bribesAmtPct: bigint | TransactionArgument; beeAmtPct: bigint | TransactionArgument }

export function updateLaunchpadMemeSupplyConfig(tx: Transaction, args: UpdateLaunchpadMemeSupplyConfigArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::update_launchpad_meme_supply_config`, arguments: [obj(tx, args.cap), obj(tx, MEME_LAUNCHPAD), pure(tx, args.bondingCurvePct, `u64`), pure(tx, args.poolAmtPct, `u64`), pure(tx, args.bribesAmtPct, `u64`), pure(tx, args.beeAmtPct, `u64`)], }) }

export interface UpdateLaunchpadPoolInitConfigArgs { cap: TransactionObjectInput;  initParams: Array<bigint | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument }

export function updateLaunchpadPoolInitConfig(tx: Transaction, args: UpdateLaunchpadPoolInitConfigArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::update_launchpad_pool_init_config`, arguments: [obj(tx, args.cap), obj(tx, MEME_LAUNCHPAD), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.weights, `vector<u64>`)], }) }

export interface UpdateMemeLaunchpadArgs { cap: TransactionObjectInput;  newPoolInitFee: bigint | TransactionArgument; adminFeePct: bigint | TransactionArgument; newMarketCapForMigration: bigint | TransactionArgument; meanFdvIncreasePerStep: bigint | TransactionArgument; newA: bigint | TransactionArgument; newB: bigint | TransactionArgument; newSwapFeeBps: bigint | TransactionArgument }

export function updateMemeLaunchpad(tx: Transaction, args: UpdateMemeLaunchpadArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::update_meme_launchpad`, arguments: [obj(tx, args.cap), obj(tx, MEME_LAUNCHPAD), pure(tx, args.newPoolInitFee, `u64`), pure(tx, args.adminFeePct, `u64`), pure(tx, args.newMarketCapForMigration, `u64`), pure(tx, args.meanFdvIncreasePerStep, `u64`), pure(tx, args.newA, `u64`), pure(tx, args.newB, `u64`), pure(tx, args.newSwapFeeBps, `u64`)], }) }

export interface UpdateMemePoolArgs { cap: TransactionObjectInput; memePool: TransactionObjectInput; newMarketCapForMigration: bigint | TransactionArgument; meanFdvIncreasePerStep: bigint | TransactionArgument; newA: bigint | TransactionArgument; newB: bigint | TransactionArgument; newSwapFeeBps: bigint | TransactionArgument }

export function updateMemePool(tx: Transaction, typeArg: string, args: UpdateMemePoolArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::memepad::update_meme_pool`, typeArguments: [typeArg], arguments: [obj(tx, args.cap), obj(tx, args.memePool), pure(tx, args.newMarketCapForMigration, `u64`), pure(tx, args.meanFdvIncreasePerStep, `u64`), pure(tx, args.newA, `u64`), pure(tx, args.newB, `u64`), pure(tx, args.newSwapFeeBps, `u64`)], }) }

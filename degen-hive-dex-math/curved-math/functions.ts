import {PUBLISHED_AT} from "..";
import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

export interface AddLiquidityComputationArgs { clock: ObjectArg; poolConfig: ObjectArg; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; providedTokens: Array<bigint | TransactionArgument> | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function addLiquidityComputation( txb: TransactionBlock, args: AddLiquidityComputationArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::add_liquidity_computation`, arguments: [ obj(txb, args.clock), obj(txb, args.poolConfig), pure(txb, args.existingLiquidity, `vector<u256>`), pure(txb, args.providedTokens, `vector<u256>`), pure(txb, args.lpSupply, `u256`) ], }) }

export interface AssertNewConfigParamsArgs { newMidFee: bigint | TransactionArgument; newOutFee: bigint | TransactionArgument; newFeeGamma: bigint | TransactionArgument; newMaHalfTime: bigint | TransactionArgument; newAllowedExtraProfit: bigint | TransactionArgument; newAdjustmentStep: bigint | TransactionArgument }

export function assertNewConfigParams( txb: TransactionBlock, args: AssertNewConfigParamsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::assert_new_config_params`, arguments: [ pure(txb, args.newMidFee, `u64`), pure(txb, args.newOutFee, `u64`), pure(txb, args.newFeeGamma, `u64`), pure(txb, args.newMaHalfTime, `u64`), pure(txb, args.newAllowedExtraProfit, `u64`), pure(txb, args.newAdjustmentStep, `u64`) ], }) }

export interface CalcGeometricMeanArgs { xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; sort: boolean | TransactionArgument }

export function calcGeometricMean( txb: TransactionBlock, args: CalcGeometricMeanArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::calc_geometric_mean`, arguments: [ pure(txb, args.xUnsorted, `vector<u256>`), pure(txb, args.sort, `bool`) ], }) }

export interface CalcWithdrawOneCoinArgs { clock: ObjectArg; poolConfig: ObjectArg; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpSupply: bigint | TransactionArgument; withdrawTokenIndex: bigint | TransactionArgument; burnAmount: bigint | TransactionArgument; updateD: boolean | TransactionArgument; calcPrice: boolean | TransactionArgument }

export function calcWithdrawOneCoin( txb: TransactionBlock, args: CalcWithdrawOneCoinArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::calc_withdraw_one_coin`, arguments: [ obj(txb, args.clock), obj(txb, args.poolConfig), pure(txb, args.existingLiquidity, `vector<u256>`), pure(txb, args.lpSupply, `u256`), pure(txb, args.withdrawTokenIndex, `u64`), pure(txb, args.burnAmount, `u256`), pure(txb, args.updateD, `bool`), pure(txb, args.calcPrice, `bool`) ], }) }

export interface CalculateFeeChargedArgs { initXp: bigint | TransactionArgument; updatedXp: bigint | TransactionArgument; initD: bigint | TransactionArgument; updatedD: bigint | TransactionArgument; priceScale: bigint | TransactionArgument; fee: bigint | TransactionArgument }

export function calculateFeeCharged( txb: TransactionBlock, args: CalculateFeeChargedArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::calculate_fee_charged`, arguments: [ pure(txb, args.initXp, `u256`), pure(txb, args.updatedXp, `u256`), pure(txb, args.initD, `u256`), pure(txb, args.updatedD, `u256`), pure(txb, args.priceScale, `u256`), pure(txb, args.fee, `u256`) ], }) }

export interface FeeArgs { xp: Array<bigint | TransactionArgument> | TransactionArgument; midFee: bigint | TransactionArgument; outFee: bigint | TransactionArgument; feeGamma: bigint | TransactionArgument }

export function fee( txb: TransactionBlock, args: FeeArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::fee`, arguments: [ pure(txb, args.xp, `vector<u256>`), pure(txb, args.midFee, `u64`), pure(txb, args.outFee, `u64`), pure(txb, args.feeGamma, `u256`) ], }) }

export interface ComputeAskAmountArgs { clock: ObjectArg; poolConfig: ObjectArg; offeredAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; providedAmount: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function computeAskAmount( txb: TransactionBlock, args: ComputeAskAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::compute_ask_amount`, arguments: [ obj(txb, args.clock), obj(txb, args.poolConfig), pure(txb, args.offeredAssetIndex, `u64`), pure(txb, args.askAssetIndex, `u64`), pure(txb, args.providedAmount, `u256`), pure(txb, args.existingLiquidity, `vector<u256>`), pure(txb, args.lpSupply, `u256`) ], }) }

export interface ComputeOfferAmountArgs { clock: ObjectArg; poolConfig: ObjectArg; offeredAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; askAmount: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function computeOfferAmount( txb: TransactionBlock, args: ComputeOfferAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::compute_offer_amount`, arguments: [ obj(txb, args.clock), obj(txb, args.poolConfig), pure(txb, args.offeredAssetIndex, `u64`), pure(txb, args.askAssetIndex, `u64`), pure(txb, args.askAmount, `u256`), pure(txb, args.existingLiquidity, `vector<u256>`), pure(txb, args.lpSupply, `u256`) ], }) }

export interface EmaRecorderArgs { poolConfig: ObjectArg; tPrev: bigint | TransactionArgument; curTimestamp: bigint | TransactionArgument; lastPrices: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function emaRecorder( txb: TransactionBlock, args: EmaRecorderArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::ema_recorder`, arguments: [ obj(txb, args.poolConfig), pure(txb, args.tPrev, `u256`), pure(txb, args.curTimestamp, `u256`), pure(txb, args.lastPrices, `vector<u256>`), pure(txb, args.nCoins, `u64`) ], }) }

export interface XpArgs { x: Array<bigint | TransactionArgument> | TransactionArgument; p: Array<bigint | TransactionArgument> | TransactionArgument }

export function xp( txb: TransactionBlock, args: XpArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::xp`, arguments: [ pure(txb, args.x, `vector<u256>`), pure(txb, args.p, `vector<u256>`) ], }) }

export interface GetCurAGammaArgs { clock: ObjectArg; curvedConfig: ObjectArg }

export function getCurAGamma( txb: TransactionBlock, args: GetCurAGammaArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_cur_A_gamma`, arguments: [ obj(txb, args.clock), obj(txb, args.curvedConfig) ], }) }

export function getCurvedConfigAmpGammaParams( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_amp_gamma_params`, arguments: [ obj(txb, curvedConfig) ], }) }

export function getCurvedConfigFeeParams( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_fee_params`, arguments: [ obj(txb, curvedConfig) ], }) }

export function getCurvedConfigPricesInfo( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_prices_info`, arguments: [ obj(txb, curvedConfig) ], }) }

export function getCurvedConfigScalingFactor( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_scaling_factor`, arguments: [ obj(txb, curvedConfig) ], }) }

export function getCurvedConfigXcpParams( txb: TransactionBlock, curvedConfig: ObjectArg ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_xcp_params`, arguments: [ obj(txb, curvedConfig) ], }) }

export interface GetDxArgs { xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; priceVec: Array<bigint | TransactionArgument> | TransactionArgument; amp: bigint | TransactionArgument; gamma: bigint | TransactionArgument; midFee: bigint | TransactionArgument; outFee: bigint | TransactionArgument; feeGamma: bigint | TransactionArgument; d0: bigint | TransactionArgument; offeredAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; askAmount: bigint | TransactionArgument }

export function getDx( txb: TransactionBlock, args: GetDxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dx`, arguments: [ pure(txb, args.xUnsorted, `vector<u256>`), pure(txb, args.priceVec, `vector<u256>`), pure(txb, args.amp, `u64`), pure(txb, args.gamma, `u256`), pure(txb, args.midFee, `u64`), pure(txb, args.outFee, `u64`), pure(txb, args.feeGamma, `u256`), pure(txb, args.d0, `u256`), pure(txb, args.offeredAssetIndex, `u64`), pure(txb, args.askAssetIndex, `u64`), pure(txb, args.askAmount, `u256`) ], }) }

export interface GetDyArgs { xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; priceVec: Array<bigint | TransactionArgument> | TransactionArgument; amp: bigint | TransactionArgument; gamma: bigint | TransactionArgument; midFee: bigint | TransactionArgument; outFee: bigint | TransactionArgument; feeGamma: bigint | TransactionArgument; d0: bigint | TransactionArgument; xValue: bigint | TransactionArgument; i: bigint | TransactionArgument; j: bigint | TransactionArgument }

export function getDy( txb: TransactionBlock, args: GetDyArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dy`, arguments: [ pure(txb, args.xUnsorted, `vector<u256>`), pure(txb, args.priceVec, `vector<u256>`), pure(txb, args.amp, `u64`), pure(txb, args.gamma, `u256`), pure(txb, args.midFee, `u64`), pure(txb, args.outFee, `u64`), pure(txb, args.feeGamma, `u256`), pure(txb, args.d0, `u256`), pure(txb, args.xValue, `u256`), pure(txb, args.i, `u64`), pure(txb, args.j, `u64`) ], }) }

export function getMaxAmp( txb: TransactionBlock, nCoins: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_max_amp`, arguments: [ pure(txb, nCoins, `u64`) ], }) }

export function getMinAmp( txb: TransactionBlock, nCoins: bigint | TransactionArgument ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_min_amp`, arguments: [ pure(txb, nCoins, `u64`) ], }) }

export interface GetXcpArgs { d: bigint | TransactionArgument; priceScale: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function getXcp( txb: TransactionBlock, args: GetXcpArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_xcp`, arguments: [ pure(txb, args.d, `u256`), pure(txb, args.priceScale, `vector<u256>`), pure(txb, args.nCoins, `u256`) ], }) }

export interface HalfpowArgs { expNumerator: bigint | TransactionArgument; expDenominator: bigint | TransactionArgument; precision: bigint | TransactionArgument }

export function halfpow( txb: TransactionBlock, args: HalfpowArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::halfpow`, arguments: [ pure(txb, args.expNumerator, `u256`), pure(txb, args.expDenominator, `u256`), pure(txb, args.precision, `u256`) ], }) }

export interface InitializeCurvedConfigArgs { clock: ObjectArg; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; scalingFactor: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function initializeCurvedConfig( txb: TransactionBlock, args: InitializeCurvedConfigArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::initialize_curved_config`, arguments: [ obj(txb, args.clock), pure(txb, args.initParams, `vector<u64>`), pure(txb, args.initialPrices, `vector<u256>`), pure(txb, args.scalingFactor, `vector<u256>`), pure(txb, args.nCoins, `u128`) ], }) }

export interface NewtonDArgs { ann: bigint | TransactionArgument; gamma: bigint | TransactionArgument; xSorted: Array<bigint | TransactionArgument> | TransactionArgument; dValue: bigint | TransactionArgument }

export function newtonD( txb: TransactionBlock, args: NewtonDArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::newton_D`, arguments: [ pure(txb, args.ann, `u64`), pure(txb, args.gamma, `u256`), pure(txb, args.xSorted, `vector<u256>`), pure(txb, args.dValue, `u256`) ], }) }

export interface NewtonYArgs { ann: bigint | TransactionArgument; gamma: bigint | TransactionArgument; xpUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; d: bigint | TransactionArgument; i: bigint | TransactionArgument }

export function newtonY( txb: TransactionBlock, args: NewtonYArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::newton_y`, arguments: [ pure(txb, args.ann, `u256`), pure(txb, args.gamma, `u256`), pure(txb, args.xpUnsorted, `vector<u256>`), pure(txb, args.d, `u256`), pure(txb, args.i, `u64`) ], }) }

export interface QueryAskAmountArgs { clock: ObjectArg; poolConfig: ObjectArg; xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; offerAmount: bigint | TransactionArgument; offerAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument }

export function queryAskAmount( txb: TransactionBlock, args: QueryAskAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::query_ask_amount`, arguments: [ obj(txb, args.clock), obj(txb, args.poolConfig), pure(txb, args.xUnsorted, `vector<u256>`), pure(txb, args.offerAmount, `u256`), pure(txb, args.offerAssetIndex, `u64`), pure(txb, args.askAssetIndex, `u64`) ], }) }

export interface QueryOfferAmountArgs { clock: ObjectArg; poolConfig: ObjectArg; xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; askAmount: bigint | TransactionArgument; offerAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument }

export function queryOfferAmount( txb: TransactionBlock, args: QueryOfferAmountArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::query_offer_amount`, arguments: [ obj(txb, args.clock), obj(txb, args.poolConfig), pure(txb, args.xUnsorted, `vector<u256>`), pure(txb, args.askAmount, `u256`), pure(txb, args.offerAssetIndex, `u64`), pure(txb, args.askAssetIndex, `u64`) ], }) }

export interface ReduceDArgs { poolConfig: ObjectArg; burnAmount: bigint | TransactionArgument; totalSupply: bigint | TransactionArgument }

export function reduceD( txb: TransactionBlock, args: ReduceDArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::reduce_d`, arguments: [ obj(txb, args.poolConfig), pure(txb, args.burnAmount, `u256`), pure(txb, args.totalSupply, `u256`) ], }) }

export interface ReductionCoefficientArgs { xpUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; feeGamma: bigint | TransactionArgument }

export function reductionCoefficient( txb: TransactionBlock, args: ReductionCoefficientArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::reduction_coefficient`, arguments: [ pure(txb, args.xpUnsorted, `vector<u256>`), pure(txb, args.feeGamma, `u256`) ], }) }

export interface SolveDArgs { ann: bigint | TransactionArgument; gamma: bigint | TransactionArgument; xpUnsorted: Array<bigint | TransactionArgument> | TransactionArgument }

export function solveD( txb: TransactionBlock, args: SolveDArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::solve_D`, arguments: [ pure(txb, args.ann, `u64`), pure(txb, args.gamma, `u256`), pure(txb, args.xpUnsorted, `vector<u256>`) ], }) }

export interface TweakPriceArgs { poolConfig: ObjectArg; amp: bigint | TransactionArgument; gamma: bigint | TransactionArgument; xp: Array<bigint | TransactionArgument> | TransactionArgument; i: bigint | TransactionArgument; pI: bigint | TransactionArgument; newD: bigint | TransactionArgument; totalSupply: bigint | TransactionArgument; tPrev: bigint | TransactionArgument; curTimestamp: bigint | TransactionArgument; lastPrices: Array<bigint | TransactionArgument> | TransactionArgument }

export function tweakPrice( txb: TransactionBlock, args: TweakPriceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::tweak_price`, arguments: [ obj(txb, args.poolConfig), pure(txb, args.amp, `u64`), pure(txb, args.gamma, `u256`), pure(txb, args.xp, `vector<u256>`), pure(txb, args.i, `u64`), pure(txb, args.pI, `u256`), pure(txb, args.newD, `u256`), pure(txb, args.totalSupply, `u256`), pure(txb, args.tPrev, `u64`), pure(txb, args.curTimestamp, `u64`), pure(txb, args.lastPrices, `vector<u256>`) ], }) }

export interface UpdateAAndGammaArgs { curvedConfig: ObjectArg; initAGammaTime: bigint | TransactionArgument; nextAmp: bigint | TransactionArgument; nextGamma: bigint | TransactionArgument; futureAGammaTime: bigint | TransactionArgument }

export function updateAAndGamma( txb: TransactionBlock, args: UpdateAAndGammaArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::update_A_and_gamma`, arguments: [ obj(txb, args.curvedConfig), pure(txb, args.initAGammaTime, `u64`), pure(txb, args.nextAmp, `u64`), pure(txb, args.nextGamma, `u256`), pure(txb, args.futureAGammaTime, `u64`) ], }) }

export interface UpdateConfigFeeParamsArgs { curvedConfig: ObjectArg; newMidFee: bigint | TransactionArgument; newOutFee: bigint | TransactionArgument; newFeeGamma: bigint | TransactionArgument; newMaHalfTime: bigint | TransactionArgument; newAllowedExtraProfit: bigint | TransactionArgument; newAdjustmentStep: bigint | TransactionArgument }

export function updateConfigFeeParams( txb: TransactionBlock, args: UpdateConfigFeeParamsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::update_config_fee_params`, arguments: [ obj(txb, args.curvedConfig), pure(txb, args.newMidFee, `u64`), pure(txb, args.newOutFee, `u64`), pure(txb, args.newFeeGamma, `u64`), pure(txb, args.newMaHalfTime, `u64`), pure(txb, args.newAllowedExtraProfit, `u64`), pure(txb, args.newAdjustmentStep, `u64`) ], }) }

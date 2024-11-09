import { poolmaths } from ".."
const PUBLISHED_AT = poolmaths.PUBLISHED_AT
import { obj, pure } from "../../_framework/util";
import { TransactionArgument, TransactionBlock as Transaction, TransactionObjectInput } from "@mysten/sui.js/transactions";

export interface AddLiquidityComputationArgs { clock: TransactionObjectInput; poolConfig: TransactionObjectInput; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; providedTokens: Array<bigint | TransactionArgument> | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function addLiquidityComputation(tx: Transaction, args: AddLiquidityComputationArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::add_liquidity_computation`, arguments: [obj(tx, args.clock), obj(tx, args.poolConfig), pure(tx, args.existingLiquidity, `vector<u256>`), pure(tx, args.providedTokens, `vector<u256>`), pure(tx, args.lpSupply, `u256`)], }) }

export interface AssertNewConfigParamsArgs { newMidFee: bigint | TransactionArgument; newOutFee: bigint | TransactionArgument; newFeeGamma: bigint | TransactionArgument; newMaHalfTime: bigint | TransactionArgument; newAllowedExtraProfit: bigint | TransactionArgument; newAdjustmentStep: bigint | TransactionArgument }

export function assertNewConfigParams(tx: Transaction, args: AssertNewConfigParamsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::assert_new_config_params`, arguments: [pure(tx, args.newMidFee, `u64`), pure(tx, args.newOutFee, `u64`), pure(tx, args.newFeeGamma, `u64`), pure(tx, args.newMaHalfTime, `u64`), pure(tx, args.newAllowedExtraProfit, `u64`), pure(tx, args.newAdjustmentStep, `u64`)], }) }

export interface CalcGeometricMeanArgs { xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; sort: boolean | TransactionArgument }

export function calcGeometricMean(tx: Transaction, args: CalcGeometricMeanArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::calc_geometric_mean`, arguments: [pure(tx, args.xUnsorted, `vector<u256>`), pure(tx, args.sort, `bool`)], }) }

export interface CalculateFeeChargedArgs { initXp: bigint | TransactionArgument; updatedXp: bigint | TransactionArgument; initD: bigint | TransactionArgument; updatedD: bigint | TransactionArgument; priceScale: bigint | TransactionArgument; fee: bigint | TransactionArgument }

export function calculateFeeCharged(tx: Transaction, args: CalculateFeeChargedArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::calculate_fee_charged`, arguments: [pure(tx, args.initXp, `u256`), pure(tx, args.updatedXp, `u256`), pure(tx, args.initD, `u256`), pure(tx, args.updatedD, `u256`), pure(tx, args.priceScale, `u256`), pure(tx, args.fee, `u256`)], }) }

export interface FeeArgs { xp: Array<bigint | TransactionArgument> | TransactionArgument; midFee: bigint | TransactionArgument; outFee: bigint | TransactionArgument; feeGamma: bigint | TransactionArgument }

export function fee(tx: Transaction, args: FeeArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::fee`, arguments: [pure(tx, args.xp, `vector<u256>`), pure(tx, args.midFee, `u64`), pure(tx, args.outFee, `u64`), pure(tx, args.feeGamma, `u256`)], }) }

export interface ComputeAskAmountArgs { clock: TransactionObjectInput; poolConfig: TransactionObjectInput; offeredAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; providedAmount: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function computeAskAmount(tx: Transaction, args: ComputeAskAmountArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::compute_ask_amount`, arguments: [obj(tx, args.clock), obj(tx, args.poolConfig), pure(tx, args.offeredAssetIndex, `u64`), pure(tx, args.askAssetIndex, `u64`), pure(tx, args.providedAmount, `u256`), pure(tx, args.existingLiquidity, `vector<u256>`), pure(tx, args.lpSupply, `u256`)], }) }

export interface ComputeOfferAmountArgs { clock: TransactionObjectInput; poolConfig: TransactionObjectInput; offeredAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; askAmount: bigint | TransactionArgument; existingLiquidity: Array<bigint | TransactionArgument> | TransactionArgument; lpSupply: bigint | TransactionArgument }

export function computeOfferAmount(tx: Transaction, args: ComputeOfferAmountArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::compute_offer_amount`, arguments: [obj(tx, args.clock), obj(tx, args.poolConfig), pure(tx, args.offeredAssetIndex, `u64`), pure(tx, args.askAssetIndex, `u64`), pure(tx, args.askAmount, `u256`), pure(tx, args.existingLiquidity, `vector<u256>`), pure(tx, args.lpSupply, `u256`)], }) }

export interface EmaRecorderArgs { poolConfig: TransactionObjectInput; tPrev: bigint | TransactionArgument; curTimestamp: bigint | TransactionArgument; lastPrices: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function emaRecorder(tx: Transaction, args: EmaRecorderArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::ema_recorder`, arguments: [obj(tx, args.poolConfig), pure(tx, args.tPrev, `u256`), pure(tx, args.curTimestamp, `u256`), pure(tx, args.lastPrices, `vector<u256>`), pure(tx, args.nCoins, `u64`)], }) }

export interface XpArgs { x: Array<bigint | TransactionArgument> | TransactionArgument; p: Array<bigint | TransactionArgument> | TransactionArgument }

export function xp(tx: Transaction, args: XpArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::xp`, arguments: [pure(tx, args.x, `vector<u256>`), pure(tx, args.p, `vector<u256>`)], }) }

export interface GetCurAGammaArgs { clock: TransactionObjectInput; curvedConfig: TransactionObjectInput }

export function getCurAGamma(tx: Transaction, args: GetCurAGammaArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_cur_A_gamma`, arguments: [obj(tx, args.clock), obj(tx, args.curvedConfig)], }) }

export function getCurvedConfigAmpGammaParams(tx: Transaction, curvedConfig: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_amp_gamma_params`, arguments: [obj(tx, curvedConfig)], }) }

export function getCurvedConfigFeeParams(tx: Transaction, curvedConfig: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_fee_params`, arguments: [obj(tx, curvedConfig)], }) }

export function getCurvedConfigPricesInfo(tx: Transaction, curvedConfig: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_prices_info`, arguments: [obj(tx, curvedConfig)], }) }

export function getCurvedConfigScalingFactor(tx: Transaction, curvedConfig: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_scaling_factor`, arguments: [obj(tx, curvedConfig)], }) }

export function getCurvedConfigXcpParams(tx: Transaction, curvedConfig: TransactionObjectInput) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_xcp_params`, arguments: [obj(tx, curvedConfig)], }) }

export interface GetDxArgs { xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; priceVec: Array<bigint | TransactionArgument> | TransactionArgument; amp: bigint | TransactionArgument; gamma: bigint | TransactionArgument; midFee: bigint | TransactionArgument; outFee: bigint | TransactionArgument; feeGamma: bigint | TransactionArgument; d0: bigint | TransactionArgument; offeredAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument; askAmount: bigint | TransactionArgument }

export function getDx(tx: Transaction, args: GetDxArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dx`, arguments: [pure(tx, args.xUnsorted, `vector<u256>`), pure(tx, args.priceVec, `vector<u256>`), pure(tx, args.amp, `u64`), pure(tx, args.gamma, `u256`), pure(tx, args.midFee, `u64`), pure(tx, args.outFee, `u64`), pure(tx, args.feeGamma, `u256`), pure(tx, args.d0, `u256`), pure(tx, args.offeredAssetIndex, `u64`), pure(tx, args.askAssetIndex, `u64`), pure(tx, args.askAmount, `u256`)], }) }

export interface GetDyArgs { xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; priceVec: Array<bigint | TransactionArgument> | TransactionArgument; amp: bigint | TransactionArgument; gamma: bigint | TransactionArgument; midFee: bigint | TransactionArgument; outFee: bigint | TransactionArgument; feeGamma: bigint | TransactionArgument; d0: bigint | TransactionArgument; xValue: bigint | TransactionArgument; i: bigint | TransactionArgument; j: bigint | TransactionArgument }

export function getDy(tx: Transaction, args: GetDyArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dy`, arguments: [pure(tx, args.xUnsorted, `vector<u256>`), pure(tx, args.priceVec, `vector<u256>`), pure(tx, args.amp, `u64`), pure(tx, args.gamma, `u256`), pure(tx, args.midFee, `u64`), pure(tx, args.outFee, `u64`), pure(tx, args.feeGamma, `u256`), pure(tx, args.d0, `u256`), pure(tx, args.xValue, `u256`), pure(tx, args.i, `u64`), pure(tx, args.j, `u64`)], }) }

export function getMaxAmp(tx: Transaction, nCoins: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_max_amp`, arguments: [pure(tx, nCoins, `u64`)], }) }

export function getMinAmp(tx: Transaction, nCoins: bigint | TransactionArgument) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_min_amp`, arguments: [pure(tx, nCoins, `u64`)], }) }

export interface GetXcpArgs { d: bigint | TransactionArgument; priceScale: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function getXcp(tx: Transaction, args: GetXcpArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_xcp`, arguments: [pure(tx, args.d, `u256`), pure(tx, args.priceScale, `vector<u256>`), pure(tx, args.nCoins, `u256`)], }) }

export interface HalfpowArgs { expNumerator: bigint | TransactionArgument; expDenominator: bigint | TransactionArgument; precision: bigint | TransactionArgument }

export function halfpow(tx: Transaction, args: HalfpowArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::halfpow`, arguments: [pure(tx, args.expNumerator, `u256`), pure(tx, args.expDenominator, `u256`), pure(tx, args.precision, `u256`)], }) }

export interface InitializeCurvedConfigArgs { clock: TransactionObjectInput; initParams: Array<bigint | TransactionArgument> | TransactionArgument; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument; scalingFactor: Array<bigint | TransactionArgument> | TransactionArgument; nCoins: bigint | TransactionArgument }

export function initializeCurvedConfig(tx: Transaction, args: InitializeCurvedConfigArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::initialize_curved_config`, arguments: [obj(tx, args.clock), pure(tx, args.initParams, `vector<u64>`), pure(tx, args.initialPrices, `vector<u256>`), pure(tx, args.scalingFactor, `vector<u256>`), pure(tx, args.nCoins, `u128`)], }) }

export interface NewtonDArgs { ann: bigint | TransactionArgument; gamma: bigint | TransactionArgument; xSorted: Array<bigint | TransactionArgument> | TransactionArgument; dValue: bigint | TransactionArgument }

export function newtonD(tx: Transaction, args: NewtonDArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::newton_D`, arguments: [pure(tx, args.ann, `u64`), pure(tx, args.gamma, `u256`), pure(tx, args.xSorted, `vector<u256>`), pure(tx, args.dValue, `u256`)], }) }

export interface NewtonYArgs { ann: bigint | TransactionArgument; gamma: bigint | TransactionArgument; xpUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; d: bigint | TransactionArgument; i: bigint | TransactionArgument }

export function newtonY(tx: Transaction, args: NewtonYArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::newton_y`, arguments: [pure(tx, args.ann, `u256`), pure(tx, args.gamma, `u256`), pure(tx, args.xpUnsorted, `vector<u256>`), pure(tx, args.d, `u256`), pure(tx, args.i, `u64`)], }) }

export interface QueryAskAmountArgs { clock: TransactionObjectInput; poolConfig: TransactionObjectInput; xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; offerAmount: bigint | TransactionArgument; offerAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument }

export function queryAskAmount(tx: Transaction, args: QueryAskAmountArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::query_ask_amount`, arguments: [obj(tx, args.clock), obj(tx, args.poolConfig), pure(tx, args.xUnsorted, `vector<u256>`), pure(tx, args.offerAmount, `u256`), pure(tx, args.offerAssetIndex, `u64`), pure(tx, args.askAssetIndex, `u64`)], }) }

export interface QueryOfferAmountArgs { clock: TransactionObjectInput; poolConfig: TransactionObjectInput; xUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; askAmount: bigint | TransactionArgument; offerAssetIndex: bigint | TransactionArgument; askAssetIndex: bigint | TransactionArgument }

export function queryOfferAmount(tx: Transaction, args: QueryOfferAmountArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::query_offer_amount`, arguments: [obj(tx, args.clock), obj(tx, args.poolConfig), pure(tx, args.xUnsorted, `vector<u256>`), pure(tx, args.askAmount, `u256`), pure(tx, args.offerAssetIndex, `u64`), pure(tx, args.askAssetIndex, `u64`)], }) }

export interface ReduceDArgs { poolConfig: TransactionObjectInput; burnAmount: bigint | TransactionArgument; totalSupply: bigint | TransactionArgument }

export function reduceD(tx: Transaction, args: ReduceDArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::reduce_d`, arguments: [obj(tx, args.poolConfig), pure(tx, args.burnAmount, `u256`), pure(tx, args.totalSupply, `u256`)], }) }

export interface ReductionCoefficientArgs { xpUnsorted: Array<bigint | TransactionArgument> | TransactionArgument; feeGamma: bigint | TransactionArgument }

export function reductionCoefficient(tx: Transaction, args: ReductionCoefficientArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::reduction_coefficient`, arguments: [pure(tx, args.xpUnsorted, `vector<u256>`), pure(tx, args.feeGamma, `u256`)], }) }

export interface SolveDArgs { ann: bigint | TransactionArgument; gamma: bigint | TransactionArgument; xpUnsorted: Array<bigint | TransactionArgument> | TransactionArgument }

export function solveD(tx: Transaction, args: SolveDArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::solve_D`, arguments: [pure(tx, args.ann, `u64`), pure(tx, args.gamma, `u256`), pure(tx, args.xpUnsorted, `vector<u256>`)], }) }

export interface TweakPriceArgs { poolConfig: TransactionObjectInput; amp: bigint | TransactionArgument; gamma: bigint | TransactionArgument; xp: Array<bigint | TransactionArgument> | TransactionArgument; i: bigint | TransactionArgument; pI: bigint | TransactionArgument; newD: bigint | TransactionArgument; totalSupply: bigint | TransactionArgument; tPrev: bigint | TransactionArgument; curTimestamp: bigint | TransactionArgument; lastPrices: Array<bigint | TransactionArgument> | TransactionArgument }

export function tweakPrice(tx: Transaction, args: TweakPriceArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::tweak_price`, arguments: [obj(tx, args.poolConfig), pure(tx, args.amp, `u64`), pure(tx, args.gamma, `u256`), pure(tx, args.xp, `vector<u256>`), pure(tx, args.i, `u64`), pure(tx, args.pI, `u256`), pure(tx, args.newD, `u256`), pure(tx, args.totalSupply, `u256`), pure(tx, args.tPrev, `u64`), pure(tx, args.curTimestamp, `u64`), pure(tx, args.lastPrices, `vector<u256>`)], }) }

export interface UpdateAAndGammaArgs { curvedConfig: TransactionObjectInput; initAGammaTime: bigint | TransactionArgument; nextAmp: bigint | TransactionArgument; nextGamma: bigint | TransactionArgument; futureAGammaTime: bigint | TransactionArgument }

export function updateAAndGamma(tx: Transaction, args: UpdateAAndGammaArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::update_A_and_gamma`, arguments: [obj(tx, args.curvedConfig), pure(tx, args.initAGammaTime, `u64`), pure(tx, args.nextAmp, `u64`), pure(tx, args.nextGamma, `u256`), pure(tx, args.futureAGammaTime, `u64`)], }) }

export interface UpdateConfigFeeParamsArgs { curvedConfig: TransactionObjectInput; newMidFee: bigint | TransactionArgument; newOutFee: bigint | TransactionArgument; newFeeGamma: bigint | TransactionArgument; newMaHalfTime: bigint | TransactionArgument; newAllowedExtraProfit: bigint | TransactionArgument; newAdjustmentStep: bigint | TransactionArgument }

export function updateConfigFeeParams(tx: Transaction, args: UpdateConfigFeeParamsArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::update_config_fee_params`, arguments: [obj(tx, args.curvedConfig), pure(tx, args.newMidFee, `u64`), pure(tx, args.newOutFee, `u64`), pure(tx, args.newFeeGamma, `u64`), pure(tx, args.newMaHalfTime, `u64`), pure(tx, args.newAllowedExtraProfit, `u64`), pure(tx, args.newAdjustmentStep, `u64`)], }) }

export interface UpdateInitialPricesArgs { curvedConfig: TransactionObjectInput; initialPrices: Array<bigint | TransactionArgument> | TransactionArgument }

export function updateInitialPrices(tx: Transaction, args: UpdateInitialPricesArgs) { return tx.moveCall({ target: `${PUBLISHED_AT}::curved_math::update_initial_prices`, arguments: [obj(tx, args.curvedConfig), pure(tx, args.initialPrices, `vector<u256>`)], }) }

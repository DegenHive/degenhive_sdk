"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurAGamma = getCurAGamma;
exports.getCurvedConfigAmpGammaParams = getCurvedConfigAmpGammaParams;
exports.getCurvedConfigFeeParams = getCurvedConfigFeeParams;
exports.getCurvedConfigPricesInfo = getCurvedConfigPricesInfo;
exports.getCurvedConfigScalingFactor = getCurvedConfigScalingFactor;
exports.getCurvedConfigXcpParams = getCurvedConfigXcpParams;
exports.getDx = getDx;
exports.getDy = getDy;
exports.getMaxAmp = getMaxAmp;
exports.getMinAmp = getMinAmp;
exports.getXcp = getXcp;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.math.PUBLISHED_AT;
function getCurAGamma(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_cur_A_gamma`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.curvedConfig)], }); }
function getCurvedConfigAmpGammaParams(txb, curvedConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_amp_gamma_params`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getCurvedConfigFeeParams(txb, curvedConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_fee_params`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getCurvedConfigPricesInfo(txb, curvedConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_prices_info`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getCurvedConfigScalingFactor(txb, curvedConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_scaling_factor`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getCurvedConfigXcpParams(txb, curvedConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_curved_config_xcp_params`, arguments: [(0, util_1.obj)(txb, curvedConfig)], }); }
function getDx(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dx`, arguments: [(0, util_1.pure)(txb, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.priceVec, `vector<u256>`), (0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.gamma, `u256`), (0, util_1.pure)(txb, args.midFee, `u64`), (0, util_1.pure)(txb, args.outFee, `u64`), (0, util_1.pure)(txb, args.feeGamma, `u256`), (0, util_1.pure)(txb, args.d0, `u256`), (0, util_1.pure)(txb, args.offeredAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAssetIndex, `u64`), (0, util_1.pure)(txb, args.askAmount, `u256`)], }); }
function getDy(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_dy`, arguments: [(0, util_1.pure)(txb, args.xUnsorted, `vector<u256>`), (0, util_1.pure)(txb, args.priceVec, `vector<u256>`), (0, util_1.pure)(txb, args.amp, `u64`), (0, util_1.pure)(txb, args.gamma, `u256`), (0, util_1.pure)(txb, args.midFee, `u64`), (0, util_1.pure)(txb, args.outFee, `u64`), (0, util_1.pure)(txb, args.feeGamma, `u256`), (0, util_1.pure)(txb, args.d0, `u256`), (0, util_1.pure)(txb, args.xValue, `u256`), (0, util_1.pure)(txb, args.i, `u64`), (0, util_1.pure)(txb, args.j, `u64`)], }); }
function getMaxAmp(txb, nCoins) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_max_amp`, arguments: [(0, util_1.pure)(txb, nCoins, `u64`)], }); }
function getMinAmp(txb, nCoins) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_min_amp`, arguments: [(0, util_1.pure)(txb, nCoins, `u64`)], }); }
function getXcp(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::curved_math::get_xcp`, arguments: [(0, util_1.pure)(txb, args.d, `u256`), (0, util_1.pure)(txb, args.priceScale, `vector<u256>`), (0, util_1.pure)(txb, args.nCoins, `u256`)], }); }

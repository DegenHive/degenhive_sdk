"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExitFee = getExitFee;
exports.getScalingFactorVec = getScalingFactorVec;
exports.getWeightAndSfAtIndex = getWeightAndSfAtIndex;
exports.getWeightAtIndex = getWeightAtIndex;
exports.getWeightedConfigParams = getWeightedConfigParams;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.math.PUBLISHED_AT;
function getExitFee(txb, weightedConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_exit_fee`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }
function getScalingFactorVec(txb, weightedConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_scaling_factor_vec`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }
function getWeightAndSfAtIndex(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_and_sf_at_index`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.index, `u64`), (0, util_1.pure)(txb, args.returnNormalized, `bool`)], }); }
function getWeightAtIndex(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weight_at_index`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.index, `u64`), (0, util_1.pure)(txb, args.returnNormalized, `bool`)], }); }
function getWeightedConfigParams(txb, weightedConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::weighted_math::get_weighted_config_params`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }

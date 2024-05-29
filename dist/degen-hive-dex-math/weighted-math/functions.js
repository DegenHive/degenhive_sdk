"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeightedConfigParams = exports.getWeightAtIndex = exports.getWeightAndSfAtIndex = exports.getScalingFactorVec = exports.getExitFee = void 0;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function getExitFee(txb, weightedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_exit_fee`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }
exports.getExitFee = getExitFee;
function getScalingFactorVec(txb, weightedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_scaling_factor_vec`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }
exports.getScalingFactorVec = getScalingFactorVec;
function getWeightAndSfAtIndex(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_weight_and_sf_at_index`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.index, `u64`), (0, util_1.pure)(txb, args.returnNormalized, `bool`)], }); }
exports.getWeightAndSfAtIndex = getWeightAndSfAtIndex;
function getWeightAtIndex(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_weight_at_index`, arguments: [(0, util_1.obj)(txb, args.weightedConfig), (0, util_1.pure)(txb, args.index, `u64`), (0, util_1.pure)(txb, args.returnNormalized, `bool`)], }); }
exports.getWeightAtIndex = getWeightAtIndex;
function getWeightedConfigParams(txb, weightedConfig) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::weighted_math::get_weighted_config_params`, arguments: [(0, util_1.obj)(txb, weightedConfig)], }); }
exports.getWeightedConfigParams = getWeightedConfigParams;

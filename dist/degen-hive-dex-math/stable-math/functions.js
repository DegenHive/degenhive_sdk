"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStableConfigParams = exports.getCurAAndScalingFactors = void 0;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.math.PUBLISHED_AT;
function getCurAAndScalingFactors(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_cur_A_and_scaling_factors`, arguments: [(0, util_1.obj)(txb, args.clock), (0, util_1.obj)(txb, args.stableConfig)], }); }
exports.getCurAAndScalingFactors = getCurAAndScalingFactors;
function getStableConfigParams(txb, stableConfig) { return txb.moveCall({ target: `${PUBLISHED_AT}::stable_math::get_stable_config_params`, arguments: [(0, util_1.obj)(txb, stableConfig)], }); }
exports.getStableConfigParams = getStableConfigParams;

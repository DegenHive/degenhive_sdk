"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuiAmount = getSuiAmount;
exports.getTokenAmount = getTokenAmount;
exports.poolTokenExchangeRateAtEpoch = poolTokenExchangeRateAtEpoch;
exports.calculateRewards = calculateRewards;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function getSuiAmount(txb, poolTokenExchangeRate) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::helper::get_sui_amount`, arguments: [(0, util_1.obj)(txb, poolTokenExchangeRate)], }); }
function getTokenAmount(txb, poolTokenExchangeRate) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::helper::get_token_amount`, arguments: [(0, util_1.obj)(txb, poolTokenExchangeRate)], }); }
function poolTokenExchangeRateAtEpoch(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::helper::pool_token_exchange_rate_at_epoch`, arguments: [(0, util_1.obj)(txb, args.poolTokenExchangeRate), (0, util_1.pure)(txb, args.epoch, `u64`)], }); }
function calculateRewards(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::helper::calculate_rewards`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.pure)(txb, args.poolId, `0x2::object::ID`), (0, util_1.pure)(txb, args.stakedSuiPrincipalAmount, `u64`), (0, util_1.pure)(txb, args.startEpoch, `u64`), (0, util_1.pure)(txb, args.curEpoch, `u64`)], }); }

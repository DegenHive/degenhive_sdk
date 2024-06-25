"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimUnstakedSui = claimUnstakedSui;
exports.requestDelayedUnstake = requestDelayedUnstake;
exports.requestInstantUnstake = requestInstantUnstake;
exports.stakeWithValidator = stakeWithValidator;
exports.stakeSui = stakeSui;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.hsuivault.PUBLISHED_AT;
function claimUnstakedSui(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::claim_unstaked_sui`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.unstakeRequest)], }); }
function requestDelayedUnstake(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_delayed_unstake`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiCoin), (0, util_1.pure)(txb, args.toUnstake, `u64`)], }); }
function requestInstantUnstake(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_instant_unstake`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiCoin), (0, util_1.pure)(txb, args.toUnstake, `u64`)], }); }
function stakeWithValidator(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_with_validator`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.suiCoin), (0, util_1.pure)(txb, args.toStake, `u64`), (0, util_1.pure)(txb, args.selectedValidator, `address`)], }); }
function stakeSui(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_sui`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.suiCoin), (0, util_1.pure)(txb, args.toStake, `u64`)], }); }

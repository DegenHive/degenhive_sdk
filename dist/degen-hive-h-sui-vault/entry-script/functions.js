"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stakeSui = exports.stakeWithValidator = exports.requestInstantUnstake = exports.requestDelayedUnstake = exports.claimUnstakedSui = void 0;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function claimUnstakedSui(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::entry_script::claim_unstaked_sui`, arguments: [(0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.unstakeRequest)], }); }
exports.claimUnstakedSui = claimUnstakedSui;
function requestDelayedUnstake(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::entry_script::request_delayed_unstake`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiCoin), (0, util_1.pure)(txb, args.toUnstake, `u64`)], }); }
exports.requestDelayedUnstake = requestDelayedUnstake;
function requestInstantUnstake(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::entry_script::request_instant_unstake`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.hsuiCoin), (0, util_1.pure)(txb, args.toUnstake, `u64`)], }); }
exports.requestInstantUnstake = requestInstantUnstake;
function stakeWithValidator(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::entry_script::stake_with_validator`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.suiCoin), (0, util_1.pure)(txb, args.toStake, `u64`), (0, util_1.pure)(txb, args.selectedValidator, `address`)], }); }
exports.stakeWithValidator = stakeWithValidator;
function stakeSui(txb, args) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::entry_script::stake_sui`, arguments: [(0, util_1.obj)(txb, args.suiSystemState), (0, util_1.obj)(txb, args.vault), (0, util_1.obj)(txb, args.suiCoin), (0, util_1.pure)(txb, args.toStake, `u64`)], }); }
exports.stakeSui = stakeSui;

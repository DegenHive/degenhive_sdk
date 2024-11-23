"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimUnstakedSui = claimUnstakedSui;
exports.requestDelayedUnstake = requestDelayedUnstake;
exports.requestInstantUnstake = requestInstantUnstake;
exports.stakeWithValidator = stakeWithValidator;
exports.stakeSui = stakeSui;
const __1 = require("..");
const PUBLISHED_AT = __1.dsuivault.PUBLISHED_AT;
const SUI_SYSTEM_STATE = __1.dsuivault.SUI_SYSTEM_STATE;
const CLOCK = __1.dsuivault.CLOCK;
const DSUI_VAULT = __1.dsuivault.DSUI_VAULT;
const util_1 = require("../../_framework/util");
function claimUnstakedSui(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::claim_unstaked_sui`, arguments: [(0, util_1.obj)(tx, DSUI_VAULT), (0, util_1.obj)(tx, args.unstakeRequest)], }); }
function requestDelayedUnstake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_delayed_unstake`, arguments: [(0, util_1.obj)(tx, SUI_SYSTEM_STATE), (0, util_1.obj)(tx, DSUI_VAULT), (0, util_1.obj)(tx, args.dsuiCoin), (0, util_1.pure)(tx, args.toUnstake, `u64`)], }); }
function requestInstantUnstake(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::request_instant_unstake`, arguments: [(0, util_1.obj)(tx, SUI_SYSTEM_STATE), (0, util_1.obj)(tx, DSUI_VAULT), (0, util_1.obj)(tx, args.dsuiCoin), (0, util_1.pure)(tx, args.toUnstake, `u64`)], }); }
function stakeWithValidator(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_with_validator`, arguments: [(0, util_1.obj)(tx, SUI_SYSTEM_STATE), (0, util_1.obj)(tx, DSUI_VAULT), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.toStake, `u64`), (0, util_1.pure)(tx, args.selectedValidator, `address`)], }); }
function stakeSui(tx, args) { return tx.moveCall({ target: `${PUBLISHED_AT}::entry_script::stake_sui`, arguments: [(0, util_1.obj)(tx, SUI_SYSTEM_STATE), (0, util_1.obj)(tx, DSUI_VAULT), (0, util_1.obj)(tx, args.suiCoin), (0, util_1.pure)(tx, args.toStake, `u64`)], }); }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.value = value;
exports.destroyZero = destroyZero;
exports.join = join;
exports.split = split;
exports.withdrawAll = withdrawAll;
exports.zero = zero;
exports.burn = burn;
exports.kraftHiveGems = kraftHiveGems;
exports.totalCapId = totalCapId;
exports.totalKraftedByCap = totalKraftedByCap;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.config.PUBLISHED_AT;
function value(txb, self) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::value`, arguments: [(0, util_1.obj)(txb, self)], }); }
function destroyZero(txb, hiveGems) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::destroy_zero`, arguments: [(0, util_1.obj)(txb, hiveGems)], }); }
function join(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::join`, arguments: [(0, util_1.obj)(txb, args.self), (0, util_1.obj)(txb, args.hiveGems)], }); }
function split(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::split`, arguments: [(0, util_1.obj)(txb, args.self), (0, util_1.pure)(txb, args.value, `u64`)], }); }
function withdrawAll(txb, self) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::withdraw_all`, arguments: [(0, util_1.obj)(txb, self)], }); }
function zero(txb) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::zero`, arguments: [], }); }
function burn(txb, hiveGems) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::burn`, arguments: [(0, util_1.obj)(txb, hiveGems)], }); }
function kraftHiveGems(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::kraft_hive_gems`, arguments: [(0, util_1.obj)(txb, args.mintCap), (0, util_1.pure)(txb, args.amount, `u64`)], }); }
function totalCapId(txb, self) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::total_cap_id`, arguments: [(0, util_1.obj)(txb, self)], }); }
function totalKraftedByCap(txb, self) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::total_krafted_by_cap`, arguments: [(0, util_1.obj)(txb, self)], }); }

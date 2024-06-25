"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalKraftedByCap = exports.totalCapId = exports.kraftHiveGems = exports.burn = exports.zero = exports.withdrawAll = exports.split = exports.join = exports.destroyZero = exports.value = void 0;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.config.PUBLISHED_AT;
function value(txb, self) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::value`, arguments: [(0, util_1.obj)(txb, self)], }); }
exports.value = value;
function destroyZero(txb, hiveGems) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::destroy_zero`, arguments: [(0, util_1.obj)(txb, hiveGems)], }); }
exports.destroyZero = destroyZero;
function join(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::join`, arguments: [(0, util_1.obj)(txb, args.self), (0, util_1.obj)(txb, args.hiveGems)], }); }
exports.join = join;
function split(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::split`, arguments: [(0, util_1.obj)(txb, args.self), (0, util_1.pure)(txb, args.value, `u64`)], }); }
exports.split = split;
function withdrawAll(txb, self) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::withdraw_all`, arguments: [(0, util_1.obj)(txb, self)], }); }
exports.withdrawAll = withdrawAll;
function zero(txb) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::zero`, arguments: [], }); }
exports.zero = zero;
function burn(txb, hiveGems) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::burn`, arguments: [(0, util_1.obj)(txb, hiveGems)], }); }
exports.burn = burn;
function kraftHiveGems(txb, args) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::kraft_hive_gems`, arguments: [(0, util_1.obj)(txb, args.mintCap), (0, util_1.pure)(txb, args.amount, `u64`)], }); }
exports.kraftHiveGems = kraftHiveGems;
function totalCapId(txb, self) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::total_cap_id`, arguments: [(0, util_1.obj)(txb, self)], }); }
exports.totalCapId = totalCapId;
function totalKraftedByCap(txb, self) { return txb.moveCall({ target: `${PUBLISHED_AT}::hive_gems::total_krafted_by_cap`, arguments: [(0, util_1.obj)(txb, self)], }); }
exports.totalKraftedByCap = totalKraftedByCap;

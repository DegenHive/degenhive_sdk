"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
const util_1 = require("../../_framework/util");
function init(tx, witnessHive) { return tx.moveCall({ target: `${PUBLISHED_AT}::hive::init`, arguments: [(0, util_1.obj)(tx, witnessHive)], }); }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const util_1 = require("../../_framework/util");
const __1 = require("..");
const PUBLISHED_AT = __1.config.PUBLISHED_AT;
function init(txb, witnessHsui) { return txb.moveCall({ target: `${PUBLISHED_AT}::dsui::init`, arguments: [(0, util_1.obj)(txb, witnessHsui)], }); }

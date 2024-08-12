"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const __1 = require("..");
const util_1 = require("../../_framework/util");
function init(txb, witnessHsui) { return txb.moveCall({ target: `${__1.PUBLISHED_AT}::dsui::init`, arguments: [(0, util_1.obj)(txb, witnessHsui)], }); }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSuiVaultFunctions = exports.EntryScriptFunctions = exports.dsuivault = void 0;
var dsuivault;
(function (dsuivault) {
    dsuivault.PACKAGE_ID = "0x53578180d93e5fa7b10334045c4565e3c743f0eb64c89932b14adb1b0baab145";
    dsuivault.PUBLISHED_AT = "0x53578180d93e5fa7b10334045c4565e3c743f0eb64c89932b14adb1b0baab145";
    dsuivault.PKG_V1 = "0x53578180d93e5fa7b10334045c4565e3c743f0eb64c89932b14adb1b0baab145";
})(dsuivault || (exports.dsuivault = dsuivault = {}));
exports.EntryScriptFunctions = require("./entry-script/functions");
exports.DSuiVaultFunctions = require("./dsui-vault/functions");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const domain = require("./domain/structs");
const suinsRegistration = require("./suins-registration/structs");
const suins = require("./suins/structs");
function registerClasses(loader) {
    loader.register(domain.Domain);
    loader.register(suinsRegistration.SuinsRegistration);
    loader.register(suins.ConfigKey);
    loader.register(suins.AdminCap);
    loader.register(suins.AppKey);
    loader.register(suins.RegistryKey);
    loader.register(suins.SUINS);
    loader.register(suins.SuiNS);
}

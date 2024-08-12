"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiNS = exports.SUINS = exports.RegistryKey = exports.ConfigKey = exports.AppKey = exports.AdminCap = void 0;
exports.isAdminCap = isAdminCap;
exports.isAppKey = isAppKey;
exports.isConfigKey = isConfigKey;
exports.isRegistryKey = isRegistryKey;
exports.isSUINS = isSUINS;
exports.isSuiNS = isSuiNS;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x2/balance/structs");
const structs_2 = require("../../0x2/object/structs");
const structs_3 = require("../../0x2/sui/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== AdminCap =============================== */
function isAdminCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::suins::AdminCap`; }
class AdminCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AdminCap.$typeName;
        this.$isPhantom = AdminCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AdminCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: AdminCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(AdminCap.$typeName, ...[]), typeArgs: [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AdminCap.fromFields(fields), fromFieldsWithTypes: (item) => AdminCap.fromFieldsWithTypes(item), fromBcs: (data) => AdminCap.fromBcs(data), bcs: AdminCap.bcs, fromJSONField: (field) => AdminCap.fromJSONField(field), fromJSON: (json) => AdminCap.fromJSON(json), fromSuiParsedData: (content) => AdminCap.fromSuiParsedData(content), fetch: async (client, id) => AdminCap.fetch(client, id), new: (fields) => { return new AdminCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AdminCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(AdminCap.reified()); }
    static get p() { return AdminCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AdminCap", {
            id: structs_2.UID.bcs
        });
    }
    ;
    static fromFields(fields) { return AdminCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isAdminCap(item.type)) {
            throw new Error("not a AdminCap type");
        }
        return AdminCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return AdminCap.fromFields(AdminCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AdminCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== AdminCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AdminCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAdminCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AdminCap object`);
    } return AdminCap.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAdminCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AdminCap object`);
        }
        return AdminCap.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AdminCap = AdminCap;
AdminCap.$typeName = `${index_1.PKG_V1}::suins::AdminCap`;
AdminCap.$numTypeParams = 0;
AdminCap.$isPhantom = [];
/* ============================== AppKey =============================== */
function isAppKey(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::suins::AppKey` + '<'); }
class AppKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AppKey.$typeName;
        this.$isPhantom = AppKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AppKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified(App) { return { typeName: AppKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(AppKey.$typeName, ...[(0, reified_1.extractType)(App)]), typeArgs: [(0, reified_1.extractType)(App)], isPhantom: AppKey.$isPhantom, reifiedTypeArgs: [App], fromFields: (fields) => AppKey.fromFields(App, fields), fromFieldsWithTypes: (item) => AppKey.fromFieldsWithTypes(App, item), fromBcs: (data) => AppKey.fromBcs(App, data), bcs: AppKey.bcs, fromJSONField: (field) => AppKey.fromJSONField(App, field), fromJSON: (json) => AppKey.fromJSON(App, json), fromSuiParsedData: (content) => AppKey.fromSuiParsedData(App, content), fetch: async (client, id) => AppKey.fetch(client, App, id), new: (fields) => { return new AppKey([(0, reified_1.extractType)(App)], fields); }, kind: "StructClassReified", }; }
    static get r() { return AppKey.reified; }
    static phantom(App) { return (0, reified_1.phantom)(AppKey.reified(App)); }
    static get p() { return AppKey.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("AppKey", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return AppKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isAppKey(item.type)) {
            throw new Error("not a AppKey type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return AppKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(typeArg, data) { return AppKey.fromFields(typeArg, AppKey.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return AppKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== AppKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(AppKey.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return AppKey.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAppKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AppKey object`);
    } return AppKey.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AppKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAppKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AppKey object`);
        }
        const gotTypeArgs = (0, util_1.parseTypeName)(res.data.bcs.type).typeArgs;
        if (gotTypeArgs.length !== 1) {
            throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
        }
        ;
        const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
        const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
        if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
            throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
        }
        ;
        return AppKey.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AppKey = AppKey;
AppKey.$typeName = `${index_1.PKG_V1}::suins::AppKey`;
AppKey.$numTypeParams = 1;
AppKey.$isPhantom = [true,];
/* ============================== ConfigKey =============================== */
function isConfigKey(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::suins::ConfigKey` + '<'); }
class ConfigKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ConfigKey.$typeName;
        this.$isPhantom = ConfigKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ConfigKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified(Config) { return { typeName: ConfigKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConfigKey.$typeName, ...[(0, reified_1.extractType)(Config)]), typeArgs: [(0, reified_1.extractType)(Config)], isPhantom: ConfigKey.$isPhantom, reifiedTypeArgs: [Config], fromFields: (fields) => ConfigKey.fromFields(Config, fields), fromFieldsWithTypes: (item) => ConfigKey.fromFieldsWithTypes(Config, item), fromBcs: (data) => ConfigKey.fromBcs(Config, data), bcs: ConfigKey.bcs, fromJSONField: (field) => ConfigKey.fromJSONField(Config, field), fromJSON: (json) => ConfigKey.fromJSON(Config, json), fromSuiParsedData: (content) => ConfigKey.fromSuiParsedData(Config, content), fetch: async (client, id) => ConfigKey.fetch(client, Config, id), new: (fields) => { return new ConfigKey([(0, reified_1.extractType)(Config)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConfigKey.reified; }
    static phantom(Config) { return (0, reified_1.phantom)(ConfigKey.reified(Config)); }
    static get p() { return ConfigKey.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ConfigKey", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return ConfigKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isConfigKey(item.type)) {
            throw new Error("not a ConfigKey type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ConfigKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(typeArg, data) { return ConfigKey.fromFields(typeArg, ConfigKey.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return ConfigKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== ConfigKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ConfigKey.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ConfigKey.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConfigKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ConfigKey object`);
    } return ConfigKey.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ConfigKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfigKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ConfigKey object`);
        }
        const gotTypeArgs = (0, util_1.parseTypeName)(res.data.bcs.type).typeArgs;
        if (gotTypeArgs.length !== 1) {
            throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
        }
        ;
        const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
        const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
        if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
            throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
        }
        ;
        return ConfigKey.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ConfigKey = ConfigKey;
ConfigKey.$typeName = `${index_1.PKG_V1}::suins::ConfigKey`;
ConfigKey.$numTypeParams = 1;
ConfigKey.$isPhantom = [true,];
/* ============================== RegistryKey =============================== */
function isRegistryKey(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V1}::suins::RegistryKey` + '<'); }
class RegistryKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RegistryKey.$typeName;
        this.$isPhantom = RegistryKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RegistryKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified(Config) { return { typeName: RegistryKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(RegistryKey.$typeName, ...[(0, reified_1.extractType)(Config)]), typeArgs: [(0, reified_1.extractType)(Config)], isPhantom: RegistryKey.$isPhantom, reifiedTypeArgs: [Config], fromFields: (fields) => RegistryKey.fromFields(Config, fields), fromFieldsWithTypes: (item) => RegistryKey.fromFieldsWithTypes(Config, item), fromBcs: (data) => RegistryKey.fromBcs(Config, data), bcs: RegistryKey.bcs, fromJSONField: (field) => RegistryKey.fromJSONField(Config, field), fromJSON: (json) => RegistryKey.fromJSON(Config, json), fromSuiParsedData: (content) => RegistryKey.fromSuiParsedData(Config, content), fetch: async (client, id) => RegistryKey.fetch(client, Config, id), new: (fields) => { return new RegistryKey([(0, reified_1.extractType)(Config)], fields); }, kind: "StructClassReified", }; }
    static get r() { return RegistryKey.reified; }
    static phantom(Config) { return (0, reified_1.phantom)(RegistryKey.reified(Config)); }
    static get p() { return RegistryKey.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("RegistryKey", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return RegistryKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isRegistryKey(item.type)) {
            throw new Error("not a RegistryKey type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RegistryKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(typeArg, data) { return RegistryKey.fromFields(typeArg, RegistryKey.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return RegistryKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== RegistryKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(RegistryKey.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return RegistryKey.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRegistryKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RegistryKey object`);
    } return RegistryKey.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RegistryKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRegistryKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RegistryKey object`);
        }
        const gotTypeArgs = (0, util_1.parseTypeName)(res.data.bcs.type).typeArgs;
        if (gotTypeArgs.length !== 1) {
            throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
        }
        ;
        const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
        const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
        if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
            throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
        }
        ;
        return RegistryKey.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RegistryKey = RegistryKey;
RegistryKey.$typeName = `${index_1.PKG_V1}::suins::RegistryKey`;
RegistryKey.$numTypeParams = 1;
RegistryKey.$isPhantom = [true,];
/* ============================== SUINS =============================== */
function isSUINS(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::suins::SUINS`; }
class SUINS {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SUINS.$typeName;
        this.$isPhantom = SUINS.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SUINS.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: SUINS.$typeName, fullTypeName: (0, util_1.composeSuiType)(SUINS.$typeName, ...[]), typeArgs: [], isPhantom: SUINS.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SUINS.fromFields(fields), fromFieldsWithTypes: (item) => SUINS.fromFieldsWithTypes(item), fromBcs: (data) => SUINS.fromBcs(data), bcs: SUINS.bcs, fromJSONField: (field) => SUINS.fromJSONField(field), fromJSON: (json) => SUINS.fromJSON(json), fromSuiParsedData: (content) => SUINS.fromSuiParsedData(content), fetch: async (client, id) => SUINS.fetch(client, id), new: (fields) => { return new SUINS([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SUINS.reified(); }
    static phantom() { return (0, reified_1.phantom)(SUINS.reified()); }
    static get p() { return SUINS.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SUINS", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return SUINS.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isSUINS(item.type)) {
            throw new Error("not a SUINS type");
        }
        return SUINS.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return SUINS.fromFields(SUINS.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SUINS.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== SUINS.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SUINS.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSUINS(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SUINS object`);
    } return SUINS.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SUINS object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSUINS(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SUINS object`);
        }
        return SUINS.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SUINS = SUINS;
SUINS.$typeName = `${index_1.PKG_V1}::suins::SUINS`;
SUINS.$numTypeParams = 0;
SUINS.$isPhantom = [];
/* ============================== SuiNS =============================== */
function isSuiNS(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::suins::SuiNS`; }
class SuiNS {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SuiNS.$typeName;
        this.$isPhantom = SuiNS.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SuiNS.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
    }
    static reified() { return { typeName: SuiNS.$typeName, fullTypeName: (0, util_1.composeSuiType)(SuiNS.$typeName, ...[]), typeArgs: [], isPhantom: SuiNS.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SuiNS.fromFields(fields), fromFieldsWithTypes: (item) => SuiNS.fromFieldsWithTypes(item), fromBcs: (data) => SuiNS.fromBcs(data), bcs: SuiNS.bcs, fromJSONField: (field) => SuiNS.fromJSONField(field), fromJSON: (json) => SuiNS.fromJSON(json), fromSuiParsedData: (content) => SuiNS.fromSuiParsedData(content), fetch: async (client, id) => SuiNS.fetch(client, id), new: (fields) => { return new SuiNS([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SuiNS.reified(); }
    static phantom() { return (0, reified_1.phantom)(SuiNS.reified()); }
    static get p() { return SuiNS.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SuiNS", {
            id: structs_2.UID.bcs, balance: structs_1.Balance.bcs
        });
    }
    ;
    static fromFields(fields) { return SuiNS.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), fields.balance) }); }
    static fromFieldsWithTypes(item) {
        if (!isSuiNS(item.type)) {
            throw new Error("not a SuiNS type");
        }
        return SuiNS.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), item.fields.balance) });
    }
    static fromBcs(data) { return SuiNS.fromFields(SuiNS.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, balance: this.balance.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SuiNS.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_3.SUI.reified())), field.balance) }); }
    static fromJSON(json) {
        if (json.$typeName !== SuiNS.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SuiNS.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSuiNS(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SuiNS object`);
    } return SuiNS.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SuiNS object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuiNS(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuiNS object`);
        }
        return SuiNS.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.SuiNS = SuiNS;
SuiNS.$typeName = `${index_1.PKG_V1}::suins::SuiNS`;
SuiNS.$numTypeParams = 0;
SuiNS.$isPhantom = [];

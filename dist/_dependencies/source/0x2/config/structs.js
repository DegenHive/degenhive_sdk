"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingData = exports.Setting = exports.Config = void 0;
exports.isConfig = isConfig;
exports.isSetting = isSetting;
exports.isSettingData = isSettingData;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const index_1 = require("../index");
const structs_2 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Config =============================== */
function isConfig(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::config::Config` + '<'); }
class Config {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Config.$typeName;
        this.$isPhantom = Config.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Config.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified(WriteCap) { return { typeName: Config.$typeName, fullTypeName: (0, util_1.composeSuiType)(Config.$typeName, ...[(0, reified_1.extractType)(WriteCap)]), typeArgs: [(0, reified_1.extractType)(WriteCap)], isPhantom: Config.$isPhantom, reifiedTypeArgs: [WriteCap], fromFields: (fields) => Config.fromFields(WriteCap, fields), fromFieldsWithTypes: (item) => Config.fromFieldsWithTypes(WriteCap, item), fromBcs: (data) => Config.fromBcs(WriteCap, data), bcs: Config.bcs, fromJSONField: (field) => Config.fromJSONField(WriteCap, field), fromJSON: (json) => Config.fromJSON(WriteCap, json), fromSuiParsedData: (content) => Config.fromSuiParsedData(WriteCap, content), fromSuiObjectData: (content) => Config.fromSuiObjectData(WriteCap, content), fetch: async (client, id) => Config.fetch(client, WriteCap, id), new: (fields) => { return new Config([(0, reified_1.extractType)(WriteCap)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Config.reified; }
    static phantom(WriteCap) { return (0, reified_1.phantom)(Config.reified(WriteCap)); }
    static get p() { return Config.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Config", {
            id: structs_2.UID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return Config.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isConfig(item.type)) {
            throw new Error("not a Config type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Config.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id) });
    }
    static fromBcs(typeArg, data) { return Config.fromFields(typeArg, Config.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Config.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Config.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Config.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Config.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Config object`);
    } return Config.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConfig(data.bcs.type)) {
                throw new Error(`object at is not a Config object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
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
            return Config.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Config.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Config object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Config object`);
        }
        return Config.fromSuiObjectData(typeArg, res.data);
    }
}
exports.Config = Config;
Config.$typeName = `${index_1.PKG_V28}::config::Config`;
Config.$numTypeParams = 1;
Config.$isPhantom = [true,];
/* ============================== Setting =============================== */
function isSetting(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::config::Setting` + '<'); }
class Setting {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Setting.$typeName;
        this.$isPhantom = Setting.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Setting.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.data = fields.data;
    }
    static reified(Value) { return { typeName: Setting.$typeName, fullTypeName: (0, util_1.composeSuiType)(Setting.$typeName, ...[(0, reified_1.extractType)(Value)]), typeArgs: [(0, reified_1.extractType)(Value)], isPhantom: Setting.$isPhantom, reifiedTypeArgs: [Value], fromFields: (fields) => Setting.fromFields(Value, fields), fromFieldsWithTypes: (item) => Setting.fromFieldsWithTypes(Value, item), fromBcs: (data) => Setting.fromBcs(Value, data), bcs: Setting.bcs((0, reified_1.toBcs)(Value)), fromJSONField: (field) => Setting.fromJSONField(Value, field), fromJSON: (json) => Setting.fromJSON(Value, json), fromSuiParsedData: (content) => Setting.fromSuiParsedData(Value, content), fromSuiObjectData: (content) => Setting.fromSuiObjectData(Value, content), fetch: async (client, id) => Setting.fetch(client, Value, id), new: (fields) => { return new Setting([(0, reified_1.extractType)(Value)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Setting.reified; }
    static phantom(Value) { return (0, reified_1.phantom)(Setting.reified(Value)); }
    static get p() { return Setting.phantom; }
    static get bcs() {
        return (Value) => bcs_1.bcs.struct(`Setting<${Value.name}>`, {
            data: structs_1.Option.bcs(SettingData.bcs(Value))
        });
    }
    ;
    static fromFields(typeArg, fields) { return Setting.reified(typeArg).new({ data: (0, reified_1.decodeFromFields)(structs_1.Option.reified(SettingData.reified(typeArg)), fields.data) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isSetting(item.type)) {
            throw new Error("not a Setting type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Setting.reified(typeArg).new({ data: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(SettingData.reified(typeArg)), item.fields.data) });
    }
    static fromBcs(typeArg, data) {
        const typeArgs = [typeArg];
        return Setting.fromFields(typeArg, Setting.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    }
    toJSONField() {
        return {
            data: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${SettingData.$typeName}<${this.$typeArgs[0]}>>`, this.data),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Setting.reified(typeArg).new({ data: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(SettingData.reified(typeArg)), field.data) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Setting.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Setting.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Setting.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSetting(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Setting object`);
    } return Setting.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSetting(data.bcs.type)) {
                throw new Error(`object at is not a Setting object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
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
            return Setting.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Setting.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Setting object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSetting(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Setting object`);
        }
        return Setting.fromSuiObjectData(typeArg, res.data);
    }
}
exports.Setting = Setting;
Setting.$typeName = `${index_1.PKG_V28}::config::Setting`;
Setting.$numTypeParams = 1;
Setting.$isPhantom = [false,];
/* ============================== SettingData =============================== */
function isSettingData(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::config::SettingData` + '<'); }
class SettingData {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SettingData.$typeName;
        this.$isPhantom = SettingData.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SettingData.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.newerValueEpoch = fields.newerValueEpoch;
        ;
        this.newerValue = fields.newerValue;
        ;
        this.olderValueOpt = fields.olderValueOpt;
    }
    static reified(Value) { return { typeName: SettingData.$typeName, fullTypeName: (0, util_1.composeSuiType)(SettingData.$typeName, ...[(0, reified_1.extractType)(Value)]), typeArgs: [(0, reified_1.extractType)(Value)], isPhantom: SettingData.$isPhantom, reifiedTypeArgs: [Value], fromFields: (fields) => SettingData.fromFields(Value, fields), fromFieldsWithTypes: (item) => SettingData.fromFieldsWithTypes(Value, item), fromBcs: (data) => SettingData.fromBcs(Value, data), bcs: SettingData.bcs((0, reified_1.toBcs)(Value)), fromJSONField: (field) => SettingData.fromJSONField(Value, field), fromJSON: (json) => SettingData.fromJSON(Value, json), fromSuiParsedData: (content) => SettingData.fromSuiParsedData(Value, content), fromSuiObjectData: (content) => SettingData.fromSuiObjectData(Value, content), fetch: async (client, id) => SettingData.fetch(client, Value, id), new: (fields) => { return new SettingData([(0, reified_1.extractType)(Value)], fields); }, kind: "StructClassReified", }; }
    static get r() { return SettingData.reified; }
    static phantom(Value) { return (0, reified_1.phantom)(SettingData.reified(Value)); }
    static get p() { return SettingData.phantom; }
    static get bcs() {
        return (Value) => bcs_1.bcs.struct(`SettingData<${Value.name}>`, {
            newer_value_epoch: bcs_1.bcs.u64(), newer_value: structs_1.Option.bcs(Value), older_value_opt: structs_1.Option.bcs(Value)
        });
    }
    ;
    static fromFields(typeArg, fields) { return SettingData.reified(typeArg).new({ newerValueEpoch: (0, reified_1.decodeFromFields)("u64", fields.newer_value_epoch), newerValue: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArg), fields.newer_value), olderValueOpt: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArg), fields.older_value_opt) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isSettingData(item.type)) {
            throw new Error("not a SettingData type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return SettingData.reified(typeArg).new({ newerValueEpoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.newer_value_epoch), newerValue: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArg), item.fields.newer_value), olderValueOpt: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArg), item.fields.older_value_opt) });
    }
    static fromBcs(typeArg, data) {
        const typeArgs = [typeArg];
        return SettingData.fromFields(typeArg, SettingData.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    }
    toJSONField() {
        return {
            newerValueEpoch: this.newerValueEpoch.toString(), newerValue: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${this.$typeArgs[0]}>`, this.newerValue), olderValueOpt: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${this.$typeArgs[0]}>`, this.olderValueOpt),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return SettingData.reified(typeArg).new({ newerValueEpoch: (0, reified_1.decodeFromJSONField)("u64", field.newerValueEpoch), newerValue: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArg), field.newerValue), olderValueOpt: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArg), field.olderValueOpt) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== SettingData.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(SettingData.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return SettingData.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSettingData(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SettingData object`);
    } return SettingData.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSettingData(data.bcs.type)) {
                throw new Error(`object at is not a SettingData object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
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
            return SettingData.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SettingData.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SettingData object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSettingData(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SettingData object`);
        }
        return SettingData.fromSuiObjectData(typeArg, res.data);
    }
}
exports.SettingData = SettingData;
SettingData.$typeName = `${index_1.PKG_V28}::config::SettingData`;
SettingData.$numTypeParams = 1;
SettingData.$isPhantom = [false,];

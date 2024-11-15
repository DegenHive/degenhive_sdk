"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerTypeList = exports.PerTypeConfigCreated = exports.GlobalPauseKey = exports.DenyList = exports.ConfigWriteCap = exports.ConfigKey = exports.AddressKey = void 0;
exports.isAddressKey = isAddressKey;
exports.isConfigKey = isConfigKey;
exports.isConfigWriteCap = isConfigWriteCap;
exports.isDenyList = isDenyList;
exports.isGlobalPauseKey = isGlobalPauseKey;
exports.isPerTypeConfigCreated = isPerTypeConfigCreated;
exports.isPerTypeList = isPerTypeList;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../bag/structs");
const index_1 = require("../index");
const structs_2 = require("../object/structs");
const structs_3 = require("../table/structs");
const structs_4 = require("../vec-set/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== AddressKey =============================== */
function isAddressKey(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::deny_list::AddressKey`; }
class AddressKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = AddressKey.$typeName;
        this.$isPhantom = AddressKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(AddressKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.pos0 = fields.pos0;
    }
    static reified() { return { typeName: AddressKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(AddressKey.$typeName, ...[]), typeArgs: [], isPhantom: AddressKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => AddressKey.fromFields(fields), fromFieldsWithTypes: (item) => AddressKey.fromFieldsWithTypes(item), fromBcs: (data) => AddressKey.fromBcs(data), bcs: AddressKey.bcs, fromJSONField: (field) => AddressKey.fromJSONField(field), fromJSON: (json) => AddressKey.fromJSON(json), fromSuiParsedData: (content) => AddressKey.fromSuiParsedData(content), fromSuiObjectData: (content) => AddressKey.fromSuiObjectData(content), fetch: async (client, id) => AddressKey.fetch(client, id), new: (fields) => { return new AddressKey([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AddressKey.reified(); }
    static phantom() { return (0, reified_1.phantom)(AddressKey.reified()); }
    static get p() { return AddressKey.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AddressKey", {
            pos0: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return AddressKey.reified().new({ pos0: (0, reified_1.decodeFromFields)("address", fields.pos0) }); }
    static fromFieldsWithTypes(item) {
        if (!isAddressKey(item.type)) {
            throw new Error("not a AddressKey type");
        }
        return AddressKey.reified().new({ pos0: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.pos0) });
    }
    static fromBcs(data) { return AddressKey.fromFields(AddressKey.bcs.parse(data)); }
    toJSONField() {
        return {
            pos0: this.pos0,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AddressKey.reified().new({ pos0: (0, reified_1.decodeFromJSONField)("address", field.pos0) }); }
    static fromJSON(json) {
        if (json.$typeName !== AddressKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AddressKey.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAddressKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AddressKey object`);
    } return AddressKey.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isAddressKey(data.bcs.type)) {
                throw new Error(`object at is not a AddressKey object`);
            }
            return AddressKey.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return AddressKey.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AddressKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAddressKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddressKey object`);
        }
        return AddressKey.fromSuiObjectData(res.data);
    }
}
exports.AddressKey = AddressKey;
AddressKey.$typeName = `${index_1.PKG_V28}::deny_list::AddressKey`;
AddressKey.$numTypeParams = 0;
AddressKey.$isPhantom = [];
/* ============================== ConfigKey =============================== */
function isConfigKey(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::deny_list::ConfigKey`; }
class ConfigKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ConfigKey.$typeName;
        this.$isPhantom = ConfigKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ConfigKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.perTypeIndex = fields.perTypeIndex;
        ;
        this.perTypeKey = fields.perTypeKey;
    }
    static reified() { return { typeName: ConfigKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConfigKey.$typeName, ...[]), typeArgs: [], isPhantom: ConfigKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ConfigKey.fromFields(fields), fromFieldsWithTypes: (item) => ConfigKey.fromFieldsWithTypes(item), fromBcs: (data) => ConfigKey.fromBcs(data), bcs: ConfigKey.bcs, fromJSONField: (field) => ConfigKey.fromJSONField(field), fromJSON: (json) => ConfigKey.fromJSON(json), fromSuiParsedData: (content) => ConfigKey.fromSuiParsedData(content), fromSuiObjectData: (content) => ConfigKey.fromSuiObjectData(content), fetch: async (client, id) => ConfigKey.fetch(client, id), new: (fields) => { return new ConfigKey([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConfigKey.reified(); }
    static phantom() { return (0, reified_1.phantom)(ConfigKey.reified()); }
    static get p() { return ConfigKey.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ConfigKey", {
            per_type_index: bcs_1.bcs.u64(), per_type_key: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return ConfigKey.reified().new({ perTypeIndex: (0, reified_1.decodeFromFields)("u64", fields.per_type_index), perTypeKey: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.per_type_key) }); }
    static fromFieldsWithTypes(item) {
        if (!isConfigKey(item.type)) {
            throw new Error("not a ConfigKey type");
        }
        return ConfigKey.reified().new({ perTypeIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.per_type_index), perTypeKey: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.per_type_key) });
    }
    static fromBcs(data) { return ConfigKey.fromFields(ConfigKey.bcs.parse(data)); }
    toJSONField() {
        return {
            perTypeIndex: this.perTypeIndex.toString(), perTypeKey: (0, reified_1.fieldToJSON)(`vector<u8>`, this.perTypeKey),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConfigKey.reified().new({ perTypeIndex: (0, reified_1.decodeFromJSONField)("u64", field.perTypeIndex), perTypeKey: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.perTypeKey) }); }
    static fromJSON(json) {
        if (json.$typeName !== ConfigKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ConfigKey.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConfigKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ConfigKey object`);
    } return ConfigKey.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConfigKey(data.bcs.type)) {
                throw new Error(`object at is not a ConfigKey object`);
            }
            return ConfigKey.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ConfigKey.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ConfigKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfigKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ConfigKey object`);
        }
        return ConfigKey.fromSuiObjectData(res.data);
    }
}
exports.ConfigKey = ConfigKey;
ConfigKey.$typeName = `${index_1.PKG_V28}::deny_list::ConfigKey`;
ConfigKey.$numTypeParams = 0;
ConfigKey.$isPhantom = [];
/* ============================== ConfigWriteCap =============================== */
function isConfigWriteCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::deny_list::ConfigWriteCap`; }
class ConfigWriteCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ConfigWriteCap.$typeName;
        this.$isPhantom = ConfigWriteCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ConfigWriteCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: ConfigWriteCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConfigWriteCap.$typeName, ...[]), typeArgs: [], isPhantom: ConfigWriteCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ConfigWriteCap.fromFields(fields), fromFieldsWithTypes: (item) => ConfigWriteCap.fromFieldsWithTypes(item), fromBcs: (data) => ConfigWriteCap.fromBcs(data), bcs: ConfigWriteCap.bcs, fromJSONField: (field) => ConfigWriteCap.fromJSONField(field), fromJSON: (json) => ConfigWriteCap.fromJSON(json), fromSuiParsedData: (content) => ConfigWriteCap.fromSuiParsedData(content), fromSuiObjectData: (content) => ConfigWriteCap.fromSuiObjectData(content), fetch: async (client, id) => ConfigWriteCap.fetch(client, id), new: (fields) => { return new ConfigWriteCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConfigWriteCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(ConfigWriteCap.reified()); }
    static get p() { return ConfigWriteCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ConfigWriteCap", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return ConfigWriteCap.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isConfigWriteCap(item.type)) {
            throw new Error("not a ConfigWriteCap type");
        }
        return ConfigWriteCap.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return ConfigWriteCap.fromFields(ConfigWriteCap.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConfigWriteCap.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== ConfigWriteCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ConfigWriteCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConfigWriteCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ConfigWriteCap object`);
    } return ConfigWriteCap.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConfigWriteCap(data.bcs.type)) {
                throw new Error(`object at is not a ConfigWriteCap object`);
            }
            return ConfigWriteCap.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ConfigWriteCap.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ConfigWriteCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConfigWriteCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ConfigWriteCap object`);
        }
        return ConfigWriteCap.fromSuiObjectData(res.data);
    }
}
exports.ConfigWriteCap = ConfigWriteCap;
ConfigWriteCap.$typeName = `${index_1.PKG_V28}::deny_list::ConfigWriteCap`;
ConfigWriteCap.$numTypeParams = 0;
ConfigWriteCap.$isPhantom = [];
/* ============================== DenyList =============================== */
function isDenyList(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::deny_list::DenyList`; }
class DenyList {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DenyList.$typeName;
        this.$isPhantom = DenyList.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DenyList.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.lists = fields.lists;
    }
    static reified() { return { typeName: DenyList.$typeName, fullTypeName: (0, util_1.composeSuiType)(DenyList.$typeName, ...[]), typeArgs: [], isPhantom: DenyList.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => DenyList.fromFields(fields), fromFieldsWithTypes: (item) => DenyList.fromFieldsWithTypes(item), fromBcs: (data) => DenyList.fromBcs(data), bcs: DenyList.bcs, fromJSONField: (field) => DenyList.fromJSONField(field), fromJSON: (json) => DenyList.fromJSON(json), fromSuiParsedData: (content) => DenyList.fromSuiParsedData(content), fromSuiObjectData: (content) => DenyList.fromSuiObjectData(content), fetch: async (client, id) => DenyList.fetch(client, id), new: (fields) => { return new DenyList([], fields); }, kind: "StructClassReified", }; }
    static get r() { return DenyList.reified(); }
    static phantom() { return (0, reified_1.phantom)(DenyList.reified()); }
    static get p() { return DenyList.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("DenyList", {
            id: structs_2.UID.bcs, lists: structs_1.Bag.bcs
        });
    }
    ;
    static fromFields(fields) { return DenyList.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), lists: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.lists) }); }
    static fromFieldsWithTypes(item) {
        if (!isDenyList(item.type)) {
            throw new Error("not a DenyList type");
        }
        return DenyList.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), lists: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.lists) });
    }
    static fromBcs(data) { return DenyList.fromFields(DenyList.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, lists: this.lists.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return DenyList.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), lists: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.lists) }); }
    static fromJSON(json) {
        if (json.$typeName !== DenyList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return DenyList.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDenyList(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DenyList object`);
    } return DenyList.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDenyList(data.bcs.type)) {
                throw new Error(`object at is not a DenyList object`);
            }
            return DenyList.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DenyList.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DenyList object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDenyList(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DenyList object`);
        }
        return DenyList.fromSuiObjectData(res.data);
    }
}
exports.DenyList = DenyList;
DenyList.$typeName = `${index_1.PKG_V28}::deny_list::DenyList`;
DenyList.$numTypeParams = 0;
DenyList.$isPhantom = [];
/* ============================== GlobalPauseKey =============================== */
function isGlobalPauseKey(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::deny_list::GlobalPauseKey`; }
class GlobalPauseKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = GlobalPauseKey.$typeName;
        this.$isPhantom = GlobalPauseKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(GlobalPauseKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: GlobalPauseKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(GlobalPauseKey.$typeName, ...[]), typeArgs: [], isPhantom: GlobalPauseKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => GlobalPauseKey.fromFields(fields), fromFieldsWithTypes: (item) => GlobalPauseKey.fromFieldsWithTypes(item), fromBcs: (data) => GlobalPauseKey.fromBcs(data), bcs: GlobalPauseKey.bcs, fromJSONField: (field) => GlobalPauseKey.fromJSONField(field), fromJSON: (json) => GlobalPauseKey.fromJSON(json), fromSuiParsedData: (content) => GlobalPauseKey.fromSuiParsedData(content), fromSuiObjectData: (content) => GlobalPauseKey.fromSuiObjectData(content), fetch: async (client, id) => GlobalPauseKey.fetch(client, id), new: (fields) => { return new GlobalPauseKey([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GlobalPauseKey.reified(); }
    static phantom() { return (0, reified_1.phantom)(GlobalPauseKey.reified()); }
    static get p() { return GlobalPauseKey.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GlobalPauseKey", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return GlobalPauseKey.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isGlobalPauseKey(item.type)) {
            throw new Error("not a GlobalPauseKey type");
        }
        return GlobalPauseKey.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return GlobalPauseKey.fromFields(GlobalPauseKey.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GlobalPauseKey.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== GlobalPauseKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GlobalPauseKey.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGlobalPauseKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GlobalPauseKey object`);
    } return GlobalPauseKey.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isGlobalPauseKey(data.bcs.type)) {
                throw new Error(`object at is not a GlobalPauseKey object`);
            }
            return GlobalPauseKey.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return GlobalPauseKey.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GlobalPauseKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGlobalPauseKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GlobalPauseKey object`);
        }
        return GlobalPauseKey.fromSuiObjectData(res.data);
    }
}
exports.GlobalPauseKey = GlobalPauseKey;
GlobalPauseKey.$typeName = `${index_1.PKG_V28}::deny_list::GlobalPauseKey`;
GlobalPauseKey.$numTypeParams = 0;
GlobalPauseKey.$isPhantom = [];
/* ============================== PerTypeConfigCreated =============================== */
function isPerTypeConfigCreated(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::deny_list::PerTypeConfigCreated`; }
class PerTypeConfigCreated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PerTypeConfigCreated.$typeName;
        this.$isPhantom = PerTypeConfigCreated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PerTypeConfigCreated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.key = fields.key;
        ;
        this.configId = fields.configId;
    }
    static reified() { return { typeName: PerTypeConfigCreated.$typeName, fullTypeName: (0, util_1.composeSuiType)(PerTypeConfigCreated.$typeName, ...[]), typeArgs: [], isPhantom: PerTypeConfigCreated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PerTypeConfigCreated.fromFields(fields), fromFieldsWithTypes: (item) => PerTypeConfigCreated.fromFieldsWithTypes(item), fromBcs: (data) => PerTypeConfigCreated.fromBcs(data), bcs: PerTypeConfigCreated.bcs, fromJSONField: (field) => PerTypeConfigCreated.fromJSONField(field), fromJSON: (json) => PerTypeConfigCreated.fromJSON(json), fromSuiParsedData: (content) => PerTypeConfigCreated.fromSuiParsedData(content), fromSuiObjectData: (content) => PerTypeConfigCreated.fromSuiObjectData(content), fetch: async (client, id) => PerTypeConfigCreated.fetch(client, id), new: (fields) => { return new PerTypeConfigCreated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PerTypeConfigCreated.reified(); }
    static phantom() { return (0, reified_1.phantom)(PerTypeConfigCreated.reified()); }
    static get p() { return PerTypeConfigCreated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PerTypeConfigCreated", {
            key: ConfigKey.bcs, config_id: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(fields) { return PerTypeConfigCreated.reified().new({ key: (0, reified_1.decodeFromFields)(ConfigKey.reified(), fields.key), configId: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.config_id) }); }
    static fromFieldsWithTypes(item) {
        if (!isPerTypeConfigCreated(item.type)) {
            throw new Error("not a PerTypeConfigCreated type");
        }
        return PerTypeConfigCreated.reified().new({ key: (0, reified_1.decodeFromFieldsWithTypes)(ConfigKey.reified(), item.fields.key), configId: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.config_id) });
    }
    static fromBcs(data) { return PerTypeConfigCreated.fromFields(PerTypeConfigCreated.bcs.parse(data)); }
    toJSONField() {
        return {
            key: this.key.toJSONField(), configId: this.configId,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PerTypeConfigCreated.reified().new({ key: (0, reified_1.decodeFromJSONField)(ConfigKey.reified(), field.key), configId: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.configId) }); }
    static fromJSON(json) {
        if (json.$typeName !== PerTypeConfigCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PerTypeConfigCreated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPerTypeConfigCreated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PerTypeConfigCreated object`);
    } return PerTypeConfigCreated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPerTypeConfigCreated(data.bcs.type)) {
                throw new Error(`object at is not a PerTypeConfigCreated object`);
            }
            return PerTypeConfigCreated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PerTypeConfigCreated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PerTypeConfigCreated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPerTypeConfigCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PerTypeConfigCreated object`);
        }
        return PerTypeConfigCreated.fromSuiObjectData(res.data);
    }
}
exports.PerTypeConfigCreated = PerTypeConfigCreated;
PerTypeConfigCreated.$typeName = `${index_1.PKG_V28}::deny_list::PerTypeConfigCreated`;
PerTypeConfigCreated.$numTypeParams = 0;
PerTypeConfigCreated.$isPhantom = [];
/* ============================== PerTypeList =============================== */
function isPerTypeList(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::deny_list::PerTypeList`; }
class PerTypeList {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PerTypeList.$typeName;
        this.$isPhantom = PerTypeList.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PerTypeList.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.deniedCount = fields.deniedCount;
        ;
        this.deniedAddresses = fields.deniedAddresses;
    }
    static reified() { return { typeName: PerTypeList.$typeName, fullTypeName: (0, util_1.composeSuiType)(PerTypeList.$typeName, ...[]), typeArgs: [], isPhantom: PerTypeList.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PerTypeList.fromFields(fields), fromFieldsWithTypes: (item) => PerTypeList.fromFieldsWithTypes(item), fromBcs: (data) => PerTypeList.fromBcs(data), bcs: PerTypeList.bcs, fromJSONField: (field) => PerTypeList.fromJSONField(field), fromJSON: (json) => PerTypeList.fromJSON(json), fromSuiParsedData: (content) => PerTypeList.fromSuiParsedData(content), fromSuiObjectData: (content) => PerTypeList.fromSuiObjectData(content), fetch: async (client, id) => PerTypeList.fetch(client, id), new: (fields) => { return new PerTypeList([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PerTypeList.reified(); }
    static phantom() { return (0, reified_1.phantom)(PerTypeList.reified()); }
    static get p() { return PerTypeList.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PerTypeList", {
            id: structs_2.UID.bcs, denied_count: structs_3.Table.bcs, denied_addresses: structs_3.Table.bcs
        });
    }
    ;
    static fromFields(fields) { return PerTypeList.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), deniedCount: (0, reified_1.decodeFromFields)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), fields.denied_count), deniedAddresses: (0, reified_1.decodeFromFields)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), fields.denied_addresses) }); }
    static fromFieldsWithTypes(item) {
        if (!isPerTypeList(item.type)) {
            throw new Error("not a PerTypeList type");
        }
        return PerTypeList.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), deniedCount: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), item.fields.denied_count), deniedAddresses: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), item.fields.denied_addresses) });
    }
    static fromBcs(data) { return PerTypeList.fromFields(PerTypeList.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, deniedCount: this.deniedCount.toJSONField(), deniedAddresses: this.deniedAddresses.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PerTypeList.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), deniedCount: (0, reified_1.decodeFromJSONField)(structs_3.Table.reified(reified.phantom("address"), reified.phantom("u64")), field.deniedCount), deniedAddresses: (0, reified_1.decodeFromJSONField)(structs_3.Table.reified(reified.phantom(reified.vector("u8")), reified.phantom(structs_4.VecSet.reified("address"))), field.deniedAddresses) }); }
    static fromJSON(json) {
        if (json.$typeName !== PerTypeList.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PerTypeList.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPerTypeList(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PerTypeList object`);
    } return PerTypeList.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isPerTypeList(data.bcs.type)) {
                throw new Error(`object at is not a PerTypeList object`);
            }
            return PerTypeList.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return PerTypeList.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PerTypeList object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPerTypeList(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PerTypeList object`);
        }
        return PerTypeList.fromSuiObjectData(res.data);
    }
}
exports.PerTypeList = PerTypeList;
PerTypeList.$typeName = `${index_1.PKG_V28}::deny_list::PerTypeList`;
PerTypeList.$numTypeParams = 0;
PerTypeList.$isPhantom = [];

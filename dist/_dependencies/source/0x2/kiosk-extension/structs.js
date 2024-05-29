"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionKey = exports.isExtensionKey = exports.Extension = exports.isExtension = void 0;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../bag/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Extension =============================== */
function isExtension(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::kiosk_extension::Extension"; }
exports.isExtension = isExtension;
class Extension {
    constructor(typeArgs, fields) {
        this.$typeName = Extension.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Extension.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.storage = fields.storage;
        ;
        this.permissions = fields.permissions;
        ;
        this.isEnabled = fields.isEnabled;
    }
    static reified() { return { typeName: Extension.$typeName, fullTypeName: (0, util_1.composeSuiType)(Extension.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Extension.fromFields(fields), fromFieldsWithTypes: (item) => Extension.fromFieldsWithTypes(item), fromBcs: (data) => Extension.fromBcs(data), bcs: Extension.bcs, fromJSONField: (field) => Extension.fromJSONField(field), fromJSON: (json) => Extension.fromJSON(json), fromSuiParsedData: (content) => Extension.fromSuiParsedData(content), fetch: async (client, id) => Extension.fetch(client, id), new: (fields) => { return new Extension([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Extension.reified(); }
    static phantom() { return (0, reified_1.phantom)(Extension.reified()); }
    static get p() { return Extension.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Extension", {
            storage: structs_1.Bag.bcs, permissions: bcs_1.bcs.u128(), is_enabled: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Extension.reified().new({ storage: (0, reified_1.decodeFromFields)(structs_1.Bag.reified(), fields.storage), permissions: (0, reified_1.decodeFromFields)("u128", fields.permissions), isEnabled: (0, reified_1.decodeFromFields)("bool", fields.is_enabled) }); }
    static fromFieldsWithTypes(item) {
        if (!isExtension(item.type)) {
            throw new Error("not a Extension type");
        }
        return Extension.reified().new({ storage: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Bag.reified(), item.fields.storage), permissions: (0, reified_1.decodeFromFieldsWithTypes)("u128", item.fields.permissions), isEnabled: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_enabled) });
    }
    static fromBcs(data) { return Extension.fromFields(Extension.bcs.parse(data)); }
    toJSONField() {
        return {
            storage: this.storage.toJSONField(), permissions: this.permissions.toString(), isEnabled: this.isEnabled,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Extension.reified().new({ storage: (0, reified_1.decodeFromJSONField)(structs_1.Bag.reified(), field.storage), permissions: (0, reified_1.decodeFromJSONField)("u128", field.permissions), isEnabled: (0, reified_1.decodeFromJSONField)("bool", field.isEnabled) }); }
    static fromJSON(json) {
        if (json.$typeName !== Extension.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Extension.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExtension(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Extension object`);
    } return Extension.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Extension object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExtension(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Extension object`);
        }
        return Extension.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Extension = Extension;
Extension.$typeName = "0x2::kiosk_extension::Extension";
Extension.$numTypeParams = 0;
/* ============================== ExtensionKey =============================== */
function isExtensionKey(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::kiosk_extension::ExtensionKey<"); }
exports.isExtensionKey = isExtensionKey;
class ExtensionKey {
    constructor(typeArgs, fields) {
        this.$typeName = ExtensionKey.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ExtensionKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified(Ext) { return { typeName: ExtensionKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(ExtensionKey.$typeName, ...[(0, reified_1.extractType)(Ext)]), typeArgs: [(0, reified_1.extractType)(Ext)], reifiedTypeArgs: [Ext], fromFields: (fields) => ExtensionKey.fromFields(Ext, fields), fromFieldsWithTypes: (item) => ExtensionKey.fromFieldsWithTypes(Ext, item), fromBcs: (data) => ExtensionKey.fromBcs(Ext, data), bcs: ExtensionKey.bcs, fromJSONField: (field) => ExtensionKey.fromJSONField(Ext, field), fromJSON: (json) => ExtensionKey.fromJSON(Ext, json), fromSuiParsedData: (content) => ExtensionKey.fromSuiParsedData(Ext, content), fetch: async (client, id) => ExtensionKey.fetch(client, Ext, id), new: (fields) => { return new ExtensionKey([(0, reified_1.extractType)(Ext)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ExtensionKey.reified; }
    static phantom(Ext) { return (0, reified_1.phantom)(ExtensionKey.reified(Ext)); }
    static get p() { return ExtensionKey.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ExtensionKey", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return ExtensionKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isExtensionKey(item.type)) {
            throw new Error("not a ExtensionKey type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ExtensionKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(typeArg, data) { return ExtensionKey.fromFields(typeArg, ExtensionKey.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return ExtensionKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== ExtensionKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ExtensionKey.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ExtensionKey.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isExtensionKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ExtensionKey object`);
    } return ExtensionKey.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ExtensionKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isExtensionKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ExtensionKey object`);
        }
        return ExtensionKey.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ExtensionKey = ExtensionKey;
ExtensionKey.$typeName = "0x2::kiosk_extension::ExtensionKey";
ExtensionKey.$numTypeParams = 1;

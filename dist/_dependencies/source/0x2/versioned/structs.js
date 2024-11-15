"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Versioned = exports.VersionChangeCap = void 0;
exports.isVersionChangeCap = isVersionChangeCap;
exports.isVersioned = isVersioned;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const structs_1 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== VersionChangeCap =============================== */
function isVersionChangeCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::versioned::VersionChangeCap`; }
class VersionChangeCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VersionChangeCap.$typeName;
        this.$isPhantom = VersionChangeCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VersionChangeCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.versionedId = fields.versionedId;
        ;
        this.oldVersion = fields.oldVersion;
    }
    static reified() { return { typeName: VersionChangeCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(VersionChangeCap.$typeName, ...[]), typeArgs: [], isPhantom: VersionChangeCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => VersionChangeCap.fromFields(fields), fromFieldsWithTypes: (item) => VersionChangeCap.fromFieldsWithTypes(item), fromBcs: (data) => VersionChangeCap.fromBcs(data), bcs: VersionChangeCap.bcs, fromJSONField: (field) => VersionChangeCap.fromJSONField(field), fromJSON: (json) => VersionChangeCap.fromJSON(json), fromSuiParsedData: (content) => VersionChangeCap.fromSuiParsedData(content), fromSuiObjectData: (content) => VersionChangeCap.fromSuiObjectData(content), fetch: async (client, id) => VersionChangeCap.fetch(client, id), new: (fields) => { return new VersionChangeCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VersionChangeCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(VersionChangeCap.reified()); }
    static get p() { return VersionChangeCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VersionChangeCap", {
            versioned_id: structs_1.ID.bcs, old_version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return VersionChangeCap.reified().new({ versionedId: (0, reified_1.decodeFromFields)(structs_1.ID.reified(), fields.versioned_id), oldVersion: (0, reified_1.decodeFromFields)("u64", fields.old_version) }); }
    static fromFieldsWithTypes(item) {
        if (!isVersionChangeCap(item.type)) {
            throw new Error("not a VersionChangeCap type");
        }
        return VersionChangeCap.reified().new({ versionedId: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.ID.reified(), item.fields.versioned_id), oldVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.old_version) });
    }
    static fromBcs(data) { return VersionChangeCap.fromFields(VersionChangeCap.bcs.parse(data)); }
    toJSONField() {
        return {
            versionedId: this.versionedId, oldVersion: this.oldVersion.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VersionChangeCap.reified().new({ versionedId: (0, reified_1.decodeFromJSONField)(structs_1.ID.reified(), field.versionedId), oldVersion: (0, reified_1.decodeFromJSONField)("u64", field.oldVersion) }); }
    static fromJSON(json) {
        if (json.$typeName !== VersionChangeCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VersionChangeCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVersionChangeCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VersionChangeCap object`);
    } return VersionChangeCap.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVersionChangeCap(data.bcs.type)) {
                throw new Error(`object at is not a VersionChangeCap object`);
            }
            return VersionChangeCap.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return VersionChangeCap.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VersionChangeCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVersionChangeCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VersionChangeCap object`);
        }
        return VersionChangeCap.fromSuiObjectData(res.data);
    }
}
exports.VersionChangeCap = VersionChangeCap;
VersionChangeCap.$typeName = `${index_1.PKG_V28}::versioned::VersionChangeCap`;
VersionChangeCap.$numTypeParams = 0;
VersionChangeCap.$isPhantom = [];
/* ============================== Versioned =============================== */
function isVersioned(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::versioned::Versioned`; }
class Versioned {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Versioned.$typeName;
        this.$isPhantom = Versioned.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Versioned.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: Versioned.$typeName, fullTypeName: (0, util_1.composeSuiType)(Versioned.$typeName, ...[]), typeArgs: [], isPhantom: Versioned.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Versioned.fromFields(fields), fromFieldsWithTypes: (item) => Versioned.fromFieldsWithTypes(item), fromBcs: (data) => Versioned.fromBcs(data), bcs: Versioned.bcs, fromJSONField: (field) => Versioned.fromJSONField(field), fromJSON: (json) => Versioned.fromJSON(json), fromSuiParsedData: (content) => Versioned.fromSuiParsedData(content), fromSuiObjectData: (content) => Versioned.fromSuiObjectData(content), fetch: async (client, id) => Versioned.fetch(client, id), new: (fields) => { return new Versioned([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Versioned.reified(); }
    static phantom() { return (0, reified_1.phantom)(Versioned.reified()); }
    static get p() { return Versioned.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Versioned", {
            id: structs_1.UID.bcs, version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return Versioned.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isVersioned(item.type)) {
            throw new Error("not a Versioned type");
        }
        return Versioned.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return Versioned.fromFields(Versioned.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Versioned.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== Versioned.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Versioned.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVersioned(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Versioned object`);
    } return Versioned.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isVersioned(data.bcs.type)) {
                throw new Error(`object at is not a Versioned object`);
            }
            return Versioned.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Versioned.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Versioned object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVersioned(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Versioned object`);
        }
        return Versioned.fromSuiObjectData(res.data);
    }
}
exports.Versioned = Versioned;
Versioned.$typeName = `${index_1.PKG_V28}::versioned::Versioned`;
Versioned.$numTypeParams = 0;
Versioned.$isPhantom = [];

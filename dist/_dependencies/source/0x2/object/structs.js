"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UID = exports.ID = void 0;
exports.isID = isID;
exports.isUID = isUID;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== ID =============================== */
function isID(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::object::ID"; }
class ID {
    constructor(typeArgs, fields) {
        this.$typeName = ID.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ID.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified() { return { typeName: ID.$typeName, fullTypeName: (0, util_1.composeSuiType)(ID.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ID.fromFields(fields), fromFieldsWithTypes: (item) => ID.fromFieldsWithTypes(item), fromBcs: (data) => ID.fromBcs(data), bcs: ID.bcs, fromJSONField: (field) => ID.fromJSONField(field), fromJSON: (json) => ID.fromJSON(json), fromSuiParsedData: (content) => ID.fromSuiParsedData(content), fetch: async (client, id) => ID.fetch(client, id), new: (fields) => { return new ID([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ID.reified(); }
    static phantom() { return (0, reified_1.phantom)(ID.reified()); }
    static get p() { return ID.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ID", {
            bytes: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ID.reified().new({ bytes: (0, reified_1.decodeFromFields)("address", fields.bytes) }); }
    static fromFieldsWithTypes(item) {
        if (!isID(item.type)) {
            throw new Error("not a ID type");
        }
        return ID.reified().new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.bytes) });
    }
    static fromBcs(data) { return ID.fromFields(ID.bcs.parse(data)); }
    toJSONField() {
        return {
            bytes: this.bytes,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ID.reified().new({ bytes: (0, reified_1.decodeFromJSONField)("address", field.bytes) }); }
    static fromJSON(json) {
        if (json.$typeName !== ID.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ID.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isID(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ID object`);
    } return ID.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ID object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isID(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ID object`);
        }
        return ID.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ID = ID;
ID.$typeName = "0x2::object::ID";
ID.$numTypeParams = 0;
/* ============================== UID =============================== */
function isUID(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::object::UID"; }
class UID {
    constructor(typeArgs, fields) {
        this.$typeName = UID.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(UID.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: UID.$typeName, fullTypeName: (0, util_1.composeSuiType)(UID.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => UID.fromFields(fields), fromFieldsWithTypes: (item) => UID.fromFieldsWithTypes(item), fromBcs: (data) => UID.fromBcs(data), bcs: UID.bcs, fromJSONField: (field) => UID.fromJSONField(field), fromJSON: (json) => UID.fromJSON(json), fromSuiParsedData: (content) => UID.fromSuiParsedData(content), fetch: async (client, id) => UID.fetch(client, id), new: (fields) => { return new UID([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UID.reified(); }
    static phantom() { return (0, reified_1.phantom)(UID.reified()); }
    static get p() { return UID.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UID", {
            id: ID.bcs
        });
    }
    ;
    static fromFields(fields) { return UID.reified().new({ id: (0, reified_1.decodeFromFields)(ID.reified(), fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isUID(item.type)) {
            throw new Error("not a UID type");
        }
        return UID.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(ID.reified(), item.fields.id) });
    }
    static fromBcs(data) { return UID.fromFields(UID.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UID.reified().new({ id: (0, reified_1.decodeFromJSONField)(ID.reified(), field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== UID.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UID.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUID(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UID object`);
    } return UID.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UID object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUID(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UID object`);
        }
        return UID.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UID = UID;
UID.$typeName = "0x2::object::UID";
UID.$numTypeParams = 0;

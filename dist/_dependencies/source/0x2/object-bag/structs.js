"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectBag = void 0;
exports.isObjectBag = isObjectBag;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const structs_1 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== ObjectBag =============================== */
function isObjectBag(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::object_bag::ObjectBag`; }
class ObjectBag {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ObjectBag.$typeName;
        this.$isPhantom = ObjectBag.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ObjectBag.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.size = fields.size;
    }
    static reified() { return { typeName: ObjectBag.$typeName, fullTypeName: (0, util_1.composeSuiType)(ObjectBag.$typeName, ...[]), typeArgs: [], isPhantom: ObjectBag.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ObjectBag.fromFields(fields), fromFieldsWithTypes: (item) => ObjectBag.fromFieldsWithTypes(item), fromBcs: (data) => ObjectBag.fromBcs(data), bcs: ObjectBag.bcs, fromJSONField: (field) => ObjectBag.fromJSONField(field), fromJSON: (json) => ObjectBag.fromJSON(json), fromSuiParsedData: (content) => ObjectBag.fromSuiParsedData(content), fromSuiObjectData: (content) => ObjectBag.fromSuiObjectData(content), fetch: async (client, id) => ObjectBag.fetch(client, id), new: (fields) => { return new ObjectBag([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ObjectBag.reified(); }
    static phantom() { return (0, reified_1.phantom)(ObjectBag.reified()); }
    static get p() { return ObjectBag.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ObjectBag", {
            id: structs_1.UID.bcs, size: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ObjectBag.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), size: (0, reified_1.decodeFromFields)("u64", fields.size) }); }
    static fromFieldsWithTypes(item) {
        if (!isObjectBag(item.type)) {
            throw new Error("not a ObjectBag type");
        }
        return ObjectBag.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size) });
    }
    static fromBcs(data) { return ObjectBag.fromFields(ObjectBag.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, size: this.size.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ObjectBag.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), size: (0, reified_1.decodeFromJSONField)("u64", field.size) }); }
    static fromJSON(json) {
        if (json.$typeName !== ObjectBag.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ObjectBag.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isObjectBag(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ObjectBag object`);
    } return ObjectBag.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isObjectBag(data.bcs.type)) {
                throw new Error(`object at is not a ObjectBag object`);
            }
            return ObjectBag.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ObjectBag.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ObjectBag object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isObjectBag(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ObjectBag object`);
        }
        return ObjectBag.fromSuiObjectData(res.data);
    }
}
exports.ObjectBag = ObjectBag;
ObjectBag.$typeName = `${index_1.PKG_V28}::object_bag::ObjectBag`;
ObjectBag.$numTypeParams = 0;
ObjectBag.$isPhantom = [];

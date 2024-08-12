"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeName = void 0;
exports.isTypeName = isTypeName;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../ascii/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== TypeName =============================== */
function isTypeName(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V8}::type_name::TypeName`; }
class TypeName {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TypeName.$typeName;
        this.$isPhantom = TypeName.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TypeName.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.name = fields.name;
    }
    static reified() { return { typeName: TypeName.$typeName, fullTypeName: (0, util_1.composeSuiType)(TypeName.$typeName, ...[]), typeArgs: [], isPhantom: TypeName.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => TypeName.fromFields(fields), fromFieldsWithTypes: (item) => TypeName.fromFieldsWithTypes(item), fromBcs: (data) => TypeName.fromBcs(data), bcs: TypeName.bcs, fromJSONField: (field) => TypeName.fromJSONField(field), fromJSON: (json) => TypeName.fromJSON(json), fromSuiParsedData: (content) => TypeName.fromSuiParsedData(content), fetch: async (client, id) => TypeName.fetch(client, id), new: (fields) => { return new TypeName([], fields); }, kind: "StructClassReified", }; }
    static get r() { return TypeName.reified(); }
    static phantom() { return (0, reified_1.phantom)(TypeName.reified()); }
    static get p() { return TypeName.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("TypeName", {
            name: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return TypeName.reified().new({ name: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.name) }); }
    static fromFieldsWithTypes(item) {
        if (!isTypeName(item.type)) {
            throw new Error("not a TypeName type");
        }
        return TypeName.reified().new({ name: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.name) });
    }
    static fromBcs(data) { return TypeName.fromFields(TypeName.bcs.parse(data)); }
    toJSONField() {
        return {
            name: this.name,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return TypeName.reified().new({ name: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.name) }); }
    static fromJSON(json) {
        if (json.$typeName !== TypeName.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return TypeName.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTypeName(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TypeName object`);
    } return TypeName.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TypeName object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTypeName(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TypeName object`);
        }
        return TypeName.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TypeName = TypeName;
TypeName.$typeName = `${index_1.PKG_V8}::type_name::TypeName`;
TypeName.$numTypeParams = 0;
TypeName.$isPhantom = [];

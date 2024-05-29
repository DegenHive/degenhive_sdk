"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectTable = exports.isObjectTable = void 0;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== ObjectTable =============================== */
function isObjectTable(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::object_table::ObjectTable<"); }
exports.isObjectTable = isObjectTable;
class ObjectTable {
    constructor(typeArgs, fields) {
        this.$typeName = ObjectTable.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ObjectTable.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.size = fields.size;
    }
    static reified(K, V) { return { typeName: ObjectTable.$typeName, fullTypeName: (0, util_1.composeSuiType)(ObjectTable.$typeName, ...[(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)]), typeArgs: [(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], reifiedTypeArgs: [K, V], fromFields: (fields) => ObjectTable.fromFields([K, V], fields), fromFieldsWithTypes: (item) => ObjectTable.fromFieldsWithTypes([K, V], item), fromBcs: (data) => ObjectTable.fromBcs([K, V], data), bcs: ObjectTable.bcs, fromJSONField: (field) => ObjectTable.fromJSONField([K, V], field), fromJSON: (json) => ObjectTable.fromJSON([K, V], json), fromSuiParsedData: (content) => ObjectTable.fromSuiParsedData([K, V], content), fetch: async (client, id) => ObjectTable.fetch(client, [K, V], id), new: (fields) => { return new ObjectTable([(0, reified_1.extractType)(K), (0, reified_1.extractType)(V)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ObjectTable.reified; }
    static phantom(K, V) { return (0, reified_1.phantom)(ObjectTable.reified(K, V)); }
    static get p() { return ObjectTable.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ObjectTable", {
            id: structs_1.UID.bcs, size: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArgs, fields) { return ObjectTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), size: (0, reified_1.decodeFromFields)("u64", fields.size) }); }
    static fromFieldsWithTypes(typeArgs, item) {
        if (!isObjectTable(item.type)) {
            throw new Error("not a ObjectTable type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, typeArgs);
        return ObjectTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), size: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.size) });
    }
    static fromBcs(typeArgs, data) { return ObjectTable.fromFields(typeArgs, ObjectTable.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, size: this.size.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArgs, field) { return ObjectTable.reified(typeArgs[0], typeArgs[1]).new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), size: (0, reified_1.decodeFromJSONField)("u64", field.size) }); }
    static fromJSON(typeArgs, json) {
        if (json.$typeName !== ObjectTable.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ObjectTable.$typeName, ...typeArgs.map(reified_1.extractType)), json.$typeArgs, typeArgs);
        return ObjectTable.fromJSONField(typeArgs, json);
    }
    static fromSuiParsedData(typeArgs, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isObjectTable(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ObjectTable object`);
    } return ObjectTable.fromFieldsWithTypes(typeArgs, content); }
    static async fetch(client, typeArgs, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ObjectTable object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isObjectTable(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ObjectTable object`);
        }
        return ObjectTable.fromBcs(typeArgs, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ObjectTable = ObjectTable;
ObjectTable.$typeName = "0x2::object_table::ObjectTable";
ObjectTable.$numTypeParams = 2;

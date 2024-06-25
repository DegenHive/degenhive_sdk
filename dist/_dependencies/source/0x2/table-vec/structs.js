"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableVec = void 0;
exports.isTableVec = isTableVec;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../table/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== TableVec =============================== */
function isTableVec(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::table_vec::TableVec<"); }
class TableVec {
    constructor(typeArgs, fields) {
        this.$typeName = TableVec.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TableVec.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.contents = fields.contents;
    }
    static reified(Element) { return { typeName: TableVec.$typeName, fullTypeName: (0, util_1.composeSuiType)(TableVec.$typeName, ...[(0, reified_1.extractType)(Element)]), typeArgs: [(0, reified_1.extractType)(Element)], reifiedTypeArgs: [Element], fromFields: (fields) => TableVec.fromFields(Element, fields), fromFieldsWithTypes: (item) => TableVec.fromFieldsWithTypes(Element, item), fromBcs: (data) => TableVec.fromBcs(Element, data), bcs: TableVec.bcs, fromJSONField: (field) => TableVec.fromJSONField(Element, field), fromJSON: (json) => TableVec.fromJSON(Element, json), fromSuiParsedData: (content) => TableVec.fromSuiParsedData(Element, content), fetch: async (client, id) => TableVec.fetch(client, Element, id), new: (fields) => { return new TableVec([(0, reified_1.extractType)(Element)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TableVec.reified; }
    static phantom(Element) { return (0, reified_1.phantom)(TableVec.reified(Element)); }
    static get p() { return TableVec.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TableVec", {
            contents: structs_1.Table.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return TableVec.reified(typeArg).new({ contents: (0, reified_1.decodeFromFields)(structs_1.Table.reified(reified.phantom("u64"), typeArg), fields.contents) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTableVec(item.type)) {
            throw new Error("not a TableVec type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TableVec.reified(typeArg).new({ contents: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Table.reified(reified.phantom("u64"), typeArg), item.fields.contents) });
    }
    static fromBcs(typeArg, data) { return TableVec.fromFields(typeArg, TableVec.bcs.parse(data)); }
    toJSONField() {
        return {
            contents: this.contents.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TableVec.reified(typeArg).new({ contents: (0, reified_1.decodeFromJSONField)(structs_1.Table.reified(reified.phantom("u64"), typeArg), field.contents) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TableVec.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TableVec.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TableVec.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTableVec(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TableVec object`);
    } return TableVec.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TableVec object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTableVec(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TableVec object`);
        }
        return TableVec.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TableVec = TableVec;
TableVec.$typeName = "0x2::table_vec::TableVec";
TableVec.$numTypeParams = 1;

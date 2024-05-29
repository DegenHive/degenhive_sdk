"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.isOption = void 0;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== Option =============================== */
function isOption(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x1::option::Option<"); }
exports.isOption = isOption;
class Option {
    ;
    constructor(typeArgs, fields) {
        this.__inner = null; // for type checking in reified.ts
        this.$typeName = Option.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Option.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.vec = fields.vec;
    }
    static reified(Element) { return { typeName: Option.$typeName, fullTypeName: (0, util_1.composeSuiType)(Option.$typeName, ...[(0, reified_1.extractType)(Element)]), typeArgs: [(0, reified_1.extractType)(Element)], reifiedTypeArgs: [Element], fromFields: (fields) => Option.fromFields(Element, fields), fromFieldsWithTypes: (item) => Option.fromFieldsWithTypes(Element, item), fromBcs: (data) => Option.fromBcs(Element, data), bcs: Option.bcs((0, reified_1.toBcs)(Element)), fromJSONField: (field) => Option.fromJSONField(Element, field), fromJSON: (json) => Option.fromJSON(Element, json), fromSuiParsedData: (content) => Option.fromSuiParsedData(Element, content), fetch: async (client, id) => Option.fetch(client, Element, id), new: (fields) => { return new Option([(0, reified_1.extractType)(Element)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Option.reified; }
    static phantom(Element) { return (0, reified_1.phantom)(Option.reified(Element)); }
    static get p() { return Option.phantom; }
    static get bcs() {
        return (Element) => bcs_1.bcs.struct(`Option<${Element.name}>`, {
            vec: bcs_1.bcs.vector(Element)
        });
    }
    ;
    static fromFields(typeArg, fields) { return Option.reified(typeArg).new({ vec: (0, reified_1.decodeFromFields)(reified.vector(typeArg), fields.vec) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isOption(item.type)) {
            throw new Error("not a Option type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Option.reified(typeArg).new({ vec: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(typeArg), item.fields.vec) });
    }
    static fromBcs(typeArg, data) {
        const typeArgs = [typeArg];
        return Option.fromFields(typeArg, Option.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    }
    toJSONField() {
        return {
            vec: (0, reified_1.fieldToJSON)(`vector<${this.$typeArgs[0]}>`, this.vec),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Option.reified(typeArg).new({ vec: (0, reified_1.decodeFromJSONField)(reified.vector(typeArg), field.vec) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Option.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Option.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Option.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isOption(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Option object`);
    } return Option.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Option object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isOption(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Option object`);
        }
        return Option.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Option = Option;
Option.$typeName = "0x1::option::Option";
Option.$numTypeParams = 1;

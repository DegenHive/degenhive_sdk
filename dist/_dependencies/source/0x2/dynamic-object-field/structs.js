"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = exports.isWrapper = void 0;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== Wrapper =============================== */
function isWrapper(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::dynamic_object_field::Wrapper<"); }
exports.isWrapper = isWrapper;
class Wrapper {
    constructor(typeArgs, fields) {
        this.$typeName = Wrapper.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Wrapper.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.name = fields.name;
    }
    static reified(Name) { return { typeName: Wrapper.$typeName, fullTypeName: (0, util_1.composeSuiType)(Wrapper.$typeName, ...[(0, reified_1.extractType)(Name)]), typeArgs: [(0, reified_1.extractType)(Name)], reifiedTypeArgs: [Name], fromFields: (fields) => Wrapper.fromFields(Name, fields), fromFieldsWithTypes: (item) => Wrapper.fromFieldsWithTypes(Name, item), fromBcs: (data) => Wrapper.fromBcs(Name, data), bcs: Wrapper.bcs((0, reified_1.toBcs)(Name)), fromJSONField: (field) => Wrapper.fromJSONField(Name, field), fromJSON: (json) => Wrapper.fromJSON(Name, json), fromSuiParsedData: (content) => Wrapper.fromSuiParsedData(Name, content), fetch: async (client, id) => Wrapper.fetch(client, Name, id), new: (fields) => { return new Wrapper([(0, reified_1.extractType)(Name)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Wrapper.reified; }
    static phantom(Name) { return (0, reified_1.phantom)(Wrapper.reified(Name)); }
    static get p() { return Wrapper.phantom; }
    static get bcs() {
        return (Name) => bcs_1.bcs.struct(`Wrapper<${Name.name}>`, {
            name: Name
        });
    }
    ;
    static fromFields(typeArg, fields) { return Wrapper.reified(typeArg).new({ name: (0, reified_1.decodeFromFields)(typeArg, fields.name) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isWrapper(item.type)) {
            throw new Error("not a Wrapper type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Wrapper.reified(typeArg).new({ name: (0, reified_1.decodeFromFieldsWithTypes)(typeArg, item.fields.name) });
    }
    static fromBcs(typeArg, data) {
        const typeArgs = [typeArg];
        return Wrapper.fromFields(typeArg, Wrapper.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    }
    toJSONField() {
        return {
            name: (0, reified_1.fieldToJSON)(this.$typeArgs[0], this.name),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Wrapper.reified(typeArg).new({ name: (0, reified_1.decodeFromJSONField)(typeArg, field.name) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Wrapper.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Wrapper.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Wrapper.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWrapper(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Wrapper object`);
    } return Wrapper.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Wrapper object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWrapper(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Wrapper object`);
        }
        return Wrapper.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Wrapper = Wrapper;
Wrapper.$typeName = "0x2::dynamic_object_field::Wrapper";
Wrapper.$numTypeParams = 1;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
exports.isElement = isElement;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== Element =============================== */
function isElement(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V21}::group_ops::Element` + '<'); }
class Element {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Element.$typeName;
        this.$isPhantom = Element.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Element.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified(T) { return { typeName: Element.$typeName, fullTypeName: (0, util_1.composeSuiType)(Element.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: Element.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => Element.fromFields(T, fields), fromFieldsWithTypes: (item) => Element.fromFieldsWithTypes(T, item), fromBcs: (data) => Element.fromBcs(T, data), bcs: Element.bcs, fromJSONField: (field) => Element.fromJSONField(T, field), fromJSON: (json) => Element.fromJSON(T, json), fromSuiParsedData: (content) => Element.fromSuiParsedData(T, content), fetch: async (client, id) => Element.fetch(client, T, id), new: (fields) => { return new Element([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Element.reified; }
    static phantom(T) { return (0, reified_1.phantom)(Element.reified(T)); }
    static get p() { return Element.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Element", {
            bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(typeArg, fields) { return Element.reified(typeArg).new({ bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bytes) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isElement(item.type)) {
            throw new Error("not a Element type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Element.reified(typeArg).new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bytes) });
    }
    static fromBcs(typeArg, data) { return Element.fromFields(typeArg, Element.bcs.parse(data)); }
    toJSONField() {
        return {
            bytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.bytes),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Element.reified(typeArg).new({ bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bytes) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Element.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Element.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Element.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isElement(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Element object`);
    } return Element.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Element object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isElement(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Element object`);
        }
        const gotTypeArgs = (0, util_1.parseTypeName)(res.data.bcs.type).typeArgs;
        if (gotTypeArgs.length !== 1) {
            throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
        }
        ;
        const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
        const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
        if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
            throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
        }
        ;
        return Element.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Element = Element;
Element.$typeName = `${index_1.PKG_V21}::group_ops::Element`;
Element.$numTypeParams = 1;
Element.$isPhantom = [true,];

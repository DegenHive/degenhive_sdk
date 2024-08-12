"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VecSet = void 0;
exports.isVecSet = isVecSet;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== VecSet =============================== */
function isVecSet(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V21}::vec_set::VecSet` + '<'); }
class VecSet {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VecSet.$typeName;
        this.$isPhantom = VecSet.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VecSet.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.contents = fields.contents;
    }
    static reified(K) { return { typeName: VecSet.$typeName, fullTypeName: (0, util_1.composeSuiType)(VecSet.$typeName, ...[(0, reified_1.extractType)(K)]), typeArgs: [(0, reified_1.extractType)(K)], isPhantom: VecSet.$isPhantom, reifiedTypeArgs: [K], fromFields: (fields) => VecSet.fromFields(K, fields), fromFieldsWithTypes: (item) => VecSet.fromFieldsWithTypes(K, item), fromBcs: (data) => VecSet.fromBcs(K, data), bcs: VecSet.bcs((0, reified_1.toBcs)(K)), fromJSONField: (field) => VecSet.fromJSONField(K, field), fromJSON: (json) => VecSet.fromJSON(K, json), fromSuiParsedData: (content) => VecSet.fromSuiParsedData(K, content), fetch: async (client, id) => VecSet.fetch(client, K, id), new: (fields) => { return new VecSet([(0, reified_1.extractType)(K)], fields); }, kind: "StructClassReified", }; }
    static get r() { return VecSet.reified; }
    static phantom(K) { return (0, reified_1.phantom)(VecSet.reified(K)); }
    static get p() { return VecSet.phantom; }
    static get bcs() {
        return (K) => bcs_1.bcs.struct(`VecSet<${K.name}>`, {
            contents: bcs_1.bcs.vector(K)
        });
    }
    ;
    static fromFields(typeArg, fields) { return VecSet.reified(typeArg).new({ contents: (0, reified_1.decodeFromFields)(reified.vector(typeArg), fields.contents) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isVecSet(item.type)) {
            throw new Error("not a VecSet type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return VecSet.reified(typeArg).new({ contents: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(typeArg), item.fields.contents) });
    }
    static fromBcs(typeArg, data) {
        const typeArgs = [typeArg];
        return VecSet.fromFields(typeArg, VecSet.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    }
    toJSONField() {
        return {
            contents: (0, reified_1.fieldToJSON)(`vector<${this.$typeArgs[0]}>`, this.contents),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return VecSet.reified(typeArg).new({ contents: (0, reified_1.decodeFromJSONField)(reified.vector(typeArg), field.contents) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== VecSet.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(VecSet.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return VecSet.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVecSet(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VecSet object`);
    } return VecSet.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VecSet object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVecSet(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VecSet object`);
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
        return VecSet.fromBcs(typeArg, (0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.VecSet = VecSet;
VecSet.$typeName = `${index_1.PKG_V21}::vec_set::VecSet`;
VecSet.$numTypeParams = 1;
VecSet.$isPhantom = [false,];

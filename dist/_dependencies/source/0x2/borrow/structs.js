"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Referent = exports.Borrow = void 0;
exports.isBorrow = isBorrow;
exports.isReferent = isReferent;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const structs_2 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Borrow =============================== */
function isBorrow(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::borrow::Borrow"; }
class Borrow {
    constructor(typeArgs, fields) {
        this.$typeName = Borrow.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Borrow.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.ref = fields.ref;
        ;
        this.obj = fields.obj;
    }
    static reified() { return { typeName: Borrow.$typeName, fullTypeName: (0, util_1.composeSuiType)(Borrow.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Borrow.fromFields(fields), fromFieldsWithTypes: (item) => Borrow.fromFieldsWithTypes(item), fromBcs: (data) => Borrow.fromBcs(data), bcs: Borrow.bcs, fromJSONField: (field) => Borrow.fromJSONField(field), fromJSON: (json) => Borrow.fromJSON(json), fromSuiParsedData: (content) => Borrow.fromSuiParsedData(content), fetch: async (client, id) => Borrow.fetch(client, id), new: (fields) => { return new Borrow([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Borrow.reified(); }
    static phantom() { return (0, reified_1.phantom)(Borrow.reified()); }
    static get p() { return Borrow.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Borrow", {
            ref: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), obj: structs_2.ID.bcs
        });
    }
    ;
    static fromFields(fields) { return Borrow.reified().new({ ref: (0, reified_1.decodeFromFields)("address", fields.ref), obj: (0, reified_1.decodeFromFields)(structs_2.ID.reified(), fields.obj) }); }
    static fromFieldsWithTypes(item) {
        if (!isBorrow(item.type)) {
            throw new Error("not a Borrow type");
        }
        return Borrow.reified().new({ ref: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.ref), obj: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.ID.reified(), item.fields.obj) });
    }
    static fromBcs(data) { return Borrow.fromFields(Borrow.bcs.parse(data)); }
    toJSONField() {
        return {
            ref: this.ref, obj: this.obj,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Borrow.reified().new({ ref: (0, reified_1.decodeFromJSONField)("address", field.ref), obj: (0, reified_1.decodeFromJSONField)(structs_2.ID.reified(), field.obj) }); }
    static fromJSON(json) {
        if (json.$typeName !== Borrow.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Borrow.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBorrow(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Borrow object`);
    } return Borrow.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Borrow object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBorrow(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Borrow object`);
        }
        return Borrow.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Borrow = Borrow;
Borrow.$typeName = "0x2::borrow::Borrow";
Borrow.$numTypeParams = 0;
/* ============================== Referent =============================== */
function isReferent(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::borrow::Referent<"); }
class Referent {
    constructor(typeArgs, fields) {
        this.$typeName = Referent.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Referent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.value = fields.value;
    }
    static reified(T) { return { typeName: Referent.$typeName, fullTypeName: (0, util_1.composeSuiType)(Referent.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => Referent.fromFields(T, fields), fromFieldsWithTypes: (item) => Referent.fromFieldsWithTypes(T, item), fromBcs: (data) => Referent.fromBcs(T, data), bcs: Referent.bcs((0, reified_1.toBcs)(T)), fromJSONField: (field) => Referent.fromJSONField(T, field), fromJSON: (json) => Referent.fromJSON(T, json), fromSuiParsedData: (content) => Referent.fromSuiParsedData(T, content), fetch: async (client, id) => Referent.fetch(client, T, id), new: (fields) => { return new Referent([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Referent.reified; }
    static phantom(T) { return (0, reified_1.phantom)(Referent.reified(T)); }
    static get p() { return Referent.phantom; }
    static get bcs() {
        return (T) => bcs_1.bcs.struct(`Referent<${T.name}>`, {
            id: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), value: structs_1.Option.bcs(T)
        });
    }
    ;
    static fromFields(typeArg, fields) { return Referent.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)("address", fields.id), value: (0, reified_1.decodeFromFields)(structs_1.Option.reified(typeArg), fields.value) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isReferent(item.type)) {
            throw new Error("not a Referent type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Referent.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.id), value: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(typeArg), item.fields.value) });
    }
    static fromBcs(typeArg, data) {
        const typeArgs = [typeArg];
        return Referent.fromFields(typeArg, Referent.bcs((0, reified_1.toBcs)(typeArgs[0])).parse(data));
    }
    toJSONField() {
        return {
            id: this.id, value: (0, reified_1.fieldToJSON)(`0x1::option::Option<${this.$typeArgs[0]}>`, this.value),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Referent.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)("address", field.id), value: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(typeArg), field.value) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Referent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Referent.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Referent.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isReferent(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Referent object`);
    } return Referent.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Referent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isReferent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Referent object`);
        }
        return Referent.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Referent = Referent;
Referent.$typeName = "0x2::borrow::Referent";
Referent.$numTypeParams = 1;

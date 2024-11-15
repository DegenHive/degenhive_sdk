"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Referent = exports.Borrow = void 0;
exports.isBorrow = isBorrow;
exports.isReferent = isReferent;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const index_1 = require("../index");
const structs_2 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Borrow =============================== */
function isBorrow(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::borrow::Borrow`; }
class Borrow {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Borrow.$typeName;
        this.$isPhantom = Borrow.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Borrow.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.ref = fields.ref;
        ;
        this.obj = fields.obj;
    }
    static reified() { return { typeName: Borrow.$typeName, fullTypeName: (0, util_1.composeSuiType)(Borrow.$typeName, ...[]), typeArgs: [], isPhantom: Borrow.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Borrow.fromFields(fields), fromFieldsWithTypes: (item) => Borrow.fromFieldsWithTypes(item), fromBcs: (data) => Borrow.fromBcs(data), bcs: Borrow.bcs, fromJSONField: (field) => Borrow.fromJSONField(field), fromJSON: (json) => Borrow.fromJSON(json), fromSuiParsedData: (content) => Borrow.fromSuiParsedData(content), fromSuiObjectData: (content) => Borrow.fromSuiObjectData(content), fetch: async (client, id) => Borrow.fetch(client, id), new: (fields) => { return new Borrow([], fields); }, kind: "StructClassReified", }; }
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
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBorrow(data.bcs.type)) {
                throw new Error(`object at is not a Borrow object`);
            }
            return Borrow.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Borrow.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Borrow object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBorrow(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Borrow object`);
        }
        return Borrow.fromSuiObjectData(res.data);
    }
}
exports.Borrow = Borrow;
Borrow.$typeName = `${index_1.PKG_V28}::borrow::Borrow`;
Borrow.$numTypeParams = 0;
Borrow.$isPhantom = [];
/* ============================== Referent =============================== */
function isReferent(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::borrow::Referent` + '<'); }
class Referent {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Referent.$typeName;
        this.$isPhantom = Referent.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Referent.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.value = fields.value;
    }
    static reified(T) { return { typeName: Referent.$typeName, fullTypeName: (0, util_1.composeSuiType)(Referent.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: Referent.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => Referent.fromFields(T, fields), fromFieldsWithTypes: (item) => Referent.fromFieldsWithTypes(T, item), fromBcs: (data) => Referent.fromBcs(T, data), bcs: Referent.bcs((0, reified_1.toBcs)(T)), fromJSONField: (field) => Referent.fromJSONField(T, field), fromJSON: (json) => Referent.fromJSON(T, json), fromSuiParsedData: (content) => Referent.fromSuiParsedData(T, content), fromSuiObjectData: (content) => Referent.fromSuiObjectData(T, content), fetch: async (client, id) => Referent.fetch(client, T, id), new: (fields) => { return new Referent([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
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
            id: this.id, value: (0, reified_1.fieldToJSON)(`${structs_1.Option.$typeName}<${this.$typeArgs[0]}>`, this.value),
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
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isReferent(data.bcs.type)) {
                throw new Error(`object at is not a Referent object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
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
            return Referent.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Referent.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Referent object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isReferent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Referent object`);
        }
        return Referent.fromSuiObjectData(typeArg, res.data);
    }
}
exports.Referent = Referent;
Referent.$typeName = `${index_1.PKG_V28}::borrow::Referent`;
Referent.$numTypeParams = 1;
Referent.$isPhantom = [false,];

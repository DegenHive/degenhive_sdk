"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scalar = exports.GT = exports.G2 = exports.G1 = void 0;
exports.isG1 = isG1;
exports.isG2 = isG2;
exports.isGT = isGT;
exports.isScalar = isScalar;
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== G1 =============================== */
function isG1(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::bls12381::G1`; }
class G1 {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = G1.$typeName;
        this.$isPhantom = G1.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(G1.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: G1.$typeName, fullTypeName: (0, util_1.composeSuiType)(G1.$typeName, ...[]), typeArgs: [], isPhantom: G1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => G1.fromFields(fields), fromFieldsWithTypes: (item) => G1.fromFieldsWithTypes(item), fromBcs: (data) => G1.fromBcs(data), bcs: G1.bcs, fromJSONField: (field) => G1.fromJSONField(field), fromJSON: (json) => G1.fromJSON(json), fromSuiParsedData: (content) => G1.fromSuiParsedData(content), fromSuiObjectData: (content) => G1.fromSuiObjectData(content), fetch: async (client, id) => G1.fetch(client, id), new: (fields) => { return new G1([], fields); }, kind: "StructClassReified", }; }
    static get r() { return G1.reified(); }
    static phantom() { return (0, reified_1.phantom)(G1.reified()); }
    static get p() { return G1.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("G1", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return G1.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isG1(item.type)) {
            throw new Error("not a G1 type");
        }
        return G1.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return G1.fromFields(G1.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return G1.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== G1.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return G1.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isG1(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a G1 object`);
    } return G1.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isG1(data.bcs.type)) {
                throw new Error(`object at is not a G1 object`);
            }
            return G1.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return G1.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching G1 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isG1(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a G1 object`);
        }
        return G1.fromSuiObjectData(res.data);
    }
}
exports.G1 = G1;
G1.$typeName = `${index_1.PKG_V28}::bls12381::G1`;
G1.$numTypeParams = 0;
G1.$isPhantom = [];
/* ============================== G2 =============================== */
function isG2(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::bls12381::G2`; }
class G2 {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = G2.$typeName;
        this.$isPhantom = G2.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(G2.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: G2.$typeName, fullTypeName: (0, util_1.composeSuiType)(G2.$typeName, ...[]), typeArgs: [], isPhantom: G2.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => G2.fromFields(fields), fromFieldsWithTypes: (item) => G2.fromFieldsWithTypes(item), fromBcs: (data) => G2.fromBcs(data), bcs: G2.bcs, fromJSONField: (field) => G2.fromJSONField(field), fromJSON: (json) => G2.fromJSON(json), fromSuiParsedData: (content) => G2.fromSuiParsedData(content), fromSuiObjectData: (content) => G2.fromSuiObjectData(content), fetch: async (client, id) => G2.fetch(client, id), new: (fields) => { return new G2([], fields); }, kind: "StructClassReified", }; }
    static get r() { return G2.reified(); }
    static phantom() { return (0, reified_1.phantom)(G2.reified()); }
    static get p() { return G2.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("G2", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return G2.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isG2(item.type)) {
            throw new Error("not a G2 type");
        }
        return G2.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return G2.fromFields(G2.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return G2.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== G2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return G2.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isG2(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a G2 object`);
    } return G2.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isG2(data.bcs.type)) {
                throw new Error(`object at is not a G2 object`);
            }
            return G2.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return G2.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching G2 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isG2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a G2 object`);
        }
        return G2.fromSuiObjectData(res.data);
    }
}
exports.G2 = G2;
G2.$typeName = `${index_1.PKG_V28}::bls12381::G2`;
G2.$numTypeParams = 0;
G2.$isPhantom = [];
/* ============================== GT =============================== */
function isGT(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::bls12381::GT`; }
class GT {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = GT.$typeName;
        this.$isPhantom = GT.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(GT.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: GT.$typeName, fullTypeName: (0, util_1.composeSuiType)(GT.$typeName, ...[]), typeArgs: [], isPhantom: GT.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => GT.fromFields(fields), fromFieldsWithTypes: (item) => GT.fromFieldsWithTypes(item), fromBcs: (data) => GT.fromBcs(data), bcs: GT.bcs, fromJSONField: (field) => GT.fromJSONField(field), fromJSON: (json) => GT.fromJSON(json), fromSuiParsedData: (content) => GT.fromSuiParsedData(content), fromSuiObjectData: (content) => GT.fromSuiObjectData(content), fetch: async (client, id) => GT.fetch(client, id), new: (fields) => { return new GT([], fields); }, kind: "StructClassReified", }; }
    static get r() { return GT.reified(); }
    static phantom() { return (0, reified_1.phantom)(GT.reified()); }
    static get p() { return GT.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("GT", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return GT.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isGT(item.type)) {
            throw new Error("not a GT type");
        }
        return GT.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return GT.fromFields(GT.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return GT.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== GT.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return GT.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isGT(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a GT object`);
    } return GT.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isGT(data.bcs.type)) {
                throw new Error(`object at is not a GT object`);
            }
            return GT.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return GT.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching GT object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isGT(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a GT object`);
        }
        return GT.fromSuiObjectData(res.data);
    }
}
exports.GT = GT;
GT.$typeName = `${index_1.PKG_V28}::bls12381::GT`;
GT.$numTypeParams = 0;
GT.$isPhantom = [];
/* ============================== Scalar =============================== */
function isScalar(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V28}::bls12381::Scalar`; }
class Scalar {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Scalar.$typeName;
        this.$isPhantom = Scalar.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Scalar.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: Scalar.$typeName, fullTypeName: (0, util_1.composeSuiType)(Scalar.$typeName, ...[]), typeArgs: [], isPhantom: Scalar.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Scalar.fromFields(fields), fromFieldsWithTypes: (item) => Scalar.fromFieldsWithTypes(item), fromBcs: (data) => Scalar.fromBcs(data), bcs: Scalar.bcs, fromJSONField: (field) => Scalar.fromJSONField(field), fromJSON: (json) => Scalar.fromJSON(json), fromSuiParsedData: (content) => Scalar.fromSuiParsedData(content), fromSuiObjectData: (content) => Scalar.fromSuiObjectData(content), fetch: async (client, id) => Scalar.fetch(client, id), new: (fields) => { return new Scalar([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Scalar.reified(); }
    static phantom() { return (0, reified_1.phantom)(Scalar.reified()); }
    static get p() { return Scalar.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Scalar", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Scalar.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isScalar(item.type)) {
            throw new Error("not a Scalar type");
        }
        return Scalar.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return Scalar.fromFields(Scalar.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Scalar.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== Scalar.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Scalar.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isScalar(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Scalar object`);
    } return Scalar.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isScalar(data.bcs.type)) {
                throw new Error(`object at is not a Scalar object`);
            }
            return Scalar.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Scalar.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Scalar object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isScalar(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Scalar object`);
        }
        return Scalar.fromSuiObjectData(res.data);
    }
}
exports.Scalar = Scalar;
Scalar.$typeName = `${index_1.PKG_V28}::bls12381::Scalar`;
Scalar.$numTypeParams = 0;
Scalar.$isPhantom = [];

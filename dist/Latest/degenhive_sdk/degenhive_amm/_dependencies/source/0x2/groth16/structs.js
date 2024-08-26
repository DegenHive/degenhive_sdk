"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicProofInputs = exports.ProofPoints = exports.PreparedVerifyingKey = exports.Curve = void 0;
exports.isCurve = isCurve;
exports.isPreparedVerifyingKey = isPreparedVerifyingKey;
exports.isProofPoints = isProofPoints;
exports.isPublicProofInputs = isPublicProofInputs;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== Curve =============================== */
function isCurve(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V21}::groth16::Curve`; }
class Curve {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Curve.$typeName;
        this.$isPhantom = Curve.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Curve.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified() { return { typeName: Curve.$typeName, fullTypeName: (0, util_1.composeSuiType)(Curve.$typeName, ...[]), typeArgs: [], isPhantom: Curve.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Curve.fromFields(fields), fromFieldsWithTypes: (item) => Curve.fromFieldsWithTypes(item), fromBcs: (data) => Curve.fromBcs(data), bcs: Curve.bcs, fromJSONField: (field) => Curve.fromJSONField(field), fromJSON: (json) => Curve.fromJSON(json), fromSuiParsedData: (content) => Curve.fromSuiParsedData(content), fetch: async (client, id) => Curve.fetch(client, id), new: (fields) => { return new Curve([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Curve.reified(); }
    static phantom() { return (0, reified_1.phantom)(Curve.reified()); }
    static get p() { return Curve.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Curve", {
            id: bcs_1.bcs.u8()
        });
    }
    ;
    static fromFields(fields) { return Curve.reified().new({ id: (0, reified_1.decodeFromFields)("u8", fields.id) }); }
    static fromFieldsWithTypes(item) {
        if (!isCurve(item.type)) {
            throw new Error("not a Curve type");
        }
        return Curve.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.id) });
    }
    static fromBcs(data) { return Curve.fromFields(Curve.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Curve.reified().new({ id: (0, reified_1.decodeFromJSONField)("u8", field.id) }); }
    static fromJSON(json) {
        if (json.$typeName !== Curve.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Curve.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurve(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Curve object`);
    } return Curve.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Curve object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurve(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Curve object`);
        }
        return Curve.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Curve = Curve;
Curve.$typeName = `${index_1.PKG_V21}::groth16::Curve`;
Curve.$numTypeParams = 0;
Curve.$isPhantom = [];
/* ============================== PreparedVerifyingKey =============================== */
function isPreparedVerifyingKey(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V21}::groth16::PreparedVerifyingKey`; }
class PreparedVerifyingKey {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PreparedVerifyingKey.$typeName;
        this.$isPhantom = PreparedVerifyingKey.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PreparedVerifyingKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.vkGammaAbcG1Bytes = fields.vkGammaAbcG1Bytes;
        ;
        this.alphaG1BetaG2Bytes = fields.alphaG1BetaG2Bytes;
        ;
        this.gammaG2NegPcBytes = fields.gammaG2NegPcBytes;
        ;
        this.deltaG2NegPcBytes = fields.deltaG2NegPcBytes;
    }
    static reified() { return { typeName: PreparedVerifyingKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(PreparedVerifyingKey.$typeName, ...[]), typeArgs: [], isPhantom: PreparedVerifyingKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PreparedVerifyingKey.fromFields(fields), fromFieldsWithTypes: (item) => PreparedVerifyingKey.fromFieldsWithTypes(item), fromBcs: (data) => PreparedVerifyingKey.fromBcs(data), bcs: PreparedVerifyingKey.bcs, fromJSONField: (field) => PreparedVerifyingKey.fromJSONField(field), fromJSON: (json) => PreparedVerifyingKey.fromJSON(json), fromSuiParsedData: (content) => PreparedVerifyingKey.fromSuiParsedData(content), fetch: async (client, id) => PreparedVerifyingKey.fetch(client, id), new: (fields) => { return new PreparedVerifyingKey([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PreparedVerifyingKey.reified(); }
    static phantom() { return (0, reified_1.phantom)(PreparedVerifyingKey.reified()); }
    static get p() { return PreparedVerifyingKey.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PreparedVerifyingKey", {
            vk_gamma_abc_g1_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), alpha_g1_beta_g2_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), gamma_g2_neg_pc_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8()), delta_g2_neg_pc_bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return PreparedVerifyingKey.reified().new({ vkGammaAbcG1Bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.vk_gamma_abc_g1_bytes), alphaG1BetaG2Bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.alpha_g1_beta_g2_bytes), gammaG2NegPcBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.gamma_g2_neg_pc_bytes), deltaG2NegPcBytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.delta_g2_neg_pc_bytes) }); }
    static fromFieldsWithTypes(item) {
        if (!isPreparedVerifyingKey(item.type)) {
            throw new Error("not a PreparedVerifyingKey type");
        }
        return PreparedVerifyingKey.reified().new({ vkGammaAbcG1Bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.vk_gamma_abc_g1_bytes), alphaG1BetaG2Bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.alpha_g1_beta_g2_bytes), gammaG2NegPcBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.gamma_g2_neg_pc_bytes), deltaG2NegPcBytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.delta_g2_neg_pc_bytes) });
    }
    static fromBcs(data) { return PreparedVerifyingKey.fromFields(PreparedVerifyingKey.bcs.parse(data)); }
    toJSONField() {
        return {
            vkGammaAbcG1Bytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.vkGammaAbcG1Bytes), alphaG1BetaG2Bytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.alphaG1BetaG2Bytes), gammaG2NegPcBytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.gammaG2NegPcBytes), deltaG2NegPcBytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.deltaG2NegPcBytes),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PreparedVerifyingKey.reified().new({ vkGammaAbcG1Bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.vkGammaAbcG1Bytes), alphaG1BetaG2Bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.alphaG1BetaG2Bytes), gammaG2NegPcBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.gammaG2NegPcBytes), deltaG2NegPcBytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.deltaG2NegPcBytes) }); }
    static fromJSON(json) {
        if (json.$typeName !== PreparedVerifyingKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PreparedVerifyingKey.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPreparedVerifyingKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PreparedVerifyingKey object`);
    } return PreparedVerifyingKey.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PreparedVerifyingKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPreparedVerifyingKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PreparedVerifyingKey object`);
        }
        return PreparedVerifyingKey.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PreparedVerifyingKey = PreparedVerifyingKey;
PreparedVerifyingKey.$typeName = `${index_1.PKG_V21}::groth16::PreparedVerifyingKey`;
PreparedVerifyingKey.$numTypeParams = 0;
PreparedVerifyingKey.$isPhantom = [];
/* ============================== ProofPoints =============================== */
function isProofPoints(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V21}::groth16::ProofPoints`; }
class ProofPoints {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ProofPoints.$typeName;
        this.$isPhantom = ProofPoints.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ProofPoints.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified() { return { typeName: ProofPoints.$typeName, fullTypeName: (0, util_1.composeSuiType)(ProofPoints.$typeName, ...[]), typeArgs: [], isPhantom: ProofPoints.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ProofPoints.fromFields(fields), fromFieldsWithTypes: (item) => ProofPoints.fromFieldsWithTypes(item), fromBcs: (data) => ProofPoints.fromBcs(data), bcs: ProofPoints.bcs, fromJSONField: (field) => ProofPoints.fromJSONField(field), fromJSON: (json) => ProofPoints.fromJSON(json), fromSuiParsedData: (content) => ProofPoints.fromSuiParsedData(content), fetch: async (client, id) => ProofPoints.fetch(client, id), new: (fields) => { return new ProofPoints([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ProofPoints.reified(); }
    static phantom() { return (0, reified_1.phantom)(ProofPoints.reified()); }
    static get p() { return ProofPoints.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ProofPoints", {
            bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return ProofPoints.reified().new({ bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bytes) }); }
    static fromFieldsWithTypes(item) {
        if (!isProofPoints(item.type)) {
            throw new Error("not a ProofPoints type");
        }
        return ProofPoints.reified().new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bytes) });
    }
    static fromBcs(data) { return ProofPoints.fromFields(ProofPoints.bcs.parse(data)); }
    toJSONField() {
        return {
            bytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.bytes),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ProofPoints.reified().new({ bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bytes) }); }
    static fromJSON(json) {
        if (json.$typeName !== ProofPoints.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ProofPoints.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isProofPoints(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ProofPoints object`);
    } return ProofPoints.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ProofPoints object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isProofPoints(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ProofPoints object`);
        }
        return ProofPoints.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ProofPoints = ProofPoints;
ProofPoints.$typeName = `${index_1.PKG_V21}::groth16::ProofPoints`;
ProofPoints.$numTypeParams = 0;
ProofPoints.$isPhantom = [];
/* ============================== PublicProofInputs =============================== */
function isPublicProofInputs(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V21}::groth16::PublicProofInputs`; }
class PublicProofInputs {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = PublicProofInputs.$typeName;
        this.$isPhantom = PublicProofInputs.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(PublicProofInputs.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bytes = fields.bytes;
    }
    static reified() { return { typeName: PublicProofInputs.$typeName, fullTypeName: (0, util_1.composeSuiType)(PublicProofInputs.$typeName, ...[]), typeArgs: [], isPhantom: PublicProofInputs.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => PublicProofInputs.fromFields(fields), fromFieldsWithTypes: (item) => PublicProofInputs.fromFieldsWithTypes(item), fromBcs: (data) => PublicProofInputs.fromBcs(data), bcs: PublicProofInputs.bcs, fromJSONField: (field) => PublicProofInputs.fromJSONField(field), fromJSON: (json) => PublicProofInputs.fromJSON(json), fromSuiParsedData: (content) => PublicProofInputs.fromSuiParsedData(content), fetch: async (client, id) => PublicProofInputs.fetch(client, id), new: (fields) => { return new PublicProofInputs([], fields); }, kind: "StructClassReified", }; }
    static get r() { return PublicProofInputs.reified(); }
    static phantom() { return (0, reified_1.phantom)(PublicProofInputs.reified()); }
    static get p() { return PublicProofInputs.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("PublicProofInputs", {
            bytes: bcs_1.bcs.vector(bcs_1.bcs.u8())
        });
    }
    ;
    static fromFields(fields) { return PublicProofInputs.reified().new({ bytes: (0, reified_1.decodeFromFields)(reified.vector("u8"), fields.bytes) }); }
    static fromFieldsWithTypes(item) {
        if (!isPublicProofInputs(item.type)) {
            throw new Error("not a PublicProofInputs type");
        }
        return PublicProofInputs.reified().new({ bytes: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u8"), item.fields.bytes) });
    }
    static fromBcs(data) { return PublicProofInputs.fromFields(PublicProofInputs.bcs.parse(data)); }
    toJSONField() {
        return {
            bytes: (0, reified_1.fieldToJSON)(`vector<u8>`, this.bytes),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return PublicProofInputs.reified().new({ bytes: (0, reified_1.decodeFromJSONField)(reified.vector("u8"), field.bytes) }); }
    static fromJSON(json) {
        if (json.$typeName !== PublicProofInputs.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return PublicProofInputs.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isPublicProofInputs(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a PublicProofInputs object`);
    } return PublicProofInputs.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching PublicProofInputs object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isPublicProofInputs(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a PublicProofInputs object`);
        }
        return PublicProofInputs.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.PublicProofInputs = PublicProofInputs;
PublicProofInputs.$typeName = `${index_1.PKG_V21}::groth16::PublicProofInputs`;
PublicProofInputs.$numTypeParams = 0;
PublicProofInputs.$isPhantom = [];

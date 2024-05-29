"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedConfig = exports.isWeightedConfig = void 0;
const reified = require("../../_framework/reified");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== WeightedConfig =============================== */
function isWeightedConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x8dedf746c2648f520827d9a31604b86269afd0a4273b37b296742202ccfc306f::weighted_math::WeightedConfig"; }
exports.isWeightedConfig = isWeightedConfig;
class WeightedConfig {
    constructor(typeArgs, fields) {
        this.$typeName = WeightedConfig.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(WeightedConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.weights = fields.weights;
        ;
        this.scalingFactor = fields.scalingFactor;
        ;
        this.totalWeight = fields.totalWeight;
        ;
        this.exitFeePercent = fields.exitFeePercent;
    }
    static reified() { return { typeName: WeightedConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(WeightedConfig.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => WeightedConfig.fromFields(fields), fromFieldsWithTypes: (item) => WeightedConfig.fromFieldsWithTypes(item), fromBcs: (data) => WeightedConfig.fromBcs(data), bcs: WeightedConfig.bcs, fromJSONField: (field) => WeightedConfig.fromJSONField(field), fromJSON: (json) => WeightedConfig.fromJSON(json), fromSuiParsedData: (content) => WeightedConfig.fromSuiParsedData(content), fetch: async (client, id) => WeightedConfig.fetch(client, id), new: (fields) => { return new WeightedConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return WeightedConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(WeightedConfig.reified()); }
    static get p() { return WeightedConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("WeightedConfig", {
            weights: bcs_1.bcs.vector(bcs_1.bcs.u64()), scaling_factor: bcs_1.bcs.vector(bcs_1.bcs.u256()), total_weight: bcs_1.bcs.u64(), exit_fee_percent: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return WeightedConfig.reified().new({ weights: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.weights), scalingFactor: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.scaling_factor), totalWeight: (0, reified_1.decodeFromFields)("u64", fields.total_weight), exitFeePercent: (0, reified_1.decodeFromFields)("u64", fields.exit_fee_percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isWeightedConfig(item.type)) {
            throw new Error("not a WeightedConfig type");
        }
        return WeightedConfig.reified().new({ weights: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.weights), scalingFactor: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.scaling_factor), totalWeight: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_weight), exitFeePercent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.exit_fee_percent) });
    }
    static fromBcs(data) { return WeightedConfig.fromFields(WeightedConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            weights: (0, reified_1.fieldToJSON)(`vector<u64>`, this.weights), scalingFactor: (0, reified_1.fieldToJSON)(`vector<u256>`, this.scalingFactor), totalWeight: this.totalWeight.toString(), exitFeePercent: this.exitFeePercent.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return WeightedConfig.reified().new({ weights: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.weights), scalingFactor: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.scalingFactor), totalWeight: (0, reified_1.decodeFromJSONField)("u64", field.totalWeight), exitFeePercent: (0, reified_1.decodeFromJSONField)("u64", field.exitFeePercent) }); }
    static fromJSON(json) {
        if (json.$typeName !== WeightedConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return WeightedConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isWeightedConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a WeightedConfig object`);
    } return WeightedConfig.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching WeightedConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isWeightedConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WeightedConfig object`);
        }
        return WeightedConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.WeightedConfig = WeightedConfig;
WeightedConfig.$typeName = "0x8dedf746c2648f520827d9a31604b86269afd0a4273b37b296742202ccfc306f::weighted_math::WeightedConfig";
WeightedConfig.$numTypeParams = 0;

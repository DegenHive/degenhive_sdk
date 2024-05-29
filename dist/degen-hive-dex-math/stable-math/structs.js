"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StablePoolConfig = exports.isStablePoolConfig = void 0;
const reified = require("../../_framework/reified");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== StablePoolConfig =============================== */
function isStablePoolConfig(type) { type = (0, util_1.compressSuiType)(type); return type === "0x8dedf746c2648f520827d9a31604b86269afd0a4273b37b296742202ccfc306f::stable_math::StablePoolConfig"; }
exports.isStablePoolConfig = isStablePoolConfig;
class StablePoolConfig {
    constructor(typeArgs, fields) {
        this.$typeName = StablePoolConfig.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(StablePoolConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.initAmpTime = fields.initAmpTime;
        ;
        this.initAmp = fields.initAmp;
        ;
        this.nextAmpTime = fields.nextAmpTime;
        ;
        this.nextAmp = fields.nextAmp;
        ;
        this.scalingFactor = fields.scalingFactor;
    }
    static reified() { return { typeName: StablePoolConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(StablePoolConfig.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => StablePoolConfig.fromFields(fields), fromFieldsWithTypes: (item) => StablePoolConfig.fromFieldsWithTypes(item), fromBcs: (data) => StablePoolConfig.fromBcs(data), bcs: StablePoolConfig.bcs, fromJSONField: (field) => StablePoolConfig.fromJSONField(field), fromJSON: (json) => StablePoolConfig.fromJSON(json), fromSuiParsedData: (content) => StablePoolConfig.fromSuiParsedData(content), fetch: async (client, id) => StablePoolConfig.fetch(client, id), new: (fields) => { return new StablePoolConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StablePoolConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(StablePoolConfig.reified()); }
    static get p() { return StablePoolConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StablePoolConfig", {
            init_amp_time: bcs_1.bcs.u64(), init_amp: bcs_1.bcs.u64(), next_amp_time: bcs_1.bcs.u64(), next_amp: bcs_1.bcs.u64(), scaling_factor: bcs_1.bcs.vector(bcs_1.bcs.u256())
        });
    }
    ;
    static fromFields(fields) { return StablePoolConfig.reified().new({ initAmpTime: (0, reified_1.decodeFromFields)("u64", fields.init_amp_time), initAmp: (0, reified_1.decodeFromFields)("u64", fields.init_amp), nextAmpTime: (0, reified_1.decodeFromFields)("u64", fields.next_amp_time), nextAmp: (0, reified_1.decodeFromFields)("u64", fields.next_amp), scalingFactor: (0, reified_1.decodeFromFields)(reified.vector("u256"), fields.scaling_factor) }); }
    static fromFieldsWithTypes(item) {
        if (!isStablePoolConfig(item.type)) {
            throw new Error("not a StablePoolConfig type");
        }
        return StablePoolConfig.reified().new({ initAmpTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_amp_time), initAmp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_amp), nextAmpTime: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_amp_time), nextAmp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.next_amp), scalingFactor: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u256"), item.fields.scaling_factor) });
    }
    static fromBcs(data) { return StablePoolConfig.fromFields(StablePoolConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            initAmpTime: this.initAmpTime.toString(), initAmp: this.initAmp.toString(), nextAmpTime: this.nextAmpTime.toString(), nextAmp: this.nextAmp.toString(), scalingFactor: (0, reified_1.fieldToJSON)(`vector<u256>`, this.scalingFactor),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StablePoolConfig.reified().new({ initAmpTime: (0, reified_1.decodeFromJSONField)("u64", field.initAmpTime), initAmp: (0, reified_1.decodeFromJSONField)("u64", field.initAmp), nextAmpTime: (0, reified_1.decodeFromJSONField)("u64", field.nextAmpTime), nextAmp: (0, reified_1.decodeFromJSONField)("u64", field.nextAmp), scalingFactor: (0, reified_1.decodeFromJSONField)(reified.vector("u256"), field.scalingFactor) }); }
    static fromJSON(json) {
        if (json.$typeName !== StablePoolConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StablePoolConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStablePoolConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StablePoolConfig object`);
    } return StablePoolConfig.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StablePoolConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStablePoolConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StablePoolConfig object`);
        }
        return StablePoolConfig.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.StablePoolConfig = StablePoolConfig;
StablePoolConfig.$typeName = "0x8dedf746c2648f520827d9a31604b86269afd0a4273b37b296742202ccfc306f::stable_math::StablePoolConfig";
StablePoolConfig.$numTypeParams = 0;

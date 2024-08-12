"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotingPowerInfoV2 = exports.VotingPowerInfo = void 0;
exports.isVotingPowerInfo = isVotingPowerInfo;
exports.isVotingPowerInfoV2 = isVotingPowerInfoV2;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== VotingPowerInfo =============================== */
function isVotingPowerInfo(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::voting_power::VotingPowerInfo`; }
class VotingPowerInfo {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VotingPowerInfo.$typeName;
        this.$isPhantom = VotingPowerInfo.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VotingPowerInfo.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.validatorIndex = fields.validatorIndex;
        ;
        this.votingPower = fields.votingPower;
    }
    static reified() { return { typeName: VotingPowerInfo.$typeName, fullTypeName: (0, util_1.composeSuiType)(VotingPowerInfo.$typeName, ...[]), typeArgs: [], isPhantom: VotingPowerInfo.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => VotingPowerInfo.fromFields(fields), fromFieldsWithTypes: (item) => VotingPowerInfo.fromFieldsWithTypes(item), fromBcs: (data) => VotingPowerInfo.fromBcs(data), bcs: VotingPowerInfo.bcs, fromJSONField: (field) => VotingPowerInfo.fromJSONField(field), fromJSON: (json) => VotingPowerInfo.fromJSON(json), fromSuiParsedData: (content) => VotingPowerInfo.fromSuiParsedData(content), fetch: async (client, id) => VotingPowerInfo.fetch(client, id), new: (fields) => { return new VotingPowerInfo([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VotingPowerInfo.reified(); }
    static phantom() { return (0, reified_1.phantom)(VotingPowerInfo.reified()); }
    static get p() { return VotingPowerInfo.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VotingPowerInfo", {
            validator_index: bcs_1.bcs.u64(), voting_power: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return VotingPowerInfo.reified().new({ validatorIndex: (0, reified_1.decodeFromFields)("u64", fields.validator_index), votingPower: (0, reified_1.decodeFromFields)("u64", fields.voting_power) }); }
    static fromFieldsWithTypes(item) {
        if (!isVotingPowerInfo(item.type)) {
            throw new Error("not a VotingPowerInfo type");
        }
        return VotingPowerInfo.reified().new({ validatorIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_index), votingPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_power) });
    }
    static fromBcs(data) { return VotingPowerInfo.fromFields(VotingPowerInfo.bcs.parse(data)); }
    toJSONField() {
        return {
            validatorIndex: this.validatorIndex.toString(), votingPower: this.votingPower.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VotingPowerInfo.reified().new({ validatorIndex: (0, reified_1.decodeFromJSONField)("u64", field.validatorIndex), votingPower: (0, reified_1.decodeFromJSONField)("u64", field.votingPower) }); }
    static fromJSON(json) {
        if (json.$typeName !== VotingPowerInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VotingPowerInfo.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVotingPowerInfo(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VotingPowerInfo object`);
    } return VotingPowerInfo.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VotingPowerInfo object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVotingPowerInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VotingPowerInfo object`);
        }
        return VotingPowerInfo.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.VotingPowerInfo = VotingPowerInfo;
VotingPowerInfo.$typeName = `${index_1.PKG_V10}::voting_power::VotingPowerInfo`;
VotingPowerInfo.$numTypeParams = 0;
VotingPowerInfo.$isPhantom = [];
/* ============================== VotingPowerInfoV2 =============================== */
function isVotingPowerInfoV2(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::voting_power::VotingPowerInfoV2`; }
class VotingPowerInfoV2 {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = VotingPowerInfoV2.$typeName;
        this.$isPhantom = VotingPowerInfoV2.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(VotingPowerInfoV2.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.validatorIndex = fields.validatorIndex;
        ;
        this.votingPower = fields.votingPower;
        ;
        this.stake = fields.stake;
    }
    static reified() { return { typeName: VotingPowerInfoV2.$typeName, fullTypeName: (0, util_1.composeSuiType)(VotingPowerInfoV2.$typeName, ...[]), typeArgs: [], isPhantom: VotingPowerInfoV2.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => VotingPowerInfoV2.fromFields(fields), fromFieldsWithTypes: (item) => VotingPowerInfoV2.fromFieldsWithTypes(item), fromBcs: (data) => VotingPowerInfoV2.fromBcs(data), bcs: VotingPowerInfoV2.bcs, fromJSONField: (field) => VotingPowerInfoV2.fromJSONField(field), fromJSON: (json) => VotingPowerInfoV2.fromJSON(json), fromSuiParsedData: (content) => VotingPowerInfoV2.fromSuiParsedData(content), fetch: async (client, id) => VotingPowerInfoV2.fetch(client, id), new: (fields) => { return new VotingPowerInfoV2([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VotingPowerInfoV2.reified(); }
    static phantom() { return (0, reified_1.phantom)(VotingPowerInfoV2.reified()); }
    static get p() { return VotingPowerInfoV2.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VotingPowerInfoV2", {
            validator_index: bcs_1.bcs.u64(), voting_power: bcs_1.bcs.u64(), stake: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return VotingPowerInfoV2.reified().new({ validatorIndex: (0, reified_1.decodeFromFields)("u64", fields.validator_index), votingPower: (0, reified_1.decodeFromFields)("u64", fields.voting_power), stake: (0, reified_1.decodeFromFields)("u64", fields.stake) }); }
    static fromFieldsWithTypes(item) {
        if (!isVotingPowerInfoV2(item.type)) {
            throw new Error("not a VotingPowerInfoV2 type");
        }
        return VotingPowerInfoV2.reified().new({ validatorIndex: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.validator_index), votingPower: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.voting_power), stake: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.stake) });
    }
    static fromBcs(data) { return VotingPowerInfoV2.fromFields(VotingPowerInfoV2.bcs.parse(data)); }
    toJSONField() {
        return {
            validatorIndex: this.validatorIndex.toString(), votingPower: this.votingPower.toString(), stake: this.stake.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VotingPowerInfoV2.reified().new({ validatorIndex: (0, reified_1.decodeFromJSONField)("u64", field.validatorIndex), votingPower: (0, reified_1.decodeFromJSONField)("u64", field.votingPower), stake: (0, reified_1.decodeFromJSONField)("u64", field.stake) }); }
    static fromJSON(json) {
        if (json.$typeName !== VotingPowerInfoV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VotingPowerInfoV2.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVotingPowerInfoV2(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VotingPowerInfoV2 object`);
    } return VotingPowerInfoV2.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VotingPowerInfoV2 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVotingPowerInfoV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VotingPowerInfoV2 object`);
        }
        return VotingPowerInfoV2.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.VotingPowerInfoV2 = VotingPowerInfoV2;
VotingPowerInfoV2.$typeName = `${index_1.PKG_V10}::voting_power::VotingPowerInfoV2`;
VotingPowerInfoV2.$numTypeParams = 0;
VotingPowerInfoV2.$isPhantom = [];

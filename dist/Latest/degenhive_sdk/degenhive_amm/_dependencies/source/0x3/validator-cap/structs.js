"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorOperationCap = exports.UnverifiedValidatorOperationCap = void 0;
exports.isUnverifiedValidatorOperationCap = isUnverifiedValidatorOperationCap;
exports.isValidatorOperationCap = isValidatorOperationCap;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x2/object/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/sui/bcs");
const utils_1 = require("@mysten/sui/utils");
/* ============================== UnverifiedValidatorOperationCap =============================== */
function isUnverifiedValidatorOperationCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::validator_cap::UnverifiedValidatorOperationCap`; }
class UnverifiedValidatorOperationCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = UnverifiedValidatorOperationCap.$typeName;
        this.$isPhantom = UnverifiedValidatorOperationCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(UnverifiedValidatorOperationCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.authorizerValidatorAddress = fields.authorizerValidatorAddress;
    }
    static reified() { return { typeName: UnverifiedValidatorOperationCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(UnverifiedValidatorOperationCap.$typeName, ...[]), typeArgs: [], isPhantom: UnverifiedValidatorOperationCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => UnverifiedValidatorOperationCap.fromFields(fields), fromFieldsWithTypes: (item) => UnverifiedValidatorOperationCap.fromFieldsWithTypes(item), fromBcs: (data) => UnverifiedValidatorOperationCap.fromBcs(data), bcs: UnverifiedValidatorOperationCap.bcs, fromJSONField: (field) => UnverifiedValidatorOperationCap.fromJSONField(field), fromJSON: (json) => UnverifiedValidatorOperationCap.fromJSON(json), fromSuiParsedData: (content) => UnverifiedValidatorOperationCap.fromSuiParsedData(content), fetch: async (client, id) => UnverifiedValidatorOperationCap.fetch(client, id), new: (fields) => { return new UnverifiedValidatorOperationCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return UnverifiedValidatorOperationCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(UnverifiedValidatorOperationCap.reified()); }
    static get p() { return UnverifiedValidatorOperationCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("UnverifiedValidatorOperationCap", {
            id: structs_1.UID.bcs, authorizer_validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return UnverifiedValidatorOperationCap.reified().new({ id: (0, reified_1.decodeFromFields)(structs_1.UID.reified(), fields.id), authorizerValidatorAddress: (0, reified_1.decodeFromFields)("address", fields.authorizer_validator_address) }); }
    static fromFieldsWithTypes(item) {
        if (!isUnverifiedValidatorOperationCap(item.type)) {
            throw new Error("not a UnverifiedValidatorOperationCap type");
        }
        return UnverifiedValidatorOperationCap.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.UID.reified(), item.fields.id), authorizerValidatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.authorizer_validator_address) });
    }
    static fromBcs(data) { return UnverifiedValidatorOperationCap.fromFields(UnverifiedValidatorOperationCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, authorizerValidatorAddress: this.authorizerValidatorAddress,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return UnverifiedValidatorOperationCap.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_1.UID.reified(), field.id), authorizerValidatorAddress: (0, reified_1.decodeFromJSONField)("address", field.authorizerValidatorAddress) }); }
    static fromJSON(json) {
        if (json.$typeName !== UnverifiedValidatorOperationCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return UnverifiedValidatorOperationCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isUnverifiedValidatorOperationCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a UnverifiedValidatorOperationCap object`);
    } return UnverifiedValidatorOperationCap.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching UnverifiedValidatorOperationCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isUnverifiedValidatorOperationCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnverifiedValidatorOperationCap object`);
        }
        return UnverifiedValidatorOperationCap.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.UnverifiedValidatorOperationCap = UnverifiedValidatorOperationCap;
UnverifiedValidatorOperationCap.$typeName = `${index_1.PKG_V10}::validator_cap::UnverifiedValidatorOperationCap`;
UnverifiedValidatorOperationCap.$numTypeParams = 0;
UnverifiedValidatorOperationCap.$isPhantom = [];
/* ============================== ValidatorOperationCap =============================== */
function isValidatorOperationCap(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V10}::validator_cap::ValidatorOperationCap`; }
class ValidatorOperationCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorOperationCap.$typeName;
        this.$isPhantom = ValidatorOperationCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorOperationCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.authorizerValidatorAddress = fields.authorizerValidatorAddress;
    }
    static reified() { return { typeName: ValidatorOperationCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorOperationCap.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorOperationCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorOperationCap.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorOperationCap.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorOperationCap.fromBcs(data), bcs: ValidatorOperationCap.bcs, fromJSONField: (field) => ValidatorOperationCap.fromJSONField(field), fromJSON: (json) => ValidatorOperationCap.fromJSON(json), fromSuiParsedData: (content) => ValidatorOperationCap.fromSuiParsedData(content), fetch: async (client, id) => ValidatorOperationCap.fetch(client, id), new: (fields) => { return new ValidatorOperationCap([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorOperationCap.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorOperationCap.reified()); }
    static get p() { return ValidatorOperationCap.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorOperationCap", {
            authorizer_validator_address: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, utils_1.fromHEX)(val), output: (val) => (0, utils_1.toHEX)(val), })
        });
    }
    ;
    static fromFields(fields) { return ValidatorOperationCap.reified().new({ authorizerValidatorAddress: (0, reified_1.decodeFromFields)("address", fields.authorizer_validator_address) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorOperationCap(item.type)) {
            throw new Error("not a ValidatorOperationCap type");
        }
        return ValidatorOperationCap.reified().new({ authorizerValidatorAddress: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.authorizer_validator_address) });
    }
    static fromBcs(data) { return ValidatorOperationCap.fromFields(ValidatorOperationCap.bcs.parse(data)); }
    toJSONField() {
        return {
            authorizerValidatorAddress: this.authorizerValidatorAddress,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorOperationCap.reified().new({ authorizerValidatorAddress: (0, reified_1.decodeFromJSONField)("address", field.authorizerValidatorAddress) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorOperationCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorOperationCap.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorOperationCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorOperationCap object`);
    } return ValidatorOperationCap.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorOperationCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorOperationCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorOperationCap object`);
        }
        return ValidatorOperationCap.fromBcs((0, utils_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ValidatorOperationCap = ValidatorOperationCap;
ValidatorOperationCap.$typeName = `${index_1.PKG_V10}::validator_cap::ValidatorOperationCap`;
ValidatorOperationCap.$numTypeParams = 0;
ValidatorOperationCap.$isPhantom = [];

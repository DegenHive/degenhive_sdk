"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorWrapper = void 0;
exports.isValidatorWrapper = isValidatorWrapper;
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const structs_1 = require("../../0x2/versioned/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== ValidatorWrapper =============================== */
function isValidatorWrapper(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::validator_wrapper::ValidatorWrapper`; }
class ValidatorWrapper {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ValidatorWrapper.$typeName;
        this.$isPhantom = ValidatorWrapper.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ValidatorWrapper.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.inner = fields.inner;
    }
    static reified() { return { typeName: ValidatorWrapper.$typeName, fullTypeName: (0, util_1.composeSuiType)(ValidatorWrapper.$typeName, ...[]), typeArgs: [], isPhantom: ValidatorWrapper.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ValidatorWrapper.fromFields(fields), fromFieldsWithTypes: (item) => ValidatorWrapper.fromFieldsWithTypes(item), fromBcs: (data) => ValidatorWrapper.fromBcs(data), bcs: ValidatorWrapper.bcs, fromJSONField: (field) => ValidatorWrapper.fromJSONField(field), fromJSON: (json) => ValidatorWrapper.fromJSON(json), fromSuiParsedData: (content) => ValidatorWrapper.fromSuiParsedData(content), fromSuiObjectData: (content) => ValidatorWrapper.fromSuiObjectData(content), fetch: async (client, id) => ValidatorWrapper.fetch(client, id), new: (fields) => { return new ValidatorWrapper([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ValidatorWrapper.reified(); }
    static phantom() { return (0, reified_1.phantom)(ValidatorWrapper.reified()); }
    static get p() { return ValidatorWrapper.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ValidatorWrapper", {
            inner: structs_1.Versioned.bcs
        });
    }
    ;
    static fromFields(fields) { return ValidatorWrapper.reified().new({ inner: (0, reified_1.decodeFromFields)(structs_1.Versioned.reified(), fields.inner) }); }
    static fromFieldsWithTypes(item) {
        if (!isValidatorWrapper(item.type)) {
            throw new Error("not a ValidatorWrapper type");
        }
        return ValidatorWrapper.reified().new({ inner: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Versioned.reified(), item.fields.inner) });
    }
    static fromBcs(data) { return ValidatorWrapper.fromFields(ValidatorWrapper.bcs.parse(data)); }
    toJSONField() {
        return {
            inner: this.inner.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ValidatorWrapper.reified().new({ inner: (0, reified_1.decodeFromJSONField)(structs_1.Versioned.reified(), field.inner) }); }
    static fromJSON(json) {
        if (json.$typeName !== ValidatorWrapper.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ValidatorWrapper.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isValidatorWrapper(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ValidatorWrapper object`);
    } return ValidatorWrapper.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isValidatorWrapper(data.bcs.type)) {
                throw new Error(`object at is not a ValidatorWrapper object`);
            }
            return ValidatorWrapper.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ValidatorWrapper.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ValidatorWrapper object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isValidatorWrapper(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ValidatorWrapper object`);
        }
        return ValidatorWrapper.fromSuiObjectData(res.data);
    }
}
exports.ValidatorWrapper = ValidatorWrapper;
ValidatorWrapper.$typeName = `${index_1.PKG_V17}::validator_wrapper::ValidatorWrapper`;
ValidatorWrapper.$numTypeParams = 0;
ValidatorWrapper.$isPhantom = [];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifiedID = exports.isVerifiedID = void 0;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/string/structs");
const structs_2 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== VerifiedID =============================== */
function isVerifiedID(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::zklogin_verified_id::VerifiedID"; }
exports.isVerifiedID = isVerifiedID;
class VerifiedID {
    constructor(typeArgs, fields) {
        this.$typeName = VerifiedID.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(VerifiedID.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.owner = fields.owner;
        ;
        this.keyClaimName = fields.keyClaimName;
        ;
        this.keyClaimValue = fields.keyClaimValue;
        ;
        this.issuer = fields.issuer;
        ;
        this.audience = fields.audience;
    }
    static reified() { return { typeName: VerifiedID.$typeName, fullTypeName: (0, util_1.composeSuiType)(VerifiedID.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => VerifiedID.fromFields(fields), fromFieldsWithTypes: (item) => VerifiedID.fromFieldsWithTypes(item), fromBcs: (data) => VerifiedID.fromBcs(data), bcs: VerifiedID.bcs, fromJSONField: (field) => VerifiedID.fromJSONField(field), fromJSON: (json) => VerifiedID.fromJSON(json), fromSuiParsedData: (content) => VerifiedID.fromSuiParsedData(content), fetch: async (client, id) => VerifiedID.fetch(client, id), new: (fields) => { return new VerifiedID([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VerifiedID.reified(); }
    static phantom() { return (0, reified_1.phantom)(VerifiedID.reified()); }
    static get p() { return VerifiedID.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VerifiedID", {
            id: structs_2.UID.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), key_claim_name: structs_1.String.bcs, key_claim_value: structs_1.String.bcs, issuer: structs_1.String.bcs, audience: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return VerifiedID.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), owner: (0, reified_1.decodeFromFields)("address", fields.owner), keyClaimName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key_claim_name), keyClaimValue: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.key_claim_value), issuer: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.issuer), audience: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.audience) }); }
    static fromFieldsWithTypes(item) {
        if (!isVerifiedID(item.type)) {
            throw new Error("not a VerifiedID type");
        }
        return VerifiedID.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), keyClaimName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key_claim_name), keyClaimValue: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.key_claim_value), issuer: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.issuer), audience: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.audience) });
    }
    static fromBcs(data) { return VerifiedID.fromFields(VerifiedID.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, owner: this.owner, keyClaimName: this.keyClaimName, keyClaimValue: this.keyClaimValue, issuer: this.issuer, audience: this.audience,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VerifiedID.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), keyClaimName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.keyClaimName), keyClaimValue: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.keyClaimValue), issuer: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.issuer), audience: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.audience) }); }
    static fromJSON(json) {
        if (json.$typeName !== VerifiedID.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VerifiedID.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVerifiedID(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VerifiedID object`);
    } return VerifiedID.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VerifiedID object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVerifiedID(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VerifiedID object`);
        }
        return VerifiedID.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.VerifiedID = VerifiedID;
VerifiedID.$typeName = "0x2::zklogin_verified_id::VerifiedID";
VerifiedID.$numTypeParams = 0;

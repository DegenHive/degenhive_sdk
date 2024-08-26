"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifiedIssuer = void 0;
exports.isVerifiedIssuer = isVerifiedIssuer;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/string/structs");
const structs_2 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== VerifiedIssuer =============================== */
function isVerifiedIssuer(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::zklogin_verified_issuer::VerifiedIssuer"; }
class VerifiedIssuer {
    constructor(typeArgs, fields) {
        this.$typeName = VerifiedIssuer.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(VerifiedIssuer.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.owner = fields.owner;
        ;
        this.issuer = fields.issuer;
    }
    static reified() { return { typeName: VerifiedIssuer.$typeName, fullTypeName: (0, util_1.composeSuiType)(VerifiedIssuer.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => VerifiedIssuer.fromFields(fields), fromFieldsWithTypes: (item) => VerifiedIssuer.fromFieldsWithTypes(item), fromBcs: (data) => VerifiedIssuer.fromBcs(data), bcs: VerifiedIssuer.bcs, fromJSONField: (field) => VerifiedIssuer.fromJSONField(field), fromJSON: (json) => VerifiedIssuer.fromJSON(json), fromSuiParsedData: (content) => VerifiedIssuer.fromSuiParsedData(content), fetch: async (client, id) => VerifiedIssuer.fetch(client, id), new: (fields) => { return new VerifiedIssuer([], fields); }, kind: "StructClassReified", }; }
    static get r() { return VerifiedIssuer.reified(); }
    static phantom() { return (0, reified_1.phantom)(VerifiedIssuer.reified()); }
    static get p() { return VerifiedIssuer.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("VerifiedIssuer", {
            id: structs_2.UID.bcs, owner: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), issuer: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return VerifiedIssuer.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), owner: (0, reified_1.decodeFromFields)("address", fields.owner), issuer: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.issuer) }); }
    static fromFieldsWithTypes(item) {
        if (!isVerifiedIssuer(item.type)) {
            throw new Error("not a VerifiedIssuer type");
        }
        return VerifiedIssuer.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), owner: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.owner), issuer: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.issuer) });
    }
    static fromBcs(data) { return VerifiedIssuer.fromFields(VerifiedIssuer.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, owner: this.owner, issuer: this.issuer,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return VerifiedIssuer.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), owner: (0, reified_1.decodeFromJSONField)("address", field.owner), issuer: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.issuer) }); }
    static fromJSON(json) {
        if (json.$typeName !== VerifiedIssuer.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return VerifiedIssuer.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isVerifiedIssuer(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a VerifiedIssuer object`);
    } return VerifiedIssuer.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching VerifiedIssuer object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isVerifiedIssuer(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a VerifiedIssuer object`);
        }
        return VerifiedIssuer.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.VerifiedIssuer = VerifiedIssuer;
VerifiedIssuer.$typeName = "0x2::zklogin_verified_issuer::VerifiedIssuer";
VerifiedIssuer.$numTypeParams = 0;

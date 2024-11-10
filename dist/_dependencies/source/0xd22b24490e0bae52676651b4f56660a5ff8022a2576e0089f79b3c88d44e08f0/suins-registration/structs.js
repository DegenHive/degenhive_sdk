"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuinsRegistration = void 0;
exports.isSuinsRegistration = isSuinsRegistration;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/string/structs");
const structs_2 = require("../../0x2/object/structs");
const structs_3 = require("../domain/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== SuinsRegistration =============================== */
function isSuinsRegistration(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V1}::suins_registration::SuinsRegistration`; }
class SuinsRegistration {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = SuinsRegistration.$typeName;
        this.$isPhantom = SuinsRegistration.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(SuinsRegistration.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.domain = fields.domain;
        ;
        this.domainName = fields.domainName;
        ;
        this.expirationTimestampMs = fields.expirationTimestampMs;
        ;
        this.imageUrl = fields.imageUrl;
    }
    static reified() { return { typeName: SuinsRegistration.$typeName, fullTypeName: (0, util_1.composeSuiType)(SuinsRegistration.$typeName, ...[]), typeArgs: [], isPhantom: SuinsRegistration.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => SuinsRegistration.fromFields(fields), fromFieldsWithTypes: (item) => SuinsRegistration.fromFieldsWithTypes(item), fromBcs: (data) => SuinsRegistration.fromBcs(data), bcs: SuinsRegistration.bcs, fromJSONField: (field) => SuinsRegistration.fromJSONField(field), fromJSON: (json) => SuinsRegistration.fromJSON(json), fromSuiParsedData: (content) => SuinsRegistration.fromSuiParsedData(content), fromSuiObjectData: (content) => SuinsRegistration.fromSuiObjectData(content), fetch: async (client, id) => SuinsRegistration.fetch(client, id), new: (fields) => { return new SuinsRegistration([], fields); }, kind: "StructClassReified", }; }
    static get r() { return SuinsRegistration.reified(); }
    static phantom() { return (0, reified_1.phantom)(SuinsRegistration.reified()); }
    static get p() { return SuinsRegistration.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("SuinsRegistration", {
            id: structs_2.UID.bcs, domain: structs_3.Domain.bcs, domain_name: structs_1.String.bcs, expiration_timestamp_ms: bcs_1.bcs.u64(), image_url: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return SuinsRegistration.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), domain: (0, reified_1.decodeFromFields)(structs_3.Domain.reified(), fields.domain), domainName: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.domain_name), expirationTimestampMs: (0, reified_1.decodeFromFields)("u64", fields.expiration_timestamp_ms), imageUrl: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.image_url) }); }
    static fromFieldsWithTypes(item) {
        if (!isSuinsRegistration(item.type)) {
            throw new Error("not a SuinsRegistration type");
        }
        return SuinsRegistration.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), domain: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.Domain.reified(), item.fields.domain), domainName: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.domain_name), expirationTimestampMs: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.expiration_timestamp_ms), imageUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.image_url) });
    }
    static fromBcs(data) { return SuinsRegistration.fromFields(SuinsRegistration.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, domain: this.domain.toJSONField(), domainName: this.domainName, expirationTimestampMs: this.expirationTimestampMs.toString(), imageUrl: this.imageUrl,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return SuinsRegistration.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), domain: (0, reified_1.decodeFromJSONField)(structs_3.Domain.reified(), field.domain), domainName: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.domainName), expirationTimestampMs: (0, reified_1.decodeFromJSONField)("u64", field.expirationTimestampMs), imageUrl: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.imageUrl) }); }
    static fromJSON(json) {
        if (json.$typeName !== SuinsRegistration.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return SuinsRegistration.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isSuinsRegistration(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a SuinsRegistration object`);
    } return SuinsRegistration.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isSuinsRegistration(data.bcs.type)) {
                throw new Error(`object at is not a SuinsRegistration object`);
            }
            return SuinsRegistration.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return SuinsRegistration.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching SuinsRegistration object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isSuinsRegistration(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SuinsRegistration object`);
        }
        return SuinsRegistration.fromSuiObjectData(res.data);
    }
}
exports.SuinsRegistration = SuinsRegistration;
SuinsRegistration.$typeName = `${index_1.PKG_V1}::suins_registration::SuinsRegistration`;
SuinsRegistration.$numTypeParams = 0;
SuinsRegistration.$isPhantom = [];

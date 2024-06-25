"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwkId = exports.JWK = exports.AuthenticatorStateInner = exports.AuthenticatorState = exports.ActiveJwk = void 0;
exports.isActiveJwk = isActiveJwk;
exports.isAuthenticatorState = isAuthenticatorState;
exports.isAuthenticatorStateInner = isAuthenticatorStateInner;
exports.isJWK = isJWK;
exports.isJwkId = isJwkId;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/string/structs");
const structs_2 = require("../object/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== ActiveJwk =============================== */
function isActiveJwk(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::ActiveJwk"; }
class ActiveJwk {
    constructor(typeArgs, fields) {
        this.$typeName = ActiveJwk.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ActiveJwk.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.jwkId = fields.jwkId;
        ;
        this.jwk = fields.jwk;
        ;
        this.epoch = fields.epoch;
    }
    static reified() { return { typeName: ActiveJwk.$typeName, fullTypeName: (0, util_1.composeSuiType)(ActiveJwk.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => ActiveJwk.fromFields(fields), fromFieldsWithTypes: (item) => ActiveJwk.fromFieldsWithTypes(item), fromBcs: (data) => ActiveJwk.fromBcs(data), bcs: ActiveJwk.bcs, fromJSONField: (field) => ActiveJwk.fromJSONField(field), fromJSON: (json) => ActiveJwk.fromJSON(json), fromSuiParsedData: (content) => ActiveJwk.fromSuiParsedData(content), fetch: async (client, id) => ActiveJwk.fetch(client, id), new: (fields) => { return new ActiveJwk([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ActiveJwk.reified(); }
    static phantom() { return (0, reified_1.phantom)(ActiveJwk.reified()); }
    static get p() { return ActiveJwk.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ActiveJwk", {
            jwk_id: JwkId.bcs, jwk: JWK.bcs, epoch: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return ActiveJwk.reified().new({ jwkId: (0, reified_1.decodeFromFields)(JwkId.reified(), fields.jwk_id), jwk: (0, reified_1.decodeFromFields)(JWK.reified(), fields.jwk), epoch: (0, reified_1.decodeFromFields)("u64", fields.epoch) }); }
    static fromFieldsWithTypes(item) {
        if (!isActiveJwk(item.type)) {
            throw new Error("not a ActiveJwk type");
        }
        return ActiveJwk.reified().new({ jwkId: (0, reified_1.decodeFromFieldsWithTypes)(JwkId.reified(), item.fields.jwk_id), jwk: (0, reified_1.decodeFromFieldsWithTypes)(JWK.reified(), item.fields.jwk), epoch: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.epoch) });
    }
    static fromBcs(data) { return ActiveJwk.fromFields(ActiveJwk.bcs.parse(data)); }
    toJSONField() {
        return {
            jwkId: this.jwkId.toJSONField(), jwk: this.jwk.toJSONField(), epoch: this.epoch.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ActiveJwk.reified().new({ jwkId: (0, reified_1.decodeFromJSONField)(JwkId.reified(), field.jwkId), jwk: (0, reified_1.decodeFromJSONField)(JWK.reified(), field.jwk), epoch: (0, reified_1.decodeFromJSONField)("u64", field.epoch) }); }
    static fromJSON(json) {
        if (json.$typeName !== ActiveJwk.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ActiveJwk.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isActiveJwk(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ActiveJwk object`);
    } return ActiveJwk.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ActiveJwk object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isActiveJwk(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ActiveJwk object`);
        }
        return ActiveJwk.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ActiveJwk = ActiveJwk;
ActiveJwk.$typeName = "0x2::authenticator_state::ActiveJwk";
ActiveJwk.$numTypeParams = 0;
/* ============================== AuthenticatorState =============================== */
function isAuthenticatorState(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::AuthenticatorState"; }
class AuthenticatorState {
    constructor(typeArgs, fields) {
        this.$typeName = AuthenticatorState.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AuthenticatorState.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: AuthenticatorState.$typeName, fullTypeName: (0, util_1.composeSuiType)(AuthenticatorState.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AuthenticatorState.fromFields(fields), fromFieldsWithTypes: (item) => AuthenticatorState.fromFieldsWithTypes(item), fromBcs: (data) => AuthenticatorState.fromBcs(data), bcs: AuthenticatorState.bcs, fromJSONField: (field) => AuthenticatorState.fromJSONField(field), fromJSON: (json) => AuthenticatorState.fromJSON(json), fromSuiParsedData: (content) => AuthenticatorState.fromSuiParsedData(content), fetch: async (client, id) => AuthenticatorState.fetch(client, id), new: (fields) => { return new AuthenticatorState([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AuthenticatorState.reified(); }
    static phantom() { return (0, reified_1.phantom)(AuthenticatorState.reified()); }
    static get p() { return AuthenticatorState.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AuthenticatorState", {
            id: structs_2.UID.bcs, version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return AuthenticatorState.reified().new({ id: (0, reified_1.decodeFromFields)(structs_2.UID.reified(), fields.id), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isAuthenticatorState(item.type)) {
            throw new Error("not a AuthenticatorState type");
        }
        return AuthenticatorState.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.UID.reified(), item.fields.id), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return AuthenticatorState.fromFields(AuthenticatorState.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AuthenticatorState.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_2.UID.reified(), field.id), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== AuthenticatorState.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AuthenticatorState.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAuthenticatorState(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AuthenticatorState object`);
    } return AuthenticatorState.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AuthenticatorState object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAuthenticatorState(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AuthenticatorState object`);
        }
        return AuthenticatorState.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AuthenticatorState = AuthenticatorState;
AuthenticatorState.$typeName = "0x2::authenticator_state::AuthenticatorState";
AuthenticatorState.$numTypeParams = 0;
/* ============================== AuthenticatorStateInner =============================== */
function isAuthenticatorStateInner(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::AuthenticatorStateInner"; }
class AuthenticatorStateInner {
    constructor(typeArgs, fields) {
        this.$typeName = AuthenticatorStateInner.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(AuthenticatorStateInner.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.version = fields.version;
        ;
        this.activeJwks = fields.activeJwks;
    }
    static reified() { return { typeName: AuthenticatorStateInner.$typeName, fullTypeName: (0, util_1.composeSuiType)(AuthenticatorStateInner.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => AuthenticatorStateInner.fromFields(fields), fromFieldsWithTypes: (item) => AuthenticatorStateInner.fromFieldsWithTypes(item), fromBcs: (data) => AuthenticatorStateInner.fromBcs(data), bcs: AuthenticatorStateInner.bcs, fromJSONField: (field) => AuthenticatorStateInner.fromJSONField(field), fromJSON: (json) => AuthenticatorStateInner.fromJSON(json), fromSuiParsedData: (content) => AuthenticatorStateInner.fromSuiParsedData(content), fetch: async (client, id) => AuthenticatorStateInner.fetch(client, id), new: (fields) => { return new AuthenticatorStateInner([], fields); }, kind: "StructClassReified", }; }
    static get r() { return AuthenticatorStateInner.reified(); }
    static phantom() { return (0, reified_1.phantom)(AuthenticatorStateInner.reified()); }
    static get p() { return AuthenticatorStateInner.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("AuthenticatorStateInner", {
            version: bcs_1.bcs.u64(), active_jwks: bcs_1.bcs.vector(ActiveJwk.bcs)
        });
    }
    ;
    static fromFields(fields) { return AuthenticatorStateInner.reified().new({ version: (0, reified_1.decodeFromFields)("u64", fields.version), activeJwks: (0, reified_1.decodeFromFields)(reified.vector(ActiveJwk.reified()), fields.active_jwks) }); }
    static fromFieldsWithTypes(item) {
        if (!isAuthenticatorStateInner(item.type)) {
            throw new Error("not a AuthenticatorStateInner type");
        }
        return AuthenticatorStateInner.reified().new({ version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version), activeJwks: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector(ActiveJwk.reified()), item.fields.active_jwks) });
    }
    static fromBcs(data) { return AuthenticatorStateInner.fromFields(AuthenticatorStateInner.bcs.parse(data)); }
    toJSONField() {
        return {
            version: this.version.toString(), activeJwks: (0, reified_1.fieldToJSON)(`vector<0x2::authenticator_state::ActiveJwk>`, this.activeJwks),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return AuthenticatorStateInner.reified().new({ version: (0, reified_1.decodeFromJSONField)("u64", field.version), activeJwks: (0, reified_1.decodeFromJSONField)(reified.vector(ActiveJwk.reified()), field.activeJwks) }); }
    static fromJSON(json) {
        if (json.$typeName !== AuthenticatorStateInner.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return AuthenticatorStateInner.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isAuthenticatorStateInner(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a AuthenticatorStateInner object`);
    } return AuthenticatorStateInner.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching AuthenticatorStateInner object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isAuthenticatorStateInner(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AuthenticatorStateInner object`);
        }
        return AuthenticatorStateInner.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.AuthenticatorStateInner = AuthenticatorStateInner;
AuthenticatorStateInner.$typeName = "0x2::authenticator_state::AuthenticatorStateInner";
AuthenticatorStateInner.$numTypeParams = 0;
/* ============================== JWK =============================== */
function isJWK(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::JWK"; }
class JWK {
    constructor(typeArgs, fields) {
        this.$typeName = JWK.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(JWK.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.kty = fields.kty;
        ;
        this.e = fields.e;
        ;
        this.n = fields.n;
        ;
        this.alg = fields.alg;
    }
    static reified() { return { typeName: JWK.$typeName, fullTypeName: (0, util_1.composeSuiType)(JWK.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => JWK.fromFields(fields), fromFieldsWithTypes: (item) => JWK.fromFieldsWithTypes(item), fromBcs: (data) => JWK.fromBcs(data), bcs: JWK.bcs, fromJSONField: (field) => JWK.fromJSONField(field), fromJSON: (json) => JWK.fromJSON(json), fromSuiParsedData: (content) => JWK.fromSuiParsedData(content), fetch: async (client, id) => JWK.fetch(client, id), new: (fields) => { return new JWK([], fields); }, kind: "StructClassReified", }; }
    static get r() { return JWK.reified(); }
    static phantom() { return (0, reified_1.phantom)(JWK.reified()); }
    static get p() { return JWK.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("JWK", {
            kty: structs_1.String.bcs, e: structs_1.String.bcs, n: structs_1.String.bcs, alg: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return JWK.reified().new({ kty: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.kty), e: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.e), n: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.n), alg: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.alg) }); }
    static fromFieldsWithTypes(item) {
        if (!isJWK(item.type)) {
            throw new Error("not a JWK type");
        }
        return JWK.reified().new({ kty: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.kty), e: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.e), n: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.n), alg: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.alg) });
    }
    static fromBcs(data) { return JWK.fromFields(JWK.bcs.parse(data)); }
    toJSONField() {
        return {
            kty: this.kty, e: this.e, n: this.n, alg: this.alg,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return JWK.reified().new({ kty: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.kty), e: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.e), n: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.n), alg: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.alg) }); }
    static fromJSON(json) {
        if (json.$typeName !== JWK.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return JWK.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isJWK(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a JWK object`);
    } return JWK.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching JWK object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isJWK(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a JWK object`);
        }
        return JWK.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.JWK = JWK;
JWK.$typeName = "0x2::authenticator_state::JWK";
JWK.$numTypeParams = 0;
/* ============================== JwkId =============================== */
function isJwkId(type) { type = (0, util_1.compressSuiType)(type); return type === "0x2::authenticator_state::JwkId"; }
class JwkId {
    constructor(typeArgs, fields) {
        this.$typeName = JwkId.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(JwkId.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.iss = fields.iss;
        ;
        this.kid = fields.kid;
    }
    static reified() { return { typeName: JwkId.$typeName, fullTypeName: (0, util_1.composeSuiType)(JwkId.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => JwkId.fromFields(fields), fromFieldsWithTypes: (item) => JwkId.fromFieldsWithTypes(item), fromBcs: (data) => JwkId.fromBcs(data), bcs: JwkId.bcs, fromJSONField: (field) => JwkId.fromJSONField(field), fromJSON: (json) => JwkId.fromJSON(json), fromSuiParsedData: (content) => JwkId.fromSuiParsedData(content), fetch: async (client, id) => JwkId.fetch(client, id), new: (fields) => { return new JwkId([], fields); }, kind: "StructClassReified", }; }
    static get r() { return JwkId.reified(); }
    static phantom() { return (0, reified_1.phantom)(JwkId.reified()); }
    static get p() { return JwkId.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("JwkId", {
            iss: structs_1.String.bcs, kid: structs_1.String.bcs
        });
    }
    ;
    static fromFields(fields) { return JwkId.reified().new({ iss: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.iss), kid: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.kid) }); }
    static fromFieldsWithTypes(item) {
        if (!isJwkId(item.type)) {
            throw new Error("not a JwkId type");
        }
        return JwkId.reified().new({ iss: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.iss), kid: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.kid) });
    }
    static fromBcs(data) { return JwkId.fromFields(JwkId.bcs.parse(data)); }
    toJSONField() {
        return {
            iss: this.iss, kid: this.kid,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return JwkId.reified().new({ iss: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.iss), kid: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.kid) }); }
    static fromJSON(json) {
        if (json.$typeName !== JwkId.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return JwkId.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isJwkId(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a JwkId object`);
    } return JwkId.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching JwkId object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isJwkId(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a JwkId object`);
        }
        return JwkId.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.JwkId = JwkId;
JwkId.$typeName = "0x2::authenticator_state::JwkId";
JwkId.$numTypeParams = 0;

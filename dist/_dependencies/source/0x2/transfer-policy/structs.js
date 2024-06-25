"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferRequest = exports.TransferPolicyDestroyed = exports.TransferPolicyCreated = exports.TransferPolicyCap = exports.TransferPolicy = exports.RuleKey = void 0;
exports.isRuleKey = isRuleKey;
exports.isTransferPolicy = isTransferPolicy;
exports.isTransferPolicyCap = isTransferPolicyCap;
exports.isTransferPolicyCreated = isTransferPolicyCreated;
exports.isTransferPolicyDestroyed = isTransferPolicyDestroyed;
exports.isTransferRequest = isTransferRequest;
const reified = require("../../../../_framework/reified");
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/type-name/structs");
const structs_2 = require("../balance/structs");
const structs_3 = require("../object/structs");
const structs_4 = require("../sui/structs");
const structs_5 = require("../vec-set/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== RuleKey =============================== */
function isRuleKey(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::RuleKey<"); }
class RuleKey {
    constructor(typeArgs, fields) {
        this.$typeName = RuleKey.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(RuleKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified(T) { return { typeName: RuleKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(RuleKey.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => RuleKey.fromFields(T, fields), fromFieldsWithTypes: (item) => RuleKey.fromFieldsWithTypes(T, item), fromBcs: (data) => RuleKey.fromBcs(T, data), bcs: RuleKey.bcs, fromJSONField: (field) => RuleKey.fromJSONField(T, field), fromJSON: (json) => RuleKey.fromJSON(T, json), fromSuiParsedData: (content) => RuleKey.fromSuiParsedData(T, content), fetch: async (client, id) => RuleKey.fetch(client, T, id), new: (fields) => { return new RuleKey([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return RuleKey.reified; }
    static phantom(T) { return (0, reified_1.phantom)(RuleKey.reified(T)); }
    static get p() { return RuleKey.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("RuleKey", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return RuleKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isRuleKey(item.type)) {
            throw new Error("not a RuleKey type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RuleKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(typeArg, data) { return RuleKey.fromFields(typeArg, RuleKey.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return RuleKey.reified(typeArg).new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== RuleKey.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(RuleKey.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return RuleKey.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRuleKey(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RuleKey object`);
    } return RuleKey.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RuleKey object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRuleKey(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RuleKey object`);
        }
        return RuleKey.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.RuleKey = RuleKey;
RuleKey.$typeName = "0x2::transfer_policy::RuleKey";
RuleKey.$numTypeParams = 1;
/* ============================== TransferPolicy =============================== */
function isTransferPolicy(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferPolicy<"); }
class TransferPolicy {
    constructor(typeArgs, fields) {
        this.$typeName = TransferPolicy.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TransferPolicy.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
        ;
        this.rules = fields.rules;
    }
    static reified(T) { return { typeName: TransferPolicy.$typeName, fullTypeName: (0, util_1.composeSuiType)(TransferPolicy.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => TransferPolicy.fromFields(T, fields), fromFieldsWithTypes: (item) => TransferPolicy.fromFieldsWithTypes(T, item), fromBcs: (data) => TransferPolicy.fromBcs(T, data), bcs: TransferPolicy.bcs, fromJSONField: (field) => TransferPolicy.fromJSONField(T, field), fromJSON: (json) => TransferPolicy.fromJSON(T, json), fromSuiParsedData: (content) => TransferPolicy.fromSuiParsedData(T, content), fetch: async (client, id) => TransferPolicy.fetch(client, T, id), new: (fields) => { return new TransferPolicy([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TransferPolicy.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TransferPolicy.reified(T)); }
    static get p() { return TransferPolicy.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TransferPolicy", {
            id: structs_3.UID.bcs, balance: structs_2.Balance.bcs, rules: structs_5.VecSet.bcs(structs_1.TypeName.bcs)
        });
    }
    ;
    static fromFields(typeArg, fields) { return TransferPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_2.Balance.reified(reified.phantom(structs_4.SUI.reified())), fields.balance), rules: (0, reified_1.decodeFromFields)(structs_5.VecSet.reified(structs_1.TypeName.reified()), fields.rules) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTransferPolicy(item.type)) {
            throw new Error("not a TransferPolicy type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Balance.reified(reified.phantom(structs_4.SUI.reified())), item.fields.balance), rules: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecSet.reified(structs_1.TypeName.reified()), item.fields.rules) });
    }
    static fromBcs(typeArg, data) { return TransferPolicy.fromFields(typeArg, TransferPolicy.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, balance: this.balance.toJSONField(), rules: this.rules.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TransferPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_2.Balance.reified(reified.phantom(structs_4.SUI.reified())), field.balance), rules: (0, reified_1.decodeFromJSONField)(structs_5.VecSet.reified(structs_1.TypeName.reified()), field.rules) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TransferPolicy.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferPolicy.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferPolicy.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferPolicy(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TransferPolicy object`);
    } return TransferPolicy.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TransferPolicy object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferPolicy(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TransferPolicy object`);
        }
        return TransferPolicy.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TransferPolicy = TransferPolicy;
TransferPolicy.$typeName = "0x2::transfer_policy::TransferPolicy";
TransferPolicy.$numTypeParams = 1;
/* ============================== TransferPolicyCap =============================== */
function isTransferPolicyCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferPolicyCap<"); }
class TransferPolicyCap {
    constructor(typeArgs, fields) {
        this.$typeName = TransferPolicyCap.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TransferPolicyCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.policyId = fields.policyId;
    }
    static reified(T) { return { typeName: TransferPolicyCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(TransferPolicyCap.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => TransferPolicyCap.fromFields(T, fields), fromFieldsWithTypes: (item) => TransferPolicyCap.fromFieldsWithTypes(T, item), fromBcs: (data) => TransferPolicyCap.fromBcs(T, data), bcs: TransferPolicyCap.bcs, fromJSONField: (field) => TransferPolicyCap.fromJSONField(T, field), fromJSON: (json) => TransferPolicyCap.fromJSON(T, json), fromSuiParsedData: (content) => TransferPolicyCap.fromSuiParsedData(T, content), fetch: async (client, id) => TransferPolicyCap.fetch(client, T, id), new: (fields) => { return new TransferPolicyCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TransferPolicyCap.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TransferPolicyCap.reified(T)); }
    static get p() { return TransferPolicyCap.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TransferPolicyCap", {
            id: structs_3.UID.bcs, policy_id: structs_3.ID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return TransferPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.UID.reified(), fields.id), policyId: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.policy_id) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTransferPolicyCap(item.type)) {
            throw new Error("not a TransferPolicyCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.UID.reified(), item.fields.id), policyId: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.policy_id) });
    }
    static fromBcs(typeArg, data) { return TransferPolicyCap.fromFields(typeArg, TransferPolicyCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, policyId: this.policyId,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TransferPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.UID.reified(), field.id), policyId: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.policyId) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TransferPolicyCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferPolicyCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferPolicyCap.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferPolicyCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TransferPolicyCap object`);
    } return TransferPolicyCap.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TransferPolicyCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferPolicyCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TransferPolicyCap object`);
        }
        return TransferPolicyCap.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TransferPolicyCap = TransferPolicyCap;
TransferPolicyCap.$typeName = "0x2::transfer_policy::TransferPolicyCap";
TransferPolicyCap.$numTypeParams = 1;
/* ============================== TransferPolicyCreated =============================== */
function isTransferPolicyCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferPolicyCreated<"); }
class TransferPolicyCreated {
    constructor(typeArgs, fields) {
        this.$typeName = TransferPolicyCreated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TransferPolicyCreated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified(T) { return { typeName: TransferPolicyCreated.$typeName, fullTypeName: (0, util_1.composeSuiType)(TransferPolicyCreated.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => TransferPolicyCreated.fromFields(T, fields), fromFieldsWithTypes: (item) => TransferPolicyCreated.fromFieldsWithTypes(T, item), fromBcs: (data) => TransferPolicyCreated.fromBcs(T, data), bcs: TransferPolicyCreated.bcs, fromJSONField: (field) => TransferPolicyCreated.fromJSONField(T, field), fromJSON: (json) => TransferPolicyCreated.fromJSON(T, json), fromSuiParsedData: (content) => TransferPolicyCreated.fromSuiParsedData(T, content), fetch: async (client, id) => TransferPolicyCreated.fetch(client, T, id), new: (fields) => { return new TransferPolicyCreated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TransferPolicyCreated.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TransferPolicyCreated.reified(T)); }
    static get p() { return TransferPolicyCreated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TransferPolicyCreated", {
            id: structs_3.ID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return TransferPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.id) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTransferPolicyCreated(item.type)) {
            throw new Error("not a TransferPolicyCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.id) });
    }
    static fromBcs(typeArg, data) { return TransferPolicyCreated.fromFields(typeArg, TransferPolicyCreated.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TransferPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.id) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TransferPolicyCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferPolicyCreated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferPolicyCreated.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferPolicyCreated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TransferPolicyCreated object`);
    } return TransferPolicyCreated.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TransferPolicyCreated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferPolicyCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TransferPolicyCreated object`);
        }
        return TransferPolicyCreated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TransferPolicyCreated = TransferPolicyCreated;
TransferPolicyCreated.$typeName = "0x2::transfer_policy::TransferPolicyCreated";
TransferPolicyCreated.$numTypeParams = 1;
/* ============================== TransferPolicyDestroyed =============================== */
function isTransferPolicyDestroyed(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferPolicyDestroyed<"); }
class TransferPolicyDestroyed {
    constructor(typeArgs, fields) {
        this.$typeName = TransferPolicyDestroyed.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TransferPolicyDestroyed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified(T) { return { typeName: TransferPolicyDestroyed.$typeName, fullTypeName: (0, util_1.composeSuiType)(TransferPolicyDestroyed.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => TransferPolicyDestroyed.fromFields(T, fields), fromFieldsWithTypes: (item) => TransferPolicyDestroyed.fromFieldsWithTypes(T, item), fromBcs: (data) => TransferPolicyDestroyed.fromBcs(T, data), bcs: TransferPolicyDestroyed.bcs, fromJSONField: (field) => TransferPolicyDestroyed.fromJSONField(T, field), fromJSON: (json) => TransferPolicyDestroyed.fromJSON(T, json), fromSuiParsedData: (content) => TransferPolicyDestroyed.fromSuiParsedData(T, content), fetch: async (client, id) => TransferPolicyDestroyed.fetch(client, T, id), new: (fields) => { return new TransferPolicyDestroyed([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TransferPolicyDestroyed.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TransferPolicyDestroyed.reified(T)); }
    static get p() { return TransferPolicyDestroyed.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TransferPolicyDestroyed", {
            id: structs_3.ID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return TransferPolicyDestroyed.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.id) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTransferPolicyDestroyed(item.type)) {
            throw new Error("not a TransferPolicyDestroyed type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferPolicyDestroyed.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.id) });
    }
    static fromBcs(typeArg, data) { return TransferPolicyDestroyed.fromFields(typeArg, TransferPolicyDestroyed.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TransferPolicyDestroyed.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.id) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TransferPolicyDestroyed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferPolicyDestroyed.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferPolicyDestroyed.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferPolicyDestroyed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TransferPolicyDestroyed object`);
    } return TransferPolicyDestroyed.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TransferPolicyDestroyed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferPolicyDestroyed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TransferPolicyDestroyed object`);
        }
        return TransferPolicyDestroyed.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TransferPolicyDestroyed = TransferPolicyDestroyed;
TransferPolicyDestroyed.$typeName = "0x2::transfer_policy::TransferPolicyDestroyed";
TransferPolicyDestroyed.$numTypeParams = 1;
/* ============================== TransferRequest =============================== */
function isTransferRequest(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::transfer_policy::TransferRequest<"); }
class TransferRequest {
    constructor(typeArgs, fields) {
        this.$typeName = TransferRequest.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TransferRequest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.item = fields.item;
        ;
        this.paid = fields.paid;
        ;
        this.from = fields.from;
        ;
        this.receipts = fields.receipts;
    }
    static reified(T) { return { typeName: TransferRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(TransferRequest.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => TransferRequest.fromFields(T, fields), fromFieldsWithTypes: (item) => TransferRequest.fromFieldsWithTypes(T, item), fromBcs: (data) => TransferRequest.fromBcs(T, data), bcs: TransferRequest.bcs, fromJSONField: (field) => TransferRequest.fromJSONField(T, field), fromJSON: (json) => TransferRequest.fromJSON(T, json), fromSuiParsedData: (content) => TransferRequest.fromSuiParsedData(T, content), fetch: async (client, id) => TransferRequest.fetch(client, T, id), new: (fields) => { return new TransferRequest([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TransferRequest.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TransferRequest.reified(T)); }
    static get p() { return TransferRequest.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TransferRequest", {
            item: structs_3.ID.bcs, paid: bcs_1.bcs.u64(), from: structs_3.ID.bcs, receipts: structs_5.VecSet.bcs(structs_1.TypeName.bcs)
        });
    }
    ;
    static fromFields(typeArg, fields) { return TransferRequest.reified(typeArg).new({ item: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.item), paid: (0, reified_1.decodeFromFields)("u64", fields.paid), from: (0, reified_1.decodeFromFields)(structs_3.ID.reified(), fields.from), receipts: (0, reified_1.decodeFromFields)(structs_5.VecSet.reified(structs_1.TypeName.reified()), fields.receipts) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTransferRequest(item.type)) {
            throw new Error("not a TransferRequest type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TransferRequest.reified(typeArg).new({ item: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.item), paid: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.paid), from: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.ID.reified(), item.fields.from), receipts: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.VecSet.reified(structs_1.TypeName.reified()), item.fields.receipts) });
    }
    static fromBcs(typeArg, data) { return TransferRequest.fromFields(typeArg, TransferRequest.bcs.parse(data)); }
    toJSONField() {
        return {
            item: this.item, paid: this.paid.toString(), from: this.from, receipts: this.receipts.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TransferRequest.reified(typeArg).new({ item: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.item), paid: (0, reified_1.decodeFromJSONField)("u64", field.paid), from: (0, reified_1.decodeFromJSONField)(structs_3.ID.reified(), field.from), receipts: (0, reified_1.decodeFromJSONField)(structs_5.VecSet.reified(structs_1.TypeName.reified()), field.receipts) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TransferRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TransferRequest.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TransferRequest.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTransferRequest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TransferRequest object`);
    } return TransferRequest.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TransferRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTransferRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TransferRequest object`);
        }
        return TransferRequest.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TransferRequest = TransferRequest;
TransferRequest.$typeName = "0x2::transfer_policy::TransferRequest";
TransferRequest.$numTypeParams = 1;

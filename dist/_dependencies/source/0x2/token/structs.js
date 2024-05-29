"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPolicyCreated = exports.isTokenPolicyCreated = exports.TokenPolicyCap = exports.isTokenPolicyCap = exports.TokenPolicy = exports.isTokenPolicy = exports.Token = exports.isToken = exports.ActionRequest = exports.isActionRequest = exports.RuleKey = exports.isRuleKey = void 0;
const reified_1 = require("../../../../_framework/reified");
const util_1 = require("../../../../_framework/util");
const structs_1 = require("../../0x1/option/structs");
const structs_2 = require("../../0x1/string/structs");
const structs_3 = require("../../0x1/type-name/structs");
const structs_4 = require("../balance/structs");
const structs_5 = require("../object/structs");
const structs_6 = require("../vec-map/structs");
const structs_7 = require("../vec-set/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== RuleKey =============================== */
function isRuleKey(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::RuleKey<"); }
exports.isRuleKey = isRuleKey;
class RuleKey {
    constructor(typeArgs, fields) {
        this.$typeName = RuleKey.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(RuleKey.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.isProtected = fields.isProtected;
    }
    static reified(T) { return { typeName: RuleKey.$typeName, fullTypeName: (0, util_1.composeSuiType)(RuleKey.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => RuleKey.fromFields(T, fields), fromFieldsWithTypes: (item) => RuleKey.fromFieldsWithTypes(T, item), fromBcs: (data) => RuleKey.fromBcs(T, data), bcs: RuleKey.bcs, fromJSONField: (field) => RuleKey.fromJSONField(T, field), fromJSON: (json) => RuleKey.fromJSON(T, json), fromSuiParsedData: (content) => RuleKey.fromSuiParsedData(T, content), fetch: async (client, id) => RuleKey.fetch(client, T, id), new: (fields) => { return new RuleKey([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return RuleKey.reified; }
    static phantom(T) { return (0, reified_1.phantom)(RuleKey.reified(T)); }
    static get p() { return RuleKey.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("RuleKey", {
            is_protected: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return RuleKey.reified(typeArg).new({ isProtected: (0, reified_1.decodeFromFields)("bool", fields.is_protected) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isRuleKey(item.type)) {
            throw new Error("not a RuleKey type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RuleKey.reified(typeArg).new({ isProtected: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_protected) });
    }
    static fromBcs(typeArg, data) { return RuleKey.fromFields(typeArg, RuleKey.bcs.parse(data)); }
    toJSONField() {
        return {
            isProtected: this.isProtected,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return RuleKey.reified(typeArg).new({ isProtected: (0, reified_1.decodeFromJSONField)("bool", field.isProtected) }); }
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
RuleKey.$typeName = "0x2::token::RuleKey";
RuleKey.$numTypeParams = 1;
/* ============================== ActionRequest =============================== */
function isActionRequest(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::ActionRequest<"); }
exports.isActionRequest = isActionRequest;
class ActionRequest {
    constructor(typeArgs, fields) {
        this.$typeName = ActionRequest.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(ActionRequest.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.name = fields.name;
        ;
        this.amount = fields.amount;
        ;
        this.sender = fields.sender;
        ;
        this.recipient = fields.recipient;
        ;
        this.spentBalance = fields.spentBalance;
        ;
        this.approvals = fields.approvals;
    }
    static reified(T) { return { typeName: ActionRequest.$typeName, fullTypeName: (0, util_1.composeSuiType)(ActionRequest.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => ActionRequest.fromFields(T, fields), fromFieldsWithTypes: (item) => ActionRequest.fromFieldsWithTypes(T, item), fromBcs: (data) => ActionRequest.fromBcs(T, data), bcs: ActionRequest.bcs, fromJSONField: (field) => ActionRequest.fromJSONField(T, field), fromJSON: (json) => ActionRequest.fromJSON(T, json), fromSuiParsedData: (content) => ActionRequest.fromSuiParsedData(T, content), fetch: async (client, id) => ActionRequest.fetch(client, T, id), new: (fields) => { return new ActionRequest([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return ActionRequest.reified; }
    static phantom(T) { return (0, reified_1.phantom)(ActionRequest.reified(T)); }
    static get p() { return ActionRequest.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("ActionRequest", {
            name: structs_2.String.bcs, amount: bcs_1.bcs.u64(), sender: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), recipient: structs_1.Option.bcs(bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), })), spent_balance: structs_1.Option.bcs(structs_4.Balance.bcs), approvals: structs_7.VecSet.bcs(structs_3.TypeName.bcs)
        });
    }
    ;
    static fromFields(typeArg, fields) { return ActionRequest.reified(typeArg).new({ name: (0, reified_1.decodeFromFields)(structs_2.String.reified(), fields.name), amount: (0, reified_1.decodeFromFields)("u64", fields.amount), sender: (0, reified_1.decodeFromFields)("address", fields.sender), recipient: (0, reified_1.decodeFromFields)(structs_1.Option.reified("address"), fields.recipient), spentBalance: (0, reified_1.decodeFromFields)(structs_1.Option.reified(structs_4.Balance.reified(typeArg)), fields.spent_balance), approvals: (0, reified_1.decodeFromFields)(structs_7.VecSet.reified(structs_3.TypeName.reified()), fields.approvals) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isActionRequest(item.type)) {
            throw new Error("not a ActionRequest type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return ActionRequest.reified(typeArg).new({ name: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.String.reified(), item.fields.name), amount: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.amount), sender: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.sender), recipient: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified("address"), item.fields.recipient), spentBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Option.reified(structs_4.Balance.reified(typeArg)), item.fields.spent_balance), approvals: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.VecSet.reified(structs_3.TypeName.reified()), item.fields.approvals) });
    }
    static fromBcs(typeArg, data) { return ActionRequest.fromFields(typeArg, ActionRequest.bcs.parse(data)); }
    toJSONField() {
        return {
            name: this.name, amount: this.amount.toString(), sender: this.sender, recipient: (0, reified_1.fieldToJSON)(`0x1::option::Option<address>`, this.recipient), spentBalance: (0, reified_1.fieldToJSON)(`0x1::option::Option<0x2::balance::Balance<${this.$typeArgs[0]}>>`, this.spentBalance), approvals: this.approvals.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return ActionRequest.reified(typeArg).new({ name: (0, reified_1.decodeFromJSONField)(structs_2.String.reified(), field.name), amount: (0, reified_1.decodeFromJSONField)("u64", field.amount), sender: (0, reified_1.decodeFromJSONField)("address", field.sender), recipient: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified("address"), field.recipient), spentBalance: (0, reified_1.decodeFromJSONField)(structs_1.Option.reified(structs_4.Balance.reified(typeArg)), field.spentBalance), approvals: (0, reified_1.decodeFromJSONField)(structs_7.VecSet.reified(structs_3.TypeName.reified()), field.approvals) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== ActionRequest.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(ActionRequest.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return ActionRequest.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isActionRequest(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ActionRequest object`);
    } return ActionRequest.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ActionRequest object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isActionRequest(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ActionRequest object`);
        }
        return ActionRequest.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.ActionRequest = ActionRequest;
ActionRequest.$typeName = "0x2::token::ActionRequest";
ActionRequest.$numTypeParams = 1;
/* ============================== Token =============================== */
function isToken(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::Token<"); }
exports.isToken = isToken;
class Token {
    constructor(typeArgs, fields) {
        this.$typeName = Token.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Token.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
    }
    static reified(T) { return { typeName: Token.$typeName, fullTypeName: (0, util_1.composeSuiType)(Token.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => Token.fromFields(T, fields), fromFieldsWithTypes: (item) => Token.fromFieldsWithTypes(T, item), fromBcs: (data) => Token.fromBcs(T, data), bcs: Token.bcs, fromJSONField: (field) => Token.fromJSONField(T, field), fromJSON: (json) => Token.fromJSON(T, json), fromSuiParsedData: (content) => Token.fromSuiParsedData(T, content), fetch: async (client, id) => Token.fetch(client, T, id), new: (fields) => { return new Token([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Token.reified; }
    static phantom(T) { return (0, reified_1.phantom)(Token.reified(T)); }
    static get p() { return Token.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Token", {
            id: structs_5.UID.bcs, balance: structs_4.Balance.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return Token.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.balance) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isToken(item.type)) {
            throw new Error("not a Token type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Token.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.balance) });
    }
    static fromBcs(typeArg, data) { return Token.fromFields(typeArg, Token.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, balance: this.balance.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Token.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.balance) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Token.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Token.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Token.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isToken(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Token object`);
    } return Token.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Token object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isToken(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Token object`);
        }
        return Token.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Token = Token;
Token.$typeName = "0x2::token::Token";
Token.$numTypeParams = 1;
/* ============================== TokenPolicy =============================== */
function isTokenPolicy(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::TokenPolicy<"); }
exports.isTokenPolicy = isTokenPolicy;
class TokenPolicy {
    constructor(typeArgs, fields) {
        this.$typeName = TokenPolicy.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TokenPolicy.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.spentBalance = fields.spentBalance;
        ;
        this.rules = fields.rules;
    }
    static reified(T) { return { typeName: TokenPolicy.$typeName, fullTypeName: (0, util_1.composeSuiType)(TokenPolicy.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => TokenPolicy.fromFields(T, fields), fromFieldsWithTypes: (item) => TokenPolicy.fromFieldsWithTypes(T, item), fromBcs: (data) => TokenPolicy.fromBcs(T, data), bcs: TokenPolicy.bcs, fromJSONField: (field) => TokenPolicy.fromJSONField(T, field), fromJSON: (json) => TokenPolicy.fromJSON(T, json), fromSuiParsedData: (content) => TokenPolicy.fromSuiParsedData(T, content), fetch: async (client, id) => TokenPolicy.fetch(client, T, id), new: (fields) => { return new TokenPolicy([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TokenPolicy.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TokenPolicy.reified(T)); }
    static get p() { return TokenPolicy.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TokenPolicy", {
            id: structs_5.UID.bcs, spent_balance: structs_4.Balance.bcs, rules: structs_6.VecMap.bcs(structs_2.String.bcs, structs_7.VecSet.bcs(structs_3.TypeName.bcs))
        });
    }
    ;
    static fromFields(typeArg, fields) { return TokenPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), spentBalance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.spent_balance), rules: (0, reified_1.decodeFromFields)(structs_6.VecMap.reified(structs_2.String.reified(), structs_7.VecSet.reified(structs_3.TypeName.reified())), fields.rules) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTokenPolicy(item.type)) {
            throw new Error("not a TokenPolicy type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TokenPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), spentBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.spent_balance), rules: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.VecMap.reified(structs_2.String.reified(), structs_7.VecSet.reified(structs_3.TypeName.reified())), item.fields.rules) });
    }
    static fromBcs(typeArg, data) { return TokenPolicy.fromFields(typeArg, TokenPolicy.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, spentBalance: this.spentBalance.toJSONField(), rules: this.rules.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TokenPolicy.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), spentBalance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.spentBalance), rules: (0, reified_1.decodeFromJSONField)(structs_6.VecMap.reified(structs_2.String.reified(), structs_7.VecSet.reified(structs_3.TypeName.reified())), field.rules) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TokenPolicy.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TokenPolicy.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TokenPolicy.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokenPolicy(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TokenPolicy object`);
    } return TokenPolicy.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TokenPolicy object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenPolicy(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TokenPolicy object`);
        }
        return TokenPolicy.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TokenPolicy = TokenPolicy;
TokenPolicy.$typeName = "0x2::token::TokenPolicy";
TokenPolicy.$numTypeParams = 1;
/* ============================== TokenPolicyCap =============================== */
function isTokenPolicyCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::TokenPolicyCap<"); }
exports.isTokenPolicyCap = isTokenPolicyCap;
class TokenPolicyCap {
    constructor(typeArgs, fields) {
        this.$typeName = TokenPolicyCap.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TokenPolicyCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.for = fields.for;
    }
    static reified(T) { return { typeName: TokenPolicyCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(TokenPolicyCap.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => TokenPolicyCap.fromFields(T, fields), fromFieldsWithTypes: (item) => TokenPolicyCap.fromFieldsWithTypes(T, item), fromBcs: (data) => TokenPolicyCap.fromBcs(T, data), bcs: TokenPolicyCap.bcs, fromJSONField: (field) => TokenPolicyCap.fromJSONField(T, field), fromJSON: (json) => TokenPolicyCap.fromJSON(T, json), fromSuiParsedData: (content) => TokenPolicyCap.fromSuiParsedData(T, content), fetch: async (client, id) => TokenPolicyCap.fetch(client, T, id), new: (fields) => { return new TokenPolicyCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TokenPolicyCap.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TokenPolicyCap.reified(T)); }
    static get p() { return TokenPolicyCap.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TokenPolicyCap", {
            id: structs_5.UID.bcs, for: structs_5.ID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return TokenPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), for: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.for) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTokenPolicyCap(item.type)) {
            throw new Error("not a TokenPolicyCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TokenPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), for: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.for) });
    }
    static fromBcs(typeArg, data) { return TokenPolicyCap.fromFields(typeArg, TokenPolicyCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, for: this.for,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TokenPolicyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), for: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.for) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TokenPolicyCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TokenPolicyCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TokenPolicyCap.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokenPolicyCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TokenPolicyCap object`);
    } return TokenPolicyCap.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TokenPolicyCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenPolicyCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TokenPolicyCap object`);
        }
        return TokenPolicyCap.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TokenPolicyCap = TokenPolicyCap;
TokenPolicyCap.$typeName = "0x2::token::TokenPolicyCap";
TokenPolicyCap.$numTypeParams = 1;
/* ============================== TokenPolicyCreated =============================== */
function isTokenPolicyCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith("0x2::token::TokenPolicyCreated<"); }
exports.isTokenPolicyCreated = isTokenPolicyCreated;
class TokenPolicyCreated {
    constructor(typeArgs, fields) {
        this.$typeName = TokenPolicyCreated.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(TokenPolicyCreated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.isMutable = fields.isMutable;
    }
    static reified(T) { return { typeName: TokenPolicyCreated.$typeName, fullTypeName: (0, util_1.composeSuiType)(TokenPolicyCreated.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], reifiedTypeArgs: [T], fromFields: (fields) => TokenPolicyCreated.fromFields(T, fields), fromFieldsWithTypes: (item) => TokenPolicyCreated.fromFieldsWithTypes(T, item), fromBcs: (data) => TokenPolicyCreated.fromBcs(T, data), bcs: TokenPolicyCreated.bcs, fromJSONField: (field) => TokenPolicyCreated.fromJSONField(T, field), fromJSON: (json) => TokenPolicyCreated.fromJSON(T, json), fromSuiParsedData: (content) => TokenPolicyCreated.fromSuiParsedData(T, content), fetch: async (client, id) => TokenPolicyCreated.fetch(client, T, id), new: (fields) => { return new TokenPolicyCreated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TokenPolicyCreated.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TokenPolicyCreated.reified(T)); }
    static get p() { return TokenPolicyCreated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TokenPolicyCreated", {
            id: structs_5.ID.bcs, is_mutable: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return TokenPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.id), isMutable: (0, reified_1.decodeFromFields)("bool", fields.is_mutable) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTokenPolicyCreated(item.type)) {
            throw new Error("not a TokenPolicyCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TokenPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.id), isMutable: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_mutable) });
    }
    static fromBcs(typeArg, data) { return TokenPolicyCreated.fromFields(typeArg, TokenPolicyCreated.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, isMutable: this.isMutable,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TokenPolicyCreated.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.id), isMutable: (0, reified_1.decodeFromJSONField)("bool", field.isMutable) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TokenPolicyCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TokenPolicyCreated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TokenPolicyCreated.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTokenPolicyCreated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TokenPolicyCreated object`);
    } return TokenPolicyCreated.fromFieldsWithTypes(typeArg, content); }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TokenPolicyCreated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTokenPolicyCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TokenPolicyCreated object`);
        }
        return TokenPolicyCreated.fromBcs(typeArg, (0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.TokenPolicyCreated = TokenPolicyCreated;
TokenPolicyCreated.$typeName = "0x2::token::TokenPolicyCreated";
TokenPolicyCreated.$numTypeParams = 1;

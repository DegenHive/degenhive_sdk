"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasuryCap = exports.RegulatedCoinMetadata = exports.DenyCapV2 = exports.DenyCap = exports.CurrencyCreated = exports.CoinMetadata = exports.Coin = void 0;
exports.isCoin = isCoin;
exports.isCoinMetadata = isCoinMetadata;
exports.isCurrencyCreated = isCurrencyCreated;
exports.isDenyCap = isDenyCap;
exports.isDenyCapV2 = isDenyCapV2;
exports.isRegulatedCoinMetadata = isRegulatedCoinMetadata;
exports.isTreasuryCap = isTreasuryCap;
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const structs_1 = require("../../0x1/ascii/structs");
const structs_2 = require("../../0x1/option/structs");
const structs_3 = require("../../0x1/string/structs");
const structs_4 = require("../balance/structs");
const index_1 = require("../index");
const structs_5 = require("../object/structs");
const structs_6 = require("../url/structs");
const bcs_1 = require("@mysten/bcs");
/* ============================== Coin =============================== */
function isCoin(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::coin::Coin` + '<'); }
class Coin {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Coin.$typeName;
        this.$isPhantom = Coin.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Coin.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.balance = fields.balance;
    }
    static reified(T) { return { typeName: Coin.$typeName, fullTypeName: (0, util_1.composeSuiType)(Coin.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: Coin.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => Coin.fromFields(T, fields), fromFieldsWithTypes: (item) => Coin.fromFieldsWithTypes(T, item), fromBcs: (data) => Coin.fromBcs(T, data), bcs: Coin.bcs, fromJSONField: (field) => Coin.fromJSONField(T, field), fromJSON: (json) => Coin.fromJSON(T, json), fromSuiParsedData: (content) => Coin.fromSuiParsedData(T, content), fromSuiObjectData: (content) => Coin.fromSuiObjectData(T, content), fetch: async (client, id) => Coin.fetch(client, T, id), new: (fields) => { return new Coin([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return Coin.reified; }
    static phantom(T) { return (0, reified_1.phantom)(Coin.reified(T)); }
    static get p() { return Coin.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("Coin", {
            id: structs_5.UID.bcs, balance: structs_4.Balance.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return Coin.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), balance: (0, reified_1.decodeFromFields)(structs_4.Balance.reified(typeArg), fields.balance) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isCoin(item.type)) {
            throw new Error("not a Coin type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return Coin.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), balance: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Balance.reified(typeArg), item.fields.balance) });
    }
    static fromBcs(typeArg, data) { return Coin.fromFields(typeArg, Coin.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, balance: this.balance.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return Coin.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), balance: (0, reified_1.decodeFromJSONField)(structs_4.Balance.reified(typeArg), field.balance) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== Coin.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(Coin.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return Coin.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCoin(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Coin object`);
    } return Coin.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCoin(data.bcs.type)) {
                throw new Error(`object at is not a Coin object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return Coin.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Coin.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Coin object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCoin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Coin object`);
        }
        return Coin.fromSuiObjectData(typeArg, res.data);
    }
}
exports.Coin = Coin;
Coin.$typeName = `${index_1.PKG_V28}::coin::Coin`;
Coin.$numTypeParams = 1;
Coin.$isPhantom = [true,];
/* ============================== CoinMetadata =============================== */
function isCoinMetadata(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::coin::CoinMetadata` + '<'); }
class CoinMetadata {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CoinMetadata.$typeName;
        this.$isPhantom = CoinMetadata.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CoinMetadata.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.decimals = fields.decimals;
        ;
        this.name = fields.name;
        ;
        this.symbol = fields.symbol;
        ;
        this.description = fields.description;
        ;
        this.iconUrl = fields.iconUrl;
    }
    static reified(T) { return { typeName: CoinMetadata.$typeName, fullTypeName: (0, util_1.composeSuiType)(CoinMetadata.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: CoinMetadata.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => CoinMetadata.fromFields(T, fields), fromFieldsWithTypes: (item) => CoinMetadata.fromFieldsWithTypes(T, item), fromBcs: (data) => CoinMetadata.fromBcs(T, data), bcs: CoinMetadata.bcs, fromJSONField: (field) => CoinMetadata.fromJSONField(T, field), fromJSON: (json) => CoinMetadata.fromJSON(T, json), fromSuiParsedData: (content) => CoinMetadata.fromSuiParsedData(T, content), fromSuiObjectData: (content) => CoinMetadata.fromSuiObjectData(T, content), fetch: async (client, id) => CoinMetadata.fetch(client, T, id), new: (fields) => { return new CoinMetadata([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return CoinMetadata.reified; }
    static phantom(T) { return (0, reified_1.phantom)(CoinMetadata.reified(T)); }
    static get p() { return CoinMetadata.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("CoinMetadata", {
            id: structs_5.UID.bcs, decimals: bcs_1.bcs.u8(), name: structs_3.String.bcs, symbol: structs_1.String.bcs, description: structs_3.String.bcs, icon_url: structs_2.Option.bcs(structs_6.Url.bcs)
        });
    }
    ;
    static fromFields(typeArg, fields) { return CoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), decimals: (0, reified_1.decodeFromFields)("u8", fields.decimals), name: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.name), symbol: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.symbol), description: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.description), iconUrl: (0, reified_1.decodeFromFields)(structs_2.Option.reified(structs_6.Url.reified()), fields.icon_url) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isCoinMetadata(item.type)) {
            throw new Error("not a CoinMetadata type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return CoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), decimals: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.decimals), name: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.name), symbol: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.symbol), description: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.description), iconUrl: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(structs_6.Url.reified()), item.fields.icon_url) });
    }
    static fromBcs(typeArg, data) { return CoinMetadata.fromFields(typeArg, CoinMetadata.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, decimals: this.decimals, name: this.name, symbol: this.symbol, description: this.description, iconUrl: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${structs_6.Url.$typeName}>`, this.iconUrl),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return CoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), decimals: (0, reified_1.decodeFromJSONField)("u8", field.decimals), name: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.name), symbol: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.symbol), description: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.description), iconUrl: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(structs_6.Url.reified()), field.iconUrl) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== CoinMetadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(CoinMetadata.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return CoinMetadata.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCoinMetadata(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CoinMetadata object`);
    } return CoinMetadata.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCoinMetadata(data.bcs.type)) {
                throw new Error(`object at is not a CoinMetadata object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return CoinMetadata.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CoinMetadata.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CoinMetadata object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCoinMetadata(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CoinMetadata object`);
        }
        return CoinMetadata.fromSuiObjectData(typeArg, res.data);
    }
}
exports.CoinMetadata = CoinMetadata;
CoinMetadata.$typeName = `${index_1.PKG_V28}::coin::CoinMetadata`;
CoinMetadata.$numTypeParams = 1;
CoinMetadata.$isPhantom = [true,];
/* ============================== CurrencyCreated =============================== */
function isCurrencyCreated(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::coin::CurrencyCreated` + '<'); }
class CurrencyCreated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CurrencyCreated.$typeName;
        this.$isPhantom = CurrencyCreated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CurrencyCreated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.decimals = fields.decimals;
    }
    static reified(T) { return { typeName: CurrencyCreated.$typeName, fullTypeName: (0, util_1.composeSuiType)(CurrencyCreated.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: CurrencyCreated.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => CurrencyCreated.fromFields(T, fields), fromFieldsWithTypes: (item) => CurrencyCreated.fromFieldsWithTypes(T, item), fromBcs: (data) => CurrencyCreated.fromBcs(T, data), bcs: CurrencyCreated.bcs, fromJSONField: (field) => CurrencyCreated.fromJSONField(T, field), fromJSON: (json) => CurrencyCreated.fromJSON(T, json), fromSuiParsedData: (content) => CurrencyCreated.fromSuiParsedData(T, content), fromSuiObjectData: (content) => CurrencyCreated.fromSuiObjectData(T, content), fetch: async (client, id) => CurrencyCreated.fetch(client, T, id), new: (fields) => { return new CurrencyCreated([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return CurrencyCreated.reified; }
    static phantom(T) { return (0, reified_1.phantom)(CurrencyCreated.reified(T)); }
    static get p() { return CurrencyCreated.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("CurrencyCreated", {
            decimals: bcs_1.bcs.u8()
        });
    }
    ;
    static fromFields(typeArg, fields) { return CurrencyCreated.reified(typeArg).new({ decimals: (0, reified_1.decodeFromFields)("u8", fields.decimals) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isCurrencyCreated(item.type)) {
            throw new Error("not a CurrencyCreated type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return CurrencyCreated.reified(typeArg).new({ decimals: (0, reified_1.decodeFromFieldsWithTypes)("u8", item.fields.decimals) });
    }
    static fromBcs(typeArg, data) { return CurrencyCreated.fromFields(typeArg, CurrencyCreated.bcs.parse(data)); }
    toJSONField() {
        return {
            decimals: this.decimals,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return CurrencyCreated.reified(typeArg).new({ decimals: (0, reified_1.decodeFromJSONField)("u8", field.decimals) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== CurrencyCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(CurrencyCreated.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return CurrencyCreated.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurrencyCreated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CurrencyCreated object`);
    } return CurrencyCreated.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurrencyCreated(data.bcs.type)) {
                throw new Error(`object at is not a CurrencyCreated object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return CurrencyCreated.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CurrencyCreated.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CurrencyCreated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurrencyCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CurrencyCreated object`);
        }
        return CurrencyCreated.fromSuiObjectData(typeArg, res.data);
    }
}
exports.CurrencyCreated = CurrencyCreated;
CurrencyCreated.$typeName = `${index_1.PKG_V28}::coin::CurrencyCreated`;
CurrencyCreated.$numTypeParams = 1;
CurrencyCreated.$isPhantom = [true,];
/* ============================== DenyCap =============================== */
function isDenyCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::coin::DenyCap` + '<'); }
class DenyCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DenyCap.$typeName;
        this.$isPhantom = DenyCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DenyCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
    }
    static reified(T) { return { typeName: DenyCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(DenyCap.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: DenyCap.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => DenyCap.fromFields(T, fields), fromFieldsWithTypes: (item) => DenyCap.fromFieldsWithTypes(T, item), fromBcs: (data) => DenyCap.fromBcs(T, data), bcs: DenyCap.bcs, fromJSONField: (field) => DenyCap.fromJSONField(T, field), fromJSON: (json) => DenyCap.fromJSON(T, json), fromSuiParsedData: (content) => DenyCap.fromSuiParsedData(T, content), fromSuiObjectData: (content) => DenyCap.fromSuiObjectData(T, content), fetch: async (client, id) => DenyCap.fetch(client, T, id), new: (fields) => { return new DenyCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return DenyCap.reified; }
    static phantom(T) { return (0, reified_1.phantom)(DenyCap.reified(T)); }
    static get p() { return DenyCap.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("DenyCap", {
            id: structs_5.UID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return DenyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isDenyCap(item.type)) {
            throw new Error("not a DenyCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DenyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id) });
    }
    static fromBcs(typeArg, data) { return DenyCap.fromFields(typeArg, DenyCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return DenyCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== DenyCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DenyCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DenyCap.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDenyCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DenyCap object`);
    } return DenyCap.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDenyCap(data.bcs.type)) {
                throw new Error(`object at is not a DenyCap object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return DenyCap.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DenyCap.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DenyCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDenyCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DenyCap object`);
        }
        return DenyCap.fromSuiObjectData(typeArg, res.data);
    }
}
exports.DenyCap = DenyCap;
DenyCap.$typeName = `${index_1.PKG_V28}::coin::DenyCap`;
DenyCap.$numTypeParams = 1;
DenyCap.$isPhantom = [true,];
/* ============================== DenyCapV2 =============================== */
function isDenyCapV2(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::coin::DenyCapV2` + '<'); }
class DenyCapV2 {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = DenyCapV2.$typeName;
        this.$isPhantom = DenyCapV2.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(DenyCapV2.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.allowGlobalPause = fields.allowGlobalPause;
    }
    static reified(T) { return { typeName: DenyCapV2.$typeName, fullTypeName: (0, util_1.composeSuiType)(DenyCapV2.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: DenyCapV2.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => DenyCapV2.fromFields(T, fields), fromFieldsWithTypes: (item) => DenyCapV2.fromFieldsWithTypes(T, item), fromBcs: (data) => DenyCapV2.fromBcs(T, data), bcs: DenyCapV2.bcs, fromJSONField: (field) => DenyCapV2.fromJSONField(T, field), fromJSON: (json) => DenyCapV2.fromJSON(T, json), fromSuiParsedData: (content) => DenyCapV2.fromSuiParsedData(T, content), fromSuiObjectData: (content) => DenyCapV2.fromSuiObjectData(T, content), fetch: async (client, id) => DenyCapV2.fetch(client, T, id), new: (fields) => { return new DenyCapV2([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return DenyCapV2.reified; }
    static phantom(T) { return (0, reified_1.phantom)(DenyCapV2.reified(T)); }
    static get p() { return DenyCapV2.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("DenyCapV2", {
            id: structs_5.UID.bcs, allow_global_pause: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(typeArg, fields) { return DenyCapV2.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), allowGlobalPause: (0, reified_1.decodeFromFields)("bool", fields.allow_global_pause) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isDenyCapV2(item.type)) {
            throw new Error("not a DenyCapV2 type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return DenyCapV2.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), allowGlobalPause: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.allow_global_pause) });
    }
    static fromBcs(typeArg, data) { return DenyCapV2.fromFields(typeArg, DenyCapV2.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, allowGlobalPause: this.allowGlobalPause,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return DenyCapV2.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), allowGlobalPause: (0, reified_1.decodeFromJSONField)("bool", field.allowGlobalPause) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== DenyCapV2.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(DenyCapV2.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return DenyCapV2.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isDenyCapV2(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a DenyCapV2 object`);
    } return DenyCapV2.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isDenyCapV2(data.bcs.type)) {
                throw new Error(`object at is not a DenyCapV2 object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return DenyCapV2.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return DenyCapV2.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching DenyCapV2 object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isDenyCapV2(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DenyCapV2 object`);
        }
        return DenyCapV2.fromSuiObjectData(typeArg, res.data);
    }
}
exports.DenyCapV2 = DenyCapV2;
DenyCapV2.$typeName = `${index_1.PKG_V28}::coin::DenyCapV2`;
DenyCapV2.$numTypeParams = 1;
DenyCapV2.$isPhantom = [true,];
/* ============================== RegulatedCoinMetadata =============================== */
function isRegulatedCoinMetadata(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::coin::RegulatedCoinMetadata` + '<'); }
class RegulatedCoinMetadata {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = RegulatedCoinMetadata.$typeName;
        this.$isPhantom = RegulatedCoinMetadata.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(RegulatedCoinMetadata.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.coinMetadataObject = fields.coinMetadataObject;
        ;
        this.denyCapObject = fields.denyCapObject;
    }
    static reified(T) { return { typeName: RegulatedCoinMetadata.$typeName, fullTypeName: (0, util_1.composeSuiType)(RegulatedCoinMetadata.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: RegulatedCoinMetadata.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => RegulatedCoinMetadata.fromFields(T, fields), fromFieldsWithTypes: (item) => RegulatedCoinMetadata.fromFieldsWithTypes(T, item), fromBcs: (data) => RegulatedCoinMetadata.fromBcs(T, data), bcs: RegulatedCoinMetadata.bcs, fromJSONField: (field) => RegulatedCoinMetadata.fromJSONField(T, field), fromJSON: (json) => RegulatedCoinMetadata.fromJSON(T, json), fromSuiParsedData: (content) => RegulatedCoinMetadata.fromSuiParsedData(T, content), fromSuiObjectData: (content) => RegulatedCoinMetadata.fromSuiObjectData(T, content), fetch: async (client, id) => RegulatedCoinMetadata.fetch(client, T, id), new: (fields) => { return new RegulatedCoinMetadata([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return RegulatedCoinMetadata.reified; }
    static phantom(T) { return (0, reified_1.phantom)(RegulatedCoinMetadata.reified(T)); }
    static get p() { return RegulatedCoinMetadata.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("RegulatedCoinMetadata", {
            id: structs_5.UID.bcs, coin_metadata_object: structs_5.ID.bcs, deny_cap_object: structs_5.ID.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return RegulatedCoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), coinMetadataObject: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.coin_metadata_object), denyCapObject: (0, reified_1.decodeFromFields)(structs_5.ID.reified(), fields.deny_cap_object) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isRegulatedCoinMetadata(item.type)) {
            throw new Error("not a RegulatedCoinMetadata type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return RegulatedCoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), coinMetadataObject: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.coin_metadata_object), denyCapObject: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.ID.reified(), item.fields.deny_cap_object) });
    }
    static fromBcs(typeArg, data) { return RegulatedCoinMetadata.fromFields(typeArg, RegulatedCoinMetadata.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, coinMetadataObject: this.coinMetadataObject, denyCapObject: this.denyCapObject,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return RegulatedCoinMetadata.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), coinMetadataObject: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.coinMetadataObject), denyCapObject: (0, reified_1.decodeFromJSONField)(structs_5.ID.reified(), field.denyCapObject) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== RegulatedCoinMetadata.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(RegulatedCoinMetadata.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return RegulatedCoinMetadata.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isRegulatedCoinMetadata(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a RegulatedCoinMetadata object`);
    } return RegulatedCoinMetadata.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isRegulatedCoinMetadata(data.bcs.type)) {
                throw new Error(`object at is not a RegulatedCoinMetadata object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return RegulatedCoinMetadata.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return RegulatedCoinMetadata.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching RegulatedCoinMetadata object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isRegulatedCoinMetadata(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RegulatedCoinMetadata object`);
        }
        return RegulatedCoinMetadata.fromSuiObjectData(typeArg, res.data);
    }
}
exports.RegulatedCoinMetadata = RegulatedCoinMetadata;
RegulatedCoinMetadata.$typeName = `${index_1.PKG_V28}::coin::RegulatedCoinMetadata`;
RegulatedCoinMetadata.$numTypeParams = 1;
RegulatedCoinMetadata.$isPhantom = [true,];
/* ============================== TreasuryCap =============================== */
function isTreasuryCap(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${index_1.PKG_V28}::coin::TreasuryCap` + '<'); }
class TreasuryCap {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = TreasuryCap.$typeName;
        this.$isPhantom = TreasuryCap.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(TreasuryCap.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.totalSupply = fields.totalSupply;
    }
    static reified(T) { return { typeName: TreasuryCap.$typeName, fullTypeName: (0, util_1.composeSuiType)(TreasuryCap.$typeName, ...[(0, reified_1.extractType)(T)]), typeArgs: [(0, reified_1.extractType)(T)], isPhantom: TreasuryCap.$isPhantom, reifiedTypeArgs: [T], fromFields: (fields) => TreasuryCap.fromFields(T, fields), fromFieldsWithTypes: (item) => TreasuryCap.fromFieldsWithTypes(T, item), fromBcs: (data) => TreasuryCap.fromBcs(T, data), bcs: TreasuryCap.bcs, fromJSONField: (field) => TreasuryCap.fromJSONField(T, field), fromJSON: (json) => TreasuryCap.fromJSON(T, json), fromSuiParsedData: (content) => TreasuryCap.fromSuiParsedData(T, content), fromSuiObjectData: (content) => TreasuryCap.fromSuiObjectData(T, content), fetch: async (client, id) => TreasuryCap.fetch(client, T, id), new: (fields) => { return new TreasuryCap([(0, reified_1.extractType)(T)], fields); }, kind: "StructClassReified", }; }
    static get r() { return TreasuryCap.reified; }
    static phantom(T) { return (0, reified_1.phantom)(TreasuryCap.reified(T)); }
    static get p() { return TreasuryCap.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("TreasuryCap", {
            id: structs_5.UID.bcs, total_supply: structs_4.Supply.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return TreasuryCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_5.UID.reified(), fields.id), totalSupply: (0, reified_1.decodeFromFields)(structs_4.Supply.reified(typeArg), fields.total_supply) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isTreasuryCap(item.type)) {
            throw new Error("not a TreasuryCap type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return TreasuryCap.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.UID.reified(), item.fields.id), totalSupply: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Supply.reified(typeArg), item.fields.total_supply) });
    }
    static fromBcs(typeArg, data) { return TreasuryCap.fromFields(typeArg, TreasuryCap.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, totalSupply: this.totalSupply.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return TreasuryCap.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_5.UID.reified(), field.id), totalSupply: (0, reified_1.decodeFromJSONField)(structs_4.Supply.reified(typeArg), field.totalSupply) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== TreasuryCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(TreasuryCap.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return TreasuryCap.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isTreasuryCap(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a TreasuryCap object`);
    } return TreasuryCap.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isTreasuryCap(data.bcs.type)) {
                throw new Error(`object at is not a TreasuryCap object`);
            }
            const gotTypeArgs = (0, util_1.parseTypeName)(data.bcs.type).typeArgs;
            if (gotTypeArgs.length !== 1) {
                throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`);
            }
            ;
            const gotTypeArg = (0, util_1.compressSuiType)(gotTypeArgs[0]);
            const expectedTypeArg = (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg));
            if (gotTypeArg !== (0, util_1.compressSuiType)((0, reified_1.extractType)(typeArg))) {
                throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`);
            }
            ;
            return TreasuryCap.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return TreasuryCap.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching TreasuryCap object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isTreasuryCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a TreasuryCap object`);
        }
        return TreasuryCap.fromSuiObjectData(typeArg, res.data);
    }
}
exports.TreasuryCap = TreasuryCap;
TreasuryCap.$typeName = `${index_1.PKG_V28}::coin::TreasuryCap`;
TreasuryCap.$numTypeParams = 1;
TreasuryCap.$isPhantom = [true,];

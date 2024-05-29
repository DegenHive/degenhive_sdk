"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurnCondition = exports.isBurnCondition = exports.Burn = exports.isBurn = exports.BeesUnwrappedToCoin = exports.isBeesUnwrappedToCoin = exports.BeesTransferred = exports.isBeesTransferred = exports.BEE = exports.isBEE = void 0;
const structs_1 = require("../../_dependencies/source/0x1/string/structs");
const structs_2 = require("../../_dependencies/source/0x2/vec-map/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
/* ============================== BEE =============================== */
function isBEE(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BEE"; }
exports.isBEE = isBEE;
class BEE {
    constructor(typeArgs, fields) {
        this.$typeName = BEE.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BEE.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: BEE.$typeName, fullTypeName: (0, util_1.composeSuiType)(BEE.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BEE.fromFields(fields), fromFieldsWithTypes: (item) => BEE.fromFieldsWithTypes(item), fromBcs: (data) => BEE.fromBcs(data), bcs: BEE.bcs, fromJSONField: (field) => BEE.fromJSONField(field), fromJSON: (json) => BEE.fromJSON(json), fromSuiParsedData: (content) => BEE.fromSuiParsedData(content), fetch: async (client, id) => BEE.fetch(client, id), new: (fields) => { return new BEE([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BEE.reified(); }
    static phantom() { return (0, reified_1.phantom)(BEE.reified()); }
    static get p() { return BEE.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BEE", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return BEE.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isBEE(item.type)) {
            throw new Error("not a BEE type");
        }
        return BEE.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return BEE.fromFields(BEE.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BEE.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== BEE.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BEE.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBEE(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BEE object`);
    } return BEE.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BEE object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBEE(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BEE object`);
        }
        return BEE.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BEE = BEE;
BEE.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BEE";
BEE.$numTypeParams = 0;
/* ============================== BeesTransferred =============================== */
function isBeesTransferred(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesTransferred"; }
exports.isBeesTransferred = isBeesTransferred;
class BeesTransferred {
    constructor(typeArgs, fields) {
        this.$typeName = BeesTransferred.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeesTransferred.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beesToTransfer = fields.beesToTransfer;
        ;
        this.receipient = fields.receipient;
        ;
        this.beesBurnt = fields.beesBurnt;
    }
    static reified() { return { typeName: BeesTransferred.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeesTransferred.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BeesTransferred.fromFields(fields), fromFieldsWithTypes: (item) => BeesTransferred.fromFieldsWithTypes(item), fromBcs: (data) => BeesTransferred.fromBcs(data), bcs: BeesTransferred.bcs, fromJSONField: (field) => BeesTransferred.fromJSONField(field), fromJSON: (json) => BeesTransferred.fromJSON(json), fromSuiParsedData: (content) => BeesTransferred.fromSuiParsedData(content), fetch: async (client, id) => BeesTransferred.fetch(client, id), new: (fields) => { return new BeesTransferred([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeesTransferred.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeesTransferred.reified()); }
    static get p() { return BeesTransferred.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeesTransferred", {
            bees_to_transfer: bcs_1.bcs.u64(), receipient: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), bees_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeesTransferred.reified().new({ beesToTransfer: (0, reified_1.decodeFromFields)("u64", fields.bees_to_transfer), receipient: (0, reified_1.decodeFromFields)("address", fields.receipient), beesBurnt: (0, reified_1.decodeFromFields)("u64", fields.bees_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeesTransferred(item.type)) {
            throw new Error("not a BeesTransferred type");
        }
        return BeesTransferred.reified().new({ beesToTransfer: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_to_transfer), receipient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receipient), beesBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_burnt) });
    }
    static fromBcs(data) { return BeesTransferred.fromFields(BeesTransferred.bcs.parse(data)); }
    toJSONField() {
        return {
            beesToTransfer: this.beesToTransfer.toString(), receipient: this.receipient, beesBurnt: this.beesBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeesTransferred.reified().new({ beesToTransfer: (0, reified_1.decodeFromJSONField)("u64", field.beesToTransfer), receipient: (0, reified_1.decodeFromJSONField)("address", field.receipient), beesBurnt: (0, reified_1.decodeFromJSONField)("u64", field.beesBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeesTransferred.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeesTransferred.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeesTransferred(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeesTransferred object`);
    } return BeesTransferred.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeesTransferred object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeesTransferred(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeesTransferred object`);
        }
        return BeesTransferred.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BeesTransferred = BeesTransferred;
BeesTransferred.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesTransferred";
BeesTransferred.$numTypeParams = 0;
/* ============================== BeesUnwrappedToCoin =============================== */
function isBeesUnwrappedToCoin(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesUnwrappedToCoin"; }
exports.isBeesUnwrappedToCoin = isBeesUnwrappedToCoin;
class BeesUnwrappedToCoin {
    constructor(typeArgs, fields) {
        this.$typeName = BeesUnwrappedToCoin.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeesUnwrappedToCoin.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.beesToUnwrap = fields.beesToUnwrap;
        ;
        this.beesBurnt = fields.beesBurnt;
    }
    static reified() { return { typeName: BeesUnwrappedToCoin.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeesUnwrappedToCoin.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BeesUnwrappedToCoin.fromFields(fields), fromFieldsWithTypes: (item) => BeesUnwrappedToCoin.fromFieldsWithTypes(item), fromBcs: (data) => BeesUnwrappedToCoin.fromBcs(data), bcs: BeesUnwrappedToCoin.bcs, fromJSONField: (field) => BeesUnwrappedToCoin.fromJSONField(field), fromJSON: (json) => BeesUnwrappedToCoin.fromJSON(json), fromSuiParsedData: (content) => BeesUnwrappedToCoin.fromSuiParsedData(content), fetch: async (client, id) => BeesUnwrappedToCoin.fetch(client, id), new: (fields) => { return new BeesUnwrappedToCoin([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeesUnwrappedToCoin.reified(); }
    static phantom() { return (0, reified_1.phantom)(BeesUnwrappedToCoin.reified()); }
    static get p() { return BeesUnwrappedToCoin.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BeesUnwrappedToCoin", {
            bees_to_unwrap: bcs_1.bcs.u64(), bees_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BeesUnwrappedToCoin.reified().new({ beesToUnwrap: (0, reified_1.decodeFromFields)("u64", fields.bees_to_unwrap), beesBurnt: (0, reified_1.decodeFromFields)("u64", fields.bees_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isBeesUnwrappedToCoin(item.type)) {
            throw new Error("not a BeesUnwrappedToCoin type");
        }
        return BeesUnwrappedToCoin.reified().new({ beesToUnwrap: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_to_unwrap), beesBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bees_burnt) });
    }
    static fromBcs(data) { return BeesUnwrappedToCoin.fromFields(BeesUnwrappedToCoin.bcs.parse(data)); }
    toJSONField() {
        return {
            beesToUnwrap: this.beesToUnwrap.toString(), beesBurnt: this.beesBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BeesUnwrappedToCoin.reified().new({ beesToUnwrap: (0, reified_1.decodeFromJSONField)("u64", field.beesToUnwrap), beesBurnt: (0, reified_1.decodeFromJSONField)("u64", field.beesBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== BeesUnwrappedToCoin.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BeesUnwrappedToCoin.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeesUnwrappedToCoin(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeesUnwrappedToCoin object`);
    } return BeesUnwrappedToCoin.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeesUnwrappedToCoin object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeesUnwrappedToCoin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeesUnwrappedToCoin object`);
        }
        return BeesUnwrappedToCoin.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BeesUnwrappedToCoin = BeesUnwrappedToCoin;
BeesUnwrappedToCoin.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BeesUnwrappedToCoin";
BeesUnwrappedToCoin.$numTypeParams = 0;
/* ============================== Burn =============================== */
function isBurn(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::Burn"; }
exports.isBurn = isBurn;
class Burn {
    constructor(typeArgs, fields) {
        this.$typeName = Burn.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(Burn.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: Burn.$typeName, fullTypeName: (0, util_1.composeSuiType)(Burn.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => Burn.fromFields(fields), fromFieldsWithTypes: (item) => Burn.fromFieldsWithTypes(item), fromBcs: (data) => Burn.fromBcs(data), bcs: Burn.bcs, fromJSONField: (field) => Burn.fromJSONField(field), fromJSON: (json) => Burn.fromJSON(json), fromSuiParsedData: (content) => Burn.fromSuiParsedData(content), fetch: async (client, id) => Burn.fetch(client, id), new: (fields) => { return new Burn([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Burn.reified(); }
    static phantom() { return (0, reified_1.phantom)(Burn.reified()); }
    static get p() { return Burn.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Burn", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Burn.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isBurn(item.type)) {
            throw new Error("not a Burn type");
        }
        return Burn.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return Burn.fromFields(Burn.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Burn.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== Burn.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Burn.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBurn(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Burn object`);
    } return Burn.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Burn object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBurn(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Burn object`);
        }
        return Burn.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.Burn = Burn;
Burn.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::Burn";
Burn.$numTypeParams = 0;
/* ============================== BurnCondition =============================== */
function isBurnCondition(type) { type = (0, util_1.compressSuiType)(type); return type === "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BurnCondition"; }
exports.isBurnCondition = isBurnCondition;
class BurnCondition {
    constructor(typeArgs, fields) {
        this.$typeName = BurnCondition.$typeName;
        this.$fullTypeName = (0, util_1.composeSuiType)(BurnCondition.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.percent = fields.percent;
    }
    static reified() { return { typeName: BurnCondition.$typeName, fullTypeName: (0, util_1.composeSuiType)(BurnCondition.$typeName, ...[]), typeArgs: [], reifiedTypeArgs: [], fromFields: (fields) => BurnCondition.fromFields(fields), fromFieldsWithTypes: (item) => BurnCondition.fromFieldsWithTypes(item), fromBcs: (data) => BurnCondition.fromBcs(data), bcs: BurnCondition.bcs, fromJSONField: (field) => BurnCondition.fromJSONField(field), fromJSON: (json) => BurnCondition.fromJSON(json), fromSuiParsedData: (content) => BurnCondition.fromSuiParsedData(content), fetch: async (client, id) => BurnCondition.fetch(client, id), new: (fields) => { return new BurnCondition([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BurnCondition.reified(); }
    static phantom() { return (0, reified_1.phantom)(BurnCondition.reified()); }
    static get p() { return BurnCondition.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BurnCondition", {
            percent: structs_2.VecMap.bcs(structs_1.String.bcs, bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return BurnCondition.reified().new({ percent: (0, reified_1.decodeFromFields)(structs_2.VecMap.reified(structs_1.String.reified(), "u64"), fields.percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isBurnCondition(item.type)) {
            throw new Error("not a BurnCondition type");
        }
        return BurnCondition.reified().new({ percent: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.VecMap.reified(structs_1.String.reified(), "u64"), item.fields.percent) });
    }
    static fromBcs(data) { return BurnCondition.fromFields(BurnCondition.bcs.parse(data)); }
    toJSONField() {
        return {
            percent: this.percent.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BurnCondition.reified().new({ percent: (0, reified_1.decodeFromJSONField)(structs_2.VecMap.reified(structs_1.String.reified(), "u64"), field.percent) }); }
    static fromJSON(json) {
        if (json.$typeName !== BurnCondition.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BurnCondition.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBurnCondition(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BurnCondition object`);
    } return BurnCondition.fromFieldsWithTypes(content); }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BurnCondition object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBurnCondition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BurnCondition object`);
        }
        return BurnCondition.fromBcs((0, bcs_1.fromB64)(res.data.bcs.bcsBytes));
    }
}
exports.BurnCondition = BurnCondition;
BurnCondition.$typeName = "0x3ba4e7a050d6e5a787359a260802c0835b05bdf69be3fad19682a5677de3fdc::bee::BurnCondition";
BurnCondition.$numTypeParams = 0;

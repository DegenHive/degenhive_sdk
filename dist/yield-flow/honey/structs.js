"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoneyUnwrappedToCoin = exports.HoneyTransferred = exports.HONEY = exports.ConsumptionCondition = exports.Consumption = void 0;
exports.isConsumption = isConsumption;
exports.isConsumptionCondition = isConsumptionCondition;
exports.isHONEY = isHONEY;
exports.isHoneyTransferred = isHoneyTransferred;
exports.isHoneyUnwrappedToCoin = isHoneyUnwrappedToCoin;
const structs_1 = require("../../_dependencies/source/0x1/string/structs");
const structs_2 = require("../../_dependencies/source/0x2/vec-map/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const bcs_1 = require("@mysten/bcs");
const __1 = require("..");
const PUBLISHED_AT = __1.yieldflow.PUBLISHED_AT;
const PKG_V1 = __1.yieldflow.PKG_V1;
/* ============================== Consumption =============================== */
function isConsumption(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::honey::Consumption`; }
class Consumption {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = Consumption.$typeName;
        this.$isPhantom = Consumption.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(Consumption.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: Consumption.$typeName, fullTypeName: (0, util_1.composeSuiType)(Consumption.$typeName, ...[]), typeArgs: [], isPhantom: Consumption.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => Consumption.fromFields(fields), fromFieldsWithTypes: (item) => Consumption.fromFieldsWithTypes(item), fromBcs: (data) => Consumption.fromBcs(data), bcs: Consumption.bcs, fromJSONField: (field) => Consumption.fromJSONField(field), fromJSON: (json) => Consumption.fromJSON(json), fromSuiParsedData: (content) => Consumption.fromSuiParsedData(content), fromSuiObjectData: (content) => Consumption.fromSuiObjectData(content), fetch: async (client, id) => Consumption.fetch(client, id), new: (fields) => { return new Consumption([], fields); }, kind: "StructClassReified", }; }
    static get r() { return Consumption.reified(); }
    static phantom() { return (0, reified_1.phantom)(Consumption.reified()); }
    static get p() { return Consumption.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("Consumption", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return Consumption.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isConsumption(item.type)) {
            throw new Error("not a Consumption type");
        }
        return Consumption.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return Consumption.fromFields(Consumption.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return Consumption.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== Consumption.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return Consumption.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConsumption(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a Consumption object`);
    } return Consumption.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConsumption(data.bcs.type)) {
                throw new Error(`object at is not a Consumption object`);
            }
            return Consumption.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Consumption.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching Consumption object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConsumption(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Consumption object`);
        }
        return Consumption.fromSuiObjectData(res.data);
    }
}
exports.Consumption = Consumption;
Consumption.$typeName = `${PKG_V1}::honey::Consumption`;
Consumption.$numTypeParams = 0;
Consumption.$isPhantom = [];
/* ============================== ConsumptionCondition =============================== */
function isConsumptionCondition(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::honey::ConsumptionCondition`; }
class ConsumptionCondition {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = ConsumptionCondition.$typeName;
        this.$isPhantom = ConsumptionCondition.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(ConsumptionCondition.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.percent = fields.percent;
    }
    static reified() { return { typeName: ConsumptionCondition.$typeName, fullTypeName: (0, util_1.composeSuiType)(ConsumptionCondition.$typeName, ...[]), typeArgs: [], isPhantom: ConsumptionCondition.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => ConsumptionCondition.fromFields(fields), fromFieldsWithTypes: (item) => ConsumptionCondition.fromFieldsWithTypes(item), fromBcs: (data) => ConsumptionCondition.fromBcs(data), bcs: ConsumptionCondition.bcs, fromJSONField: (field) => ConsumptionCondition.fromJSONField(field), fromJSON: (json) => ConsumptionCondition.fromJSON(json), fromSuiParsedData: (content) => ConsumptionCondition.fromSuiParsedData(content), fromSuiObjectData: (content) => ConsumptionCondition.fromSuiObjectData(content), fetch: async (client, id) => ConsumptionCondition.fetch(client, id), new: (fields) => { return new ConsumptionCondition([], fields); }, kind: "StructClassReified", }; }
    static get r() { return ConsumptionCondition.reified(); }
    static phantom() { return (0, reified_1.phantom)(ConsumptionCondition.reified()); }
    static get p() { return ConsumptionCondition.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("ConsumptionCondition", {
            percent: structs_2.VecMap.bcs(structs_1.String.bcs, bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return ConsumptionCondition.reified().new({ percent: (0, reified_1.decodeFromFields)(structs_2.VecMap.reified(structs_1.String.reified(), "u64"), fields.percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isConsumptionCondition(item.type)) {
            throw new Error("not a ConsumptionCondition type");
        }
        return ConsumptionCondition.reified().new({ percent: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.VecMap.reified(structs_1.String.reified(), "u64"), item.fields.percent) });
    }
    static fromBcs(data) { return ConsumptionCondition.fromFields(ConsumptionCondition.bcs.parse(data)); }
    toJSONField() {
        return {
            percent: this.percent.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConsumptionCondition.reified().new({ percent: (0, reified_1.decodeFromJSONField)(structs_2.VecMap.reified(structs_1.String.reified(), "u64"), field.percent) }); }
    static fromJSON(json) {
        if (json.$typeName !== ConsumptionCondition.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return ConsumptionCondition.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isConsumptionCondition(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a ConsumptionCondition object`);
    } return ConsumptionCondition.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isConsumptionCondition(data.bcs.type)) {
                throw new Error(`object at is not a ConsumptionCondition object`);
            }
            return ConsumptionCondition.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return ConsumptionCondition.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching ConsumptionCondition object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isConsumptionCondition(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ConsumptionCondition object`);
        }
        return ConsumptionCondition.fromSuiObjectData(res.data);
    }
}
exports.ConsumptionCondition = ConsumptionCondition;
ConsumptionCondition.$typeName = `${PKG_V1}::honey::ConsumptionCondition`;
ConsumptionCondition.$numTypeParams = 0;
ConsumptionCondition.$isPhantom = [];
/* ============================== HONEY =============================== */
function isHONEY(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::honey::HONEY`; }
class HONEY {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HONEY.$typeName;
        this.$isPhantom = HONEY.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HONEY.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.dummyField = fields.dummyField;
    }
    static reified() { return { typeName: HONEY.$typeName, fullTypeName: (0, util_1.composeSuiType)(HONEY.$typeName, ...[]), typeArgs: [], isPhantom: HONEY.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HONEY.fromFields(fields), fromFieldsWithTypes: (item) => HONEY.fromFieldsWithTypes(item), fromBcs: (data) => HONEY.fromBcs(data), bcs: HONEY.bcs, fromJSONField: (field) => HONEY.fromJSONField(field), fromJSON: (json) => HONEY.fromJSON(json), fromSuiParsedData: (content) => HONEY.fromSuiParsedData(content), fromSuiObjectData: (content) => HONEY.fromSuiObjectData(content), fetch: async (client, id) => HONEY.fetch(client, id), new: (fields) => { return new HONEY([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HONEY.reified(); }
    static phantom() { return (0, reified_1.phantom)(HONEY.reified()); }
    static get p() { return HONEY.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HONEY", {
            dummy_field: bcs_1.bcs.bool()
        });
    }
    ;
    static fromFields(fields) { return HONEY.reified().new({ dummyField: (0, reified_1.decodeFromFields)("bool", fields.dummy_field) }); }
    static fromFieldsWithTypes(item) {
        if (!isHONEY(item.type)) {
            throw new Error("not a HONEY type");
        }
        return HONEY.reified().new({ dummyField: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.dummy_field) });
    }
    static fromBcs(data) { return HONEY.fromFields(HONEY.bcs.parse(data)); }
    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HONEY.reified().new({ dummyField: (0, reified_1.decodeFromJSONField)("bool", field.dummyField) }); }
    static fromJSON(json) {
        if (json.$typeName !== HONEY.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HONEY.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHONEY(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HONEY object`);
    } return HONEY.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHONEY(data.bcs.type)) {
                throw new Error(`object at is not a HONEY object`);
            }
            return HONEY.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HONEY.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HONEY object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHONEY(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HONEY object`);
        }
        return HONEY.fromSuiObjectData(res.data);
    }
}
exports.HONEY = HONEY;
HONEY.$typeName = `${PKG_V1}::honey::HONEY`;
HONEY.$numTypeParams = 0;
HONEY.$isPhantom = [];
/* ============================== HoneyTransferred =============================== */
function isHoneyTransferred(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::honey::HoneyTransferred`; }
class HoneyTransferred {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyTransferred.$typeName;
        this.$isPhantom = HoneyTransferred.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyTransferred.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.honeyToTransfer = fields.honeyToTransfer;
        ;
        this.receipient = fields.receipient;
        ;
        this.honeyBurnt = fields.honeyBurnt;
    }
    static reified() { return { typeName: HoneyTransferred.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyTransferred.$typeName, ...[]), typeArgs: [], isPhantom: HoneyTransferred.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyTransferred.fromFields(fields), fromFieldsWithTypes: (item) => HoneyTransferred.fromFieldsWithTypes(item), fromBcs: (data) => HoneyTransferred.fromBcs(data), bcs: HoneyTransferred.bcs, fromJSONField: (field) => HoneyTransferred.fromJSONField(field), fromJSON: (json) => HoneyTransferred.fromJSON(json), fromSuiParsedData: (content) => HoneyTransferred.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyTransferred.fromSuiObjectData(content), fetch: async (client, id) => HoneyTransferred.fetch(client, id), new: (fields) => { return new HoneyTransferred([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyTransferred.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyTransferred.reified()); }
    static get p() { return HoneyTransferred.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyTransferred", {
            honey_to_transfer: bcs_1.bcs.u64(), receipient: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), honey_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HoneyTransferred.reified().new({ honeyToTransfer: (0, reified_1.decodeFromFields)("u64", fields.honey_to_transfer), receipient: (0, reified_1.decodeFromFields)("address", fields.receipient), honeyBurnt: (0, reified_1.decodeFromFields)("u64", fields.honey_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyTransferred(item.type)) {
            throw new Error("not a HoneyTransferred type");
        }
        return HoneyTransferred.reified().new({ honeyToTransfer: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_to_transfer), receipient: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.receipient), honeyBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_burnt) });
    }
    static fromBcs(data) { return HoneyTransferred.fromFields(HoneyTransferred.bcs.parse(data)); }
    toJSONField() {
        return {
            honeyToTransfer: this.honeyToTransfer.toString(), receipient: this.receipient, honeyBurnt: this.honeyBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyTransferred.reified().new({ honeyToTransfer: (0, reified_1.decodeFromJSONField)("u64", field.honeyToTransfer), receipient: (0, reified_1.decodeFromJSONField)("address", field.receipient), honeyBurnt: (0, reified_1.decodeFromJSONField)("u64", field.honeyBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyTransferred.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyTransferred.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyTransferred(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyTransferred object`);
    } return HoneyTransferred.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyTransferred(data.bcs.type)) {
                throw new Error(`object at is not a HoneyTransferred object`);
            }
            return HoneyTransferred.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyTransferred.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyTransferred object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyTransferred(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyTransferred object`);
        }
        return HoneyTransferred.fromSuiObjectData(res.data);
    }
}
exports.HoneyTransferred = HoneyTransferred;
HoneyTransferred.$typeName = `${PKG_V1}::honey::HoneyTransferred`;
HoneyTransferred.$numTypeParams = 0;
HoneyTransferred.$isPhantom = [];
/* ============================== HoneyUnwrappedToCoin =============================== */
function isHoneyUnwrappedToCoin(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::honey::HoneyUnwrappedToCoin`; }
class HoneyUnwrappedToCoin {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = HoneyUnwrappedToCoin.$typeName;
        this.$isPhantom = HoneyUnwrappedToCoin.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(HoneyUnwrappedToCoin.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.honeyToUnwrap = fields.honeyToUnwrap;
        ;
        this.honeyBurnt = fields.honeyBurnt;
    }
    static reified() { return { typeName: HoneyUnwrappedToCoin.$typeName, fullTypeName: (0, util_1.composeSuiType)(HoneyUnwrappedToCoin.$typeName, ...[]), typeArgs: [], isPhantom: HoneyUnwrappedToCoin.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => HoneyUnwrappedToCoin.fromFields(fields), fromFieldsWithTypes: (item) => HoneyUnwrappedToCoin.fromFieldsWithTypes(item), fromBcs: (data) => HoneyUnwrappedToCoin.fromBcs(data), bcs: HoneyUnwrappedToCoin.bcs, fromJSONField: (field) => HoneyUnwrappedToCoin.fromJSONField(field), fromJSON: (json) => HoneyUnwrappedToCoin.fromJSON(json), fromSuiParsedData: (content) => HoneyUnwrappedToCoin.fromSuiParsedData(content), fromSuiObjectData: (content) => HoneyUnwrappedToCoin.fromSuiObjectData(content), fetch: async (client, id) => HoneyUnwrappedToCoin.fetch(client, id), new: (fields) => { return new HoneyUnwrappedToCoin([], fields); }, kind: "StructClassReified", }; }
    static get r() { return HoneyUnwrappedToCoin.reified(); }
    static phantom() { return (0, reified_1.phantom)(HoneyUnwrappedToCoin.reified()); }
    static get p() { return HoneyUnwrappedToCoin.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("HoneyUnwrappedToCoin", {
            honey_to_unwrap: bcs_1.bcs.u64(), honey_burnt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return HoneyUnwrappedToCoin.reified().new({ honeyToUnwrap: (0, reified_1.decodeFromFields)("u64", fields.honey_to_unwrap), honeyBurnt: (0, reified_1.decodeFromFields)("u64", fields.honey_burnt) }); }
    static fromFieldsWithTypes(item) {
        if (!isHoneyUnwrappedToCoin(item.type)) {
            throw new Error("not a HoneyUnwrappedToCoin type");
        }
        return HoneyUnwrappedToCoin.reified().new({ honeyToUnwrap: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_to_unwrap), honeyBurnt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.honey_burnt) });
    }
    static fromBcs(data) { return HoneyUnwrappedToCoin.fromFields(HoneyUnwrappedToCoin.bcs.parse(data)); }
    toJSONField() {
        return {
            honeyToUnwrap: this.honeyToUnwrap.toString(), honeyBurnt: this.honeyBurnt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return HoneyUnwrappedToCoin.reified().new({ honeyToUnwrap: (0, reified_1.decodeFromJSONField)("u64", field.honeyToUnwrap), honeyBurnt: (0, reified_1.decodeFromJSONField)("u64", field.honeyBurnt) }); }
    static fromJSON(json) {
        if (json.$typeName !== HoneyUnwrappedToCoin.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return HoneyUnwrappedToCoin.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isHoneyUnwrappedToCoin(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a HoneyUnwrappedToCoin object`);
    } return HoneyUnwrappedToCoin.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isHoneyUnwrappedToCoin(data.bcs.type)) {
                throw new Error(`object at is not a HoneyUnwrappedToCoin object`);
            }
            return HoneyUnwrappedToCoin.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return HoneyUnwrappedToCoin.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching HoneyUnwrappedToCoin object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isHoneyUnwrappedToCoin(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HoneyUnwrappedToCoin object`);
        }
        return HoneyUnwrappedToCoin.fromSuiObjectData(res.data);
    }
}
exports.HoneyUnwrappedToCoin = HoneyUnwrappedToCoin;
HoneyUnwrappedToCoin.$typeName = `${PKG_V1}::honey::HoneyUnwrappedToCoin`;
HoneyUnwrappedToCoin.$numTypeParams = 0;
HoneyUnwrappedToCoin.$isPhantom = [];

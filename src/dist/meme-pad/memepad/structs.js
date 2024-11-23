"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMemePoolCreated = exports.MemesSold = exports.MemesByBee = exports.MemesBought = exports.MemeSupplyConfig = exports.MemePoolMigrationPossible = exports.MemePoolFeeClaimed = exports.MemePool = exports.MemeLaunchPad = exports.MemeCustody = exports.MemeBurnt = exports.LiquidityMigratedToAmmPool = exports.LaunchConfig = exports.CurveParams = exports.BribesAddedForEmissions = exports.BeeBribes = exports.ConsumptionCondition = exports.Consumption = void 0;
exports.isConsumption = isConsumption;
exports.isConsumptionCondition = isConsumptionCondition;
exports.isBeeBribes = isBeeBribes;
exports.isBribesAddedForEmissions = isBribesAddedForEmissions;
exports.isCurveParams = isCurveParams;
exports.isLaunchConfig = isLaunchConfig;
exports.isLiquidityMigratedToAmmPool = isLiquidityMigratedToAmmPool;
exports.isMemeBurnt = isMemeBurnt;
exports.isMemeCustody = isMemeCustody;
exports.isMemeLaunchPad = isMemeLaunchPad;
exports.isMemePool = isMemePool;
exports.isMemePoolFeeClaimed = isMemePoolFeeClaimed;
exports.isMemePoolMigrationPossible = isMemePoolMigrationPossible;
exports.isMemeSupplyConfig = isMemeSupplyConfig;
exports.isMemesBought = isMemesBought;
exports.isMemesByBee = isMemesByBee;
exports.isMemesSold = isMemesSold;
exports.isNewMemePoolCreated = isNewMemePoolCreated;
const reified = require("../../_framework/reified");
const structs_1 = require("../../source/0x1/ascii/structs");
const structs_2 = require("../../source/0x1/option/structs");
const structs_3 = require("../../source/0x1/string/structs");
const structs_4 = require("../../source/0x2/bag/structs");
const structs_5 = require("../../source/0x2/balance/structs");
const structs_6 = require("../../source/0x2/coin/structs");
const structs_7 = require("../../source/0x2/linked-table/structs");
const structs_8 = require("../../source/0x2/object/structs");
const structs_9 = require("../../source/0x2/sui/structs");
const structs_10 = require("../../source/0x2/token/structs");
const structs_11 = require("../../source/0x2/vec-map/structs");
const reified_1 = require("../../_framework/reified");
const util_1 = require("../../_framework/util");
const structs_12 = require("../../dragon-trainer/dragon-trainer/structs");
const bcs_1 = require("@mysten/bcs");
;
const __1 = require("..");
const PUBLISHED_AT = __1.memepad.PUBLISHED_AT;
const PKG_V1 = __1.memepad.PKG_V1;
/* ============================== Consumption =============================== */
function isConsumption(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::Consumption`; }
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
Consumption.$typeName = `${PKG_V1}::memepad::Consumption`;
Consumption.$numTypeParams = 0;
Consumption.$isPhantom = [];
/* ============================== ConsumptionCondition =============================== */
function isConsumptionCondition(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::ConsumptionCondition`; }
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
            percent: structs_11.VecMap.bcs(structs_3.String.bcs, bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return ConsumptionCondition.reified().new({ percent: (0, reified_1.decodeFromFields)(structs_11.VecMap.reified(structs_3.String.reified(), "u64"), fields.percent) }); }
    static fromFieldsWithTypes(item) {
        if (!isConsumptionCondition(item.type)) {
            throw new Error("not a ConsumptionCondition type");
        }
        return ConsumptionCondition.reified().new({ percent: (0, reified_1.decodeFromFieldsWithTypes)(structs_11.VecMap.reified(structs_3.String.reified(), "u64"), item.fields.percent) });
    }
    static fromBcs(data) { return ConsumptionCondition.fromFields(ConsumptionCondition.bcs.parse(data)); }
    toJSONField() {
        return {
            percent: this.percent.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return ConsumptionCondition.reified().new({ percent: (0, reified_1.decodeFromJSONField)(structs_11.VecMap.reified(structs_3.String.reified(), "u64"), field.percent) }); }
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
ConsumptionCondition.$typeName = `${PKG_V1}::memepad::ConsumptionCondition`;
ConsumptionCondition.$numTypeParams = 0;
ConsumptionCondition.$isPhantom = [];
/* ============================== BeeBribes =============================== */
function isBeeBribes(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::memepad::BeeBribes` + '<'); }
class BeeBribes {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BeeBribes.$typeName;
        this.$isPhantom = BeeBribes.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BeeBribes.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memesBribe = fields.memesBribe;
        ;
        this.perCycleBribe = fields.perCycleBribe;
        ;
        this.latestCycle = fields.latestCycle;
        ;
        this.forBeePerCycle = fields.forBeePerCycle;
        ;
        this.beeShareClaimable = fields.beeShareClaimable;
    }
    static reified(X) { return { typeName: BeeBribes.$typeName, fullTypeName: (0, util_1.composeSuiType)(BeeBribes.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: BeeBribes.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => BeeBribes.fromFields(X, fields), fromFieldsWithTypes: (item) => BeeBribes.fromFieldsWithTypes(X, item), fromBcs: (data) => BeeBribes.fromBcs(X, data), bcs: BeeBribes.bcs, fromJSONField: (field) => BeeBribes.fromJSONField(X, field), fromJSON: (json) => BeeBribes.fromJSON(X, json), fromSuiParsedData: (content) => BeeBribes.fromSuiParsedData(X, content), fromSuiObjectData: (content) => BeeBribes.fromSuiObjectData(X, content), fetch: async (client, id) => BeeBribes.fetch(client, X, id), new: (fields) => { return new BeeBribes([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return BeeBribes.reified; }
    static phantom(X) { return (0, reified_1.phantom)(BeeBribes.reified(X)); }
    static get p() { return BeeBribes.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("BeeBribes", {
            memes_bribe: structs_5.Balance.bcs, per_cycle_bribe: bcs_1.bcs.u64(), latest_cycle: bcs_1.bcs.u64(), for_bee_per_cycle: bcs_1.bcs.u64(), bee_share_claimable: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return BeeBribes.reified(typeArg).new({ memesBribe: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(typeArg), fields.memes_bribe), perCycleBribe: (0, reified_1.decodeFromFields)("u64", fields.per_cycle_bribe), latestCycle: (0, reified_1.decodeFromFields)("u64", fields.latest_cycle), forBeePerCycle: (0, reified_1.decodeFromFields)("u64", fields.for_bee_per_cycle), beeShareClaimable: (0, reified_1.decodeFromFields)("u64", fields.bee_share_claimable) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isBeeBribes(item.type)) {
            throw new Error("not a BeeBribes type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return BeeBribes.reified(typeArg).new({ memesBribe: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(typeArg), item.fields.memes_bribe), perCycleBribe: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.per_cycle_bribe), latestCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.latest_cycle), forBeePerCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.for_bee_per_cycle), beeShareClaimable: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_share_claimable) });
    }
    static fromBcs(typeArg, data) { return BeeBribes.fromFields(typeArg, BeeBribes.bcs.parse(data)); }
    toJSONField() {
        return {
            memesBribe: this.memesBribe.toJSONField(), perCycleBribe: this.perCycleBribe.toString(), latestCycle: this.latestCycle.toString(), forBeePerCycle: this.forBeePerCycle.toString(), beeShareClaimable: this.beeShareClaimable.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return BeeBribes.reified(typeArg).new({ memesBribe: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(typeArg), field.memesBribe), perCycleBribe: (0, reified_1.decodeFromJSONField)("u64", field.perCycleBribe), latestCycle: (0, reified_1.decodeFromJSONField)("u64", field.latestCycle), forBeePerCycle: (0, reified_1.decodeFromJSONField)("u64", field.forBeePerCycle), beeShareClaimable: (0, reified_1.decodeFromJSONField)("u64", field.beeShareClaimable) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== BeeBribes.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(BeeBribes.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return BeeBribes.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBeeBribes(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BeeBribes object`);
    } return BeeBribes.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBeeBribes(data.bcs.type)) {
                throw new Error(`object at is not a BeeBribes object`);
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
            return BeeBribes.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BeeBribes.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BeeBribes object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBeeBribes(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BeeBribes object`);
        }
        return BeeBribes.fromSuiObjectData(typeArg, res.data);
    }
}
exports.BeeBribes = BeeBribes;
BeeBribes.$typeName = `${PKG_V1}::memepad::BeeBribes`;
BeeBribes.$numTypeParams = 1;
BeeBribes.$isPhantom = [true,];
/* ============================== BribesAddedForEmissions =============================== */
function isBribesAddedForEmissions(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::BribesAddedForEmissions`; }
class BribesAddedForEmissions {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = BribesAddedForEmissions.$typeName;
        this.$isPhantom = BribesAddedForEmissions.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(BribesAddedForEmissions.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memePoolAddr = fields.memePoolAddr;
        ;
        this.memeIdentifier = fields.memeIdentifier;
        ;
        this.latestCycle = fields.latestCycle;
        ;
        this.remainingMemeForBribes = fields.remainingMemeForBribes;
        ;
        this.beeShareClaimable = fields.beeShareClaimable;
    }
    static reified() { return { typeName: BribesAddedForEmissions.$typeName, fullTypeName: (0, util_1.composeSuiType)(BribesAddedForEmissions.$typeName, ...[]), typeArgs: [], isPhantom: BribesAddedForEmissions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => BribesAddedForEmissions.fromFields(fields), fromFieldsWithTypes: (item) => BribesAddedForEmissions.fromFieldsWithTypes(item), fromBcs: (data) => BribesAddedForEmissions.fromBcs(data), bcs: BribesAddedForEmissions.bcs, fromJSONField: (field) => BribesAddedForEmissions.fromJSONField(field), fromJSON: (json) => BribesAddedForEmissions.fromJSON(json), fromSuiParsedData: (content) => BribesAddedForEmissions.fromSuiParsedData(content), fromSuiObjectData: (content) => BribesAddedForEmissions.fromSuiObjectData(content), fetch: async (client, id) => BribesAddedForEmissions.fetch(client, id), new: (fields) => { return new BribesAddedForEmissions([], fields); }, kind: "StructClassReified", }; }
    static get r() { return BribesAddedForEmissions.reified(); }
    static phantom() { return (0, reified_1.phantom)(BribesAddedForEmissions.reified()); }
    static get p() { return BribesAddedForEmissions.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("BribesAddedForEmissions", {
            meme_pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), meme_identifier: structs_1.String.bcs, latest_cycle: bcs_1.bcs.u64(), remaining_meme_for_bribes: bcs_1.bcs.u64(), bee_share_claimable: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return BribesAddedForEmissions.reified().new({ memePoolAddr: (0, reified_1.decodeFromFields)("address", fields.meme_pool_addr), memeIdentifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.meme_identifier), latestCycle: (0, reified_1.decodeFromFields)("u64", fields.latest_cycle), remainingMemeForBribes: (0, reified_1.decodeFromFields)("u64", fields.remaining_meme_for_bribes), beeShareClaimable: (0, reified_1.decodeFromFields)("u64", fields.bee_share_claimable) }); }
    static fromFieldsWithTypes(item) {
        if (!isBribesAddedForEmissions(item.type)) {
            throw new Error("not a BribesAddedForEmissions type");
        }
        return BribesAddedForEmissions.reified().new({ memePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.meme_pool_addr), memeIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.meme_identifier), latestCycle: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.latest_cycle), remainingMemeForBribes: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.remaining_meme_for_bribes), beeShareClaimable: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_share_claimable) });
    }
    static fromBcs(data) { return BribesAddedForEmissions.fromFields(BribesAddedForEmissions.bcs.parse(data)); }
    toJSONField() {
        return {
            memePoolAddr: this.memePoolAddr, memeIdentifier: this.memeIdentifier, latestCycle: this.latestCycle.toString(), remainingMemeForBribes: this.remainingMemeForBribes.toString(), beeShareClaimable: this.beeShareClaimable.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return BribesAddedForEmissions.reified().new({ memePoolAddr: (0, reified_1.decodeFromJSONField)("address", field.memePoolAddr), memeIdentifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.memeIdentifier), latestCycle: (0, reified_1.decodeFromJSONField)("u64", field.latestCycle), remainingMemeForBribes: (0, reified_1.decodeFromJSONField)("u64", field.remainingMemeForBribes), beeShareClaimable: (0, reified_1.decodeFromJSONField)("u64", field.beeShareClaimable) }); }
    static fromJSON(json) {
        if (json.$typeName !== BribesAddedForEmissions.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return BribesAddedForEmissions.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isBribesAddedForEmissions(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a BribesAddedForEmissions object`);
    } return BribesAddedForEmissions.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isBribesAddedForEmissions(data.bcs.type)) {
                throw new Error(`object at is not a BribesAddedForEmissions object`);
            }
            return BribesAddedForEmissions.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return BribesAddedForEmissions.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching BribesAddedForEmissions object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isBribesAddedForEmissions(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BribesAddedForEmissions object`);
        }
        return BribesAddedForEmissions.fromSuiObjectData(res.data);
    }
}
exports.BribesAddedForEmissions = BribesAddedForEmissions;
BribesAddedForEmissions.$typeName = `${PKG_V1}::memepad::BribesAddedForEmissions`;
BribesAddedForEmissions.$numTypeParams = 0;
BribesAddedForEmissions.$isPhantom = [];
/* ============================== CurveParams =============================== */
function isCurveParams(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::CurveParams`; }
class CurveParams {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = CurveParams.$typeName;
        this.$isPhantom = CurveParams.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(CurveParams.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.a = fields.a;
        ;
        this.b = fields.b;
        ;
        this.swapFeeBps = fields.swapFeeBps;
    }
    static reified() { return { typeName: CurveParams.$typeName, fullTypeName: (0, util_1.composeSuiType)(CurveParams.$typeName, ...[]), typeArgs: [], isPhantom: CurveParams.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => CurveParams.fromFields(fields), fromFieldsWithTypes: (item) => CurveParams.fromFieldsWithTypes(item), fromBcs: (data) => CurveParams.fromBcs(data), bcs: CurveParams.bcs, fromJSONField: (field) => CurveParams.fromJSONField(field), fromJSON: (json) => CurveParams.fromJSON(json), fromSuiParsedData: (content) => CurveParams.fromSuiParsedData(content), fromSuiObjectData: (content) => CurveParams.fromSuiObjectData(content), fetch: async (client, id) => CurveParams.fetch(client, id), new: (fields) => { return new CurveParams([], fields); }, kind: "StructClassReified", }; }
    static get r() { return CurveParams.reified(); }
    static phantom() { return (0, reified_1.phantom)(CurveParams.reified()); }
    static get p() { return CurveParams.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("CurveParams", {
            a: bcs_1.bcs.u64(), b: bcs_1.bcs.u64(), swap_fee_bps: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return CurveParams.reified().new({ a: (0, reified_1.decodeFromFields)("u64", fields.a), b: (0, reified_1.decodeFromFields)("u64", fields.b), swapFeeBps: (0, reified_1.decodeFromFields)("u64", fields.swap_fee_bps) }); }
    static fromFieldsWithTypes(item) {
        if (!isCurveParams(item.type)) {
            throw new Error("not a CurveParams type");
        }
        return CurveParams.reified().new({ a: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.a), b: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.b), swapFeeBps: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.swap_fee_bps) });
    }
    static fromBcs(data) { return CurveParams.fromFields(CurveParams.bcs.parse(data)); }
    toJSONField() {
        return {
            a: this.a.toString(), b: this.b.toString(), swapFeeBps: this.swapFeeBps.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return CurveParams.reified().new({ a: (0, reified_1.decodeFromJSONField)("u64", field.a), b: (0, reified_1.decodeFromJSONField)("u64", field.b), swapFeeBps: (0, reified_1.decodeFromJSONField)("u64", field.swapFeeBps) }); }
    static fromJSON(json) {
        if (json.$typeName !== CurveParams.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return CurveParams.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isCurveParams(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a CurveParams object`);
    } return CurveParams.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isCurveParams(data.bcs.type)) {
                throw new Error(`object at is not a CurveParams object`);
            }
            return CurveParams.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return CurveParams.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching CurveParams object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isCurveParams(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a CurveParams object`);
        }
        return CurveParams.fromSuiObjectData(res.data);
    }
}
exports.CurveParams = CurveParams;
CurveParams.$typeName = `${PKG_V1}::memepad::CurveParams`;
CurveParams.$numTypeParams = 0;
CurveParams.$isPhantom = [];
/* ============================== LaunchConfig =============================== */
function isLaunchConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::LaunchConfig`; }
class LaunchConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LaunchConfig.$typeName;
        this.$isPhantom = LaunchConfig.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LaunchConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.initParams = fields.initParams;
        ;
        this.weights = fields.weights;
    }
    static reified() { return { typeName: LaunchConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(LaunchConfig.$typeName, ...[]), typeArgs: [], isPhantom: LaunchConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LaunchConfig.fromFields(fields), fromFieldsWithTypes: (item) => LaunchConfig.fromFieldsWithTypes(item), fromBcs: (data) => LaunchConfig.fromBcs(data), bcs: LaunchConfig.bcs, fromJSONField: (field) => LaunchConfig.fromJSONField(field), fromJSON: (json) => LaunchConfig.fromJSON(json), fromSuiParsedData: (content) => LaunchConfig.fromSuiParsedData(content), fromSuiObjectData: (content) => LaunchConfig.fromSuiObjectData(content), fetch: async (client, id) => LaunchConfig.fetch(client, id), new: (fields) => { return new LaunchConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LaunchConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(LaunchConfig.reified()); }
    static get p() { return LaunchConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LaunchConfig", {
            init_params: bcs_1.bcs.vector(bcs_1.bcs.u64()), weights: bcs_1.bcs.vector(bcs_1.bcs.u64())
        });
    }
    ;
    static fromFields(fields) { return LaunchConfig.reified().new({ initParams: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.init_params), weights: (0, reified_1.decodeFromFields)(reified.vector("u64"), fields.weights) }); }
    static fromFieldsWithTypes(item) {
        if (!isLaunchConfig(item.type)) {
            throw new Error("not a LaunchConfig type");
        }
        return LaunchConfig.reified().new({ initParams: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.init_params), weights: (0, reified_1.decodeFromFieldsWithTypes)(reified.vector("u64"), item.fields.weights) });
    }
    static fromBcs(data) { return LaunchConfig.fromFields(LaunchConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            initParams: (0, reified_1.fieldToJSON)(`vector<u64>`, this.initParams), weights: (0, reified_1.fieldToJSON)(`vector<u64>`, this.weights),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LaunchConfig.reified().new({ initParams: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.initParams), weights: (0, reified_1.decodeFromJSONField)(reified.vector("u64"), field.weights) }); }
    static fromJSON(json) {
        if (json.$typeName !== LaunchConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LaunchConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLaunchConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LaunchConfig object`);
    } return LaunchConfig.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLaunchConfig(data.bcs.type)) {
                throw new Error(`object at is not a LaunchConfig object`);
            }
            return LaunchConfig.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LaunchConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LaunchConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLaunchConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LaunchConfig object`);
        }
        return LaunchConfig.fromSuiObjectData(res.data);
    }
}
exports.LaunchConfig = LaunchConfig;
LaunchConfig.$typeName = `${PKG_V1}::memepad::LaunchConfig`;
LaunchConfig.$numTypeParams = 0;
LaunchConfig.$isPhantom = [];
/* ============================== LiquidityMigratedToAmmPool =============================== */
function isLiquidityMigratedToAmmPool(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::LiquidityMigratedToAmmPool`; }
class LiquidityMigratedToAmmPool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = LiquidityMigratedToAmmPool.$typeName;
        this.$isPhantom = LiquidityMigratedToAmmPool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(LiquidityMigratedToAmmPool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memePoolAddr = fields.memePoolAddr;
        ;
        this.memeIdentifier = fields.memeIdentifier;
        ;
        this.memeAvailableAmt = fields.memeAvailableAmt;
        ;
        this.suiAvailableAmt = fields.suiAvailableAmt;
    }
    static reified() { return { typeName: LiquidityMigratedToAmmPool.$typeName, fullTypeName: (0, util_1.composeSuiType)(LiquidityMigratedToAmmPool.$typeName, ...[]), typeArgs: [], isPhantom: LiquidityMigratedToAmmPool.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => LiquidityMigratedToAmmPool.fromFields(fields), fromFieldsWithTypes: (item) => LiquidityMigratedToAmmPool.fromFieldsWithTypes(item), fromBcs: (data) => LiquidityMigratedToAmmPool.fromBcs(data), bcs: LiquidityMigratedToAmmPool.bcs, fromJSONField: (field) => LiquidityMigratedToAmmPool.fromJSONField(field), fromJSON: (json) => LiquidityMigratedToAmmPool.fromJSON(json), fromSuiParsedData: (content) => LiquidityMigratedToAmmPool.fromSuiParsedData(content), fromSuiObjectData: (content) => LiquidityMigratedToAmmPool.fromSuiObjectData(content), fetch: async (client, id) => LiquidityMigratedToAmmPool.fetch(client, id), new: (fields) => { return new LiquidityMigratedToAmmPool([], fields); }, kind: "StructClassReified", }; }
    static get r() { return LiquidityMigratedToAmmPool.reified(); }
    static phantom() { return (0, reified_1.phantom)(LiquidityMigratedToAmmPool.reified()); }
    static get p() { return LiquidityMigratedToAmmPool.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("LiquidityMigratedToAmmPool", {
            meme_pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), meme_identifier: structs_1.String.bcs, meme_available_amt: bcs_1.bcs.u64(), sui_available_amt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return LiquidityMigratedToAmmPool.reified().new({ memePoolAddr: (0, reified_1.decodeFromFields)("address", fields.meme_pool_addr), memeIdentifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.meme_identifier), memeAvailableAmt: (0, reified_1.decodeFromFields)("u64", fields.meme_available_amt), suiAvailableAmt: (0, reified_1.decodeFromFields)("u64", fields.sui_available_amt) }); }
    static fromFieldsWithTypes(item) {
        if (!isLiquidityMigratedToAmmPool(item.type)) {
            throw new Error("not a LiquidityMigratedToAmmPool type");
        }
        return LiquidityMigratedToAmmPool.reified().new({ memePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.meme_pool_addr), memeIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.meme_identifier), memeAvailableAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.meme_available_amt), suiAvailableAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_available_amt) });
    }
    static fromBcs(data) { return LiquidityMigratedToAmmPool.fromFields(LiquidityMigratedToAmmPool.bcs.parse(data)); }
    toJSONField() {
        return {
            memePoolAddr: this.memePoolAddr, memeIdentifier: this.memeIdentifier, memeAvailableAmt: this.memeAvailableAmt.toString(), suiAvailableAmt: this.suiAvailableAmt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return LiquidityMigratedToAmmPool.reified().new({ memePoolAddr: (0, reified_1.decodeFromJSONField)("address", field.memePoolAddr), memeIdentifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.memeIdentifier), memeAvailableAmt: (0, reified_1.decodeFromJSONField)("u64", field.memeAvailableAmt), suiAvailableAmt: (0, reified_1.decodeFromJSONField)("u64", field.suiAvailableAmt) }); }
    static fromJSON(json) {
        if (json.$typeName !== LiquidityMigratedToAmmPool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return LiquidityMigratedToAmmPool.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isLiquidityMigratedToAmmPool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a LiquidityMigratedToAmmPool object`);
    } return LiquidityMigratedToAmmPool.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isLiquidityMigratedToAmmPool(data.bcs.type)) {
                throw new Error(`object at is not a LiquidityMigratedToAmmPool object`);
            }
            return LiquidityMigratedToAmmPool.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return LiquidityMigratedToAmmPool.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching LiquidityMigratedToAmmPool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isLiquidityMigratedToAmmPool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LiquidityMigratedToAmmPool object`);
        }
        return LiquidityMigratedToAmmPool.fromSuiObjectData(res.data);
    }
}
exports.LiquidityMigratedToAmmPool = LiquidityMigratedToAmmPool;
LiquidityMigratedToAmmPool.$typeName = `${PKG_V1}::memepad::LiquidityMigratedToAmmPool`;
LiquidityMigratedToAmmPool.$numTypeParams = 0;
LiquidityMigratedToAmmPool.$isPhantom = [];
/* ============================== MemeBurnt =============================== */
function isMemeBurnt(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::MemeBurnt`; }
class MemeBurnt {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemeBurnt.$typeName;
        this.$isPhantom = MemeBurnt.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemeBurnt.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.identifier = fields.identifier;
        ;
        this.memeToBurnAmt = fields.memeToBurnAmt;
    }
    static reified() { return { typeName: MemeBurnt.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemeBurnt.$typeName, ...[]), typeArgs: [], isPhantom: MemeBurnt.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemeBurnt.fromFields(fields), fromFieldsWithTypes: (item) => MemeBurnt.fromFieldsWithTypes(item), fromBcs: (data) => MemeBurnt.fromBcs(data), bcs: MemeBurnt.bcs, fromJSONField: (field) => MemeBurnt.fromJSONField(field), fromJSON: (json) => MemeBurnt.fromJSON(json), fromSuiParsedData: (content) => MemeBurnt.fromSuiParsedData(content), fromSuiObjectData: (content) => MemeBurnt.fromSuiObjectData(content), fetch: async (client, id) => MemeBurnt.fetch(client, id), new: (fields) => { return new MemeBurnt([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemeBurnt.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemeBurnt.reified()); }
    static get p() { return MemeBurnt.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemeBurnt", {
            identifier: structs_1.String.bcs, meme_to_burn_amt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MemeBurnt.reified().new({ identifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.identifier), memeToBurnAmt: (0, reified_1.decodeFromFields)("u64", fields.meme_to_burn_amt) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemeBurnt(item.type)) {
            throw new Error("not a MemeBurnt type");
        }
        return MemeBurnt.reified().new({ identifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.identifier), memeToBurnAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.meme_to_burn_amt) });
    }
    static fromBcs(data) { return MemeBurnt.fromFields(MemeBurnt.bcs.parse(data)); }
    toJSONField() {
        return {
            identifier: this.identifier, memeToBurnAmt: this.memeToBurnAmt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemeBurnt.reified().new({ identifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.identifier), memeToBurnAmt: (0, reified_1.decodeFromJSONField)("u64", field.memeToBurnAmt) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemeBurnt.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemeBurnt.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemeBurnt(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemeBurnt object`);
    } return MemeBurnt.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeBurnt(data.bcs.type)) {
                throw new Error(`object at is not a MemeBurnt object`);
            }
            return MemeBurnt.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemeBurnt.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemeBurnt object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemeBurnt(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemeBurnt object`);
        }
        return MemeBurnt.fromSuiObjectData(res.data);
    }
}
exports.MemeBurnt = MemeBurnt;
MemeBurnt.$typeName = `${PKG_V1}::memepad::MemeBurnt`;
MemeBurnt.$numTypeParams = 0;
MemeBurnt.$isPhantom = [];
/* ============================== MemeCustody =============================== */
function isMemeCustody(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::memepad::MemeCustody` + '<'); }
class MemeCustody {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemeCustody.$typeName;
        this.$isPhantom = MemeCustody.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemeCustody.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.memeBalance = fields.memeBalance;
    }
    static reified(X) { return { typeName: MemeCustody.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemeCustody.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: MemeCustody.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => MemeCustody.fromFields(X, fields), fromFieldsWithTypes: (item) => MemeCustody.fromFieldsWithTypes(X, item), fromBcs: (data) => MemeCustody.fromBcs(X, data), bcs: MemeCustody.bcs, fromJSONField: (field) => MemeCustody.fromJSONField(X, field), fromJSON: (json) => MemeCustody.fromJSON(X, json), fromSuiParsedData: (content) => MemeCustody.fromSuiParsedData(X, content), fromSuiObjectData: (content) => MemeCustody.fromSuiObjectData(X, content), fetch: async (client, id) => MemeCustody.fetch(client, X, id), new: (fields) => { return new MemeCustody([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemeCustody.reified; }
    static phantom(X) { return (0, reified_1.phantom)(MemeCustody.reified(X)); }
    static get p() { return MemeCustody.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("MemeCustody", {
            id: structs_8.UID.bcs, meme_balance: structs_5.Balance.bcs
        });
    }
    ;
    static fromFields(typeArg, fields) { return MemeCustody.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_8.UID.reified(), fields.id), memeBalance: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(typeArg), fields.meme_balance) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isMemeCustody(item.type)) {
            throw new Error("not a MemeCustody type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return MemeCustody.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.UID.reified(), item.fields.id), memeBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(typeArg), item.fields.meme_balance) });
    }
    static fromBcs(typeArg, data) { return MemeCustody.fromFields(typeArg, MemeCustody.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, memeBalance: this.memeBalance.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return MemeCustody.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_8.UID.reified(), field.id), memeBalance: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(typeArg), field.memeBalance) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== MemeCustody.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(MemeCustody.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return MemeCustody.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemeCustody(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemeCustody object`);
    } return MemeCustody.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeCustody(data.bcs.type)) {
                throw new Error(`object at is not a MemeCustody object`);
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
            return MemeCustody.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemeCustody.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemeCustody object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemeCustody(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemeCustody object`);
        }
        return MemeCustody.fromSuiObjectData(typeArg, res.data);
    }
}
exports.MemeCustody = MemeCustody;
MemeCustody.$typeName = `${PKG_V1}::memepad::MemeCustody`;
MemeCustody.$numTypeParams = 1;
MemeCustody.$isPhantom = [true,];
/* ============================== MemeLaunchPad =============================== */
function isMemeLaunchPad(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::MemeLaunchPad`; }
class MemeLaunchPad {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemeLaunchPad.$typeName;
        this.$isPhantom = MemeLaunchPad.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemeLaunchPad.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.memeCap = fields.memeCap;
        ;
        this.masterKey = fields.masterKey;
        ;
        this.curve = fields.curve;
        ;
        this.adminFeePct = fields.adminFeePct;
        ;
        this.isLive = fields.isLive;
        ;
        this.noBeeLaunchEnabled = fields.noBeeLaunchEnabled;
        ;
        this.poolInitFee = fields.poolInitFee;
        ;
        this.meanFdvIncreasePerStep = fields.meanFdvIncreasePerStep;
        ;
        this.marketCapForMigration = fields.marketCapForMigration;
        ;
        this.memeSupplyDist = fields.memeSupplyDist;
        ;
        this.ammPoolConfig = fields.ammPoolConfig;
        ;
        this.supportedMemes = fields.supportedMemes;
        ;
        this.bag = fields.bag;
        ;
        this.version = fields.version;
    }
    static reified() { return { typeName: MemeLaunchPad.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemeLaunchPad.$typeName, ...[]), typeArgs: [], isPhantom: MemeLaunchPad.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemeLaunchPad.fromFields(fields), fromFieldsWithTypes: (item) => MemeLaunchPad.fromFieldsWithTypes(item), fromBcs: (data) => MemeLaunchPad.fromBcs(data), bcs: MemeLaunchPad.bcs, fromJSONField: (field) => MemeLaunchPad.fromJSONField(field), fromJSON: (json) => MemeLaunchPad.fromJSON(json), fromSuiParsedData: (content) => MemeLaunchPad.fromSuiParsedData(content), fromSuiObjectData: (content) => MemeLaunchPad.fromSuiObjectData(content), fetch: async (client, id) => MemeLaunchPad.fetch(client, id), new: (fields) => { return new MemeLaunchPad([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemeLaunchPad.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemeLaunchPad.reified()); }
    static get p() { return MemeLaunchPad.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemeLaunchPad", {
            id: structs_8.UID.bcs, meme_cap: structs_12.MemepadCapability.bcs, master_key: structs_12.GameMasterKey.bcs, curve: CurveParams.bcs, admin_fee_pct: bcs_1.bcs.u64(), is_live: bcs_1.bcs.bool(), no_bee_launch_enabled: bcs_1.bcs.bool(), pool_init_fee: bcs_1.bcs.u64(), mean_fdv_increase_per_step: bcs_1.bcs.u64(), market_cap_for_migration: bcs_1.bcs.u64(), meme_supply_dist: MemeSupplyConfig.bcs, amm_pool_config: LaunchConfig.bcs, supported_memes: structs_7.LinkedTable.bcs(structs_1.String.bcs), bag: structs_4.Bag.bcs, version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MemeLaunchPad.reified().new({ id: (0, reified_1.decodeFromFields)(structs_8.UID.reified(), fields.id), memeCap: (0, reified_1.decodeFromFields)(structs_12.MemepadCapability.reified(), fields.meme_cap), masterKey: (0, reified_1.decodeFromFields)(structs_12.GameMasterKey.reified(), fields.master_key), curve: (0, reified_1.decodeFromFields)(CurveParams.reified(), fields.curve), adminFeePct: (0, reified_1.decodeFromFields)("u64", fields.admin_fee_pct), isLive: (0, reified_1.decodeFromFields)("bool", fields.is_live), noBeeLaunchEnabled: (0, reified_1.decodeFromFields)("bool", fields.no_bee_launch_enabled), poolInitFee: (0, reified_1.decodeFromFields)("u64", fields.pool_init_fee), meanFdvIncreasePerStep: (0, reified_1.decodeFromFields)("u64", fields.mean_fdv_increase_per_step), marketCapForMigration: (0, reified_1.decodeFromFields)("u64", fields.market_cap_for_migration), memeSupplyDist: (0, reified_1.decodeFromFields)(MemeSupplyConfig.reified(), fields.meme_supply_dist), ammPoolConfig: (0, reified_1.decodeFromFields)(LaunchConfig.reified(), fields.amm_pool_config), supportedMemes: (0, reified_1.decodeFromFields)(structs_7.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.supported_memes), bag: (0, reified_1.decodeFromFields)(structs_4.Bag.reified(), fields.bag), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemeLaunchPad(item.type)) {
            throw new Error("not a MemeLaunchPad type");
        }
        return MemeLaunchPad.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.UID.reified(), item.fields.id), memeCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_12.MemepadCapability.reified(), item.fields.meme_cap), masterKey: (0, reified_1.decodeFromFieldsWithTypes)(structs_12.GameMasterKey.reified(), item.fields.master_key), curve: (0, reified_1.decodeFromFieldsWithTypes)(CurveParams.reified(), item.fields.curve), adminFeePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.admin_fee_pct), isLive: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.is_live), noBeeLaunchEnabled: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.no_bee_launch_enabled), poolInitFee: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_init_fee), meanFdvIncreasePerStep: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mean_fdv_increase_per_step), marketCapForMigration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.market_cap_for_migration), memeSupplyDist: (0, reified_1.decodeFromFieldsWithTypes)(MemeSupplyConfig.reified(), item.fields.meme_supply_dist), ammPoolConfig: (0, reified_1.decodeFromFieldsWithTypes)(LaunchConfig.reified(), item.fields.amm_pool_config), supportedMemes: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.supported_memes), bag: (0, reified_1.decodeFromFieldsWithTypes)(structs_4.Bag.reified(), item.fields.bag), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(data) { return MemeLaunchPad.fromFields(MemeLaunchPad.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, memeCap: this.memeCap.toJSONField(), masterKey: this.masterKey.toJSONField(), curve: this.curve.toJSONField(), adminFeePct: this.adminFeePct.toString(), isLive: this.isLive, noBeeLaunchEnabled: this.noBeeLaunchEnabled, poolInitFee: this.poolInitFee.toString(), meanFdvIncreasePerStep: this.meanFdvIncreasePerStep.toString(), marketCapForMigration: this.marketCapForMigration.toString(), memeSupplyDist: this.memeSupplyDist.toJSONField(), ammPoolConfig: this.ammPoolConfig.toJSONField(), supportedMemes: this.supportedMemes.toJSONField(), bag: this.bag.toJSONField(), version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemeLaunchPad.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_8.UID.reified(), field.id), memeCap: (0, reified_1.decodeFromJSONField)(structs_12.MemepadCapability.reified(), field.memeCap), masterKey: (0, reified_1.decodeFromJSONField)(structs_12.GameMasterKey.reified(), field.masterKey), curve: (0, reified_1.decodeFromJSONField)(CurveParams.reified(), field.curve), adminFeePct: (0, reified_1.decodeFromJSONField)("u64", field.adminFeePct), isLive: (0, reified_1.decodeFromJSONField)("bool", field.isLive), noBeeLaunchEnabled: (0, reified_1.decodeFromJSONField)("bool", field.noBeeLaunchEnabled), poolInitFee: (0, reified_1.decodeFromJSONField)("u64", field.poolInitFee), meanFdvIncreasePerStep: (0, reified_1.decodeFromJSONField)("u64", field.meanFdvIncreasePerStep), marketCapForMigration: (0, reified_1.decodeFromJSONField)("u64", field.marketCapForMigration), memeSupplyDist: (0, reified_1.decodeFromJSONField)(MemeSupplyConfig.reified(), field.memeSupplyDist), ammPoolConfig: (0, reified_1.decodeFromJSONField)(LaunchConfig.reified(), field.ammPoolConfig), supportedMemes: (0, reified_1.decodeFromJSONField)(structs_7.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.supportedMemes), bag: (0, reified_1.decodeFromJSONField)(structs_4.Bag.reified(), field.bag), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemeLaunchPad.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemeLaunchPad.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemeLaunchPad(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemeLaunchPad object`);
    } return MemeLaunchPad.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeLaunchPad(data.bcs.type)) {
                throw new Error(`object at is not a MemeLaunchPad object`);
            }
            return MemeLaunchPad.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemeLaunchPad.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemeLaunchPad object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemeLaunchPad(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemeLaunchPad object`);
        }
        return MemeLaunchPad.fromSuiObjectData(res.data);
    }
}
exports.MemeLaunchPad = MemeLaunchPad;
MemeLaunchPad.$typeName = `${PKG_V1}::memepad::MemeLaunchPad`;
MemeLaunchPad.$numTypeParams = 0;
MemeLaunchPad.$isPhantom = [];
/* ============================== MemePool =============================== */
function isMemePool(type) { type = (0, util_1.compressSuiType)(type); return type.startsWith(`${PKG_V1}::memepad::MemePool` + '<'); }
class MemePool {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemePool.$typeName;
        this.$isPhantom = MemePool.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemePool.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.beeVersion = fields.beeVersion;
        ;
        this.totalMemeSupply = fields.totalMemeSupply;
        ;
        this.initTimestamp = fields.initTimestamp;
        ;
        this.twitter = fields.twitter;
        ;
        this.telegram = fields.telegram;
        ;
        this.treasuryCap = fields.treasuryCap;
        ;
        this.feesCollected = fields.feesCollected;
        ;
        this.curve = fields.curve;
        ;
        this.ammPoolType = fields.ammPoolType;
        ;
        this.curStep = fields.curStep;
        ;
        this.memeAvailable = fields.memeAvailable;
        ;
        this.suiAvailable = fields.suiAvailable;
        ;
        this.curMarketCap = fields.curMarketCap;
        ;
        this.memeForPool = fields.memeForPool;
        ;
        this.burnTax = fields.burnTax;
        ;
        this.policyCap = fields.policyCap;
        ;
        this.beeBribes = fields.beeBribes;
        ;
        this.meanFdvIncreasePerStep = fields.meanFdvIncreasePerStep;
        ;
        this.marketCapForMigration = fields.marketCapForMigration;
        ;
        this.hasMigrated = fields.hasMigrated;
        ;
        this.version = fields.version;
    }
    static reified(X) { return { typeName: MemePool.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemePool.$typeName, ...[(0, reified_1.extractType)(X)]), typeArgs: [(0, reified_1.extractType)(X)], isPhantom: MemePool.$isPhantom, reifiedTypeArgs: [X], fromFields: (fields) => MemePool.fromFields(X, fields), fromFieldsWithTypes: (item) => MemePool.fromFieldsWithTypes(X, item), fromBcs: (data) => MemePool.fromBcs(X, data), bcs: MemePool.bcs, fromJSONField: (field) => MemePool.fromJSONField(X, field), fromJSON: (json) => MemePool.fromJSON(X, json), fromSuiParsedData: (content) => MemePool.fromSuiParsedData(X, content), fromSuiObjectData: (content) => MemePool.fromSuiObjectData(X, content), fetch: async (client, id) => MemePool.fetch(client, X, id), new: (fields) => { return new MemePool([(0, reified_1.extractType)(X)], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemePool.reified; }
    static phantom(X) { return (0, reified_1.phantom)(MemePool.reified(X)); }
    static get p() { return MemePool.phantom; }
    static get bcs() {
        return bcs_1.bcs.struct("MemePool", {
            id: structs_8.UID.bcs, bee_version: bcs_1.bcs.u64(), total_meme_supply: bcs_1.bcs.u64(), init_timestamp: bcs_1.bcs.u64(), twitter: structs_3.String.bcs, telegram: structs_3.String.bcs, treasury_cap: structs_6.TreasuryCap.bcs, fees_collected: structs_5.Balance.bcs, curve: CurveParams.bcs, amm_pool_type: structs_1.String.bcs, cur_step: bcs_1.bcs.u64(), meme_available: structs_5.Balance.bcs, sui_available: structs_5.Balance.bcs, cur_market_cap: bcs_1.bcs.u64(), meme_for_pool: structs_5.Balance.bcs, burn_tax: bcs_1.bcs.u64(), policy_cap: structs_2.Option.bcs(structs_10.TokenPolicyCap.bcs), bee_bribes: BeeBribes.bcs, mean_fdv_increase_per_step: bcs_1.bcs.u64(), market_cap_for_migration: bcs_1.bcs.u64(), has_migrated: bcs_1.bcs.bool(), version: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(typeArg, fields) { return MemePool.reified(typeArg).new({ id: (0, reified_1.decodeFromFields)(structs_8.UID.reified(), fields.id), beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), totalMemeSupply: (0, reified_1.decodeFromFields)("u64", fields.total_meme_supply), initTimestamp: (0, reified_1.decodeFromFields)("u64", fields.init_timestamp), twitter: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.twitter), telegram: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.telegram), treasuryCap: (0, reified_1.decodeFromFields)(structs_6.TreasuryCap.reified(typeArg), fields.treasury_cap), feesCollected: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_9.SUI.reified())), fields.fees_collected), curve: (0, reified_1.decodeFromFields)(CurveParams.reified(), fields.curve), ammPoolType: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.amm_pool_type), curStep: (0, reified_1.decodeFromFields)("u64", fields.cur_step), memeAvailable: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(typeArg), fields.meme_available), suiAvailable: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(reified.phantom(structs_9.SUI.reified())), fields.sui_available), curMarketCap: (0, reified_1.decodeFromFields)("u64", fields.cur_market_cap), memeForPool: (0, reified_1.decodeFromFields)(structs_5.Balance.reified(typeArg), fields.meme_for_pool), burnTax: (0, reified_1.decodeFromFields)("u64", fields.burn_tax), policyCap: (0, reified_1.decodeFromFields)(structs_2.Option.reified(structs_10.TokenPolicyCap.reified(typeArg)), fields.policy_cap), beeBribes: (0, reified_1.decodeFromFields)(BeeBribes.reified(typeArg), fields.bee_bribes), meanFdvIncreasePerStep: (0, reified_1.decodeFromFields)("u64", fields.mean_fdv_increase_per_step), marketCapForMigration: (0, reified_1.decodeFromFields)("u64", fields.market_cap_for_migration), hasMigrated: (0, reified_1.decodeFromFields)("bool", fields.has_migrated), version: (0, reified_1.decodeFromFields)("u64", fields.version) }); }
    static fromFieldsWithTypes(typeArg, item) {
        if (!isMemePool(item.type)) {
            throw new Error("not a MemePool type");
        }
        (0, reified_1.assertFieldsWithTypesArgsMatch)(item, [typeArg]);
        return MemePool.reified(typeArg).new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.UID.reified(), item.fields.id), beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), totalMemeSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_meme_supply), initTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_timestamp), twitter: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.twitter), telegram: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.telegram), treasuryCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_6.TreasuryCap.reified(typeArg), item.fields.treasury_cap), feesCollected: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_9.SUI.reified())), item.fields.fees_collected), curve: (0, reified_1.decodeFromFieldsWithTypes)(CurveParams.reified(), item.fields.curve), ammPoolType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.amm_pool_type), curStep: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_step), memeAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(typeArg), item.fields.meme_available), suiAvailable: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(reified.phantom(structs_9.SUI.reified())), item.fields.sui_available), curMarketCap: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_market_cap), memeForPool: (0, reified_1.decodeFromFieldsWithTypes)(structs_5.Balance.reified(typeArg), item.fields.meme_for_pool), burnTax: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.burn_tax), policyCap: (0, reified_1.decodeFromFieldsWithTypes)(structs_2.Option.reified(structs_10.TokenPolicyCap.reified(typeArg)), item.fields.policy_cap), beeBribes: (0, reified_1.decodeFromFieldsWithTypes)(BeeBribes.reified(typeArg), item.fields.bee_bribes), meanFdvIncreasePerStep: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mean_fdv_increase_per_step), marketCapForMigration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.market_cap_for_migration), hasMigrated: (0, reified_1.decodeFromFieldsWithTypes)("bool", item.fields.has_migrated), version: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.version) });
    }
    static fromBcs(typeArg, data) { return MemePool.fromFields(typeArg, MemePool.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, beeVersion: this.beeVersion.toString(), totalMemeSupply: this.totalMemeSupply.toString(), initTimestamp: this.initTimestamp.toString(), twitter: this.twitter, telegram: this.telegram, treasuryCap: this.treasuryCap.toJSONField(), feesCollected: this.feesCollected.toJSONField(), curve: this.curve.toJSONField(), ammPoolType: this.ammPoolType, curStep: this.curStep.toString(), memeAvailable: this.memeAvailable.toJSONField(), suiAvailable: this.suiAvailable.toJSONField(), curMarketCap: this.curMarketCap.toString(), memeForPool: this.memeForPool.toJSONField(), burnTax: this.burnTax.toString(), policyCap: (0, reified_1.fieldToJSON)(`${structs_2.Option.$typeName}<${structs_10.TokenPolicyCap.$typeName}<${this.$typeArgs[0]}>>`, this.policyCap), beeBribes: this.beeBribes.toJSONField(), meanFdvIncreasePerStep: this.meanFdvIncreasePerStep.toString(), marketCapForMigration: this.marketCapForMigration.toString(), hasMigrated: this.hasMigrated, version: this.version.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(typeArg, field) { return MemePool.reified(typeArg).new({ id: (0, reified_1.decodeFromJSONField)(structs_8.UID.reified(), field.id), beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), totalMemeSupply: (0, reified_1.decodeFromJSONField)("u64", field.totalMemeSupply), initTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.initTimestamp), twitter: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.twitter), telegram: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.telegram), treasuryCap: (0, reified_1.decodeFromJSONField)(structs_6.TreasuryCap.reified(typeArg), field.treasuryCap), feesCollected: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_9.SUI.reified())), field.feesCollected), curve: (0, reified_1.decodeFromJSONField)(CurveParams.reified(), field.curve), ammPoolType: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.ammPoolType), curStep: (0, reified_1.decodeFromJSONField)("u64", field.curStep), memeAvailable: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(typeArg), field.memeAvailable), suiAvailable: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(reified.phantom(structs_9.SUI.reified())), field.suiAvailable), curMarketCap: (0, reified_1.decodeFromJSONField)("u64", field.curMarketCap), memeForPool: (0, reified_1.decodeFromJSONField)(structs_5.Balance.reified(typeArg), field.memeForPool), burnTax: (0, reified_1.decodeFromJSONField)("u64", field.burnTax), policyCap: (0, reified_1.decodeFromJSONField)(structs_2.Option.reified(structs_10.TokenPolicyCap.reified(typeArg)), field.policyCap), beeBribes: (0, reified_1.decodeFromJSONField)(BeeBribes.reified(typeArg), field.beeBribes), meanFdvIncreasePerStep: (0, reified_1.decodeFromJSONField)("u64", field.meanFdvIncreasePerStep), marketCapForMigration: (0, reified_1.decodeFromJSONField)("u64", field.marketCapForMigration), hasMigrated: (0, reified_1.decodeFromJSONField)("bool", field.hasMigrated), version: (0, reified_1.decodeFromJSONField)("u64", field.version) }); }
    static fromJSON(typeArg, json) {
        if (json.$typeName !== MemePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        (0, reified_1.assertReifiedTypeArgsMatch)((0, util_1.composeSuiType)(MemePool.$typeName, (0, reified_1.extractType)(typeArg)), json.$typeArgs, [typeArg]);
        return MemePool.fromJSONField(typeArg, json);
    }
    static fromSuiParsedData(typeArg, content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemePool(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemePool object`);
    } return MemePool.fromFieldsWithTypes(typeArg, content); }
    static fromSuiObjectData(typeArg, data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemePool(data.bcs.type)) {
                throw new Error(`object at is not a MemePool object`);
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
            return MemePool.fromBcs(typeArg, (0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemePool.fromSuiParsedData(typeArg, data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, typeArg, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemePool object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemePool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemePool object`);
        }
        return MemePool.fromSuiObjectData(typeArg, res.data);
    }
}
exports.MemePool = MemePool;
MemePool.$typeName = `${PKG_V1}::memepad::MemePool`;
MemePool.$numTypeParams = 1;
MemePool.$isPhantom = [true,];
/* ============================== MemePoolFeeClaimed =============================== */
function isMemePoolFeeClaimed(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::MemePoolFeeClaimed`; }
class MemePoolFeeClaimed {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemePoolFeeClaimed.$typeName;
        this.$isPhantom = MemePoolFeeClaimed.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemePoolFeeClaimed.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memePoolAddr = fields.memePoolAddr;
        ;
        this.adminFeeAmt = fields.adminFeeAmt;
        ;
        this.memePoolFeeAmt = fields.memePoolFeeAmt;
    }
    static reified() { return { typeName: MemePoolFeeClaimed.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemePoolFeeClaimed.$typeName, ...[]), typeArgs: [], isPhantom: MemePoolFeeClaimed.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemePoolFeeClaimed.fromFields(fields), fromFieldsWithTypes: (item) => MemePoolFeeClaimed.fromFieldsWithTypes(item), fromBcs: (data) => MemePoolFeeClaimed.fromBcs(data), bcs: MemePoolFeeClaimed.bcs, fromJSONField: (field) => MemePoolFeeClaimed.fromJSONField(field), fromJSON: (json) => MemePoolFeeClaimed.fromJSON(json), fromSuiParsedData: (content) => MemePoolFeeClaimed.fromSuiParsedData(content), fromSuiObjectData: (content) => MemePoolFeeClaimed.fromSuiObjectData(content), fetch: async (client, id) => MemePoolFeeClaimed.fetch(client, id), new: (fields) => { return new MemePoolFeeClaimed([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemePoolFeeClaimed.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemePoolFeeClaimed.reified()); }
    static get p() { return MemePoolFeeClaimed.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemePoolFeeClaimed", {
            meme_pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), admin_fee_amt: bcs_1.bcs.u64(), meme_pool_fee_amt: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MemePoolFeeClaimed.reified().new({ memePoolAddr: (0, reified_1.decodeFromFields)("address", fields.meme_pool_addr), adminFeeAmt: (0, reified_1.decodeFromFields)("u64", fields.admin_fee_amt), memePoolFeeAmt: (0, reified_1.decodeFromFields)("u64", fields.meme_pool_fee_amt) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemePoolFeeClaimed(item.type)) {
            throw new Error("not a MemePoolFeeClaimed type");
        }
        return MemePoolFeeClaimed.reified().new({ memePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.meme_pool_addr), adminFeeAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.admin_fee_amt), memePoolFeeAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.meme_pool_fee_amt) });
    }
    static fromBcs(data) { return MemePoolFeeClaimed.fromFields(MemePoolFeeClaimed.bcs.parse(data)); }
    toJSONField() {
        return {
            memePoolAddr: this.memePoolAddr, adminFeeAmt: this.adminFeeAmt.toString(), memePoolFeeAmt: this.memePoolFeeAmt.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemePoolFeeClaimed.reified().new({ memePoolAddr: (0, reified_1.decodeFromJSONField)("address", field.memePoolAddr), adminFeeAmt: (0, reified_1.decodeFromJSONField)("u64", field.adminFeeAmt), memePoolFeeAmt: (0, reified_1.decodeFromJSONField)("u64", field.memePoolFeeAmt) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemePoolFeeClaimed.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemePoolFeeClaimed.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemePoolFeeClaimed(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemePoolFeeClaimed object`);
    } return MemePoolFeeClaimed.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemePoolFeeClaimed(data.bcs.type)) {
                throw new Error(`object at is not a MemePoolFeeClaimed object`);
            }
            return MemePoolFeeClaimed.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemePoolFeeClaimed.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemePoolFeeClaimed object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemePoolFeeClaimed(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemePoolFeeClaimed object`);
        }
        return MemePoolFeeClaimed.fromSuiObjectData(res.data);
    }
}
exports.MemePoolFeeClaimed = MemePoolFeeClaimed;
MemePoolFeeClaimed.$typeName = `${PKG_V1}::memepad::MemePoolFeeClaimed`;
MemePoolFeeClaimed.$numTypeParams = 0;
MemePoolFeeClaimed.$isPhantom = [];
/* ============================== MemePoolMigrationPossible =============================== */
function isMemePoolMigrationPossible(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::MemePoolMigrationPossible`; }
class MemePoolMigrationPossible {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemePoolMigrationPossible.$typeName;
        this.$isPhantom = MemePoolMigrationPossible.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemePoolMigrationPossible.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memePoolAddr = fields.memePoolAddr;
        ;
        this.memeIdentifier = fields.memeIdentifier;
        ;
        this.curMarketCap = fields.curMarketCap;
        ;
        this.curStep = fields.curStep;
        ;
        this.cur1MPrice = fields.cur1MPrice;
    }
    static reified() { return { typeName: MemePoolMigrationPossible.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemePoolMigrationPossible.$typeName, ...[]), typeArgs: [], isPhantom: MemePoolMigrationPossible.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemePoolMigrationPossible.fromFields(fields), fromFieldsWithTypes: (item) => MemePoolMigrationPossible.fromFieldsWithTypes(item), fromBcs: (data) => MemePoolMigrationPossible.fromBcs(data), bcs: MemePoolMigrationPossible.bcs, fromJSONField: (field) => MemePoolMigrationPossible.fromJSONField(field), fromJSON: (json) => MemePoolMigrationPossible.fromJSON(json), fromSuiParsedData: (content) => MemePoolMigrationPossible.fromSuiParsedData(content), fromSuiObjectData: (content) => MemePoolMigrationPossible.fromSuiObjectData(content), fetch: async (client, id) => MemePoolMigrationPossible.fetch(client, id), new: (fields) => { return new MemePoolMigrationPossible([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemePoolMigrationPossible.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemePoolMigrationPossible.reified()); }
    static get p() { return MemePoolMigrationPossible.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemePoolMigrationPossible", {
            meme_pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), meme_identifier: structs_1.String.bcs, cur_market_cap: bcs_1.bcs.u64(), cur_step: bcs_1.bcs.u64(), cur_1m_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MemePoolMigrationPossible.reified().new({ memePoolAddr: (0, reified_1.decodeFromFields)("address", fields.meme_pool_addr), memeIdentifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.meme_identifier), curMarketCap: (0, reified_1.decodeFromFields)("u64", fields.cur_market_cap), curStep: (0, reified_1.decodeFromFields)("u64", fields.cur_step), cur1MPrice: (0, reified_1.decodeFromFields)("u64", fields.cur_1m_price) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemePoolMigrationPossible(item.type)) {
            throw new Error("not a MemePoolMigrationPossible type");
        }
        return MemePoolMigrationPossible.reified().new({ memePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.meme_pool_addr), memeIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.meme_identifier), curMarketCap: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_market_cap), curStep: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_step), cur1MPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_1m_price) });
    }
    static fromBcs(data) { return MemePoolMigrationPossible.fromFields(MemePoolMigrationPossible.bcs.parse(data)); }
    toJSONField() {
        return {
            memePoolAddr: this.memePoolAddr, memeIdentifier: this.memeIdentifier, curMarketCap: this.curMarketCap.toString(), curStep: this.curStep.toString(), cur1MPrice: this.cur1MPrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemePoolMigrationPossible.reified().new({ memePoolAddr: (0, reified_1.decodeFromJSONField)("address", field.memePoolAddr), memeIdentifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.memeIdentifier), curMarketCap: (0, reified_1.decodeFromJSONField)("u64", field.curMarketCap), curStep: (0, reified_1.decodeFromJSONField)("u64", field.curStep), cur1MPrice: (0, reified_1.decodeFromJSONField)("u64", field.cur1MPrice) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemePoolMigrationPossible.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemePoolMigrationPossible.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemePoolMigrationPossible(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemePoolMigrationPossible object`);
    } return MemePoolMigrationPossible.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemePoolMigrationPossible(data.bcs.type)) {
                throw new Error(`object at is not a MemePoolMigrationPossible object`);
            }
            return MemePoolMigrationPossible.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemePoolMigrationPossible.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemePoolMigrationPossible object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemePoolMigrationPossible(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemePoolMigrationPossible object`);
        }
        return MemePoolMigrationPossible.fromSuiObjectData(res.data);
    }
}
exports.MemePoolMigrationPossible = MemePoolMigrationPossible;
MemePoolMigrationPossible.$typeName = `${PKG_V1}::memepad::MemePoolMigrationPossible`;
MemePoolMigrationPossible.$numTypeParams = 0;
MemePoolMigrationPossible.$isPhantom = [];
/* ============================== MemeSupplyConfig =============================== */
function isMemeSupplyConfig(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::MemeSupplyConfig`; }
class MemeSupplyConfig {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemeSupplyConfig.$typeName;
        this.$isPhantom = MemeSupplyConfig.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemeSupplyConfig.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.bondingCurvePct = fields.bondingCurvePct;
        ;
        this.poolAmtPct = fields.poolAmtPct;
        ;
        this.bribesAmtPct = fields.bribesAmtPct;
        ;
        this.beeAmtPct = fields.beeAmtPct;
    }
    static reified() { return { typeName: MemeSupplyConfig.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemeSupplyConfig.$typeName, ...[]), typeArgs: [], isPhantom: MemeSupplyConfig.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemeSupplyConfig.fromFields(fields), fromFieldsWithTypes: (item) => MemeSupplyConfig.fromFieldsWithTypes(item), fromBcs: (data) => MemeSupplyConfig.fromBcs(data), bcs: MemeSupplyConfig.bcs, fromJSONField: (field) => MemeSupplyConfig.fromJSONField(field), fromJSON: (json) => MemeSupplyConfig.fromJSON(json), fromSuiParsedData: (content) => MemeSupplyConfig.fromSuiParsedData(content), fromSuiObjectData: (content) => MemeSupplyConfig.fromSuiObjectData(content), fetch: async (client, id) => MemeSupplyConfig.fetch(client, id), new: (fields) => { return new MemeSupplyConfig([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemeSupplyConfig.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemeSupplyConfig.reified()); }
    static get p() { return MemeSupplyConfig.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemeSupplyConfig", {
            bonding_curve_pct: bcs_1.bcs.u64(), pool_amt_pct: bcs_1.bcs.u64(), bribes_amt_pct: bcs_1.bcs.u64(), bee_amt_pct: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MemeSupplyConfig.reified().new({ bondingCurvePct: (0, reified_1.decodeFromFields)("u64", fields.bonding_curve_pct), poolAmtPct: (0, reified_1.decodeFromFields)("u64", fields.pool_amt_pct), bribesAmtPct: (0, reified_1.decodeFromFields)("u64", fields.bribes_amt_pct), beeAmtPct: (0, reified_1.decodeFromFields)("u64", fields.bee_amt_pct) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemeSupplyConfig(item.type)) {
            throw new Error("not a MemeSupplyConfig type");
        }
        return MemeSupplyConfig.reified().new({ bondingCurvePct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bonding_curve_pct), poolAmtPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.pool_amt_pct), bribesAmtPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribes_amt_pct), beeAmtPct: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_amt_pct) });
    }
    static fromBcs(data) { return MemeSupplyConfig.fromFields(MemeSupplyConfig.bcs.parse(data)); }
    toJSONField() {
        return {
            bondingCurvePct: this.bondingCurvePct.toString(), poolAmtPct: this.poolAmtPct.toString(), bribesAmtPct: this.bribesAmtPct.toString(), beeAmtPct: this.beeAmtPct.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemeSupplyConfig.reified().new({ bondingCurvePct: (0, reified_1.decodeFromJSONField)("u64", field.bondingCurvePct), poolAmtPct: (0, reified_1.decodeFromJSONField)("u64", field.poolAmtPct), bribesAmtPct: (0, reified_1.decodeFromJSONField)("u64", field.bribesAmtPct), beeAmtPct: (0, reified_1.decodeFromJSONField)("u64", field.beeAmtPct) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemeSupplyConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemeSupplyConfig.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemeSupplyConfig(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemeSupplyConfig object`);
    } return MemeSupplyConfig.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemeSupplyConfig(data.bcs.type)) {
                throw new Error(`object at is not a MemeSupplyConfig object`);
            }
            return MemeSupplyConfig.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemeSupplyConfig.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemeSupplyConfig object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemeSupplyConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemeSupplyConfig object`);
        }
        return MemeSupplyConfig.fromSuiObjectData(res.data);
    }
}
exports.MemeSupplyConfig = MemeSupplyConfig;
MemeSupplyConfig.$typeName = `${PKG_V1}::memepad::MemeSupplyConfig`;
MemeSupplyConfig.$numTypeParams = 0;
MemeSupplyConfig.$isPhantom = [];
/* ============================== MemesBought =============================== */
function isMemesBought(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::MemesBought`; }
class MemesBought {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemesBought.$typeName;
        this.$isPhantom = MemesBought.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemesBought.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memePoolAddr = fields.memePoolAddr;
        ;
        this.suiSpent = fields.suiSpent;
        ;
        this.memesBought = fields.memesBought;
        ;
        this.protocolFees = fields.protocolFees;
        ;
        this.clock = fields.clock;
        ;
        this.curStep = fields.curStep;
        ;
        this.curMarketCap = fields.curMarketCap;
        ;
        this.cur1MPrice = fields.cur1MPrice;
    }
    static reified() { return { typeName: MemesBought.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemesBought.$typeName, ...[]), typeArgs: [], isPhantom: MemesBought.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemesBought.fromFields(fields), fromFieldsWithTypes: (item) => MemesBought.fromFieldsWithTypes(item), fromBcs: (data) => MemesBought.fromBcs(data), bcs: MemesBought.bcs, fromJSONField: (field) => MemesBought.fromJSONField(field), fromJSON: (json) => MemesBought.fromJSON(json), fromSuiParsedData: (content) => MemesBought.fromSuiParsedData(content), fromSuiObjectData: (content) => MemesBought.fromSuiObjectData(content), fetch: async (client, id) => MemesBought.fetch(client, id), new: (fields) => { return new MemesBought([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemesBought.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemesBought.reified()); }
    static get p() { return MemesBought.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemesBought", {
            meme_pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), sui_spent: bcs_1.bcs.u64(), memes_bought: bcs_1.bcs.u64(), protocol_fees: bcs_1.bcs.u64(), clock: bcs_1.bcs.u64(), cur_step: bcs_1.bcs.u64(), cur_market_cap: bcs_1.bcs.u64(), cur_1m_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MemesBought.reified().new({ memePoolAddr: (0, reified_1.decodeFromFields)("address", fields.meme_pool_addr), suiSpent: (0, reified_1.decodeFromFields)("u64", fields.sui_spent), memesBought: (0, reified_1.decodeFromFields)("u64", fields.memes_bought), protocolFees: (0, reified_1.decodeFromFields)("u64", fields.protocol_fees), clock: (0, reified_1.decodeFromFields)("u64", fields.clock), curStep: (0, reified_1.decodeFromFields)("u64", fields.cur_step), curMarketCap: (0, reified_1.decodeFromFields)("u64", fields.cur_market_cap), cur1MPrice: (0, reified_1.decodeFromFields)("u64", fields.cur_1m_price) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemesBought(item.type)) {
            throw new Error("not a MemesBought type");
        }
        return MemesBought.reified().new({ memePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.meme_pool_addr), suiSpent: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sui_spent), memesBought: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.memes_bought), protocolFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fees), clock: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.clock), curStep: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_step), curMarketCap: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_market_cap), cur1MPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_1m_price) });
    }
    static fromBcs(data) { return MemesBought.fromFields(MemesBought.bcs.parse(data)); }
    toJSONField() {
        return {
            memePoolAddr: this.memePoolAddr, suiSpent: this.suiSpent.toString(), memesBought: this.memesBought.toString(), protocolFees: this.protocolFees.toString(), clock: this.clock.toString(), curStep: this.curStep.toString(), curMarketCap: this.curMarketCap.toString(), cur1MPrice: this.cur1MPrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemesBought.reified().new({ memePoolAddr: (0, reified_1.decodeFromJSONField)("address", field.memePoolAddr), suiSpent: (0, reified_1.decodeFromJSONField)("u64", field.suiSpent), memesBought: (0, reified_1.decodeFromJSONField)("u64", field.memesBought), protocolFees: (0, reified_1.decodeFromJSONField)("u64", field.protocolFees), clock: (0, reified_1.decodeFromJSONField)("u64", field.clock), curStep: (0, reified_1.decodeFromJSONField)("u64", field.curStep), curMarketCap: (0, reified_1.decodeFromJSONField)("u64", field.curMarketCap), cur1MPrice: (0, reified_1.decodeFromJSONField)("u64", field.cur1MPrice) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemesBought.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemesBought.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemesBought(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemesBought object`);
    } return MemesBought.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemesBought(data.bcs.type)) {
                throw new Error(`object at is not a MemesBought object`);
            }
            return MemesBought.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemesBought.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemesBought object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemesBought(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemesBought object`);
        }
        return MemesBought.fromSuiObjectData(res.data);
    }
}
exports.MemesBought = MemesBought;
MemesBought.$typeName = `${PKG_V1}::memepad::MemesBought`;
MemesBought.$numTypeParams = 0;
MemesBought.$isPhantom = [];
/* ============================== MemesByBee =============================== */
function isMemesByBee(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::MemesByBee`; }
class MemesByBee {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemesByBee.$typeName;
        this.$isPhantom = MemesByBee.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemesByBee.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.id = fields.id;
        ;
        this.memes = fields.memes;
    }
    static reified() { return { typeName: MemesByBee.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemesByBee.$typeName, ...[]), typeArgs: [], isPhantom: MemesByBee.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemesByBee.fromFields(fields), fromFieldsWithTypes: (item) => MemesByBee.fromFieldsWithTypes(item), fromBcs: (data) => MemesByBee.fromBcs(data), bcs: MemesByBee.bcs, fromJSONField: (field) => MemesByBee.fromJSONField(field), fromJSON: (json) => MemesByBee.fromJSON(json), fromSuiParsedData: (content) => MemesByBee.fromSuiParsedData(content), fromSuiObjectData: (content) => MemesByBee.fromSuiObjectData(content), fetch: async (client, id) => MemesByBee.fetch(client, id), new: (fields) => { return new MemesByBee([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemesByBee.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemesByBee.reified()); }
    static get p() { return MemesByBee.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemesByBee", {
            id: structs_8.UID.bcs, memes: structs_7.LinkedTable.bcs(structs_1.String.bcs)
        });
    }
    ;
    static fromFields(fields) { return MemesByBee.reified().new({ id: (0, reified_1.decodeFromFields)(structs_8.UID.reified(), fields.id), memes: (0, reified_1.decodeFromFields)(structs_7.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), fields.memes) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemesByBee(item.type)) {
            throw new Error("not a MemesByBee type");
        }
        return MemesByBee.reified().new({ id: (0, reified_1.decodeFromFieldsWithTypes)(structs_8.UID.reified(), item.fields.id), memes: (0, reified_1.decodeFromFieldsWithTypes)(structs_7.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), item.fields.memes) });
    }
    static fromBcs(data) { return MemesByBee.fromFields(MemesByBee.bcs.parse(data)); }
    toJSONField() {
        return {
            id: this.id, memes: this.memes.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemesByBee.reified().new({ id: (0, reified_1.decodeFromJSONField)(structs_8.UID.reified(), field.id), memes: (0, reified_1.decodeFromJSONField)(structs_7.LinkedTable.reified(structs_1.String.reified(), reified.phantom("address")), field.memes) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemesByBee.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemesByBee.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemesByBee(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemesByBee object`);
    } return MemesByBee.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemesByBee(data.bcs.type)) {
                throw new Error(`object at is not a MemesByBee object`);
            }
            return MemesByBee.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemesByBee.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemesByBee object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemesByBee(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemesByBee object`);
        }
        return MemesByBee.fromSuiObjectData(res.data);
    }
}
exports.MemesByBee = MemesByBee;
MemesByBee.$typeName = `${PKG_V1}::memepad::MemesByBee`;
MemesByBee.$numTypeParams = 0;
MemesByBee.$isPhantom = [];
/* ============================== MemesSold =============================== */
function isMemesSold(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::MemesSold`; }
class MemesSold {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = MemesSold.$typeName;
        this.$isPhantom = MemesSold.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(MemesSold.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memePoolAddr = fields.memePoolAddr;
        ;
        this.memesSold = fields.memesSold;
        ;
        this.soldForSui = fields.soldForSui;
        ;
        this.protocolFees = fields.protocolFees;
        ;
        this.clock = fields.clock;
        ;
        this.curStep = fields.curStep;
        ;
        this.curMarketCap = fields.curMarketCap;
        ;
        this.cur1MPrice = fields.cur1MPrice;
    }
    static reified() { return { typeName: MemesSold.$typeName, fullTypeName: (0, util_1.composeSuiType)(MemesSold.$typeName, ...[]), typeArgs: [], isPhantom: MemesSold.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => MemesSold.fromFields(fields), fromFieldsWithTypes: (item) => MemesSold.fromFieldsWithTypes(item), fromBcs: (data) => MemesSold.fromBcs(data), bcs: MemesSold.bcs, fromJSONField: (field) => MemesSold.fromJSONField(field), fromJSON: (json) => MemesSold.fromJSON(json), fromSuiParsedData: (content) => MemesSold.fromSuiParsedData(content), fromSuiObjectData: (content) => MemesSold.fromSuiObjectData(content), fetch: async (client, id) => MemesSold.fetch(client, id), new: (fields) => { return new MemesSold([], fields); }, kind: "StructClassReified", }; }
    static get r() { return MemesSold.reified(); }
    static phantom() { return (0, reified_1.phantom)(MemesSold.reified()); }
    static get p() { return MemesSold.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("MemesSold", {
            meme_pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), memes_sold: bcs_1.bcs.u64(), sold_for_sui: bcs_1.bcs.u64(), protocol_fees: bcs_1.bcs.u64(), clock: bcs_1.bcs.u64(), cur_step: bcs_1.bcs.u64(), cur_market_cap: bcs_1.bcs.u64(), cur_1m_price: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return MemesSold.reified().new({ memePoolAddr: (0, reified_1.decodeFromFields)("address", fields.meme_pool_addr), memesSold: (0, reified_1.decodeFromFields)("u64", fields.memes_sold), soldForSui: (0, reified_1.decodeFromFields)("u64", fields.sold_for_sui), protocolFees: (0, reified_1.decodeFromFields)("u64", fields.protocol_fees), clock: (0, reified_1.decodeFromFields)("u64", fields.clock), curStep: (0, reified_1.decodeFromFields)("u64", fields.cur_step), curMarketCap: (0, reified_1.decodeFromFields)("u64", fields.cur_market_cap), cur1MPrice: (0, reified_1.decodeFromFields)("u64", fields.cur_1m_price) }); }
    static fromFieldsWithTypes(item) {
        if (!isMemesSold(item.type)) {
            throw new Error("not a MemesSold type");
        }
        return MemesSold.reified().new({ memePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.meme_pool_addr), memesSold: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.memes_sold), soldForSui: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.sold_for_sui), protocolFees: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.protocol_fees), clock: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.clock), curStep: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_step), curMarketCap: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_market_cap), cur1MPrice: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.cur_1m_price) });
    }
    static fromBcs(data) { return MemesSold.fromFields(MemesSold.bcs.parse(data)); }
    toJSONField() {
        return {
            memePoolAddr: this.memePoolAddr, memesSold: this.memesSold.toString(), soldForSui: this.soldForSui.toString(), protocolFees: this.protocolFees.toString(), clock: this.clock.toString(), curStep: this.curStep.toString(), curMarketCap: this.curMarketCap.toString(), cur1MPrice: this.cur1MPrice.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return MemesSold.reified().new({ memePoolAddr: (0, reified_1.decodeFromJSONField)("address", field.memePoolAddr), memesSold: (0, reified_1.decodeFromJSONField)("u64", field.memesSold), soldForSui: (0, reified_1.decodeFromJSONField)("u64", field.soldForSui), protocolFees: (0, reified_1.decodeFromJSONField)("u64", field.protocolFees), clock: (0, reified_1.decodeFromJSONField)("u64", field.clock), curStep: (0, reified_1.decodeFromJSONField)("u64", field.curStep), curMarketCap: (0, reified_1.decodeFromJSONField)("u64", field.curMarketCap), cur1MPrice: (0, reified_1.decodeFromJSONField)("u64", field.cur1MPrice) }); }
    static fromJSON(json) {
        if (json.$typeName !== MemesSold.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return MemesSold.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isMemesSold(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a MemesSold object`);
    } return MemesSold.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isMemesSold(data.bcs.type)) {
                throw new Error(`object at is not a MemesSold object`);
            }
            return MemesSold.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return MemesSold.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching MemesSold object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isMemesSold(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a MemesSold object`);
        }
        return MemesSold.fromSuiObjectData(res.data);
    }
}
exports.MemesSold = MemesSold;
MemesSold.$typeName = `${PKG_V1}::memepad::MemesSold`;
MemesSold.$numTypeParams = 0;
MemesSold.$isPhantom = [];
/* ============================== NewMemePoolCreated =============================== */
function isNewMemePoolCreated(type) { type = (0, util_1.compressSuiType)(type); return type === `${PKG_V1}::memepad::NewMemePoolCreated`; }
class NewMemePoolCreated {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = NewMemePoolCreated.$typeName;
        this.$isPhantom = NewMemePoolCreated.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(NewMemePoolCreated.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.memePoolAddr = fields.memePoolAddr;
        ;
        this.ammPoolType = fields.ammPoolType;
        ;
        this.memeIdentifier = fields.memeIdentifier;
        ;
        this.initTimestamp = fields.initTimestamp;
        ;
        this.burnTax = fields.burnTax;
        ;
        this.totalMemeSupply = fields.totalMemeSupply;
        ;
        this.memeTradableAmt = fields.memeTradableAmt;
        ;
        this.memeForPoolAmt = fields.memeForPoolAmt;
        ;
        this.memesForBeeAmt = fields.memesForBeeAmt;
        ;
        this.memeForBribesAmt = fields.memeForBribesAmt;
        ;
        this.bribeCycles = fields.bribeCycles;
        ;
        this.beeVersion = fields.beeVersion;
        ;
        this.trainerAddr = fields.trainerAddr;
        ;
        this.twitter = fields.twitter;
        ;
        this.telegram = fields.telegram;
        ;
        this.meanFdvIncreasePerStep = fields.meanFdvIncreasePerStep;
        ;
        this.marketCapForMigration = fields.marketCapForMigration;
    }
    static reified() { return { typeName: NewMemePoolCreated.$typeName, fullTypeName: (0, util_1.composeSuiType)(NewMemePoolCreated.$typeName, ...[]), typeArgs: [], isPhantom: NewMemePoolCreated.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => NewMemePoolCreated.fromFields(fields), fromFieldsWithTypes: (item) => NewMemePoolCreated.fromFieldsWithTypes(item), fromBcs: (data) => NewMemePoolCreated.fromBcs(data), bcs: NewMemePoolCreated.bcs, fromJSONField: (field) => NewMemePoolCreated.fromJSONField(field), fromJSON: (json) => NewMemePoolCreated.fromJSON(json), fromSuiParsedData: (content) => NewMemePoolCreated.fromSuiParsedData(content), fromSuiObjectData: (content) => NewMemePoolCreated.fromSuiObjectData(content), fetch: async (client, id) => NewMemePoolCreated.fetch(client, id), new: (fields) => { return new NewMemePoolCreated([], fields); }, kind: "StructClassReified", }; }
    static get r() { return NewMemePoolCreated.reified(); }
    static phantom() { return (0, reified_1.phantom)(NewMemePoolCreated.reified()); }
    static get p() { return NewMemePoolCreated.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("NewMemePoolCreated", {
            meme_pool_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), amm_pool_type: structs_1.String.bcs, meme_identifier: structs_1.String.bcs, init_timestamp: bcs_1.bcs.u64(), burn_tax: bcs_1.bcs.u64(), total_meme_supply: bcs_1.bcs.u64(), meme_tradable_amt: bcs_1.bcs.u64(), meme_for_pool_amt: bcs_1.bcs.u64(), memes_for_bee_amt: bcs_1.bcs.u64(), meme_for_bribes_amt: bcs_1.bcs.u64(), bribe_cycles: bcs_1.bcs.u64(), bee_version: bcs_1.bcs.u64(), trainer_addr: bcs_1.bcs.bytes(32).transform({ input: (val) => (0, bcs_1.fromHEX)(val), output: (val) => (0, bcs_1.toHEX)(val), }), twitter: structs_3.String.bcs, telegram: structs_3.String.bcs, mean_fdv_increase_per_step: bcs_1.bcs.u64(), market_cap_for_migration: bcs_1.bcs.u64()
        });
    }
    ;
    static fromFields(fields) { return NewMemePoolCreated.reified().new({ memePoolAddr: (0, reified_1.decodeFromFields)("address", fields.meme_pool_addr), ammPoolType: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.amm_pool_type), memeIdentifier: (0, reified_1.decodeFromFields)(structs_1.String.reified(), fields.meme_identifier), initTimestamp: (0, reified_1.decodeFromFields)("u64", fields.init_timestamp), burnTax: (0, reified_1.decodeFromFields)("u64", fields.burn_tax), totalMemeSupply: (0, reified_1.decodeFromFields)("u64", fields.total_meme_supply), memeTradableAmt: (0, reified_1.decodeFromFields)("u64", fields.meme_tradable_amt), memeForPoolAmt: (0, reified_1.decodeFromFields)("u64", fields.meme_for_pool_amt), memesForBeeAmt: (0, reified_1.decodeFromFields)("u64", fields.memes_for_bee_amt), memeForBribesAmt: (0, reified_1.decodeFromFields)("u64", fields.meme_for_bribes_amt), bribeCycles: (0, reified_1.decodeFromFields)("u64", fields.bribe_cycles), beeVersion: (0, reified_1.decodeFromFields)("u64", fields.bee_version), trainerAddr: (0, reified_1.decodeFromFields)("address", fields.trainer_addr), twitter: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.twitter), telegram: (0, reified_1.decodeFromFields)(structs_3.String.reified(), fields.telegram), meanFdvIncreasePerStep: (0, reified_1.decodeFromFields)("u64", fields.mean_fdv_increase_per_step), marketCapForMigration: (0, reified_1.decodeFromFields)("u64", fields.market_cap_for_migration) }); }
    static fromFieldsWithTypes(item) {
        if (!isNewMemePoolCreated(item.type)) {
            throw new Error("not a NewMemePoolCreated type");
        }
        return NewMemePoolCreated.reified().new({ memePoolAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.meme_pool_addr), ammPoolType: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.amm_pool_type), memeIdentifier: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.String.reified(), item.fields.meme_identifier), initTimestamp: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.init_timestamp), burnTax: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.burn_tax), totalMemeSupply: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.total_meme_supply), memeTradableAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.meme_tradable_amt), memeForPoolAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.meme_for_pool_amt), memesForBeeAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.memes_for_bee_amt), memeForBribesAmt: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.meme_for_bribes_amt), bribeCycles: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bribe_cycles), beeVersion: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.bee_version), trainerAddr: (0, reified_1.decodeFromFieldsWithTypes)("address", item.fields.trainer_addr), twitter: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.twitter), telegram: (0, reified_1.decodeFromFieldsWithTypes)(structs_3.String.reified(), item.fields.telegram), meanFdvIncreasePerStep: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.mean_fdv_increase_per_step), marketCapForMigration: (0, reified_1.decodeFromFieldsWithTypes)("u64", item.fields.market_cap_for_migration) });
    }
    static fromBcs(data) { return NewMemePoolCreated.fromFields(NewMemePoolCreated.bcs.parse(data)); }
    toJSONField() {
        return {
            memePoolAddr: this.memePoolAddr, ammPoolType: this.ammPoolType, memeIdentifier: this.memeIdentifier, initTimestamp: this.initTimestamp.toString(), burnTax: this.burnTax.toString(), totalMemeSupply: this.totalMemeSupply.toString(), memeTradableAmt: this.memeTradableAmt.toString(), memeForPoolAmt: this.memeForPoolAmt.toString(), memesForBeeAmt: this.memesForBeeAmt.toString(), memeForBribesAmt: this.memeForBribesAmt.toString(), bribeCycles: this.bribeCycles.toString(), beeVersion: this.beeVersion.toString(), trainerAddr: this.trainerAddr, twitter: this.twitter, telegram: this.telegram, meanFdvIncreasePerStep: this.meanFdvIncreasePerStep.toString(), marketCapForMigration: this.marketCapForMigration.toString(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return NewMemePoolCreated.reified().new({ memePoolAddr: (0, reified_1.decodeFromJSONField)("address", field.memePoolAddr), ammPoolType: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.ammPoolType), memeIdentifier: (0, reified_1.decodeFromJSONField)(structs_1.String.reified(), field.memeIdentifier), initTimestamp: (0, reified_1.decodeFromJSONField)("u64", field.initTimestamp), burnTax: (0, reified_1.decodeFromJSONField)("u64", field.burnTax), totalMemeSupply: (0, reified_1.decodeFromJSONField)("u64", field.totalMemeSupply), memeTradableAmt: (0, reified_1.decodeFromJSONField)("u64", field.memeTradableAmt), memeForPoolAmt: (0, reified_1.decodeFromJSONField)("u64", field.memeForPoolAmt), memesForBeeAmt: (0, reified_1.decodeFromJSONField)("u64", field.memesForBeeAmt), memeForBribesAmt: (0, reified_1.decodeFromJSONField)("u64", field.memeForBribesAmt), bribeCycles: (0, reified_1.decodeFromJSONField)("u64", field.bribeCycles), beeVersion: (0, reified_1.decodeFromJSONField)("u64", field.beeVersion), trainerAddr: (0, reified_1.decodeFromJSONField)("address", field.trainerAddr), twitter: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.twitter), telegram: (0, reified_1.decodeFromJSONField)(structs_3.String.reified(), field.telegram), meanFdvIncreasePerStep: (0, reified_1.decodeFromJSONField)("u64", field.meanFdvIncreasePerStep), marketCapForMigration: (0, reified_1.decodeFromJSONField)("u64", field.marketCapForMigration) }); }
    static fromJSON(json) {
        if (json.$typeName !== NewMemePoolCreated.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return NewMemePoolCreated.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isNewMemePoolCreated(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a NewMemePoolCreated object`);
    } return NewMemePoolCreated.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isNewMemePoolCreated(data.bcs.type)) {
                throw new Error(`object at is not a NewMemePoolCreated object`);
            }
            return NewMemePoolCreated.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return NewMemePoolCreated.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching NewMemePoolCreated object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isNewMemePoolCreated(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewMemePoolCreated object`);
        }
        return NewMemePoolCreated.fromSuiObjectData(res.data);
    }
}
exports.NewMemePoolCreated = NewMemePoolCreated;
NewMemePoolCreated.$typeName = `${PKG_V1}::memepad::NewMemePoolCreated`;
NewMemePoolCreated.$numTypeParams = 0;
NewMemePoolCreated.$isPhantom = [];

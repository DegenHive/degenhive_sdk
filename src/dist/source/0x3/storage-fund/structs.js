"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageFund = void 0;
exports.isStorageFund = isStorageFund;
const reified = require("../../../_framework/reified");
const reified_1 = require("../../../_framework/reified");
const util_1 = require("../../../_framework/util");
const structs_1 = require("../../0x2/balance/structs");
const structs_2 = require("../../0x2/sui/structs");
const index_1 = require("../index");
const bcs_1 = require("@mysten/bcs");
/* ============================== StorageFund =============================== */
function isStorageFund(type) { type = (0, util_1.compressSuiType)(type); return type === `${index_1.PKG_V17}::storage_fund::StorageFund`; }
class StorageFund {
    constructor(typeArgs, fields) {
        this.__StructClass = true;
        this.$typeName = StorageFund.$typeName;
        this.$isPhantom = StorageFund.$isPhantom;
        this.$fullTypeName = (0, util_1.composeSuiType)(StorageFund.$typeName, ...typeArgs);
        this.$typeArgs = typeArgs;
        this.totalObjectStorageRebates = fields.totalObjectStorageRebates;
        ;
        this.nonRefundableBalance = fields.nonRefundableBalance;
    }
    static reified() { return { typeName: StorageFund.$typeName, fullTypeName: (0, util_1.composeSuiType)(StorageFund.$typeName, ...[]), typeArgs: [], isPhantom: StorageFund.$isPhantom, reifiedTypeArgs: [], fromFields: (fields) => StorageFund.fromFields(fields), fromFieldsWithTypes: (item) => StorageFund.fromFieldsWithTypes(item), fromBcs: (data) => StorageFund.fromBcs(data), bcs: StorageFund.bcs, fromJSONField: (field) => StorageFund.fromJSONField(field), fromJSON: (json) => StorageFund.fromJSON(json), fromSuiParsedData: (content) => StorageFund.fromSuiParsedData(content), fromSuiObjectData: (content) => StorageFund.fromSuiObjectData(content), fetch: async (client, id) => StorageFund.fetch(client, id), new: (fields) => { return new StorageFund([], fields); }, kind: "StructClassReified", }; }
    static get r() { return StorageFund.reified(); }
    static phantom() { return (0, reified_1.phantom)(StorageFund.reified()); }
    static get p() { return StorageFund.phantom(); }
    static get bcs() {
        return bcs_1.bcs.struct("StorageFund", {
            total_object_storage_rebates: structs_1.Balance.bcs, non_refundable_balance: structs_1.Balance.bcs
        });
    }
    ;
    static fromFields(fields) { return StorageFund.reified().new({ totalObjectStorageRebates: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_2.SUI.reified())), fields.total_object_storage_rebates), nonRefundableBalance: (0, reified_1.decodeFromFields)(structs_1.Balance.reified(reified.phantom(structs_2.SUI.reified())), fields.non_refundable_balance) }); }
    static fromFieldsWithTypes(item) {
        if (!isStorageFund(item.type)) {
            throw new Error("not a StorageFund type");
        }
        return StorageFund.reified().new({ totalObjectStorageRebates: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_2.SUI.reified())), item.fields.total_object_storage_rebates), nonRefundableBalance: (0, reified_1.decodeFromFieldsWithTypes)(structs_1.Balance.reified(reified.phantom(structs_2.SUI.reified())), item.fields.non_refundable_balance) });
    }
    static fromBcs(data) { return StorageFund.fromFields(StorageFund.bcs.parse(data)); }
    toJSONField() {
        return {
            totalObjectStorageRebates: this.totalObjectStorageRebates.toJSONField(), nonRefundableBalance: this.nonRefundableBalance.toJSONField(),
        };
    }
    toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() }; }
    static fromJSONField(field) { return StorageFund.reified().new({ totalObjectStorageRebates: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_2.SUI.reified())), field.totalObjectStorageRebates), nonRefundableBalance: (0, reified_1.decodeFromJSONField)(structs_1.Balance.reified(reified.phantom(structs_2.SUI.reified())), field.nonRefundableBalance) }); }
    static fromJSON(json) {
        if (json.$typeName !== StorageFund.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }
        ;
        return StorageFund.fromJSONField(json);
    }
    static fromSuiParsedData(content) { if (content.dataType !== "moveObject") {
        throw new Error("not an object");
    } if (!isStorageFund(content.type)) {
        throw new Error(`object at ${content.fields.id} is not a StorageFund object`);
    } return StorageFund.fromFieldsWithTypes(content); }
    static fromSuiObjectData(data) {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isStorageFund(data.bcs.type)) {
                throw new Error(`object at is not a StorageFund object`);
            }
            return StorageFund.fromBcs((0, bcs_1.fromB64)(data.bcs.bcsBytes));
        }
        if (data.content) {
            return StorageFund.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }
    static async fetch(client, id) {
        var _a, _b;
        const res = await client.getObject({ id, options: { showBcs: true, }, });
        if (res.error) {
            throw new Error(`error fetching StorageFund object at id ${id}: ${res.error.code}`);
        }
        if (((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.bcs) === null || _b === void 0 ? void 0 : _b.dataType) !== "moveObject" || !isStorageFund(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StorageFund object`);
        }
        return StorageFund.fromSuiObjectData(res.data);
    }
}
exports.StorageFund = StorageFund;
StorageFund.$typeName = `${index_1.PKG_V17}::storage_fund::StorageFund`;
StorageFund.$numTypeParams = 0;
StorageFund.$isPhantom = [];

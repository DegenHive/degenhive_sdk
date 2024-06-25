import {ObjectArg, obj, pure} from "../../_framework/util";
import {TransactionArgument, TransactionBlock} from "@mysten/sui.js/transactions";

import { dexdao } from "..";
const PUBLISHED_AT = dexdao.PUBLISHED_AT

export interface DestroyOrTransferBalanceArgs { balance: ObjectArg; recipient: string | TransactionArgument }

export function destroyOrTransferBalance( txb: TransactionBlock, typeArg: string, args: DestroyOrTransferBalanceArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::destroy_or_transfer_balance`, typeArguments: [typeArg], arguments: [ obj(txb, args.balance), pure(txb, args.recipient, `address`) ], }) }

export interface DepositIntoBeeBox0FruitsArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; lpToken: ObjectArg; amount: bigint | TransactionArgument }

export function depositIntoBeeBox0Fruits( txb: TransactionBlock, typeArg: string, args: DepositIntoBeeBox0FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::deposit_into_bee_box_0_fruits`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), obj(txb, args.lpToken), pure(txb, args.amount, `u64`) ], }) }

export interface DepositIntoBeeBox1FruitsArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; lpToken: ObjectArg; amount: bigint | TransactionArgument }

export function depositIntoBeeBox1Fruits( txb: TransactionBlock, typeArgs: [string, string], args: DepositIntoBeeBox1FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::deposit_into_bee_box_1_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), obj(txb, args.lpToken), pure(txb, args.amount, `u64`) ], }) }

export interface DepositIntoBeeBox2FruitsArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; lpToken: ObjectArg; amount: bigint | TransactionArgument }

export function depositIntoBeeBox2Fruits( txb: TransactionBlock, typeArgs: [string, string, string], args: DepositIntoBeeBox2FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::deposit_into_bee_box_2_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), obj(txb, args.lpToken), pure(txb, args.amount, `u64`) ], }) }

export interface DepositIntoBeeBox3FruitsArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; lpToken: ObjectArg; amount: bigint | TransactionArgument }

export function depositIntoBeeBox3Fruits( txb: TransactionBlock, typeArgs: [string, string, string, string], args: DepositIntoBeeBox3FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::deposit_into_bee_box_3_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), obj(txb, args.lpToken), pure(txb, args.amount, `u64`) ], }) }

export interface UnbondFromBeeBox0FruitsArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; unbondAmount: bigint | TransactionArgument }

export function unbondFromBeeBox0Fruits( txb: TransactionBlock, typeArg: string, args: UnbondFromBeeBox0FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_bee_box_0_fruits`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), pure(txb, args.unbondAmount, `u64`) ], }) }

export interface UnbondFromBeeBox1FruitsArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; unbondAmount: bigint | TransactionArgument }

export function unbondFromBeeBox1Fruits( txb: TransactionBlock, typeArgs: [string, string], args: UnbondFromBeeBox1FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_bee_box_1_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), pure(txb, args.unbondAmount, `u64`) ], }) }

export interface UnbondFromBeeBox2FruitsArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; unbondAmount: bigint | TransactionArgument }

export function unbondFromBeeBox2Fruits( txb: TransactionBlock, typeArgs: [string, string, string], args: UnbondFromBeeBox2FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_bee_box_2_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), pure(txb, args.unbondAmount, `u64`) ], }) }

export interface UnbondFromBeeBox3FruitsArgs { poolsGovernor: ObjectArg; poolHive: ObjectArg; hiveProfile: ObjectArg; unbondAmount: bigint | TransactionArgument }

export function unbondFromBeeBox3Fruits( txb: TransactionBlock, typeArgs: [string, string, string, string], args: UnbondFromBeeBox3FruitsArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unbond_from_bee_box_3_fruits`, typeArguments: typeArgs, arguments: [ obj(txb, args.poolsGovernor), obj(txb, args.poolHive), obj(txb, args.hiveProfile), pure(txb, args.unbondAmount, `u64`) ], }) }

export interface UnlockFromBeeBoxArgs { poolHive: ObjectArg; hiveProfile: ObjectArg }

export function unlockFromBeeBox( txb: TransactionBlock, typeArg: string, args: UnlockFromBeeBoxArgs ) { return txb.moveCall({ target: `${PUBLISHED_AT}::router::unlock_from_bee_box`, typeArguments: [typeArg], arguments: [ obj(txb, args.poolHive), obj(txb, args.hiveProfile) ], }) }

import {PUBLISHED_AT} from "..";
import {Transaction} from "@mysten/sui/transactions";

export function assertValidCurve( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::assert_valid_curve`, typeArguments: [typeArg], arguments: [ ], }) }

export function isCurved( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::is_curved`, typeArguments: [typeArg], arguments: [ ], }) }

export function isStable( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::is_stable`, typeArguments: [typeArg], arguments: [ ], }) }

export function isValidCurve( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::is_valid_curve`, typeArguments: [typeArg], arguments: [ ], }) }

export function isWeighted( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::curves::is_weighted`, typeArguments: [typeArg], arguments: [ ], }) }

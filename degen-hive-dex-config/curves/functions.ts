import {TransactionBlock} from "@mysten/sui.js/transactions";

import {config} from ".."
const PUBLISHED_AT = config.PUBLISHED_AT

// export function init( txb: TransactionBlock, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curves::init`, arguments: [ ], }) }

export function assertValidCurve( txb: TransactionBlock, typeArg: string, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curves::assert_valid_curve`, typeArguments: [typeArg], arguments: [ ], }) }

export function isCurved( txb: TransactionBlock, typeArg: string, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curves::is_curved`, typeArguments: [typeArg], arguments: [ ], }) }

export function isStable( txb: TransactionBlock, typeArg: string, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curves::is_stable`, typeArguments: [typeArg], arguments: [ ], }) }

export function isValidCurve( txb: TransactionBlock, typeArg: string, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curves::is_valid_curve`, typeArguments: [typeArg], arguments: [ ], }) }

export function isWeighted( txb: TransactionBlock, typeArg: string, ) { return txb.moveCall({ target: `${PUBLISHED_AT}::curves::is_weighted`, typeArguments: [typeArg], arguments: [ ], }) }

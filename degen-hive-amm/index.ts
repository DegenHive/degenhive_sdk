export namespace twopool {
    export const PACKAGE_ID = "0x77855360f1230d599de98e888baeeb842ff9413103da31d09665bcf7dbc05bed";
    export const PUBLISHED_AT = "0x22d82cfe023a1c651f8b1018775efc7c678781dbd72ec94df34028c472db8d9d";
    export const PKG_V1 = "0x77855360f1230d599de98e888baeeb842ff9413103da31d09665bcf7dbc05bed";
}
export * from './two-pool/functions';
export * from './bee-trade/functions';
export * from './oracle/functions'
export { RemoveLiquidityFromXBeePoolArgs, SwapBeeCoinsArgs, removeLiquidityFromXBeePool, swapBeeCoins } from './two-pool/functions';


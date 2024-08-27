export namespace twopool {
    export const PACKAGE_ID = "0x6ddce619b9240f6a9f824f35cbe1ddb16a293f372811ce1cabf8f2bae1c2dd02";
    export const PUBLISHED_AT = "0x6ddce619b9240f6a9f824f35cbe1ddb16a293f372811ce1cabf8f2bae1c2dd02";
    export const PKG_V1 = "0x6ddce619b9240f6a9f824f35cbe1ddb16a293f372811ce1cabf8f2bae1c2dd02";
}
export * from './two-pool/functions';
export * from './bee-trade/functions';
export * from './oracle/functions'
export { RemoveLiquidityFromXBeePoolArgs, SwapBeeCoinsArgs, removeLiquidityFromXBeePool, swapBeeCoins } from './two-pool/functions';


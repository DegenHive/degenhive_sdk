import { DSuiVault } from './dsui-vault/structs';

export namespace dsuivault {
    export const PACKAGE_ID = "0x53578180d93e5fa7b10334045c4565e3c743f0eb64c89932b14adb1b0baab145";
    export const PUBLISHED_AT = "0x53578180d93e5fa7b10334045c4565e3c743f0eb64c89932b14adb1b0baab145";
    export const PKG_V1 = "0x53578180d93e5fa7b10334045c4565e3c743f0eb64c89932b14adb1b0baab145";
    export const SUI_SYSTEM_STATE = "0x5";
    export const CLOCK = "0x6";
    export const DSUI_VAULT = "0x85aaf87a770b4a09822e7ca3de7f9424a4f58688cfa120f55b294a98d599d402";
}
export * as EntryScriptFunctions from './entry-script/functions';
export * as DSuiVaultFunctions from './dsui-vault/functions';  
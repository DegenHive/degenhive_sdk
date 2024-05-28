import * as hsuiVault from "./hsui-vault/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(hsuiVault.ConfigParams);
loader.register(hsuiVault.EmergencyPauseUpdate);
loader.register(hsuiVault.HSuiVault);
loader.register(hsuiVault.HiveSuiFeeStructureUpdated);
loader.register(hsuiVault.RequestsForEpoch);
loader.register(hsuiVault.RequestsForEpochDestroyed);
loader.register(hsuiVault.StakeOperationProcessed);
loader.register(hsuiVault.StakeSuiRequest);
loader.register(hsuiVault.StakeSuiRequestsProcessed);
loader.register(hsuiVault.StakeWithSelectedValidatorRequestProcessed);
loader.register(hsuiVault.TotalRewardsUpdated);
loader.register(hsuiVault.UnstakeRequest);
loader.register(hsuiVault.UnstakingRequestsProcessed);
loader.register(hsuiVault.UserClaimedSui);
loader.register(hsuiVault.UserUnstakeRequest);
loader.register(hsuiVault.UserUnstakedInstantly);
loader.register(hsuiVault.ValidatorListUpdated);
loader.register(hsuiVault.ValidatorPool);
loader.register(hsuiVault.ValidatorPoolDestroyed);
loader.register(hsuiVault.ValidatorPoolRewardsUpdated);
 }

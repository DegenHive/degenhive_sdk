import * as dsuiVault from "./dsui-vault/structs";
import { StructClassLoader } from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(dsuiVault.ConfigParams);
    loader.register(dsuiVault.DSuiVault);
    loader.register(dsuiVault.DegenSUIFeeStructureUpdated);
    loader.register(dsuiVault.EmergencyPauseUpdate);
    loader.register(dsuiVault.LsdFeeCollected);
    loader.register(dsuiVault.RequestsForEpoch);
    loader.register(dsuiVault.RequestsForEpochDestroyed);
    loader.register(dsuiVault.StakeOperationProcessed);
    loader.register(dsuiVault.StakeSuiRequest);
    loader.register(dsuiVault.StakeSuiRequestsProcessed);
    loader.register(dsuiVault.StakeWithSelectedValidatorRequestProcessed);
    loader.register(dsuiVault.TotalRewardsUpdated);
    loader.register(dsuiVault.UnstakeRequest);
    loader.register(dsuiVault.UserClaimedSui);
    loader.register(dsuiVault.UserUnstakeRequest);
    loader.register(dsuiVault.UserUnstakedInstantly);
    loader.register(dsuiVault.ValidatorListUpdated);
    loader.register(dsuiVault.ValidatorPool);
    loader.register(dsuiVault.ValidatorPoolDestroyed);
}

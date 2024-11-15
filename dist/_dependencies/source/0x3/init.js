"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClasses = registerClasses;
const genesis = require("./genesis/structs");
const stakeSubsidy = require("./stake-subsidy/structs");
const stakingPool = require("./staking-pool/structs");
const storageFund = require("./storage-fund/structs");
const suiSystemStateInner = require("./sui-system-state-inner/structs");
const suiSystem = require("./sui-system/structs");
const validatorCap = require("./validator-cap/structs");
const validatorSet = require("./validator-set/structs");
const validatorWrapper = require("./validator-wrapper/structs");
const validator = require("./validator/structs");
const votingPower = require("./voting-power/structs");
function registerClasses(loader) {
    loader.register(validatorCap.UnverifiedValidatorOperationCap);
    loader.register(validatorCap.ValidatorOperationCap);
    loader.register(stakingPool.FungibleStakedSui);
    loader.register(stakingPool.FungibleStakedSuiData);
    loader.register(stakingPool.FungibleStakedSuiDataKey);
    loader.register(stakingPool.PoolTokenExchangeRate);
    loader.register(stakingPool.StakedSui);
    loader.register(stakingPool.StakingPool);
    loader.register(validator.ConvertingToFungibleStakedSuiEvent);
    loader.register(validator.RedeemingFungibleStakedSuiEvent);
    loader.register(validator.StakingRequestEvent);
    loader.register(validator.UnstakingRequestEvent);
    loader.register(validator.Validator);
    loader.register(validator.ValidatorMetadata);
    loader.register(votingPower.VotingPowerInfo);
    loader.register(votingPower.VotingPowerInfoV2);
    loader.register(validatorWrapper.ValidatorWrapper);
    loader.register(validatorSet.ValidatorEpochInfoEvent);
    loader.register(validatorSet.ValidatorEpochInfoEventV2);
    loader.register(validatorSet.ValidatorJoinEvent);
    loader.register(validatorSet.ValidatorLeaveEvent);
    loader.register(validatorSet.ValidatorSet);
    loader.register(storageFund.StorageFund);
    loader.register(stakeSubsidy.StakeSubsidy);
    loader.register(suiSystemStateInner.SuiSystemStateInner);
    loader.register(suiSystemStateInner.SuiSystemStateInnerV2);
    loader.register(suiSystemStateInner.SystemEpochInfoEvent);
    loader.register(suiSystemStateInner.SystemParameters);
    loader.register(suiSystemStateInner.SystemParametersV2);
    loader.register(suiSystem.SuiSystemState);
    loader.register(genesis.GenesisChainParameters);
    loader.register(genesis.GenesisValidatorMetadata);
    loader.register(genesis.TokenAllocation);
    loader.register(genesis.TokenDistributionSchedule);
}

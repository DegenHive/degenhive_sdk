# DegenHive SDK

<p align="center">
  <img src="../assets/logo.png" alt="DegenHive Logo" width="200"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/degenhive-ai"><img src="https://img.shields.io/npm/v/degenhive" alt="npm version"></a>
  <a href="https://github.com/degenhive/degenhive_sdk/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/degenhive" alt="license"></a>
  <a href="https://discord.gg/ujjNCJFYch"><img src="https://img.shields.io/discord/123456789?style=flat-square&color=7289da&label=discord" alt="Discord"></a>
  <a href="https://twitter.com/DegenHive"><img src="https://img.shields.io/twitter/follow/DegenHive?style=flat-square&color=1da1f2&label=twitter" alt="Twitter"></a>
  <a href="https://www.degenhive.ai"><img src="https://img.shields.io/badge/website-degenhive.ai-blue?style=flat-square" alt="Website"></a>
  <a href="https://guide.degenhive.ai"><img src="https://img.shields.io/badge/docs-latest-brightgreen?style=flat-square" alt="Docs"></a>  
</p>

The official SDK for DegenHive - a comprehensive DeFi platform on the Sui Network featuring a meta-DEX, liquid staking solution, and gamified NFT ecosystem. This SDK provides developers with tools to interact with DegenHive's smart contracts seamlessly.

## Key Features

- 🔄 **Meta-DEX Operations**
  - Two-pool and three-pool AMM swaps
  - Liquidity pool management
  - Flash loans
  
- 🏦 **Liquid Staking (dSUI)**
  - Stake/unstake SUI tokens
  - Instant and delayed unstaking options
  - Validator selection and management
  
- 🎮 **Gamification**
  - Dragon-bee NFT integration
  - Staking and rewards
  - Battle mechanics

## Installation

```bash
npm install degenhive
```


## Usage Examples

### Two-Pool Swaps
The SDK supports efficient token swaps through our two-pool / three-pool AMM system. Here's a basic example:

```typescript
import { RouterFunctions } from "degenhive";
const { swap2poolProvideX, swap2poolProvideY } = RouterFunctions;

// Swap SUI to USDC
const txb = new TransactionBlock();
swap2poolProvideY(txb, [USDC_TYPE, SUI_TYPE, CURVED_TYPE], {
  pool: poolAddress,
  tokenYIn: suiCoin,
  yInAmt: amount,
  xOutMin: minReceived,
  isGiveIn: true
});
```

Check `examples/two_pool.js` for complete implementation details.

### Liquid Staking
Our dSUI vault provides flexible staking options:

```typescript
import { EntryScriptFunctions } from "degenhive";
const { stakeSui, requestInstantUnstake } = EntryScriptFunctions;

// Stake SUI
const txb = new TransactionBlock();
stakeSui(txb, {
  suiCoin: suiToStake,
  toStake: amount
});
```

See `examples/dsui_vault.js` for more staking operations.

## API Reference

### RouterFunctions
- `swap2poolProvideX/Y` - Execute swaps in two-token pools
- `swap3poolProvideX/Y/Z` - Execute swaps in three-token pools

### DSuiVaultFunctions
- `stakeSui` - Stake SUI tokens and receive dSUI
- `requestInstantUnstake` - Unstakes SUI tokens by burning dSUI to receive principal SUI + rewards

## Documentation

For comprehensive documentation, visit our [Developer Guide](https://guide.degenhive.ai) [WIP].

## Support


- [Telegram](https://tg.degenhive.ai/)
- [Discord Community](https://discord.gg/3KXDgm3FKW)
- [Twitter](https://x.com/DegenHive)
- [GitHub Issues](https://github.com/degenhive/degenhive_sdk/issues)

## License

Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

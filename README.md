# DegenHive SDK

<p align="center">
  <img src="assets/logo.png" alt="DegenHive Logo" width="200"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/degenhive_pool_sdk"><img src="https://img.shields.io/npm/v/degenhive_pool_sdk" alt="npm version"></a>
  <a href="https://github.com/degenhive/degenhive_pool_sdk/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/degenhive_pool_sdk" alt="license"></a>
    <a href="https://discord.gg/ujjNCJFYch">
    <img src="https://img.shields.io/discord/123456789?style=flat-square&color=7289da&label=discord" alt="Discord">
  </a>
  <a href="https://twitter.com/DegenHive">
    <img src="https://img.shields.io/twitter/follow/DegenHive?style=flat-square&color=1da1f2&label=twitter" alt="Twitter">
  </a>
  <a href="https://www.degenhive.ai">
    <img src="https://img.shields.io/badge/website-degenhive.ai-blue?style=flat-square" alt="Website">
  </a>
  <a href="https://guide.degenhive.ai">
    <img src="https://img.shields.io/badge/docs-latest-brightgreen?style=flat-square" alt="Docs">
  </a>  
</p>

The official SDK for DegenHive - a gamified meta-DEX and liquid staking platform on the Sui Network. This SDK provides developers with a comprehensive suite of tools to interact with DegenHive's smart contracts, making it easy to integrate DegenHive's features into your applications.

## Features

- 🔄 Meta-DEX Operations : Create pools, simulate and execute swaps, FlashLoans etc
- 🏊‍♂️ Liquidity Pool Management : Add/Remove Liquidity, Stake dragon-bee NFTs to direct emissions and earn rewards
- 🔒 Liquid Staking Functions : Stake / unstake SUI
- 🎮 Dragon-Trainer Functions: Trade, breed and battle with dragon-bee NFTs and earn rewards

## Installation

```bash
npm install degenhive_pool_sdk
```

Add to your `package.json`:
```json
{
  "type": "module"
}
```

## Quick Start

```typescript
import { DegenHiveSDK, Network } from "degenhive_pool_sdk";
import { SuiClient } from "@mysten/sui.js/client";

// Initialize SDK
const sdk = new DegenHiveSDK({
  network: Network.MAINNET, // or Network.TESTNET
  client: new SuiClient({ url: "https://fullnode.mainnet.sui.io:443" })
});
```

## Documentation

For detailed documentation, visit our [Developer Docs](https://docs.degenhive.xyz).

### Core Features

1. **Meta-DEX Operations**
   - Swap tokens
   - Manage liquidity
   - Query pool statistics

2. **Liquid Staking**
   - Stake SUI
   - Claim rewards
   - Manage validator delegations

3. **Gamification**
   - Query player stats
   - Manage in-game assets
   - Participate in competitions

 

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## Support

- [Documentation](https://guide.degenhive.ai)
- [Discord Community](https://discord.gg/degenhive)
- [GitHub Issues](https://github.com/degenhive/degenhive_pool_sdk/issues)

## License

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.

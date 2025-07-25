### Introduction to Limit Order Protocol

The Limit Order Protocol, developed by 1inch, enables users to create orders to buy or sell assets at specific market prices. It's built on an intent-based architecture that focuses on what users want to achieve rather than how they want to achieve it. This protocol forms the foundation for 1inch's Fusion and Fusion Plus features.

### Benefits and Features

- **Compared to AMMs**: Unlike AMM-based DEXs that use formulas like x×y=k, order book-based systems have pricing defined by makers and fill at exact rates
- **Token Support**: Handles ERC-20, ERC-721, and ERC-1155 tokens (including NFTs)
- **Order Types**: Supports stop loss, take profit, Dutch auctions, and standard limit orders
- **Fill Options**: Offers partial fills, fill or kill, and RFQ style orders
- **Gas Efficiency**: Optimized to be almost as simple as transferring tokens between parties
- **Gasless Options**: Supports permits and fully gasless orders with no need for assets

### Technical Architecture

The protocol works through a simple flow:

1. User creates and signs an order with their private key using EIP-712 standard
2. Signed order is sent to a centralized order book database
3. Resolvers can fill profitable orders without paying gas fees (gas is paid by the resolver)

### Hackathon Use Cases

- **Gas Station**: Gasless swaps to native assets with lender repayment via extensions
- **Vesting Accounts**: P2P style orders where only portions fill at given times
- **Time-Weighted Average Price Orders**: Limited volume fills over time
- **Grid Trading**: Automated buy-low-sell-high strategies using sequential orders
- **Stop Loss and Take Profit**: Basic and range orders that fill at specific price points

### Technical Implementation Details

- **Order Structure**: Includes maker traits (toggleable flags for order behavior) and extensions
- **Predicates**: True/false statements determining if an order can fill
- **Interactions**: Pre-interactions and post-interactions allowing actions before or after swaps
- **Amount Getters**: Interface for dynamic calculation of exchange rates in real-time

### Q&A Highlights

- The SDK can be used to build orders, but customized extensions require a custom backend
- Cancellations only happen on-chain, which could be gas-intensive for strategies like trailing stop-loss
- SDKs are available in Python, JavaScript, and Go
- A minimal implementation for the hackathon could be a database table holding orders with a background resolver

### Action Items

- [ ]  Use the SDK to build and customize orders
- [ ]  Develop custom contracts for extensions rather than using existing ones
- [ ]  Set up a backend system to handle custom orders
- [ ]  Direct technical questions to the Discord channel
- [ ]  Reference the workshop recording on ETH Global YouTube channel
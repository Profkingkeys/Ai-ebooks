# 15 · Crypto with AI: Investigate the System Behind the Price

**A token can have a convincing story, a rising chart and a contract you should never trust with your wallet.**

AI is useful for organizing a crypto investigation: documentation, contract interfaces, supply schedules, governance and market structure. It is not proof that an asset is safe or profitable. This guide stays with read-only research and paper execution. Never give a model a seed phrase, private key or permission to sign transactions you do not understand.

## Setup and boundaries

Create a separate research workspace. Choose one network and identify the exact contract or mint address from multiple authoritative project records. Similar names and logos are not identity checks. Use a block explorer in read-only mode and save the network, address, block height and retrieval date with your notes. Some claims depend on the block or contract version inspected.

Use a code-capable model to explain verified source, and a text model to compare the project's claims with its implementation. Supply the actual code, compiler settings and relevant documentation. A generated security review is a lead for investigation, not an audit certificate. [Solidity's security guidance](https://docs.soliditylang.org/en/latest/security-considerations.html) describes pitfalls that remain relevant when code is AI-assisted.

## Separate five questions

First, what does the system do? Second, who can change it? Third, where does value or revenue come from? Fourth, who holds the supply and when can it enter circulation? Fifth, what happens when a dependency fails? Treat each answer as a claim that needs evidence.

For an upgradeable contract, identify the implementation and administrator as well as the proxy. For an exchange opportunity, distinguish a displayed price from an executable order-book depth. For a yield claim, identify its source and denominator. A reward paid in a volatile token is not equivalent to cash income of the same advertised percentage.

| Claim | Evidence to request | Failure to consider |
|---|---|---|
| Decentralized | Actual control and upgrade permissions | One key can change critical behavior |
| Liquid market | Depth and realistic trade size | Quoted spread hides thin liquidity |
| Fixed supply | Mint authority and release schedule | Additional issuance or unlocks |
| Audited | Scope, version and unresolved findings | Report covers different deployed code |
| Profitable arbitrage | Costs, timing and inventory accounting | Fees and transfers erase the spread |

## Paper arithmetic before automation

Imagine buying 100 units at 10.00 and selling them at 10.08. The gross spread is 8.00. If modeled fees are 2.00 on each side and slippage is 3.00 total, only 1.00 remains before other costs. If the markets move before execution, even that disappears. This is invented arithmetic, not a trade signal.

Ask AI to produce a ledger with separate fields for price, quantity, fee, slippage, transfer cost and timestamp. Verify that the system cannot count the same fill twice. Model partial fills and unavailable balances. Compare the paper model with the [PharmWeb3 trading lab](https://github.com/Profkingkeys/PharmWeb3/tree/main/production/trading), whose implementation status must be read before reuse.

## Challenges, project and outcome

Documentation may be outdated; compare it with deployed code. Data may omit failed transactions; document the omission. A model may confidently label a contract safe after reading one file; require dependency and privilege analysis. High backtest returns may reflect stale prices or impossible fills; test a deliberately delayed execution assumption.

Deliver a research dossier containing identity evidence, control map, token-supply notes, dependency risks and a paper ledger. Include a section titled “What I could not verify.” Do not promote a coin because the dossier looks professional. AI can help you inspect more evidence, but market, custody, fraud and regulatory risks remain. Check applicable local rules and independent guidance before any real financial decision.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

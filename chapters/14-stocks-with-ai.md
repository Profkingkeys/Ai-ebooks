# 14 · Stocks with AI: Turn Filings into Questions You Can Verify

**A model can summarize an annual report before you finish your coffee. It can also confuse revenue with profit and make the mistake sound authoritative.**

The goal is a traceable research notebook, not an automatic buy list. Use AI to extract and compare information, then return to primary filings for every material claim. This is educational research, not personalized investment advice. The [SEC's investor alert collection](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins) is a starting point for recognizing misleading investment claims.

## Setup

Choose one publicly listed business whose filings you can lawfully access. Save the annual-report URL, reporting period, currency, units and publication date. Build a spreadsheet with revenue, operating profit, operating cash flow, capital expenditure, debt and share count. Keep the page or section reference beside each value. Do not compare a quarterly number with an annual number or mix thousands with millions.

A long-context text model can help locate relevant passages; a code model can write a reconciliation script. Neither should fill missing figures from memory. Ask for `not found` whenever the source does not support an extraction. See [model selection](31-models-and-workspace.md) for a small evaluation before committing to a provider.

## A worked reasoning pattern

Suppose an invented company reports revenue of 100 million and operating profit of 12 million in one year, then revenue of 120 million and operating profit of 9 million the next. Revenue grew 20%, while operating margin fell from 12% to 7.5%. A “sales are rising, therefore everything is improving” summary misses an important tension. The right next question is what changed in costs, mix or accounting—not whether the model likes the company.

Use a statement such as: “The reported operating margin declined in these two periods.” Keep explanations like input-cost inflation as hypotheses until the filing supports them. Then consider whether management's explanation is itself complete. Distinguish an audited financial statement from management commentary and promotional material.

| Research task | AI contribution | Your verification |
|---|---|---|
| Extract figures | Draft a structured table | Trace every value to the filing |
| Compare periods | Identify unusual changes | Reconcile units and restatements |
| Summarize risks | Group disclosed issues | Read the actual risk language |
| Model scenarios | Generate formulas | Check assumptions and arithmetic |
| Draft memo | Improve clarity | Separate facts, assumptions and opinions |

## Build and challenge a scenario model

Create conservative, central and optimistic operating scenarios without pretending to know their probabilities. Show how margins, reinvestment and financing assumptions change outcomes. A valuation is conditional on assumptions; precision to several decimal places does not imply certainty. Compare what must go right with what could go wrong.

If you backtest a screening rule, use information available at the historical decision date. Include delisted firms where relevant and account for corporate actions. Otherwise survivorship bias and publication-date leakage can make the strategy appear stronger than it was. Transaction costs and taxes depend on context and cannot be ignored in a claim about an investor's actual returns.

## Practical project and outcome

Produce a two-page company memo with a source table, three verified observations, three unresolved questions and a sensitivity chart. Have AI argue against your preferred explanation, then check those objections against the filing. Publish only material you have rights to share; link to the report instead of reproducing it.

Common obstacles are inconsistent labels, restated figures and PDF extraction errors. Resolve them with a documented mapping and manual spot checks. Do not let a model silently rewrite the historical record. Your success measure is whether another reader can reconstruct the analysis, not whether the stock rises next week.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

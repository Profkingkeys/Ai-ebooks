# 13 · Forex with AI: Build a Research Desk Before a Trading Bot

**The most dangerous signal is the one that looks profitable only because your backtest secretly knew tomorrow.**

AI can help organize market data, explain code and compare hypotheses. It cannot remove uncertainty from exchange rates. This guide builds a paper research workflow, with no live order execution and no promise of returns. “Not financial advice” does not make an unsupported performance claim acceptable. The [CFTC's AI trading advisory](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/AITradingBots.html) cautions against promises that AI bots can reliably generate extraordinary profits.

## Setup and model choice

Use Python, a spreadsheet and a lawful historical-data source whose license permits your use. Record currency pair, timestamp convention, timezone, bid/ask availability, missing periods and source date. Start with one pair and one timeframe. Install dependencies in a virtual environment and save the versions. Use a code-capable language model to review data transformations, not to invent prices or issue unexplained signals. The [model guide](31-models-and-workspace.md) explains the selection process.

Your first deliverable is a data dictionary. Define whether a candle timestamp marks its opening or closing time. If a feature uses the closing price, its decision cannot be executed earlier in that same candle. That simple rule prevents a common form of look-ahead bias.

## Build the experiment

Write a hypothesis before inspecting strategy results: for example, “A simple momentum rule has different net results in trending and ranging periods.” This is a testable question, not a recommendation to trade momentum. Compare a fixed rule with a simple baseline. Use chronological development, validation and untouched test periods. Keep a ledger of every variant tried; selecting the best of hundreds of rules creates its own bias.

Model the cash consequences of a position explicitly. For a hypothetical EUR/USD position of 1,000 euros, a movement from 1.1000 to 1.1010 is one US dollar of gross P&L before costs. A spread, commission or slippage assumption can consume that amount. This illustration does not recommend a position size or leverage level. Correct contract specifications and account-currency conversion matter in a real instrument.

| Component | Required evidence | Common failure |
|---|---|---|
| Signal | Inputs available at decision time | Future close leaks into features |
| Fill | Bid/ask and execution assumption | Filling every order at the mid-price |
| Costs | Spread, fees and financing model | Reporting gross return as net return |
| Risk | Exposure and drawdown accounting | Ignoring correlated positions |
| Evaluation | Untouched period and baseline | Tuning repeatedly on the test set |

Ask the model: “Audit this research script for look-ahead, timezone errors, missing costs and multiple-testing bias. Cite the exact line for each concern. Do not optimize parameters until the data contract is correct.” Confirm each finding yourself.

## Outcome, challenges and solutions

A useful report shows trade count, net P&L, maximum drawdown, turnover, cost sensitivity and performance by period. Include periods in which the rule loses. Simulate wider spreads and delayed fills. If a small cost change destroys the result, report the fragility instead of hiding it in a footnote.

Unexpected perfect results usually deserve suspicion: inspect label alignment, duplicate timestamps, train/test overlap and whether unsuccessful trades were dropped. Missing bid/ask data should produce a clearly stated approximation, not a claim of executable historical profit. A model-written explanation of central-bank policy is only a draft until checked against the institution's dated release.

## Practical project

Create a paper-only research journal with three files: dataset manifest, strategy specification and results memo. Add a test that deliberately shifts the signal into the future; your evaluation check should identify the invalid experiment. Run the unchanged rule on a later holdout and compare results after all modeled costs.

The real-world value is disciplined analysis, risk reporting and reproducibility. Before any real-money activity, independently check the product, broker, local rules and suitability. There is no requirement to trade to learn these skills. Publishing an honest negative result demonstrates more judgment than advertising a fictional win rate.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

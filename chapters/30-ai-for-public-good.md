# 30 · AI for Public Good: Find the Bottleneck People Actually Live With

**A village does not need a more impressive AI demo if the information arrives after the water supply has already failed.**

Major problems are rarely solved by a model alone. Water access, energy reliability, food waste, disability access and education involve infrastructure, institutions, incentives and local knowledge. AI may help with a specific bottleneck inside those systems. Start by understanding that bottleneck with the people affected.

## Choose a problem with a usable decision

Replace “solve poverty” with a question such as “Can an authorized support team identify incomplete benefit applications earlier?” Replace “fix agriculture” with “Can a cooperative reduce avoidable spoilage using better demand records?” The narrower question creates a measurable decision and exposes dependencies that a broad slogan hides.

Interview users and frontline workers. Document the current process, language, connectivity, equipment and what happens when the system is wrong. Include people who may be excluded by a smartphone-only design. Do not collect sensitive data simply because it might be useful later.

## Setup and model choice

Use a spreadsheet or simple database to establish a baseline before adding AI. A text model may organize reports; a vision model may assist with authorized image classification; a forecasting model may estimate demand. Choose based on a tested task, not a fashionable label. See [data analysis](32-data-analysis-with-ai.md) and [model setup](31-models-and-workspace.md).

For a first prototype, use synthetic data and a manual workflow. Define which decisions remain with a qualified person or public authority. Provide a fallback when connectivity, power or the model fails. An offline-first interface may be more valuable than a sophisticated feature that most users cannot access.

| Problem area | Bounded project | Essential boundary |
|---|---|---|
| Water services | Organize maintenance reports and unresolved faults | AI cannot certify water is safe from a photo |
| Energy | Analyze authorized meter data for unusual patterns | Confirm faults before intervention |
| Food waste | Forecast demand with uncertainty | Avoid treating forecasts as guaranteed orders |
| Accessibility | Draft captions and plain-language explanations | Review accuracy with intended users |
| Education | Adapt practice from approved materials | Protect learners and assess real learning |

## Build an evidence loop

Define the baseline: response time, error rate, cost or completion rate. Then compare the prototype under realistic conditions. If users must spend more time correcting AI than the old process required, report that. Include accessibility, language and subgroup performance rather than only a single average.

A useful prompt is: “Given this documented workflow, propose three small interventions. For each, state the user decision, required data, non-AI baseline, failure consequences, evaluation and maintenance owner. Do not assume internet access, large budgets or perfect records.” Discuss the proposals with stakeholders before building.

## Practical project and challenges

Create a synthetic maintenance-report triage tool. It can group duplicate reports, identify missing location fields and draft a summary for a human coordinator. It should not automatically close incidents or promise emergency response. Test ambiguous addresses, conflicting reports, local-language variations and malicious text inside submissions.

Deliver a service map, prototype, evaluation report and maintenance plan. Identify who can correct records, who handles complaints and who pays for continued operation. A project abandoned after a demo can leave users worse off if they have come to depend on it.

## Next steps

The [WHO AI-for-health governance guidance](https://www.who.int/publications/i/item/9789240029200) and [NIST AI risk framework](https://www.nist.gov/itl/ai-risk-management-framework) are useful starting references for accountability and context-sensitive evaluation, though neither replaces local law or community participation.

Choose one partner, one decision and one measurable improvement. Share limitations as clearly as successes. AI can expand the amount of information a small team can examine, but lasting impact also requires trust, resources and the ability to repair the system when it fails.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

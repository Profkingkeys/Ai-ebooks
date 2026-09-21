# 32 · Data Analysis with AI: Find the Signal, Prove the Result

**A beautiful dashboard can make a wrong answer look certain. Your advantage is learning how to challenge the answer before anyone acts on it.**

A pharmacy manager asks why customers leave without the supplies they requested. One branch looks excellent on its quiet days. Another handles far more demand. AI can write a convincing explanation in seconds, but the useful work begins with a sharper question: what proportion of recorded requests was fulfilled, at each site, over the same period?

This guide takes you from a messy CSV to a reproducible analysis. You will use AI as a coding assistant and critic, while calculations remain inspectable. The project uses invented operational counts, with no patient records or clinical advice. Its small size makes every number checkable by hand before you scale the method.

## Set up your analysis workspace

Install Python 3 and a code editor. Clone this repository or download its source ZIP. The included project uses only Python's standard library, so there are no paid services or package downloads to begin:

```bash
python labs/data-analysis/analyze.py
python -m unittest discover -s labs/data-analysis -p 'test_*.py'
```

The script reads `labs/data-analysis/demand.csv` and writes `output/clean.csv` and `output/report.json`. Keep the original file unchanged. The output is reproducible from it. Tests check known totals, schema changes and conflicting duplicates. [Python's environment guide](https://docs.python.org/3/tutorial/venv.html) explains how to isolate dependencies when you later add pandas, plotting or notebooks.

For an expanded workspace, create a virtual environment, activate it, install pandas and matplotlib, then record the versions you used. Do not assume an AI-generated package name exists. Verify it against the project's official documentation before installing it.

```bash
python -m venv .venv
# macOS/Linux: source .venv/bin/activate
# Windows PowerShell: .venv\Scripts\Activate.ps1
python -m pip install pandas matplotlib
python -m pip freeze > requirements.txt
```

A spreadsheet is also a valid starting point. Import the clean CSV, keep columns typed consistently, and make a pivot table with site as rows and SUM(requests), SUM(fulfilled) as values. Calculate fulfillment from those summed values. AI can draft the formula, but inspect the referenced cells and verify that hidden filters have not changed the denominator.

## Choose a model for the job

Use a code-capable model for Python and SQL, a reasoning model to critique assumptions, and a vision-capable model for reviewing chart readability. Current provider catalogs and a selection exercise are in [the model setup guide](31-models-and-workspace.md). Claude, Gemini and OpenAI model families are candidates to evaluate; none is automatically your statistician or source of truth.

Start with a data dictionary and five invented rows. Do not upload a confidential spreadsheet merely because a model can accept files. Confirm organizational permission, data retention, contractual controls and access restrictions. A local model may reduce external data transfer, but still needs security and quality evaluation.

Give your assistant a constrained first task:

> I have daily operational counts with date, site, requests and fulfilled. The grain is one site-day. Propose validation rules and a descriptive analysis plan. Do not invent missing data, run code, infer patient outcomes or claim causation. Ask which business decision this analysis supports. Return assumptions separately from facts.

The phrase **one site-day** matters. It defines a row. Without a grain, duplicate detection and aggregation become guesswork.

## Clean the data without hiding the mess

The included file has eleven rows: eight valid site-days, one exact duplicate, one missing request count and one impossible record with more fulfilled requests than total requests. The script removes the exact duplicate, quarantines the two invalid rows, and retains the raw values and rejection reasons in the report.

| Problem | Tempting shortcut | Better treatment in this project |
|---|---|---|
| Missing request count | Replace it with zero | Quarantine and ask the source owner |
| Same row repeated | Count it again | Remove exact duplicate; record its line |
| Same site-day with different counts | Keep whichever arrived last | Stop and reconcile the conflict |
| Fulfilled exceeds requested | Cap the value silently | Reject as inconsistent and investigate |
| New column names | Guess their meaning | Fail the schema check |

Cleaning is a set of decisions, not a magic `dropna()` command. Missingness can carry meaning: a broken reporting process may disproportionately affect busy branches. Excluding those records can bias the final answer. Report how many were excluded and why; do not describe the cleaned result as a complete picture of the business.

The [pandas tutorials](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html) cover reading, filtering, aggregation, joins and reshaping. Use those capabilities to implement explicit rules, rather than asking a model to “clean everything” without an audit trail.

## Calculate the right denominator

The included project should produce these exact descriptive results:

| Site | Requests | Fulfilled | Fulfillment |
|---|---:|---:|---:|
| A | 340 | 294 | 86.47% |
| B | 460 | 352 | 76.52% |
| All valid records | 800 | 646 | 80.75% |

The overall rate is `646 / 800 × 100`, not the average of the two site percentages. Equal weighting would answer a different question: the average site's rate. Similarly, averaging daily rates gives quiet days as much influence as busy days. Choose the estimand—the quantity you want to know—before selecting a formula.

For clean data in a MySQL table named `daily_demand`, the equivalent aggregation is:

```sql
SELECT site,
       SUM(requests) AS requests,
       SUM(fulfilled) AS fulfilled,
       ROUND(100.0 * SUM(fulfilled) / NULLIF(SUM(requests), 0), 2)
         AS fulfillment_pct
FROM daily_demand
WHERE day >= '2026-01-01' AND day < '2026-02-01'
GROUP BY site;
```

Use a read-only account for analysis. Bind user-supplied filters as parameters in application code. Before joining inventory, verify the key's uniqueness on both sides; a many-to-many join can multiply rows and produce impressive but false totals. Compare row counts and sums before and after every join.

## Make a chart that tells the truth

A horizontal bar chart can compare site fulfillment rates. Start the rate axis at zero, label percentages, and show each site's number of requests. A second chart can show daily request volume. Avoid a decorative 3D chart: perspective makes comparisons harder. Use color to distinguish a meaningful category or alert, not to make one site appear virtuous.

For a time series, sort dates, make missing days visible, and explain whether a blank means no observations or zero demand. Do not interpolate across missing records without a reason. Write alt text that communicates the principal result and its limitations.

An AI chart review prompt:

> Inspect the chart against the provided table. Check axes, units, denominators, labels, color contrast and missing data. Identify claims the chart does not support. Suggest one simpler alternative. Do not infer causes from the picture.

A defensible conclusion is: “In the retained synthetic records, site B fulfilled a lower share of requests than site A.” It is not: “Site B's staff caused shortages.” Product mix, supply delays, reporting differences and demand severity could change the interpretation.

## Add statistics only when the question needs them

Descriptive statistics summarize what you observed. Inference requires assumptions about sampling, independence and measurement. Eight invented site-days are a teaching fixture, not evidence about real pharmacies. A confidence interval cannot rescue a biased collection process, and a small p-value does not measure practical importance.

If a real project tests a service change, define the primary outcome, analysis period and comparison plan before looking at results. Consider randomization when feasible and ethical. For observational comparisons, document confounders and seek statistical review. Report absolute differences, sample sizes and uncertainty rather than only a significance label.

For prediction, split data according to the deployment question. Future demand needs a time-based holdout; repeat observations from the same site or person may require grouped splitting. Fit imputation, scaling and feature selection on training data only. The [scikit-learn pitfalls guide](https://scikit-learn.org/stable/common_pitfalls.html) explains how leakage can inflate measured performance.

## Troubleshooting and delivery

If two tools disagree, compare filters, date boundaries, null handling, row grain and rounding before changing the model. If a notebook works only after cells were run in a certain order, restart it and run from the top. If a model invents a column, provide the actual schema and reject the generated query. If the analysis takes too long, filter and aggregate in SQL before moving data into memory.

Deliver five things: the untouched input or its controlled-access reference; a data dictionary; the reproducible script; a quality report; and a one-page decision memo. The memo should contain the question, result, limitations and next action. Keep private data out of public Git history, including older commits.

## Your practical challenge

Run the included lab and reproduce 80.75%. Add an exact duplicate and confirm the result stays unchanged. Add a conflicting site-day and confirm the script stops. Create a spreadsheet pivot and the SQL equivalent, then reconcile both against Python. Finally, write a memo proposing what information the manager should collect before changing purchasing policy.

This workflow can support stock planning, education dashboards, marketing experiments, energy monitoring and public-service reporting. AI accelerates code generation and explanation; the analyst earns trust by defining the question, verifying the arithmetic and making uncertainty visible.

**Next step:** replace the toy data only with an authorized dataset whose meaning you understand. A careful small analysis is a stronger portfolio asset than a large dashboard nobody can reproduce.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

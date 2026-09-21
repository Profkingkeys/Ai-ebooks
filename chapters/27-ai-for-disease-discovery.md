# 27 · AI for Disease Discovery: Turn a Bold Question into a Testable Hypothesis

**A predicted molecule is not a medicine. The opportunity is to shorten the distance between a useful question and a well-designed experiment.**

Diseases without effective cures deserve serious ambition. AI can help search literature, organize evidence, analyze appropriate datasets and prioritize hypotheses. It does not establish safety, efficacy or a cure by generating an answer. Progress comes from coordinated computational, laboratory and clinical work, with qualified oversight and reproducible evidence.

## Choose a tractable research problem

Start with a narrow bottleneck: finding conflicting results in a literature set, comparing publicly available expression datasets, identifying missing evidence in a proposed mechanism or improving the quality of a research data pipeline. State the disease context, population, biological question and decision the work could inform. Do not begin by asking a chatbot to “cure cancer,” which treats many distinct diseases as one problem.

Build a source ledger with article identifier, study type, population or experimental system, methods, results, limitations and correction/retraction status where available. Separate cell-line findings, animal studies and human evidence. A finding in one setting may not transfer to another. Record what you excluded and why.

## Setup and model choices

Use Python for reproducible data work and a text model for structured extraction from papers you have rights to access. A retrieval system should return the supporting passage alongside each claim. Specialized scientific models have different purposes: [AlphaFold](https://deepmind.google/science/alphafold/) supports structure-related research, but a predicted structure alone does not establish that a treatment will work. Follow model licensing, data requirements and documented limitations.

Use synthetic or appropriately authorized public data for an initial portfolio project. Do not upload identifiable health or genomic data into a general chat service without a valid approved governance basis. Collaborate with domain experts before interpreting biological significance or proposing experimental follow-up.

## A complete computational project

Choose a small, clearly defined body of literature on a benign research question, such as how studies measure adherence to an established care process. Create an extraction schema before reading outcomes. Have AI draft entries, then manually verify a sample and every conclusion-driving claim. Record extraction errors and revise the process.

Next, build an evidence map. Group studies by design and measurement method. Identify where apparent disagreement may reflect different populations or endpoints. Produce a list of unanswered questions, each paired with the evidence needed to answer it. This is a useful research artifact even if it does not propose a new drug.

| Stage | Output | What would invalidate it? |
|---|---|---|
| Question | Specific research decision | Scope too broad to evaluate |
| Evidence | Traceable study table | Invented citations or missing negative findings |
| Analysis | Reproducible comparison | Leakage, confounding or incompatible measurements |
| Hypothesis | Falsifiable explanation | No observation could disprove it |
| Review | Expert critique and next experiment | Unsupported clinical extrapolation |

## From prediction to evidence

The [FDA's drug-development overview](https://www.fda.gov/patients/learn-about-drug-and-device-approvals/drug-development-process) distinguishes discovery, preclinical research, clinical research, review and post-market monitoring. The exact regulatory pathway depends on jurisdiction and product. A computational score sits far upstream of a claim that a treatment benefits patients.

The [WHO guidance on AI for health](https://www.who.int/publications/i/item/9789240029200) places ethics, human rights and accountability at the center of deployment. In your project, make that concrete through data authorization, documented limitations, subgroup evaluation and expert review. Do not use a prototype to recommend treatment or invite self-experimentation.

## Challenges, outcome and next step

Publication bias can make the literature look more positive than reality. Dataset shifts can break a model across hospitals. Correlation can be mistaken for mechanism. Address these with transparent selection, external evaluation where appropriate and explicit alternative explanations. A model's fluent biological story is not a substitute for evidence.

Deliver an evidence table, reproducible analysis, error audit and research memo. End with a question a qualified team could investigate—not a press release claiming a cure. The ambition remains large: help researchers examine more evidence and spend scarce experimental effort more intelligently. Your contribution becomes valuable when another team can inspect, reproduce and improve it.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

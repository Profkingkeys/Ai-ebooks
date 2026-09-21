# 05 - AI in Medicine

Medicine is where AI hype becomes expensive.

A bad output is not merely a software defect. It can alter triage, diagnosis, medication choice or treatment planning.

So the useful question is not:

> Can AI diagnose disease?

It is:

> Which parts of a clinical workflow can AI assist, under which evidence standard, with what oversight, and with what measurable failure rate?

## Where AI fits

<pre>
PATIENT DATA
    │
    ▼
QUALITY CHECKS
    │
    ▼
MODEL
    │
    ├────► EVIDENCE RETRIEVAL
    │
    ▼
DECISION SUPPORT
    │
    ▼
CLINICIAN
    │
    ▼
ACTION
    │
    ▼
OUTCOME + AUDIT
</pre>

The clinician remains important because medicine contains context that may not be fully represented in the available data.

## Imaging

Medical imaging is a strong AI use case.

Models can detect patterns in radiology images, pathology slides and other modalities.

But model performance depends on the data distribution.

A model trained in one hospital can behave differently in another because of:

- scanner hardware
- acquisition protocols
- demographics
- disease prevalence
- labeling practice
- workflow differences

Validation therefore needs more than one headline accuracy figure.

## Clinical language

Large language models can help summarize notes, extract fields, draft patient explanations and support literature review.

They can also produce fluent unsupported statements.

A clinical assistant should expose:

- source
- date
- retrieved evidence
- observation
- inference
- uncertainty

That is traceability.

## Clinical safety architecture

Suppose a model suggests a medication.

A safer system is:

model suggestion
  -> retrieve formulary and interaction data
  -> check allergies
  -> check renal and hepatic context
  -> check dose constraints
  -> show rationale and evidence
  -> clinician review
  -> explicit action

AI supplies a candidate.

Deterministic systems verify constraints.

A clinician owns the decision.

## Research acceleration

AI can reduce the time between a research question and a structured evidence set.

A research assistant can:

- search literature
- cluster papers
- extract study characteristics
- compare endpoints
- identify inconsistencies
- draft evidence tables
- flag gaps for human review

It must not silently turn a paper abstract into a clinical conclusion.

The important distinction is:

**retrieval is evidence; generation is a hypothesis about the evidence.**

## The safety line

An AI output is not the same thing as a validated clinical decision.

That line is not anti-AI.

It is the condition that makes useful medical AI possible.

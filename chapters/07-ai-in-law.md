# 07 - AI in Law

Law has a peculiar relationship with text.

The raw material is language.

The output is also language.

That makes generative AI tempting in legal work and makes fabricated authority especially dangerous.

## The legal AI stack

<pre>
QUESTION
  │
  ▼
JURISDICTION
  │
  ▼
PRIMARY AUTHORITY SEARCH
  │
  ▼
CITATION COLLECTION
  │
  ▼
RULE EXTRACTION
  │
  ▼
APPLICATION TO FACTS
  │
  ▼
LAWYER REVIEW
  │
  ▼
FINAL ADVICE / FILING
</pre>

The most important step is often authority retrieval, not generation.

## Hallucinated citations

A language model can produce a citation that looks legitimate because it knows the pattern of legal citations.

A legal AI should distinguish:

- source found
- source retrieved
- source quoted
- source interpreted
- source inferred

Generated text must not be allowed to silently promote an inference into a source-backed claim.

## Document review

AI can classify, summarize and compare:

- contracts
- disclosures
- correspondence
- discovery material
- policies
- case files

Strong systems prefer structured extraction.

Example:

contract_id
clause_type
party
obligation
deadline
exception
governing_law
source_location

Structured output is easier to test than a paragraph.

## Clause comparison

A useful architecture is:

1. split documents into clauses
2. normalize clause types
3. retrieve comparable clauses
4. compare differences
5. flag material deviations
6. let counsel decide whether they matter

The AI becomes a comparison engine.

It does not become the lawyer.

## Privacy

Legal AI can process highly sensitive information.

A real deployment must define:

- where prompts are processed
- where embeddings are stored
- who can retrieve documents
- how long logs survive
- whether customer data can be reused
- how deletion propagates

Legal AI without information governance is unfinished engineering.

## The opportunity

Legal systems contain structured authorities, citations, temporal versions, explicit jurisdictions and procedural stages.

Those properties fit retrieval and provenance unusually well.

The strongest legal AI may feel less like "ask a chatbot anything" and more like a research workstation where important claims carry a source trail.

# 07 · Enhance Legal Practice with AI: Verify the Authority Behind the Sentence

**The argument sounds persuasive. The case it cites does not exist. In legal work, fluency cannot stand in for authority.**

AI can assist with document organization, drafting, issue spotting and research workflows. It does not qualify someone to practice law or replace a lawyer's professional duties. This guide concerns supervised information work, not advice on a reader's particular legal dispute. Applicable obligations depend on jurisdiction, court rules and the engagement.

## Setup and model choice

Define the permitted task and jurisdiction. Use public or synthetic documents for an initial exercise. Before processing client material, obtain the necessary authorization and evaluate confidentiality, privilege, data handling and provider terms. A generic promise that a tool is “secure” is not enough.

Choose a model that can work with supplied documents and produce source references. A long context window does not guarantee that it used the right clause. The [American Bar Association's ethics-opinion collection](https://www.americanbar.org/groups/professional_responsibility/publications/ethics_opinions/) includes guidance relevant to US practitioners; it is not a substitute for Nigerian or other local professional requirements. Check the rules that actually apply to the work.

## Build a contract comparison workflow

Use two fictional versions of a simple service agreement. Create a clause inventory: parties, scope, payment, term, termination, confidentiality, liability and dispute process. Ask AI to identify changes with section references and short supporting excerpts. Then compare each finding with the source.

Do not ask the model to declare the contract “legally safe.” A useful output explains what changed and what question a qualified reviewer should consider. If a clause is absent, report its absence; do not invent the wording that would normally appear in a template.

| Output | Required support | Review question |
|---|---|---|
| Clause summary | Exact section reference | Does it preserve exceptions? |
| Version change | Both old and new passages | Was the meaning changed or only wording? |
| Research lead | Verifiable primary authority | Is it current and applicable? |
| Draft language | Clearly labeled proposal | Does it fit the client's actual instructions? |
| Final advice | Authorized professional judgment | Have all relevant facts been established? |

## Research with a verification chain

When a model suggests a case, statute or regulation, locate it in an authoritative source. Confirm the name, citation, court or issuing body, date, text and relevant subsequent treatment. A real citation can still be irrelevant, outdated or mischaracterized. Save the source reference and the proposition it supports.

Prompt: “Using only these documents, produce an issue list with supporting sections. Distinguish direct statements, ambiguity and missing information. Do not invent cases or claim that a clause is enforceable. Identify the questions a lawyer in the stated jurisdiction would need to resolve.”

## Evaluation and practical project

Create a set of fictional contract changes, including one exception hidden in a long paragraph and one renamed section. Measure missed changes, false positives and whether summaries preserve qualifications. Have a competent reviewer inspect the result. Speed alone is not a success measure if the tool misses the clause that matters.

Deliver a comparison table, a source-linked issue memo and a record of corrections. Keep the draft/final distinction visible. Do not file or send generated legal work without the responsible person's review and authorization. Follow applicable disclosure and professional rules.

Common challenges include fabricated authority, lost exceptions, cross-jurisdiction confusion and confidential-data exposure. The repair is not simply a more forceful prompt: use reliable sources, controlled access, structured review and clear responsibility. AI can make legal information easier to inspect, while the professional remains accountable for its interpretation and use.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

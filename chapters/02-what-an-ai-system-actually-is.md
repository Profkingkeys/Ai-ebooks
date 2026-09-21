# 02 - What an AI System Actually Is

The fastest way to misunderstand AI is to treat the model as the whole product.

It is not.

A model is one component inside a larger system containing context, retrieval, tools, memory, policies, logging and evaluation.

A useful definition is:

**An AI system is a probabilistic decision component inside a deterministic software boundary.**

The model can be uncertain.

The boundary should not be.

## Tokens are not thoughts

A language model processes tokens, not human concepts.

Tokens map into representations. Attention layers transform relationships among those representations. The model repeatedly estimates what should appear next.

This can produce extraordinary language behavior without guaranteeing truth.

A medically fluent sentence can still be medically wrong.

A legally plausible paragraph can still cite the wrong authority.

A syntactically perfect program can still corrupt data.

The system therefore needs evidence.

## Context is a control surface

The context window may contain:

- user instructions
- policies
- retrieved documents
- tool schemas
- prior turns
- structured data
- examples

That creates a major security distinction:

**data to inspect is not automatically an instruction to obey.**

A retrieved document may contain useful facts and malicious commands in the same paragraph.

The system must preserve that separation.

## Tools change risk

A chatbot can say:

> You should probably revoke that credential.

An agent with the credential can actually revoke it.

That is a change in the failure model.

A production tool should declare:

- inputs
- allowed callers
- required scope
- side effects
- rate limits
- audit events
- rollback path

The model requests.

The application authorizes.

## Memory is not truth

Persistent memory needs provenance.

A useful record contains:

fact
source
created_at
confidence
owner
last_verified_at
sensitivity

That allows the system to distinguish user claims, system observations, retrieved sources and independently verified information.

Memory becomes a governed data system instead of a bucket of text.

## Evaluation is the laboratory

A demo can be impressive and useless.

Production engineering needs repeatability.

A serious evaluation suite asks:

- Did the tool router choose correctly?
- Did a policy regression appear?
- Did retrieval improve evidence quality?
- Did latency remain inside budget?
- What happened when a tool timed out?
- Did a provider change alter behavior?

Once you see the full system, an AI application stops looking like a chat window.

It starts looking like distributed software.

That is exactly what it is.

## Build a system map you can inspect

Take a fictional document assistant. List its components: user interface, authentication, retrieval index, model, output validator and audit record. For each component, write the data it receives, the authority it has and what happens when it fails. A search result is an observation, not a new instruction from the user.

Use a plain JSON response with `answer`, `source_ids` and `uncertainties`. Validate its shape in code, then verify whether the cited sources actually support the answer. Schema validity is not factual correctness. A perfectly formatted false statement still fails the task.

Start with five short documents and ten questions, including questions the documents cannot answer. A useful model must sometimes say that the evidence is insufficient. Compare direct prompting with retrieval from the same small corpus. Record unsupported claims, missing citations and refusal to answer answerable questions. The goal is a measured system, not a dramatic one-run demo.

If retrieval returns irrelevant passages, repair chunking, metadata and query behavior before increasing model size. If answers leak between users, inspect access filtering at retrieval time. If a request times out, define an explicit retry policy and avoid repeating side effects. These are application design problems as much as model problems.

The deliverable is a component map, a small evaluation set and a failure table. See [model setup](31-models-and-workspace.md) for candidate selection and [AI security](03-ai-security.md) for trust boundaries. The [NIST AI framework](https://www.nist.gov/itl/ai-risk-management-framework) is a governance reference for turning broad concerns into managed responsibilities.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

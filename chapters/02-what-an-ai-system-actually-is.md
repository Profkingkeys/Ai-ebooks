# 02 - What an AI System Actually Is

The fastest way to misunderstand AI is to treat the model as the whole product.

It is not.

A model is one component inside a larger system containing context, retrieval, tools, memory, policies, logging and evaluation.

<pre>
┌─────────────────────────────────────────────────┐
│                 AI APPLICATION                  │
├─────────────────────────────────────────────────┤
│ intent                                          │
│   ↓                                             │
│ context ← memory ← retrieval                   │
│   ↓                                             │
│ model ──► tool registry ──► external systems   │
│   ↓                  │                          │
│ output               side effects               │
│   └────────► evidence + telemetry ◄────────────┘
└─────────────────────────────────────────────────┘
</pre>

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

<pre>
MODEL OUTPUT
     │
     ▼
CAPABILITY CHECK
 ┌───┼──────────┬──────────────┐
 ▼   ▼          ▼              ▼
TEXT READ      WRITE         MONEY / CONTROL
 │    │          │              │
 ▼    ▼          ▼              ▼
lower privacy   integrity    high consequence
</pre>

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

<pre>
PROMPT / POLICY
      │
      ▼
TEST CASES
      │
      ▼
RUN
      │
      ▼
MEASURE
      │
      ▼
COMPARE
   ┌──┴──┐
   ▼     ▼
PASS   REGRESSION
  │        │
promote   block
</pre>

Once you see the full system, an AI application stops looking like a chat window.

It starts looking like distributed software.

That is exactly what it is.

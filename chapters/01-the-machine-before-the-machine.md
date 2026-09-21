# 01 - The Machine Before the Machine

The history of AI is not the history of one invention.

It is the history of a stubborn human question:

**Can reasoning be turned into an artifact that can be executed?**

Long before modern neural networks, people were already separating thought into rules, symbols, procedures and representations. Logic became formal logic. Arithmetic became algorithms. Algorithms became software. Software became networks. Networks became learning systems.

The continuity is not "old AI versus new AI."

It is the attempt to move from human procedure to machine procedure without losing the structure of the problem.

<pre>
REAL WORLD
    │
    ▼
HUMAN DESCRIPTION
    │
    ▼
SYMBOLS + RULES
    │
    ├──► narrow, clean domain ──► works
    │
    └──► messy reality ─────────► breaks
</pre>

## The early idea

Alan Turing's 1950 paper, Computing Machinery and Intelligence, asked whether machinery could exhibit behavior we would describe as intelligent. The question was deliberately operational.

The 1956 Dartmouth proposal then gave the field a name and framed a research program around the possibility that learning and intelligence might be sufficiently described to be simulated by machines.

Early systems were mostly symbolic. They stored facts, manipulated symbols and followed explicit rules.

That architecture worked beautifully where the world was clean enough to describe.

It became fragile where the world was not.

## The statistical turn

Machine learning changed the question.

Instead of:

> What rules should I write?

the engineer could ask:

> What structure can the system infer from examples?

That introduced a new dependency: data.

Neural networks mattered because they made it practical to learn useful internal representations from large datasets.

<pre>
SYMBOLIC RULES
     │
     ▼
STATISTICAL LEARNING
     │
     ▼
DEEP LEARNING
     │
     ▼
TRANSFORMERS
     │
     ▼
FOUNDATION MODELS
     │
     ▼
MODELS + TOOLS + RETRIEVAL + AGENTS
</pre>

## The Transformer shift

The Transformer architecture introduced a practical attention-based approach to sequence modeling. It became a foundation for large language models because large training workloads could be parallelized effectively.

The useful intuition is:

tokens
  -> embeddings
  -> attention
  -> repeated transformations
  -> probability distribution for the next token
  -> next token
  -> repeat

The apparent intelligence emerges from that repeated statistical process plus huge amounts of training data and compute.

## The interface changed

Traditional software expects commands.

Foundation models introduced a probabilistic interface:

intent
  -> interpretation
  -> candidate plan
  -> generated action

Tool calling made that plan actionable.

The system moved toward:

intent
  -> plan
  -> tool call
  -> observation
  -> next step
  -> action

That is the beginning of the agent era.

## The economic lesson

Every major AI transition changed at least one of three things:

1. what machines could represent
2. how machines could learn
3. how cheaply humans could invoke the capability

The third is easy to underestimate.

An intelligent capability costing millions per task is a laboratory capability.

An intelligent capability cheap enough to call inside a product becomes an economic capability.

That is why AI history is also infrastructure history.

## Carry this question forward

Do not ask only:

> How intelligent is the model?

Ask:

> What happens when a useful intelligence becomes cheap enough, connected enough and autonomous enough to participate in the world?

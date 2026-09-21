# 11 - Building Things That Did Not Exist

The most exciting consequence of AI is not only that software gets cheaper.

Some ideas become buildable for the first time.

Before cheap code generation, many products died in the gap between "technically possible" and "economically possible for a small team."

AI can shrink that gap.

## The capability stack

The model does not need to invent the whole product.

It can compress the time between design decisions.

## New products appear where old costs disappear

Imagine a workflow that previously required a researcher, developer, analyst and technical writer.

If AI can perform parts of each role, a small team can prototype the workflow.

That does not prove a business.

It proves the cost of experimentation has fallen.

## Research systems

AI can become an interface to:

- evidence retrieval
- hypothesis generation
- experiment planning
- code generation
- result analysis
- report generation

The design requirement is provenance.

Important claims should be traceable to data, source, experiment, calculation or human decision.

## Healthcare builders

A pharmacy student with a strong software stack can build medication education systems, evidence assistants, patient workflow tools or pharmacy operations software that once required a larger technical team.

The barrier changes from:

> Can I code it?

to:

> Can I specify it, validate it and operate it responsibly?

That is a healthier barrier.

## The new bottleneck: judgment

When implementation becomes cheaper, deciding what to implement becomes more valuable.

The hard problems become:

- identifying a real problem
- understanding the user
- narrowing scope
- defining the safety boundary
- measuring success
- knowing when the product is wrong

AI can generate ten products.

That does not mean any one deserves to exist.

## Start with the decision, not the spectacle

An impressive interface can hide an empty product. A stronger design begins by naming the decision that changes an outcome.

Consider a health-learning simulation. “Build a 3D house” is a rendering task. “Help a child rehearse washing hands after using the toilet and before touching food” is a product hypothesis.

Once the loop is explicit, technology choices become easier. Three.js can deliver the browser experience. A small state machine can own the rules. Tests can exercise correct and incorrect routes without rendering a single frame. Telemetry can measure progression without collecting a child's identity.

That is how a strange new idea becomes an inspectable system rather than a cinematic demo.

## Build the impossible-looking prototype

Decompose the idea:

goal
  -> actors
  -> events
  -> state
  -> permissions
  -> data
  -> APIs
  -> automation
  -> observability
  -> tests

Once the problem is decomposed, AI can generate the boring parts quickly.

The strange idea stops looking impossible.

That is the leverage.

## A capstone that connects ambition to a real user

Choose one of three projects: an offline learning game, an authorized operational-data quality report, or a source-linked evidence organizer. Write a one-page specification naming the user, decision, inputs, outputs, failure consequences and success measure. Build only the path needed to demonstrate the complete loop.

For the game, connect an explanation to each choice and make retry meaningful. For the data report, preserve raw records and reconcile every exclusion. For the evidence organizer, attach sources and show uncertainty. These are different products; forcing the same agent architecture onto all three would obscure their needs.

Use [vibe coding](09-vibecoding.md) for implementation and [model setup](31-models-and-workspace.md) for any AI component. Begin with synthetic data and a non-AI baseline. Deliver source, setup instructions, a reproducible demonstration, tests for important failures and a limitations statement.

Ask an intended user to attempt the task while you observe. Do not coach them through every confusing control and then claim the interface is intuitive. Record where they hesitate, what they misunderstand and whether the product changes the decision you intended. Seek appropriate consent and domain review for sensitive settings.

Your future step is to improve the weakest observed part, not add another technology badge. If the prototype has no useful effect, change the hypothesis. If it helps, investigate the cost of maintaining it and the evidence needed before broader use. AI can make experimentation cheaper; the builder still has to earn the conclusion that the product matters.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

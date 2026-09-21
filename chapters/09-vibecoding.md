# 09 - Vibecoding

Vibecoding is often reduced to "tell AI what you want and let it write the app."

That definition is too shallow.

A more useful definition is:

**Vibecoding is conversational software construction in which a human repeatedly directs, inspects, tests and corrects AI-generated code.**

The word becomes dangerous when the last three actions disappear.

## The professional loop

<pre>
SPECIFICATION
     │
     ▼
AI-GENERATED PATCH
     │
     ▼
RUN
     │
     ▼
TEST
     │
     ▼
EVIDENCE
     │
     ▼
HUMAN REVIEW
     │
     └────────► next patch
</pre>

The loop is powerful because implementation becomes cheap.

Wrong implementation becomes cheap too.

## Prompting like an engineer

Instead of:

> Build a fintech app.

Use a bounded specification:

- implement one repository interface
- tenant ID comes from authenticated request context
- use MySQL
- add deterministic tests
- no external network in tests
- do not change public endpoints

That is specification quality, not prompt magic.

## Keep diffs small

A huge AI diff is expensive to review.

Prefer:

one behavior
  -> one patch
  -> one test
  -> one verification

Then continue.

## Make the AI explain evidence

Weak report:

> Fixed the database bug.

Useful report:

- reproduced failure A
- root cause B
- changed file C
- added regression D
- test suite result E

The second report contains evidence.

## Architecture matters more

AI makes code generation cheap enough that architecture becomes more important.

The cost of generating 10,000 lines is small.

The cost of owning those lines is not.

A strong workflow optimizes for:

- small modules
- strong interfaces
- explicit contracts
- testable boundaries
- reversible changes
- clear ownership

The code should remain understandable when the AI is gone.

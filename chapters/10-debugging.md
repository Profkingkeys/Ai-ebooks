# 10 - Debugging

Debugging with AI changes the speed of hypothesis generation.

It does not remove the need for evidence.

The weak prompt is:

> Here is the code. Fix it.

The stronger prompt is:

> Here is the failing input, expected output, observed output, stack trace and smallest relevant code path. Find the first point where the system violates the invariant.

That changes the task from guessing to localization.

## Evidence chain

<pre>
FAILURE
  │
  ▼
REPRODUCE
  │
  ▼
OBSERVE
  │
  ▼
HYPOTHESIS
  │
  ▼
INSTRUMENT
  │
  ▼
VERIFY
  │
  ▼
PATCH
  │
  ▼
REGRESSION TEST
</pre>

AI is excellent at proposing hypotheses.

It is not the authority that chooses among them.

## Invariants

Suppose a payment ledger obeys:

cash_after = cash_before - debit + credit

A report saying "the balance is wrong" is vague.

A stronger report says:

"The invariant is violated after a refund event."

Now the model has a precise target.

## Distributed debugging

A modern system may contain:

- frontend
- API
- queue
- worker
- database
- third-party API
- model provider

Without tracing, the failure often appears in the wrong place.

<pre>
UI ─► API ─► AGENT ─► TOOL ─► DATABASE
│      │       │       │          │
└──────┴───────┴───────┴──────────┘
              TRACE ID
</pre>

One trace can turn a cross-service mystery into a sequence of observable events.

## Debugging AI systems

New failure classes include:

- wrong tool
- wrong tool arguments
- context pollution
- retrieval mismatch
- stale memory
- prompt regression
- provider behavior change
- unsafe fallback
- evaluation blind spot

These need regression cases too.

A serious AI test case can define:

input
expected action
allowed tools
forbidden tools
expected source
maximum latency
safety constraint

## The debugging contract

Finish a serious AI coding session with evidence.

Not:

> Looks good.

But:

> Reproduced failure A. Root cause B. Patched C. Added regression D. Existing suite passed. New test passed. No production data touched.

Confidence is not evidence.

# 10 - Debugging

Debugging with AI changes the speed of hypothesis generation.

It does not remove the need for evidence.

The weak prompt is:

> Here is the code. Fix it.

The stronger prompt is:

> Here is the failing input, expected output, observed output, stack trace and smallest relevant code path. Find the first point where the system violates the invariant.

That changes the task from guessing to localization.

## Evidence chain

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

## Worked case: a red build badge is a question, not a decoration

In the PharmWeb3 audit, separate jobs failed for different reasons: a SaaS test omitted a newly required tenant header; Android needed the AndroidX setting; an emulator action ran Gradle from the repository root rather than the Android project; and the build later exposed a checksum transcription error. The emulator then needed hardware-acceleration permissions. One generic “fix CI” prompt would have hidden these distinct causes.

The useful sequence was to read the first relevant failing step, reproduce what could be reproduced locally, change the smallest responsible component and rerun the actual gate. Node tests passing did not establish that Android compiled. An APK building did not establish that instrumentation ran. Each observation supported a different claim.

A debugging prompt should include the exact command, runtime, expected behavior, observed output and recent changes. Ask for ranked hypotheses and a discriminating check before accepting a broad rewrite. Remove secrets from logs before sharing them. Never fix a red badge by deleting the check that found the defect.

For a practical lab, break the duplicate-record handling in the [data-analysis project](32-data-analysis-with-ai.md). Confirm that the known-total test fails. Repair the behavior and explain why the old implementation was wrong. Then introduce a different invalid input so the repair is not tailored to one fixture.

The outcome is a regression test and a short cause/fix/verification note. If a failure cannot be reproduced, record environment differences rather than claiming it is solved. If CI depends on a device or service unavailable locally, inspect its logs and preserve useful artifacts. Good debugging reduces uncertainty one observation at a time.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

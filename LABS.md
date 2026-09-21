# Engineering Labs

These exercises turn the chapters into buildable systems.

## Lab 01 - Prompt injection boundary

Build a small document assistant.

Input:
- user question
- untrusted document
- tool registry

Requirement:
The document can contain instructions, but those instructions must never become authorization.

Success criteria:
- model can quote the document
- model can identify malicious instructions
- tool execution still requires an external policy gate

Architecture:

<pre>
USER ───────► MODEL ◄──── DOCUMENT
               │
               ▼
          TOOL REQUEST
               │
               ▼
        POLICY AUTHORIZER
          │           │
        BLOCK        RUN
</pre>

## Lab 02 - Personal AI defense agent

Build a message-risk analyzer.

Inputs:
- message text
- sender domain
- requested action
- payment destination
- known contact identity

Output:
- risk signals
- verification steps
- confidence
- recommendation to pause or continue

Constraint:
The system must never claim certainty when the evidence is incomplete.

## Lab 03 - Clinical evidence assistant

Given a medical question:

1. retrieve trusted sources
2. split evidence into claims
3. attach source locations
4. label inference separately from direct evidence
5. generate a human-review summary

The core data structure should look like:

claim
source
source_date
evidence_type
confidence
review_status

## Lab 04 - Pharmacy reconciliation

Build a medication-list normalizer.

Input:
- raw medication strings from two sources

Output:
- normalized drug
- strength
- dosage form
- frequency
- duplicate flags
- unresolved conflicts

The AI extracts.

Deterministic rules validate.

A pharmacist reviews unresolved conflicts.

## Lab 05 - Legal citation verifier

Build a citation pipeline that distinguishes:

FOUND
RETRIEVED
QUOTED
INTERPRETED
INFERRED

A generated legal paragraph should not be considered source-backed until the supporting authority is actually retrieved.

## Lab 06 - AI product cost model

For a workflow, calculate:

cost_per_task
+
retrieval_cost
+
tool_cost
+
human_review_cost
+
failure_cost

Then compare providers by successful-task economics rather than token price alone.

## Lab 07 - Vibecoding regression loop

For every AI-generated patch:

1. write acceptance criteria
2. generate minimal patch
3. run tests
4. inspect the diff
5. record evidence
6. keep or revert

Measure:
- lines changed
- test coverage delta
- defect rate
- rollback rate
- review time

## Lab 08 - Distributed AI debugging

Instrument:

frontend
API
AI agent
tool
database

Propagate one trace ID.

Then intentionally introduce:
- timeout
- invalid tool arguments
- database rejection

Use the trace to locate the first failing boundary.

## Lab 09 - Agent permissions

Create tools with scopes:

read:customer
write:customer
write:billing
approve:billing
write:identity

Require the application to authorize every tool call outside the model.

## Lab 10 - Future trigger simulator

Create a simple simulation with variables:

model_reliability
inference_cost
latency
verification_cost
human_review_cost
identity_assurance
rollback_quality

Observe the point where automated delegation becomes economically attractive for a workflow.

The purpose is not to predict the future.

It is to understand which variables control the transition.

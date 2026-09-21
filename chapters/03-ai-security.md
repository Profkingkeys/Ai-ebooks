# 03 - AI Security

AI security begins with an uncomfortable fact:

**A model does not need to be malicious to become a vulnerability.**

It only needs to be connected to something that matters.

<pre>
USER
 │
 ▼
PROMPT ─────► RETRIEVAL ─────► DOCUMENTS / WEB
 │                  │
 └──────────────────┘
          │
          ▼
        MODEL
          │
     ┌────┼─────┐
     ▼    ▼     ▼
   TOOLS MEMORY OUTPUT
     │
     ▼
CREDENTIALS / DATABASES / EXTERNAL SYSTEMS
</pre>

Every arrow is part of the attack surface.

## Prompt injection

A prompt injection attempts to make untrusted content behave like privileged instructions.

A support agent may be asked to summarize an email. The email can contain a command to export confidential data.

The model can understand the command perfectly.

That is the problem.

Language understanding is not authorization.

Retrieved content should be treated as data. Sensitive actions should pass through deterministic policy checks outside the model.

## Indirect injection

The attacker does not need direct access to the prompt.

Instructions can arrive through:

- web pages
- PDFs
- support tickets
- CRM notes
- source comments
- uploaded documents
- email bodies

<pre>
EXTERNAL CONTENT
      │
      ▼
   RETRIEVER
      │
      ▼
    CONTEXT
      │
      ▼
    MODEL
      │
      ▼
  TOOL REQUEST
      │
      ▼
POLICY / AUTHORIZATION
    │          │
  BLOCK      EXECUTE
</pre>

Retrieval expands the attack surface because the system can ingest text it did not author.

## Tool abuse

Consider an agent that can:

- search a database
- create an invoice
- send email
- issue refunds
- reset passwords

A weak system gives the model all tools.

A stronger system assigns capability scopes.

Example:

search_database -> read:customer

create_invoice -> write:billing

refund -> write:billing + approval:finance

reset_password -> write:identity + step_up_auth

The model can request.

The application decides.

## Secrets

Never place a secret in the model context just because the model can technically see it.

Safer sequence:

model requests capability
  -> application validates
  -> application attaches credential
  -> application performs operation
  -> application strips secret from output

The model needs the capability, not the secret.

## Data exfiltration

AI systems can leak data through:

- cross-tenant retrieval
- prompt logging
- shared vector stores
- error messages
- incorrect provider routing

This makes tenant isolation and telemetry part of AI security.

## Model supply chain

A production AI system may depend on:

- model providers
- open-source weights
- fine-tuning datasets
- embedding models
- vector stores
- SDKs
- inference servers
- browser clients
- plugins

A compromised component can damage the application without modifying the central model.

## Security is not a prompt

Prompts communicate intent.

Deterministic code enforces authorization.

Cryptography protects secrets.

Logs preserve evidence.

Tests catch regression.

Human approval belongs at high-consequence boundaries.

That is the architecture.

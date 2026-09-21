# 03 - AI Security

AI security begins with an uncomfortable fact:

**A model does not need to be malicious to become a vulnerability.**

It only needs to be connected to something that matters.

Every connection between components is part of the attack surface.

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

## A defensive lab with a fake tool

Create a local tool named `read_public_note` that can return only a fixed synthetic document. Give the model no real credentials and no network-writing tools. Place an instruction-like sentence inside one note asking it to ignore the user's task. The exercise is to observe whether the model treats document content as authority, while the application remains unable to perform a harmful action.

Add a policy function that checks the requested tool name and arguments against an allowlist. Test unknown tools, malformed arguments and another user's synthetic document identifier. A prompt saying “be safe” is not the acceptance check; the application must reject unauthorized requests independently of model output.

Record both false negatives and false positives. A system that blocks every request may prevent misuse but also fails its purpose. Keep a small corpus of permitted and forbidden cases, then rerun it when prompts, models or tools change. Do not run this exercise against systems you do not own or have permission to test.

For setup, use Node.js or Python and an evaluated text model. A deterministic fake model can test the policy layer before any provider connection. The outcome is an auditable permission boundary and an error report. Common challenges are hidden side effects, overly broad tool arguments and logging secrets; solve them with narrow interfaces, explicit scopes and redacted logs.

The [OWASP prompt-injection prevention guide](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) discusses layered defenses. No single prompt, filter or classifier should be advertised as complete protection.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

# 04 - Using AI to Defend Against AI

The defensive side of AI is often discussed too narrowly.

The everyday problem is different:

**What happens when the attacker also has AI?**

Scams become cheaper.

Messages become personalized.

Voices can be synthesized.

Images can be fabricated.

Public information can be assembled into convincing social engineering.

The defense needs automation too.

## The defensive loop

The assistant should not say:

> This message is definitely a scam.

A better output is:

> I found three risk signals. None proves fraud. Perform these two independent checks.

That keeps the person in the decision loop.

## Personal defense agent

A defensive assistant can inspect:

- urgency language
- identity mismatch
- unusual payment requests
- changed bank details
- suspicious links
- impersonation cues
- secrecy requests
- requests to bypass normal procedures
- inconsistent names, domains or phone numbers

Then it can produce a verification checklist.

It does not need passwords.

It does not need permission to transfer money.

It needs enough evidence to identify risk patterns.

## The trust ladder

Separate claims by verification level.

Level 0: the message exists.

Level 1: the sender claims an identity.

Level 2: the domain appears associated with that identity.

Level 3: the identity was independently verified.

Level 4: the request was confirmed through a trusted second channel.

The assistant should not silently jump from Level 1 to Level 4.

## Voice deepfake defense

A convincing voice is not proof of identity.

For high-risk actions:

1. end the call
2. open the trusted contact path yourself
3. call back using a known number
4. confirm the request
5. verify any new payment destination separately

Audio similarity is evidence.

It is not identity proof.

## The deeper race

If AI lowers the cost of deception, AI can also lower the cost of verification.

The future is unlikely to be humans versus AI.

It is more likely to be systems containing AI on both sides.

The useful defense is stronger identity, better evidence and fewer irreversible mistakes.

## Build a verification assistant, not an accusation machine

Use ten fictional messages: ordinary requests, ambiguous messages and obvious attempts to bypass a normal process. Ask the model to extract the claimed sender, requested action, payment destination if any, urgency and missing verification. It should identify risk signals without declaring a person guilty of fraud.

Keep verification channels independent. A phone number included in a suspicious message is not an independent callback route. Use contact information already established through a trusted process. For a payment-change request, the useful outcome is a verified decision by the responsible person, not a model-generated confidence percentage.

Measure whether the assistant preserves the original claim and recommends a relevant check. Include benign urgent messages to reveal false alarms. Do not upload real personal messages into a service without an appropriate permission and privacy basis. Never let the assistant move money merely because it judged a message low risk.

Your project can be a source-bounded checklist generator with no sending or payment permissions. Use a text model from [the setup guide](31-models-and-workspace.md), or begin with a rule-based baseline. Deliver the fictional dataset, rubric, observed errors and a short explanation of the human verification step.

The hard part is often social: people feel pressure to act quickly for someone who appears important. Design the workflow so pausing and checking is normal. The [NIST AI risk framework](https://www.nist.gov/itl/ai-risk-management-framework) provides a broader reference for context, measurement and accountability. Your own threat model should name the actual users, assets and decisions involved.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

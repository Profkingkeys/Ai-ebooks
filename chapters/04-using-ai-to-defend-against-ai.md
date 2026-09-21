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

<pre>
INCOMING MESSAGE
       │
       ▼
CLAIM EXTRACTION
       │
       ▼
IDENTITY / FACT CHECKS
       │
       ▼
RISK SIGNALS
       │
   ┌───┴────┐
   ▼        ▼
LOW RISK  HIGH RISK
            │
            ▼
     STEP-UP VERIFICATION
            │
            ▼
     HUMAN CONFIRMATION
</pre>

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

<pre>
AUTOMATED ATTACK
      │
      ▼
 MORE DECEPTION
      │
      ▼
 MORE SIGNAL + NOISE
      │
      ▼
AUTOMATED VERIFICATION
      │
      ▼
 BETTER FILTERING
      │
      └────► next attack / defense cycle
</pre>

The future is unlikely to be humans versus AI.

It is more likely to be systems containing AI on both sides.

The useful defense is stronger identity, better evidence and fewer irreversible mistakes.

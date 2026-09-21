# 28 · Building Toward AGI: A Research Roadmap, Not a Secret Recipe

**Connecting a language model to tools can create a useful agent. It does not, by itself, prove that you built general intelligence.**

There is no established, reproducible set of steps in this guide that guarantees AGI. Definitions and evaluation standards remain contested. The practical opportunity is to study generalization, learning, reasoning, memory and reliable action while making claims precise enough to test. Calling every capable assistant “AGI” makes it harder to learn what actually improved.

## Set a working definition and scope

Write down what your research system should do across several task families, what information it receives and what resources it may use. Distinguish solving familiar benchmarks from adapting to genuinely new tasks. Also distinguish capability from autonomy: a system may be capable of a task while still requiring permission to act.

Build foundations in programming, linear algebra, probability, optimization, machine learning and experimental design. Reproduce a small published result or implement a simple learning algorithm before proposing a new architecture. Use the [data-analysis guide](32-data-analysis-with-ai.md) to learn leakage control and the [coding guide](09-vibecoding.md) to build inspectable software.

## A bounded research sequence

1. Define three task families with explicit success criteria, such as document-grounded questions, small programming problems and toy planning tasks.
2. Create development and held-out sets, preserving task provenance and avoiding answer contamination.
3. Establish a simple baseline, including a non-agentic model or deterministic method where appropriate.
4. Add one component—retrieval, memory, planning or verification—and measure its effect.
5. Test unfamiliar variations and failure cases, not only the examples used during development.
6. Publish methods, limitations and negative results so another person can reproduce the comparison.

Use existing models as research components through documented interfaces. Record the exact model identifier, date, prompts, tool permissions and budget. A provider model can change behavior; a new result should not silently replace an older experimental condition. [Current model selection](31-models-and-workspace.md) explains how to keep that record.

## Design the system so failures are visible

Separate the planner from the executor. Let the planner propose actions in a structured format. Let ordinary code enforce which tools, files and network destinations are allowed. Keep a bounded step count and cost budget. Provide a real stop mechanism controlled outside the model. Store observations and decisions without exposing secrets.

| Research question | Experiment | Misleading shortcut |
|---|---|---|
| Does memory help? | Compare with and without memory on new tasks | Reuse answers from evaluation tasks |
| Does planning help? | Hold tool budget constant | Give one system far more attempts |
| Does verification help? | Test known wrong answers | Let the model grade itself alone |
| Does skill transfer? | Evaluate unfamiliar task variants | Rename familiar examples |
| Is behavior reliable? | Repeat under changed conditions | Publish one successful run |

## Practical project

Build a sandboxed assistant that solves small synthetic scheduling puzzles and explains its constraints. Compare direct generation, generation plus deterministic validation, and a bounded repair loop. Report success rate, invalid outputs, time and cost. Keep the test set separate from prompts used to improve the system. This is research into a component of reliable reasoning, not proof of AGI.

The [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) provides a useful governance reference for identifying and managing AI-related risks. Apply it proportionately: define the context, measure relevant failures, assign responsibility and respond to incidents. More powerful behavior deserves stronger evaluation, not weaker controls.

## Future steps and motivation

Study robustness, interpretability, continual learning, uncertainty and human oversight. Collaborate with researchers who can challenge your assumptions. If a result fails to replicate, investigate rather than rebrand it. Progress can come from a better benchmark, a clearer failure taxonomy or a more reliable verification method. You do not need to claim a world-first intelligence system to make a contribution that matters.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

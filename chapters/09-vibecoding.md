# 09 · Vibe Coding Across the Stack: From an Idea to Software You Can Explain

**The demo worked after one prompt. The next morning, nobody could explain why it broke. The missing skill was not typing faster—it was building an inspectable system.**

AI-assisted programming can shorten the path from an idea to a working prototype. It does not remove architecture, debugging, security or domain knowledge. This guide covers HTML, CSS, JavaScript, Python, Rust, Solidity, MySQL, Java, Kotlin and Android through concrete setup steps and small outcomes. Advanced AI can help a person explore more designs and code than they could manually in the same time; it does not prove that ordinary human developers could never solve the problem.

## Begin with a build contract

Write the user, problem, input, output, constraints and acceptance checks. For example: “A learner selects a health habit, receives feedback and can retry. It works without an account, keeps no personal data and can be used with a keyboard.” Then ask the coding model to propose the smallest architecture that meets that contract.

Choose a code-capable candidate from [the model guide](31-models-and-workspace.md). Test it on your actual task. Give it the runtime, file structure and error output; do not ask it to guess your environment. Use a stronger reasoning candidate for a difficult design review only if the simpler option fails your evaluation. There is no need to connect a paid API to the projects below just to learn AI-assisted development.

Create a Git repository, commit a working baseline and make changes in small increments. Keep secrets outside source control. Require the assistant to explain changes and show how the acceptance checks pass. Tests should exercise behavior and failure cases, not merely repeat the implementation in a second file.

## HTML: structure the learning experience

Install a text editor and use a modern browser. Start with `index.html`; no package manager is necessary for plain HTML. Use headings, real buttons, labels and a main landmark. A button that only looks like text inside a clickable `div` can be harder to use with a keyboard or assistive technology.

```html
<main>
  <h1>Healthy habit practice</h1>
  <p id="question">What should happen before eating?</p>
  <button id="wash" type="button">Wash my hands</button>
  <p id="feedback" role="status" aria-live="polite"></p>
</main>
```

Ask AI to review the document's meaning before its appearance. The outcome is a navigable page whose controls work without a mouse. The common challenge is decorative markup that loses semantics; solve it by choosing native elements first. See [MDN's first-website guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) and [W3C accessibility tutorials](https://www.w3.org/WAI/tutorials/).

## CSS: build a layout that survives a phone

Add a stylesheet or a style element. Define spacing, readable type and a small color palette. Use Grid or Flexbox to express relationships, not absolute positioning for every element.

```css
main { max-width: 48rem; margin: auto; padding: 1.25rem; }
button { min-height: 44px; padding: .75rem 1rem; font: inherit; }
button:focus-visible { outline: 3px solid #187b67; outline-offset: 3px; }
.choices { display: grid; gap: .75rem; grid-template-columns: 1fr 1fr; }
@media (max-width: 36rem) { .choices { grid-template-columns: 1fr; } }
```

Ask for a screenshot critique at the smallest intended screen size. Check overflow, contrast, focus and text resizing. If a layout breaks, inspect the element's dimensions instead of stacking arbitrary negative margins. The outcome is a responsive interface, not just one attractive desktop image.

## JavaScript: make state explicit

Install Node.js LTS for tests and bundling when needed. Keep state transitions separate from rendering. The included [web lab](../labs/web-habits/README.md) is a small complete example that opens directly in a browser.

```javascript
export function choose(state, action) {
  if (state.done) return state;
  if (action === 'wash') return { done: true, correct: true };
  if (action === 'eat') return { done: true, correct: false };
  return state;
}
```

The important property is that a completed choice cannot earn points repeatedly. Test invalid input and retry behavior. For Three.js, distinguish source modules from a bundled release: development imports may need HTTP serving, while a self-contained build can include the runtime and assets. The [Pharma](https://github.com/Profkingkeys/Pharma-Simulation) and [KidSim](https://github.com/Profkingkeys/Kid-Simulation) repositories demonstrate that packaging distinction.

## Python: turn messy data into a reproducible answer

Install Python 3, create a virtual environment when using third-party packages, and use `python -m pip` so you know which interpreter installs them. Run the included lab:

```bash
python labs/data-analysis/analyze.py
python -m unittest discover -s labs/data-analysis -p 'test_*.py'
```

The outcome is a cleaned synthetic dataset and a reconciled report. Ask the model to explain every validation rule and propose a counterexample. Common challenges are mixed types, missing values and invisible notebook state. Resolve them with explicit schemas, unchanged raw inputs and scripts that run from a clean start. The full [data-analysis ebook](32-data-analysis-with-ai.md) develops this project.

## Rust: enforce invariants at the boundary

Install Rust through the official [Rust installation guide](https://doc.rust-lang.org/book/ch01-01-installation.html), then verify `rustc --version` and `cargo --version`. Create a project with `cargo new request-checker`. Put the supplied example from `labs/stack-examples/request_check.rs` into `src/main.rs`, then run:

```bash
cargo test
cargo run
cargo clippy -- -D warnings
```

The example rejects impossible fulfilled/requested counts. Ask AI to explain ownership and error handling in the code it proposes. Do not accept unsafe code simply to silence a compiler error. The outcome is a small predictable validator; a useful extension is processing large authorized operational logs with explicit error reporting. Challenges often include lifetime confusion or excessive abstraction. Simplify the data flow before adding traits and concurrency.

## Solidity: understand the contract before deployment

Use the official language documentation and a local or browser-based development environment such as [Remix](https://remix-ide.readthedocs.io/en/latest/run.html). Create the supplied `EvidenceRegistry.sol`, choose a compatible 0.8.x compiler satisfying its pragma, and use a local simulated EVM. Do not deploy with real funds for this exercise. The contract records a digest associated with the caller; it does not store patient information or prove that the underlying document is true.

Test registration, retrieval and the inability to overwrite another address's record through the provided interface. Ask AI to identify privilege boundaries, transaction costs and what remains public. Read [Solidity's security considerations](https://docs.soliditylang.org/en/latest/security-considerations.html). A content hash can establish a relationship to bytes, not ownership, consent or clinical validity. Avoid placing personal or sensitive information on an immutable public ledger.

## MySQL: design the data contract

Install MySQL Community Server or use an approved disposable development instance. Create a local learning database with a restricted user. Run `labs/stack-examples/schema.sql`, then inspect the table and constraints. The example records synthetic daily demand with a composite key and a constraint that fulfilled counts cannot exceed requests.

Use parameterized queries in application code. [MySQL's prepared-statement documentation](https://dev.mysql.com/doc/refman/8.4/en/sql-prepared-statements.html) explains the mechanism; parameters do not replace authorization. Tenant identity must come from trusted authentication and policy, not an unverified request header. Indexes should follow measured access patterns, and schema changes need a migration and rollback plan.

The outcome is an auditable data model. Common failures include duplicate keys, accidental many-to-many joins and transactions that only partly succeed. Ask AI to predict failure cases, then test them against the database. Never give a generated migration unrestricted production credentials just to see whether it works.

## Java: make validation portable

Follow the [official Java setup guide](https://dev.java/learn/getting-started/) to install a supported JDK and verify both `java -version` and `javac -version`. Compile and run the included `RequestCheck.java`:

```bash
javac labs/stack-examples/RequestCheck.java
java -cp labs/stack-examples RequestCheck
```

The program validates synthetic counts and prints a rate. Ask the assistant to distinguish compile-time errors, runtime exceptions and business-rule failures. A useful real-world extension is a file-import validator for an existing Java service. Avoid burying invalid data under a generic exception handler that reports success. The outcome should be a clear success or an actionable error.

## Kotlin: model state clearly

Use [Kotlin's official command-line instructions](https://kotlinlang.org/docs/command-line.html) or Android Studio. The supplied `HabitState.kt` demonstrates immutable state and a transition function. If you install the command-line compiler, compile it with `kotlinc HabitState.kt -include-runtime -d habit.jar`, then run `java -jar habit.jar`. Match these paths to the example's directory.

Ask AI to explain nullability, sealed states and the difference between a state value and a UI side effect. The outcome is a reducer you can test independently of an Android screen. Typical challenges include doing too much inside callbacks and accidentally repeating an event after a lifecycle change. Keep durable state separate from one-time effects.

## Android: connect the layers responsibly

Install Android Studio, the required SDK and a compatible JDK. Open [PharmWeb3's hybrid Android lab](https://github.com/Profkingkeys/PharmWeb3/tree/main/labs/mobile/hybrid-webview). Use its committed Gradle wrapper and documented versions rather than a random system Gradle installation.

```bash
./gradlew testDebugUnitTest
./gradlew assembleDebug
./gradlew connectedDebugAndroidTest
```

The last command needs a running compatible emulator or device. The repository CI builds a debug APK and runs an instrumentation test. A WebView/native bridge is a trust boundary: expose only necessary methods and do not load untrusted pages into a privileged bridge. UI operations must run on the UI thread. The official [Android Compose course](https://developer.android.com/courses/android-basics-compose/course) is a separate learning route for native UI.

## Combine stacks only when the problem needs them

A learning game may need HTML, CSS, JavaScript and Three.js, with no server. An authorized institutional dashboard may add an API, MySQL, authentication and audit logs. A high-throughput validator might justify Rust. A native Android experience may justify Kotlin and Java. Solidity belongs only where a public ledger solves a real requirement. More stacks do not automatically make the product more professional.

| Challenge | Better AI request | Acceptance evidence |
|---|---|---|
| Build failure | Explain this first failing log line and dependency context | Clean build passes |
| Wrong behavior | Reproduce this input and expected state transition | Regression test catches the old bug |
| Slow interface | Identify measured bottlenecks | Before/after timing on the same device |
| Security concern | Map inputs, privileges and trust boundaries | Unauthorized cases are rejected |
| Unclear architecture | Compare two minimal designs against requirements | A documented decision with tradeoffs |

## Advanced AI, AGI and SI

You can build useful AI-assisted systems today without claiming to have built AGI or superintelligence. Read the dedicated [AGI](28-agi-research-roadmap.md) and [SI](29-superintelligence-research.md) guides for bounded research paths. No programming language or prompt sequence guarantees either outcome.

Your capstone is a small complete product: a working interface, explicit state or data model, a meaningful failure test, setup instructions, a demo and an honest limitations section. Choose a healthcare-learning, accessibility, data-quality or public-service problem. Let AI accelerate iteration while you remain able to explain why the system should be trusted for its stated purpose.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

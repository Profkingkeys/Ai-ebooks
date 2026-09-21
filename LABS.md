# Practical labs

| Lab | Run | Outcome | Validation |
|---|---|---|---|
| Data analysis | `python labs/data-analysis/analyze.py` | Clean CSV and JSON report | Three regression tests; 800 requests, 646 fulfilled, 80.75% |
| HTML/CSS/JavaScript | Open `labs/web-habits/index.html` | Offline choice/retry interface | Manual keyboard and decision checklist |
| Rust | `rustc --test labs/stack-examples/request_check.rs -o /tmp/request-check-tests` then run it | Invalid-count handling | Unit tests; CI compilation |
| Java | Compile/run `RequestCheck.java` as chapter 09 describes | Rate calculation and validation | Executable checks; CI compilation |
| Kotlin | Compile/run `HabitState.kt` as chapter 09 describes | Immutable transition example | Source example; compiler exercise for reader |
| Solidity | Compile `EvidenceRegistry.sol` in a local simulated EVM | Per-caller digest registry | Learning exercise; not audited or production-deployed |
| MySQL | Run `schema.sql` in a disposable MySQL 8.4 database | Constrained synthetic demand table | Expected total shown in chapter 32 |
| Android | Use the PharmWeb3 hybrid lab | Debug APK and WebView bridge | Separate repository CI including emulator |

No lab needs real patient data, live trading, cryptocurrency funds or a paid model. Python outputs are generated locally and excluded from Git. See the chapter for setup and limitations.

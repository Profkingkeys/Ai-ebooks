# 05 · Medicine with AI: Become More Careful, Capable and Useful

**The note is fluent. The patient detail is wrong. In medicine, that difference matters more than how impressive the model sounds.**

AI can support medical education, documentation, literature review and appropriately validated clinical workflows. It does not confer a medical qualification or make someone the world's best doctor. Professional excellence grows through supervised training, sound judgment, communication, evidence and accountability. This guide builds a learning and information workflow, not a diagnostic or prescribing service.

## Setup and model choice

Choose one permitted task, such as summarizing a fictional consultation or organizing public research. Use synthetic cases for development. Define the source, intended user, clinical setting and what the system must not do. Obtain institutional approval before using real patient information, and verify contractual, privacy and security requirements for any external model.

A text model can draft a structured summary; a retrieval system can locate relevant passages. A general vision model is not interchangeable with a clinically validated imaging device. Performance must be established for the intended population and workflow. The [WHO AI-for-health guidance](https://www.who.int/publications/i/item/9789240029200) emphasizes governance and accountability; it does not certify a particular chatbot for clinical use.

## Build a source-faithful summary

Create a fictional note containing symptoms, history, medications and deliberately missing information. Ask the model to extract only what is explicitly present, with a source span for each field. It must report “not documented” instead of converting absence into a negative finding. “No allergy recorded” and “patient has no allergies” are different statements.

Then introduce a contradiction, such as two different dates or a medication mentioned as both current and stopped. The correct behavior is to flag it for review. Do not let the model resolve the conflict by guessing. A clinician or authorized reviewer must reconcile the actual record.

| Field | Acceptable behavior | Dangerous shortcut |
|---|---|---|
| Symptoms | Preserve the patient's reported information | Add a typical symptom not mentioned |
| Allergies | Distinguish absent documentation from a negative history | Assume none |
| Medication status | Mark uncertainty or contradiction | Choose a status without evidence |
| Assessment | Separate documented assessment from generated inference | Present a suggestion as the clinician's decision |
| Patient explanation | Draft for review in clear language | Promise an outcome |

## Learn clinical reasoning without outsourcing it

For education, ask AI to generate questions about a supplied case, then answer before seeing feedback. Compare the reasoning with approved teaching materials and a supervisor's explanation. Discuss what additional history, examination or investigation would be needed rather than treating the text case as a complete patient.

For literature work, record study design, population, intervention, comparator, outcomes and limitations. Do not turn a promising abstract into a treatment recommendation. The [disease-discovery guide](27-ai-for-disease-discovery.md) explains the distinction between computational hypotheses and evidence of patient benefit.

## Evaluation and troubleshooting

Measure omission, unsupported addition, contradiction handling and reviewer correction time. Include unfamiliar phrasing and incomplete records. A high average score can hide a rare but serious failure, so inspect error categories and consequences. Evaluate across relevant settings before claiming transferability.

If the model invents facts, reduce the task to extraction with source references and reject unsupported output. If a system creates extra work, measure review burden rather than assuming automation saves time. If different clinicians disagree about the reference answer, document the disagreement instead of forcing a false gold standard.

## Practical project and outcome

Build a fictional-note summarizer with twenty synthetic cases, a structured schema, a review checklist and an error report. No real patient data or clinical recommendations are needed. Ask a qualified educator to review its educational usefulness before sharing it as a training resource.

Your portfolio should state exactly what was tested and what was not. The ambition is to help healthcare professionals work with clearer information and fewer avoidable errors. The next step is supervised learning and careful evaluation—not giving a prototype authority over a patient's care.

---

If this has impacted you in any way, you can follow me on [GitHub](https://github.com/Profkingkeys), [X (Twitter)](https://x.com/Profkingkeys), and [LinkedIn](https://www.linkedin.com/in/prof-king-keys-110a24229).

— Kingsley Umoh · PharmWeb3

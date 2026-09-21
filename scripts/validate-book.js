import { readFile, readdir, access } from "node:fs/promises";

const chapterDir = new URL("../chapters/", import.meta.url);
const chapters = (await readdir(chapterDir)).filter((name) => name.endsWith(".md")).sort();
const failures = [];

if (chapters.length !== 12) failures.push(`Expected 12 chapters, found ${chapters.length}.`);

for (let index = 0; index < chapters.length; index += 1) {
  const expectedPrefix = String(index + 1).padStart(2, "0");
  const name = chapters[index];
  const content = await readFile(new URL(`../chapters/${name}`, import.meta.url), "utf8");
  if (!name.startsWith(expectedPrefix)) failures.push(`${name}: incorrect chapter order.`);
  if (!content.startsWith(`# ${expectedPrefix}`)) failures.push(`${name}: missing numbered H1.`);
  if (content.length < 1500) failures.push(`${name}: foundation draft is unexpectedly short.`);
  if (!content.includes("<pre>") && !content.includes("```mermaid")) failures.push(`${name}: add a visual system model.`);
}

const required = ["README.md", "BOOK.md", "REFERENCES.md", "RESEARCH_METHOD.md", "GLOSSARY.md", "MANUSCRIPT_STATUS.md", "CONTRIBUTING.md", "LICENSE.md", "_sidebar.md", "index.html"];
for (const path of required) {
  try { await access(new URL(`../${path}`, import.meta.url)); }
  catch { failures.push(`Missing required publishing file: ${path}`); }
}

const book = await readFile(new URL("../BOOK.md", import.meta.url), "utf8");
for (const chapter of chapters) {
  if (!book.includes(`chapters/${chapter}`)) failures.push(`BOOK.md does not link ${chapter}.`);
}

if (failures.length) {
  console.error(failures.map((item) => `FAIL: ${item}`).join("\n"));
  process.exit(1);
}

console.log(`PASS: ${chapters.length} chapters and ${required.length} publishing files validated.`);

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

// Chosen count: 143. A specific, non-round three-digit hoard — high enough
// to be surprising, low enough to read as a real lived-in tab count from
// someone juggling many projects, not a made-up 99999 or a boring 12.
const count = "143";
if (!/^\d{1,5}$/.test(count)) {
  throw new Error("entry must be 1-5 digits");
}

const target = process.env.ENTRY_OUTPUT_PATH
  ? resolve(here, process.env.ENTRY_OUTPUT_PATH)
  : "/output/entry.txt";

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, count, "utf8");

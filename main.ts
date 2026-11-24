// Entry for "Two Days of Quiet Dread" (make.fun).
//
// The brief: one code review comment, a single line of at most 140
// characters, that approves a pull request while carrying quiet
// existential dread. The judge reads entries two at a time and picks
// the funnier one, weighing — in order — that it approves and carries
// dread, that the laugh comes from the dread itself, that the dread
// stays quiet (understatement, flat tone), that it reads like a
// comment a tired engineer would really paste, and that it finds a
// fresh turn of phrase.
//
// The line below treats mortality as the largest unhandled edge case
// of the review: the reviewer did the diligence, found the one case
// nobody can patch, and approved anyway because the code, at least,
// handles it gracefully. One line, deterministic, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Approved. I checked the edge cases; the biggest one is that we're all temporary, and the code handles it gracefully.";

// Defensive gate: the scored text must be exactly one line of
// 1-140 characters with no leading or trailing whitespace.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

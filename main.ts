import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "Your luck turns tomorrow \u2014 today, the market merely borrowed your money and kept the change.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune + "\n", "utf8");

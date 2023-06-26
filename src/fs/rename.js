import { exists } from "../exists.js";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async (from, to) => {
  if (!(await exists(from)) || (await exists(to))) {
    throw new Error("fs operation failed");
  }

  await fs.rename(from, to);
};

await rename(
  path.join(__dirname, "files", "wrongFilename.txt"),
  path.join(__dirname, "files", "properFilename.md")
);

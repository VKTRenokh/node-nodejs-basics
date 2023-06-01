import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { exists } from "../exists.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async (path) => {
  if (!(await exists(path))) {
    throw new Error("fs operation failed");
  }

  console.log(...(await fs.readdir(path)));
};

await list(path.join(__dirname, "files"));

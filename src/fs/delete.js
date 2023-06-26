import path from "path";
import fs from "fs/promises";
import { exists } from "../exists.js";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async (file) => {
  if (!(await exists(file))) {
    throw new Error("fs operation failed");
  }

  fs.rm(file);
};

await remove(path.join(__dirname, "files", "fileToRemove.txt"));

import fs from "fs";
import path from "path";
import { exists } from "../exists.js";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async (path) => {
  if (!(await exists(path))) {
    throw new Error("fs operation failed");
  }

  fs.createReadStream(path).pipe(process.stdout);
};

await read(path.join(__dirname, "files", "fileToRead.txt"));

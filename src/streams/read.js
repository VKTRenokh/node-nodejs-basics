import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async (filePath) => {
  fs.createReadStream(filePath).pipe(process.stdout);
};

await read(path.join(__dirname, "files", "fileToRead.txt"));

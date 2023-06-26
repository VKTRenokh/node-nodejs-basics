import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async (filePath, algorithm) => {
  fs.createReadStream(filePath)
    .pipe(crypto.createHash(algorithm).setEncoding("hex"))
    .pipe(process.stdout);
};

await calculateHash(
  path.join(__dirname, "files", "fileToCalculateHashFor.txt"),
  "sha256"
);

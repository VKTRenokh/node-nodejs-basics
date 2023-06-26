import zlib from "zlib";
import { pipeline } from "stream";
import fs from "fs";
import path from "path";
import { exists } from "../exists.js";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async (sourceFilePath, targetFilePath) => {
  if (!(await exists(sourceFilePath)) || (await exists(targetFilePath))) {
    throw new Error("zip operation failed");
  }

  const source = fs.createReadStream(sourceFilePath);
  const gzip = zlib.createUnzip();
  const destination = fs.createWriteStream(targetFilePath);

  pipeline(source, gzip, destination, () => {});
};

await decompress(
  path.join(__dirname, "files", "archive.gz"),
  path.join(__dirname, "files", "decompressed.txt")
);

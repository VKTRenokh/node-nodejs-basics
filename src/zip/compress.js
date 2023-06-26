import zlib from "zlib";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { exists } from "../exists.js";
import { pipeline } from "stream";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async (filePath) => {
  if (!(await exists(filePath))) {
    throw new Error("zip operation failed");
  }

  const source = fs.createReadStream(filePath);
  const gzip = zlib.createGzip();
  const destination = fs.createWriteStream(
    path.join(path.dirname(filePath), "archive.gz")
  );

  pipeline(source, gzip, destination, () => {});
};

await compress(path.join(__dirname, "files", "fileToCompress.txt"));

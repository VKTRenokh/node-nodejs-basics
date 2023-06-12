import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async (filePath) => {
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.on("data", (data) => {
    const text = data.toString("utf-8");

    writeStream.write(text);
  });

  process.stdin.on("close", () => {
    writeStream.end();
  });

  writeStream.on("error", () => {
    console.log("streams operation failed");
  });
};

await write(path.join(__dirname, "files", "fileToWrite.txt"));

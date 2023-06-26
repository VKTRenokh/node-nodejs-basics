import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { exists } from "../exists.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copyDir = async (source, target) => {
  if (!(await exists(source)) || (await exists(target))) {
    throw new Error("fs operation failed");
  }

  await fs.promises.mkdir(target);
  const files = await fs.promises.readdir(source, { withFileTypes: true });

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const sourceFilepath = path.join(source, file.name);
    const targetFilepath = path.join(target, file.name);

    console.log(file.name);

    if (file.isFile()) {
      console.log("file\n");
      await fs.promises.cp(sourceFilepath, targetFilepath);
      continue;
    }
    await copyDir(sourceFilepath, targetFilepath);
  }
};

await copyDir(
  path.join(__dirname, "files"),
  path.join(__dirname, "files-copy")
);

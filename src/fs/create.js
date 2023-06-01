import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';
import { exists } from "../exists.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async (path, text) => {
  if (await exists(path)) {
    throw new Error('fs operation failed')
  }

  const writeStream = fs.createWriteStream(path)
  writeStream.write(text)
};

await create(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young');

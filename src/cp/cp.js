import path from "path";
import { fileURLToPath } from "url";
import childProcess from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (path, args) => {
  const process = childProcess.fork(path, args, {
    silent: false,
  });
};

spawnChildProcess(path.join(__dirname, "files", "script.js"), ["arg"]);

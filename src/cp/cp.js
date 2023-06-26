import path from "path";
import { fileURLToPath } from "url";
import childProcess from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (path, args) => {
  const child = childProcess.fork(path, args, {
    stdio: ["pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

spawnChildProcess(path.join(__dirname, "files", "script.js"), ["arg", "afesf"]);

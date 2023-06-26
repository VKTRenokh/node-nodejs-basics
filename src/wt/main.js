import os from "os";
import { fileURLToPath } from "url";
import path from "path";
import { Worker } from "worker_threads";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async (filePath) => {
  const num = 10;

  const workers = await Promise.allSettled(
    os.cpus().map((_, i) => {
      return new Promise((res, rej) => {
        const worker = new Worker(filePath, {
          workerData: num + i,
        });

        worker.on("message", (message) => {
          res(message);
        });
        worker.on("error", (err) => {
          rej(err);
        });
      });
    })
  );

  return workers.map((worker) => {
    const isResolved = worker.status === "fulfilled";

    return {
      status: isResolved ? "resolved" : "error",
      data: isResolved ? worker.value : null,
    };
  });
};

console.log(await performCalculations(path.join(__dirname, "worker.js")));

import { reverse } from "./reverse.transform.js";
import { nextLine } from "./nextLine.transform.js";

const transform = async () => {
  process.stdin.pipe(reverse).pipe(nextLine).pipe(process.stdout);
};

await transform();

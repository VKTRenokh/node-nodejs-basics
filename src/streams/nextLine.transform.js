import { Transform } from "stream";

export const nextLine = new Transform({
  transform(chunk, _, callback) {
    callback(null, chunk.toString() + "\n");
  },
});

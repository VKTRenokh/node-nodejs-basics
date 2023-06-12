import { Transform } from "stream";

export const reverse = new Transform({
  transform(chunk, _, callback) {
    callback(null, chunk.toString().split("").reverse().join(""));
  },
});

import { readFile } from "node:fs/promises";

const LIB = new URL("./library.log",import.meta.url);

const logs = await readFile(LIB,{ encoding: "utf-8" });
// console.log(logs);

const entries = logs.split("======== ").map(log => {
  // console.log(log);
  const lines: string[] = log.split("\n");
  if (lines.at(-1) === "") lines.pop();

  const path: string = lines.shift()!;
  const properties: [string,string][] = lines.map(line => {
    const entries = line.split(": ");
    const key: string = entries[0]!.trimEnd();
    const value: string = entries[1]!;
    return [key,value];
  });
  const content: Record<string,string> = {
    // path,
    ...Object.fromEntries(properties)
  };
  // console.log(content);

  return content;
});
console.log(entries);
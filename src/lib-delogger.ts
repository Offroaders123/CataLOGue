/**
 * Parse the log file of the songs in my music library.
*/
export function delogger(logs: string): Record<string, string>[] {
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

return entries;
}
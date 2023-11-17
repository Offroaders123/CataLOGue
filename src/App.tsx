import { delogger } from "./lib-delogger.js";

const logs: string = await fetch(new URL("./library.log",import.meta.url))
  .then(response => response.text());
console.log(logs);

const entries: Record<string, string>[] = delogger(logs);
console.log(entries);

export default function App(){
  return (
    <>
      <h1>CataLOGue</h1>
      {entries.map((entry) =>
        <section>
        {Object.entries(entry).map(property =>
          <p>{property[0]}: {property[1]}</p>
        )}
        </section>
      )}
    </>
  );
}
export interface SongProps {
  entry: Record<string, string>;
}

export default function Song({ entry }: SongProps){
  return (
    <fieldset>
      {Object.entries(entry).map(property =>
        property[0] === "Title"
          ? <legend id={property[1]}>{property[1]}</legend>
          : <p>{property[0]}: {property[1]}</p>
      )}
    </fieldset>
  );
}
import Image from "next/image";
import { Ability, Form, Mfe, Root } from "../../server/pokemon";

interface PokemonDetailsProps extends Root {
  from?: "page" | "modal";
}

export default function PokemonDetails({
  name,
  sprites,
  base_experience,
  forms,
  moves,
  abilities,
  height,
  weight,
  from = "page",
}: PokemonDetailsProps) {
  const size = from === "modal" ? 200 : 250;
  return (
    <>
      <h1 className="capitalize text-primary">{name}</h1>

      <div className="relative">
        <Image
          src={sprites.front_default}
          alt={name}
          width={size}
          height={size}
          className="animate-fade-in absolute m-0 right-0 -top-20"
        />

        <p className="font-bold text-secondary m-0">
          Base Experience: {base_experience}
        </p>
        <p>
          <span className="font-bold text-secondary">Height:</span> {height}{" "}
          inches / <span className="font-bold text-secondary">Weight:</span>{" "}
          {weight} lbs
        </p>
        <ListData title="Forms" name={name} data={forms} />
        <ListData title="Moves" name={name} data={moves} />
        <ListData title="Abilities" name={name} data={abilities} />
      </div>
    </>
  );
}

const ListData = ({
  title,
  name,
  data,
}: {
  title: string;
  name: string;
  data: Form[] | Mfe[] | Ability[];
}) => {
  const listName = (obj: Form | Mfe | Ability) => {
    if (obj.hasOwnProperty("move")) {
      return (obj as Mfe).move.name;
    }

    if (obj.hasOwnProperty("ability")) {
      return (obj as Ability).ability.name;
    }

    return (obj as Form).name;
  };

  return (
    <>
      <p className="font-bold mb-1 text-secondary">{title}:</p>
      <p className="flex mt-0 flex-row flex-wrap gap-1 text-xs capitalize">
        {data.map((d: Form | Mfe | Ability, index: number) => (
          <span key={`details-item-${name}-${index}`}>
            {listName(d)}
            {index !== data.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
    </>
  );
};

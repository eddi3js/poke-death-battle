"use client";

import { useRouter } from "next/navigation";
import { PokeListRaw } from "../../../server/models/pokemon";

export default function MobilePokemonNavigation({
  list,
  activePokemon,
}: {
  list: PokeListRaw[];
  activePokemon: string;
}) {
  const router = useRouter();

  const handlePokemonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(event.target.value);
  };

  return (
    <select
      onChange={handlePokemonChange}
      defaultValue={`/pokemon/${activePokemon}`}
      className="select capitalize p-0 mb-8 md:hidden w-full select-bordered pl-2"
    >
      {list.map((o) => (
        <option key={`navigate-to-${o.name}`} value={`/pokemon/${o.name}`}>
          {o.name}
        </option>
      ))}
    </select>
  );
}

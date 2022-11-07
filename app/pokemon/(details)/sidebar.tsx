import Link from "next/link";
import { use } from "react";
import { getPokemonList, PokeListRaw } from "../../../server/pokemon";

export default function Sidebar() {
  const pokeList = use(getPokemonList());
  return (
    <div className="flex flex-col w-48 border-r overflow-y-auto overflow-x-hidden">
      <h3 className="px-4 mt-4">All Pokemon</h3>

      <ul className="menu menu-compact p-0">
        {pokeList.map((p: PokeListRaw) => {
          return (
            <li
              key={p.name}
              className="m-0 border-t hover:border-base-100 border-base-200/[0.3]"
            >
              <Link
                className="rounded-none text-secondary hover:text-primary no-underline"
                href={`/pokemon/${p.name}`}
              >
                {p.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

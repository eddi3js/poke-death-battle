import { PokeListRaw } from "../../../../server/models/pokemon";
import { getPokemonList } from "../../../../server/pokemon";
import { sortByName } from "../../../../utils/sort";
import SidebarAction from "./action";

export default async function Sidebar() {
  const res = await getPokemonList();
  const pokemon = sortByName(res);

  return (
    <div className="flex flex-col w-48 overflow-x-hidden overflow-y-auto border-r">
      <h3 className="px-4 mt-4">All Pokemon</h3>

      <ul className="p-0 menu menu-compact">
        {pokemon.sort().map((p: PokeListRaw) => {
          return (
            <li
              key={p.name}
              className="m-0 capitalize border-t hover:border-base-100 border-base-200/[0.3]"
            >
              <SidebarAction name={p.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import {
  getPokemonByName,
  getPokemonList,
} from "../../../server/queries/pokemon";
import PokemonDetails from "../details";
import MobilePokemonNavigation from "./mobilePokemonNavigation";

export default async function AllPokemon({
  params,
}: {
  params: { name: string };
}) {
  const pokemon = await getPokemonByName(params.name);
  const pokemonList = await getPokemonList();
  return (
    <>
      <MobilePokemonNavigation activePokemon={params.name} list={pokemonList} />
      <PokemonDetails {...pokemon} />
    </>
  );
}

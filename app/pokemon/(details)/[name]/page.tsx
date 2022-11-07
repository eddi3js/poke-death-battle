import PokemonDetails from "../details";
import { getPokemonByName } from "../../../../server/pokemon";

export default async function AllPokemon({
  params,
}: {
  params: { name: string };
}) {
  const pokemon = await getPokemonByName(params.name);
  return <PokemonDetails {...pokemon} />;
}

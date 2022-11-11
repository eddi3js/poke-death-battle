import { getPokemonByName } from "../../../server/queries/pokemon";
import PokemonDetails from "../details";

export default async function AllPokemon({
  params,
}: {
  params: { name: string };
}) {
  const pokemon = await getPokemonByName(params.name);
  return <PokemonDetails {...pokemon} />;
}

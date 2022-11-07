import Link from "next/link";
import { getPokemonById } from "../../../server/pokemon";
import { getRandomPokemonIds } from "../../../server/randomIds";

export default async function PokemonListingPage() {
  const randomId = getRandomPokemonIds()[0];
  const pokemon = await getPokemonById(randomId);
  return (
    <div className="flex flex-1 flex-col justify-center items-center h-full">
      <h3>Choose a Pokemon from the left to see their details</h3>
      <p>
        Or <Link href={`/pokemon/${pokemon.name}`}>click here</Link> to see a
        random Pokemon.
      </p>
    </div>
  );
}

import { getRandomPokemonIds } from "../utils/randomIds";
import VoteBlock from "./components/infoCard";
import { Root } from "../server/models/pokemon";
import { getPokemonById } from "../server/pokemon";

const getPokemonsToVoteOn = async () => {
  const pokeIds = getRandomPokemonIds(3);
  const pokemon = await Promise.all(
    pokeIds.map(async (id) => {
      return await getPokemonById(id, "no-store");
    })
  );
  return pokemon;
};

const againstId = (pokeArray: Root[], currentId: number): number => {
  return pokeArray.find((poke) => poke.id !== currentId)?.id as number;
};

export default async function Home() {
  const pokemon = await getPokemonsToVoteOn();

  return (
    <div className="flex flex-col items-center justify-center md:w-screen md:h-screen">
      <h1 className="mt-4 text-center md:mt-0">Which Pokémon would win?</h1>

      <div className="flex flex-col items-center justify-between max-w-5xl gap-8 p-8 md:flex-row animate-fade-in">
        {pokemon.map((p: Root, i: number) => {
          return (
            <VoteBlock
              key={p.id}
              details={p}
              againstId={againstId(pokemon, p.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

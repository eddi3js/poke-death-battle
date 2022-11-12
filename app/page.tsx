import { getRandomPokemonIds } from "../utils/randomIds";
import VoteBlock from "./components/infoCard";
import { Root } from "../server/models/pokemon";
import { getPokemonById } from "../server/queries/pokemon";

const getPokemonsToVoteOn = async () => {
  const pokeIds = getRandomPokemonIds(2);
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
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <h1>Which Pokémon would win?</h1>
      <div className="p-8 gap-8 flex justify-between items-center max-w-2xl flex-col md:flex-row animate-fade-in">
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

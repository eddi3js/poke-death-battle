import { getRandomPokemonIds } from "../server/randomIds";
import VoteBlock from "../components/pokemon/vote/card";
import { getPokemonById, Root } from "../server/pokemon";

const getPokemonsToVoteOn = async () => {
  const pokeIds = getRandomPokemonIds(2);
  const pokemon = await Promise.all(
    pokeIds.map(async (id) => {
      return await getPokemonById(id, "no-store");
    })
  );
  return pokemon;
};

export default async function Home() {
  const pokemon = await getPokemonsToVoteOn();

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <h1>Which Pokémon would win?</h1>
      <div className="p-8 gap-8 flex justify-between items-center max-w-2xl flex-col md:flex-row animate-fade-in">
        {pokemon.map((p: Root) => {
          return <VoteBlock key={p.id} details={p} />;
        })}
      </div>
    </div>
  );
}

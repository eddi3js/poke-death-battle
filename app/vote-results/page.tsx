import Image from "next/image";
import { use } from "react";
import { PokeListing } from "../../server/models/pokemon";
import { getPokemonList } from "../../server/pokemon";
import { getResults } from "../../server/votes";

export default function VotingResults() {
  const { data, totalVotes } = use(getResults());
  const pokemon = use(getPokemonList(true));

  const votePercent = (pokemonId: number) => {
    const pokemon = data[pokemonId];
    if (!pokemon) return 0;

    return Math.round((pokemon.votes / totalVotes) * 100);
  };

  const orderedPokemon = pokemon.sort((a, b) => {
    const aVotes = votePercent(a.id);
    const bVotes = votePercent(b.id);

    if (aVotes > bVotes) return -1;
    if (aVotes < bVotes) return 1;
    return 0;
  });

  return (
    <div className="flex flex-col items-center justify-center flex-1 h-full">
      <h3>Voting Results</h3>

      <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-10 sm:p-0">
        {orderedPokemon.map(({ name, image, id }: PokeListing, idx: number) => {
          const medal =
            idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "";
          return (
            <div
              key={`pokemon-place-${id}`}
              className="relative flex flex-col items-center w-full p-4 rounded-md shadow-md"
            >
              <span className="absolute top-0 text-4xl left-2">{medal}</span>
              <Image
                alt={name}
                src={image}
                width={100}
                height={100}
                className="m-0"
              />
              <h4>{name}</h4>
              <p>{votePercent(id)}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

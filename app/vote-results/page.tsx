import Image from "next/image";
import { use } from "react";
import { PokeListing } from "../../server/models/pokemon";
import { getPokemonList } from "../../server/pokemon";
import { getResults } from "../../server/votes";
import ResultsContainer, { PokemonWrapper } from "./container";
import LayoutSwitcher from "./layout-switcher";

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
    <div className="relative flex flex-col items-center justify-center flex-1 h-full">
      <h3>Voting Results</h3>

      <LayoutSwitcher />

      <ResultsContainer>
        {orderedPokemon.map(({ name, image, id }: PokeListing, idx: number) => {
          return (
            <PokemonWrapper idx={idx} key={`pokemon-place-${id}`}>
              <Image
                alt={name}
                src={image}
                width={100}
                height={100}
                className="m-0"
              />
              <h4 className="m-0 capitalize">{name}</h4>
              <p className="m-0 text-2xl">{votePercent(id)}%</p>
            </PokemonWrapper>
          );
        })}
      </ResultsContainer>
    </div>
  );
}

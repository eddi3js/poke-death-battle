import Image from "next/image";
import { PokeListing, Root } from "../../server/models/pokemon";
import { getPokemonList } from "../../server/pokemon";
import { getResults } from "../../server/votes";

export const revalidate = 3;

export default async function VotingResults() {
  const { data, totalVotes } = await getResults();
  const pokemon = await getPokemonList(true);

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
    <div className="flex flex-1 flex-col justify-center items-center h-full">
      <h3>Voting Results</h3>

      <table className="table table-compact w-full max-w-xl">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th align="center">Vote %</th>
          </tr>
        </thead>
        <tbody>
          {orderedPokemon.map(({ name, image, id }: PokeListing) => (
            <tr key={name}>
              <td>
                <Image
                  alt={name}
                  src={image}
                  width={75}
                  height={75}
                  className="m-0"
                />
              </td>
              <td>{name}</td>
              <td align="center">{votePercent(id)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

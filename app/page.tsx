import Image from "next/image";
import { use } from "react";
import { getPokemonById, Root } from "../server/pokemon";
import { getRandomPokemonIds } from "../server/randomIds";
import VoteBlock from "./pokemon/voteBlock";
export default function Home() {
  const pokeIds = getRandomPokemonIds(2);

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <h1>Which Pokémon would win?</h1>
      <div className="p-8 gap-8 flex justify-between items-center max-w-2xl flex-col md:flex-row animate-fade-in">
        {pokeIds.map((id) => {
          return <VoteBlock key={id} id={id} />;
        })}
      </div>
    </div>
  );
}

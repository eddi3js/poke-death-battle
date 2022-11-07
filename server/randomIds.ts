import { POKEMON_LIMIT } from "./pokemon";

export const getRandomPokemonIds = (num?: number) =>
  Array.from(
    { length: num ?? 1 },
    () => Math.floor(Math.random() * POKEMON_LIMIT) + 1
  );

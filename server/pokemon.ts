import {
  BASE_URL,
  CacheType,
  PokeListing,
  POKEMON_LIMIT,
  Root,
} from "./models/pokemon";

export const getPokemonList = async (
  showImage?: boolean
): Promise<PokeListing[]> => {
  const res = await fetch(`${BASE_URL}?limit=${POKEMON_LIMIT}`);
  const json = await res.json();
  return json.results.map(({ url, name }: { url: string; name: string }) => {
    const pokemonId = url.split("/")[6];
    return {
      id: pokemonId,
      name,
      ...(showImage && {
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      }),
    };
  });
};

export const getPokemonByName = async (name: string): Promise<Root> => {
  return (await (await fetch(BASE_URL + name)).json()) as Root;
};

export const getPokemonById = async (
  id: number,
  cache?: CacheType
): Promise<Root> => {
  return (await (
    await fetch(BASE_URL + id, {
      cache: cache ?? "force-cache",
    })
  ).json()) as Root;
};

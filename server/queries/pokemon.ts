import db from "../config";
import {
  BASE_URL,
  CacheType,
  PokeListRaw,
  POKEMON_LIMIT,
  Root,
} from "../models/pokemon";

export const getPokemonList = async (): Promise<PokeListRaw[]> => {
  const res = await fetch(`${BASE_URL}?limit=${POKEMON_LIMIT}`);
  const data = await res.json();
  return data.results.map(({ id, name }: Root) => ({
    id,
    name,
  }));
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

export const castVote = async (votedFor: number, votedAgainst: number) => {
  const query =
    "INSERT INTO votes (voted_for, voted_against, createdAt) VALUES (?, ?, ?)";
  const params = [votedFor, votedAgainst, new Date().toISOString()];
  return await db(query, params);
};

export const getVotes = async () => {
  const query = "SELECT * FROM votes";
  return await db(query);
};

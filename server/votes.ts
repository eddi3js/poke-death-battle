import db from "./config";
import { Votes } from "./models/pokemon";
import { getPokemonById } from "./pokemon";

interface Results {
  [key: string]: {
    name: string;
    spriteUrl: string;
    votes: number;
    votedAgainst: number;
  };
}

export const getResults = async () => {
  const query = "SELECT * FROM votes";
  const rows = await db(query).then((res) => res.rows);
  const allVotes: Results = {};

  rows.forEach(async (row) => {
    const { votedFor, votedAgainst, votedForName, spriteUrl } = row as Votes;
    if (allVotes[votedFor]) {
      allVotes[votedFor].votes += 1;
    } else {
      allVotes[votedFor] = {
        name: votedForName,
        spriteUrl,
        votes: 1,
        votedAgainst: 0,
      };
    }
    if (allVotes[votedAgainst]) {
      allVotes[votedAgainst].votedAgainst += 1;
    } else {
      const res = await getPokemonById(votedAgainst);
      allVotes[votedAgainst] = {
        name: res.name,
        spriteUrl: res.sprites.other["official-artwork"].front_default,
        votes: 0,
        votedAgainst: 1,
      };
    }
  });

  const orderByVotes = (arr: Results) => {
    // loop through the object and create an array based on vote percentage
    // add the percentage to the object
    // then sort the array by vote percentage DESC
    const sorted = Object.values(arr)
      .map((p) => {
        const { votes, votedAgainst } = p;
        if (votes + votedAgainst === 0) {
          return { ...p, votePercent: 0 };
        }
        return {
          ...p,
          votePercent: (votes / (votes + votedAgainst)) * 100,
        };
      })
      .sort((a, b) => {
        const diff = b.votePercent - a.votePercent;
        if (diff === 0) {
          return b.votes - a.votes;
        }
        return diff;
      });
    return sorted;
  };

  return orderByVotes(allVotes);
};

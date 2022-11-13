import { number } from "zod";
import { Votes } from "../server/models/pokemon";

export const sortByName = (arr: any[]) =>
  arr.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

const votePercent = (p: Votes) => {
  const { votedFor, votedAgainst } = p;
  if (votedFor + votedAgainst === 0) {
    return 0;
  }
  return (votedFor / (votedFor + votedAgainst)) * 100;
};

export const orderByVotes = (arr: Votes[]) => {
  arr.sort((a, b) => {
    const diff = votePercent(b) - votePercent(a);
    if (diff === 0) {
      return b.votedFor - a.votedFor;
    }

    return diff;
  });
};

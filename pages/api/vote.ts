// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../server/config";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get the param keys/values from the request
  const q = req.query.params;
  console.log("q :>> ", q);

  // const query =
  //   "INSERT INTO votes (voted_for, voted_against, createdAt) VALUES (?, ?, ?)";

  // const params = [votedFor, votedAgainst, new Date().toISOString()];
  // await db(query, params);

  res.status(200);
}

import { connect } from "@planetscale/database/dist";

const planetscaleConfig = {
  host: process.env.PLANETSCALE_HOST,
  user: process.env.PLANETSCALE_USER,
  password: process.env.PLANETSCALE_PASSWORD,
};

const db = async (
  query: string,
  params: Array<string | number> | undefined = undefined
) => {
  const conn = await connect(planetscaleConfig);
  return await conn.execute(query, params);
};

export default db;

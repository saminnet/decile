import type { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
import { decrypt } from "../../../../utils/encryption";
import protectServerRoute from "../../../../utils/auth/protectServerRoute";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const {
        dbUser,
        host,
        database,
        password,
        port,
        ssl,
        table_schema,
        table_name,
      } = req.body;

      const pool = new Pool({
        user: dbUser,
        host: host,
        database: database,
        password: decrypt(password),
        port: port,
        ssl: ssl,
      });

      const columns = await pool.query(
        `SELECT *
        FROM information_schema.columns
       WHERE table_schema = '${table_schema}'
         AND table_name   = '${table_name}'
           ;`
      );

      return res.status(200).json({
        columns: columns.rows.map((r) => {
          return { type: r.data_type, name: r.column_name };
        }),
      });
    } catch (e) {
      console.log(e);
      throw new Error(`Something went wrong.`);
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
};

export default protectServerRoute(handle);

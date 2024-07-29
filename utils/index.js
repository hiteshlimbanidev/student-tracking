// import { drizzle } from "drizzle-orm/mysql2";
// import mysql from "mysql2/promise";

// const connection = await mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   database: "attandence_tracking",
//   password: "root",
//   port: "80",
// });

// const db = drizzle(connection);

import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";

const client = new Client({
  host: "127.0.0.1",
  username: "root",
  password: "root",
});

const db = drizzle(client);

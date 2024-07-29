export default {
  schema: "./utils/schema.js",
  dialect: "mysql",
  // out: "./drizzle",
  dbCredentials: {
    host: "127.0.0.1",
    user: "root",
    database: "attandence_tracking",
    password: "root",
    port: 3306,
  },
};

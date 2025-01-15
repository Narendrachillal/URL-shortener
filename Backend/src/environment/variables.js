import "dotenv/config";

const env = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URL,
};
export { env };

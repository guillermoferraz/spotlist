import dotenv from "dotenv";
dotenv.config();

const env = {
  database: {
    name: process.env.DB_NAME,
    containerName: process.env.DB_CONTAINER_NAME,
    port: process.env.DB_PORT,
    prefix: process.env.DB_PREFIX,
  },
  secret: process.env.SECRET,
  jwtSecret: process.env.JWT_SECRET,
  clientId: process.env.CLIENT_ID,
  redirect: process.env.REDIRECT_URI,
  spotSecret: process.env.CLIENT_SECRET
};
export default env;

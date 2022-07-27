import dotenv from 'dotenv';;
dotenv.config();

const env = {
    database :{
        name: process.env.DB_NAME,
        containerName: process.env.DB_CONTAINER_NAME,
        port: process.env.DB_PORT,
        prefix: process.env.DB_PREFIX
    }
};

export default env;
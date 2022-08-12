import mongoose from "mongoose";
import env from '../constants/config/env';

const connectDB = async () => {
    try{
        const db = await mongoose.connect(`${env.database.prefix}://${env.database.containerName}/${env.database.name}`)
        console.log('✅ DATABASE IS CONNECTED TO: ', db.connection.db.databaseName)
    } catch (e) {
        console.log(e)
    }
};
export default connectDB;
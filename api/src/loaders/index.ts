import expressLoader from './express';
import controllersLoader from './controllers';
import connectDB from '../db/database';

export default async ({ expressApp }) => {
    try {
        expressLoader({ app: expressApp })
        controllersLoader({ app: expressApp })
        await connectDB()
    } catch (err) {
        console.error(err)
    }
}
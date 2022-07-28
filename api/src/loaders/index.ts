import expressLoader from './express';
import controllersLoader from './controllers';
import passportLoader from './passport';
import connectDB from '../db/database';

export default async ({ expressApp }) => {
    try {
        passportLoader({ app: expressApp })
        expressLoader({ app: expressApp })
        await connectDB()
        controllersLoader({ app: expressApp })
    } catch (err) {
        console.error(err)
    }
}
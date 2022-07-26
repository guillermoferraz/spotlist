import expressLoader from './express';
import controllersLoader from './controllers';

export default async ({ expressApp }) => {
    try {
        expressLoader({ app: expressApp })
        controllersLoader({ app: expressApp })
    } catch (err) {
        console.error(err)
    }
}
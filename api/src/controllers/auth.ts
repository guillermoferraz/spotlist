import { Router } from 'express';
import { Response, Request, NextFunction } from 'express';
import AuthServices from '../services/auth';

const router = Router();

const AuthControllers = (app: Router) => {
    app.use('/auth', router);
    const AuthService = new AuthServices();

    router.post('/signin', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await AuthService.signin(req.body);
            if(response.status === 200) res.json(response)
            else res.status(response.status).json(response)
        } catch (err) {
            next(err)
        }
    })
    
};
export default AuthControllers;
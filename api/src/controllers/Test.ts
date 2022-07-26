import { Request, Response, Router } from 'express';

const router = Router();

const TestController = (app: Router) => {
    app.use('/', router);
    router.get("/ping", (req: Request, res: Response): void => {
        return res.status(200).send("pong")
    });
};
export default TestController;
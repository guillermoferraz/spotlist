import { Router } from 'express';

import TestController from './test';
import AuthControllers from './auth';
import UserControllers from './user';

export default () => {
    const app = Router();
    TestController(app);
    AuthControllers(app);
    UserControllers(app);
    return app;
}
import { Router } from 'express';

import TestController from './test';
import AuthControllers from './auth';
import UserControllers from './user';
import AdditionalControllers from './additionals';

export default () => {
    const app = Router();
    TestController(app);
    AuthControllers(app);
    UserControllers(app);
    AdditionalControllers(app);
    return app;
}
import { Router } from 'express';

import TestController from './test';
import AuthControllers from './auth';

export default () => {
    const app = Router();
    TestController(app);
    AuthControllers(app);
    return app;
}
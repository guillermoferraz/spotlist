import { Router } from 'express';

import TestController from './Test';

export default () => {
    const app = Router();
    TestController(app)
    return app
}
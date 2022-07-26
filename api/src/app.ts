import express from 'express';

const app = express();
require('./loaders').default({ expressApp: app })

export default app;

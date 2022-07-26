import express from 'express';
import controllers from '../controllers';

export default ({ app }: { app: express.Application }) => {
    app.use('/', controllers())
};
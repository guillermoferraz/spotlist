import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

export default ({ app }: { app: express.Application}) => {
    const port = process.env.PORT || 8000;

    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(cors());
    app.set('port', port);
};
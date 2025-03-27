import express from 'express';
import config from './config.js';
import appRouter from './routes/index.js'
import errorHandler from './middleware/error-handler.js';

const main = () => {
    const app = createApp();
    const port = config.server.port;
    startServer(app, port);
};

const createApp = () => {
    const app = express();
    configureMiddleware(app);
    configureRoutes(app);
    return app;
};

/**
 * 
 * @param {Express} app 
 */
const configureMiddleware = (app) => {
    app.use(express.json());
    console.log('Middleware configured.');
}

/**
 * 
 * @param {express} app 
 */
const configureRoutes = (app) => {
    app.use('/', appRouter);
    app.use(errorHandler);
    console.log('Routes configured.');
}

const startServer = (app, port) => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
}

main();
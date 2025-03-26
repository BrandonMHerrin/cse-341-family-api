import express from 'express';
import config from './config.js';
import appRouter from './routes/index.js'

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
 * @param {Express.Application} app 
 */
const configureMiddleware = (app) => {
    console.log('Middleware configured.');
}

/**
 * 
 * @param {express} app 
 */
const configureRoutes = (app) => {
    app.use('/', appRouter);
    console.log('Routes configured.');
}

const startServer = (app, port) => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
}

main();
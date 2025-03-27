import express from 'express';
import config from './config/config.js';
import appRouter from './routes/index.js'
import errorHandler from './middleware/error-handler.js';
import { connectDb } from './config/db.js';

const main = async () => {
    const app = await createApp();
    const port = config.server.port;
    startServer(app, port);
};

const createApp = async () => {
    const app = express();
    await initializeDbConnection();
    configureMiddleware(app);
    configureRoutes(app);
    return app;
};

const initializeDbConnection = async () => {
  try {
    await connectDb();
  } catch (error) {
    console.error('Failed to connect to database: ', error);
    process.exit(1);
  }
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
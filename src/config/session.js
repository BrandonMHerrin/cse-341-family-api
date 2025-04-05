import session from "express-session";
import config from "./config.js";
/**
 * Load session on App Start.
 * @param {Express} app 
 */
const loadSession = (app) => {
    app.use(session({
        secret: config.server.sessionSecret,
        resave: false,
        saveUninitialized: true
    }));
    return;
}

export default loadSession;
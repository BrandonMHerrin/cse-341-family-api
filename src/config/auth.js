import passport from "passport";
import {Strategy as GitHubStrategy} from 'passport-github2';
import { findAndUpdateUser, findUserById } from "../models/users.js";
import config from "./config.js";

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await findUserById(id);
        done(null, user)
    } catch (error) {
        done(error);
    }
    
});

passport.use(
    new GitHubStrategy(
        {
            clientID: config.server.githubClientId,
            clientSecret: config.server.githubClientSecret,
            callbackURL: config.server.githubCallbackUrl
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await findAndUpdateUser(profile);
                done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
)

export default passport;
import express from "express";
import { handleGihubCallBack, handleLogout } from "../controllers/auth.js";
import passport from "../config/auth.js";

const authRouter = express.Router();

authRouter.get('/github', passport.authenticate('github', {scope: ['user:email']}));

authRouter.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  handleGihubCallBack
);

authRouter.get('/logout', handleLogout)

export default authRouter;

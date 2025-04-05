import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    sessionSecret: process.env.SESSION_SECRET,
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    githubCallbackUrl: process.env.GITHUB_CALLBACK,
    host: process.env.HOST,
    port: process.env.PORT || 8080,
    nodeEnv: process.env.NODE_ENV,
    scheme: process.env.SCHEME,
  },
  mongo: {
    url: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PWD}@cluster0.t2lyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  },
};

export default config;
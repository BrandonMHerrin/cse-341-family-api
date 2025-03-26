import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    host: process.env.HOST,
    port: process.env.PORT || 8080,
    nodeEnv: process.env.NODE_ENV,
    scheme: process.env.SCHEME
  },
  mongo: {},
};

export default config;
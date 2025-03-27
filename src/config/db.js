import { Db, MongoClient } from "mongodb";
import config from "./config.js";

const {url} = config.mongo;
const client = new MongoClient(url);

let db;

export const connectDb = async () => {
    try {
        if (!db) {
            await client.connect();
            db = client.db('families');
            console.log('Connected to Database.')
        }
        return db;
    } catch (error) {
        console.error('Failed to connect to database', error);
        throw error;
    }
}

/**
 * 
 * @returns {Db} db
 */
export const getDb = () => {
    if (!db) {
        throw new Error('Dababase not connected. Call connectDB first.');
    }
    return db;
}
import { Collection, Db, MongoClient } from "mongodb";
import config from "./config.js";

const {url} = config.mongo;
const client = new MongoClient(url);

let db;

let eventsCollection;
let householdsCollection;

export const connectDb = async () => {
    try {
        if (!db) {
            await client.connect();
            db = client.db('families');
            eventsCollection = db.collection('events');
            householdsCollection = db.collection('households');
            console.log('Connected to Database.')
        }
        return;
    } catch (error) {
        console.error('Failed to connect to database', error);
        throw error;
    }
}

/**
 * 
 * @returns {Collection} eventsCollection
 */
export const eventsCol = () => {
    if (!eventsCollection) {
        throw Error('Events collection not loaded.');
    }
    return eventsCollection;
}

/**
 * 
 * @returns {Collection} householdsCollection
 */
export const householdsCol = () => {
    if (!householdsCollection) {
        throw Error('Households collection not loaded.');
    }
    return householdsCollection
}

import { ObjectId } from "mongodb";
import { getDb } from "../config/db.js";

const col = getDb().collection('events');

/**
 * 
 * @param {string} householdId 
 * @returns 
 */
export const getAllEventDocuments = async (householdId) => {
    return await col.find({householdId: new ObjectId(householdId)}).toArray();
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const getEventDocument = async (id) => {
    return await col.findOne({ _id: new ObjectId(id)});
}

/**
 * 
 * @param {*} newEvent 
 * @returns 
 */
export const createEventDocument = async (newEvent) => {
    return (await col.insertOne(newEvent)).insertedId
}

/**
 * 
 * @param {string} id 
 * @param {*} update 
 * @returns 
 */
export const updateEventDocument = async (id, update) => {
    return await col.updateOne({_id: new ObjectId(id)}, update);
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const deleteEventDocument = async (id) => {
    return await col.deleteOne({_id: new ObjectId(id)});
}
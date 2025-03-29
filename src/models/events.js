import { ObjectId } from "mongodb";
import { eventsCol } from "../config/db.js";
/**
 * 
 * @param {string} householdId 
 * @returns 
 */
export const getAllEventDocuments = async (householdId) => {
    return await eventsCol().find({householdId: new ObjectId(householdId)}).toArray();
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const getEventDocument = async (id) => {
    return await eventsCol().findOne({ _id: new ObjectId(id)});
}

/**
 * 
 * @param {*} newEvent 
 * @returns 
 */
export const createEventDocument = async (newEvent) => {
    return (await eventsCol().insertOne(newEvent)).insertedId
}

/**
 * 
 * @param {string} id 
 * @param {*} update 
 * @returns 
 */
export const updateEventDocument = async (id, update) => {
    return await eventsCol().updateOne({_id: new ObjectId(id)}, update);
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const deleteEventDocument = async (id) => {
    return await eventsCol().deleteOne({_id: new ObjectId(id)});
}
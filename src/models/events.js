import { ObjectId } from "mongodb";
import { eventsCol } from "../config/db.js";
/**
 * 
 * @param {string} householdId 
 * @returns 
 */
export const getAllEventDocuments = async (householdId) => {
    return eventsCol()
      .find({ householdId: householdId })
      .toArray();
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const getEventDocument = async (id) => {
    return eventsCol().findOne({ _id: new ObjectId(id)});
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
    return eventsCol().updateOne({_id: new ObjectId(id)}, {$set:update});
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const deleteEventDocument = async (id) => {
    return eventsCol().deleteOne({_id: new ObjectId(id)});
}
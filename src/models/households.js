import { ObjectId } from "mongodb";
import { householdsCol } from "../config/db.js";

export const getAllHouseholdDocuments = async () => {
    return await householdsCol().find().toArray();
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const getHouseholdDocument = async (id) => {
    const doc = await householdsCol().findOne({_id: new ObjectId(id )});
    if (!doc) {
        throw new Error('Document not found.');
    }
    return doc;
}

/**
 * 
 * @param {*} newHousehold 
 * @returns 
 */
export const createHouseholdDocument = async (newHousehold) => {
    const newHouseholdId = (await householdsCol().insertOne(newHousehold)).insertedId;
    if (!newHouseholdId) {
        throw new Error('Failed to create new household.');
    }
    return newHouseholdId;
}

/**
 * 
 * @param {string} id 
 * @param {*} update 
 * @returns 
 */
export const updateHouseholdDocument = async (id, update) => {
    const result = await householdsCol().updateOne({_id: new ObjectId(id)}, {$set:update});
    if (result.modifiedCount !== 1) {
        throw new Error('Failed to modify document');
    }
    return;
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const deleteHouseholdDocument = async (id) => {
    const result = await householdsCol().deleteOne({_id: new ObjectId(id)});
    if (result.deletedCount !== 1) {
        throw new Error('Failed to delte document.');
    }
    return;
}
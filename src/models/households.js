import { ObjectId } from "mongodb";
import { getDb } from "../config/db";

const col = getDb().collection('households');

export const getAllHouseholdDocuments = async () => {
    return await col.find().toArray();
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const getHouseholdDocument = async (id) => {
    return await col.findOne({_id: new ObjectId(id )});
}

/**
 * 
 * @param {*} newHousehold 
 * @returns 
 */
export const createHouseholdDocument = async (newHousehold) => {
    return (await col.insertOne(newHousehold)).insertedId;
}

/**
 * 
 * @param {string} id 
 * @param {*} update 
 * @returns 
 */
export const updateHouseholdDocument = async (id, update) => {
    return await col.updateOne({_id: new ObjectId(id)}, update);
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const deleteHouseholdDocument = async (id) => {
    return await col.deleteOne({_id: new ObjectId(id)});
}
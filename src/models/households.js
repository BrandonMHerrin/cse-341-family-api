import { ObjectId } from "mongodb";
import { householdsCol } from "../config/db.js";

export const getAllHouseholdDocuments = async () => {
    return householdsCol().find().toArray();
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const getHouseholdDocument = async (id) => {
    return householdsCol().findOne({_id: new ObjectId(id )});
}

/**
 * 
 * @param {*} newHousehold 
 * @returns 
 */
export const createHouseholdDocument = async (newHousehold) => {
    return (await householdsCol().insertOne(newHousehold)).insertedId;
}

/**
 * 
 * @param {string} id 
 * @param {*} update 
 * @returns 
 */
export const updateHouseholdDocument = async (id, update) => {
    return householdsCol().updateOne({_id: new ObjectId(id)}, {$set:update});
}

/**
 * 
 * @param {string} id 
 * @returns 
 */
export const deleteHouseholdDocument = async (id) => {
    return householdsCol().deleteOne({_id: new ObjectId(id)});
}
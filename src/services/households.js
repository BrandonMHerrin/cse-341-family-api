import { deleteEventDocument } from '../models/events.js';
import { createHouseholdDocument, getAllHouseholdDocuments, getHouseholdDocument, updateHouseholdDocument } from '../models/households.js';

export const getHouseholds = async () => {
    return await getAllHouseholdDocuments();
}

export const getHousehold = async (id) => {
    return await getHouseholdDocument(id);
}

export const createHousehold = async (household) => {
    return await createHouseholdDocument(household);
}

export const updateHousehold = async (id, update) => {
    await updateHouseholdDocument(id, update);
    return;
}

export const removeHousehold = async (id) => {
    await deleteEventDocument(id);
    return;
}
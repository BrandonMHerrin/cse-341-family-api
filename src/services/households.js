import { createHouseholdDocument, deleteHouseholdDocument, getAllHouseholdDocuments, getHouseholdDocument, updateHouseholdDocument } from '../models/households.js';
import NotFoundError from '../errors/notfound.js';
import ServiceError from '../errors/service.js';

export const getHouseholds = async () => {
    return await getAllHouseholdDocuments();
}

export const getHousehold = async (id) => {
    const household = await getHouseholdDocument(id);
    if (!household) {
        throw new NotFoundError("Household not found.");
    }
    return household;
}

export const createHousehold = async (household) => {
    const newHouseholdId = await createHouseholdDocument(household);
    if (!newHouseholdId) {
        throw new ServiceError("Failed to create household.");
    } 
    return newHouseholdId;
}

export const updateHousehold = async (id, update) => {
    const updateResult = await updateHouseholdDocument(id, update);
    if (updateResult.matchedCount !== 1) {
        throw new ServiceError("Failed to update household");
    }
    return;
}

export const removeHousehold = async (id) => {
    const deleteResult = await deleteHouseholdDocument(id);
    if (deleteResult.deletedCount !== 1) {
        throw new ServiceError("Failed to delete household.");
    }
    return;
}
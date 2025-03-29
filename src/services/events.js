import NotFoundError from "../errors/notfound.js";
import ServiceError from "../errors/service.js";
import { createEventDocument, deleteEventDocument, getAllEventDocuments, getEventDocument, updateEventDocument } from "../models/events.js";
import { getHouseholdDocument } from "../models/households.js";

export const getEvents = async (householdId) => {
    return await getAllEventDocuments(householdId);
};
export const getEvent = async (eventId) => {
    const event = await getEventDocument(eventId);
    if (!event) {
        throw new NotFoundError("Event not found.");
    }
    return event;
};
export const createEvent = async (newEvent) => {
    const householdId = newEvent.householdId;
    const getHouseholdResult = await getHouseholdDocument(householdId);
    if (!getHouseholdResult) {
        throw Error("Household doesn't exist.")
    }
    const eventId = await createEventDocument(newEvent);
    if (!eventId) {
        throw new ServiceError("Failed to create event.");
    }
    return eventId;
};
export const updateEvent = async (id, update) => {
    const updateResult = await updateEventDocument(id,update);
    if (updateResult.matchedCount !== 1) {
        throw new ServiceError("Failed to update event.");
    }
    return;
};
export const removeEvent = async (id) => {
    const deleteResult = await deleteEventDocument(id);
    if (deleteResult.deletedCount !== 1) {
        throw new ServiceError("Failed to delete event.");
    }
    return;
};
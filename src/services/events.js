import { createEventDocument, deleteEventDocument, getAllEventDocuments, getEventDocument, updateEventDocument } from "../models/events.js";

export const getEvents = async (householdId) => {
    return getAllEventDocuments(householdId);
};
export const getEvent = async (eventId) => {
    return getEventDocument(eventId);
};
export const createEvent = async (newEvent) => {
    return createEventDocument(newEvent);
};
export const updateEvent = async (id, update) => {
    return updateEventDocument(id,update);
};
export const removeEvent = async (id) => {
    return deleteEventDocument(id);
};
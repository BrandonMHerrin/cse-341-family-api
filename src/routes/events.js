import express from 'express';
import { addEvent, deleteEvent, fetchEvent, fetchEvents, modifyEvent } from '../controllers/events.js';
import { addEventValidationRules, addHouseholdValidationRules, basicIdValidationRule, getEventsValidationRule, updateEventValidationRules, validate } from '../middleware/validator.js';
import { isAuthenticated } from '../middleware/auth.js';

const eventRouter = express.Router();

/**
 * Route to return all events.
 */
eventRouter.get('/household/:householdId', getEventsValidationRule(), validate, fetchEvents);

/**
 * Route to return a single event by id.
 */
eventRouter.get('/:id', basicIdValidationRule(), validate, fetchEvent);

/**
 * Route to create new events.
 */
eventRouter.post('/', isAuthenticated, addEventValidationRules(), validate, addEvent);

/**
 * Route for modifying existing events.
 */
eventRouter.put('/:id', isAuthenticated, updateEventValidationRules(), validate, modifyEvent);

/**
 * Route for deleting existing events.
 */
eventRouter.delete('/:id', isAuthenticated, basicIdValidationRule(), validate, deleteEvent);

export default eventRouter;
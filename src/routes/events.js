import express from 'express';
import { addEvent, deleteEvent, fetchEvent, fetchEvents, modifyEvent } from '../controllers/events.js';
import { addEventValidationRules, addHouseholdValidationRules, basicIdValidationRule, updateEventValidationRules, validate } from '../middleware/validator.js';

const eventRouter = express.Router();

/**
 * Route to return all events.
 */
eventRouter.get('/:householdId', basicIdValidationRule(), validate, fetchEvents);

/**
 * Route to return a single event by id.
 */
eventRouter.get('/:id', basicIdValidationRule(), validate, fetchEvent);

/**
 * Route to create new events.
 */
eventRouter.post('/:householdId', addEventValidationRules(), validate, addEvent);

/**
 * Route for modifying existing events.
 */
eventRouter.put('/:id', updateEventValidationRules(), validate, modifyEvent);

/**
 * Route for deleting existing events.
 */
eventRouter.delete('/:id', basicIdValidationRule(), validate, deleteEvent);

export default eventRouter;
import express from 'express';
import { addHousehold, deleteHousehold, fetchHousehold, fetchHouseholds, modifyHousehold } from '../controllers/households.js';
import { addHouseholdValidationRules, basicIdValidationRule, updateHouseholdValidationRules, validate } from '../middleware/validator.js';

const householdRouter = express.Router();

householdRouter.get('/', fetchHouseholds);
householdRouter.get('/:id', basicIdValidationRule(), validate, fetchHousehold);
householdRouter.post('/', addHouseholdValidationRules(), validate, addHousehold);
householdRouter.put('/:id', updateHouseholdValidationRules(), validate, modifyHousehold);
householdRouter.delete('/:id', basicIdValidationRule(), validate, deleteHousehold);

export default householdRouter;
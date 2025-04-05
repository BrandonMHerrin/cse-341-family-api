import express from 'express';
import { addHousehold, deleteHousehold, fetchHousehold, fetchHouseholds, modifyHousehold } from '../controllers/households.js';
import { addHouseholdValidationRules, basicIdValidationRule, updateHouseholdValidationRules, validate } from '../middleware/validator.js';
import { isAuthenticated } from '../middleware/auth.js';

const householdRouter = express.Router();

householdRouter.get('/', fetchHouseholds);
householdRouter.get('/:id', basicIdValidationRule(), validate, fetchHousehold);
householdRouter.post('/', isAuthenticated, addHouseholdValidationRules(), validate, addHousehold);
householdRouter.put('/:id', isAuthenticated, updateHouseholdValidationRules(), validate, modifyHousehold);
householdRouter.delete('/:id', isAuthenticated, basicIdValidationRule(), validate, deleteHousehold);

export default householdRouter;
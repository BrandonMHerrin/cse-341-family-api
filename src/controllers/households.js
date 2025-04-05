import { createHousehold, getHousehold, getHouseholds, removeHousehold, updateHousehold } from "../services/households.js";

export const fetchHouseholds = async (req, res, next) => {
  /*
        #swagger.summary = 'Get all households.'
        #swagger.description = 'Fetches a list of all households from the database.'
        #swagger.responses[200] = {
            descriptoin: 'A list of households.',
            schema: {$ref: '#/definitions/Households'}
        }
        #swagger.responses[404]
    */
   try {
        const households = await getHouseholds();
        return res.status(200).json(households);
   } catch (error) {
        next(error);
   }
};
export const fetchHousehold = async (req, res, next) => {
  /*
        #swagger.summary = 'Get household by id.'
        #swagger.description = 'Fetches details of a specific household by its id.'
        #swagger.parameters[id] = {
            required: true,
            description: 'Id of the household to be returned.'
        }
        #swagger.responses[200] = {
            description: 'A single household.',
            schema: {$ref: '#/definitions/Household'}
        }
        #swagger.responses[400]
        #swagger.responses[404]
    */
   try {
        const {id} = req.params;
        const household = await getHousehold(id);
        return res.status(200).json(household);
   } catch (error) {
        return next(error);
   }
};
export const addHousehold = async (req, res, next) => {
  /*
        #swagger.summary = 'Create new household.'
        #swagger.description = 'Adds a new household to the database.'
        #swagger.parameters[New Household] = {
            in: 'body',
            description: 'New household to add',
            required: true,
            schema: {$ref: '#/definitions/AddHousehold'}
        }
        #swagger.responses[201] = {
            description: 'Household created successfully',
            schema: '3888djdjdje'
        }
        #swagger.responses[400]
        #swagger.responses[401]
    */
   try {
        const newHousehold = req.body;
        const newHouseholdId = await createHousehold(newHousehold);
        return res.status(201).send(newHouseholdId);
   } catch (error) {
        return next(error);
   }
};
export const modifyHousehold = async (req, res, next) => {
  /*
        #swagger.summary = 'Modify an existing household.'
        #swagger.description = 'Updates the details of an existing household.'
        #swagger.parameters[id] = {
            required: true,
            description: 'Id of the object to modify.'
        }
        #swagger.parameters[update] = {
            in: 'body',
            required: true,
            description: 'Object with desired changes.',
            schema: {$ref: '#/definitions/UpdateHousehold'}
        }
        #swagger.responses[200] = {
            description: 'Household updated successfully.'
        }
        #swagger.responses[400]
        #swagger.responses[401]
        #swagger.responses[404]
    */
   try {
        const {id} = req.params;
        const update = req.body;
        await updateHousehold(id, update);
        return res.status(200).send();
   } catch (error) {
        return next(error);
   }
};
export const deleteHousehold = async (req, res, next) => {
  /*
        #swagger.summary = 'Delete an existing household.'
        #swagger.description = 'Removes a household from the database.'
        #swagger.parameters[id] = {
            required: true,
            description: 'Id of the household to delete.'
        }
        #swagger.responses[204] = {
            description: 'Household deleted successfully.'
        }
        #swagger.responses[400]
        #swagger.responses[401]
        #swagger.responses[404]
    */
   try {
        const {id} = req.params;
        await removeHousehold(id);
        return res.status(204).send();
   } catch (error) {
        return next(error);
   }
};

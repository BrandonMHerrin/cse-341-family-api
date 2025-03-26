export const fetchHouseholds = (req, res) => {
  /*
        #swagger.summary = 'Get all households.'
        #swagger.description = 'Fetches a list of all households from the database.'
        #swagger.responses[200] = {
            descriptoin: 'A list of households.',
            schema: {$ref: '#/definitions/Households'}
        }
        #swagger.responses[404]
    */
   res.status(200).send('Hello');
};
export const fetchHousehold = (req, res) => {
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
};
export const addHousehold = (req, res) => {
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
    */
};
export const modifyHousehold = (req, res) => {
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
            schema: {$ref: '#/definitions/Household'}
        }
        #swagger.responses[200] = {
            description: 'Household updated successfully.'
        }
        #swagger.responses[400]
        #swagger.responses[404]
    */
};
export const deleteHousehold = (req, res) => {
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
        #swagger.responses[404]
    */
};

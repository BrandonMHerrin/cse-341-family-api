/**
 * Controller to handle requests to fetch all events.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const fetchEvents = (req, res) => {
  /*
        #swagger.summary = 'Get all events.'
        #swagger.description = 'Fetches a list of all events from the database.'
        #swagger.responses[200] = {
            description: 'A list of events',
            schema: { $ref: '#/definitions/Events'}
        }
        #swagger.responses[404]
    */
  console.log("Request received.");
  res.status(200).send();
};

/**
 * Controller to handle requests to fetch individual events by id.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const fetchEvent = (req, res) => {
  /*
        #swagger.summary = 'Get event by id.'
        #swagger.description = 'Fetches details of a specific event by its id.'
        #swagger.parameters[id] = {
            required: true,
            description: 'Id of the event to be returned.'
        }
        #swagger.responses[200] = {
            description: 'A single event',
            schema: { $ref: '#definitions/Event'}
        }
        #swagger.responses[404]
    */
  res.status(200).send();
};

/**
 * Controller to handle requests to add new events.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const addEvent = (req, res) => {
  /*
        #swagger.summary = 'Create new event.'
        #swagger.description = 'Adds a new event to the database.'
        #swagger.parameters[New Event] = {
            in: 'body',
            required: true,
            description: 'New event to be added.',
            schema: {$ref: '#/definitions/AddEvent'}
        }
        #swagger.responses[201] = {
            description: 'Household created successfully',
            schema: 'sldkfh3lkdjh'
        }
    */
  res.status(201).send();
};

/**
 * Controller to handle requests to modify existing events.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const modifyEvent = (req, res) => {
  /*
        #swagger.summary = 'Modify an existing event.'
        #swagger.description = 'Updates the details of an existing event.'
        #swagger.parameters[id] = {
            required: true,
            descriptioin: 'Id of event to modify'
        }
        #swagger.parameters[update] = {
            in: 'body', 
            description: 'Object with the desired changes',
            required: true,
            schema: {$ref: '#/definitions/Event'}
        }
        #swagger.responses[404]
    */
  res.status(200).send();
};

/**
 * Controller to handle requeests to delete existing events.
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
export const deleteEvent = (req, res) => {
  /*
        #swagger.summary = 'Delete an existing event.'
        #swagger.description = 'Removes an event from the database.'
        #swagger.parameters[id] = {
            required: true,
            description: 'Id of the event to delete.'
        }
        #swagger.responses[204] = {
            description: 'Event deleted successfully.'
        }
        #swagger.responses[404]
    */
  res.status(204).send();
};

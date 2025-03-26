/**
 * Loads shared swagger properties for event routes.
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
const loadEventsSwaggerProps = (req, res, next) => {
    /* 
        #swagger.tags = ['Events']
    */
   next();
};

export default loadEventsSwaggerProps;
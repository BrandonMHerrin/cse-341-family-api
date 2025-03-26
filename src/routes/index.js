import express from 'express';
import swaggerRouter from './swagger.js'
import eventRouter from './events.js';
import householdRouter from './households.js';

const router = express.Router();

router.use('/', swaggerRouter);

router.use(
  "/households",
  householdRouter
  /*
        #swagger.tags = ['Household']
        #swagger.responses[400] = {
            ifStatusPresent: true,
            schema: {$ref: '#/definitions/Errors'}
        }
        #swagger.responses[401] = {
            description: 'Unauthorized. Authentication required.'
        }
        #swagger.responses[404] = {
            ifStatusPresent: true,
            schema: {$ref: '#/definitions/NotFound'}
        }
        #swagger.responses[500] = {
            description: 'Server Error',
            schema: {$ref: '#/definitions/Error'}
        }
    */
);

router.use(
  "/events",
  eventRouter
  /* 
        #swagger.tags = ['Events']
        #swagger.responses[400] = {
            ifStatusPresent: true,
            schema: {$ref: '#/definitions/Errors'}
        }
        #swagger.responses[401] = {
            description: 'Unauthorized. Authentication required.'
        }
        #swagger.responses[404] = {
            schema: {$ref: '#/definitions/NotFound'}
        }
        #swagger.responses[500] = {
            description: 'Server Error',
            schema: {$ref: '#/definitions/Error'}
        }
    */
);

export default router;
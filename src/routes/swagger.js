import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import loadJson from '../utils/load-json.js';
import config from '../config.js';

const swaggerDoc = loadJson('src/swagger/swagger.json');

const router = Router();

router.use('/api-docs', swaggerUi.serve);
router.use('/api-docs', swaggerUi.setup(swaggerDoc));

export default router;
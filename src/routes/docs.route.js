import express from 'express';

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const router = express.Router();
const swaggerSpec = YAML.load('../swagger/swagger.yaml');

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;

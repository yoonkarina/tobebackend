import express from 'express';
import fs from 'fs';
import path from 'path';

import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';
// import swaggerDocs from '../swagger/swagger.yml';

const router = express.Router();
const file = fs.readFileSync(
  path.join(__dirname, '../swagger/swagger.yml'),
  'utf8',
);
const swaggerSpec = YAML.parse(file);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;

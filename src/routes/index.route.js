import _ from 'lodash';
import express from 'express';
import swaggerRoute from './docs.route';

import '../configs/env.config';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/docs',
    route: swaggerRoute,
  },
];

const devRoutes = [
  // Routes available only in development mode
  {
    path: '/docs',
    route: swaggerRoute,
  },
];

_.forEach(defaultRoutes, route => {
  router.use(route.path, route.route);
});

if (['development', 'staging'].includes(process.env.NODE_ENV)) {
  _.forEach(devRoutes, route => {
    router.use(route.path, route.route);
  });
}
export default router;

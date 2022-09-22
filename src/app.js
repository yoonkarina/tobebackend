import express from 'express';

import './configs/env.config';
import route from './routes/index.route';
import errorHandler from './middlewares/errorHandler.middleware';
import { NotFoundError } from './helpers/error.helpers';

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening to PORT ${process.env.PORT}`);
});

// * Routes definitions
app.use('/', route);

// * send back a 404 error for any unknown api request
// eslint-disable-next-line no-unused-vars
app.all('*', (_, res) => {
  throw new NotFoundError('Resource not found on this server!!');
});
app.use(errorHandler);

export default app;

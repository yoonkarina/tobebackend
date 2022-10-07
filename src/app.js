import express from 'express';
import cors from 'cors';

import './configs/env.config';
import router from './routes/index.route';
import errorHandler from './middlewares/errorHandler.middleware';
import { NotFoundError } from './helpers/error.helpers';

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Listening to PORT ${process.env.PORT}`);
});
app.use(
  cors({
    origin: true, // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  }),
);
// * Routes definitions
app.use('/', router);

// * send back a 404 error for any unknown api request
// eslint-disable-next-line no-unused-vars
app.all('*', (_, res) => {
  console.log('log');
  throw new NotFoundError('Resource not found on this server!!');
});
app.use(errorHandler);

export default app;

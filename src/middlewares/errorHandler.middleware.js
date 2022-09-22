/**
 * This middleware is responsible for returning a json every time
 * an error comes in. We use in the app.js as global middleware
 */
import { config } from 'dotenv';

config();

export default (err, request, response, next) => {
  if (response.headersSent) {
    return next(err);
  }

  return response.status(err.statusCode || 500).json({
    msg: err.msg || err.message,
    ...(err.errors && { errors: err.errors }),
  });
};

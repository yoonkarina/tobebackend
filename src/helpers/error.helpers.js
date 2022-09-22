export class ApplicationError extends Error {
  constructor(statusCode, message = 'Internal Server Error') {
    super(message);
    this.statusCode = statusCode || 500;
  }
}
export class ValidationError extends ApplicationError {
  constructor(message = '') {
    super(400, message || 'ValidationError Error');
  }
}

export class AuthenticationError extends ApplicationError {
  constructor(message = '') {
    super(401, message || 'Authentication Error');
  }
}

export class AuthorizationError extends ApplicationError {
  constructor(message = '') {
    super(403, message || 'Authorization Error');
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message = '') {
    super(404, message || 'NotFoundError Error');
  }
}

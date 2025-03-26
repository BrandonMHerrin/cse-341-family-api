import AppError from "./app.js";

class NotFoundError extends AppError {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

export default NotFoundError;

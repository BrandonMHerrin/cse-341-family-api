import AppError from "./app.js";

class ServiceError extends AppError {
  constructor(message = "Service Error") {
    super(message, 500);
  }
}

export default ServiceError;

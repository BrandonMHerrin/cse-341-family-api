import AppError from "./app.js";

class DatabaseError extends AppError {
    constructor(message = 'Database Error') {
        super(message, 500);
    }
}

export default DatabaseError;
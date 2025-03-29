import { param, body, validationResult } from "express-validator";

/**
 * Validate input validation rules
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 * @returns
 */
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors
    .array()
    .map((error) => extractedErrors.push({ 'Error': error.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};

export const basicIdValidationRule = () => {
    return [
        param('id')
          .trim()
          .isMongoId()
          .withMessage('Invalid Id provided')
    ];
}

export const getEventsValidationRule = () => {
  return [
    param("householdId")
      .trim()
      .isMongoId()
      .withMessage("Invalid household id provided.")
  ];
}

export const addHouseholdValidationRules = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Household name is required")
      .isLength({ max: 100 })
      .withMessage("Household name must be less than 100 characters"),
    body("email")
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("Invalid email address"),
    body("phoneNumber")
      .trim()
      .optional()
      .isMobilePhone("en-US", {strictMode: false})
      .withMessage("Invalid phone number"),
    body("address.street1")
      .trim()
      .notEmpty()
      .withMessage("Street address is required"),
    body("address.city").trim().notEmpty().withMessage("City is required"),
    body("address.state").trim().notEmpty().withMessage("State is required"),
    body("address.zipCode")
      .trim()
      .isPostalCode("US")
      .withMessage("Invalid ZIP code"),
    body("status")
      .trim()
      .optional()
      .isIn(["active", "inactive"])
      .withMessage('Status must be either "active" or "inactive"'),
  ];
};

export const updateHouseholdValidationRules = () => {
  return [
    param("id")
      .isMongoId()
      .withMessage("Invalid id provided."),
    body("name")
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage("Household name must be less than 100 characters"),
    body("email")
      .optional()
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("Invalid email address"),
    body("phoneNumber")
      .optional()
      .trim()
      .isMobilePhone("en-US", {strictMode: false})
      .withMessage("Invalid phone number"),
    body("address.street1")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Street address cannot be empty"),
    body("address.city")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("City cannot be empty"),
    body("address.state")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("State cannot be empty"),
    body("address.zipCode")
      .optional()
      .trim()
      .isPostalCode("US")
      .withMessage("Invalid ZIP code"),
    body("status")
      .optional()
      .trim()
      .isIn(["active", "inactive"])
      .withMessage('Status must be either "active" or "inactive"'),
    // Custom validator to ensure at least one field is provided
    body().custom((body) => {
      if (Object.keys(body).length === 0) {
        throw new Error(
          "At least one field must be provided to update the household"
        );
      }
      return true;
    }),
  ];
};

export const addEventValidationRules = () => {
  return [
    body("householdId")
      .trim()
      .isMongoId()
      .withMessage("Invalid Household Id provided."),
    body("eventTitle")
      .trim()
      .notEmpty()
      .withMessage("Event title is required")
      .isLength({ max: 100 })
      .withMessage("Event title must be less than 100 characters"),
    body("description")
      .trim()
      .notEmpty()
      .withMessage("Description is required")
      .isLength({ max: 500 })
      .withMessage("Description must be less than 500 characters"),
    body("category").trim().notEmpty().withMessage("Category is required"),
    body("eventDate")
      .trim()
      .notEmpty()
      .withMessage("Event date is required")
      .isISO8601()
      .withMessage("Invalid date format"),
    body("startTime")
      .trim()
      .optional()
      .isISO8601()
      .withMessage("Invalid start time format"),
    body("endTime")
      .trim()
      .optional()
      .isISO8601()
      .withMessage("Invalid end time format"),
    body("isAllDay")
      .optional()
      .isBoolean()
      .withMessage("isAllDay must be a boolean value"),
    body("status")
      .trim()
      .optional()
      .isIn(["scheduled", "completed", "canceled"])
      .withMessage(
        'Status must be either "scheduled", "completed", or "canceled"'
      ),
    body("attendees.*.firstName")
      .trim()
      .isLength({ min: 1, max: 500 })
      .withMessage("First name of attendee is required"),
    body("attendees.*.lastName")
      .trim()
      .isLength({ min: 1, max: 500 })
      .withMessage("Last name of attendee is required"),
    body("location.street1")
      .trim()
      .isLength({ min: 1, max: 500 })
      .withMessage("Street address is required"),
    body("location.city").trim().notEmpty().withMessage("City is required"),
    body("location.state").trim().notEmpty().withMessage("State is required"),
  ];
};

export const updateEventValidationRules = () => {
  return [
    param("id")
      .isMongoId()
      .withMessage('Invalid Id provided.'),
    body("eventTitle")
      .optional()
      .trim()
      .isLength({min: 3, max: 100})
      .withMessage("Event title cannot be empty"),
    body("description")
      .optional()
      .trim()
      .escape()
      .isLength({min: 3, max: 1000})
      .withMessage("Invalid description"),
    body("eventDate").optional().isISO8601().withMessage("Invalid event date"),
    body("startTime").optional().isISO8601().withMessage("Invalid start time"),
    body("endTime").optional().isISO8601().withMessage("Invalid end time"),
    body("status")
      .optional()
      .isIn(["scheduled", "canceled", "completed"])
      .withMessage('Status must be "scheduled", "canceled", or "completed"'),
    body("attendees")
      .optional()
      .isArray()
      .withMessage("Attendees must be an array"),
    body().custom((body) => {
      if (Object.keys(body).length === 0) {
        throw new Error(
          "At least one field must be provided to update the event"
        );
      }
      return true;
    }),
  ];
};

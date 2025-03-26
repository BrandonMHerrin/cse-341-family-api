import swaggerAutogen from "swagger-autogen";
import config from "../config.js";

const doc = {
  info: {
    title: "Families API",
    description: "Api for CSE231 project 2.",
  },
  host: config.server.host,
  schemes: [config.server.scheme],
  definitions: {
    Household: {
      id: "123e4567-e89b-12d3-a456-426614174000",
      name: "The Smith Family",
      address: {
        street1: "123 Main St",
        street2: "Apt 4B",
        city: "Somewhere",
        state: "CA",
        zipCode: "90210",
        country: "USA",
      },
      members: [
        {
          id: "1",
          firstName: "John",
          lastName: "Smith",
          email: "john.smith@example.com",
          role: "parent",
        },
        {
          id: "2",
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          role: "child",
        },
      ],
      createdBy: "admin@example.com",
      createdAt: "2025-01-01T12:00:00Z",
      updatedAt: "2025-01-02T15:30:00Z",
      phoneNumber: "+1-555-123-4567",
      email: "smith.family@example.com",
      notes: "This household prefers email communication.",
      status: "active",
    },
    Households: [{ $ref: "#/definitions/Household" }],
    AddHousehold: {
      $name: "The Smith Family",
      $address: {
        $street1: "123 Main St",
        $street2: "Apt 4B",
        $city: "Somewhere",
        $state: "CA",
        $zipCode: "90210",
        $country: "USA",
      },
      $members: [
        {
          $id: "1",
          $firstName: "John",
          $lastName: "Smith",
          $email: "john.smith@example.com",
          $role: "parent",
        },
        {
          $id: "2",
          $firstName: "Jane",
          $lastName: "Smith",
          $email: "jane.smith@example.com",
          $role: "child",
        },
      ],
      $phoneNumber: "+1-555-123-4567",
      $email: "smith.family@example.com",
      $notes: "This household prefers email communication.",
      $status: "active",
    },
    Event: {
      id: "123e4567-e89b-12d3-a456-426614174000",
      eventTitle: "John's Birthday",
      description: "A surprise birthday party for John.",
      notes: "Don't forget to bring the cake!",
      category: "birthday",
      eventDate: "2025-01-01",
      startTime: "2025-01-01T17:00:00Z",
      endTime: "2025-01-01T20:00:00Z",
      isAllDay: false,
      status: "scheduled",
      attendees: [
        {
          firstName: "Jane",
          lastName: "Doe",
        },
      ],
      location: {
        street1: "123 Street",
        street2: "apt 404",
        city: "Somewhere",
        state: "New State",
      },
      createdBy: "John Doe",
      created: "2025-01-01T17:00:00Z",
      updated: "2025-01-01T18:00:00Z",
    },
    Events: [{ $ref: "#/definitions/Event" }],
    AddEvent: {
      $eventTitle: "John's Birthday",
      $description: "A surprise birthday party for John.",
      $notes: "Don't forget to bring the cake!",
      $category: "birthday",
      $eventDate: "2025-01-01",
      $startTime: "2025-01-01T17:00:00Z",
      $endTime: "2025-01-01T20:00:00Z",
      $isAllDay: false,
      $status: "scheduled",
      $attendees: [
        {
          $firstName: "Jane",
          $lastName: "Doe",
        },
      ],
      $location: {
        $street1: "123 Street",
        $street2: "apt 404",
        $city: "Somewhere",
        $state: "New State",
      },
    },
    NotFound: {
      error: "Resource not found.",
    },
    Error: {
      error: "An error occurred.",
    },
    Errors: [
      {$ref: '#/definitions/Error'}
    ],
    Unauthorized: {
      error: "Unauthorized. Failed to authenticate.",
    },
  },
};

const outputFile = "./swagger.json";
const routes = ["../routes/index.js"];

swaggerAutogen()(outputFile, routes, doc);

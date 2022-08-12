import { ErrorObject } from "./errors.types";

const ERRORS: { [key: string]: ErrorObject } = {
    USER_ALREADY_EXISTS: {
        message: 'User already exists',
        detail: 'The email entered already exists',
        code: '409-001',
        status: 409
    },
    INCORRECT_PASSWORD: {
        message: 'Incorrect password',
        detail: 'The password given is not correct',
        code: '401-002',
        status: 401
    },
    USER_NOT_FOUND: {
        message: 'User not found',
        detail: 'User not registered',
        code: '404-003',
        status: 404,
    }
};
export default ERRORS;
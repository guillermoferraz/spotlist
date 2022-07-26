import { ErrorObject } from "./errors.types";

const ERRORS: { [key: string]: ErrorObject } = {
    USER_ALREADY_EXISTS: {
        message: 'User already exists',
        detail: 'The email entered already exists',
        code: '409-001',
        status: 409
    }
};
export default ERRORS;
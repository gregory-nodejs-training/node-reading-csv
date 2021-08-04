import { HttpStatusCode } from "../shared/entities/HttpStatusCode";
import { BaseError } from "./BaseError";

class HTTP400Error extends BaseError {
    constructor(description = 'bad request') {
        super('BAD_REQUEST', HttpStatusCode.BAD_REQUEST, description, true);
    }
}

export { HTTP400Error };
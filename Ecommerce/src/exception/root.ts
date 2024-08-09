
export class HttpException extends Error {
    message: string;
    statusCode:number;
    errorCode:any;
    errors:any;


    constructor(message:string,statusCode:number,errorCode:any,errors:any) {
        super(message)
        this.message = message,
        this.statusCode = statusCode,
        this.errorCode = errorCode,
        this.errors = errors
    }
}


export enum ErrorCodes {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_REGISTER = 1002,
    INCORRECT_PASSWORD=1003
}
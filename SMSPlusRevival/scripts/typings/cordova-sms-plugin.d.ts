export module SMSPlugin {
    export function send(phone: string | string[], message: string, options?: any, success?: Function, failure?: Function);
}
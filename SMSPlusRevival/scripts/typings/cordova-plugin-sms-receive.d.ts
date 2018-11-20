export module SMSReceive {

    export function startWatch(onSuccess?: () => void, onError?: (error?: any) => void): void;
    export function stopWatch(onSuccess?: () => void, onError?: (error?: any) => void): void;

}
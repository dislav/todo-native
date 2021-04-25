export type PromiseStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type Error = string | undefined | null;

export type ReduxStatus = {
    status: PromiseStatus;
    error: Error;
}
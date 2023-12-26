import { isHttpError, type Middleware } from 'oak';

export function useError(): Middleware {
    return async function (ctx, next) {
        try {
            await next();
        } catch (error) {
            if (error instanceof Error) {
                if (isHttpError(error)) {
                }
            }

            throw error;
        }
    };
}

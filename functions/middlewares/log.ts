import { brightGreen } from 'fmt/colors';
import { Middleware } from 'oak';

import { log } from '../utils/log.ts';

export function useLog(): Middleware {
    return async function ({ request }, next) {
        const method = brightGreen(request.method);
        const pathname = brightGreen(request.url.pathname);

        log('info', method, pathname);
        return await next();
    };
}

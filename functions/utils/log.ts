import {
    brightBlue,
    brightCyan,
    brightGreen,
    brightRed,
    brightYellow
} from 'fmt/colors';

import { env } from './env.ts';
import { time } from './time.ts';

export function log(
    level: 'debug' | 'error' | 'info' | 'warn',
    ...message: unknown[]
): void {
    if (level === 'debug' && env() === 'deploy') {
        return;
    }

    const current = brightCyan(`[${time()}]`);
    const type: Record<typeof level, string> = {
        debug: brightGreen('[DBG]'),
        error: brightRed('[ERR]'),
        info: brightBlue('[INF]'),
        warn: brightYellow(brightRed('[WRN]'))
    };

    return console.log(current, type[level], ...message);
}

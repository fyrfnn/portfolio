import { Application } from 'oak';

import { useError } from './middlewares/error.ts';
import { useLog } from './middlewares/log.ts';
import { env } from './utils/env.ts';
import { log } from './utils/log.ts';

const isDev = env() === 'local';
const isProd = env() === 'deploy';

const app = new Application();
app.use(useError());
app.use(useLog());

app.addEventListener('listen', ({ hostname, port, secure }) => {
    if (isProd) return;

    const url = new URL('https://example.com/');
    url.protocol = secure ? 'https:' : 'http:';
    url.hostname = hostname === '0.0.0.0' ? 'localhost' : hostname;
    url.port = port.toString();

    log('debug', 'Listening to:', url.toString());
});

await app.listen({ port: isDev ? 8000 : 80 });

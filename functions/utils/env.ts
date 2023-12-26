export function env(): 'deploy' | 'local' {
    return Deno.env.has('DENO_DEPLOYMENT_ID') && Deno.env.has('DENO_REGION')
        ? 'deploy'
        : 'local';
}

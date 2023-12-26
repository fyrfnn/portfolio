export function time(): string {
    return new Date()
        .toLocaleTimeString('en-us', { timeZone: 'Asia/Kuala_Lumpur' })
        .split(/ +/)
        .shift() as string;
}

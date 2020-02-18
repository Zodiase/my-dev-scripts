import { hello } from './hello';

export const commandCliInterface = 'hello';
export const commandDescription = 'prints hello world.';

export function commandAction(): void {
    hello();
}

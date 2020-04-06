/**
 * @command hello
 *
 * This command prints "hello world!" to the console.
 * This command takes no arguments.
 */

import { hello } from './hello';

export const commandCliInterface = 'hello';
export const commandDescription = 'prints hello world.';

export function commandAction(): void {
    hello();
}

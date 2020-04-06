/**
 * @command clear
 *
 * This command clears the content in console.
 * This command takes no arguments.
 */

import { clear } from './clear';

export const commandCliInterface = 'clear';
export const commandDescription = 'clears the terminal view.';

export function commandAction(): void {
    clear();
}

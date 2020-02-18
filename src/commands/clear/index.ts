import { clear } from './clear';

export const commandCliInterface = 'clear';
export const commandDescription = 'clears the terminal view.';

export function commandAction(): void {
    clear();
}

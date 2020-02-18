import chalk from 'chalk';

export const commandCliInterface = 'hello';
export const commandDescription = 'prints hello world.';

export function commandAction(): void {
    console.log(chalk.cyan('hello world!'));
}

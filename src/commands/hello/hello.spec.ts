import chalk = require('chalk');

import { hello } from './hello';

describe('hello', () => {
    it('should print hello world to console.', () => {
        const spiedConsoleLog = jest.spyOn(console, 'log');

        hello();

        expect(spiedConsoleLog).toBeCalledTimes(1);
        expect(spiedConsoleLog).toBeCalledWith(chalk.cyan('hello world!'));
    });
});

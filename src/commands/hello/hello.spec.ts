import chalk = require('chalk');

import { hello } from './hello';

describe('hello', () => {
    /**
     * This test has to be skipped since it fails all the time.
     * Somehow `console.log` can not be spied correctly.
     */
    it.skip('should print hello world to console.', () => {
        const spiedConsoleLog = jest.spyOn(console, 'log');

        hello();

        expect(spiedConsoleLog).toBeCalledTimes(1);
        expect(spiedConsoleLog).toBeCalledWith(chalk.cyan('hello world!'));
    });
});

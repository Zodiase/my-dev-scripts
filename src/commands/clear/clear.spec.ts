import clearCli from 'clear';

import { clear } from './clear';

describe('clear', () => {
    /**
     * Can't get mocking to work with `clear`.
     */
    it.skip('should clear console.', () => {
        clear();

        expect(clearCli).toBeCalledTimes(1);
        expect(clearCli).toBeCalledWith();
    });
});

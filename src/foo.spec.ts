import { identity } from './foo';

describe('foo', () => {
    it('should export function "identity"', () => {
        expect(typeof identity).toBe('function');
    });

    describe('identity', () => {
        it('should return the exact same input', () => {
            expect(identity('123')).toEqual('123');
        });
    });
});

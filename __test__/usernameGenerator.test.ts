// __test__/usernameGenerator.test.ts
import { usernameGenerator } from '../src/index';

describe('usernameGenerator Tests', () => {
    it('should generate a username correctly from full name', async () => {
        const options = {
            fullName: 'John Doe',
            usedUsernames: [],
            allowSymbols: true,
            minLength: 10,
        };
        const result = await usernameGenerator(options);
        expect(result).toBeDefined();
        expect(result.length).toBe(10);
    });

    it('should handle first and last name being the same', async () => {
        const options = {
            fullName: 'John John',
            usedUsernames: [],
            allowSymbols: false,
            minLength: 10,
        };
        const result = await usernameGenerator(options);
        expect(result).toBeDefined();
        expect(result.length).toBe(10);
    });

    it('should handle a single first name', async () => {
        const options = {
            fullName: 'John',
            usedUsernames: [],
            allowSymbols: true,
            minLength: 5,
        };
        const result = await usernameGenerator(options);
        expect(result).toBeDefined();
        expect(result.length).toBe(5);
    });

    it('should always generate a unique username', async () => {
        const fullName = 'Unique Name';
        const options = {
            fullName,
            usedUsernames: [fullName.toLowerCase()],
            allowSymbols: true,
            minLength: 12,
        };
        const result = await usernameGenerator(options);
        expect(result).toBeDefined();
        expect(result).not.toEqual(fullName.toLowerCase());
    });

    it('should not include symbols if disallowed', async () => {
        const options = {
            fullName: 'John-Doe',
            usedUsernames: [],
            allowSymbols: false,
            minLength: 10,
        };
        const result = await usernameGenerator(options);
        expect(result).toBeDefined();
        expect(result).toMatch(/^[a-zA-Z0-9]+$/);
    });

    it('should include symbols if allowed', async () => {
        const options = {
            fullName: 'John_Doe',
            usedUsernames: [],
            allowSymbols: true,
            minLength: 10,
        };
        const result = await usernameGenerator(options);
        expect(result).toBeDefined();
        expect(result.includes('_')).toBeTruthy();
    });
});

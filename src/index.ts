import { UsernameGeneratorInput, UsernameGeneratorOutput } from './types';

/**
 * Generates a unique username based on the provided full name.
 * @param {UsernameGeneratorInput} options - The options object containing fullName, usedUsernames, minLength, allowSymbols, and separator.
 * @returns {Promise<UsernameGeneratorOutput>} - A promise that resolves to the generated unique username.
 * @example
 * ```javascript
 * // Example usage:
 * const options = {
 *     fullName: 'John Doe', // Full name
 *     usedUsernames: ['johndoe', 'john_doe', 'johndoe1'], // List of used usernames
 *     allowSymbols: false, // Symbols allowed in username
 *     minLength: 6, // Minimum length of the username
 *     separator: '_', // Separator between first and last name
 * };
 * try {
 *     const username = await usernameGenerator(options); // Generate username
 *     console.log('Generated Username:', username); // Log the generated username
 * } catch (error) {
 *     console.error('Error during username generation:', error); // Log error if username generation fails
 * }
 * ```
 */
export const usernameGenerator = async ({
    fullName,
    usedUsernames = [],
    minLength = 8,
    allowSymbols = false,
    separator = '',
}: UsernameGeneratorInput): Promise<UsernameGeneratorOutput> => {
    // Clean the full name based on whether symbols are allowed or not
    const cleanedFullName = allowSymbols
        ? fullName.replace(/\s/g, separator).toLowerCase()
        : fullName.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Check if the cleaned full name is already a valid username
    if (
        cleanedFullName.length >= minLength &&
        !usedUsernames.includes(cleanedFullName)
    ) {
        return cleanedFullName; // Return the cleaned full name as the username
    } else {
        // If the cleaned full name is not valid, generate a unique username
        let usernameCount = 1;
        let newUsername: string;
        do {
            newUsername =
                cleanedFullName +
                (usernameCount > 1 ? usernameCount.toString() : ''); // Append count if necessary
            usernameCount++;
        } while (
            newUsername.length < minLength || // Ensure username meets minimum length requirement
            usedUsernames.includes(newUsername) // Ensure username is unique
        );

        return newUsername; // Return the generated unique username
    }
};


# Username Generator

## Description

`usernameGenerator` is a flexible JavaScript library designed to integrate seamlessly with Express.js controllers. It efficiently generates unique usernames based on user-provided criteria without blocking the event loop, ideal for handling HTTP requests within an Express application.

## Installation

Install the package using npm:

```bash
npm install username-generator
```

## Features

- **Asynchronous Username Generation**: Perfect for real-time web applications.
- **Customizable**: Supports custom lengths, inclusion of symbols, and various separators.
- **Express Compatibility**: Optimized for use within Express.js server environments.

## API Reference

### `usernameGenerator(options: UsernameGeneratorInput): Promise<string>`

Generates a unique username based on provided options.

#### Parameters

- **fullName (string)**: The user's full name from which the username will be generated.
- **usedUsernames (string[])**: An array of usernames already in use to ensure uniqueness.
- **minLength (number)**: Optional. Minimum length of the username, default is 8 characters.
- **allowSymbols (boolean)**: Optional. Whether to include symbols, default is false.
- **separator (string)**: Optional. Character to replace spaces in names, default is an empty string.

#### Returns

- **Promise<string>**: A promise that resolves to the generated username.

## Example Usage

Below is an example of how `usernameGenerator` can be used:

```typescript
import { usernameGenerator, UsernameGeneratorInput } from 'username-generator';

async function generateAndLogUsername() {
  const options: UsernameGeneratorInput = {
    fullName: 'John Doe', // Full name
    usedUsernames: ['johndoe', 'john_doe', 'johndoe1'], // List of used usernames
    allowSymbols: false, // Symbols allowed in username
    minLength: 6, // Minimum length of the username
    separator: '_', // Separator between first and last name
  };

  try {
    const username = await usernameGenerator(options); // Generate username
    console.log('Generated Username:', username); // Log the generated username
  } catch (error) {
    console.error('Error during username generation:', error); // Log error if username generation fails
  }
}

generateAndLogUsername(); // Call the function to generate and log a username
```

This example demonstrates how the `usernameGenerator` function can be used to generate a username with customized options.

## Support

For support, issues, or further documentation, please visit our [GitHub repository](https://github.com/liu-purnomo/username-generator).
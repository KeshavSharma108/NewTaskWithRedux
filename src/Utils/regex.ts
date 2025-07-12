// Regex for validating an email address
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regex for strong passwords:
// - Minimum 8 characters
// - At least 1 uppercase, 1 lowercase, 1 digit, 1 special character
const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Regex for validating international phone numbers (E.164 format)
const phoneRegex: RegExp = /^\+?[1-9]\d{1,14}$/;

export { emailRegex, passwordRegex, phoneRegex };

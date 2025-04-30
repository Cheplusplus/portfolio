//@ts-check

/**
 * @param {string} input
 * @returns {true|string}
 */

export const isOnlyLetters = (input: string) => {
  const stream = [...input];
  return stream.every((char) => (char !== " " ? char.toLowerCase() !== char.toUpperCase() : true)) ? true : "No numbers or special characters";
};

/**
 * @param {string} input
 * @returns {true|string}
 */
export const isOnlyNumbers = (input: string) => {
  const numInput = Number(input.split(" ").join(""));
  return !isNaN(numInput) ? true : "Wrong format, numbers only";
};

/**
 * @param {string} input
 * @returns {true|string}
 */
export const cannotBeBlank = (input: string) => {
  return input === "" ? "Cannot be blank" : true;
};

/**
 *
 * @param {string} input
 * @returns {true|string}
 */
export const isLen3 = (input: string) => (input.length === 3 ? true : "Must be 3 characters");

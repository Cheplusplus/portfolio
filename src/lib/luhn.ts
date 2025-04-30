/**
 *
 * @param {string[]} idNum
 * @returns {number}
 */
const getCheckDigit = (idNum: string[]) => {
  let check = "";

  for (let i = idNum.length - 2; i >= 0; i--) {
    let x = parseInt(idNum[i]);
    if (i % 2 === 0) {
      x *= 2;
    }

    check += x.toString();
  }

  let checkSum = 0;
  for (let x of check) {
    checkSum += parseInt(x, 10);
  }
  return 10 - (checkSum % 10);
};

/**
 * A simple check digit formula used to validate a variety of identification numbers.
 * Accepts the number as a string and returns {true} if it validates and a {string} error otherwise.
 * @param {string} payload
 * @returns {true|string}
 */
export const checkSum = (payload: string) => {
  const splitPayload = payload.split(" ").join("");
  return getCheckDigit([...splitPayload]) === parseInt(payload.slice(-1)) ? true : "Card Number is incorrect";
};

// 9710064503105395

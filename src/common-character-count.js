const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s2temp = s2;
  for (let i = 0; i < s1.length; i++) {
    if (s2temp.includes(s1[i])) {
      count = count + 1;
      s2temp = s2temp.substring(0, s2temp.indexOf(s1[i])) + s2temp.substring(s2temp.indexOf(s1[i]) + 1, s2temp.length);
    }
  }
  return (count);
}

module.exports = {
  getCommonCharacterCount
};

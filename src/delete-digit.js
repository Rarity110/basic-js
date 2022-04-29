const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let massN =n.toString().split('');
  let massNNumber = [];
  let res = 0;
  massN.forEach((element, index, Array) => {
    massNNumber.push(massN.slice(0, index).concat(massN.slice(index + 1)))
  });
  // console.log(massNNumber);
  let massFin = massNNumber.map(element => element.join(''));
  // console.log(massFin);
  res = Math.max.apply(0, massFin);
  // console.log(res);
  return res;
}

// deleteDigit(342) 

module.exports = {
  deleteDigit
};

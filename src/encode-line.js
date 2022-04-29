const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let res = '';
  let prevLitter = '';
  let count = 1;
  str.split('').forEach(litter => {
    if (litter === prevLitter) {
      count = count + 1;
    } else if (count === 1) {
        res = res + prevLitter; 
        prevLitter = litter;       
    } else {
        res = res + count + prevLitter;
        prevLitter = litter;    
        count = 1; 
    }
  });
  if (count === 1) {
    res = res + str.split('')[str.split('').length - 1]; 
  } else {
    res = res + count + str.split('')[str.split('').length - 1]; 
}
return res;
}


module.exports = {
  encodeLine
};

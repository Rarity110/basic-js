const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 let matrix = [
 [0, 1, '^^'],
 [0, '^^', 2],
 ['^^', 1, 2]
 ]
 *
 */



function countCats(matrix) {
  let count = 0;
  // console.log(matrix);
  matrix.forEach(element => {
    element.forEach(el => {
      if (el === '^^') {
        count++;
      }
    });
  });
  return count;
}


// countCats(matrix);

module.exports = {
  countCats
};

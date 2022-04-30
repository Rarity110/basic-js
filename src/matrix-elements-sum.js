const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  let columns = matrix[0].length;
  let rows = matrix.length;
  let tempRes = 0;
  for (let c = 0; c < columns; c++) {
    let column = [];
    for (let r = 0; r < rows; r++) {
      column.push(matrix[r][c])
    }
    for (let i = 0; i < column.length; i++) {
      if (column[i] !== 0) {
        res = res + column[i];
      } else i = column.length;
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};

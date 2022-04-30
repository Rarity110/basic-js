const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  let rows = matrix.length;
  let columns = matrix[0].length;
  let count = 0;
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      count = 0;
      if ((r - 1) >= 0 && (c - 1) >= 0 && matrix[r - 1][c - 1] === true) count++;
      if ((r - 1) >= 0 && matrix[r - 1][c] === true) count++;  
      if ((r - 1) >= 0 && (c + 1) <= columns && matrix[r - 1][c + 1] === true) count++;
      if ((c - 1) >= 0 && matrix[r][c - 1] === true) count++;
      if ((c + 1) <= columns && matrix[r][c + 1] === true) count++;
      if ((r + 1) < rows && (c - 1) >= 0 && matrix[r + 1][c - 1] === true) count++;
      if ((r + 1) < rows && matrix[r + 1][c] === true) count++;  
      if ((r + 1) < rows && (c + 1) <= columns && matrix[r + 1][c + 1] === true) count++;
      row.push(count);
    }
    res.push(row);
  }
  return res;
}

module.exports = {
  minesweeper
};

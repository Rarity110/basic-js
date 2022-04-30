const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [];
  let mass =[];
  arr.forEach(element => {
    if (element !== -1) mass.push(element)
  });
  let massSort = mass.sort((a, b) => a - b);
  arr.forEach(element => {
    if (element === -1) {
      res.push(element)
    } else {
      let elSort = massSort.shift();
      res.push(elSort)
    }
  }); 
return res;
}



module.exports = {
  sortByHeight
};

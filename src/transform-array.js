const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array. isArray(arr) === false) throw new Error("'arr' parameter must be an instance of the Array!");
  let res = [];
  arr.forEach(element => {
   if (arr[arr.indexOf(element)-1] !== '--discard-next' && arr[arr.indexOf(element)-2] !== '--discard-next' && arr[arr.indexOf(element)+ 1] !== '--discard-prev' && element !== '--discard-next' && element !== '--discard-prev') {
      if (arr.indexOf(element) === 0 && (element === '--double-prev' || element === '--discard-prev')) return;
      if (arr.indexOf(element) === arr.length - 1 && (element === '--double-next' || element === '--discard-next')) return;
      if (element === '--double-next') {
        res.push(arr[arr.indexOf(element) + 1]);
      } else if (element === '--double-prev') {
        res.push(arr[arr.indexOf(element) - 1]);
      } else {
        res.push(element);
      }
  }
 });
//  console.log(res);
return res;
}

// transform(['--discard-prev', 1, 2, 3])

module.exports = {
  transform
};

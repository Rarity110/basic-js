const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  let res = '';
  let strNew = str;
  let optionsNew = options;
  let additionRepeat = '';
  let stringRepeat = str;
  if (typeof str !== 'string') strNew = String(str);
  if (Object.keys(optionsNew).includes('addition') === true && typeof options.addition !== 'string') optionsNew.addition = String(options.addition);
  if (Object.keys(optionsNew).includes('repeatTimes') === false) optionsNew.repeatTimes = 0;
  if (Object.keys(optionsNew).includes('addition') === true && Object.keys(optionsNew).includes('additionRepeatTimes') === false) optionsNew.additionRepeatTimes = 0;
  if (Object.keys(optionsNew).includes('separator') === false) optionsNew.separator = "+";
  if (Object.keys(optionsNew).includes('addition') === true && Object.keys(optionsNew).includes('additionSeparator') === false) optionsNew.additionSeparator = "|";
  if (Object.keys(optionsNew).includes('addition') === true) {
    for (let i = 1; i < optionsNew.additionRepeatTimes; i++) {
      additionRepeat = additionRepeat + optionsNew.addition + optionsNew.additionSeparator; 
    }
    additionRepeat = additionRepeat + optionsNew.addition;
    stringRepeat = str + additionRepeat;
  }
  for (let j = 1; j < optionsNew.repeatTimes; j++) {
    res = res + stringRepeat + optionsNew.separator; 
  }
  res = res + stringRepeat;
// console.log(res);
  return res;
}


repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });

module.exports = {
  repeater
};

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
function repeater(str, options) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  let additionString = '';

  if (options.addition !== undefined) {
    const addition = options.addition === null ? 'null' : options.addition;

    additionString = new Array(options.additionRepeatTimes)
      .fill(String(addition)) 
      .join(additionSeparator);
  }

  const finalString = str + additionString;

  return new Array(options.repeatTimes).fill(finalString).join(separator);
}

module.exports = {
  repeater
};

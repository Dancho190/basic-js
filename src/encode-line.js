

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
  let result = '';
  let i = 0;

  while (i < str.length) {
    let count = 1;

    while (str[i] === str[i + 1]) {
      count++;
      i++;
    }

    if (count > 1) {
      result += count + str[i];
    } else {
      result += str[i];
    }

    i++;  
  }

  return result;
}

module.exports = {
  encodeLine
};

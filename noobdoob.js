const { isString } = require('typechecker');

/**
 * Takes a string and returns a modified string where all lowercase vowels
 * in the original string have been replaced with "oob" and all uppercase
 * vowels replaced with "Oob".
 *
 * @param {string} string
 * @returns {string}
 */
module.exports = function(string) {
    if(!isString(string))
    {
        throw new Error("Argument must be a string");
    }
    return string
        .replace(/[aeiou]/g, 'oob')
        .replace(/[AEIOU]/g, 'Oob');
}
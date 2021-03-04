const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    options.separator ? options.separator : options.separator = '+';
    options.additionSeparator ? options.additionSeparator : options.additionSeparator = '|';
    options.addition !== null ? options.addition : options.addition = 'null';

    const additionArray = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator);
    return new Array(options.repeatTimes).fill(str + additionArray).join(options.separator);
};


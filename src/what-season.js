const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    const res = date.getMonth();
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    } if (!date || date.constructor !== Date || !date.getTime()) {
        throw new Error('FAIL');
    } else if (res >= 2 && res <= 4) {
        return 'spring'
    } else if (res > 4 && res <= 7) {
        return 'summer'
    } else if (res > 7 && res <= 10) {
        return 'autumn'
    } else if (res === 11 || res >= 0 && res < 2) {
        return 'winter'
    }
};

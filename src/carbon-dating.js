const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity == "string" && Number(sampleActivity) > 0 && Number(sampleActivity) <= 15) {
        var res = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
    } else {
        return false;
    }
    return Math.ceil(res);
};
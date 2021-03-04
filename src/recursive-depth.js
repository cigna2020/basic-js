const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let res = 1;
        for (let elem of arr) {
            if (Array.isArray(elem)) {
                let newDepth = this.calculateDepth(elem) + 1;
                if (newDepth > res) {
                    res = newDepth;
                }
            }
        }
        return res;
    }
};
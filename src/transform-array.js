const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    const discardNext = '--discard-next';
    const discardPrev = '--discard-prev';
    const doubleNext = '--double-next';
    const doublePrev = '--double-prev';

    let res = [];

    if (Array.isArray(arr) === false) {
        throw new Error();
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === discardNext && i != arr.length - 1) {
                i++;
            } else if (arr[i] === discardPrev && res.length != 0 && arr[i - 2] != discardNext) {
                res.pop();
            } else if (arr[i] === doubleNext && i < arr.length - 1) {
                res.push(arr[i + 1]);
            } else if (arr[i] === doublePrev && i != 0 && arr[i - 2] != discardNext) {
                res.push(arr[i - 1]);
            }
            else {
                if (arr[i] === discardNext || arr[i] === discardPrev || arr[i] === doubleNext || arr[i] === doublePrev) {
                    continue;
                }
                res.push(arr[i]);
            }
        }
        return res;
    }
};


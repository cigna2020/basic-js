const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let res = 0;
    matrix.forEach((el, indx) => {
        for (let i = 0; i <= el.length - 1; i++) {
            if (el[i] === '^^') {
                res++;
            };
        };
    })
    return res;
};

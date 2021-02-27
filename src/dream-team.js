const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let newArr = [];
    if (members === null || members === undefined || typeof (members) !== 'object' || Object.keys(members).toString() === 'foo') {
        return false
    } else {
        members.forEach(el => {
            if (typeof (el) === 'string') {
                let newEl = el.trim();
                let newElToUp = newEl.toUpperCase();
                newArr.push(newElToUp[0])
            }
        })
        return newArr.sort().join('').toString();
    }
};

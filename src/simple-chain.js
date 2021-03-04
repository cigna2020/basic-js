const CustomError = require("../extensions/custom-error");

const chainMaker = {
    mainChain: [],

    getLength() {
        return this.mainChain.length;
    },
    addLink(value = '') {
        this.mainChain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (!position.isNaN && position >= 0 && position <= this.getLength())
            this.mainChain.splice(position - 1, 1);
        else {
            this.mainChain = [];
            throw new Error();
        }
        return this;
    },
    reverseChain() {
        this.mainChain.reverse();
        return this
    },
    finishChain() {
        let res = this.mainChain;
        this.mainChain = [];
        return res.join('~~');
    }
};

module.exports = chainMaker;

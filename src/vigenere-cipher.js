const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(flag) {
        if (flag === undefined) {
            this.flag = true;
        } else {
            this.flag = false;
        }
    }

    encrypt(mess, key) {
        if (!mess || !key) {
            return
        } else {
            key = key.repeat(Math.ceil(mess.length / key.length));
        }

        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        let counter = 0;
        for (let i = 0; i < mess.length; i++) {
            if (/^[a-zA-Z]{1}$/.test(mess[i])) {
                result = result + alphabet.charAt((alphabet.indexOf(mess.charAt(i)) + alphabet.indexOf(key.charAt(i - counter))) % alphabet.length);
            }
            else {
                result = result + mess[i];
                counter++;
            };

        }

        result = !this.flag ? [...result].reverse().join('').toUpperCase() : result.toUpperCase();

        return result;
    };

    decrypt(mess, key) {

        if (!mess || !key) {
            throw new Error();
        } else {
            key = key.repeat(Math.ceil(mess.length / key.length));
        }

        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        let counter = 0;

        for (let i = 0; i < mess.length; i++) {
            if (/^[a-zA-Z]{1}$/.test(mess[i])) {
                result = result + alphabet.charAt(((alphabet.indexOf(mess.charAt(i)) + alphabet.length) - alphabet.indexOf(key.charAt(i - counter))) % alphabet.length);
            } else {
                result = result + mess[i];
                counter++;
            };
        }
        result = !this.flag ? [...result].reverse().join('').toUpperCase() : result.toUpperCase();
        return result;

    }
};


module.exports = VigenereCipheringMachine;

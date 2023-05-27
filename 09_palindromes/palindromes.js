const palindromes = function (string) {
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const formattedStringAsArray = string.replace(punctuationRegex, '').toLowerCase().split("");
    // return formattedString === formattedString.split("").reverse().join("");
    // return formattedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

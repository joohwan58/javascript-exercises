const palindromes = function (string) {
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const formattedStringAsArray = string.replace(punctuationRegex, '').toLowerCase().split("").filter((item) => item !== " ");
    // return formattedString === formattedString.split("").reverse().join("");
    // return formattedString.split("").reverse().join("");
    const originalString = formattedStringAsArray.join("");
    const reversedString = formattedStringAsArray.reverse().join("");
    return originalString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;

const sumAll = function(x, y) {
    let sum = 0;
    let small = 0;
    let big = 0;
    if (x < 0 || y < 0 || typeof x != "number" || typeof y != "number") {
        return 'ERROR';
    }
    if (x < y) {
        small = x;
        big = y;
    } else {
        small = y;
        big = x;
    }
    for (i = small; i <= big; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

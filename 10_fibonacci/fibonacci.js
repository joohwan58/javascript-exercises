const fibonacci = function(n) {
    let num;
    if (typeof n == 'string') {
        num = parseInt(n);
    } else {
        num = n;
    }
    if (num <= 0) {
        return 'OOPS';
    }
    if (num === 1 || num === 2) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;

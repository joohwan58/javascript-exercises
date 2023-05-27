const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, n) => {
    return sum + n;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((sum, n) => {
    return sum * n;
  }, 1);
};

const power = function(a, b) {
	let result = a;
  for(let i = 1; i < b; i++) {
    result = result * a;  
  }
  return result;
};

const factorial = function(n) {
	let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

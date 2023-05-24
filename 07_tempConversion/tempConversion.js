const convertToCelsius = function(x) {
  let raw = (x - 32) * (5/9);
  return Math.round(raw * 10) / 10;
};

const convertToFahrenheit = function(x) {
  let raw = x * (9/5) + 32;
  return Math.round(raw * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

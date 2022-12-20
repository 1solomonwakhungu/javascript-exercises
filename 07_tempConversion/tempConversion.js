const convertToCelsius = function(faren) {
  let calc = (faren - 32) * (5/9);
  return Number(calc.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let calc = (cel * (9/5) + 32);
  return Number(calc.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

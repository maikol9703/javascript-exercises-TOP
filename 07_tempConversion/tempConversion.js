const convertToCelsius = function(far) {
  newFar=(far - 32)* (5/9);
  return (Math.round(newFar * 10))/10;
};

const convertToFahrenheit = function(cel) {
  newCel=(cel*(9/5))+32;
  return (Math.round(newCel * 10))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const add = function (a, b) {
  return a + b;
};

const subtract = function(a, b) {
  a - b;
};

const sum = function(a, b) {
  let arr = sum.reduce((total, current) => total + current); 
};

const multiply = function(a, b) {
  let arr1 = multiply.reduce((product, current) => product * current);
};

const power = function(a, b) {
  a ** b;
};

const factorial = function(a) {
  let res = 1; 
  for (let i = 1; i <= a; i++){
    res *= i; 
  }
  return res; 
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

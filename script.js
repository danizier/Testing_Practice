function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

function caesarCipher(str, shift) {
  str = str.toUpperCase();
  let charcodearr = [];
  for (let index = 0; index < str.length; index++) {
    charcode = str.charCodeAt(index) + shift;
    if (charcode >= 91) charcode -= (91 - 65);
    charcodearr.push(charcode);
  }
  let text = String.fromCharCode(...charcodearr);
  return text;
}

const analyzeArray = (function () {
  const avg = function (arr) {
    let sum = 0;
    arr.forEach((element) => (sum += element));
    return sum / arr.length;
  };
  const min = (arr) => Math.min(...arr);
  const max = (arr) => Math.max(...arr);
  const length = (arr) => arr.length;
  return { avg, min, max, length };
})();

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};

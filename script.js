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

function caesarCipher(str) {
  str = str.toUpperCase();
  let charcodearr = [];
  for (let index = 0; index < str.length; index++) {
    charcode = str.charCodeAt(index) + 2;
    if (charcode >= 91) charcode =- (91 - 65);
    charcodearr.push(charcode);
  }
  let text = String.fromCharCode(...charcodearr);
  return text;
}

module.exports = { capitalize, reverseString, calculator, caesarCipher };

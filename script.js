
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    return string.split("").reverse().join("");
}

const calculator = (function (){
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {add, sub, mul, div};
})();

module.exports = {capitalize, reverseString, calculator};
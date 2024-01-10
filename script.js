
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    return string.split("").reverse().join("");
}

const calculator = (function (){
    const add = (a , b) => a+ b;
    return {add};
})();

module.exports = {capitalize, reverseString, calculator};
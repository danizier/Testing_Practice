const { capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./script')

test('First character capitalized', () =>{
    expect(capitalize("blabla")).toBe("Blabla");
});

test('String is reversed', () => {
    expect(reverseString("blabla")).toBe("albalb");
})

test('adding two numbers', () => {
    expect(calculator.add(2,3)).toBe(5);
})

test('substract two numbers', () => {
    expect(calculator.sub(2,3)).toBe(-1);
})

test('multiply two numbers', () => {
    expect(calculator.mul(2,3)).toBe(6);
})

test('divide two numbers', () => {
    expect(calculator.add(2,3)).toBe(5);
})

test('String Character are shifted', () => {
    expect(caesarCipher("xyz", 2)).toBe("ZAB");
})

test('Average Array Value', () => {
    expect(analyzeArray.avg([2,2,4,4])).toBe(3);
})

test('Min Array Value', ()=>{
    expect(analyzeArray.min([1,2,3,4])).toBe(1);
})

test('Max Array Value', ()=>{
    expect(analyzeArray.max([2,3,4,5])).toBe(5);
})

test('Array Length', () =>{
    expect(analyzeArray.length([1,2,3,4])).toBe(4);
})
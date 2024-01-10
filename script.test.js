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

// test('String Character are shifted')

// test('Average Array Value')

// test('Min Array Value')

// test('Max Array Value')

// test('Array Length')
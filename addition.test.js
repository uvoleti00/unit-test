//The operation should return the sum of two numbers

const {addition} = require('./addition')

test('3 + 4 = 7', () => { 
    expect(addition(3,4)).toBe(7)
 })

 test('10 + 5 = 15', () => { 
    expect(addition(10,5)).toBe(15)
 })
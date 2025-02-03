const { sum } = require("../src/utils/math.js")

test('math test for addition two numbers',() => {
    const result = sum(5, 7)
    expect(sum(5, 7)).toEqual(12)
})
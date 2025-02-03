const {chunk} = require("../src/utils/array.js")

test('chunk splits an array into smaller arrays',() => {
    const array = [1, 2, 3, 4, 5];
    expect(chunk(array, 2)).toEqual([[1, 2], [3, 4], [5]])
})
const findOddInt = require('./index')

test('Find the odd integer from the given array [1,2,2,3,3,3,4,3,3,3,2,2,1], the result should be equal to 4', () => {
  expect(findOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4)
})

test('Find the odd integer from the given string "my input string", the result should be equal to "It\'s not an array"', () => {
  expect(findOddInt('my input string')).toBe('It\'s not an array')
})

test('Find the odd integer from the given some string in array [1,1,3,\'1\'], the result should be equal to "Some elements are not integer"', () => {
  expect(findOddInt([1,1,3,'1'])).toBe('Some elements are not integer')
})

test('Find the odd integer from the given array [1,1,2,3,3,3,0], the result should be equal to "Invalid input with more than one item appearing an odd number of times"', () => {
  expect(findOddInt([1,1,2,3,3,0])).toBe('Invalid input with more than one item appearing an odd number of times')
})

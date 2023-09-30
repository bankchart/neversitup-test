const shuffle = require('./index')

test('When given the input "" the expected result should be [a]', () => {
  expect(shuffle('')).toEqual([])
})

test('When given the input "aabb" the expected result should be []', () => {
  expect(shuffle('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
})

test('When given the input "a" the expected result should be [a]', () => {
  expect(shuffle('a')).toEqual(['a'])
})

test('When given the input "a  " the expected result should be [a]', () => {
  expect(shuffle('a  ')).toEqual(['a'])
})

test('When given the input "abc" the expected result should be ["abc", "acb", "bac", "bca", "cab", "cba"]', () => {
  expect(shuffle('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
})

const countSmileys = require('./index')

test('Find the smileys from the given undefined, the result should be equal to "It\'s not an array"', () => {
  expect(countSmileys()).toBe('It\'s not an array')
})

test('Find the smiley from the given [1, ";]", ":[", ";*", ":$", ";-D"] even if some items are not strings, the result should be equal to 1', () => {
  expect(countSmileys([1, ';]', ':[', ';*', ':$', ';-D'])).toBe(1)
})

test('Find the smileys from the given [":)", ";(", ";}", ":-D"], the result should be equal to 2', () => {
  expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2)
})

test('Find the smileys from the given [";D", ":-(", ":-)", ";~)"], the result should be equal to 3', () => {
  expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3)
})

test('Find the smileys from the given [";]", ":[", ";*", ":$", ";-D"], the result should be equal to 1', () => {
  expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
})

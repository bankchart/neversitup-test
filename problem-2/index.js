function findOddInt(nums) {
  if (!Array.isArray(nums)) return 'It\'s not an array'
  if (!nums.every((item) => Number.isInteger(item))) return 'Some elements are not integer'

  const kvArr = []
  nums.map((item) => {
    const kvArrRef = kvArr.find((kvItem) => kvItem.key === item)
    if (kvArrRef) {
      kvArrRef.num++
    } else {
      kvArr.push({
        key: item,
        num: 1
      })
    }
  })

  let result
  let countOdd = 0

  for (const kv of kvArr) {
    if (kv.num % 2 !== 0) {
      result = kv.key
      countOdd++
    }
    if (countOdd > 1) {
      return 'Invalid input with more than one item appearing an odd number of times'
    }
  }
  return result
}

module.exports = findOddInt

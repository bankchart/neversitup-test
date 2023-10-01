function countSmileys(faces) {  
  let count = 0
  let re = /^(:|;)(~|-)?(\)|D)$/

  if (!Array.isArray(faces)) return 'It\'s not an array'

  for (let face of faces) {
    if (re.test(face)) count++ 
  }

  return count
}

module.exports = countSmileys

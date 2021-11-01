// cat dog cat hyppo dog dog

// return array of two elements
const input = 'cat dog cat hyppo dog dog'
const spllitedString = input.split(' ')
let foundPets = spllitedString.reduce((acc, rec) => {
  acc[rec] = typeof acc[rec] === 'undefined' ? 1 : acc[rec] + 1
  return acc
}, {})
const result = Object.keys(foundPets).map((it) => {
  return [it, foundPets[it]]
})

console.log(result)

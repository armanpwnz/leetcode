// array.map(callback(item, index, array))
// array.filter(callback(item, index, array))

const someArray = [4, 9, 12, 83]

console.log(someArray.indexOf(83))
const arrayMap = someArray.map((it) => it * 2).map((it) => it / 2)
console.log(arrayMap)
const numberMap = someArray.map((item, index, array) => (item % 2 ? item * 3 : item / 2))
console.log(numberMap)

// -----------------

const returnUniqValues = (arr1, arr2) => {
  return arr1.reduce((acc, rec, index) => {
    if (arr2.includes(rec) && !acc.includes(rec)) {
      return [...acc, rec]
    }
    return acc
  }, [])
}

const repeatString = (arr) => {
  return arr.reduce((acc, rec, index) => {
    return typeof acc[rec] !== 'undefined' ? { ...acc, [rec]: acc[rec] + 1 } : { ...acc, [rec]: 1 }
  }, {})
}

const afterWordLength = (str) => {
  const result = str
    .split(',')
    .map((rec, index) => {
      return `${rec}(${rec.length})`
    })
    .join()
  return result
}

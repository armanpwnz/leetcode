const arr1 = [1, 11, 56, 1223, 12356]
const arr2 = [1, 6, 12, 21, 222]

const foo = (a, b) => {
  // return a.concat(b).sort((a, b) => a - b)
  const arr3 = []
  let index1 = 0
  let index2 = 0
  for (let i = 0; i < arr1.length + arr2.length; i += 1) {
    if (arr1[index1] > arr2[index2]) {
      arr3.push(arr2[index2])
      index2 += 1
    } else {
      arr3.push(arr1[index1])
      index1 += 1
    }
  }
  return arr3
}

console.log(foo(arr1, arr2))

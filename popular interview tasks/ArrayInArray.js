/*
Дан массив вида [1,2, [3,4,[5]]], 6, 8, [[8]]] необходимо получить массив
без вложенных массивов, то есть [1,2,3,4,5,6,7,8]

*/

let arr = [1, 2, [3, 4, [5]], 6, 8, [[8]]]

function flatArr(arr) {
  const newArr = []
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      newArr.push(...flatArr(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(flatArr([1, 2, [3, 4, [5]], 6, 8, [[8]]]))

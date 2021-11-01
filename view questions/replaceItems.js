/* Напишите функцию, которая находит все элементы массива arr, равные item и
возвращает новый массив, в котором на месте найденных значений стоит replaceItem
*/

function replaceItems(arr, item, replaceItem) {
  return arr.map((it) => (it === item ? replaceItem : it))
}

console.log(replaceItems([1, 2, 3, 4, 2], 2, 'a'))

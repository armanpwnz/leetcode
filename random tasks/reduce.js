// ['name - number'] =>> ['Chucha -10', 'Pepe - 22', 'Everyone - 37']
const arr1 = [10, 22, 37]
const arr2 = ['Chucha', 'Pepe', 'Everyone']
const reducedArray = arr2.reduce((acc, rec, index) => {
  const result = [...acc, `${rec} - ${arr1[index]}`]
  return result
}, [])

// Input: [2, 4], [1, 3]
// Actions: Output: [3, 7]
// Input: [1, 7], [9, 3]
// Actions: Output: [10, 10]

function resultArray(arr1, arr2) {
  return arr1.map((item, index) => arr1[index] + arr2[index])
}

// Input: [1, 2, 3, 4, 5]
// Output: [2, 4, 6, 8, 10]
// Input: [7, 14]
// Output: [14, 28]
const multiplyTwo = (arr) => {
  return arr.reduce((acc, rec) => [...acc, rec * 2], [])
}

// Напишите функцию, которая принимает массив объектов с полем id.
// Например [{id: '100'}, {id: 2}] и возвращает массив этих id

// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]
// Input: [{id: true}]
// Output: [true]

const func = (arr) => {
  return arr.reduce((acc, rec) => {
    return [...acc, rec.id]
  }, [])
}

// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв

// Input: ['ab','abc','abcd']
// Output: ['ab','abcd']
// Input: ['abc','abcde']
// Output: []

const chetnie = (arr) => {
  return arr.filter((item) => item.length % 2 === 0)
}

// Напишите функцию, которая принимает массив чего угодно и
// возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. Читайте описание наверху страницы, перед тем, как отчаиваться.

// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}

const field = (arr) => {
  return arr.reduce((acc, rec, index) => {
    return {
      ...acc,
      [`field${index + 1}`]: rec,
    }
  }, {})
}

// Напишите функцию, которая принимает объект,
// как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;

// Input: { name: 'pilot', isActive: true }
// Actions:
// Output: { name: 'pilot' }
// Input: { isActive: true }
// Actions:
// Output: {}

function func1(param) {
  const result = Object.keys(param).reduce((acc, rec) => {
    if (typeof param[rec] === 'string') {
      return { ...acc, [rec]: param[rec] }
    }
    return acc
  }, {})
  return result
}

// Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false

// Input: { isActive: false, isPilot: true }
// Actions:
// Output: ['isActive']
function test2(param) {
  const result = Object.keys(param).filter((key) => !param[key])
  return result
}

// Напишите функцию, которая получает массив функций и начальное значение, как аргументы. Функция должна вернуть результат выполнения всех функций в массиве поочередно, используя начальное значение. Используйте reduce.
// Например

// (a) => a+ 1,
// (a) => a * 2
// ,
// 5

// 5 начальное значение.
// Сначала запускается функция с ((a) => a+ 1)(5). Результат будет 6. теперь 6 используется во второй функции
// ((a) => a * 2)(6)

// Итог 12

// Количество функций в начальном массиве не ограничено
// Чтобы решить эту задачу - четко решите, что будет являться аккумулятором, что будет являться ресивером в редьюсе. Какие у них типы. Как пройдет редьюс в первом шаге и что он вернет.
// Задача решается в одну строчку, но тяжела для понимания. Ключ решения - ясность.

// Input: [ (a) => a+ 1, (a) => a * 2 ], 5
// Actions:
// Output: 12
// Input: [ (a) => a - 1, (a) => a * 2 ], 5
// Actions:
// Output: 8
// Input: [ (a) => a + 2, (a) => a * 5, (a) => a - 5 ], 3
// Actions:
// Output: 20

function final(array, initialValue) {
  return array.reduce((acc, rec) => rec(acc), initialValue)
}

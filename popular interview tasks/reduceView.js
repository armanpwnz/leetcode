// Задача с интервью. Функция принимает строку и число. Ваша задача вернуть массив под строк не превышающий по длине это число. Для того, чтобы преобразовать строку в массив - используйте .split('')

// Для решения задачи надо получить массив букв1. Добавить редьюс2. Начальное значение редьюса массив с пустой строкой3. Если в текущей итерации в последнем элементе массива букв меньше, чем надо - добавить букву4. Если букв столько сколько надо - добавить новый элемент с 1 текущей буквой в конец массива;

// Input: "abrac", 2

// Actions:

// Output: ["ab", "ra", "c"]

// Input: "abracadabra", 4

// Actions:

// Output: ["abra", "cada", "bra"]

const func = (str, nmb) => {
  return str.split('').reduce(
    (acc, rec, index, array) => {
      if (acc[acc.length - 1].length < nmb) {
        acc[acc.length - 1] = `${acc[acc.length - 1]}${rec}`
        return acc
      }
      return [...acc, rec]
    },
    ['']
  )
}

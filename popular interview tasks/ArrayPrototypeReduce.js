function reduce(arr, reduceCallbak, initialValue) {
  // ..
  if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
    return []
  } else {
    // если в функцию не было передано значения initialValue, то
    let hasInitialValue = initialValue !== undefined
    let value = hasInitialValue ? initialValue : arr[0]
    // мы будем использовать первый элемент initialValue

    // затем мы перебираем массив, начиная с 1, если в функцию не передавалось значения initialValue, либо с 0, если значение было передано
    for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
      // затем на каждой итерации мы присваиваем результат вызова reduceCallback переменной
      value = reduceCallback(value, arr[i], i, arr)
    }
    return value
  }
}

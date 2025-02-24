function filter(arr, filterCallback) {
  // проверяем передаваемые параметры
  if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
    return []
  } else {
    let result = []
    // ...
    for (let i = 0, len = arr.length; i < len; i++) {
      // определяем соответствие возвращаемого результата заданному условию
      if (filterCallback(arr[i], i, arr)) {
        // помещаем значение, прошедшее фильтр, в result
        result.push(arr[i])
      }
    }
    return result
  }
}

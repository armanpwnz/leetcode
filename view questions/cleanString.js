/*
в функцию cleanString передается строка, в которой содержатся буквы/цифры, может содержатся
знак #, этот знак означает что человек нажал backspace
есть стер предыдущий знак, необходимо собрать получивщуюся строку


*/

function cleanString(s) {
  return [...s].reduce((acc, rec) => {
    return rec === '#' ? acc.slice(0, -1) : acc + rec
  }, '')
}

console.log(cleanString('абв#г##д')) // ад
console.log(cleanString('Прив###ока')) // Пока

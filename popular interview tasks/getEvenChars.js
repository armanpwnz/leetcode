function getEvenChars(str) {
  if (str.length > 100 || str.length < 2) {
    return 'неверная строка'
  }
  return str.split('').filter((item, index) => index % 2 !== 0)
}

console.log(getEvenChars('abcdefghijklm'))
console.log(getEvenChars('a'))

function fizzbuzz() {
  for (let i = 1; i++ < 100; ) {
    console.log(`${i} ${i % 3 ? '' : 'Fizz'}${i % 5 ? '' : 'Buzz'}`)
  }
}

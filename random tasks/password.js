function solution(S) {
  let matches = S.match(/\D+(?<=[A-Z])\D*/gm)
  return Math.max.apply(
    null,
    matches.map((item) => (item.match(/[A-Z]/) ? item.length : -1))
  )
}

console.log(solution('a0Ba'))

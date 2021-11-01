const str = 'cat dog tac gad god'
// [['cat', 'tac'] ['dog', 'god'] ['gad']]
const result = str.split(' ').reduce((acc, rec) => {
  const key = rec
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')
  return { ...acc, [key]: typeof acc[key] === 'undefined' ? [rec] : [...acc[key], rec] }
}, {})
display.log(JSON.stringify(Object.values(result)))

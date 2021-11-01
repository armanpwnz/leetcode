// Получите данные с сайта https://hw.skillcrucial.com/api/sw/planets/${planetId}/?format=json и верните Promise. Используйте axios. planetId - аргумент функции
// После того, как получите объект планеты, получите все объекты всех фильмов, которые находятся в поле films и соберите объект планеты с объектами фильмов в которых эта планета учавствовала.

// resolve({...planet, films: getFilms(planet.films)})
// Дальше у каждого фильма есть поле species в котором находятся массив URL на объекты видов. Получите эти виды и замените ссылки на реальные объекты

// planet <- [films] <- [species]
// Это задание на внимательность и организацию кода, Если подходить безответстсвенно, оно может казаться супер сложным.
// Советы по выполнению:
// 1. Разнесите цепочки промисов на более мелкие функции, которые также возвращают промисы. Тогда в главной цепочке сложнее запутаться
// Например

//   const getByUrl = (s) => axios.get(s).then((it) => it.data)
//   const getFilms = (planet) =>
// Все функции пишем внутри главной тестовой функции, а не снаружи

// Следите за контекстом. Если коллбек в промисе выполнился, вы не можете получить доступ к предыдущему результату

//   new Promise(() => {})
//             .then((planet) => { return getFilmsPromises(planet) })
//             .then(() => { /* здесь нет доступа к переменной  planet, тк предыдущий промис закончился*/})

//   new Promise(() => {})
//           .then((planet) => {
//                   return getFilmsPromises(planet)
//                       .then(() => { /* здесь есть доступ к переменной  planet, тк мы еще внутри Promise с переменной planet*/})
//            })
//           .then(() => { /* здесь нет доступа к переменной  planet, тк предыдущий Promise закончился*/})

// P.S.
// это задание из codility.com, одно из очень популярных, которые рассылают перед интервью. Если вы хотите быть максимально готовым, перепишите это задание используя модуль https://nodejs.org/api/https.html из node js

const func = (planetId) => {
  const getByUrl = (url) => axios(url).then((obj) => obj.data)
  const homeworkURL = `https://hw.skillcrucial.com/api/sw/planets/${planetId}/?format=json`
  const getSpecies = (urls) => {
    return Promise.all(
      urls.map((url) => {
        return new Promise((resolve) => {
          axios(url).then(({ data }) => resolve(data))
        })
      })
    )
  }

  const getFilms = (urls) => {
    return Promise.all(
      urls.map((url) => {
        return new Promise((resolve) => {
          getByUrl(url).then((film) => {
            getSpecies(film.species).then((species) => resolve({ ...film, species }))
          })
        })
      })
    )
  }

  return new Promise((resolve) => {
    getByUrl(homeworkURL).then((planet) => {
      return getFilms(planet.films).then((films) => resolve({ ...planet, films }))
    })
  })
}

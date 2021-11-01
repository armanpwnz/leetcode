// setTimeout(() => {
//   console.log('hii')
// }, 1)
// for (let i = 0; i <= 10; i += 1) {
//   console.log(i)
// } //   будет равен 0 1 2 3 4 5 6 7 8 9 10 hii

// for (var i = 0; i <= 10; i += 1) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
// }

// for (var i = 0; i <= 10; i += 1) {
// 	setTimeout(
// 		((n) => {
// 			console.log(i);
// 		})(i),
// 		1
// 	);
// }
// setTimeout = сет таймаут он добавляет выполнение команды в  конец, в первый доступный слот

function xd() {}

xd()
xd()
xd()
xd()

let connections = []

const port = process.env.PORT || 8090
const server = express()

const setHeaders = (req, res, next) => {
  res.set('x-skillcrucial-user', '5f9e173c-dd45-41a1-a616-81c5abe6b5ae')
  res.set('Access-Control-Expose-Headers', 'X-SKILLCRUCIAL-USER')
  next()
}

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser(),
  setHeaders,
]

middleware.forEach((it) => server.use(it))

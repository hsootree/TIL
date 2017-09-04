const express = require('express')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const app = express()
const urlencodedMiddleware = bodyParser.urlencoded({extended: false})

app.set('trust proxy', 1) 
app.set('view engine', 'ejs')

const accounts = [
  {
    username: 'seungha',
    password: 'kim',
    name: '김승하'
  },
  {
    username: 'fast',
    password: 'campus',
    name: '패스트캠퍼스',
    admin: true
  }
]

app.use(cookieSession({
  name: 'session',
  secret: process.env.SECRET
}))

app.use((req, res, next) => {
  if (req.session.username) {
    req.user = res.locals.user = accounts.find(acc => acc.username === req.session.username)
  } else {
    req.user = res.locals.user = null
  }
  next()
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/login', urlencodedMiddleware, (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const matched = accounts.find(item => item.username === username && item.password === password)
  if (matched) {
    req.session.username = matched.username
    res.redirect('/')
  } else {
    res.status(400)
    res.send('400 Bad Request')
  }
})

function onlyAdminMiddleware(req, res, next) {
  // `/secret`에 접속했을 때 이 미들웨어가 작동합니다.
  
  // (현재 로그인 된 사용자가) 관리자가 아니면 403 Forbidden 응답을 보내도록 작성해주세요.
  const username = req.session.username
  const matched = accounts.find(item => item.username === username)
  if (matched.admin) {
    next()
  } else {
    res.status(403)
    res.send('403 Forbidden')
  }
}

app.get('/secret', onlyAdminMiddleware, (req, res) => {
  res.send('It is my secret')
})

app.post('/logout', urlencodedMiddleware, (req, res) => {
  req.session = null
  res.redirect('/')
})

app.listen(3000, function() {
  console.log('listening...')
})

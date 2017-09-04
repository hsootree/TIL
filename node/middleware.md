#


## 미들웨어로 하는 일
- 로깅
- HTTP body를 객체로 변환
- 사용자 인증
- 권한 관리 // 내가 쓴 글만 수정할 수 있도록 하는 것 등.
- ...

## Why middleware?
미들웨어로 할 수 있는 모든 일은 라우트 핸들러에서도 할 수 있으나, 여러 라우터에서 사용해야 하는 기능을 중복 작성하는 불편을 덜고 `코드를 재사용`하기 위해 미들웨어를 사용하는 것

## 미들웨어 생태계
Express resource
https://expressjs.com/ko/resources/middleware.html

NPM search
https://www.npmjs.com/search?q=express+middleware


## 미들웨어 예제
Link
https://glitch.com/edit/#!/wpsn-middleware-example

### Express 미들웨어 예제

middlewares.js 파일에서 작성한 미들웨어를 server.js에서 불러와 사용하고 있습니다. 각각 어떤 방식으로 미들웨어를 사용하고 있는지 확인해보세요.

### next?

미들웨어는 req, res에 더해서 next라는 함수를 추가로 인자로 받습니다. next 함수를 호출하면 다음 미들웨어로 처리를 넘기는 효과가 있습니다. 만약에 미들웨어가 next 함수를 호출하지도 않고, 응답도 보내지 않으면 클라이언트는 응답을 받지 못하게 되므로 주의하세요!

### App Local, Response Local

app.locals와 res.locals는 특별한 객체를 담고 있습니다. 템플릿에서는 res.render를 통해 명시적으로 주입받지 않아도 저 두 객체의 속성에 바로 접근할 수 있습니다.

템플릿을 가리지 않고 사용되는 정보들, 예를 들어 '현재 로그인 중인 사용자 정보' 같은 것을 res.render에 매번 인자로 넘기는 것은 귀찮을 뿐더러 빠뜨리기도 쉽습니다. 그런 정보들을 템플릿에서 쉽게 사용하기 위해, app.locals나 res.locals에 우리가 원하는 이름으로 속성을 주입할 수 있습니다.

app.locals는 앱 단위로 공통적으로 쓰이는 정보를 담는 목적으로 사용됩니다. res.locals는 각 요청마다 달라지는 정보를 담는 목적으로 사용됩니다.

app.local 객체를 조작하는 것은 매우 쉽습니다. res 객체는 매 요청마다 새로 생성되어 미들웨어 바깥에서 접근할 수 있는 방법이 없으므로, res.locals를 조작하려면 미들웨어를 사용해야 합니다.


```js
// server.js

const express = require('express')
const {
  ipLoggingMiddleware, //요청한 사람의 아이디
  urlLoggingMiddleware, // 요청들어온 경로 
  resLocalMiddleware, //
  lock // 특별한 비밀번호를 지정해 놓고 막는 기능
} = require('./middlewares')

// const bodyParser = require('body-parser')
// const jsonMiddleware = bodyParser.json() // 바디파서를 정의 함.

const app = express()

app.set('view engine', 'ejs')

// 앱 단위 미들웨어는 모든 라우트 핸들러에서 실행됩니다.
// 미들웨어는 등록된 순서대로 실행됩니다.
// 아래 미들웨어 적용 순서를 바꿔보세요.
// app.use(ipLoggingMiddleware) // 순서를 바꾸고 결과를 확인해봄.
app.use(urlLoggingMiddleware)
app.use(ipLoggingMiddleware)


// 라우트 단위 미들웨어는 적용된 라우트에서만 실행됩니다.
app.get('/', resLocalMiddleware, (req, res) => {
  const data = {}
  res.render('index.ejs', data)
})

app.get('/secret', lock('thisisthekey'), (req, res) => { // key를 넣지 않았을때 403 페이지를 보여줌. url (screat?key=thisisthekey)
  res.send('my secret is...')
})

// 요청이 라우트 핸들러가 등록된 어떤 경로와도 일치하지 않을 때,
// 맨 마지막 미들웨어를 실행시킬 수 있습니다. 이를 이용해 우리만의 404 페이지를 보여줄 수 있습니다.
// 아래에 작성해보세요. (참고: http://expressjs.com/ko/starter/faq.html)

app.use((req, res, next) => {
  next
})

app.listen(3000, function() {
  console.log('listening...')
})

```
glitch 에서 `logs` 버튼을 클릭해보면  


```js
// middlewares.js

exports.ipLoggingMiddleware = (req, res, next) => {
  console.log(`request ip: ${req.ip}`)
//  next() //  지우고 실행해봄.
    res.send('보여줄 것') // next or res.send 둘 중 하난 꼭 작성해줘야 함.
}

exports.urlLoggingMiddleware = (req, res, next) => {
 // console.log(`request url: ${req.originalUrl}`)

  next()
}

exports.resLocalMiddleware = (req, res, next) => {
  res.locals.myVar = 'FASTCAMPUS!'
//  next()
}

exports.lock = key => (req, res, next) => { // 회싪표가 두개인 이유 또는 사용법 아래 추가.
  if (req.query.key === key) {
    next()
  } else {
    res.status(403)
    res.send('403 Forbidden')
  }
}
```


```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div>
      <%= myVar %>
    </div>
    <div>
    <!-- 사용자의 요청에 의해 입력된 값 -->
      <%= yourVar %>
    </div>
  </body>
</html>
```

#### 화살표 함수 2개 사용하는 방법
 사용예제
 ```js
function makeAdder(x) {
    return function (y){
        return x + y
    }
}
add1 = makeAdder(1)
function (y) {
    return x + y
}
add1(2)
makeAdder(3) (4) // 커링(currying function) 이라고 함. (사람이름임. ㅎㅎ)
makeAdder2 = x => v => x + v
//makeAdder2 = x => ( v => x + v ) 와 같은 의미

 
 ```

## 미들웨어 vs 라우트 핸들러
- 라우트 핸들러도 미들웨어
- 즉, next 함수를 인자로 받는 것이 가능

```js
 app.get('/', (req, res, next) => { // app.get('/', aaaaa, (req, res, next) aaaaa를 입력할 수 있음.
  if (!someCondition) {
    next() // 요청을 처리를 하지 않고 다른 핸들러로 넘김
  } else {
    res.send('hello')
  }
})
```
## 실습
Custom 404 page

https://glitch.com/edit/#!/wpsn-middleware-example

```js
// server.js
const express = require('express')
const {
  ipLoggingMiddleware, 
  urlLoggingMiddleware, 
  resLocalMiddleware,
  lock
} = require('./middlewares')

const app = express()

app.set('view engine', 'ejs')

// 앱 단위 미들웨어는 모든 라우트 핸들러에서 실행됩니다.
// 미들웨어는 등록된 순서대로 실행됩니다.
// 아래 미들웨어 적용 순서를 바꿔보세요.
app.use(urlLoggingMiddleware)
app.use(ipLoggingMiddleware)

// 라우트 단위 미들웨어는 적용된 라우트에서만 실행됩니다.
app.get('/', resLocalMiddleware, (req, res) => {
  res.render('index.ejs')
})

app.get('/secret', lock('thisisthekey'), (req, res) => {
  res.send('my secret is...')
})

// 요청이 라우트 핸들러가 등록된 어떤 경로와도 일치하지 않을 때,
// 맨 마지막 미들웨어를 실행시킬 수 있습니다. 이를 이용해 우리만의 404 페이지를 보여줄 수 있습니다.
// 아래에 작성해보세요. (참고: http://expressjs.com/ko/starter/faq.html)

app.use((req, res, next) => {
//  next()
  res.render('404.ejs') // 404로 미들웨어 제공해줄시에는 제일 마지막에 제공해야 함.

})

app.listen(3000, function() {
  console.log('listening...')
})


```

```ejs
<!-- views/404.ejs -->
My Awesome 404!
```

## 에러 처리 미들웨어
https://expressjs.com/ko/guide/error-handling.html

``` link document
// Express
오류 처리

다른 미들웨어 함수와 동일반 방법으로 오류 처리 미들웨어 함수를 정의할 수 있지만, 오류 처리 함수는 3개가 아닌 4개의 인수, 즉 (err, req, res, next)를 갖는다는 점이 다릅니다. 예를 들면 다음과 같습니다.
```
```js
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```
> 에러가 날때 슬랙으로 연동하여 바로 대응이 가능하도록 대처함.
> bugsnag site를 서비스를 활용.









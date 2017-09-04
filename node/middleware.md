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


## Next
Cookie
https://seungha-kim.github.io/wpsn-handout/2-1-2-cookie.html


## 쿠키의 필요성
`개별 클라이언트`의 `여러 요청`에 걸친 `정보의 유지`

- 장바구니
- 로그인/로그아웃
- 방문 기록
- ...

## HTTP Cookie
- `서버가 응답을 통해 웹 브라우저에 저장하는` 이름+값 형태의 정보
- 웹 브라우저는 쿠키를 저장하기 위한 `저장소`를 가지고 있음
- 저장소는 `자료의 유효기간`과 `접근 권한`에 대한 `다양한 옵션`을 제공

## 쿠키 전송 절차
1. 서버는 브라우저에 저장하고 싶은 정보를 응답과 같이 실어 보낸다 (Set-Cookie 헤더)
```js
HTTP/1.1 200 OK
Set-Cookie: cookieName=cookieValue; Secure; Max-Age=60000
...
```

2. 브라우저는 같은 서버에 요청이 일어날 때마다 해당 정보를 요청에 같이 실어서 서버에 보낸다 (Cookie 헤더)
```js
GET / HTTP/1.1
Cookie: cookieName=cookieValue; anotherName=anotherValue
...
```

## Set-Cookie Options
`Expires, Max-Age`
쿠키의 지속 시간 설정  
`Secure`
HTTPS를 통해서만 쿠키가 전송되도록 설정  
`HttpOnly`
자바스크립트에서 쿠키를 읽지 못하도록 설정  
`Domain, Path`
쿠키의 scope 설정 (쿠키가 전송되는 URL을 제한)  

## Express + Cookie
> 쿠키 읽기 - req.cookies
요청에 실려온 쿠키가 객체로 변환되어 req.cookies에 저장됨 (cookie-parser 미들웨어 필요)
> 쿠키 쓰기 - res.cookie(name, value)
쿠키의 생성 혹은 수정

## 쿠키 예제
https://glitch.com/edit/#!/wpsn-cookie-example
이 프로젝트에서는 응답의 Set-Cookie 헤더의 여러가지 옵션을 시험해볼 수 있습니다.

server.js의 각 라우트 핸들러가 어떤 작업을 하는지 살펴보고, 쿠키를 설정하는 라우트에 직접 접속해서 어떤 응답이 오는지 (Network 탭 이용), 쿠키가 어떻게 저장이 되는지 (Application 탭 이용) 확인해보세요. (Chrome을 이용해 응답의 Set-Cookie 헤더를 확인하려면 preserve log 옵션을 켜야 할 것입니다.)

```js
//server.js
const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.set('trust proxy', 1)
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send(req.cookies)
})

app.get('/somePath', (req, res) => {
  res.send(req.cookies)
})

// 별다른 옵션 없이 쿠키를 저장하는 응답을 보냅니다.
app.get('/set', (req, res) => {
  res.cookie('cookieName', 'cookieValue') // 쿠키값 지정한 것을 응담.
  res.redirect('/')
})

// httpOnly 옵션은 해당 쿠키를 자바스크립트에서 접근할 수 없게 합니다.
// console 에서 document.cooke 를 입력해서 확인해봄. 자바스크립트에서는 확인이 어려움. 보안이 좋아짐. 웹사이트를 사용할시 악의적인 스크립트 삽입 공격을 당할 수 있는데 이를 방지할 수 있음. 
// Cross-site Scripting (XSS) 

app.get('/httpOnly', (req, res) => {
  res.cookie('httpOnlyCookie', 'value', { 
    httpOnly: true
  })
  res.redirect('/')
})

// secure 옵션은 http 프로토콜을 통한 요청에는 쿠키가 포함되지 않게 합니다. (https로 했을 때만 포함시킴)
app.get('/secure', (req, res) => {
  res.cookie('secureCookie', 'value', {
    secure: true
  })
  res.redirect('/')
})

// maxAge 옵션은 쿠키가 해당 시간이 지났을 때 삭제되도록 합니다.
app.get('/maxAge', (req, res) => {
  res.cookie('maxAgeCookie', 'value', {
    maxAge: 5000
  })
  res.redirect('/')
})

// domain 옵션은 해당 도메인 및 서브도메인으로 쿠키가 전송되도록 합니다.
app.get('/domain', (req, res) => {
  res.cookie('domainCookie', 'value', {
    domain: 'glitch.me'
  })
  res.redirect('/')
})

// path 옵션은 쿠키가 지정된 경로 및 그 하위 경로에 요청이 일어났을 때만 전송되도록 합니다.
app.get('/path', (req, res) => {
  res.cookie('pathCookie', 'value', {
    path: '/somePath' // 특정 경로에만 포함되도록 할 수 있름.
  })
  res.redirect('/')
})

// 여러 옵션을 한꺼번에 지정할 수도 있습니다.
app.get('/multiple-options', (req, res) => {
  res.cookie('multipleOption', 'value', {
    secure: true,
    httpOnly: true,
    maxAge: 5000
  })
  res.redirect('/')
})

app.listen(3000, function() {
  console.log('listening...')
})
```
## JavaScript + Cookie
자바스크립트로도 쿠키를 읽고 쓰는 방법이 존재(https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)하지만, 보안 상 문제를 일으킬 수 있으므로 이런 접근 방식은 거의 사용되지 않는다.

자바스크립트에서 쿠키에 접근하지 못하도록 HttpOnly를 항상 설정하는 것이 best practice

## 쿠키의 한계점
- US-ASCII 밖에 저장하지 못함. 보통 percent encoding을 사용
- 4000 바이트 내외(영문 4000자, percent encoding 된 한글 444자 가량)밖에 저장하지 못함
- 브라우저에 저장됨. 즉, 여러 브라우저에 걸쳐 공유되어야 하는 정보, 혹은 웹 브라우저가 아닌 클라이언트(모바일 앱)에 저장되어야 하는 정보를 다루기에는 부적절(불가능한 것)
: 로그인된 상태에서는 다른 방법으로 저장되는 것임.

## Next
Session
https://seungha-kim.github.io/wpsn-handout/2-1-3-session.html

## Session
사전적 의미 (naver)  
1. (특정한 활동을 위한) 시간
2. (의회 등의) 회기; (법정의) 개정 (기간)
실질적 의미
- 시작 조건과 종료 조건이 있는 시간, 또는 회기  
- 정보 교환이 지속되는 시간, 또는 회기

## 세션의 예
[HTTP session] (https://developer.mozilla.org/ko/docs/Web/HTTP/Session)
요청 - 응답
[로그인 세션] (https://en.wikipedia.org/wiki/Login_session)
로그인 - 로그아웃
[Google Analytics 세션](https://support.google.com/analytics/answer/2731565?hl=ko)
페이지 접속 - 30분간 접속이 없으면 종료로 간주 (커스터마이징 가능) 
페이지 사용자수 측정 (같은 페이지를 30분 뒤에 접속, 1시간 뒤에 접속, 그 다음날 접속 : 30분 단위로 접속 카운트하는 것을 session count라고 함. 1 + 2(1시간) + 그 다음날 접속한 시간/2)

## 웹 서비스를 위한 세션의 구현
1. 세션이 시작되면, 세션이 시작되었다는 사실을 쿠키에 저장
2. 세션에 대한 정보를 여러 요청에 걸쳐서 지속시키기 위해, 정보를 어딘가(쿠키)에 저장
3. 세션이 만료되면, 세션이 만료되었다는 사실을 쿠키에 반영
* 위 방식은 널리 사용되는 방식일 뿐, 반드시 위와 같이 구현해야 하는 것은 아닙니다.

로그인을 하기 위해서 요청을 하고나면 로그인 성공 서버는 브라우저 쿠키에 세션 시작이라는 정보를 브라우저에 저장함.

## 세션 스토어
세션에 대한 정보를 저장하는 어딘가

- 쿠키
- 데이터베이스
- 파일
- 기타 정보를 저장할 수 있는 곳 어디든

## 세션 스토어의 선택
서비스의 요구사항에 맞춰서
적절한 저장소를 선택하면 됨

- 정보의 형태가 간단하고 자주 바뀔 일이 없으면 쿠키
- 저장해야 할 정보의 양이 많으면 데이터베이스
- 정보가 굉장히 자주 변경되면 메모리 기반 저장소

## 세션? 세션 스토어?
'세션'과 '세션 스토어'는 엄연히 다른 말이지만 혼용되는 경우가 많습니다.
'세션에 정보를 저장한다'는 말은 '세션 스토어에 정보를 저장한다'는 말과 같은 뜻이라고 생각하면 됩니다.

## Express + Session
[cookie-session] (https://www.npmjs.com/package/cookie-session)
쿠키에 모든 정보를 저장하는 세션 스토어. 
첫 방문시 무조건 세션 시작
[express-session] (https://www.npmjs.com/package/express-session)
쿠키에는 세션 식별자만 저장하고 실제 정보의 저장은 외부 저장소(데이터베이스 등)를 이용하는 세션 스토어. 외부 저장소에 대한 별도의 설정 필요

## cookie-session 예제
(https://glitch.com/edit/#!/wpsn-cookie-session-example)

### cookie-session 예제

===

`cookie-session` NPM 패키지는 쿠키를 세션 스토어로 사용할 수 있도록 해주며 세션 스토어를 쉽게 사용할 수 있는 방법을 제공합니다.

`server.js` 파일과 앱을 열어 어떤 방식으로 동작하는 앱인지 확인하고, 크롬 개발자 도구를 이용해 쿠키가 전달되고 저장되는 모습을 확인하세요.

# cookie-session 동작 방식

1. cookie-session 미들웨어는 첫 요청이 일어났을 때 빈 세션 정보(빈 객체)를 `req.session`에 주입합니다.
1. 프로그래머는 세션과 관련된 정보를 `req.session`에 저장합니다. `req.session`은 보통의 자바스크립트 객체로, JSON으로 표현될 수 있는 자료라면 뭐든지 저장할 수 있습니다.
1. cookie-session 미들웨어는 응답이 일어나기 직전에 `req.session` 객체를 문자열로 바꾼 뒤(JSON & base64), 쿠키에 저장합니다.
1. cookie-session 미들웨어는 다음 번 요청부터 쿠키에 저장된 정보를 자바스크립트 객체로 변환해 `req.session`에 주입합니다.
1. 프로그래머는 `req.session` 객체를 이용해 세션 정보를 읽을 수 있습니다. 또한 세션 정보를 통째로 삭제하기 위해 미들웨어 또는 라우트 핸들러에서 `req.session = null`을 대입할 수 있습니다.

# session.sig? 서명!

`session` 쿠키에 저장된 정보는 일반인은 알아볼 수 없지만 프로그래머라면 쉽게 복원하거나 변경할 수 있습니다. ([base64 디코더](https://www.base64decode.org/)로 `session` 쿠키를 변환해보세요) 만약에 세션에 **계정 정보**가 들어있고, 악의적인 해커가 쿠키의 값을 변경해서 세션 스토어를 **조작**할 수 있다면, 마치 다른 사람인 척 행세할 수 있고 그에 따라 정보를 탈취당할 수도 있을 것입니다.

그래서, `cookie-session` 미들웨어는 보안 유지를 위해 서명(signature)을 활용하고 있습니다. 컴퓨터 분야에서의 서명이란, 비밀 키를 이용해 정보를 특별한 알고리즘(hashing)으로 변형시킨 것을 말합니다. 서명의 가장 중요한 성질은, 같은 비밀 키로 같은 정보를 서명했을 때 언제나 같은 결과가 나온다는 것, 그리고 비밀 키나 정보 중 어느 한 쪽만 바뀌어도 서명의 결과가 크게 달라진다는 것입니다.

비밀 키와 서명을 활용하면 **정보가 조작되었는지의 여부**를 알 수 있습니다. 어떤 정보를 서명과 함께 공개하고 비밀 키는 숨기면, 누군가가 정보를 조작해서 올바른 정보인 척 흉내를 내려고 해도 비밀 키를 모르기 때문에 서명을 할 수 없어서 금방 조작인 것이 탄로가 나겠죠. 

`cookie-session` 미들웨어는 응답을 보낼 때 `session` 쿠키에 저장된 문자열을 비밀 키로 서명해서 그 결과를 `session.sig` 쿠키에 저장합니다. 만약에 요청에 포함된 `session` 쿠키를 다시 같은 비밀 키로 서명했는데 `session.sig` 쿠키와 일치하지 않는다면, 정보가 조작된 것을 알아채고 세션을 아예 삭제해버리는 방식으로 조작을 막습니다!

서명을 활용할 때 주의할 점이 있습니다.

1. 비밀 키는 당연히 공개되지 않도록 관리해야 합니다. 비밀 키와 서명 알고리즘이 공개되면 서명이 조작될 수 있습니다.
1. 키의 길이를 충분히 길게 해야 합니다. 해커가 서명 알고리즘을 알고 있다면, 짧은 비밀 키는 어렵지 않게 계산해낼 수 있습니다.
1. 서명은 정보의 조작을 막아주지만, 정보의 공개를 막아주지는 않습니다. `session` 쿠키만 하더라도 base64 디코딩만 거치면 어떤 정보가 들어있는지 바로 확인할 수 있죠. 따라서 비밀번호나 신용카드 번호 등은 `cookie-session`이 제공하는 세션 스토어에 저장하면 안 됩니다.

참고로, 이전에 다뤘던 `cookie-parser` 미들웨어도 옵션을 활성화하면 서명을 사용하여 조작을 방지할 수 있습니다. 곧 배울 JWT도 보안을 위해 서명을 사용하고 있습니다.

서명 과정을 직접 시험해보고 싶다면 [여기](https://www.npmjs.com/package/keygrip)를 참고하세요.

```js
// server.js
const express = require('express')
const cookieSession = require('cookie-session')

const app = express()

app.set('trust proxy', 1) 
app.set('view engine', 'ejs')

// cookie-session 설정
// name: 쿠키 이름으로 사용할 문자열
// secret: 세션 정보를 서명할 때 사용할 키
app.use(cookieSession({
  name: 'session',
  secret: process.env.SECRET,
  maxAge:5000
}))

// req.session.count를 처리하는 미들웨어
const countMiddleware = (req, res, next) => {
  if ('count' in req.session) { 
    // count 속성이 있으면 1을 더하고
    req.session.count += 1
  } else {
    // count 속성이 없으면 처음 방문한 것이므로 1로 설정한다.
    req.session.count = 1
  }
  next()
}

// 첫 방문 후, 쿠키 관련 헤더가 요청과 응답에 잘 포함되는지 살펴보고,
// 실제로 쿠키가 어떻게 저장되어있는지 살펴보세요.
app.get('/', countMiddleware, (req, res) => {
  res.render('index.ejs', {count: req.session.count})
})

app.post('/reset-count', (req, res) => {
  delete req.session.count
  res.redirect('/')
})

app.listen(3000, function() {
  console.log('listening...')
})
```
```html
<!-- views/index.ejs -->

<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div>
      <%= count %>번 째 방문하셨습니다.
    </div>
    <form action="/reset-count" method="post">
      <button type="submit">
        초기화
      </button>
    </form>
  </body>
</html>
```


## 인증/인가 실습
(https://glitch.com/edit/#!/wpsn-auth-prac)


===

**리믹스 하신 뒤 `.env` 파일에서 SECRET 환경변수를 설정해주세요.**
```js
// .env
SECRET= // 값을 넣어주어야 함.
```

# 인증(Authentication)과 인가(Authorization)

인증(Authentication)은 클라이언트가 누구인지를 확인하는 과정입니다. 지금은 '인증과 로그인은 같은 말'이라고 생각하셔도 무방합니다.

인가는 클라이언트가 하려고 하는 작업이 해당 클라이언트에게 허가된 작업인지를 확인하는 과정입니다. '권한 설정'이라고 생각하셔도 무방합니다. 예를 들어 다음 카페나 네이버 클럽에서는 관리자만이 게시판을 만들거나 없앨 수 있도록 인가됩니다. 

# 인증 구현 전략

인증은 여러가지 방식으로 구현될 수 있으며, 여기에서는 우리가 쓰고 있는 `cookie-session` 의 기능에 맞추어서 구현해보도록 하겠습니다.

`cookie-session`이 제공하는 미들웨어는 첫 방문시 바로 세션을 시작하고 (이를 guest session이라 부릅니다) 쿠키에 빈 세션 정보(빈 객체)를 저장합니다. 그래서 첫 방문자에 대해서도 session 객체를 바로 쓸 수 있습니다.

아래와 같은 규칙으로 인증을 구현해보도록 합니다.

1. `req.session.username === undefined`이면 로그인된 사용자가 없는 것으로 간주합니다.
1. 사용자가 로그인 폼을 전송하면 `accounts` 배열에 저장된 계정 정보 중에 일치하는 것이 있는지 확인하고, 있다면 `req.session.username`에 해당 사용자 이름을 세션에 저장합니다. 만약 일치하는 계정이 없으면 400 Bad Request 응답을 보냅니다.
1. `req.session.username`에 저장된 값이 있다면 해당 사용자로 로그인이 되어 있다고 간주합니다.
1. 로그아웃을 하기 위해 `req.session = null`와 같이 대입해서 세션을 초기화합니다.

(인증이 된 뒤에는 `req.user`와 `res.locals.user`에 계정 객체를 주입해서 라우트 핸들러와 템플릿에서 편하게 접근할 수 있도록 미리 코드를 짜 두었습니다.)

```js
// server.js
const express = require('express')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const app = express()
const urlencodedMiddleware = bodyParser.urlencoded({extended: false})

app.set('trust proxy', 1) 
app.set('view engine', 'ejs')

const accounts = [
  {
    username: 'hsootree',
    password: 'soo',
    name: '최혜선'
  },
  {
    username: 'sootree',
    password: 'tree',
    name: '관리자',
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

app.post('/login', urlencodedMiddleware, (req, res) => { // 인증
  
  // 인증 과정을 작성해주세요.
  const username = req.body.username
  const password = req.body.password
  // 아이템의 유저네임과 같은 지를 찾는다.
  const matched = accounts.find(item => item.username === username && item.password === password)
  if (matched) {
        req.session.username = matched.username
        res.redirect('/')

  } else {
    res.status(400)
    res.send('400 Bad Request')
  }
})

function onlyAdminMiddleware(req, res, next) { // 인가 - 권한 설정(관리자)
  // `/secret`에 접속했을 때 이 미들웨어가 작동합니다.
  
  // (현재 로그인 된 사용자가) 관리자가 아니면 403 Forbidden 응답을 보내도록 작성해주세요.
  const username = req.session.username // req.session은 쿠키에 저장되는 객체임.
  const matched = accounts.find(item => item.username === username) 
  if (matched.admin){
    next() // 그냥 통과
  } else {
    res.status(403)
    res.send('403 Forbidden')
  }
}

app.get('/secret', onlyAdminMiddleware, (req, res) => {
  res.send('It is my secret')
})

app.post('/logout', urlencodedMiddleware, (req, res) => {
  req.session = null // 세션이 지워지고 새로운 세션을 만들어냄. 값이 지워지므로 로그아웃 상태가 됨. 
  res.redirect('/')
})

app.listen(3000, function() {
  console.log('listening...')
})
```

```html
// views/index.ejs
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div>
      <% if (user) { %>
        현재 로그인한 사용자의 이름은 <%= user.name %> 입니다.
      <% } else { %>
        현재 로그인한 사용자가 없습니다. 
      <% } %>
    </div>
    <% if (user) { %>
      <form action="/logout" method="post">
        <button type="submit">
          로그아웃
        </button>
      </form>
    <% } else { %>
      <form action="/login" method="post">
        <label>
          사용자 이름
          <input required type="text" name="username" />
        </label>
        <label>
          비밀번호
          <input required type="password" name="password" />        
        </label>
        <button type="submit">
          로그인
        </button>
      </form>
    <% } %>
  </body>
</html>
```

====

# 인가 구현 전략

관리자만이 비밀 정보(`/secret`)에 접근할 수 있도록 해 보겠습니다. 사용자가 관리자인지 아닌지의 여부는 계정 객체의 `admin` 속성에 저장되어 있습니다.

session.sig
sig 서명을 통한 보안.

hash 함수 
md5-hash-online.waraxe.us 







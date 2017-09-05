
# Token Based Auth
- 토큰이란, 사용자의 자격증명(아이디, 패스워드 등)을 통해 인증이 이루어진 후, 특정 자원에 대한 자격증명으로서 대신 사용되는 인증 수단
- 서버에 요청을 할 때마다 토큰을 요청에 직접 포함시켜서 전송 (주로 Authorization 헤더에 넣어서 전송)
![](../images/3NkXs.png)

## Cookie vs Token
![](../images/cookie-token-auth.png)
traditional
200 (이미지 잘못된건가??) > 302로 응답을 전송
modern
200 ok 

## 토큰 사용의 장점
- 다양한 인증 수단(전화번호, 공인인증서, 생체정보 등)의 인증 결과를 토큰이라는 하나의 수단으로 통일할 수 있음
- 쿠키를 사용하지 않음으로써 CORS 관련 문제를 회피할 수 있음

## 토큰 사용의 단점
- 매 요청에 토큰이 포함되게 되므로 적당히 짧은 길이를 유지해야 함
- 토큰 유출에 대한 대비책이 필요 (토큰에 유효기간을 두거나, 유출된 토큰을 강제로 무효화하는 등의 방법을 사용)
- 쿠키와는 다르게, 클라이언트에서 직접 토큰을 저장하고 관리해야 함

## Web Storage (웹표준)
- 브라우저에서 키-값 쌍을 저장할 수 있는 저장소
- 쿠키에 비해 사용하기 편리하고 저장 가능한 용량도 큼(10MB 가량)
- 브라우저 탭이 닫히면 내용이 삭제되는 sessionStorage, 브라우저 탭이 닫혀도 내용이 유지되는 localStrage가 있음

## Web Storage 실습

![](../images/webstorage.png)
```
테스트를 할때 
좋은 방법은 아니지만
localStorage.foo = 'ham' 만들어서 사용할 수 있다. 그러나~!
주의할 점은,
메소드와 겹칠 수 있으니 만들어서 사용하지 말고 메소드에 있는 것을 사용.

localStorage.setItem 
localStorage.getItem
메소드를 사용해야 함.
문자가 아닌 것을 넘길때  tostring 메소드를 호출해서 저장해야 한다.
obj.toString()
```

## 보안 상 주의사항
- 토큰을 localStorage에 저장하게 되면 자바스크립트로 토큰을 탈취할 수 있게 되므로, 웹사이트에 악성 스크립트를 삽입하는 공격(XSS)에 노출되지 않도록 신경써야 함
- 직접 DOM API를 사용하는 대신 EJS, React 같은 템플릿 언어를 사용하기만 해도 XSS에 대한 방어는 충분함

inner html을 실무에서는 사용하면 안됨.

## JSON Web Token
- 최근 널리 사용되고 있는 [토큰 형식의 표준](https://tools.ietf.org/html/rfc7519)
- 토큰 안에 JSON 형식으로 정보를 저장함
- 보안을 위해 서명 또는 암호화를 사용할 수 있음
[jwt.io](https://jwt.io/) 
{username: "hsoo"}.서명
{username: "admin"}.서명



## JWT 실습
https://glitch.com/edit/#!/wpsn-jwt-example

===

이 프로젝트는 express 및 다른 패키지들을 이용해 JWT를 통한 인증을 하는 서버를 구현하고 있습니다. 상단의 `Show` 버튼을 눌러 예제를 따라해보세요.

다음의 내용들을 시험해볼 수 있습니다.

- Postman과 JWT를 이용한 API 사용
- Axios와 JWT를 이용한 API 사용
- Axios instance


```js
// server.js
const express = require('express')
const bodyParser = require('body-parser')

/** 
 * JWT의 사용을 위해 두 패키지가 필요합니다.
 * jsonwebtoken: JWT의 생성과 검증을 위한 범용 패키지입니다. 여기에서는 JWT 생성을 위해 사용하고 있습니다.
 * express-jwt: JWT가 요청에 포함되어 서버에 들어왔을 때, 해당 토큰을 검증 및 변환해서 `req.user`에 저장해주는 express 미들웨어입니다.
 */
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')


// 토큰의 서명을 위해 필요한 비밀 키를 저장해둡니다.
const SECRET = 'mysecret'

const app = express()
const jsonMiddleware = bodyParser.json()

app.use(express.static('public'))

/**
 * 인증 미들웨어 생성
 * 
 * `expressJwt()`로 생성된 미들웨어의 기능은 다음과 같습니다.
 *
 * 1. `Authorization: Bearer <token>` 형태로 jwt가 들어왔는지 검사하고
 * 2. 토큰이 없으면 401 Unauthorized 응답을 보낸다.
 * 3. 토큰이 있으면 토큰에 들어있는 JSON 정보를 객체로 변환한 후 `req.user`에 저장한다.
 *
 * 미들웨어 생성 시에 서명에 필요한 secret을 전달해 줍니다.
 */
const authMiddleware = expressJwt({secret: SECRET})

const users = [
  {
    username: 'fast',
    password: 'campus',
    isAdmin: true
  },
  {
    username: 'foo',
    password: 'bar'
  }
]

/**
 * `/auth` 경로로 들어온 사용자 이름과 비밀번호를 users 배열과 대조한 후
 * 일치하는 계정이 있다면 해당 계정 정보를 가지고 JWT 토큰을 만들어서 응답한다.
 */
app.post('/auth', jsonMiddleware, (req, res) => {
  const {username, password} = req.body
  const matched = users.find(user => user.username === username && user.password === password)
  if (matched) {
    // `jwt.sign` 메소드는 새로운 JWT 토큰을 생성한다.
    // 토큰에 넣을 객체와 서명에 필요한 secret을 전달한다.
    const token = jwt.sign({username, isAdmin: matched.isAdmin}, SECRET) // 꼭 기억해두어야 할 소스.
    res.send({
      ok: true,
      token
    })
  } else {
    // 일치하는 계정이 없으면 400 응답
    res.status(400)
    res.send({
      ok: false,
      error: 'No matched user'
    })
  }
})

/**
 * 토큰에 들어있는 정보를 그대로 반환하는 라우트 핸들러
 */
app.get('/auth', authMiddleware, (req, res) => {
  res.send(req.user)
})

/**
 * JWT로 인증이 된 요청만 API를 사용할 수 있게 해준다.
 */
app.get('/some-api', authMiddleware, (req, res) => {
  res.send({
    ok: true,
    message: 'Hello JWT!'
  })
})

let count = 0
app.post('/count', authMiddleware, (req, res) => {
  count += 1
  res.send({
    ok: true,
    count
  })
})

app.listen(3000, () => {
  console.log('listening...')
})

```

---

### postman 사용예
get에 url
headers 
value에 Bearer 카피한것을 붙여 넣고 'send'버튼

### Postman 이용

/auth 경로에 username, password를 포함시킨 POST 요청을 보내면 토큰이 반환됩니다. 반환된 토큰을 이용해 /auth 경로에 GET 요청을 보내보세요. 토큰은 Authorization 헤더에 "Bearer [토큰]" 형식으로 포함시키면 됩니다.

### Axios 이용
개발자 도구의 콘솔을 여시고, Axios를 이용해 Postman으로 했던 작업을 그대로 다시 해 보세요. 현재 페이지에는 axios라는 이름으로 로딩되어 있습니다.

```js
// 토큰 받아오기
let token;
axios.post('/auth', {
  username: 'fast',
  password: 'campus'
}).then(res => {
  token = res.data.token
  console.log(`token: ${token}`)
})
// 토큰으로 요청하기 1
axios.get('/auth', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(res => {
  prettyPrint(res.data)
})
// 토큰으로 요청하기 2
axios.get('/some-api', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(res => {
  prettyPrint(res.data)
})

// 토큰으로 요청하기 3 예제
axios.post('/count', null, { // 주의할 점. 보낼 데이터가 없으므로 경로, 정보(null), 컨피그 인자
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(res => {
  prettyPrint(res.data)
})
```

### Axios Instance

```js
// Axios.create - 위의 요청 1~3가지를 한번에 처리
const authedAxios = axios.create({
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
authedAxios.get('/auth').then(res => {
  prettyPrint(res.data)
})
authedAxios.get('/some-api').then(res => {
  prettyPrint(res.data)
})
authedAxios.post('/count').then(res => {
  prettyPrint(res.data)
})
```

## 참고 링크
- https://jwt.io/introduction/
- https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage
- https://blog.outsider.ne.kr/1160
- https://velopert.com/2448
- https://auth0.com/blog/json-web-token-signing-algorithms-overview/













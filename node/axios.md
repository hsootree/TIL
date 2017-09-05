
# Axios
- Promise based HTTP client
- 브라우저와 Node.js에서 모두 사용 가능
- XMLHttpRequest, fetch에 비해 사용하기 편하고 기능이 더 많음
ref: [내가 fetch API를 쓰지 못했던 이유](https://medium.com/little-big-programming/%EB%82%B4%EA%B0%80-fetch-api%EB%A5%BC-%EC%93%B0%EC%A7%80-%EB%AA%BB%ED%96%88%EB%8D%98-%EC%9D%B4%EC%9C%A0-3c23f0ec6b82)
취소가 안되는 단점이 있다.

## Axios + json-server 예제
(https://glitch.com/edit/#!/wpsn-axios-example)

## Axios 튜토리얼
===

**리믹스한 후 `db.default.json` 파일을 `.data/db.json` 위치에 복사하세요**

## Axios

Axios는 최근 인기를 끌고 있는 HTTP client입니다. 브라우저에서 사용하면 `XMLHttpRequest`를 사용하여 Ajax 요청을 보내고, Node.js에서 사용하면 내장 http 모듈을 이용해 요청을 보냅니다. 사용법이 아주 간단하며 Promise 기반으로 깔끔한 코드를 작성할 수 있습니다.

상단의 `Show` 버튼을 누르고 개발자 도구의 콘솔을 열어 예제 코드를 입력해보세요. `axios` 변수가 미리 로드되어 있습니다.

## json-server + express

이 프로젝트는 `json-server` 패키지를 사용해 REST API를 제공하고 있습니다. `json-server`는 내부적으로 `express`를 사용하고 있어서 커맨드라인을 통해서 `json-server`를 실행시키지 않고 직접 자바스크립트 파일에서 불러와 사용할 수 있습니다. 보통의 `express` 객체를 사용하듯이 사용할 수 있어서 필요한 경로에 미들웨어를 마음대로 추가할 수 있습니다. [json-server 매뉴얼](https://www.npmjs.com/package/json-server#module)과 `server.js` 파일을 참고해주세요.
(https://wiry-bay.glitch.me/) 실습 연습해봐야겠다. 복습!!!

.data/db.json

## 쿠키를 통한 인증 예제

## Axios 튜토리얼
===

**리믹스한 후 `db.default.json` 파일을 `.data/db.json` 위치에 복사하세요**

# Axios

Axios는 최근 인기를 끌고 있는 HTTP client입니다. 브라우저에서 사용하면 `XMLHttpRequest`를 사용하여 Ajax 요청을 보내고, Node.js에서 사용하면 내장 http 모듈을 이용해 요청을 보냅니다. 사용법이 아주 간단하며 Promise 기반으로 깔끔한 코드를 작성할 수 있습니다.

상단의 `Show` 버튼을 누르고 개발자 도구의 콘솔을 열어 예제 코드를 입력해보세요. `axios` 변수가 미리 로드되어 있습니다.

# json-server + express

이 프로젝트는 `json-server` 패키지를 사용해 REST API를 제공하고 있습니다. `json-server`는 내부적으로 `express`를 사용하고 있어서 커맨드라인을 통해서 `json-server`를 실행시키지 않고 직접 자바스크립트 파일에서 불러와 사용할 수 있습니다. 보통의 `express` 객체를 사용하듯이 사용할 수 있어서 필요한 경로에 미들웨어를 마음대로 추가할 수 있습니다. `server.js` 파일을 참고해주세요.

```js
// server.js 
// express 를 사용하여 구성함.
 
const jsonServer = require('json-server')
const fs = require('fs')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

// json-server의 구성요소들을 생성합니다. 매뉴얼 보고 잘 사용해보길 권장함.
const server = jsonServer.create()
const router = jsonServer.router('.data/db.json')
const middlewares = jsonServer.defaults()

// 쿠키를 glitch에서 사용하기 위해 필요한 설정입니다.
server.set('trust proxy', 1)

// cookie-session 미들웨어를 주입합니다.
server.use(cookieSession({
  name: 'session',
  secret: 'secret'
}))

// json-server가 제공하는 미들웨어를 주입합니다.
server.use(middlewares)

// 사용자 데이터를 관리할 데이터베이스가 필요한데
// json-server로 관리되는 데이터에 접근하기 어렵기 때문에
// 사용자 데이터만 아래와 같이 따로 배열로 관리합니다.
const users = [
  {username: 'fast', password: 'campus'},
  {username: 'node', password: 'js'},
  {username: 'react', password: 'facebook'}
]

// 인증을 위한 라우트 핸들러입니다.
server.post('/auth', bodyParser.json(), (req, res) => {
  const {username, password} = req.body
  //   const username = req.body.username
  //   const password = req.body.password
  // 두 줄의 의미와 같음.
  const matched = users.find(user => user.username === username && user.password === password)
  if (matched) {
    req.session.username = username
    res.end() // 아무 바디도 없이 응답을 보내겠다.
  } else {
    res.status(400)
    res.end() // 아래 주석에 같은 의미의 다른 코드 참고
  }
  // if (matched) {
  //   req.session.username = username
  //   res.send({ok: true})
  // } else {
  //   res.status(400)
  //   res.send({ok: false, message: '400 Bad Request'}) 성공과 실패를 나타내는 것에 대한 긴밀한 협의가 필요함!!!!!!!!!!!
  // }
})

// 로그아웃을 위한 라우트 핸들러입니다.
server.delete('/auth', (req, res) => {
  req.session = null
  res.end()
})

// `/api` 경로의 인증을 담당하는 미들웨어입니다.
function authMiddleware(req, res, next) {
  if (!req.session.username) {
    res.status(401)
   // res.send('401 Unauthorized')
      res.send({ok: false, error: '401 Unauthorized'})

  } else {
    next()
  }
}

server.use('/api', authMiddleware, router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
```

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>쿠키를 통한 인증 예제</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/monokai-sublime.min.css">
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div class="wrap">
    <h1>
      쿠키를 통한 인증 예제
    </h1>
    <p>
      현재 authMiddleware로 인해 /api 경로로 요청을 해도 401 응답이 오는 상태입니다.
      /auth 경로로 인증 요청을 보낸 후, 쿠키의 변경사항을 확인하시고 /api 경로로 요청을 보내보세요.
      모든 요청을 보낸 후에 로그아웃 요청을 보낸 후, 로그아웃이 잘 되었는지 확인해보세요.
    </p>
    
    <h2>
      로그인
    </h2>
    <pre><code class="javascript">// 로그인
axios.post('/auth', {
  username: 'fast',
  password: 'campus'
}).then(res =&gt; {
  prettyPrint(res.data)
})</code></pre>
    
    <h2>
      로그아웃
    </h2>
    <pre><code class="javascript">// 로그아웃
axios.delete('/auth')
  .then(res =&gt; {
    prettyPrint(res.data)
  })</code></pre>
    
    <hr>
    
    <p>
      아래부터는 이전 예제와 동일한 내용입니다.
    </p>
    
    <h2>
      GET /api/todos
    </h2>
    <pre><code class="javascript">// GET
axios.get('/api/todos')
  .then(res =&gt; {
    prettyPrint(res.data)
  })</code></pre>
    
    <h2>
      POST /api/todos
    </h2>
    <pre><code class="javascript">// POST
axios.post('/api/todos', {title: "ajax 공부"})
  .then(res =&gt; {
    prettyPrint(res.data)
  })</code></pre>
    
    <h2>
      PATCH /api/todos/3
    </h2>
    <pre><code class="javascript">// PATCH
axios.patch('/api/todos/3', {title: "axios 공부"})
  .then(res =&gt; {
    prettyPrint(res.data)
  })</code></pre>
    
    <h2>
      DELETE /api/todos/3
    </h2>
    <pre><code class="javascript">// DELETE
axios.delete('/api/todos/3')
  .then(res =&gt; {
    prettyPrint(res.data)
  })</code></pre>
    
    <hr>
    
    <h2>
      GET /api/todos/?title=react
    </h2>
    <p>
      axios 요청 메소드의 두 번째 인자로 config 객체를 넘길 수 있습니다. config 객체를 통해 요청의 쿼리 스트링, 요청 헤더, 쿠키 포함 여부 등 많은 것들을 설정할 수 있습니다.
    </p>
    <pre><code class="javascript">// config 객체
axios.get('/api/todos', {
  params: { // query string
    title: 'react 공부'
  },
  headers: { // 요청 헤더
    'X-Api-Key': 'my-api-key'
  },
  timeout: 1000 // 1초 이내에 응답이 오지 않으면 에러로 간주
}).then(res =&gt; {
    prettyPrint(res.data)
  })</code></pre>
    
    <hr>
    
    <h2>
      응답 객체
    </h2>
    <p>
      응답 객체를 통해 응답의 여러 정보에 접근할 수 있습니다.
    </p>
    <pre><code class="javascript">// config.params
axios.get('/api/todos/1')
  .then(res =&gt; {
    console.log(`status code: ${res.status}`)
    console.log('headers:')
    prettyPrint(res.headers)
    console.log('data:')
    prettyPrint(res.data)
  })</code></pre>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.2/axios.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
  <script>function prettyPrint(json) {
    console.log(JSON.stringify(json, null, '  '))  
    }</script>
</body>
</html>
```
```css
/* public/index.css */
html, body {
  margin: 0;
  font-family: sans-serif;
  font-size: 20px;
  word-break: keep-all;
}

.wrap {
  width: 700px;
  margin: 30px auto 50px;
}

code.hljs {
  padding: 1em;
}

h2 {
  margin-top: 30px;
  font-family: monospace;
}

small {
  color: grey;
}

hr {
  margin: 50px 0;
}
```
```json
// package.json
{
  "//1": "describes your app and its dependencies",
  "//2": "https://docs.npmjs.com/files/package.json",
  "//3": "updating this file will download and update your packages",
  "name": "my-glitch-app",
  "version": "0.0.1",
  "description": "What am I about?",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "json-server": "^0.12.0",
    "cookie-session": "^1.3.1",
    "body-parser": "^1.17.2"
  },
  "engines": {
    "node": "8.x"
  },
  "repository": {
    "url": "https://glitch.com/edit/#!/welcome-project"
  },
  "license": "MIT",
  "keywords": [
    "node",
    "glitch",
    "express"
  ]
}
```

```json
// db.default.json
{
  "todos": [
    {
      "id": 1,
      "title": "express 공부"
    },
    {
      "id": 2,
      "title": "react 공부"
    }
  ]
}
```

문자열을 정수로 바꾸는 방법
*1 을 할때  undefined*1 NaN
결과를 const result = Nan
result === NaN 
자바스크립트에서 NaN === NaN // false

number.isNaN() 를 이용하여 숫자인지를 확인
try {
  parsInt() // 에러나 나는 상황이면 에러를 나게 해줘야 함.
} catch








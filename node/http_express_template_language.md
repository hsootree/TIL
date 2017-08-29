# HTTP
## wireshark
## http
- 웹 브라우저와 웹 서버 간의 통신을 위해 개발된 통신규약
- 최근에는 REST API의 부상와 함께 다른 용도로도 널리 사용됨
  - 모바일 앱 - 서버 간 통신
  - 서버 - 서버 간 통신
- 80번 포트를 기본으로 사용
- 클라이언트의 요청(request)과 서버의 응답(response)으로 이루어짐

## 역사
- 1991  
HTTP 초기버전 발표. 텍스트만 전송할 수 있는 극도로 단순한 프로토콜. 1990년대 초 인터넷 붐을 일으킴  
- 1996  
여러 인터넷 서비스 업체들이 자체적으로 사용하던 HTTP 구현들을 모아 HTTP 1.0 발표  
- 1999  
1.0의 문제를 해결하고 여러가지 기능을 추가한 HTTP 1.1을 발표. 지금까지 사용되고 있는 버전

## HTTPS
- HTTP over SSL
- HTTP 통신을 암호화해 주고받는 내용을 중간에서 가로챌 수 없도록 함
- 443번 포트를 기본으로 사용

## HTTP/2
- 구글의 SPDY 프로토콜을 기반으로 2015년에 확정된 새로운 HTTP 표준
- 속도 개선에 중점을 두고 개발됨  
- 반드시 HTTPS를 사용해야 함  
- 현재 전체 웹사이트 중 '16% 이상이 사용중'
https://w3techs.com/technologies/details/ce-http2/all/all

## Request & Response
- 웹 브라우저(또는 다른 클라이언트)는 웹 서버에 요청(request)를 보냄
- 그에 따라 서버는 클라이언트에 응답(response)를 보냄
- 웹 브라우저의 경우, HTML 문서 형태의 응답이 오면 해당 문서를 분석한 후, 문서에 포함된 모든 자원에 대한 요청을 각각 추가로 보냄 (이미지, 동영상, 오디오, CSS, JS, 폰트, ...)

## Request Methods
- HTTP 명세에는 8 종류가 등록되어 있고, 각각의 역할과 충족해야 하는 성질이 명시되어 있음 https://developer.mozilla.org/ko/docs/Web/HTTP/Methods
용도가 다른 것을 이해.
get: 
put: 치환 

- 웹 브라우저는 특정 상황에서 특정 메소드로 요청을 보내도록 만들어져 있음
- Ajax와 같이 요청을 보내는 코드를 직접 짤 때는 요청 메소드를 선택할 수 있음
- 자료의 본문을 요청하는 GET 메소드와, 새로운 자료를 등록하는 POST 메소드가 가장 많이 쓰임

## (서버가 충족시켜야 하는) 메소드의 성질
Safe
- 요청이 서버의 상태에 영향을 미치지 않아야 함. 즉, 읽기 전용
Idempotent
- 여러 번 같은 요청을 해도 한 번 요청한 것과 같은 효과여야 함. 네트워크가 불안정해도 안전하게 요청을 보낼 수 있음
Cacheable
- (특정 조건을 만족하면) 응답을 클라이언트에 저장해두었다가 다음 번 요청 때 다시 쓸 수 있음

https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Summary_table

## URL
이미지로 되어 있는 내용 정리 필요함.

## Percent Encoding
- URL은 ASCII 문자(128개의 영문자+특수문자+제어문자)밖에 사용하지 못하기 때문에, non-ASCII 문자를 위한 표현방법이 필요함 #
- Percent encoding은 non-ASCII 문자를 위한 웹 표준 인코딩 방법으로, JavaScript에 관련 기능이 포함되어 있음
```
> encodeURIComponent("한글")
"%ED%95%9C%EA%B8%80"
> decodeURIComponent("%ED%95%9C%EA%B8%80")
"한글"
```
## Request Target
일반적인 경우 아래와 같은 구조가 사용됨

absolute path + query string + fragment id
```
GET /path/to/resource?foo=bar&spam=hoge#fragid HTTP/1.1
```

## Response Status
응답의 성공, 실패 여부와 종류를 나타내며, 
상태 코드 + 상태 메시지의 형태로 응답에 포함됨
```
HTTP/1.1 200 OK
```
## HTTP Status Codes
https://httpstatuses.com/
200, 300, 주로 많이 쓰임.
- Status Category
```
2xx
성공
3xx
추가 작업이 필요함
4xx
실패 - 클라이언트 책임
5xx
실패 - 서버 책임
```
## Status Code - 2xx
200 OK
성공
201 Created
자료가 성공적으로 생성됨

## Status Code - 3xx
- 301 Moved Permanently (Redirection)
    - 자료가 완전히 다른 곳으로 이동했음
- 302 Found (Redirection)
    - 자료가 일시적으로 다른 곳에 있음
- 304 Not Modified (Cache)
    - 클라이언트가 이미 가지고 있던 자료가 수정되지 않았음 (그대로 사용하면 됨)
## Status Code - 4xx
- 400 Bad Request
  - 요청의 형태가 잘못되어 응답할 수 없음
- 403 Forbidden
  - 요청한 자료에 접근할 권한이 없음
- 404 Not Found
  - 요청한 자료가 없음


## Status Code - 5xx
- 500 Internal Server Error
  - 요청을 처리하던 중에 예상치 못한 오류가 발생함(개발자도 예상치 못함.)
- 503 Service Unavailable
  - 서버가 일시적으로 응답을 할 수 없음


## Header
- 요청과 응답에 대한 추가 정보를 표현하는 데 사용됨
- 인증, 캐싱, 쿠키, 보안, 내용협상, 프록시 등 웹 표준에 정의된 많은 기능을 제어하는 데 사용됨
- Authorization
요청의 인증 정보
- User-Agent
요청 중인 클라이언트의 정보
- Location
301, 302 응답에서 자료의 위치
- Accept
요청이 어떤 형태의 자료를 원하는지 나타냄
- Content-Type
요청 혹은 응답이 어떤 형태의 자료인지 나타냄


## Content Negotiation
요청의 Accept, Accept-Language 등의 헤더를 보고 서버가 그에 맞는 형태의 자료를 응답하는 절차를 content negotiation(내용협상)이라고 함


# Express
실습 
https://glitch.com/edit/#!/wpsn-glitch-tutorial

https://glitch.com/edit/#!/wpsn-glitch-tutorial?path=README.md:1:0

소스가 수정될때마다 자동으로 서버를 재시작하여 편리함.

- Node.js 생태계에서 가장 널리 쓰이는 웹 프레임워크
- 내장하고 있는 기능은 매우 적으나, 미들웨어를 주입하는 방식으로 기능을 확장하는 생태계를 가지고 있음
- 공식 매뉴얼 한국어 번역 https://expressjs.com/ko/ 번역이 좀 오래되긴 했으나. api 4x 참조 꼭 봐야함.


## Express 앱의 기본 구조
```
// Express 인스턴스 생성
const app = express()

// 미들웨어 주입
app.use(sessionMiddleware())
app.use(authenticationMiddleware())

// 라우트 핸들러 등록 
app.get('/', (request, response) => {
  response.send('Hello express!')
})
 -- 미들, 라우트 기능정의 부분

// 서버 구동
app.listen(3000, () => { // 3000에서 서버를 구동
  console.log('Example app listening on port 3000!')
})
```


## Routing
```
// HTTP 요청 메소드(GET, POST, ...)와 같은 이름의 메소드를 사용
app.get('/articles', (req, res) => {
  res.send('Hello Routing!')
})
// 특정 경로에만 미들웨어를 주입하는 것도 가능
app.post('/articles', bodyParserMiddleware(), (req, res) => {
  database.articles.create(req.body)
    .then(() => {
      res.send({ok: true})
    })
})
// 경로의 특정 부분을 함수의 인자처럼 입력받을 수 있음
app.get('/articles/:id', (req, res) => {
  database.articles.find(req.params.id) // `req.params`에 저장됨
    .then(article => {
      res.send(article)
    })
})
```

## Request 객체
`req.body`  
요청 바디를 적절한 형태의 자바스크립트 객체로 변환하여 이곳에 저장 (`body-parser 미들웨어`에 의해 처리됨)
`req.ip`  
요청한 쪽의 IP
`req.params`  
route parameter
`req.query`  
query string이 객체로 저장됨

## Response 객체
`res.status(...)`  
응답의 상태 코드를 지정하는 메소드
`res.append(...)`  
응답의 헤더를 지정하는 메소드
`res.send(...)`  
응답의 바디를 지정하는 메소드 
인자가 텍스트면 text/html, 객체면 application/json 타입으로 응답 - send 숫자코드를 입력하면 에러가 남. 문자역이나 객체, 배열을 넣어야 함.

```
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// GET method
app.get('/', (req, res) => {
  res.send('Hello, Express!')
})

// POST method
app.post('/', bodyParser.json(), (req, res) => {
  /*
  Mission:
  요청의 바디에 실려 온 JSON에 name이라는 속성이 있으면 해당 값을 이용해 응답하고, 없으면 400 Bad Request를 응답한다.
  응답 형태는 'Hello, <name>!' 으로 한다. 
  */
  if (req.body.name) {
    res.send(`Hello, ${req.body.name}!`)
  } else {
    res.status(400)
    res.send('400 Bad Request')
  }
})

// query parameter, res.status
app.get('/add', (req, res) => {
  /* 
  Mission: 
  query parameter에 x와 y라는 이름을 가진 두 값을 정수로 바꾸어서 더한 후 응답한다.
  값을 정수로 바꿀 수 없다면 400 Bad Request로 응답한다.
  */
  try {
    const x = parseInt(req.query.x)
    const y = parseInt(req.query.y)
    const result = (x + y).toString()
    res.send(result)
  } catch (e) {
    res.status(400)
    res.send('400 Bad Request')
  }
})

// req.ip
app.get('/ip', (req, res) => {
  /*
  Mission: 
  요청한 쪽의 ip를 응답한다.
  */
  res.send(req.ip) // 로레벨로 보내는 방법이 있지만 이러한 형태로 사용함.
})

// req.get, res.set, res.end
app.get('/header', (req, res) => {
  /*
  Mission:
  요청의 X-Custom-Header 헤더를 그대로 응답에 포함시켜 응답한다.
  응답에는 바디를 포함시키지 않도록 한다.
  
  hint 1: res.set 메소드는 응답에 새로운 헤더를 지정한다.
  예) res.set('X-Custom-Header', value)
  
  hint 2: res.end 메소드는 응답을 보낸다. res.send와 비슷하지만, 바디를 인자로 받지 않는다.
  */
const value = req.get('X-Custom-Header')
  // res.append('X-Custom-Header', value)
  res.set('X-Custom-Header', value)
  // res.end()
  res.send() // send 없으면 계속 로딩상태로 유지 된다. 주의 *** 모든 경우에 send를 해야 함.
})

const listener = app.listen(process.env.PORT, function () {
  console.log('listening on port ' + listener.address().port)
})
```

# Template_language

## Static Web Page
누가 어떻게 요청하든 미리 저장되어 있던 HTML 파일을 그대로 응답

## Dynamic Web Page
동적 웹 개발, 동적 웹 페이지
요청한 사람과 요청한 내용에 따라 각각 다른 내용으로 편집한 HTML을 응답

## 웹 초창기 - CGI
```c
int main(void)
{
  char *data;
  long m,n;
  printf("%s%c%c\n", "Content-Type:text/html",13,10);
  printf("<TITLE>Multiplication results</TITLE>\n");
  printf("<H3>Multiplication results</H3>\n");
  data = getenv("QUERY_STRING");
  if(data == NULL)
    printf("<P> Error in passing data from form to script.");
  else if(sscanf(data,"m=%ld&n=%ld",&m,&n)!=2)
    printf("<P>Error! Invalid data. Data must be numeric.");
  else
    printf("<P>The product of %ld and %ld is %ld.",m,n,m*n);
  return 0;
}
```

## Template Engine
템플릿과 데이터를 결합해 문서를 생성하는 프로그램, 혹은 라이브러리
템플릿을 작성할 때 사용하는 언어를 템플릿 언어라고 함

## EJS
문법이 굉장히 단순하고 사용하기 쉬움.

Embedded JavaScript Template #
http://ejs.co/

- Node.js 생태계에서 가장 많이 사용되는 템플릿 엔진
- 문법이 단순
- JavaScript 코드를 템플릿 안에서 그대로 쓸 수 있음
- .ejs VSCode Extension
https://marketplace.visualstudio.com/items?itemName=QassimFarid.ejs-language-support


### Example

```ejs
<%# index.ejs %>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <div class="message">
      <%= message %>
    </div>
    <% if (showSecret) { %>
      <div>my secret</div>
    <% } %>
  </body>
</html>
```
## Express에서 EJS 사용하기
`ejs 설치`
$ npm install --save ejs
`template engine 설정`
app.set('view engine', 'ejs')
`res.render()`
```javascript
const data = {
  title: 'Template Language',
  message: 'Hello EJS!',
  showSecret: true
}
res.render('index.ejs', data) // 템플릿 파일이름과 넣을 데이터를 같이 불러와서 html 문서에 보내어 랜더링해준다.
```
```html
<%# 주석입니다 %>
<!-- 주석  삭제가 되지 않아 용량이 늘어남.-->
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <% if (name) { %>
      <p>당신의 이름은 <%= name %>입니다.</p>
    <% } else { %>
      <p>이름이 주어지지 않았습니다. query parameter에 name을 추가해보세요.</p>
    <% } %>
    <hr>
    <h1>List</h1>
    <ul>
      <% items.forEach(item => { %>
        <li><%= item %></li>
      <% }) %>
    </ul>
    <% if (showSecret) { %>
      <p>my secret is: <%= secret %></p>
    <% } %>
  </body>
</html>
```
```javascript
const express = require('express')

const app = express()

// 템플릿 엔진을 ejs로 설정해줍니다.
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // 템플릿에서 사용할 데이터입니다.
  // 배열에 요소를 추가하고, true를 false로 바꾸고, 텍스트를 변경해보세요
  const data = {
    items: ['one', 'two', 'three'],
    showSecret: true,
    secret: 'I LOVE NODE.JS!',
    name: req.query.name
  }
  // res.render 함수는 views 디렉토리에 있는 템플릿 파일과 데이터를 합쳐서 응답을 보냅니다.
  res.render('index.ejs', data)
})

app.listen(3000, function() {
  console.log('listening...')
})
```

## Serving Static Files

```javascript
// `public` 폴더에 있는 파일을 `/static` 경로 아래에서 제공  
app.use('/static', express.static('public'))
```

```javascript
<!-- 템플릿 파일에서 참조할 수 있음 -->
<link rel="stylesheet" href="/static/index.css">
<script type="text/javascript" src="/static/index.js"></script>

```










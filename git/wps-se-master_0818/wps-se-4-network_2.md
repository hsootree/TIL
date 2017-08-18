# Fastcampus 
## Web Programming & Frontend Dev SCHOOL
### REST API, Socket(TCP, websocket)

---
<!--
page_number: true
$size: A4
footer : fastcampus 웹 프로그래밍 & 프론트엔드 개발 스쿨, Wooyoung Choi, 2017
-->
## API

---
## APIhandouts/wps-se-4-network(2).md
> Application Program Interface
- 응용프로그램에서 사용할 수 있도록 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 [인터페이스]*
- [Windows API](https://msdn.microsoft.com/en-us/library/windows/desktop/ff818516(v=vs.85).aspx)
  - vue 는 번역이 잘되어 있지만 그 나머지는 영어로 읽으세요.
- [python/C API](https://docs.python.org/3.6/c-api/index.html)

---
## Web API
> 웹서버 혹은 웹브라우저를 위한 API
 - 웹 어셈블리 (C언어로 html 변환)
---
### 웹 개발 패턴의 변화

- 1991 ~ 1999: Sir Timothy John "Tim" Berners-Lee가 하이퍼텍스트 기반의 프로젝트를 제안한 이후 정적인 컨텐츠들을 중심으로 한 웹 기술이 발달
- 1999 ~ 2009: Linux, Apache, Mysql, Php 중심의 동적인 서버, 정적인 클라이언트 모델이 지속됨
- 2010 ~ 현재: javaScript!! (Dynamic Web Client)

---
### 웹 개발 패턴의 변화

```html
<html>
<head></head>
<body>
<h1>Static Header</h1>
<div>Static Contents</div>
</body>
</html>
```

- 1991 ~ 1999: Sir Timothy John "Tim" Berners-Lee가 하이퍼텍스트 기반의 프로젝트를 제안한 이후 정적인 컨텐츠들을 중심으로 한 웹 기술이 발달


---
### 웹 개발 패턴의 변화

```html
<html>
<head></head>
<body>
<h1>{% Dynamic Header %}</h1>
<div>{% Dynamic Contents %}</div>
</body>
</html>
```

- 1999 ~ 2009: Linux, Apache, Mysql, Php 중심의 동적인 서버, 정적인 클라이언트 모델이 지속됨

---
### 웹 개발 패턴의 변화

```html
<html>
<head>
<script src="https://unpkg.com/vue"></script>
</head>
<body>
<h1>{{ header }}</h1>
<div id="app">
  {{ message }}
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 Vue!'
  }
})
</script>
</body>
</html>
```

- 2010 ~ 현재: javaScript!! (Dynamic Web Client)  
- 서버단에서 처리해서 넘겨주는 것이 안전하다.
- 네이버는 확인이 필요함.
- 클라이언트, 서버단 분리 개발하여 머지하는 방법으로 변화함.
규약, 프로토콜, 웹 API가 중요해짐.

---
### Before REST
![](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/05/1494257477001-TraditionalWebserver.png)

---
### Before REST
![](https://userscontent2.emaze.com/images/98dd86a5-3860-4477-83c9-4f272fef0f23/aa94c694ded179d97311cadbf26cbb01.jpeg)

---
### SOAP
> Simple Object Access Protocol
XML 파일 포맷을 활용해 데이터를 주고 받기 위한 시도
 - 목록화해서 정보를 저장하여 알려주는 방식 (list up)

---
### xml architecture
![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SOAP.svg/220px-SOAP.svg.png)

---
#### xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
<food>
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>
   Two of our famous Belgian Waffles with plenty of real maple syrup
   </description>
    <calories>650</calories>
</food>
<food>
</food>
</breakfast_menu>
```

---
## REST API
`RE`presentational `S`tate `T`ransfer 
`A`pplication `P`rogramming `I`nterface

`Resource` - URI
`Verb` - HTTP method (HTTP method: GET, POST, PUT, DELETE)
`Representations` - 표현
- 168번 에피소드를 요청하면 uri로 모든 것을 처리함. 주소로 리소스에 접근하는 것.



---
## So, REST is
> HTTP URI + HTTP method

[Yahoo Finance](https://finance.yahoo.com/)
[json api](http://jsonapi.org/)

---
## [Roy Fielding](http://roy.gbiv.com/)
![](http://farm2.static.flickr.com/1035/1403382259_e85df3c1b4.jpg)
- 2000년 UC Irvine의 박사 학위 논문 "Architectural Styles and the Design of Network-based Software Architectures" 발표

---
## Characteristics of REST
- 범용성(HTTP가 가능하면 OK)
- 리소스 중심 API 명세(URI를 읽는 것으로 이해 가능)
- Stateless(클라이언트의 상태를 신경쓰지 않음)
  - 웹과 앱 모든 곳에 정보를 전달가능

---
## pros and cons of REST
pros: 
- 스펙없이 기존의 HTTP를 이용해 요청을 처리할 수 있다.

cons: 
- 사용할 수 있는 메소드가 4개다 (HTTP method: GET, POST, PUT, DELETE)
- 표준이 없다 (사용하기 어렵다. 끊임없는 수정을 하게 됨.)



---
![](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/05/1494257479002-RestfulServer.png)

가지를 뻗어 나가는 방식으로 소통.

---
## CRUD

### Create
### Read
### Update
### Delete

---
## HTTP Response code

200, 201 - Success
400, 404 - Not found
403 - Forbidden
500 - Server error

---
|HTTP||REST|Status Code|
|:--:|:--:|:--:|:--:|
|GET||read|200 OK|
|POST||create|201 CREATED|
|PUT||update|200 OK|
|DELETE||delete|200 OK|

404 Not Found
500 Internal Server Error

---
```
app.get('/users', (req,res)=>{
	res.json(db.users);
});

app.get('/users/:id', (req,res)=>{
	let user = db.users.find(user => user.id == req.params.id);
	if (user) {
		res.json(user);
	} else {
		res.status(404).end();
	}
});
app.put('/users', ...);

app.post('/users', ...);

app.delete('/users/:id', ...);
```
- 500은 이 코드가 전혀 전달되지 못하기 때문에 404로 처리하면 됨.

---
#### REST API 설계시 주의할 점
> 정보요청을 최대한 뚜렷하게 명시적으로 해야 함. (showpost, getpost와 같이 사용하면 안되고 post, users와 같이 명시적으로 사용해야 함.)
- 버전관리 https://api.foo.com/v1/bar
- 명사형 사용 https://foo.com/showid/ --> https://foo.com/user/
- 반응형 https://foo.com/m/user/, https://m.foo.com/user/ (x)
- 언어코드 https://foo.com/kr/, https://kr.foo.com/ (x)
- 응답상태 코드 (200, 400, 500)

---
![](https://www.troyhunt.com/content/images/2016/02/41694168readImage2.png)

---
## RESTful API Documentation
- 기존의 정의된 메소드를 사용하세요(200, 403, ..)
- 사용자가 정의하는 방식으로 작성하세요 (실제 사용자가 어떠한 플로우로 움직일 것인지를 감안해서 작성해야 함.)
- URI를 너무 강조하지 마세요 (delete 메소드가 있는데 굳이 deleteuser 를 만들 필요는 없음.)
- 문서화도구(swagger 등- API 문서화를 위한 프레임워크)을 너무 믿지 마세요 기계는 오류를 내포하기때문에 맹신은 하지마시오.

ex) https://www.vmware.com/support/developer/vas/rest-api-1.1.0.RELEASE/index.html#4

---
## After REST API
ㅍ
---
## [GraphQL](http://graphql.org/learn/)
- Open-sourced by Facebook
- Alternative to REST for building APIs
- create strong contract between Client and Server

---
## GraphQL
![](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/05/1494257483003-GraphQLServer.png)

---
## Querying with GraphQL
```
query MoviesAndActors {
  movies {
    title
    image
    actors {
      image
      name
    }
  }
}
```

---
## schema of GraphQL
```
schema {
    query: Query
}

type Query {
    movies: [Movie]
    actors: [Actor]
    movie(id: Int!): Movie
    actor(id: Int!): Actor
    searchMovies(term: String): [Movie]
    searchActors(term: String): [Actor]
}
```

---
```
type Movie {
    id: Int
    title: String
    image: String
    release_year: Int
    tags: [String]
    rating: Float
    actors: [Actor]
}

type Actor {
    id: Int
    name: String
    image: String
    dob: String
    num_credits: Int
    movies: [Movie]
}
```

---
## Socket

---
## Socket
- `Virtual End Point` where entities can perform inter-process communication.
- 포트를 열어 놓고 둘이서 통신을 한다.
- 쌍방향(duplication) 통신이 가능함(무선기와 차이점-양방향 half) 

---
## So, Socket is ..
> 떨어져 있는 두 컴퓨터를 연결해주는 과정

---
![](../../images/csssocket1.1.png)  
브라우저에서 해보자... 소켓을 구현하기는 어려움.

---
### parameters
socket family(family) - AF_INET, AF_UNIX, AF_BLUETOOTH
socket type(type) - SOCK_STREAM, SOCK_DGRAM

---
### socket 통신도 통신이므로.. 통신보안!!
TLS(Transport Layer Security) - 프로토콜에 의한 암호화
SSl(Secure Socket Layer) - 포트에 의한 암호화

---
## Websocket

---
## Websocket
> 웹사이트가 사용자와 상호작용하기 위해 만들어진 기술

W3C가 API를 관리
port:80, HTTP1.1


---
## Before Websocket
- HTTP Request, Response
- Hidden Frame
- Long Polling

---
## Polling vs Websocket
![](http://d2.naver.com/content/images/2015/06/helloworld-1336-1-1.png)



---
## Differences between Socket, Websocket
Socket - HTTP run over TCP/IP
Websocket - run from web browser

---
## [Socket.io](https://socket.io/)
> browser 와 상관없이 js를 이용해 실시간 통신을 지원

- 브라우저와 웹 서버의 종류와 버전을 분석해 가장 적절한 기술로 통신
- WebSocket, FlashSocket, AJAX Long Polling, AJAX Multi part Streaming, IFrame, JSONP Polling을 추상화한 기술
- 


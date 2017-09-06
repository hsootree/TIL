# Cache
1. (무기 등의) 은닉처
2. 은닉하다
컴퓨터 분야에서의 캐시는 (주로 접근 속도의 개선을 위해) 데이터를 미리 복사해 놓는 임시 저장소, 혹은 그 임시 저장소에 데이터를 저장하는 행위를 가리킴

'cache' 혹은 'caching'이라는 용어 자체는 특정 기술을 가리키는 것이 아니라, 접근 속도를 개선하기 위해 따로 저장소를 두는 '방법'을 가리킴

컴퓨터의 아주 많은 부분(CPU, GPU, HDD, 네트워크, 웹, 데이터베이스...)에서 사용되고 있음

## HTTP Cache
- 자원의 효율적 로딩을 위한 [웹 표준](https://tools.ietf.org/html/rfc7234)
- 서버에서 가져온 자원(HTML, CSS, JS, 이미지, ...)을 가까운 곳(브라우저, 혹은 다른 서버)에 저장해놓고 재사용
- 캐시를 할 것인지 말 것인지, 어떻게 할 것인지를 결정하는 규칙이 복잡하고, 브라우저마다 조금씩 다름

## Common Problem
캐시된 자원과 실제 자원의 내용이 달라지는 문제를 
어떻게 해결할 것인가?

## Solution
Expiration (만료)
정해진 시간이 지나면 캐시가 자동으로 삭제되도록 설정
Validation (검증)
서버에 요청을 보내서 캐시를 계속 사용할 수 있는지 확인

## Cache 관련 헤더
[Cache 범주](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers#Caching)

[Conditionals 범주] (https://developer.mozilla.org/ko/docs/Web/HTTP/Headers#Conditionals)

#### Cache-Control  
(요청, 응답) 캐시와 관련된 다양한 기능을 하는 지시자를 포함. no-cache, max-age가 많이 사용됨. no-cache, max-age=0 지시자는 캐시를 사용하지 않도록 하거나, 캐시를 아직도 쓸 수 있는지 검증하기 위해 사용됨 [(각각의 자세한 의미)](https://stackoverflow.com/questions/1046966/whats-the-difference-between-cache-control-max-age-0-and-no-cache)
#### ETag  
(응답) 캐시의 검증을 위해 사용되는 자원의 식별자. 주로 자원의 [해시값](https://namu.wiki/w/%ED%95%B4%EC%8B%9C)이 사용되나, 마지막으로 수정된 시각, 혹은 버전 넘버를 사용하기도 함
#### Expires
(응답) 캐시를 만료시킬 시각을 서버에서 명시적으로 지정
#### Last-Modified
(응답) 원래 자료가 마지막으로 수정된 시각
#### If-None-Match
(요청) 검증을 위해 사용됨. 이전에 저장해두었던 자원의 ETag 값을 If-None-Match 헤더의 값으로 요청에 포함시켜서 보내면, 서버는 해당 경로에 있는 자원의 ETag와 비교해보고 자원의 전송 여부를 결정
#### If-Modified-Since
(요청) 검증을 위해 사용됨. 이전에 저장해두었던 자원의 Last-Modified 값을 If-Modified-Since 헤더의 값으로 요청에 포함시켜서 보내면, 서버는 해당 경로에 있는 자원의 Last-Modified와 비교해보고 자원의 전송 여부를 결정

## 브라우저 실습
https://wpsn-axios-example.glitch.me/

- 304 응답 : 검증과정에서 
- command + shift + R : 페이지가 깨지면 리로드
- disable cache 가 체크 되어 있는지 꼭 확인을 해야 함.
- 브라우저 설정에서도 꼭 확인해볼 것 


### Axios 튜토리얼

크롬 콘솔을 열어서 다음을 차례대로 실행해 보세요. 또 Network 탭에서 실제로 어떤 요청이 일어났는지 확인하세요.

prettyPrint는 결과를 예쁘게 출력할 수 있도록 제가 미리 짜놓은 함수입니다.

#### GET /api/todos
```js
// GET
axios.get('/api/todos')
  .then(res => {
    prettyPrint(res.data)
  })
```

#### POST /api/todos
```js
// POST
axios.post('/api/todos', {title: "ajax 공부"})
  .then(res => {
    prettyPrint(res.data)
  })
```

#### PATCH /api/todos/3
```js
// PATCH
axios.patch('/api/todos/3', {title: "axios 공부"})
  .then(res => {
    prettyPrint(res.data)
  })
```

#### DELETE /api/todos/3
```js
// DELETE
axios.delete('/api/todos/3')
  .then(res => {
    prettyPrint(res.data)
  })
```

#### GET /api/todos/?title=react

axios 요청 메소드의 두 번째 인자로 config 객체를 넘길 수 있습니다. config 객체를 통해 요청의 쿼리 스트링, 요청 헤더, 쿠키 포함 여부 등 많은 것들을 설정할 수 있습니다.
```js
// config 객체
axios.get('/api/todos', {
  params: { // query string
    title: 'react 공부'
  },
  headers: { // 요청 헤더
    'X-Api-Key': 'my-api-key'
  },
  timeout: 1000 // 1초 이내에 응답이 오지 않으면 에러로 간주
}).then(res => {
    prettyPrint(res.data)
  })
```

#### 응답 객체

응답 객체를 통해 응답의 여러 정보에 접근할 수 있습니다.
```js
// config.params
axios.get('/api/todos/1')
  .then(res => {
    console.log(`status code: ${res.status}`)
    console.log('headers:')
    prettyPrint(res.headers)
    console.log('data:')
    prettyPrint(res.data)
  })
```

## Cacheable Methods
![](../images/HEDlwPSl.png)

POST 메소드는 [Cacheable](https://developer.mozilla.org/en-US/docs/Glossary/cacheable) 범주에 포함되기는 하지만, 특별한 조건을 만족시켜야 하며 실무에서는 POST chache가 거의 사용되지 않습니다.

결론 : GET 만 캐쉬가 가능하다.

## 캐시의 사용
- 브라우저는 이미 캐시를 잘 활용하도록 만들어져 있습니다.
- Express는 이미 캐시를 잘 활용하도록 만들어져 있습니다.
- 오예
일단은 별다른 추가작업 없이도 편하게 캐시 기능을 사용할 수 있지만, 우리가 원하는대로 캐시가 동작하지 않을 때 그 원인을 파악하기 위해 캐시 관련 헤더는 숙지해두는 것이 좋습니다. 그리고 HTTP method를 용도에 맞게 사용하는 것도 중요합니다.



















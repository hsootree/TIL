# Fetch API

## Fetch API
- 웹 브라우저의 XMLHttpRequest를 대체하기 위해 만들어진 새로운 HTTP client 표준
- 비교적 최근에 도입되어 IE 및 구형 안드로이드 브라우저(4.x)는 지원하지 않음
- [Fetch Polyfill] (https://github.com/github/fetch)
- [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)

## Axios vs Fetch API
- Instance와 같이 설정을 재사용하거나 요청중인 연결을 취소하는 등의 편의기능이 Fetch API에는 없음
- 현재로서는 Axios를 사용하는 것이 좋은 선택
- 다만, Axios는 내부적으로 XMLHttpRequest를 사용하고 있는데 Service Worker 등의 웹 최신 기술이 XMLHttpRequest를 지원하지 않으므로, Service Worker를 사용할 예정에 있는 프로젝트에서는 Axios를 사용할 수 없음

[실습 Fetch API](http://hacks.mozilla.or.kr/2015/05/this-api-is-so-fetching/)

### 지원 여부 판단

Fetch API 지원 여부는 window나 worker 스코프(scope) 에서 Headers, Request, Response, 또는 fetch 의 존재 여부를 체크하여 파악할 수 있습니다.

### 간단한 예제

Fetch API 의 가장 유용하고, 핵심적인 함수는 fetch() 함수입니다. 가장 간단한 형태의 fetch() 함수는 URL 을 인자로 받고 응답을 처리하기 위한 promise 를 반환합니다. 응답을 처리할 때 Response 객체를 이용할 수 있습니다.
```js
fetch("/data.json").then(function(res) {
  // res instanceof Response == true.
  if (res.ok) {
    res.json().then(function(data) {
      console.log(data.entries);
    });
  } else {
    console.log("Looks like the response wasn't perfect, got status", res.status);
  }
}, function(e) {
  console.log("Fetch failed!", e);
});
```
몇 개 파라메터들을 추가하면 다음처럼 보일 것입니다.
```js
fetch("http://www.example.org/submit.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "firstName=Nikhil&favColor=blue&password=easytoguess"
}).then(function(res) {
  if (res.ok) {
    alert("Perfect! Your settings are saved.");
  } else if (res.status == 401) {
    alert("Oops! You are not authorized.");
  }
}, function(e) {
  alert("Error submitting form!");
});

```
fetch() 함수의 인자는 Request() 생성자의 인자와 동일합니다. 그래서 아래 논의하는 것처럼 임의의 복잡한 요청을 fetch() 함수에 직접 전달할 수 있습니다.

### Headers

Fetch API 는 3개의 인터페이스를 도입합니다. 바로 Headers, Request, Response 인터페이스입니다. 이 인터페이스들은 하부의 HTTP 개념들과 곧바로 대응됩니다. 하지만 보안 때문에 특별한 가시성(visibility) 필터를 갖고 있습니다. 예를 들자면 CORS 규칙을 지원한다던가, 쿠키가 제 3자에게 보이지 않게 보장하는 것 같은 처리입니다.

Headers 인터페이스는 이름-값 구조의 간단한 멀티-맵(mult-map) 입니다.

```js
var content = "Hello World";
var reqHeaders = new Headers();
reqHeaders.append("Content-Type", "text/plain"
reqHeaders.append("Content-Length", content.length.toString());
reqHeaders.append("X-Custom-Header", "ProcessThisImmediately");
```
같은 방식으로 배열들로 구성된 배열이나 JS 객체 리터럴(JS object literal) 을 생성자에 전달해도 됩니다.

```js
reqHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
```

설정된 내용은 쿼리해서 확인할 수 있습니다.

```js
console.log(reqHeaders.has("Content-Type")); // true
console.log(reqHeaders.has("Set-Cookie")); // false
reqHeaders.set("Content-Type", "text/html");
reqHeaders.append("X-Custom-Header", "AnotherValue");
 
console.log(reqHeaders.get("Content-Length")); // 11
console.log(reqHeaders.getAll("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]
 
reqHeaders.delete("X-Custom-Header");
console.log(reqHeaders.getAll("X-Custom-Header")); // []
```

이들 작업 중 일부는 단지 ServiceWorkers 에서만 유용합니다. 하지만 그들이 Headers 에 접근하기 위한 더 좋은 API 를 제공합니다.

Headers 가 http 요청(Request) 에 실려 보내질 수 있기 때문에, 또는 http 응답(Response) 에 실려 수신될 수 있기 때문에, 그리고 어떤 정보가 변이(mutation) 가능한지에 관한 다양한 제약사항을 갖고 있기 때문에 Headers 객체에 guard 속성이 존재합니다. 이 속성은 웹에 공개되는 속성이 아닙니다. 하지만 Headers 객체에 대해 어떤 변이(mutation) 작업이 허용되는지를 결정합니다. 가능한 guard 값은 다음과 같습니다.

- “none”: 디폴트.
- “request”: Request의 Headers 객체를 위한 guard (Request.headers).
- “request-no-cors”: “no-cors” 모드로 생성된 Request 의 Headers 객체를 위한 guard.
- “response”: 자연적으로, Response 로부터 얻어진 Headers (Response.headers).
- “immutable”: 대부분 ServiceWorkers 를 위해 사용된다. Header 객체가 read-only 임을 나타낸다.
각 guard 가 Headers 객체의 동작에 어떻게 영향을 주는지에 대한 자세한 사항은 스펙에서 볼 수 있습니다. 예를 들어, 당신은 guard 값이 “request” 인 Headers 객체에 “Content-Length” 헤더 속성을 추가하거나 설정하지 않을 것입니다. 비슷하게, Response 헤더에 “Set-Cookie” 속성을 추가하는 것은 ServiceWorkers 가 이미 합성된 Responses 에 쿠키를 설정하지 않게 하려는 이유로 허용되지 않습니다.

Headers 의 모든 메소드는 만약 name 이 a 유효한 HTTP Header name 이 아닐 경우 TypeError 예외를 발생시킵니다. immutable(수정 불가능) guard가 존재할 경우 변이(mutation) 작업은 TypeError 예외를 발생시킬 것입니다. 그밖의 경우에는 예외(Exception)가 발생하지 않고(silently) 실패합니다. 다음은 예제 코드입니다.

```js
var res = Response.error();
try {
  res.headers.set("Origin", "http://mybank.com");
} catch(e) {
  console.log("Cannot pretend to be a bank!");
}
```

### Request

Request 인터페이스는 HTTP 를 통해 자원을 가져오기 위해 전달하는 요청(request) 입니다. URL, 메소드, 헤더가 필요합니다. Request 는 바디(body), 리퀘스트 모드(request mode), 인증정보(credentials), 캐쉬힌트(cache hint) 를 명시하는 것을 허용하기도 합니다.

가장 간단한 Request 는 물론 URL 입니다. 자원을 가져오기 위해 GET 명령과 함께 사용됩니다.

```js
var req = new Request("/index.html");
console.log(req.method); // "GET"
console.log(req.url); // "http://example.com/index.html"
```

Request 객체를 Request() 생성자에 전달해서 복사본을 만들 수도 있습니다.
(이것은 clone() 메소드를 호출하는 것과 다릅니다. clone() 메소드에 대해서는 “바디(bodies) 읽기” 섹션에서 다룰 것입니다.)

```js
var copy = new Request(req);
console.log(copy.method); // "GET"
console.log(copy.url); // "http://example.com/index.html"
```
역시나, 이런 형식은 아마도 ServiceWorkers 에서만 유용할 것입니다.

Request 객체의 URL 이외 속성들은 생성자에 두번째 인자로 초기 값을 전달해서 설정할 수 있습니다. 이 인자는 딕셔너리입니다.

```js
var uploadReq = new Request("/uploadImage", {
  method: "POST",
  headers: {
    "Content-Type": "image/png",
  },
  body: "image data"
});
```

Request 객체의 mode 속성은 크로스-오리진(cross-origin) 요청이 적절한 응답(response) 을 가져올지, 그리고 응답 객체의 어떤 속성이 유효한 지 결정하는 데 사용됩니다. mode 속성에 올 수 있는 값은 "same-origin", "no-cors" (디폴트), 그리고 "cors" 입니다.

"same-origin" mode 는 단순합니다. 만약 mode 값이 "same-origin" 일 때 다른 오리진(origin)에 있는 자원을 요청(request) 하면, 결과는 에러입니다. 요청(request) 이 항상 같은 오리진(origin) 에서 일어나도록 보장하기 위해 이 mode 를 사용할 수 있습니다.

```js
var arbitraryUrl = document.getElementById("url-input").value;
fetch(arbitraryUrl, { mode: "same-origin" }).then(function(res) {
  console.log("Response succeeded?", res.ok);
}, function(e) {
  console.log("Please enter a same-origin URL!");
});
```

"no-cors" mode 는 CDN 에서 스크립트를 불러오거나, 다른 도메인 서버에서 이미지를 불러오는 등, 웹 플랫폼이 기본적으로 하는 일을 나타냅니다. 첫째로, "no-cors" mode 는 “HEAD”, “GET”, 또는 “POST” 이외의 명령을 금지합니다. 둘째로, 만약 ServiceWorkers가 이런 요청(request) 을 가로채게 되면, ServiceWorkers 는 간단한 헤더(simple-header) 이외의 어떤 헤더 정보도 추가하거나 수정할 수 없습니다. 셋째로, JavaScript 는 결과로 전달되는 Response 객체의 어떤 속성에도 접근할 수 없습니다. 이렇게 함으로써 ServiceWorkers 는 웹의 의미성(semantics) 에 영향 주지 않음을 보장하면서, 도메인 사이에서의 데이터 유출에 의한 시큐리티와 프라이버시 문제를 방지합니다.

"cors" mode 는 다른 업체들이 제공하는 다양한 API 들에 접근할 때 필요한 크로스-오리진(cross-origin) 요청을 위해 당신이 주로 사용하게 될 mode 입니다. 이들은 CORS 프로토콜에 장착될 것으로 여겨집니다. 헤더 정보의 경우 제한된 일부 정보만 Response 객체를 통해 제공됩니다. 하지만 바디(body) 정보는 완전히 공개됩니다. 예를 들어, 당신은 아래와 같은 코드로 지금 당장 Flickr 로부터 오늘의 가장 흥미있는 사진을 얻을 수 있습니다.

```js
var u = new URLSearchParams();
u.append('method', 'flickr.interestingness.getList');
u.append('api_key', '<insert api key here>');
u.append('format', 'json');
u.append('nojsoncallback', '1');
 
var apiCall = fetch('https://api.flickr.com/services/rest?' + u);
 
apiCall.then(function(response) {
  return response.json().then(function(json) {
    // photo is a list of photos.
    return json.photos.photo;
  });
}).then(function(photos) {
  photos.forEach(function(photo) {
    console.log(photo.title);
  });
});
```

당신은 “Date” 헤더를 읽지 못할 것입니다. 왜냐하면 Flickr 가 Access-Control-Expose-Headers 상태에서는 이를 허용하지 않기 때문입니다.

```js
response.headers.get("Date"); // null
```

credentials 열거형(enumeration) 은 다른 도메인을 위한 쿠키가 크로스-오리진(cross-origin) 요청(request) 에 전달됐는지 결정합니다. 이것은 XHR 의 withCredentials 플랙과 유사하며, "omit" (default), "same-origin", "include" 3가지 값을 가집니다.

Request 객체에는 캐시 힌트를 유저-에이전트에 제공하는 기능도 있습니다. 이 기능은 현재 몇가지 보안성 검토를 진행 중입니다. Firefox는 그 속성을 공개하고 있지만 아무런 역할도 하지 않습니다.

Request 객체에는 ServiceWorker 가 가로챌 수 있는 2개의 읽기전용 속성이 있습니다. 하나는 referrer 문자열인데, UA 에 의해 Request 객체의 참조자(referer) 로 설정되며 빈 문자열이 올 수도 있습니다. 다른 속성은 context 인데 어떤 종류의 자원을 가져오는(fetching) 중인지 정의하는 커다란 열거형(enumeration) 입니다. 이 열거형의 값은 만약 요청(request) 이 처리중인 문서의 태그에 의한 것일 경우에는 “image” 이고, 만약 worker 스크립트를 로딩하려는 경우에는 “worker” 입니다. 그리고, fetch() 함수를 사용할 경우에는 “fetch” 입니다.

### Response

fetch() 를 호출하면 그 결과로 Response 인스턴스가 반환됩니다. JS 코드로 Response 객체를 생성할 수도 있지만, 그것은 ServiceWorkers 에서만 유용한 방식입니다.

우리는 fetch() 관련 코드를 살펴볼 때, 벌써 Response 객체의 속성들 몇 개를 보았습니다. 가장 분명한 후보들은 정수(integer) 타입의 status 와 문자열 타입의 statusText (디폴트 값은 “OK”) 일 것입니다. 이들은 HTTP 상태 코드와 원인을 나타냅니다. ok 속성은 단지 status 를 체크하기 위한 약칭(shorthand) 일 뿐이며 그 값은 200-299 범위에 있습니다.

headers 는 Response의 Headers 객체입니다. 가드(guard) 값으로 “response” 를 갖습니다. url 속성은 대응하는 요청(request) 의 URL 을 나타냅니다.

Response 는 또한 type 속성도 갖습니다. 여기에는 “basic”, “cors”, “default”, “error”, 또는 “opaque” 값이 올 수 있습니다.

"basic": 일반적인, 같은 오리진(origin) 을 갖는 응답(response), “Set-Cookie”와 “Set-Cookie2″ 이외의 모든 헤더 정보가 공개됨.
"cors": 유효한 크로스-오리진 요청에 의해 받은 응답. 한정된 header 와 body 에 접근할 수 있음.
"error": 네트워크 에러. 에러를 설명해주는 유용한 정보 없음. Response 의 status 값은 0, headers 는 비어있으며(empty) 수정불가(immutable). 이것은 Response.error() 로부터 얻어진 Response 를 위한 type 값임.
"opaque": 크로스-오리진 자원에 대한 “no-cors” 요청에 대한 응답. 심각하게 제한됨.
“error” type 은 fetch() Promise 가 TypeError 와 함께 리젝(reject) 되는 결과를 초래합니다.

ServiceWorker 스코프에서만 유용하게 쓰일 수 있는 특별한 속성들이 있습니다. ServiceWorkers에서 가로채어진 요청(Request) 에 응답(Response) 을 리턴하는 구문적 방법은 아래와 같습니다.

```js
addEventListener('fetch', function(event) {
  event.respondWith(new Response("Response body", {
    headers: { "Content-Type" : "text/plain" }
  });
});
```

여기서 볼 수 있는 바와 같이, Response 의 생성자는 2개의 인자를 요구하는데, 모두 선택사항(optional) 입니다. 첫번째 인자는 바디(body) 초기화 구문입니다. 그리고 두번째 인자는 status, statusText, headers 를 초기화하기 위한 딕셔너리입니다.

정적 메소드 Response.error() 는 단순히 에러 응답(response) 을 리턴합니다. 유사하게, Response.redirect(url, status) 메소드는 url 로 리다이렉트하게 하는 Response 를 리턴합니다.

## 바디(body) 다루기

Request 와 Response 모두 바디(body) 데이터를 포함할 수 있습니다. 지금까지 바디에 대해 얼버무리고 넘어갔는데 바디가 다양한 종류의 데이터를 가질 수 있기 때문이었습니다. 하지만 이제 바디에 대해 좀 더 자세히 알아보겠습니다.

바디는 아래 타입들 중 하나의 인스턴스입니다.

- ArrayBuffer
- ArrayBufferView (Uint8Array와 친구들)
- Blob/File
- string
- URLSearchParams
- FormData – 현재 Gecko와 Blink 모두 지원하지 않음. Firefox 는 버전 39에서 Fetch 의 나머지 요소들과 함께 이 타입을 지원할 예정임.
추가로, Request 와 Response 모두 자기 안에 포함된 바디를 축출해내기 위해 아래와 같은 메소드들을 제공합니다. 이 메소드들은 모두 Promise를 리턴하며 이 Promise 는 결국 실제 컨텐츠로 리졸브(resolve) 됩니다.

- arrayBuffer()
- blob()
- json()
- text()
- formData()
이것은 텍스트가 아닌 데이터를 쉽게 다룰 수 있다는 측면에서 XHR 에 비해 커다란 개선입니다!

Request 바디는 body 파라메터를 전달해서 설정할 수 있습니다.

```js
var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
  method: "POST",
  body: form
})
```

Response 객체는 첫 인자로 body 를 받습니다.

```js
var res = new Response(new File(["chunk", "chunk"], "archive.zip",
                       { type: "application/zip" }));
```
Request 와 Response 모두 (그리고 fetch() 함수를 확장할 경우), 지능적으로 컨텐츠 타입을 결정하려고 시도할 것입니다. Request 객체는 또 딕셔너리에 아무것도 설정되어 있지 않을 경우 “Content-Type” 헤더를 자동으로 설정합니다.

### Stream 과 복제(cloning)

Request 와 Response 바디는 한번만 읽을 수 있다는 것을 기억해야 합니다! 두 인터페이스는 boolean 타입의 bodyUsed 속성을 가지고 있습니다. 이 속성은 바디를 안전하게 읽을 수 있는지 여부를 알려줍니다.

```js
var res = new Response("one time use");
console.log(res.bodyUsed); // false
res.text().then(function(v) {
  console.log(res.bodyUsed); // true
});
console.log(res.bodyUsed); // true
 
res.text().catch(function(e) {
  console.log("Tried to read already consumed Response");
});
```

이 판별법은 궁극적으로 스트림 기반의 Fetch API 로 쉽게 전환할 수 있도록 허용합니다. 스트림 기반 Fetch API 가 의도하는 바는 어프리케이션이 데이터가 도착하는대로 데이터를 소비하게 하는 것입니다. 그렇게 하면 JavaScript 가 비디오 같은 보다 큰 파일을 다룰 수 있게 됩니다. 그리고 실시간(on the fly) 압축이나 실시간 편집 같은 일을 할 수 있게 됩니다.

종종, 당신은 바디를 여러번 사용하기를 원할 것입니다. 예를 들어, 당신은 조만간 도입될 Cache API 를 사용해서 Request 와 Response 를 오프라인 상태에서 사용하기 위해 저장할 수 있습니다. Cache 를 사용하려면 읽기가 가능한 상태의 바디가 필요합니다.

어떻게 하면 이런 제약 아래서 하나의 바디를 여러번 읽을 수 있을까요? Fetch API 의 두 인터페이스는 clone() 메소드를 제공합니다. 이 메소드는 복사본으로 새롭게 만들어진 바디 객체를 리턴합니다. clone() 은 반드시 해당 객체의 바디가 사용되기 전에 호출되어야 합니다. 그러니까, clone()을 먼저하고, 그 다음에 읽어야 합니다.

```js
addEventListener('fetch', function(evt) {
  var sheep = new Response("Dolly");
  console.log(sheep.bodyUsed); // false
  var clone = sheep.clone();
  console.log(clone.bodyUsed); // false
 
  clone.text();
  console.log(sheep.bodyUsed); // false
  console.log(clone.bodyUsed); // true
 
  evt.respondWith(cache.add(sheep.clone()).then(function(e) {
    return sheep;
  });
});
```

## 











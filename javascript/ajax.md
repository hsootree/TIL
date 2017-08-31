# 비동기식 처리 모델과 Ajax

## 3. Ajax 요청 및 응답 처리
브라우저는 XMLHttpRequest 객체를 이용하여 Ajax 요청을 생성한다.
```javascript
// XMLHttpRequest 객체의 생성
var req = new XMLHttpRequest();
// 비동기 방식으로 Request를 오픈한다
req.open('GET', 'data/test.json', true);
// Request를 전송한다. 서버관점에서의 경로.
req.send();
```

```javascript
/ XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 콜백함수(이벤트 핸들러)를 호출한다.
req.onreadystatechange = function (e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환 
  // onreadystatechasnge : event
  // readyState: 4 => request가 DONE(서버 응답 완료)
  if (req.readyState === XMLHttpRequest.DONE) {
    // status는 response 상태 코드를 반환 : 200 => 정상 응답
    if(req.status == 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```
이벤트 핸들러 : 이벤트가 발생했을때 실행될 콜백 함수

## 4. JSON
```json
{
  "name": "Lee",
  "gender": "male",
  "age": 20,
  "alive": true
}// 꼭 쌍따옴표. 대부분의 json은 배열로 사용한다.
```
```javascript
var o = {
  name: "Lee",
  gender: "male"
};

// 객체 => JSON 형식의 문자열
var strObject = JSON.stringify(o);
console.log(typeof strObject, strObject); // string '{"name":"Lee","gender":"male"}'

var arr = [1, 5, "false"];

// 배열 객체 => 문자열
var strArray = JSON.stringify(arr);
console.log(typeof strArray, strArray); // string '[1, 5, "false"]'
```
JSON.parse() 메소드는 JSON 데이터를 가진 문자열을 객체로 변환한다.

서버로부터 브라우저로 전송된 JSON 데이터는 문자열이다. 이 문자열을 객체화하여야 하는데 이를 역직렬화(Deserializing)이라 한다. 역직렬화를 위해서 내장 객체 JSON의 static 메소드인 JSON.parse()를 사용한다.






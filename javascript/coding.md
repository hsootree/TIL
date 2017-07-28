# 1. Coding!

## 2. Syntax & Semantics
문법과 의미
- 문법(Syntax)을 사용
- 일종의 번역기를 컴파일러(compiler) 혹은 인터프리터(interpreter)
```
console.log('hello world');
```
> 문맥의 중요성 앞 뒤 문장의 내용을 파악하여 문맥을 이해해야 함.



# 2. Javascript Introduction
Javascript는 인터프리터 언어(Interpreter language)이기 때문에 compile이 필요없고 HTML파일 안에 직접 기술이 가능
컴파일할때 에어를 걸러 낼 수 있으나 대규모 프로젝트시 힘들다.

1~6 까지 중요함 - 기본으로 비교적 쉬움.
7~ 특수한 경우 - 어려움.
> 4. 자료형과 변수 가장 중요하므로 확실히 알고 가자!

- 구글의 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임 환경(Runtime Environment)인 Node.js의 등장으로 JavaScript는 웹 브라우저를 벗어나 서버 사이드 어플리케이션 개발에서도 사용되는 Full stack 개발 언어

프론트개발자 자바스크립트를 아는데 백앤드는 자바스크립트를 모르고 백앤드에서도 자바스크립트를 사용하게 하여 하나의 언어로 프론트와 백앤드를 풀스택으로 만드는 것이 가능하도록 한다.

뛰어난 자바 개발자는 많으나 아직까지 뛰어나다 싶은 자바스크립트 개발자는 흔하지 않다.

자바스크립트 시장 확장 가능성이 농후하다.

버전업과 기술 배울 것이 많아 공부할 것이 무지하게 많다. 트랜드를 한번 놓치면 구식 기술 보유자가 된다.
트랜드를 따르는 에디터 사용 

구글로.. 
Stackoverflow Developer Survey Results 2016  
"http://stackoverflow.com/research/developer-survey-2016#technology"
서베이 결과 자바스크립트와 SQL 미국결과이나 한국은 좀 느리기는 하나 비슷한 양상으로 예상됨 [이웅모 강사님]

body 닫기 태그 바로 전에 스크립트를 사용하는 것은 참신한 방법 - 돔이 만들어지고 CSS가 만들어지고 난 후에 스크립트를 만들면 돔을 건드리기 때문이다.

자바스크립트의 위치는 굉장히 중요함.

ECMA 라는 단체
자바가 있어서 상표권에 걸려서 ECMA스크립트라 함. 현재 자바스크립트의 정식 명칭임.

4버전을 건너띈 이유는 MS 때문(정확한 내용은 모름- 찾아볼까.....?)

버전 5이전과 버전 6의 문법의 양이 비등비등함.

4버전에서 자바스크립트를 뒤 업으려 했으나 실피하고 6에 대폭 추가됨.

8버전이 출시 되었으며 매년 나오고 있으며 추가되는 양은 적음.(휴~ 다행~)

-  한번 문법 정리 잘해 놓으면 추후 버전 업 될때마다 추가 되는 양을 공부할 것!


바벨이란 것을 배워 6를 사용

Reference 꼭 읽어보기

TypeScript


# 3. Javascript Syntax Basics

## 3.1. Hello World
HTML 요소에 접근하고 HTML 요소를 조작할 수 있음.

var - 변수를 생성한다.
var myHeader - 변수 myHeader 를 생성한다.
```
'=' 의미는
할당한다. 대입한다. 저장한다.
```
가리킨다.

async와 defer 어트리뷰트가 추가
- IE9 이하에서는 적용되지 않음.
```
<script async src="extern.js"></script>
<script defer src="extern.js"></script>
```
돔은 스크립트를 만나면 얼음!
async - 자바스크립트를 비동적으로 병렬로 움직임

defer - 

3. skip

## 3.4.1 구문 (Statement)
단계적으로 수행한다. 한줄은 각각의 명령이며 이것을 statement라 한다.
구문은 값(Value), 연산자(Operator), 표현식(Expression), 키워드(Keyword), 주석(Comment)으로 구성되며 세미콜론( ; )으로 끝나야 한다.
```
var x = 5;
var y = 6;
var z = x + y;
document.getElementById('demo').innerHTML = z;
비교 :세미콜론 누락
var x = 5;
var y = 6;
var z = x + y;
document.getElementById('demo').innerHTML = z

```
클라이언트에서는 뺐을때 문제가 발생하는 특수한 케이스가 있기때문에 생략하진 않는다.

```
// Function 함수 코드 블럭
function myFunction(x, y) {
  return x + y;
} 

// if statement 조건문 코드 블럭
if(x > 0) {
  // do something
}

// for statement 반복문 코드 블럭
for (var i = 0; i < 10; i++) {
  // do something
}
```

빨간 줄 : 에러
초록 줄 : 주의



eslint 설치
글로벌로 설치할 시 충돌이 일었는지 실행이 안되었다가 폴더에 설치하니 되네~
글로벌 설치 된것 삭제하고
```
npm uninstall -g eslint
```
로컬에 설치
```
npm install --save eslint
```

code runner 부가 기능이 설치 되어 있다면
출력 확인 ctrl+option+n (shortkey)


## 4.2 표현식

## 4.3. 변수 (Variable)
programming language에서 변수는 값(value)을 저장(할당), 참조하기 위해 사용된다. 한번 쓰고 버리는 값이 아닌 유지할 필요가 있는 값의 경우, 변수를 사용



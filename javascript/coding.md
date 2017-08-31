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

선언, 초기화
리터러리
정수 리터러리
데이터 타입 =  자료형 (7가지가 있음)

객체 - Object

문자열 값은 따옴표 안에~ 잘~ 넣어주세요.

```
// literal : Number
10.50
1001

// literal : String
'Hello'
"World"

// literal : Object
{ name: 'Lee', gender: 'male' }

// literal : Array
[ 'Black', 'Gray', 'White' ];
대괄호 안에 배열
```

논리 연산자
참고 사이트
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EB%85%BC%EB%A6%AC_%EC%97%B0%EC%82%B0%EC%9E%90(Logical_Operators) 

perator	Usage	Description
Logical AND (&&)	expr1 && expr2	expr1을 false로 변환할 수 있는 경우 expr1을 반환하고, 그렇지 않으면 expr2를 반환합니다.
따라서 부울 값과 함께 사용할 경우, expr1과 expr2가 모두 true인 경우 true를 반환하고 그렇지 않으면 false를 반환합니다.

Logical OR (||)	expr1 || expr2	
expr1을 true로 변환할 수 있으면 expr1을 반환하고, 그렇지 않으면 expr2를 반환합니다.
따라서 부울 값과 함께 사용할 경우, expr1, expr2 둘 중 하나가 true인 경우 true를 반환합니다.

Logical NOT (!)	!expr	단일 피연산자가 true로 변환될 수 있는 경우 false를 반환합니다. 그렇지 않으면 true를 반환합니다.


키워드 = 명령어

  var (variable) 

주석 // 한줄
/* */ 여러줄

4번 가장 중요 6번, for문 많은 연습이 필요

7 오브젝트 상당히 중요함.
9 펑션 굉장히 중요함.
그 뒷 파트는 중급자
scope, this 꼭 알고 넘어가야 함
13 자바스크립트 내부를 이해해야 함.
15 객체 지향 ~ 분량이 어마어마함. 반드시 이해하고 가야 함.

자바스크립트에서 기본적으로 제공하는 함수들을 소개하는것. (23 배열- 활용도 높으므로 잘 써야 함.)

24~ 이후로는 중요하며 잘 해야 함. 28은 내용이 없어 수업하지 않음.
24 DOM - 컨트롤 하는 방법

25 자바스크립트의 한계


# 4. Data type & Variable
데이터의 성질 

var x = 'test'
숫자를 표현 할 수 있는 한계가 있어 숫자인 경우 내부적으로 어느 사이즈를 미리 잡아 놓고 숫자를 

point 
힙이라는 영역 - 무슨 말이지????

저장해야 할 메모리 사이즈가 달라지므로 자바스크립트는 7개로 구분을 해놨어.

typeof 연산자를 사용하여 자료형을 반혼하여 준다.
재할당이 가능함. 문자 > 숫자


Boolean
null, undefined, 숫자 0은 false

null
대소문자를 구분하므로 항상 소문자로 써야 함.


언제????
타입오프로 하지 않고
삼항 === 으로 체크함

자바스크립트에서  ==, === 구분

undefined 자바스크립트 엔진은 선언은 되었지만 할당된 적이 없는 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 반환된다.

----------
과제 : 정리, css 제출 반응형(슬랙으로 개인 메시지로 전송)

예습 6번까지











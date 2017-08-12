/*
var time = 10;
var greeting;

if (time < 10) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}
console.log(greeting);
var color = 'red';
switch (color) {
  case 'yellow':
    console.log('yellow color');
    break; 
  case 'red':
    console.log('red color');
    break;
  case 'blue':
    console.log('blue color');
    break;
  default:
    console.log('unknowm color');
}

for (var i = 0; i < 3; i++) { // 한줄만 실행하면서 확인해 봄.
  for (var j = 0; j < i; j++) {
    console.log(i,j);
  }
}

Q1
/*
for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex) 
0
2
4
6
8

for (var i = 0; i < 10; i++){  // i값을 0부터 시작해서 10보다 작을때까지 하나씩 증감한다.
  if (i  % 2 === 0) { // i값을 2로 나눴을 때 0이 되어 참이면 
    console.log(i)//i값을 출력한다.
  }

} // 8까지 출력해야 하므로 9보다 작은 수로 정함.


/*
for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
ex) 02468

var result = '';
for (var j = 0; j < 10; j++){ // j값을 0부터 시작해서 10보다 작을때까지 하나씩 증감한다.
  if(j % 2 === 0){ // j값을 2로 나눴을 때 0이 되어 참이면
    result += j; // 결과값을 가로로 하는 것은 숫자를 문자로 변환한 후 문자를 더한다.
  }
}

/*
for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1


for (var k = 10; k > 0; k--){ // k값을 10부터 시작해서 k값이 0보다 클때까지 1씩 감소한다.
  if(k % 2 === 1){ // k값을 2로 나눈 나머지가 1인 홀수라면
    console.log(k); // k값을 출력한다.
  }
}


/*
while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex)
0
2
4
6
8

while (var l = 0; l < 10; l++){// unexpected token var 잘못된 식이라고 에러 메시지 >> !! for문은 축약이 가능한 문법이나 while문은 축약이 불가능한 문법이어서 에러가 나는 것이다.// 0부터 시작해서 10미만 일때까지 1씩 증가한다.
  if(l % 2 === 0){//2로 나누고 나머지가 0인 짝수라면 
    console.log(l);//출력한다.
  }
}


var l = 0; // l값을 0으로 할당한다.
while(l < 10){ // l값이 10미만 일때까지 반복한다.
  if(l % 2 === 0) console.log(l); // l값을 2로 나눈 나머지가 0인 짝수라면 l값을 출력한다.
  l++; // l값을 1씩 증가한다.
} // 질문 : 주석처리한 바로 위의 while문을 for문과 같은 방법으로 코딩하니 unexpected token var 라고 메시지가 나오는데요. 무슨 뜻인가요? 


/*
while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1


var m = 10; // m값을 10으로 할당한다.
while(m > 0){ // m값이 0보다 클때까지 반복한다.
  if(m % 2 === 1) console.log(m); // m값을 2로 나눈 나머지가 1인 홀수 일때 m값을 출력한다.
  m--; // m값을 1씩 감소한다.
}


/*
삼각형출력하기

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 5
*
**
***
****
*****


var star = '*'; // 별로 정의
var line = 5; // 높이가 5인 즉, 5줄
for (var o = 0; o < line; o++) { // 0에서 시작해서 4까지 1씩 증가한다.
  result += star; // 별을 하나씩 더해진 것을 출력한다.
  star += '/n'; // 개행을 한다.
}


// 3줄짜리 삼각형
var line = 3;
// 출력용 변수
var star = '';

// 삼각형 라인수(line)만큼 루프: i = 0, 1, 2
for (var i = 0; i < line; i++) {
  // 라인별 별의 갯수(i + 1)만큼 루프
  for (var j = 0; j < i + 1; j++) {
    // 1번째 라인 : i = 0 / j = 0 => *
    // 2번째 라인 : i = 1 / j = 0, 1 => **
    // 3번째 라인 : i = 2 / j = 0, 1, 2 => ***
    star += '*';
  }
  // 개행
  star += '\n';
}

/*
트리 출력하기

다음을 참고하여 *(별)로 트리를 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 3일때 + 높이(line)가 5일때
*
**
***
*
**
***
****
*****


// 나쁜예
var foo = function () {
  var a = 3, b = 5;
  var bar = function () {
    var b =7, c = 11;
    a += b+ c;

  };
  bar();
};

// 나쁜 예
function foo() {
  x = 1;   // Throws a ReferenceError in "use strict" mode
  var y = 2;
}

foo();

console.log(x); // 1
console.log(y);

var Person = function(name) {
  // 생성자 함수 코드 실행 전 -------- 1
  this.name = name;  // --------- 2
  // 생성된 함수 반환 -------------- 3
}

var me = new Person('Lee');
console.log(me.name);
*/


// Scope-Safe Constructor Pattern
function A(arg) {
  // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈객체를 생성하고 this에 바인딩한다.

  /*
  this가 호출된 함수(arguments.callee, 본 예제의 경우 A)의 인스턴스가 아니면 new 연산자를 사용하지 않은 것이므로 이 경우 new와 함께 생성자 함수를 호출하여 인스턴스를 반환한다.
  arguments.callee는 호출된 함수의 이름을 나타낸다. 이 예제의 경우 A로 표기하여도 문제없이 동작하지만 특정함수의 이름과 의존성을 없애기 위해서 arguments.callee를 사용하는 것이 좋다.
  */


  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(arg);
  }

  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);


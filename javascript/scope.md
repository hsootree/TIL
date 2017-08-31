# 1. Scope
(유효범위)

```
전역 Scope (Global scope)
코드 어디에서든지 참조할 수 있다.
지역 Scope (Local scope or Function-level scope)
정의된 함수 내에서만 참조할 수 있다.
```

선언 위치에 의해 Scope를 가지게 된다.

```javascript
int main(void) {
  // block-level scope
  if (1) {
    int x = 5;
    printf("x = %d\n", x);
  }

  printf("x = %d\n", x); // use of undeclared identifier 'x'

  return 0;
}
```
```javascript
var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y);   // 0
```

## 1. Global scope

```javascript
var global = 'global'; //..  window.global 과 같은 의미

function foo() {
  var local = 'local';
  console.log(global);
  console.log(local); //앞에 window를 사용해도 안됨.
}
foo();

console.log(global);
console.log(local); // Uncaught ReferenceError: local is not defined
```

## 2. Non Block-level scope

```javascript
if (true) {
  var x = 5; // The scope is inside the if-block 전역 변수로 코드 블럭 밖에서도 적용이 된다.
}
console.log(x);
```
## 3. Function scope

```javascript
var a = 10;     // 전역변수

(function () {
  var b = 20;   // 지역변수
})();

console.log(a); // 10
console.log(b); // "b" is not defined
```

```javascript
// 지역변수를 써야 할 경우에는 인자로 넘겨서 사용하는 것이 좋은 방법이며 다음과 같은 예제는 나쁜 사례이다.

var foo = function ( ) {
  var a = 3, b = 5;
  var bar = function ( ) {
    var b = 7, c = 11; // 이 시점에서 a는 3, b는 7, c는 11
    a += b + c; // 이 시점에서 a는 21, b는 7, c는 11
  }; // 이 시점에서 a는 3, b는 5, c는 not defined
  bar( );// 이 시점에서 a는 21, b는 5
};
```

## 4. 암묵적 전역 (implied golbals)
암묵적인 전역 사용은 자제바람.

## 5. Lexical scoping (Static scoping)
자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 예제의 함수 bar가 어떤 상황에서 호출될 지 선언 시점에서는 알 수 없다.

```javascript
var i = 5;

function foo() {
  var i = 10;
  bar();
}

function bar() { // 선언된 시점에서의 scope를 갖는다!
  console.log(i);
}

foo(); // ?
```

## 6. 변수명의 중복
```javascript
// x.js
function foo (){
  // var i = 0; 실수로 var를 생략하는 경우 전역 변수로 지정이 되어 다른 파일에 영향을 주게 되므로 이러한 상황을 조심하자.
  i = 0;
  // ...
}

// y.js
for(var i = 0; i < 5; i++){
  foo();
  console.log(i); // 무한루프에 빠지므로 전역, 지역 구분 잘하자.
}
```

```javascript
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    setTimeout(function() {
      console.log("callback's this: ",  this);  // 1
      console.log("callback's this.value: ",  this.value); // 100
    }, 100); // 내부함수의 this는 전역을 가르킴.
  }
};

obj.foo();
```


```javascript
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    var that = this;  // Workaround : this === obj

    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1

      console.log("bar's that: ",  that); // obj
      console.log("bar's that.value: ", that.value); // 100
    }
    bar();
  }
};

obj.foo();
```

꼭 이해하고 넘어가야 할 코드
```javascript
var Person = function (name) {
  this.name = name;
};

var foo = {};

// apply 메소드는 생성자함수 Person을 호출한다. 이때 this에 객체 foo를 바인딩한다.
Person.apply(foo, ['name']);

console.log(foo); // { name: 'name' }
```
꼭 알고 넘어갈 것!!!!!!!!
```javascript
function convertArgsToArray() {
  console.log(arguments);

  // arguments 객체를 배열로 변환
  // slice: 배열의 특정 부분에 대한 복사본을 생성한다.
  var arr = Array.prototype.slice.apply(arguments); // arguments.slice
  // var arr = [].slice.apply(arguments);

  console.log(arr);
  return arr;
}

convertArgsToArray(1, 2, 3);
```

```javascript
Person.apply(foo, [1, 2, 3]);
// 동일한 기능으로 케이스바이 케이스로 선택하여 사용한다.
Person.call(foo, 1, 2, 3);
```

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function(callback) {
  if(typeof callback == 'function') {
    callback.call(this);
  }
};

function foo() {
  console.log(this.name);
}

var p = new Person('Lee');
p.doSomething(foo);  // 'Lee'
```

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function(callback) {
  if(typeof callback == 'function') {
    callback.call(this); // 문맥상 this가 달라짐. 전역이므로 이에 대한 해결을 해야 한다. 화살표 함수를 사용하면 말끔하게 처리할 수 있다. 
    // 바인드를 써도 됨.
  }
};

function foo() {
  console.log(this.name);
}

var p = new Person('Lee');
p.doSomething(foo);  // 'Lee'
```



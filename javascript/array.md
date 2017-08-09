
# 1. 배열의 생성
> 첫번째 값은 인덱스 ‘0’으로 읽는다.

```javascript
var arr = [1,2,3]; // 리터럴 방식으로 만들수 있다.
```
- 프로퍼티가 없고 값만 존재한다.
- index를 사용하여서 순회가 가능하다.
- Array() // Array 생성자로 생성하며 prototype관계가 성립한다.
  - 주의: Array는 object type이다.

## 1.1 배열 리터럴
```javascript
var emptyArr = [];

var numbersArr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

console.log(emptyArr[1]);       // undefined
console.log(numbersArr[1]);     // 'one'
console.log(emptyArr.length);   // 0
console.log(numbersArr.length); // 10
console.log(typeof numbersArr); // object
```
- 요소(element)에는 모든 값이 올 수 있다.(배열, 객체, undefined 등등)
- 배열은 무조건 [ ]로 표현하며 안의 값으로는 index가 들어간다.

> 유사배열객체
```javascript
var numbersObject = {
  '0': 'zero',  '1': 'one',   '2': 'two',
  '3': 'three', '4': 'four',  '5': 'five',
  '6': 'six',   '7': 'seven', '8': 'eight',
  '9': 'nine'
}; // 이러한 방법으로 사용하지은 않는다.
```
> 유사배열객체의 단점

- 유사배열객체는 접근이 힘들다.
- 순서가 보장되지 않는다.
- for-in문으로 돌리면 우리가 원하는 동작을 할 수 없다.
배열 리터럴은 객체 리터럴과 달리 프로퍼티명이 없고 각 요소(element)의 값만이 존재한다.

> 배열 리터럴은 인덱스를 가지고 있다.
 - 두 객체의 근본적 차이는 `numbersArr는 Array.prototype을 상속`받았으나 `numbersObject는 Object.prototype을 상속` 받았다는 것이다.

> 대부분의 언어에서 배열의 요소들은 모두 같은 데이터 타입이어야 하지만, 자바스크립트 배열은 어떤 데이터 타입의 조합이라도 포함할 수 있다.

```javascript
var misc = [
  'string', 98.6, true, false, null, undefined, ['nested', 'array'], {object: true}, NaN, Infinity
];

misc.length   // 10
```

## 1.2 Array() 생성자 함수

- Array() 생성자 함수는 매개변수의 갯수에 따라 다르게 동작한다.
- new를 꼭 붙여야한다.
- literal 방식으로 만드는 것이 더 좋다.
```javascript
new Array(arrayLength)
```
> 매개변수로 전달된 숫자를 length 값으로 가지는 빈 배열 생성
  - 값이 안들어 간곳에는 undefined가 된다.

# 2. 배열 요소의 추가와 삭제

## 2.1 배열 요소의 추가
 객체가 동적으로 프로퍼티를 추가할 수 있는 것처럼 배열도 동적으로 요소를 추가할 수 있다. 
- 순서에 맞게 값을 저장할 필요는 없고 필요한 인덱스 위치에 값을 저장할 수 있다. 
- 값이 할당되지 않은 인덱스 위치의 요소의 값은 undefined가 되고 배열의 길이(length)는 최종 인덱스 위치의 기준으로 산정된다.

```javascript
var arr = [];
console.log(arr[0]); // undefined

arr[0] = 'one';
arr[3] = 'three';
arr[7] = 'seven';

console.log(arr); // ["one", undefined × 2, "three", undefined × 3, "seven"]
console.log(arr.length) // 8

```
## 2.2 배열 요소의 삭제
- 배열은 객체이기 때문에 배열의 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.
- 해당 요소가 삭제되는 것이 아니라 요소 값이 삭제되어 `undefined`가 된다.
- 해당 요소를 완전히 삭제하기 위해서는 `Array.prototype.splice() 메소드를 사용한다.`

```javascript
var numbersArr = ['zero', 'one', 'two', 'three'];

// 요소의 값만 삭제된다
delete numbersArr[2]; // ['zero', 'one', undefined, 'three']
console.log(numbersArr);

// 요소 일부를 삭제 (배열 시작점, 삭제할 요소수)
numbersArr.splice(2, 1); // ['zero', 'one', 'three'] 2번째에서 1개 지워라.
console.log(numbersArr);
```
- splice(2,1)를 사용하면 2번째 인덱스부터 1개를 지우고 지운 뒤에는 index값들이 자동으로 바뀐다.

# 3. 배열 요소의 열거
- 일반 for 문을 사용하여서 열거를 할 수 있다.

```javascript
var numbersArr = ['zero', 'one', 'two', 'three'];
numbersArr.foo = 10;

for (var prop in numbersArr) {
  console.log(prop, numbersArr[prop]);
  // 0 zero / 1 one / 2 two / 3 three / foo 10
}

for (var i = 0; i < numbersArr.length; i++) {
  console.log(i, numbersArr[i]);
  // 0 'zero' / 1 'one' / 2 'two' / 3 'three'
}
```

> for in 문은 property까지 다가져온다. 그래서 for문과 다르게 foo 10이 나온다. ES6에서는 유사배열을 돌리는 for of문을 사용한다.

# 4. Array Property

## 4.1 Array.length
- 순회가능한 것에는 length가 필요하다
```javascript
var myArray = [];
console.log(myArray.length); // 0

myArray[1000] = true;  // [ undefined, undefined, ... , true ]

console.log(myArray.length); // 1001
console.log(myArray[0]);     // undefined
```

- 1000번째 인덱스에 값이 들어왔으니 0~999까지는 undefined가 채워지기에 length는 1000+1 = 1001이다.

- length 프로퍼티는 명시적으로 값을 변경할 수 있다.
- length 프로퍼티의 값을 현재 보다 작게 설정하면 설정한 값보다 크거나 같은 인덱스에 해당하는 요소는 모두 삭제된다.

```javascript
var arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

// 배열 길이의 명시적 설정
arr.length = 3; // [ 'zero', 'one', 'two' ]

// 배열 끝에 새 요소 추가
arr[arr.length] = 'san'; // [ 'zero', 'one', 'two', 'san' ]

arr.length = 5; // [ 'zero', 'one', 'two', 'san', undefined ]

// 배열 끝에 새 요소 추가
arr.push('go'); // [ 'zero', 'one', 'two', 'san', undefined, 'go' ]
```
- push() method는 마지막 인덱스 위치에 값을 할당한 것과 같다.
- push보다 arr.length에다가 추가하는것이 속도적으로 더빠르다.
# 5. Array Method

## 5.1 Array.isArray()
- static method이다
- 객체가 배열이면 true, 배열이 아니면 false를 반환한다.
> 일반 method는 호출시 object명.method명, static은 생성자함수명.method명 을 사용한다.
static의 생성자함수의 method는 new가 필요없이 GO에 이미 값이 올라가 있다.

```javascript
// true
Array.isArray([]);   //true
Array.isArray([1, 2]); // true
Array.isArray(new Array()); // true

// false
Array.isArray();           
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(1);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);

```

## 5.2 Array.prototype.indexOf()
- 배열에서 인수로 지정된 요소를 검색하여 인덱스를 반환한다
- `중복되는 요소가 있는 경우 첫번째 인덱스`만 반환된다. 만일 해당하는 요소가 없는 경우, -1을 반환한다.

```javascript
var arr = [1, 2, 2, 3];
arr.indexOf(2); // 1
arr.indexOf(4); // -1
```
- 반환 값이 -1이면 실패했다는 처리를 해줘야한다.


## 5.3 Array.prototype.concat(item…)
- 인수로 넘어온 값들(배열 또는 값)을 자신의 복사본에 요소로 추가하고 복사본을 반환한다. 이때 `원본 배열은 변경되지 않는다.`

```javascript
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b);
console.log(c); // ['a', 'b', 'c', 'x', 'y', 'z']

var d = a.concat('String');
console.log(d); // ['a', 'b', 'c', 'String']

var e = a.concat(b, true);
console.log(e); // ['a', 'b', 'c', 'x', 'y', 'z', true]

// 원본 배열은 변하지 않는다.
console.log(a); // [ 'a', 'b', 'c' ]
```

## 5.4 Array.prototype.join()

- 배열 요소 전체를 연결하여 문자열을 만든다. 기본구분자는 ‘,’이다.
  - option으로 원하는 값을 넣을 수 있다.
- Array.prototype.join() 메소드는 + 연산자보다 빠르다.

```javascript
str = arr.join([separator = ','])

var arr = ['a', 'b', 'c', 'd'];

var x = arr.join();
console.log(x);  // 'a,b,c,d';

var y = arr.join('');  // 다붙인다.
console.log(y);  // 'abcd'

var z = arr.join(':');
console.log(z);  // 'a:b:c:d'
```

## 5.5 Array.prototype.pop()
- pop은 push와 함께 배열을 스택(LIFO: Last In First Out)처럼 동작하게 한다.(후입 선출)
- `pop 메소드는 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.`
- 빈 배열일 경우 undefined를 반환한다.

```javascript
var a = ['a', 'b', 'c'];
var c = a.pop();

// 원본 배열이 변경된다.
console.log(a); // a --> ['a', 'b']
console.log(c); // c --> 'c'

```

## 5.6 Array.prototype.push(item…)

- 인수로 넘어온 항목을 배열의 끝에 추가한다. 
- concat 메소드와 다르게 배열 자체를 변경하여 넘어온 인수 전체를 배열에 추가한다. 
- 반환값은 배열의 새로운 length 값이다.

```javascript
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

// push는 원본 배열을 직접 변경하고 변경된 배열의 length를 반환한다.
var c = a.push(b, true);
console.log(a); // a --> ['a', 'b', 'c', ['x', 'y', 'z'], true]
console.log(c); // c --> 5;

// concat은 원본 배열을 직접 변경하지 않고 복사본을 반환한다.
console.log([1, 2].concat([3, 4])); // [ 1, 2, 3, 4 ]
```
- 요소로 배열이 들어올 수 있다.
- 배열의 마지막에 값을 추가 할 때는 Array.prototype.push(), 선두에 추가 할 때는 Array.prototype.unshift(), 중간에 추가할 때는 Array.prototype.splice() 메소드를 사용한다.

> push, unshift 메소드는 사용하기 간편하나 performance 면에서는 좋은 방법은 아니다.

```javascript
var arr = [1, 2, 3, 4, 5];

arr.push(6);
arr[arr.length] = 6; // 43% faster in Chrome 47.0.2526.106 on Mac OS X 10.11.1

arr.unshift(0);
[0].concat(arr); // 98% faster in Chrome 47.0.2526.106 on Mac OS X 10.11.1
```

## 5.7 Array.prototype.reverse()
- 배열 요소의 순서를 반대로 변경한다. 이때 원본 배열이 변경된다. 반환값은 변경된 배열이다.

```javascript
var a = ['a', 'b', 'c'];
var b = a.reverse();

// 원본 배열이 변경된다
console.log(a); // [ 'c', 'b', 'a' ]
console.log(b); // [ 'c', 'b', 'a' ]
```

## 5.8 Array.prototype.shift()

- shift는 push와 함께 배열을 큐(FIFO: First In First Out)처럼 동작하게 한다. 
- 배열에서 첫요소를 제거하고 제거한 요소를 반환한다. 만약 빈 배열일 경우 undefined를 반환한다.

```javascript
var a = ['a', 'b', 'c'];
var c = a.shift();

// 원본 배열이 변경된다.
console.log(a); // a --> [ 'b', 'c' ]
console.log(c); // c --> 'a'
```

## 5.9 Array.prototype.slice(start, end)
- 배열의 특정 부분에 대한 `복사본을 생성한다.`
  - 원본을 건드리지 않는다.
- 첫번째 매개변수 start에 해당하는 인덱스를 갖는 요소부터 매개변수 end에 해당하는 인덱스를 가진 `요소 전까지 복사`된다.

```javascript
var items = ['a', 'b', 'c'];

// items[0]부터 items[1] 이전(items[1] 미포함)까지 반환
var res1 = items.slice(0, 1);
console.log(res1);  // [ 'a' ]

// items[1]부터 items[2] 이전(items[2] 미포함)까지 반환
var res2 = items.slice(1, 2);
console.log(res2);  // [ 'b' ]

// items[1]부터 이후의 모든 요소 반환
var res3 = items.slice(1);
console.log(res3);  // [ 'b', 'c' ]

// 인자가 음수인 경우 배열의 끝에서 2개의 요소를 반환
var res4 = items.slice(-2);
console.log(res4);  // [ 'b', 'c' ]

// 모든 요소를 반환
var res5 = items.slice();
console.log(res5);  // [ 'a', 'b', 'c' ]

// slice는 복사본을 반환한다. 원본은 변경되지 않는다.
console.log(items); // [ 'a', 'b', 'c' ]
```

## 5.10 Array.prototype.splice(start, deleteCount, item…)
- 기존의 배열의 요소를 제거하고 그 위치에 새로운 요소를 추가한다. 배열 중간에 새로운 요소를 추가할 때도 사용된다.
  - start : 배열에서의 시작 위치이다
  - deleteCount : 시작 위치(start)부터 제거할 요소의 수이다.
  - item : 삭제한 위치에 추가될 요소들이다. (옵션)

```javascript
var items = ['one', 'two', 'three', 'four'];

// items[1]부터 2개의 요소를 제거하고 제거된 요소를 배열로 반환
var res = items.splice(1, 2);

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 'two', 'three' ]

var items = ['one', 'two', 'three', 'four'];

// items[1]부터 2개의 요소를 제거하고 그자리에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
var res = items.splice(1, 2, 'x', 'y');

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'x', 'y', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 'two', 'three' ]

var items = ['one', 'two', 'three', 'four'];

// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
var res = items.splice(1, 0, 'x');

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'x', 'two', 'three', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ ]

var items = ['one', 'four'];

// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 배열를 추가한다. 제거된 요소가 반환된다.
// var res = items.splice(1, 0, ['two', 'three']); // [ 'one', [ 'two', 'three' ], 'four' ]
var res = Array.prototype.splice.apply(items, [1, 0].concat(['two', 'three']));
// ES6
// var res = items.splice(1, 0, ...['two', 'three']);

console.log(items); // [ 'one', 'two', 'three', 'four' ]
console.log(res);   // [ ]

```
> ['two','three']가 배열로 되어있어서 apply를 사용하여서 배열을 풀어서 넣는다 ES6에서는 ...을 사용하여서 해결한다.

## 5.11 Array.prototype.sort(comparefunc)

- 배열의 내용을 적절하게 정렬한다.
  - 수를 정렬할때 `인자로 callback함수를 주어야한다.`

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// ascending(오름차순)
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Mango', 'Banana', 'Apple' ]

var points = [40, 100, 1, 5, 25, 10];

points.sort();
console.log(points); // [ 1, 10, 100, 25, 40, 5 ]

// Syntax : array.sort(compareFunction)

// 숫자 배열 오름차순 정렬
// compareFunction의 반환값이 0보다 작은 경우, a를 우선한다.
points.sort(function (a, b) { return a - b; });
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// compareFunction의 반환값이 0보다 큰 경우, b를 우선한다.
points.sort(function (a, b) { return b - a; });
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100
```

## 5.12 Array.prototype.map()

- 배열을 순회하며 각 요소에 대하여 인자로 주어진 `콜백함수를 실행`하고 그 결과가 반영된 새로운 배열을 반환한다. 
- 1번째 인자로 `콜백함수`의 인자로 `요소값, 요소 인덱스, 순회할 배열`을 전달할 수 있다.

```javascript
var numbers = [1, 4, 9];
// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
var roots = numbers.map(Math.sqrt);
console.log(roots); // [ 1, 2, 3 ]
```

- 2번째 인자로 `this를` 전달할 수 있다.

```javascript
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // 콜백함수의 인자로 요소값, 요소 인덱스, 순회할 배열을 전달할 수 있다.
  return arr.map(function (x) {
    // x는 요소값이다.
    return this.prefix + x; // 2번째 인자 this를 전달하지 않으면 this === window
  }, this);
};

var pre = new Prefixer('-webkit-');
var preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr);
// [ '-webkit-linear-gradient', '-webkit-border-radius' ]
```
- `x는 map함수가 기본적으로 세팅하는 값은 순서대로 요소값을 나타내며 그 뒤에 값을 더 넣어주는 순서대로, 요소 인덱스, 순회할 배열을 전달할 수 있다.`
- Es6의 Arrow function를 사용하면 this를 생략하여도 동일한 동작을 한다.

> 순회하는 함수들은 2번째 인자로 this를 넣어줄수 있다 그래서 this가 전역이 되는 것을 막아준다.
만약 2번째 인자로 사용하지 않는다면 that을 생성하여서 that을 넣어주면 된다.


## 5.13 Array.prototype.forEach()
- 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행한다. 
- 콜백함수의 인자로 요소값, `요소 인덱스, 순회할 배열`을 전달할 수 있다. 일반 for 구문에 비해 성능이 좋지는 않다.

```javascript
var total = 0;

[1, 3, 5, 7, 9].forEach(function (element, index, array) {
  console.log('[' + index + '] = ' + element);
  total += element;
});

console.log(total);
```

- 2번째 인자로 this를 전달할 수 있다.

```javascript
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  // entry는 array의 요소값
  array.forEach(function (entry) {
    this.sum += entry; // 2번째 인자 this를 전달하지 않으면 this === window
    this.count++;
  }, this);
};

var obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum);   // 16
```
- Es6의 Arrow function를 사용하면 this를 생략하여도 동일한 동작을 한다.


## 5.14 Array.prototype.filter()
- 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 실행 결과가 true인 요소값만을 모은 새로운 배열을 반환한다.
- 배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용한다.
- 콜백함수의 인자로 요소값, 요소 인덱스, 순회할 배열을 전달할 수 있다.

```javascript
var result = [1, 2, 3, 4, 5].filter(function (element, index, array) {
  console.log('[' + index + '] = ' + element);
  return element % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result);
```

## 5.15 Array.prototype.reduce()
 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환한다.
- `previousValue: 이전 콜백의 반환값, currentValue : 요소값, currentIndex : 인덱스, array : 순회할 배열를 인자로 가진다.`

```javascript
/*
previousValue: 이전 콜백의 반환값
currentValue : 요소값
currentIndex : 인덱스
array        : 순회할 배열
*/
var result = [1, 2, 3, 4, 5].reduce(function (previousValue, currentValue, currentIndex, array) {
  console.log(previousValue + '+' + currentValue + '=' + (previousValue + currentValue));
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});

console.log(result); // 15: 1~5까지의 합
/*
1: 1+2=3
2: 3+3=6
3: 6+4=10
4: 10+5=15
15
*/
```
- 1번 시작시 (1,2) / 2번 시작시 (1+2,3) / 3번 시작시 (1+2+3,4) / 4번 시작시 (1+2+3+4, 5)
- Array.prototype.reduce()
![Array.prototype.reduce()](../images/reduce.png)

## 5.16 Array.prototype.find()

- ES6에서 새롭게 도입된 메소드로 Internet Explorer에서는 지원하지 않는다.

- 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 `그 결과가 참인 첫번째 요소를 반환한다.` 콜백함수의 인자로 요소값, 요소 인덱스, 순회할 배열을 전달할 수 있다.

```javascript
var array = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

var result = array.find(function (element) {
  return element.id === 2; // 조건
});

// ES6
// const result = array.find(element => element.id === 2;);

console.log(result); // { id: 2, name: 'Kim' }
```



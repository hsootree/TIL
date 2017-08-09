
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

## 5.2 Array.prototype.indexOf()

## 5.3 Array.prototype.concat(item…)

## 5.4 Array.prototype.join()

## 5.5 Array.prototype.pop()

## 5.6 Array.prototype.push(item…)

## 5.7 Array.prototype.reverse()

## 5.8 Array.prototype.shift()

## 5.9 Array.prototype.slice(start, end)

## 5.10 Array.prototype.splice(start, deleteCount, item…)

## 5.11 Array.prototype.sort(comparefunc)

## 5.12 Array.prototype.map()

## 5.13 Array.prototype.forEach()

## 5.14 Array.prototype.filter()

## 5.15 Array.prototype.reduce()

## 5.16 Array.prototype.find()


## 5.4 Array.prototype.join()


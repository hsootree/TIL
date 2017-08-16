// Array 배열

// 배열 리터럴
// 존재하지 않는 요소에 접근하면 undefined를 반환한다.

var emptyArr = []; // 요소가 없는 배열을 할당한다.
var numbersArr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
]; // 숫자를 표현하는 문자를 0~9까지 문자열로 배열을 할당한다.

console.log(emptyArr[1]);       // 존재하지 않는 요소에 접근하여 출력 값은 undefined 
console.log(numbersArr[1]);     // 'one' 인덱스 1로 2번째 요소 값
console.log(emptyArr.length);   // 존재하지 않는 요소이므로 길이 값이 0
console.log(numbersArr.length); // 10 (0~9 인덱스)
console.log(typeof numbersArr); // object 

var numbersObject = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
} // 배열 리터럴은 객체 리터럴과 달리 프로퍼티명이 없고 각 요소의 값만이 존재한다. 

var arr = new Array(2);
console.log(arr.length, arr); // 배열은 2개의 요소를 가지며 자리만 준 상태이므로 [undefined, undefined] 를 생성한다.
var arr = new Array(1, 2, 3);
console.log(arr.length, arr); // 3개의 요소를 가지며 [1, 2, 3]을 생성한다.

// 2. 배열 요소의 추가와 삭제
var arr = []; // 빈 배열을 할당한다.
console.log(arr[0]); // 0인덱스를 출력하면 undefined 
arr[0] = 'one'; // arr배열 0인덱스에 ['one'] 
arr[3] = 'three'; // 3인덱스에 ['three']
arr[7] = 'seven'; // 7인덱스에 ['seven']
console.log(arr); // ['one', undefined, undefined, 'three', undefined*3, 'seven'] 을 출력한다.

// 배열 요소의 삭제
var numbersArr = ['zero', 'one', 'two', 'three'];
delete numbersArr[2]; // ['zero', 'one', undefined, 'three'] 요소만 삭제되고 인덱스는 남음.
console.log(numbersArr); // 출력값 ['zero', 'one', undefined, 'three'] 
// (배열 시작점, 삭제할 요소수)
numbersArr.splice(2,1); // 인덱스2 시작해서 1개의 요소 삭제
console.log(numbersArr); // ['zero', 'one', 'three'] 

// 객체의 프로퍼티를 열거할 때 for in문을 사용.
// 배열 역시 객체이므로 for in 문을 사용 가능.
// 문제점 : 배열은 객체이므로 프로퍼티를 갖고 for in 문을 사용하면 불필요한 프로퍼티까지 출력되어 요소들의 순서를 보장하지 않음.
// 이러한 문제점으로 인해 for in문은 배열을 열거하는데 적합하지 않음.

var numbersArr = ['zero', 'one', 'two', 'three'];
numbersArr.foo = 10; // 프로퍼티foo에 10을 할당한다.
// for in문과 for문의 결과값을 확인해보면
for (var prop in numbersArr) { // for in 문으로 배열을 표현
  console.log(prop, numbersArr[prop]); // 프로퍼티를 index로 불러와서 배열로 표현하여 출력한다.
}
/* for in문의 출력 결과
0 zero
1 one
2 two
3 three
foo 10 // 
*/
for (var i = 0; i< numbersArr.length; i++) { // i값을 0으로 초기화하고 배열의 숫자보다 작을때까지 증가핟다.
  console.log(i, numbersArr[i]); // 반복문에서 한번씩 순회할때 0부터 시작하여 인덱스 0부터 각 인덱스에 해당하는 배열을 출력한다.
}
/* for문의 출력 결과 
0 "zero"
1 "one"
2 "two"
3 "three"
*/

// Array.length
// length 프로퍼티는 요소의 갯수, 배열의 길이이며 양의 정수, 2의 32승 미만이다.
var myArray = []; // 빈 배열을 할당한다.
console.log(myArray.length); // 빈 배열이므로 인덱스의 개수는 0
myArray[1000] = true; // index 1000에 true 요소를 할당한다.
console.log(myArray.length); // 1001
console.log(myArray[0]); // undefined

// 명시적으로 값을 변경 가능한 length 프로퍼티
var arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
]; // 예제 배열을 할당한다.
arr.length = 3; // index를 0,1,2 이렇게 3개로 변경한다.
console.log(arr); // ["zero", "one", "two"]
arr.length = 5; // index를 0, 1, 2, 3, 4 이렇게 5개로 변경한다.
console.log(arr); // 바로 앞에서 삭제된 배열의 요소는 회복이 안되며 undefined 값이 출력되어 ["zero", "one", "two", undefined × 2]


// Array Method

// 객체가 배열이면 true
Array.isArray([]); // true
Array.isArray([1, 2]); // true
Array.isArray(new Array()); // true

// 객체가 배열이 아니면 false
Array.isArray(); // false  
Array.isArray({}); // false
Array.isArray(null); // false
Array.isArray(undefined); // false
Array.isArray(1); // false
Array.isArray('Array'); // false
Array.isArray(true); // false
Array.isArray(false); // false

// indexOf()
var arr = [4, 5, 5, 6]; // 동일한 값의 요소를 중복 제공한 배열을 할당한다.
arr.indexOf(0); //  0 요소가 없으므로 -1 값을 출력
arr.indexOf(4); // 4 요소가 0인덱스에 있으므로 0 값을 출력
arr.indexOf(5); // 5 요소가 1, 2 인덱스에 있으므로 첫번째 인덱스 값인 1을 출력
arr.indexOf(6); // 6 요소가 3 인덱스에 있으므로 인덱스 값인 3을 출력
arr.indexOf(7); // 7 요소가 없으므로 -1 값을 출력

// Array.prototype.concat(item...)
// 인수로 넘어온 값들(배열 또는 값)을 자신의 복사본에 요소로 추가하고 복사본을 반환한다. 이때 원본 배열은 변경되지 않는다.

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b); //a배열과 b배열을 추가하여 새로운 c배열을 생성하여 할당
console.log(c); // ["a", "b", "c", "x", "y", "z"]

var d = a.concat('String'); // a배열에 'String'을 추가
console.log(d); // ["a", "b", "c", "String"]

var e = a.concat(b, true); // a배열에 b배열을 추가하고 true 요소를 추가
console.log(e); // ["a", "b", "c", "x", "y", "z", true]

// Array.prototype.join()
var arr = ['a', 'b', 'c', 'd']; // 배열을 할당한다.
var x = arr.join(); // join메소드는 + 연산자보다 빠르다.
console.log(x); // 'a,b,c,d' 
var y = arr.join('');
console.log(y); // 'abcd'
var z = arr.join(':');
console.log(z); // 'a:b:c:d'

// Array.prototype.pop()
// 배열에서 마지막 요소 제거
var a = ['a', 'b', 'c'];
var c = a.pop(); // a 배열의 마지막 요소인 c를 제거한다.
console.log(a); // ['a', 'b'] 를 출력한다.
console.log(c); // 마지막 요소인 c를 출력한다.

// Array.prototype.push(item…)
// 인수로 넘어온 항목을 배열의 끝에 추가한다. 
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b); // a배열에 b배열을  추가하는데 요소만 추가하는 것이 아니라 배열 함수 자체를 추가하므로 프로퍼티에 배열 b 자체가 생성된다.
var c = a.push(b, true); // b배열을 추가하고 true요소를 추가한다.
console.log(a); // ['a', 'b', 'c', ['x', 'y', 'z'], true] 를 출력한다.
/*
(4) ["a", "b", "c", Array(3)]
  0: "a"
  1: "b"
  2: "c"
  3: Array(3)
    0: "x"
    1: "y"
    2: "z"
    length: 3
    __proto__: Array(0)
    length: 4
    __proto__: Array(0)
*/

console.log(c); // 6을 출력
console.log([1, 2].concat(3, 4])); //concat은 원본 배열을 직접 변경하지 않고 복사본을 반환한다.

// 마지막 값 추가 push
// 선두에 값 추가 unshift
// 중간에 값 추가 splice

var arr = [1, 2, 3, 4, 5]; // 배열을 할당한다.
arr.push(6); // 마지막에 6을 추가한다. [1, 2, 3, 4, 5, 6]
arr[arr.length] = 6; // ???? 무엇을 핵실래 출력 값이 6이 나오지???
















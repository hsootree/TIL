// 기본 자료형 string을 위한 레퍼(wrapper) 객체

var str = 'Hello world!'; // 할당한다.
var res = str.toUpperCase(); // 대문자로 전환하여 할당한다.

console.log(res); // 출력 : HELLO WORLD -done!


// 1. String Constructor
// String 객체는 String() 생성자 함수를 통해 생성할 수 있다. 이때 전달된 인자는 모두 문자열로 변환된다.

  var strObj = new String('soo');
  console.log(strObj); // 출력 : [String: 'soo'] - 기대값과 다르다. vs-code 출력값과 브라우저 콘솔의 결과값이 상이한 이유가 있을텐데.. 브라우저 콘솔에서는 기대값이 출력됨을 확인함.
  // 기대값 : String {0: 's', 1: 'o', 2: 'o', length: 3, [[PrimitiveValue]]: 'soo'}
  console.log(strObj.toUpperCase()); // 출력 : SOO -done!

  var strObj = new String(1);
  console.log(strObj); // 출력 : [String: '1'] - 기대값과 다르다. vs-code 출력값과 브라우저 콘솔의 결과값이 상이한 이유가 있을텐데.. 브라우저 콘솔에서는 기대값이 출력됨을 확인함.
  // 기대값 : String {0: "1", length: 1, [[PrimitiveValue]]: "1"}

  var strObj = new String(undefined);
  console.log(strObj); // 출력 : [String: 'undefined'] - 기대값과 다르다. 브라우저 콘솔에서는 기대값이 출력됨을 확인함.
  // 기대값 : String {0: "u", 1: "n", 2: "d", 3: "e", 4: "f", 5: "i", 6: "n", 7: "e", 8: "d", length: 9, [[PrimitiveValue]]: "undefined"}

  // ????? VS 콘솔에서 출력 값 확인 하는 것 알아 볼것!!!

  var x = 'soo';
  var y = new String('soo');

  console.log(x == y); // 동등 연산자이므로 겉모양이 같으면 true. 
  console.log(x === y); // 일치 연산자이므로 겉모양과 타입이 같지 않으면 false.
  console.log(typeof x); // x의 타입은 string.
  console.log(typeof y); // y의 타입은 object.

// 2. String Property
// String.length : 문자열 내의 문자 갯수를 반환한다.

  var str = 'Hello';
  console.log(str.length); // 출력 : 5
  str = '안녕하세요';
  console.log(str.length); // 출력 : 5

// 3. String Method
// String.prototype.charAt() 
// 매개변수로 전달한 index 번호에 해당하는 위치의 문자를 반환한다. index 번호는 0 ~ (문자열 길이 - 1) 사이의 정수이다

  console.log(str.charAt(0)); // index 0 의 문자를 출력한다. 출력 : 안 - 41번 행에서 '안녕하세요'를 할당함.
  console.log(str.charAt(5)); // index 5 의 문자를 출력한다. 6번째 문자가 없으므로 출력되는 값이 없다? 출력 : 아무것도 나타나지 않음.

  for (var i = 0; i < str.length; i++) { // 0에서 시작하여 문자의 길이 까지 하나씩 증가하여 반복한다.
    console.log(str.charAt(i)); // i에 해당하는 index의 값에 위치한 문자를 출력한다. 기대값 : 안, 녕, 하, 세, 요 이 순서대로 개행을 하면서 출력됨. 
  }

// str.indexOf(searchValue[, fromIndex])
// searchValue: 검색할 문자 또는 문자열
// fromIndex : 검색 시작 index (생략할 경우, 0)

var str = 'Hollow World';
console.log(str.indexOf('l')); // l 문자를 검색 fromindex를 생략했으므로 0부터 시작함. 카운트는 어떻게 하지? 개수를 어떻게 구하지?
// for문을 사용하여 반복해서 찾고 출력이 되는 값을 더하면 갯수를 구할 수 있을까?
// 결과 : l 이 총 3개이므로 3 결과값이 출력되면 됨.
  


  

# 1. 산술 연산자 (Arithmetic Operators)
쉬어가는 페이지~ ㅋㅋ
`+ 연산자`는 덧셈 연산과 문자열 연결 연산을 수행함.
- 연산 대상이 모두 숫자인 경우 : 덧셈 연산
- 그 외의 경우 : 몬자열 연결 연산  


| Operator | Description |
|:-:|:-:|
| + | 덧셈 |
| - | 뺄셈 |
| * | 곱셈 |
| / | 나눗셈 |
| % | 나머지 |
| ++ | 증가 |
| -- | 감소 |

```
var x = 5;
var y = 2;
var z;

z = x + y;  // 7
z = x - y;  // 3
z = x * y;  // 10
z = x / y;  // 2.5
z = x % y;  // 1
z = x++;    // 5 선대입후증가
z = ++x;    // 7 선증가후대입
z = x--;    // 7 선대입후감소
z = --x;    // 5 선감소후대입

var str1 = '5' + 5; 
     // '55' 한쪽에 좌항이나 우항에 문자열이 오면 문자열 연결 연산자로 작동함. 뒤의 항을 숫자5를 문자 5로 변경한 후 합한다. 숫자는 숫자끼리 문자는 문자끼리 합해야 함.
원칙적으로 옳은 방법은 아님.
var str2 = 5 + '5';      // '55'
var str3 = 'Hello' + 5;  // 'Hello5'
```
# 2. 대입 연산자 (Assignment Operators)

| Operator | Example | Same As |
|:-:|:-:|:-:|
| = | x = y | x = y |
| += | x += y | x = x + y |
| -= | x -= y | x = x - y |
| *= | x *= y | x = x * y |
| /= | x /= y | x = x / y |
| %= | x %= y | x = x % y |
```
var x;

x = 10;   // 10
x += 5;   // 15
x -= 5;   // 10
x *= 5;   // 50
x /= 5;   // 10
x %= 5;   // 0

var txt1 = 'Good';
var txt2 = 'Morning';
var txt3 = txt1 + ' ' + txt2; // Good Morning

txt1 = 'What a very ';
txt1 += 'nice day'; // What a very nice day
```
# 3. 비교 연산자 (Comparison Operators)

| Operator | Description |
|:-:|:-:|
| == | 동등비교 (loose equlity) 형변환 후 비교한다.|
| === | 일치비교 (strict equality) 타입까지 일치하여야 true를 반환한다.|
| != | 부등비교 | ???
| !== | 불일치비교 |
| > | 관계비교 |
| < | 관계비교 |
| >= | 관계비교 |
| <= | 관계비교 |
| ? | 삼항 연산자 | ???

일치비교는 값도 같고 형도 같아야 함.
부등비교 - 같지 않다는 의미
그래서 불일치비교를 사용
일치, 불일치 비교는 3개짜리를 사용.

```
var x = 5

x == 5    // true
x == '5'  // true ? 문자로 인식하는 건가? 숫자로 인식하는건가? 숫자로 형변환을 해서 true값이 마오는 것임.
x == 8    // false

x === 5   // true 
x === '5' // false ?문자로 인식하는건가? 문자로 인식하여 일치하지 않음. false로 나타남.

x != 8    // true
x != 5    // false
x != '5'  // false

x !== 8   // true
x !== 5   // false
x !== '5' // true

x > 0     // true
x > 5     // false
x > 8     // false

x < 0     // false
x < 5     // false
x < 8     // true

x >= 0    // true
x >= 5    // true
x >= 8    // false

x <= 0    // false
x <= 5    // true
x <= 8    // true

//삼항연산자(ternary operator) 설명 듣고 그래도 모르겠으면 확실히 알고 가자. 
- 너무 긴거는 삼항연산자로 쓰면 가독성이 낮아져서 좋은 방법이 아니다.

추가된 예제 내용
// 조건 ? 조건이 ture일때 반환할 값 : 조건이 false일때 반환할 값
var condition = true;
var result = condition ? 'true' : 'false';
console.log(result); // 'true'

// id의 길이가 INPUT_ID_MIN_LEN보다 작으면 에러 메시지를 출력한다.
var id = 'lee';
var INPUT_ID_MIN_LEN = 5;
var errMsg = id.length < INPUT_ID_MIN_LEN ? '아이디는 5자리 이상으로 입력하세요' : '성공';
console.log(errMsg); // '아이디는 5자리 이상으로 입력하세요'


/ *
var now = new Date();
var greeting = 'Good' + ((now.getHours() > 17) ? ' evening.' : ' day.');
*/ 삭제됨
```

# 4. 논리 연산자 (Logical Operators)
| Operator | Description |
|:-:|:-:|
| && | and |
|  | or | |  ....2개 입력이 안된다..... ㅡㅜ
| ! | not |
```
// && (논리곱) 연산자
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false

// || (논리 합) 연산자
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat

// ! (논리 부정) 연산자
var n1 = !true;  // false
var n2 = !false; // true
var n3 = !'Cat'; // false
```

# 5. 타입 연산자 (Type Operators)
| Operator | Description |
|:-:|:-|
| typeof | 변수의 자료형을 문자열로 반환한다. null과 배열의 경우 object, 함수의 경우 function를 반환하는 것에 유의하여야 한다. |
| instanceof | 객체가 동일 객체형의 인스턴스이면 `true`를 반환한다. |
```
typeof 'John'                 // returns string
typeof 3.14                   // returns number
typeof NaN                    // returns number
typeof false                  // returns boolean
typeof [1, 2, 3, 4]           // returns object
typeof {name:'John', age:34}  // returns object
typeof new Date()             // returns object
typeof function () {}         // returns function
typeof myCar                  // returns undefined (if myCar is not declared)
typeof null                   // returns object


function Person(){}
var me = new Person()
me instanceof Person // true
```

# 6. !!
!!의 역할은 피연산자를 불리언값으로 변환하는 것이다.
객체(배열 포함)의 경우 빈 객체라도 존재하기만하면 true로 변환된다.
```
console.log(!!1);         // true
console.log(!!0);         // false
console.log(!!'string');  // true
console.log(!!'');        // false
console.log(!!null);      // false
console.log(!!undefined); // false
console.log(!!{});        // true
console.log(!![]);        // true
```
불리언 값이 아닌 타입에 불리언값을 불러 올 수 있다.


객체의 존재 확인 후 그 결과를 반환해야 하는 경우, !!를 사용하면 강제로 피연산자를 boolean으로 형 변환 할 수 있다.
```
function checkExist(obj) {
  return !!obj;
}

var obj;
console.log(checkExist(obj)); // false

obj = {};
console.log(checkExist(obj)); // true
```


# 7. 단축 평가 (Short-Circuit Evaluation)

| 평가식 | 평가 결과 |
|:-:|:-:|
| true anything | true |
| false anything | anything |
| true && anything | anything |
| false && anything | false |
```
var foo = 'Cat' && 'Dog'  // t && t returns 'Dog'
```
```
var foo = false && 'Cat'  // f && t returns false
```
```
var foo = 'Cat' || 'Dog'  // t || t returns 'Cat'
```
if문을 쓴ㄴ 겨우 사용함.

# IMMUTABILITY
객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴을 의미한다.

`객체는 참조 형태로 전달을 주고받는다.`

## 1. immutable value vs mutable value
기본자료형은 변경불가능한 값이다.
- boolean
- null
- undefined
- Number
- string
- symbol (ECMA6추가)

> 변경이 불가능하다는 뜻은 메모리 영역에서의 변경이 불가능하다는 뜻이다. 재할당은 가능하다.

```javascript
var statement = 'I am an immutable value'; // string은 immutable value

var otherStr = statement.slice(8, 17);

console.log(otherStr);   // 'immutable'
console.log(statement);  // 'I am an immutable value'
```

` 처리 후 결과의 복사본을 리턴하는 문자열의 메서드 slice()와는 달리 배열(객체)의 메서드 push()는 직접 대상 배열을 변경한다.`  
![Pass-by-reference](../images/Pass-by-reference_immutable.png)

## 2. 불변 데이터 패턴
의도하지 않은 객체의 변경이 발생하는 원인 : 레퍼런스를 참조한 다른객체에서 객체를 변경하는 것  

> 객체의 변경이 필요한 경우, 참조가 아닌 객체의 방어적 복사를 통해 새로운 객체를 생성한 후 변경한다.

- 객체의 방어적 복사
    - Object.assign
- 불변객체화를 통한객체변경 방지
    - Object.freeze

### 1. Object.assign
타깃 객체로 소스객체의 프로퍼티를 복사  

> 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타깃 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기된다.

```javascript
// Syntax
Object.assign(target, ...sources)
```

Object.assign을 사용해 기존 객체를 변경하지 않고 객체를 복사해 사용할 수 있다.

### 2. Object.freeze
불변 객체로 만들 수 있다.

> 하지만, 내부의 객체는 변경가능하다.

`내부 객체까지 변경 불가능하게 만드려면 Deep freeze 해야한다.`


### 3. Immutable.js
Object.assign과 Object.freeze를 사용해 불변객체를 만드는 방법은 번거러울 뿐더러 성능상 이슈가 있어서 큰객체에는 사용하지 않는 것이 더 좋다.

Facebook이 제공하는 Immutable.js를 사용하는 방법이 있다.

npm을 사용해 Immutable.js를 설치한다

```bash
$ npm install immutable
```

Immutable.js의 MAP모듈을 임포트해 사용한다.


# PROTOTYPE

## 1. 프로토타입 객체
객체 지향 상속개념과 같이 부모객체의 프로퍼티 또는 메서드를 상속받아 사용할 수 있게 한다. 이러한 부모객체 : 프로토타입 객체  

프로토타입 기반의 객체지향 프로그래밍 언어 : JAVASCRIPT

## 2. [[Prototype]] 프로퍼티 vs prototype 프로퍼티
- [[Prototype]] 프로퍼티
    - 모든 객체가 가지고 있는 프로퍼티
    - 객체의 입장에서 자신의 부모역할을 하는 프로토타입객체를 가리키며 함수객체의 경우 Function.prototype을 가리킨다.
- prototype 프로퍼티
    - 함수 객체만 가지고 있는 프로퍼티
    - 함수객체가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모 역할을 하는 객체를 가리킨다.
    - 함수가 생성될 때 만들어지며 constructor 프로퍼티를 가지는 객체를 가리킨다.
    - constructor 프로퍼티는 함수 객체 자신을 가리킨다.

## 3. constructor 프로퍼티
!!! 함수의 프로퍼티

## 3. prototype chain
객체에 접근하려는 프로퍼티나 메서드가 없으면 [[Prototype]]프로퍼티가 가리키는 링크를 따라 자신의 부모역할을 하는 프로토타입 객체의 프로퍼티나 메서드를 차례대로 검색 : 프로토타입 체인
만드는 방식과 상관없이 생성자 함수의 프로토타입은 생성자 함수가 된다.
```javascript
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! my name is ' + this.name);
  };
}
console.log(sayHello.prototype.__proto__);

```

### 1. 객체 리터럴 방식으로 생성된 객체의 프로토타입 체인
객체 리터럴방식으로 생성된 객체는 내장 함수인 Object()생성자 함수로 객체를 생성하는 것을 단순화 시킨것
내부적으로 Object 생성자 함수를 사용해 객체를 생성한다는 뜻

### 2. 생성자 함수로 생성된 객체의 프로토타입 체인

함수 표현식으로 함수를 정의할 때 함수 리터럴 방식을 사용한다.

>이때 Object.prototype 객체를 프로토타입 체인의 종점(End of prototype chain)이라 한다.

## 4. 기본자료형의 확장
ㅍㅍ
> 기본자료형으로 프로퍼티나 메소드를 호출할 때 기본자료형과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 된다.

`기본자료형은 객체가 아니기에 프로퍼티나 메서드를 직접 추가할 수 가 없다.`

>하지만 String 객체의 프로토타입 객체 String.prototype에 메소드를 추가하면 기본자료형, 객체 모두 메소드를 사용할 수 있다.

## 5. 프로토타입 객체의 확장
생성자 함수로 객체를 생성할 때 생성자 함수의 prototype 프로퍼티에 연결된 프로토타입 객체는 constructor 와 [[Prototype]]프로퍼티를 갖는다.
```javascript
function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

Person.prototype.sayHello = function(){
  console.log('Hi! my name is ' + this.name);
};

foo.sayHello();
```
## 6. 프로토타입 객체의 변경
객체 생성시 같이 생성된 프로토타입 객체를 변경할 때,
- 프로토타입 객체 변경시점 이전에 생성된 객체
    - 기존 프로토타입 객체에 [[Prototype]]링크를 연결
- 프로토타입 객체 변경시점 이후에 생성된 객체
    - 변경된 프로토타입 객체에 [[Prototype]]링크를 연결
객체가 만들어지고 난 후레 변경된 프로토타입 객체를 
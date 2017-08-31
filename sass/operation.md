## 4. 연산자 (Operation)
### 4.1. 숫자 연산자
> 상대값이든 절대값이든 동일한 단위는 연산이 가능하지만 그렇지 않은 경우는 연산이 불가능하다.

```css
$width: 100px;

#foo {
  width: $width + 10; // 110px
}

#bar {
  width: $width + 10in; // 1060px
}
```
> CSS에서의 /는 나눗셈의 의미가 아니라 값을 분리하는 의미를 갖는다.
> 따라서 Sass의 / 연산자를 사용하기 위해서는 몇가지 조건이 필요하다.

- 변수에 대해 사용
- 괄호 내에서 사용
- 다른 연산의 일부로서 사용



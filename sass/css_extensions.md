# 4.3. Sass - CSS Extensions
## 4.3.1. Nesting
> nesting은 3단계 이상 되지 않도록 제공해야 한다.
셀렉터가 복잡해진다.

## 4.3.2. @-Rules and Directives
###4.3.2.1. @import
> 기존의 CSS @import보다 편리한 기능을 제공한다.

@extend 사용하지 않는 것이 좋다.
> 에러의 공통적인것을 모아서 쓸때, 특정한 에러를 사용할때 에측이 불가능하므로 사용은 가급적 자제한다. 부작용에 대해서 알아보자. Mixin을 사용할 것을 추천한다.


## 4.3.3. 조건과 반복
### 4.3.3.1 if()
조건, 참일때 반환할 값, 거짓일때 반환할 값
```sass
if(condition, if_true, if_false)

$type: ocean;

p {
  color: if($type == ocean, blue, black); // color: blue;
}
```





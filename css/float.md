# 9. CSS3 Folat 
http://poiemaweb.com/img/layout.png  

## 9.1. 정렬
수평으로 정렬된다.
```
float: lef;
float: right;
clear: both;
```
** folat right인 경우 오른쪽에 먼저 가서 붙은 순서대로 정렬이 된다.
```
1 2 >> 2 1
```
### 9.2. float 프로퍼티 관련 문제 해결 방법
높이 값이 없는 부모요소에 높이 값을 주는 것과 같은 효과를 주기 위해 `overflow: hidden`을 준다. 부수효가(side effect)가 있어서 다른 요소에 영향을 미칠 수 있다.

### 9.2.1. float 프로퍼티가 선언된 요소와 float프로퍼티가 선언되지 않은 요소간 margin이 사라지는 문제


### 9.2.2. float 프로퍼티를 가진 자식 요소를 포함하는 부모 요소의 높이가 정상적으로 반영되지 않는 문제
-  float 프로퍼티를 가진 요소의 부모 요소(wrap)에 overflow: hidden 프로퍼티를 선언하는 것  
- 추천하고 싶지 않은 코딩
- 빈 요소를 사용하여 가상 요소 선택자를 만들어 사용
```
.clearfix:after {
  content: "";
  display: block;
  clear: both;
} 
```
** float 프로퍼티 대신 `inline-block`를 선언하는 방법도 있다.

## 9.3. Layout Examples




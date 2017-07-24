# 10. CSS3 Inheritance & Cascading

## 10.1. 상속(Inheritance)
상속되는 프로퍼티
```
visibility
opacity
font
color
line-height
text-align
white-space
```
상속되지 않는 프로퍼티 (layout 관련)
```
width/height
margin
padding
border
box-sizing
display
background
vertical-align
text-decoration
position
top/right/bottom/left
z-index
voerflow
float

```
- 요소에 따라 상속되지 않는 것도 있음. 
ex) botton

- 명시적으로 상속 지정
```
.text-red button{
  color: inherit;
}
```

## 10.2. 캐스캐이딩 (Cascading)
css 적용 우선순위
- 중요도
  - css가 선언된 위치
    1. head 요소 내의 style 요소
    2. head 요소 내의 style 요소 내의 @import 문
    3. <link> 로 연결된 CSS 파일
    4. <link> 로 연결된 CSS 파일 내의 @import 문
    5. 브라우저 디폴트 스타일시트

- 명시도
  - 명확하게 특정
  - !important > 인라인 스타일 > 아이디 선택자 > 클래스/속성/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성
  ```
    p        { color: red !important; }
    #thing   { color: blue; }

    div.food { color: chocolate; }
    .food    { color: green; }
    div      { color: orange; }
  ```
- 선언순서
  - 나중에 선언된 스타일 우선 적용
```
    p { color: blue; }
    p { color: red; }

    .red { color: red; }
    .blue { color: blue; }

  <p>Will be RED.</p>
  <p class="blue red">Will be BLUE.</p>
```







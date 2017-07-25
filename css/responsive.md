# 14. CSS3 Responsive Web Design
반응형 웹디자인
## 14.1. Responsive Web Design 개요
모바일 사용이 증가함에 따라 기본 소스코드를 모바일에 맞춰 만들고 난 후 데스크 탑을 추가로 만듦.
모바일 우선적으로 만드는 추세임.

## 14.1.1. viewport meta tag
브라우저가 표시하는 영역
데스크탑용 브라우저는 상하좌우 모서리로 확대 축소가 가능하나 모바일
너비 스크롤은 생성되지 않도록 해야 함.
device-width 다비이스 폭에 맞춰서~

viewport meta tag는 브라우저의 화면 설정과 관련된 정보를 제공
!!!! table 작성해서 추가~
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 14.1.2. @media
미디어 타입(print, screen…)

```
    @media screen {
      * { color: red; } 룰셋
    }
    @media print {
      * { color: blue; }
    }
```
스크린에서는 붉은 색 인쇄할때는 블루
> 반응형 웹 디자인에 사용되는 핵심 기술은 @media 이다.

```
@media not|only mediatype and (expressions) {
  CSS-Code;
}

```
(and 표현식도..) 여러번 사용 가능

전형적인 미디어 사용
```
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}

```



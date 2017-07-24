# 11. CSS3 Effect

## 11.1. 벤더 프리픽스( Vendor Prefix)
Can I use (link) 을 참고하여 브라우저 호환을 고려
```
* {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
}

Browser	: Vendor Prefix
IE or Edge :	-ms-
Chrome :	-webkit-
Firefox :	-moz-
Safari :	-webkit-
Opera :	-o-
iOS Safari :	-webkit-
Android Browser :	-webkit-
Chrome for Android :	-webkit-
```
## 11.4. 트랜지션 (Transition)
요소를 변형시키는 것

자동으로 발동되지 않기 때문에 :hover 와 같은  가상 클래스 선택자(Pseudo-Classes) 또는 JavaScript의 onclick 이벤트와 같은 부수적인 액션에 의해 발동한다. 위 예제의 div 요소에 적용된 transition은 이와 같은 부수적 액션없이는 어떤 효과도 볼 수 없다.

### 11.4.1 transition-property
복수의 프로퍼티를 지정하는 경우 쉼표(,) 로 구분한다.
```
transition-duration: 2s, 2s;
```
트랜지션의 대상이 디ㅗㄹ 수 있는 CSS 프로퍼티는 
```
// Box model
width height max-width max-height min-width min-height
padding margin
border-color border-width border-spacing
// Background
background-color background-position
// 좌표
top left right bottom
// 텍스트
color font-size font-weight letter-spacing line-height
text-indent text-shadow vertical-align word-spacing
// 기타
opacity outline-color outline-offset outline-width
visibility z-index
```
Layout에 영향을 주는 프로퍼티
```
width height padding margin border
display position float overflow
top left right bottom
font-size font-family font-weight
text-align vertical-align line-height
clear white-space
```
### 11.4.2 transition-duration
프로퍼티값을 지정하지 않을 경우 기본값 0s이 적용되어 어떠한 트랜지션 효과도 볼 수 없다.
속성 지속시간 순으로 작성

### 11.4.3 transition-timing-function
변화의 흐름, 시간에 딸느 변화 속도를 지정.

????????? 표 만드는거 알아보기!!!!!!!

### 11.4.4 transition-delay


### 11.4.5 transition
값을 지정하지 않은 프로퍼티에는 기본값이 지정된다. 지정 방법은 다음과 같다.
```
transition: property duration function delay
```

## 11.5. 애니메이션 (Animation)


### 11.5.1 @keyframs
https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes  참고
```
 /* @keyframes rule */
    @keyframes move {
      /* keyframe */
      from {
        left: 0;
      }
      /* keyframe */
      to {
        left: 300px;
      }
```

### 11.5.2 animation-name

### 11.5.3 animation-duration

### 11.5.4 animation-timing-function

### 11.5.5 animation-delay

### 11.5.6 animation-iteration-count

### 11.5.7 animation-direction

### 11.5.8 animation-fill-mode

### 11.5.9 animation-play-state

### 11.5.10 animation

## 11.6. 트랜스폼 (Transform)

### 11.6.1 2D 트랜스폼 (2D Transform)
변환함수 (transform function)
!!!! 표 정리.
translate(x,y) 자기자신의 %로 이동
*** 여기서는 기준이 부모가 아닌 자기자신요소 임을 주의!


#### 11.6.1.1. transform

### 11.6.2 3D 트랜스폼 (3D Transform)
!! 코드펜(codepen) 참고해서 






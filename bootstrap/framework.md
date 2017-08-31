# 1. Bootstrap
코딩의 재사용이 가능한 프레임워크
- Node.js 플랫폼
부트스트랩 CDN
MaxCDN 의 사람들은 고맙게도 부트스트랩의 CSS 와 자바스크립트를 CDN 으로 지원합니다. 이를 사용하려면 아래의 부트스트랩 CDN 링크들을 사용하세요. 서버에서 제공하는 링크 연결은 바람직한 방법은 아니다.
```
<!-- 합쳐지고 최소화된 최신 CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

<!-- 부가적인 테마 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<!-- 합쳐지고 최소화된 최신 자바스크립트 -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
```
package-json 이 없는 경우 
npm init --y 패키지 제이슨을 만드는 명령어

# 2.

## 1. Media Query
폭 간격마다 정의된 것이 있으므로 확인!!
```
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
/* Extra small devices (phones, less than 768px) */
/* No media query since this is the default in Bootstrap */

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

```
## 2. Container
- Container 원하는 컨테이너를 사용한다.
4개의 break point 를 갖는다.

bootstrap.css
하위에서 우선순서 적용되므로 원본은 두고 우리가 사용할 css 파일을 수정하여 사용한다.

## 3. Grid system
> 그리드 레이아웃을 구성 시에는 반드시 .row(행)를 먼저 배치하고 행 안에 .col-*-*(열)을 필요한 갯수만큼 배치한다. 즉 container 내에 .row(행)을 먼저 배치하고 그 안에 .col-*-*(열)을 배치한다. 그리고 콘텐츠는 .col-*-* 내에 배치한다.
```
.container or .container-fluid
  .row
    .col-xs-#
      contents /* 요소일수도 텍스트 일수도 있음. */
    .col-xs-#
      contents
  .row
    .col-xs-#
      contents
    .col-xs-#
      contents
```
열의 구성에서
> col-크기-1~12

### 3.2.1. .col-xs-* class

```
.col-xs-1 {
  width: 8.33333333%;
}

.col-xs-2 {
  width: 16.66666667%;
}

/* .col-xs-3 ~ .col-xs-12 */

.col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
  float: left;
}

.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
```
```
/* Extra small devices (phones, less than 768px) */
/* Rule set for col-xs-* class */

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) {
  /* Rule set for col-sm-* class */
}
/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) {
  /* Rule set for col-md-* class */
}
/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  /* Rule set for col-lg-* class */
}
```
```
<div class="col-xs-12 col-sm-6">xs-12 sm-6</div>
```
결과적으로 의미가 없어 보이지만 그 외의 속성 값이 적용 될 수 있음에 유의하자~!!!

### 3.3.2 Mobile, tablet, desktop
breakpoint에 해당하는 class가 선언되어 있지 않다면 하위 breakpoint에 해당하는 class가 적용된다.

## 3.4 Nesting columns

## 3.6. Column ordering
`.col-*-push-* `와 `.col-*-pull-*` 클래스를 사용하여 열의 순서를 변경할 수 있다.


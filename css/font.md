# 12. CSS3 Web Font
웹 디자인 타이포그래피 (typography)

## WEb Font
!!!노트 별도 정리한것 이미지로도 첨부하여 재 정리

## CDN(Content Delivery Network) 링크 방식
문제점은 접속이 차단 될 경우 속수무책임.

[google font] https://fonts.google.com/  
```
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

* { font-family: 'Nanum Gothic', sans-serif; }
```
## 서버 폰트 로딩 방식
@font-face 규칙으로 폰트를 등록하고 font-family 프로퍼티로 폰트를 선택하여 사용할 수 있다.
.woff 폰트의 종류

```
/* IE 9~ & all browsers */
@font-face {
  font-family: myFontName;
  src: url("myFont.woff");
}

* { font-family: myFontName, sans-serif; }
```
브라우져마다 지원하는 폰트 파일 형식이 다름.
```
@font-face {
  font-family:"Nanum Gothic";
  src:url("NanumGothic.eot"); /* IE 9 호환성 보기 모드 대응 */
  src:local("☺"),             /* local font 사용 방지. 생략 가능 */
      url("NanumGothic.eot?#iefix") format('embedded-opentype'), /* IE 6~8 */
      url("NanumGothic.woff") format('woff'); /* 표준 브라우저 */
}

* { font-family: "Nanum Gothic", sans-serif; }
```
> 폰트를 영문과 한글을 혼용하는 경우 영문 > 한글 폰트를 지정.  
한글 폰트 부터 지정하면 영문에도 한글 폰트가 지정된다.
```
font-family: 'Lora', 'KoPub Batang', 'Times New Roman', serif;
```





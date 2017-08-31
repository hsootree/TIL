# Web Form
## HTML Form
## HTML form의 기본동작
> HTML form을 전송하면, 입력된 정보가 기본적으로 `percent encoding` 되어 요청됨
`GET method`
```
GET /search?query=%EA%B0%9C&sort=latest HTTP/1.1
...
```
`POST method`
```
POST /form HTTP/1.1
Content-Type: application/x-www-form-urlencoded
...

home=Cosby&favorite+flavor=flies
```
## multipart/form-data
- 기본 설정(percent encoding)으로는 폼으로 `파일을 업로드하는 것은 불가능`
- (클라이언트 측) form 태그에 `enctype="multipart/form-data" `속성을 적용하면 파일 업로드 가능
- (서버 측) body-parser 미들웨어는 multipart/form-data 형태의 요청을 지원하지 않음 (multer 필요)
: multer [https://www.npmjs.com/package/multer]

## HTML Form 예제
[Link](https://glitch.com/edit/#!/wpsn-form-example)

- UUID
- Redirection after submission
- Form validation

[UUID](https://ko.wikipedia.org/wiki/%EB%B2%94%EC%9A%A9_%EA%B3%A0%EC%9C%A0_%EC%8B%9D%EB%B3%84%EC%9E%90)

## Next
서비스 개발 실습 (URL Shortener)
서비스 개발 실습 - 개발부터 배포까지


# 서비스 개발 실습 - URL shortener
- [goo.gl] (https://goo.gl/)
- [bit.ly] (https://bit.ly/)
- [urlo.cc](https://urlo.cc/)


## 요구사항
- 긴 URL을 한 명의 관리자만 만들 수 있음
- 짧은 URL은 누구나 이용할 수 있음

### 시나리오 설계


### 화면 설계



# 과제 소개
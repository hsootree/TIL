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


# 서비스 개발 실습 - URL shortener




# 과제 소개
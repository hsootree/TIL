# GraphQL
[GraphQL](https://seungha-kim.github.io/wpsn-handout/2-3-2-graphql.html)

## REST API의 단점
- 각각의 자원마다 경로가 따로 있음. 즉, 여러 자원이 동시에 필요한 경우에는 요청을 여러 번 보내야 함 (요청의 횟수 면에서 비효율적)
- (보통의 경우) 자원의 필요한 속성만 얻어올 수 없음. 즉, 일부 속성의 필요하더라도 전체 속성을 가져와야만 함 (요청의 용량 면에서 비효율적)

## GraphQL
- Facebook에서 2015년 공개한 데이터 질의 언어
- REST API를 대체하기 위해 만들어짐
- 클라이언트에서 필요한 데이터의 구조를 GraphQL 언어로 정의한 후 질의할 수 있고, 서버는 그에 맞게 구조화된 데이터를 응답
- 서버에서는 GraphQL 질의를 해석하기 위해 별도의 해석기가 필요하며, [여러 언어의 구현체](http://graphql.org/code/)가 나와있는 상태

## Example
![](../images/graphql-query.png)

## Github API 실습
https://developer.github.com/v4/explorer/













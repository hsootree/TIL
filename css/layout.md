# 13. CSS3 Layout
>`float` 궁극 목적은 텍스트 편집시 이미지를 사용할 때 자연스러운 텍스트 흐름을 제공하는 것이나 이러한 특성을 이용하여 layout에 사용된다.

참고 사이트
https://www.awwwards.com/ 

## 13.1 Header & Navigation Bar
최소한의 Reset CSS를 추가 한 링크들의 리스트이다. 
```
 /*Simple Reset CSS*/ㅍ
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      color: #58666e;
      background-color: #f0f3f4;
    }/* 상속이 되는 프로퍼티 */
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
```


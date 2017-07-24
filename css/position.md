# 8. CSS3 Position
## 1. position 프로퍼티
요소의 위치를 정의
`top, bottom, left, right` 를 사용
```
position: absolute;
top: 100px;
left: 50px;
```
### 1.1 static (기본위치)
부모 요소의 위치를 기준으로 배치된다.
좌표 프로퍼티를 같이 사용할 수 없으며 사용할 경우 무시된다.
```
tatic-box {
      position: static;
      background: #2E303D;
      color: #e55c3c;
      font-weight: bold;
      text-align: center;
      line-height: 150px;
    }
```

### 1.2 relative (상대위치)



### 1.3 absolute (절대위치)
부모 요소에 static 제외한 relative, absolute, fixed 프로퍼티가 선언되어 있는 무보 또는 조상 요소를 기준으로 위치가 결정된다.
한 예로 프로퍼티가 선언되지 않은 부모나 조상 요소가 있으면 body를 기준으로 한다.


### 1.4 fixed (고정위치)
스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.
flexed 프로퍼티 선언시, width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 한다.
** 4개의 모서리 또는 top, bottom 위치에 코딩
```

```


## 2. z-index 프로퍼티
큰 숫자값이 화면 전면에 출력된다.


## 3. overflow 프로퍼티








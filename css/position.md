# 8. CSS3 Position
## 8.1. position 프로퍼티
요소의 위치를 정의
`top, bottom, left, right` 를 사용
```
position: absolute;
top: 100px;
left: 50px;
```
### 8.1.1 static (기본위치)
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

### 8.1.2 relative (상대위치)
relative-box 클래스 요소의 width, height가 부모 요소와 동일하다. 
> 이는 상속에 의한 것이 아니라(width, height는 상속되지 않는다.)


### 8.1.3 absolute (절대위치)
부모 요소에 static 제외한 relative, absolute, fixed 프로퍼티가 선언되어 있는 무보 또는 조상 요소를 기준으로 위치가 결정된다.
한 예로 프로퍼티가 선언되지 않은 부모나 조상 요소가 있으면 body를 기준으로 한다.

> Relative 와 Absolute 차이점
> absolute를 이용해서 움직이려 해야한다. relative는 부모에게만 적용하라!


### 8.1.4 fixed (고정위치)
스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.
flexed 프로퍼티 선언시, width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 한다.
** 4개의 모서리 또는 top, bottom 위치에 코딩
물위의 데크와 같아서 콘텐츠가 떠 있어 다음에 오는 콘텐츠가 fixed 된 콘텐츠에 가려 안 보이는 경우가 발생한다.
```

```


## 8.2. z-index 프로퍼티
큰 숫자값이 화면 전면에 출력된다.


## 8.3. overflow 프로퍼티
자식 요소가 부모요소의 영역을 벗어났을 때 처리방법을 정의한다.

|  프로퍼티 값  | Description |
|----------|-------------|
| Visible   | 영역을 벗어난 부분을 표시(기본값)
|  Hidden  | 영역을 벗어난 부분을 잘라내 보이지 않게 한다.
| Scroll | 영역을 벗어난 부분을 잘라내 보이지 않게 하지만 스크롤바를 이용하여 보이지 않은 콘텐츠를 확인 할 수 있다. (현재 대부분 브라우저는 auto과 동일하게 작동한다)
|  Auto  | 영역을 벗어난 부분이 있을 때만 스크롤 표시를 한다.

> 특정방향으로만 스크롤을 표시하고자 할때는 OVERFLOW-X 또는 OVERFLOW-Y 프로퍼티를 사용한다.








## DOM tree는 네 종류의 노드로 구성된다.


## DOM tree
> DOM tree는 브라우저가 HTML 문서를 로드한 후 생성하는 모델을 의미하는데 객체의 트리로 구조화되어 있기 때문에 DOM tree라 부른다.

### 문서 노드(Document Node)
트리의 최상위에 존재하며 각각 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다. 즉 DOM tree에 접근하기 위한 시작점(entry point)이다.
### 요소 노드(Element Node)
요소 노드는 HTML 요소를 표현한다. HTML 요소는 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화한다. 따라서 요소 노드는 문서의 구조를 서술한다고 말 할 수 있다. 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 한다. 모든 요소 노드는 요소별 특성을 표현하기 위해 HTMLElement 객체를 상속한 객체로 구성된다. (그림: DOM tree의 세부 구성 참고)
### 어트리뷰트 노드(Attribute Node)
어트리뷰트 노드는 HTML 요소의 어트리뷰트를 표현한다. 어트리뷰트 노드는 해당 어트리뷰트가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현된다. 따라서 해당 요소 노드를 찾아 접근하면 어트리뷰트를 참조, 수정할 수 있다.
### 텍스트 노드(Text Node)
텍스트 노드는 HTML 요소의 텍스트를 표현한다. 텍스트 노드는 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없다. 즉 텍스트 노드는 DOM tree의 최종단이다.(html 콘텐츠라vv 함.)

# DOM Query / Traversing (요소에의 접근)
## 

es6가 등장하는 순간 유사배열문제가 없어졌다!!!

> querySelectorAll 메소드를 사용하여 non-live NodeList를 반환하게 한다.

> document.getElementsByTagName(tagName)
태그명으로 요소 노드를 모두 선택한다.
Return: HTMLCollection (live)
모든 브라우저에서 동작

## DOM Traversing (탐색)
parentNode
  - 부모 노드를 탐색한다.
  - Return: HTMLElement를 상속받은 객체
  - 모든 브라우저에서 동작


## 4.1 텍스트 노드에의 접근/수정

요소의 텍스트는 텍스트 노드에 저장되어 있다. 텍스트 노드에 접근하려면 아래와 같은 수순이 필요하다.

해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식이다.
firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
텍스트 노드의 유일한 프로퍼티(nodeValue)를 이용하여 텍스트를 취득한다.
nodeValue를 이용하여 텍스트를 수정한다.

innerText 아예 쓰지 마세요. 문제가 많음.

## 4.4 DOM 조작 방식
innerHTML 프로퍼티를 사용하지 않고 새로운 콘텐츠를 추가할 수 있는 방법은 DOM을 직접 조작하는 것이다. 한개의 요소를 추가하는 경우 사용한다. 이 방법은 다음의 수순에 따라 진행한다.

1. 요소 노드 생성
createElement() 메소드를 사용하여 새로운 요소 노드를 생성한다. createElement() 메소드의 인자으로 태그 이름을 전달한다.
2. 텍스트 노드 생성
createTextNode() 메소드를 사용하여 새로운 텍스트 노드를 생성한다. 경우에 따라 생략될 수 있지만 생략하는 경우, 콘텐츠가 비어 있는 요소가 된다.
3. 생성된 요소를 DOM에 추가
appendChild() 메소드를 사용하여 생성된 노드를 DOM tree에 추가한다. 또는 removeChild() 네서드를 사용하여 DOM tree에서 노드를 삭제할 수도 있다.

## 4.5 insertAdjacentHTML() 
가장 제이쿼리틱할 수 있음.

> insertAdjacentHTML(position, string)
인자로 전달한 텍스트를 HTML로 파싱하고 그 결과로 생성된 노드를 DOM 트리의 지정된 위치에 삽입한다. 첫번째 인자는 삽입 위치, 두번째 인자는 삽입할 요소를 표현한 문자열이다. 첫번째 인자로 올 수 있는 값은 아래와 같다.
  - ‘beforebegin’
  - ‘afterbegin’
  - ‘beforeend’
  - ‘afterend’
모든 브라우저에서 동작한다.

##  innerHTML vs. DOM 조작 방식 vs. insertAdjacentHTML()

## style
style 프로퍼티를 사용하면 inline 스타일 선언을 생성한다. 특정 요소에 inline 스타일을 지정하는 경우 사용한다.
```javascript
var four = document.getElementById('four');

// inline 스타일 선언을 생성
four.style.color = 'blue';

// font-size와 같이 '-'으로 구분되는 프로퍼티는 카멜케이스로 변환하여 사용한다.
four.style.fontSize = '2em';
```








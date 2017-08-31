// DOM Query / Traversing (요소에의 접근)


/*
<!DOCTYPE html>
<html>
  <head>
    <style>
      .red  { color: #ff0000; }
      .blue { color: #0000ff; }
    </style>
  </head>
  <body>
    <div>
      <h1>Cities</h1>
      <ul>
        <li id="one" class="red">Seoul</li>
        <li id="two" class="red">London</li>
        <li id="three" class="red">Newyork</li>
        <li id="four">Tokyo</li>
      </ul>
    </div>
  </body>
</html>
*/

// id로 하나의 요소를 선택한다.
// var elem = document.getElementById('one');
// 클래스 어트리뷰트의 값을 변경한다. 
// elem.className = 'blue';

// CSS 셀렉터를 이용해 요소를 선택한다.
var elem = document.querySelector('li.red');
// 클래스 어트리뷰트의 값을 변경한다.
elem.className = 'green';

// HTMLCollection을 반환한다.
var elems = document.getElementsByClassName('red'), i;

for (i = 0; i < elems.length; i++) {
  // 클래스 어트립트의 값을 변경한다.
  elems[i].className = 'blue';
}




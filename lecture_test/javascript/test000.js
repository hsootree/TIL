/* 클로저로서의 중첩된 함수 

var x = "global";
function f() {
  var x = "local";
  function g() {
    alert(x);
  }
  g();
}
f();

*/


function Rectangle (w, h) {
  this.width = w;
  this.height = h;
}
var rect1 = new Rectangle(2,4);
var rect2 = new Rectangle(8.5, 11);

/* 
생성자 함수에는 일반적으로 반환값이 없다. 
생성자 함수는 this키워드가 가리키는 객체를 초기화시킬 뿐 아무런 값도 반환하지 않는다. 
하지만,
생성자 함수에서 결과값으로 객체를 반환하면 반환값을 가질 수 있으며, 이때 반환되는 객체는 new 문장의 결과값이 된다. 그리고 생성자 안의 this가 가리키고 있던 객체는 폐기된다.
*/

function numbering() {
  var i = 0;
  while (i < 10) {
    document.write(i);
    i += 1;
  }
}

function numbering(){
  var i = 0;
  while (i < 20) {
    document.write(i+"<br />)");
    i += 1;
  }
}
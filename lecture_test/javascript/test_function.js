/* function

함수 : 코드의 재사용성을 높이기 위한 기술.
function 이름 (매개변수) {실행코드}의 형태를 가진다.
실행할때는 이름(인자)를 하면 실행코드에서 return값이 출력된다.
반복문과 같이 반복할 수 있다는 특성이 있지만 반복문은 단순반복이고 함수는 입력값에 따라 출력값이 다르게
반복되고 여러군데에서 사용할 수 있다.
코드의 재사용성을 높일 수 있고 유지보수가 용이해지며 가독성 또한 좋아진다.
변수이름 = function(매개변수) {실행코드}의 형태로도 함수를 정의할 수 있고
(function(매개변수) {실행코드})(); 이런식의 형태는 익명함수로 함수를 정의하고 바로 호출해야할 때 사용한다.
*/

function numbering() {
  i = 0;
  while(i < 10) {
    console.log(i);
    i += 1;
  }
}
// numbering();

//return 
function get_member1() {
  return 'hsootree';
}
function get_menber2() {
  return 'sootree';
}
alert(get_member1());
alert(get_member2());

// argument 인자
function get_argument(arg) { // arg : 매개변수 
  return arg;
}
alert(get_argument(1));
alert(get_argument(2));

// 복수 인자
function get_arguments(arg1, arg2) {
  return arg1 + arg2;
}
alert(get_arguments(10, 20));
alert(get_arguments(20, 30));

// 함수를 정의 하는 다른 방법
numbering = function () {
  i = 0;
  while(i < 10) {
    console.log(i);
    i += 1;
  }
}
/*
function numbering() {
  i = 0;
  while(i < 10) {
    console.log(i);
    i += 1;
  }
}*/
(function () {
  i = 0;
  while(i < 10) {
    console.log(i);
    i += 1;
  }
})(); // 정의된 함수를 괄호로 묶고 바로 호출을 하는 것을 '익명함수'라 함다.



// 첫번째 폼의 체크박스 제어
// option 1~3 의 체크 되는 상황 1- 모두 체크 될때, 2- 일부만 체크 될때, 3- 모두 체크 되지 않을 때 
// input readdonly 에 체크 된 것의 수를 표시
// 토글키로 모두 체크 또는 해제
// 모두 체크 되었을 때 check on
// 모두 체크 해제되었을때 check off 

// 두번째 약관동의 체크되는 상황 - checked 속성을 요소에 입력
// 체크되지 않으면 alert로 약관 동의를 요구



// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]



// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]

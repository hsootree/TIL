// 문자열은 유사배열이다. 

/*
function numPY(s) {
  var cntP = 0;
  var cntY = 0;
  s = s ? s : ''; // if문과 같은 것, false로 간주 되는 값을 줌으로써 에러방지 - 방어 코드
  var LowerCaseStr = s.toLoerCase();
  // console.log(lowerCaseStr); 에러나지 않으면 다음 코드 진행
  for (var i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === 'p') cntP++; // cntp 를 선언해준다. y도..
    if (lowerCaseStr[i] === 'y') cntY++; // cntp 를 선언해준다. y도..
  }
  return cntP === cntY;
}
console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false

*/


// 
function numPY(s) {
 //reutrn s.match(/p/gi).length === s.match(/y/gi).length; 
 // ''.ma 툴팁을 확인해보고 match의 내용을 확인해볼 것, length를 찍으면 숫자를 확인 할 수가 있다.
  s = s ? s : ''; // 인자 값이 없을 때 에러를 방지하기 위한 방지 코드
  return (s.match(/p/gi) ? s.match(/p/gi).length : 0 ) === (s.match(/y/gi) ? s.match(/y/gi).length : 0 );
 
}
console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // false
console.log(numPY()); // true




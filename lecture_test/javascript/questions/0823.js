/*
17. 배열의 인접한 요소곱 중 가장 큰 값 구하기

정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

function adjacentElementsProduct(arr) {

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
*/
function adjacentElementsProduct(arr) {
  // 반복문으로 입력할 변수 arr의 인덱스 길이만큼 반복한다. 증가할 변수 i를 인덱스의 값으로 정의한다.

  // i값이 1씩 증가할때마다 multifly 변수에 인덱스의 값을 불러와서 배열 요소의 값을 곱한다.

  // 결과 값을 배열로 추가한다.

  // 추가된 배열의 요소중 가장 큰 수를 찾는다. (for문으로 만들것인지, max함수를 사용할 것인지는 선택)
  for (let i = 0; i < arr.length; i++) {
    function multifly(i){
      arr.indexOf(i) * arr.indexOf(i++);
    } 
    let multiArr = [];
    multiArr.push(multifly);

  }
}
  
  console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
  
/*
#18. 배열에서 특정 값만을 구하기

배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라

function getArray(arr) {

}

var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]

*/


/*
#19. 평균구하기

배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

function average(array){

}

var testArray = [5, 3, 4];
console.log(average(testArray)); // 4 (edited)
*/


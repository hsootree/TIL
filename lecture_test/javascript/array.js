

var emptyArr = []; // 빈 배열을 할당한다.

var numbersArr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
]; // 기수 배열을 할당한다.

console.log(emptyArr[1]); // emptyArr 배열의 인덱스 1번쩨 값을 출력한다.
console.log(numbersArr[1]); // numbersArr 배열의 인덱스 1번째 값을 출력한다.
console.log(emptyArr.length); // emptyArr 배열의 인덱스 총 수를 출력한다. 
console.log(numbersArr.length); // numbersArr 배열의 인덱스 총 수를 출력한다.


var total = 0;
[1, 3, 5, 7, 9].forEach(function (element, index, array) {
  console.log('[' + index + '] =' + element);
  total += element;
});

console.log(total);

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  // entry는 array의 요소값
  array.forEach(function (entry) {
    this.sum += entry; // 2번째 인자 this를 전달하지 않으면 this === window
    this.count++;
  }, this);
};
*/
var obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum);   // 16


/*

(function printNow() {
  var today = new Date();

  var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
  var day = dayNames[today.getDay()];
  var year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate(),
      hour = today.getHours(),
      minute = today.getMinutes(),
      second = today.getSeconds();
      ampm = hour >= 12 ? 'PM' : 'AM';

      // 12시간제로 변경
      hour = hour % 12;
      hour = hour ? hour : 12; // 0 => 12

      // 10미만인 분과 초를 2자리로 변경
      minute =nminute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;

      var now = year + '년' + month + '월' + date + '일' + day + '' + hour + ':' + minute + ':' + second + '' + ampm;

      console.log(now);
      setTimeout(printnow, 1000);
}());

*/


// 요일 알기 -- 과제로 해올것
/*
2016년 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까? 두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하세요.

요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다. 예를 들어 a=5, b=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환한다.

function getDayName(a,b){

}
console.log(getDayName(5, 24)); // TUE

*
// 2016년 1월 1일은 금요일이다.
var theday = new Date();

// 출력되는 요일을 나타내는 정수를 반환한다.
var getDayName = ['sun', 'MON', 'TUE', 'WED', 'THU'
, 'FRI', 'SAT'];
// 년, 월, 일을 할당한다.
var year = theday.getFullYear(),
    month = theday.getMonth() + 1,
    date = theday.getDate(),

function getDayName(a , b) {  // 

  a = getDayName.getMonth();
  b = getDayName.getDate();

}
console.log(getDayName.toString(5, 24));


/*

str.substring(indexA[, indexB])
// indexA : 0 ~ 해당 문자열 길이 -1 까지의 정수


var str = 'Hello World'; // str.length == 11

var res = str.substring(1, 4);
console.log(res); // ell

// 첫번째 인수 > 두번째 인수 : 두 인수는 교환된다.
res = str.substring(4, 1);
console.log(res); // ell

// 두번째 인수가 생략된 경우 : 해당 문자열의 끝까지 반환한다.
res = str.substring


*
function numPY(s){

  
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
*/
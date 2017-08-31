// 20. 요일 구하기
/*
2016년 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까? 두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하세요.

요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다. 예를 들어 a=5, b=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환한다.

// 문제 : 주어진 함수 안에 내용을 채워 넣으시오.
function getDayName(a,b){

}

console.log(getDayName(5, 24)); // TUE

*/



// 풀이 1.

// Built-in 함수를 사용하는 것으로 활용할 줄 아는 지를 확인해볼만한데...ㄹ
// 요일을 알려면 주어진 요일의 이름을 배열로 정리하고 각 인덱스를 숫자로 호출한다.
// 2016년 1월 1일은 금요일이다. 이것이 기준이 되는걸까 ? 초기화하는데 사용되는 걸까?
/*  1.4 new Date(year, month[, day, hour, minute, second, millisecond]) 
매개변수에 년, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다. 이때 년, 월을 반드시 지정하여야 한다. 지정하지 않은 옵션 정보는 0 또는 1으로 초기화된다. 년, 월을 지정하지 않은 경우 1970년 1월 1일 00:00(UTC)을 가지는 인스턴스를 반환한다.
*/
// 이러한 이유로 2016년 1월 1일은 금요일로 지정을 한 것인가 보다.


function getDayName(a, b){
  var theday = new Date(); // 알고 싶은 한 날을 theday 변수를 이용하여 빌트인 함수를 이용하여 할당한다.
  var DayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // 각 요일을 배열로 할당한다.
  theday.setFullYear(2016, 0, 1, DayName[5]); // 문제 조건에 맞는 요일을 설정한다.
  for (i = 0; i < j; i++) { // 
    var j = (7 % i) + 1
  }
}
console.log(getDayName(5, 24)); // TUE
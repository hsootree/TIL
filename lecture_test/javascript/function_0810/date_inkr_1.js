// 2. 숫자를 입력하면 한글 요일을 반환하는 함수
function dayNames(n) {
  // 요일을 배열로 나열하여 인덱스의 숫자로 요일을 반환하려고 함.
  var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'] 
  // 입력한 숫자를 한글로 반환한다.
  return dayNames[n % 7];
  
}
console.log(getdayNames(n));

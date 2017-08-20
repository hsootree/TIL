
/*
2) 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.   
8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

hint)  
문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]
// 힌트 테스트
var str = 'apple';
str.charAt(3); // "l"
str[2]; // "p"
var str = '800';
str.charAt(0); // "8"
str[0]; // "8"
*/


// 풀이 1안
// 숫자를 1 ~ 10000 을 증가하는 숫자 변수 'i'를 이용하여 할당한다.
function checkoct(minNum, maxNum, findNum){ // 3개의 변수를 이용한 함수 생성 minNum=범위의 최소숫자, maxNum=범위의 최대숫자, findNum=찾을 숫자
var count = 0; // count의 변수를 0으로 초기화한다.
for (var i = minNum; i <= maxNum; i++) { // 시작 숫자를 a로 대입하여 할당, 검사 범위의 숫자를 b로 대입하여 할당, i를 1씩 증가한다.
  // console.log(i); // i 숫자가 범위안에서 증가하는지 확인한다.
  var str = i.toString(); // 숫자를 문자열로 바꾼 str을 할당한다.
  var fstring = findNum.toString(); // c문자열로 바꾼 cstring를 할당한다.
  // 인덱스의 숫자 값을 확인한다.
  // console.log(typeof str); // str의 타입을 확인해본다.
  // console.log(typeof cstring); // cstring 타입을 확인해본다.
  // ??? var numb = // numb를 0이상 4미만으로 한정할때 무엇을 작성해야 하지?? 아래 for문으로 해결!
  //
  for (var numb = 0; numb < str.length; numb++){ // numb를 0부터 str문자열의 갯수 미만까지 반복한다.
    // console.log(numb); // numb 숫자가 범위안에서 증가하는지 확인한다.
    // console.log(str[numb]); // 

    // 확인한 숫자를 8과 비교한다.
    if (str[numb] === fstring) {
      count++; // j를 선언해야 하는데... 흠... 에러나는 곳!!!!!! count 선언한 변수에 증가.
    // 일치하면 +1을 하고 
    } 
  }
  //j; // 8과 일치하지 않으면 이전의 j 값을 반환한다. count를 반환하는 것으로 대체
  // 일치하지 않으면 다음으로 넘어가고
// 모든 인덱스 수를 확인했으면 i를 증가한 수를 위의 방법으로 반복한다. 언제까지? 10000이 될때까지.

}
return count;
}
console.log(checkoct(1,10000,8)); // 변수를 적용할 수 있도록 3개의 변수를 적용한 함수를 이용.


/*
3) 짝수와 홀수

evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.

단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.
*/
// if문 작성안
function evenOrOdd(num) { // evenOrOdd 함수는 정수 num을 매개변수로 받는다.
  var num = 1 ; 
  // 1이상의 정수이며 음수인 경우는 없는 문제의 조건.
  if (num % 2 === 0){
    return 'Even';
  }else {
    return 'Odd';
  }
}

function evenOrOdd(num) {
  for (var num = 1; num > 0; num++) {
    if (num % 2 == 0) {
      return 'Even';
    }else {
      return 'Odd';
    }
  }
}

/*
4.) 문자열 다루기

alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다

*/

function alphaString46 (s) {
  if ( 4 < s.length  && s.length < 6) {
    return (typeof s) = number;
  }
  else {
    return false;
  }
}
console.log(1123);
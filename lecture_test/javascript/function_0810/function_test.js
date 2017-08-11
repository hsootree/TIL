// 1. 두 수를 입력받아 큰 수를 반환하는 함수

// Math.max() Math 객체를 이용
/*
function max() {
  var result;
  Math.max(a, b);
  return result;
} */ 
console.log(Math.max(5, 9)); // 빌트인 함수 이용. 완료.



/* 2번째 안
function bigger(a, b) { // 두개의 숫자를 비교하는 조건문 함수를 사용하여
  var result;  
  if (a > b) { // a가 b보다 크다면
    result = a; // a 이다.
  } 
    
   // else if(a === b){ // 두개의 숫자가 같다면
   //   result = "입력한 수는" + a + "로 같은 수를 비교하였습니다."; // 같은 수를 입력하여 비교함을 알려준다. 리턴값에 문자열이 섞이면 오류가 날 확률이 크므로 일반적인 사용방법은 아니다. 수정필요함.
   //   }
    
  else{ // a가 b보다 작거나 같다면
    result = b; // b 이다.
  }
  return result; // 결과를 반환한다.
}
console.log(bigger(3, 9)); // 숫자를 입력하여 결과값을 확인한다.

// bigger(3, 8); // 숫자를 입력하여 결과값을 확인한다.



/* 1번째 안 
function bigger(a, b){ // 두개의 숫자를 비교하는 조건문 함수를 사용하여
  if (a > b) { //  a가 b보다 크다면
    console.log(a); // a를 출력한다.
  }else if (a === b){ // a와 b가 같은 수 라면
    console.log(a + "와" + b + "는 같은 수입니다."); // 'a와 b는 같은 수입니다.'를 출력한다.
  }
  else{ // 그렇지 않으면 ( a가 b보다 크지도 않고 같지도 않다면)
    console.log(b); // b를 출력한다.
  }
}
bigger(3, 3);
*/

// 2. 숫자를 입력하면 한글 요일을 반환하는 함수
var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)']


/*
var c = new Date
function (c.getDay){
  console.log(c.toString());
}


// 3. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
var arr = [];





// 4. 숫자를 n개 전달 받아 문자열 하나로 반환하는 함수



// 5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수



// 6. 세 수를 입력받아 큰 수를 반환하는 함수



// 7. n개의 인자를 받아서 가장 큰 수를 반환

// 8. 문자열을 역순으로 바꿔주는 함수

// 9. 비밀번호 문자열 validation 최소 8글자 최대 20글자 영어 대소문자 숫자 포함
*/
// 1. 두 수를 입력받아 큰 수를 반환하는 함수

// 1번째 안 

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

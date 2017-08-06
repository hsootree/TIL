
/* 번복문의 응용 */

for (var i = 0; i < 10; i++) {
  console.log('test ' + (i + 1) + ' change number');
}

/* 반복문의 제어 */

// break  

for (var j = 0; j < 10; j++) {
  if (j === 5) {
    break;
  }
  console.log('test ' + (j * 2) + ' break');
}

// continue 

for (var k = 0; k < 10; k++) {
  if (k === 5) {
    // continue k가 5일때 계속하라는 것은 다음 console으로 넘어가지 않고 for문으로 돌아간다.
    continue;
  }
  console.log('test ' + (k * 2) + ' continue');
}

/* 반복문의 중첩 */

for(var l = 0; l < 5; l++) {
  for(var m = 0; m < 5; m++) {
    console.log('test ' + l + m + ' check');
  }
}

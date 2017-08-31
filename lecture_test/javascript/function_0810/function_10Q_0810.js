// 1. 두 수를 입력받아 큰 수를 반환하는 함수
function max (a, b) {
	if(typeof a === 'number' && typeof b === 'number'){
	// if( a > b){
	// 	return a;
	// } else {
	// 	return b;
	// }
	// return a > b ? a : b;
		return Math.max(a, b);
	}
}
console.log(max(2, 3))
// 2. 숫자를 입력하면 한글 요일을 반환하는 함수
function getDay(n) {
	var days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
	return days[ n % 7 ];
}
console.log(getDay(new Date().getDay()));
// 3. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function avg(numArr){
	// var result = 0;
	// for ( var l = numArr.length; l--;){
	// 	result += numArr[l];
	// }
	// return result/l;
	return numArr.reduce(function(prev, curr){ return prev + curr;})/numArr.length;
}
console.log(avg([1, 2, 3, 4, 5]));
// 4. 숫자를 n개 전달 받아 숫자들의 평균을 반환하는 함수
function avgN(...n){
	// var result = 0;
	// for ( var l = arguments.length; l--;){
	// 	result += arguments[l];
	// }
	// return result/l;
	// return Array.prototype.slice
	// 	.call(arguments)
	// 	.reduce(function(prev, curr){ return prev + curr;})/arguments.length;
	// var n = Array.from(arguments);
	return n.reduce(function(prev, curr){ return prev + curr;})/n.length;
}
console.log(avgN(1, 2, 3, 4, 5));
// 5. 문자열을 배열로 전달 받아 문자열 하나로 반환하는 함수
function oneString(stringArr){
	var result = '';
	for(var i = 0, l = stringArr.length; i < l; i++){
		result += stringArr[i];
	}
	return result;
	// return stringArr.join('');
}
console.log(oneString(['a', 'b', 'c', 'd']));
// 6. 세 수를 입력받아 큰 수를 반환하는 함수 1번 함수 사용하기
function threeMax(a, b, c){
	return max(max(a, b), c);
	// return Math.max(a, b, c);
}
console.log(threeMax(5, 10, 22));
// 7. n개의 인자를 받아서 가장 큰 수를 반환
function nMax(...numArr){
	// es 5 이하
	// var numArr = Array.prototype.slice.call(arguments);
	// return Math.max.apply(null, numArr);
	// es 6 +
	return Math.max(...numArr);
}
console.log(nMax(12, 54, 1112, 789, 122, 22))
// 8. 문자열을 역순으로 바꿔주는 함수
function reverseMsg(msg){
	// var result = '';
	// for(var l = msg.length; l--; ){
	// 	result += msg[l];
	// }
	// return result;
	return msg.split('').reverse().join('');
}
console.log(reverseMsg('안녕하세요'));
// 9. 비밀번호 문자열 validation 최소 8글자 최대 20글자 영어 대소문자 숫자 포함
function pwValidation(pw){
	return /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/.test(pw.trim());
	// 글자수, 영어대문자, 영어 소문자, 숫자
	// pw = pw.trim()
	// var upperChk = false;
	// var lowerChk = false;
	// var numChk = false;
	// var l = pw.length;
	// if( l >= 8 && l <= 20){
	// 	for(var i = 0 ; i < l; i++){
	// 		if('a' <= pw[i] && pw[i] <= 'z' ){
	// 			lowerChk = true;
	// 			if(lowerChk && numChk && upperChk){
	// 				break;
	// 			}
	// 		}
	// 		else if('A' <= pw[i] && pw[i] <= 'Z'){
	// 			upperChk = true;
	// 			if(lowerChk && numChk && upperChk){
	// 				break;
	// 			}
	// 		}
	// 		else if('0' <= pw[i] && pw[i] <= '9'){
	// 			numChk = true;
	// 			if(lowerChk && numChk && upperChk){
	// 				break;
	// 			}
	// 		}
	// 	}
	// }
	// return lowerChk && numChk && upperChk;
}
console.log(pwValidation('pW1123adfq'));
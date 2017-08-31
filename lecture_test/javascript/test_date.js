// built-in Date
// new Date()
// new Date(milliseconds)
// new Date(dateString)
// new Date(year, month[, day, hour, minute, second, millisecond])

  var date ();
  console.log(typeof date, date);

// new Date(milliseconds) : 86400000ms는 1day를 의미한다
// 1s = 1,000ms
// 1m = 60s * 1,000ms = 60,000ms
// 1h = 60m * 60,000ms = 3,600,000ms
// 1d = 24h * 3,600,000ms = 86,400,000ms
  var d = new Date(0);
  console.log(d); // Thu Jan 01 1970 09:00:00 GMT+0900 (KST)
  // KST(Korea Standard Time)는 GMT(그리니치 평균시: Greenwich Mean Time)에 9시간을 더한 시간
  var d = new Date(86400000);
  console.log(d); // Fri Jan 02 1970 09:00:00 GMT+0900 (KST)

// new Date(year, month[, day, hour, minute, second, millisecond])
  var d = new Date(1999);
  console.log(d); // Thu Jan 01 1970 09:00:01 GMT+0900 (KST)
  var d = new Date(2016, 0, 1);
  console.log(d); // Fri Jan 01 2016 00:00:00 GMT+0900 (KST)

  
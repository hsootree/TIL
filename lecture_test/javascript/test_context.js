console.log('This is global context'); // This is global context
function ExContext1() {
  console.log('This is ExContext1');
};
function ExContext2() {
  ExContext1();
  console.log('This is ExContext2');
};
ExContext2();

function execute(param1, param2) {
  var a = 1, b = 2;
  function func() {
    return a+b;
  }
  return param1 + param2 + func();
}
execute(3,4); // 
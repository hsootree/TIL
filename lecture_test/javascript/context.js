const arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]());
}

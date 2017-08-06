var id = prompt('put in your ID');
var password = prompt('put in your password');
if (id === 'hsootree') {
  if (password === '1234') {
    alert(id + ', Welcomt to login');
  } else {
    alert('check your password');
  }
} else {
  alert('check your ID');
}




## REST API 실습
github dev
https://developer.github.com/v3/
비밀번호 있는것 없는것 

## Node.js
nvm 설치
1. https://github.com/creationix/nvm 에 가서
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```
2. nvm 설치 코드 추가

```
# 주석: `#`으로 시작하는 명령은 bash에서 무시됩니다.
# 아래 명령을 한 줄씩 차례대로 입력하세요
$ nvm install 8.4
$ nvm use 8.4
$ nvm alias default 8.4 # nvm-windows는 필요없음 - 터미널을 켤때 8.4를 기본으로 설정.
```

3. 2에서 설치 안되는 경우 (mac/window)
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
버전 확인 `node -v`

멀티라인 입력 가능 괄호가 열려 있는 상태이면 엔터를 쳤을때 그대로 입력 가능함.

.exit ^c 나갈 수 있음.
```
설치!
nvm
nvm-windows
 # 주석: `#`으로 시작하는 명령은 bash에서 무시됩니다.
# 아래 명령을 한 줄씩 차례대로 입력하세요
$ nvm install 8.4
$ nvm use 8.4
$ nvm alias default 8.4 # nvm-windows는 필요없음
Node.js REPL
$ node
// 한 줄 짜리 코드 입력하기
> 'hello node'
'hello node'

// 위쪽 화살표 키를 입력해서 이전 명령 불러오기
> 'hello node'
'hello node'

> const factorial = n => n < 1 ? 1 : n * factorial(n-1)
undefined

> factorial(3)
6
// 여러 줄에 나눠서 입력하기
> function factorial2(n) {
... return n < 1 ? 1 : n * factorial2(n-1)
... }
undefined

> factorial2(4)
24

// `.exit`를 입력하거나 `Ctrl+C`를 두 번 입력해서 나가기
> .exit
// Node.js module 사용하기
> const os = require('os') // 급할땐 `os = ...`
undefined

> os.platform()
'linux'

> os.freemem()
658300928
Node.js로 파일 실행시키기
$ node (파일 경로)
// 여러 줄에 나눠서 입력하기 > function factorial2(n) { ... return n < 1 ? 1 : n * factorial2(n-1) ... } undefined > factorial2(4) 24 // `.exit`를 입력하거나 `Ctrl+C`를 두 번 입력해서 나가기 > .exit
```

```
Node.js REPL
$ node
// 한 줄 짜리 코드 입력하기
> 'hello node'
'hello node'

// 위쪽 화살표 키를 입력해서 이전 명령 불러오기
> 'hello node'
'hello node'

> const factorial = n => n < 1 ? 1 : n * factorial(n-1)
undefined

> factorial(3)
6
// 여러 줄에 나눠서 입력하기
> function factorial2(n) {
... return n < 1 ? 1 : n * factorial2(n-1)
... }
undefined

> factorial2(4)
24

// `.exit`를 입력하거나 `Ctrl+C`를 두 번 입력해서 나가기
> .exit
// Node.js module 사용하기
> const os = require('os') // 급할땐 `os = ...`
undefined

> os.platform()
'linux'

> os.freemem()
658300928
Node.js로 파일 실행시키기
$ node (파일 경로)
Node.js
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
```
```
// Node.js module 사용하기 > const os = require('os') // 급할땐 `os = ...` undefined > os.platform() 'linux' > os.freemem() 658300928
```

## node js 특성

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

이미지 추가

### Concurrency Model (동시성 모델)
생애 주기: Github 요청
프로그램이 생애 주기가 겹치는 여러 실행 과정을 통해 실행된다 하더라도 프로그램의 결과에는 영향을 미치지 않는 성질

생애 주기가 겹치는 여러 실행 과정이 자원을 공유할 때 어떻게 충돌이 생기지 않도록 할 것인가?

### Resources
 - CPU
 - 메모리
 - 네트워크
 - ...

### thread
> 코드 실행의 가장 작은 단위  
프로그램은 하나 이상의 스레드로 이루어짐  
CPU 코어 하나는 한 번에 하나의 스레드를 실행

```
$ sysctl -n hw.ncpu # OSX // 코어수
$ nproc # linux
$ mmc devmgmt.msc # Windows
$ top -H # Shows the total number of threads // 
```

### 장점
프로그래머가 동시성에 대해 신경쓸 필요가 없어짐
프로그램 작성이 쉬워짐

### 단점
CPU를 많이 쓰는 작업에 부적절
오래 걸리는 자바스크립트 코드가 실행되면 전체 프로그램에 영향을 미침
 
### 전략
오래 걸리는 일은 외부에 위임하고 넘어간 뒤, 나중에 결과를 받아 처리하기  
 - Database
 - Node.js - External libraries
 - Web browser - WebAssembly
긴 실행과정을 여러 개의 함수로 쪼개서 한 번의 함수 실행이 금방 끝나게 만들기

## Asynchronous JavaScript
> Asynchronous Callback
 - 함수를 호출할 때, 콜백까지 같이 인자에 넣어서  - 호출하는 비동기 프로그래밍 양식
 - 콜백에서 에러 인자를 받는 방식으로 에러 처리를 함
 - Node.js 내장 모듈 전체가 이 방식을 사용하도록 만들어져 있음
주의! 모든 콜백이 비동기인 것은 아님

```
> [1,2,3].map(x => x*x)
[ 1, 4, 9 ]
```
### readFile

```
// readFile.js
const fs = require('fs') // Node.js 내장 모듈
fs.readFile('./calc.js', 'utf8', (err, data) => {
  console.log(data)
})
console.log('done!')
```
```
// readFileSync.js
const fs = require('fs') // Node.js 내장 모듈
const data = fs.readFileSync('./calc.js', 'utf8')
console.log(data)
console.log('done!')
```

## Github REST API 호출

```
// 유저 이름, 저장소, 할당된 이슈 갯수 출력하기
const request = require('request')
const apiUrl = 'https://api.github.com'
const option = {
  json: true,
  auth: {
    'user': 'username',
    'pass': 'password',
  },
  headers: {
    'User-Agent': 'request'
  }
}
request.get(`${apiUrl}/user`, option, function (error, response, body) {
  const name = body.name
  if (error) console.error(error)
  // 콜백 안에 콜백
  request.get(`${apiUrl}/user/repos`, option, function (error, response, body) {
    if (error) console.error(error)
    const repoNames = body.map(item => item.name)
    // 콜백 안에 콜백 안에 콜백
    request.get(`${apiUrl}/issues`, option, function (error, response, body) {
      if (error) console.error(error)
      const issueNum = body.length
      console.log(`name: ${name}`)
      console.log('repos:')
      repoNames.forEach(name => {
        console.log(name)
      })
      console.log(`num of assigned issues: ${issueNum}`)
    })
  })
})
```

## Promise
비동기 작업의 결과를 담는 객체

정확히 언제가 될지 모르지만, 결국 성공 또는 실패의 상태를 갖게 됨
```
// tenSec.js
module.exports = function tenSec(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, 10000)
  })
}
```

```
// REPL - node 를 실행시킨후에 코딩~
> const tenSec = require('./tenSec')
> const p = tenSec(1)
> p // 만든지 10초가 지나기 전
Promise {
  [pending],
  ...
> p // 만든지 10초가 지난 후
Promise {
  1,
```

## Promise chaining

```
// chaining.js
const tenSec = require('./tenSec')
tenSec('hello promise')
  .then(value => {
    console.log(value)
    return 1 // 위 `.then`은 값이 1인 Promise를 반환함
  })
  .then(value => {
    console.log(value)
    return tenSec('new promise') // Promise도 반환할 수 있음
  })
  .then(value => {
    console.log(value)
  })
  .then(() => {
    throw new Error('error in promise')
  })
  .catch(err => {
    console.error(err)
  })
  .then(() => { // 에러 처리 이후에도 코드 실행 가능
    console.log('done')
  })
```

## readFile - promise

```
// readfilePromise.js
const {promisify} = require('util') // Node.js 8.0.0부터 추가됨
const fs = require('fs')
const readFile = promisify(fs.readFile)
readFile('./calc.js', 'utf8')
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
```

### Promise의 특징
이미 resolve 된 Promise에도 콜백을 실행할 수 있음
```
> const resolved = Promise.resolve(1)
> resolved.then(v => console.log(v))
```
`.then`에 넘겨진 콜백은 무조건 다음 루프에 실행됨
```
> (function() {
... Promise.resolve(1).then(v => console.log(v))
... console.log('done!')
... })()
/* 출력:
done!
1
*/
```

### Promise.all
```
// npm install --save request-promise
const rp = require('request-promise')
const apiUrl = 'https://api.github.com'
const option = {
  json: true,
  auth: {
    'user': 'username',
    'pass': 'password',
  },
  headers: {
    'User-Agent': 'request'
  }
}

const userPromise = rp.get(`${apiUrl}/user`, option)
const reposPromise = rp.get(`${apiUrl}/user/repos`, option)
const issuesPromise = rp.get(`${apiUrl}/issues`, option)

// 배열 내의 모든 Promise 객체가 완료되었을 때
// resolve 되는 Promise를 만든다.
Promise.all([userPromise, reposPromise, issues]) => {
    console.log(`name: ${user.name}`)
    console.log('repos:')
    repos.forEach(repo => {
      console.log(repo.name)
    })
    console.log(`num of assigned issues: ${issues.length}`)
  }) // catch 가 빠졌지만 에러처리도 간편해짐.
```

### Async/Await
새로운 자바스크립트에 도입된 문법 - 실무에서는 널리 도입되지 않음.
있는지 정도만 알고 가고 다음시간 부터는 promise 로 코딩함.

```
const tenSec = require('./tenSec')

async function resolveAfterTenSec() {
  await tenSec() //  에러가 나면 이 안에 에러 처리를 하면 됨.
  return 1
}

resolveAfterTenSec().then(value => {
  console.log(value)
})
```
 - c# 에서 처음 만들어짐. 
 - ES2017에서 도입되어, 비동기식 코드를 동기식 코드처럼 쓸 수 있는 문법 제공
 - Chrome 55, Node.js 8.0.0 부터 사용가능
 - `async function` 안에서 반환된 값은 최종적으로 Promise 객체로 변환되어 반환된다.
 - async function 안에서 쓸 수 있는 await 키워드는 현재 함수를 중단시키고 Promise 객체가 충족될 때까지 `기다리지만, 스레드를 - block 하지 않는다.`
 - 에러 처리는 동기식 코드처럼 try, catch 블록을  통해서 한다.
 
### readFile - async/await

```
// readfileAsync.js
const {promisify} = require('util') // Node.js 8.0.0부터 추가됨
const fs = require('fs')
const readFile = promisify(fs.readFile) // 프라미스파이를 반환

async function readFileAsync() {
  try { // 에러처리
    const data = await readFile('./calc.js', 'utf8')
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}

readFileAsync()
```
# HTML5 api

페이지가 새로고침 주소표시줄에 주소또한 새로 굄이 됨.

> 자바스크립트를 사용하여 
페이지를 새로고침하지 않고 페이지를 불러옴.
history api






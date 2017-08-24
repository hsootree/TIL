let bookList = [
  { numb: 1, title: 'HTML5', author: 'Lee', price: 2000 },
  { numb: 2, title: 'CSS3', author: 'Kim', price: 3000 },
  { numb: 3, title: 'JavaScript', author: 'Park', price: 5000 }
];


const book = 
/*
  `<tr>
    <td><input type="checkbox" id="${book.numb}"></td>
    <th>${book.numb}</th>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.price}</td>
  </tr>`
*/

// 1. Delete Book 버튼이 클릭되면 체크된 book 리스트를 삭제
document.getElementById('delete').addEventListener('click', (e) => {
  //chedked id를 배열로 취득
  const checkedIdArr = [...document.querySelectorAll('tbody input[type=checkbox]:checked')].map(el => el.id);
})
// 2. 최상위 체크박스를 클릭하면 전체 체크박스 토글(on/off)
document.getElementById('checkbox').addEventListener('change', (e) => { [...document.querySelectorAll('thead input[type=checkbox]')].map(el => { el.checked = e.target.checked; }); });
// 3. Add Book 버튼이 클릭되면 .add-form를 표시

// 4. Add Book 버튼이 클릭되면 Cancel 버튼 표시
// 5. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되었으면 Add Book 버튼이 클릭 시, bookList 객체에 .add-form의 입력값을 추가하고 DOM 갱신
// 6. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되지 않았으면 alert으로 입력되지 않았음을 경고
if (!conditions[i].checked) {
  alert('Title을 입력하지 않았습니다.');
}
// 7. Cancel 버튼이 클릭되면 .add-form과 Cancel 버튼 비표시
// (*) 모든 선언문의 전역 선언 금지

/*
다른 사람이 작성한 코드

    const BookList = (function () {
      // let bookList = [
      //   { id: 1, title: 'HTML5', author: 'Lee', price: 2000 },
      //   { id: 2, title: 'CSS3', author: 'Kim', price: 3000 },
      //   { id: 3, title: 'JavaScript', author: 'Park', price: 5000 }
      // ];

      let bookList = [];

      // bookList 객체를 DOM에 갱신
      const insertBookListToTable = function () {
        // bookList 객체를 HTML화하고 DOM 갱신
        document.querySelector('#mytable > tbody').innerHTML = bookList.map(({ id, title, author, price }) => `<tr><td><input type="checkbox" id="${id}"></td><th>${id}</th><td>${title}</td><td>${author}</td><td>${price}</td></tr>`).join('');
      };

      const getBook = function (url) {
        // promise 생성과 반환
        return new Promise((resolve, reject) => {
          // XMLHttpRequest 객체의 생성
          var req = new XMLHttpRequest();
          // 비동기 방식으로 Request를 오픈한다
          req.open('GET', url);
          // Request를 전송한다
          req.send();

          // Event Handler
          req.onreadystatechange = function () {
            // 서버 응답 완료 && 정상 응답
            if (req.readyState === XMLHttpRequest.DONE) {
              if (req.status == 200) {
                // resolve 메소드에 전달한 처리 결과는 then 메소드의 첫번째 콜백함수에서 취득 가능
                resolve(req.response);
              } else {
                // 서버의 응답이 정상이 아니면
                // reject 메소드에 전달한 처리 결과는 then 메소드의 두번째 콜백함수에서 취득 가능
                reject(req.statusText);
              }
            }
          };
        });
      };

      // Get bookList form server
      getBook('http://localhost:5000/books')
      .then(books => {
        // resolved!
        bookList = JSON.parse(books);
        // 취득한 bookList 객체를 DOM에 추가
        insertBookListToTable();
      }, (reason) => {
        // rejected!
        console.log(reason);
        throw 'Error:' + reason;
      }).catch(error => console.error(error));

      // bookList 객체의 마지막 id에 1을 더한 값 취득
      const getLastId = function () {
        let lastId = 1;
        bookList.map(({ id }) => id > lastId ? lastId = id : id);
        return lastId + 1;
      };

      // book list 이벤트 처리
      const eventProcess = function() {
        // add book list form 표시 여부
        let isShown = false;
        // add book list form
        const addForm = document.getElementsByClassName('add-form')[0];
        // cancel button
        const cancel = document.getElementById('cancel');

        // add book button event
        document.getElementById('add').addEventListener('click', () => {
          if (isShown) {
            // 이미 입력폼이 보여지고 상황
            const title = document.getElementById('title');
            if (title) {
              // 타이틀 입력폼의 값이 있을 경우
              // Todo: POST to Server

              bookList.push({
                id: getLastId(),
                title,
                author: document.getElementById('author').value,
                price: document.getElementById('price').value
              });

              // bookList 객체를 DOM에 갱신
              insertBookListToTable();

              console.log(bookList);

              addForm.style.display = 'none';
              cancel.style.display = 'none';
            } else {
              alert('title을 입력하세요');
              return;
            }
          } else {
            addForm.style.display = 'block';
            cancel.style.display = 'inline-block';
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('price').value = '';
          }
          isShown = !isShown;
        });

        // cancel button event
        // addEventListener 함수의 콜백 함수를 화살표 함수로 정의하면 this가 상위 컨택스트를 가리킨다.
        cancel.addEventListener('click', function () {
          if (addForm.style.display === 'block') {
            // addForm 비표시
            addForm.style.display = 'none';
            // cancel button 비표시
            this.style.display = 'none';
            isShown = !isShown;
          }
        });
        // checkall checkbox event
        document.getElementById('checkall').addEventListener('change', (e) => {
          // 모든 체크박스를 최상위 체크박스의 상태와 동기화
          [...document.querySelectorAll('tbody input[type=checkbox]')].map(el => {
            el.checked = e.target.checked;
          });
        });

        // delete button event
        document.getElementById('delete').addEventListener('click', (e) => {
          // checked id를 배열로 취득
          const checkedIdArr = [...document.querySelectorAll('tbody input[type=checkbox]:checked')].map(el => el.id);

          // bookList 객체에서 checked id와 id가 같은 리스트를 삭제
          checkedIdArr.map(checkedId => {
            bookList = bookList.filter((book) => book.id !== checkedId * 1);
          });

          // bookList 객체를 DOM에 갱신
          insertBookListToTable();
        });
      };

      return {
        init: eventProcess
      };
    }());

    BookList.init();

  */
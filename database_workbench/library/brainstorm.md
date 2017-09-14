# 도서관
## 브레인 스토밍
도서관에에서는 회원이 도서를 대출한다.
도서관에는 대출관리를 하는 사서가 있다.
대출할 때는 회원카드가 필요하다.
반납할 때는 카드가 필요없다.
한 명의 회원은 1₩회에 3권 대출할 수 있다.
반납기한은 2주로 한다.
연장은 1회까지 가능하다.
한국십진분류법으로 도서 분류법으로 도서를 분류한다.
검색기능 제목 저자 출판사 키워드 ISBN 출판일
사용자는 사서, 일반회원, 학생, 구민 등이 있다.
사용자는 도서 예약을 할 수 있어야 한다.
(예약이란 책을 미리 찜핺고 대출할 수 있는 것)
사용자는 자동 연장 신청을 할 수 있다. 하지만 1회에 한해 할 수 있다. 반납일 전날까지는 가능하지만 반납 당일에는 할 수 없다.
기한 내 예약 건이 있다면 자동 연장 신청을 할 수 없다.
연체한 날짜만큼 책 대출을 못함.
각 책에 대한 대출 가능 권수를 사용자가 알 수 있어야 한다.
책 파손이나 분실 시 같은 금액만큼 보상을 해주어야 한다.
사용자는 대출 내영을 확인 할 수 있어야 한다.
대출했던 책은 반납 이후 한 달 이내에 대출할 수 없다.
사용자는 도서 구매 신청을 할 수 있다.
자유게시판, 건의함 등의 사용자가 이용할 수 있는 게시판이 있다.
PC 사용자, 모바일 앱 사용자를 둘 다 지원해주어야 한다.
도서관 소개 페이지가 필요하다.
반납일 이틀 전에 사용자에게 SMS로 안내를 한다.
회원가입, 로그인 기능. 개인 정보 수정 기능.
도서 구매 신청이 접수 되었는지 반려되었는지 안내 문자를 보내준다.


## 앤티티 - 속성

1. 회원 - 아이디, 패스워드, 실명, 닉네임, 전화번호, 주소, 성별, 이메일, 생년월일, 회원번호, 대출가능권수, 비밀번호 틀린횟수
2. 도서 - 책이름, 출판사, 출간일, ISBN, 저자(공동저자), 번역자, 분류(외래키), 식별자(ID), 정가
3. 대출내역(사건) - 대출일자, 예약여부, 반납여부, 회원ID, 도서식별자(ID), 연장여부
4. 로그인(내역) - 로그인 일시, 회원ID, 사용기기내역ID, IP



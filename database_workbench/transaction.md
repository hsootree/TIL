# 트랜잭션의 필요성

데이터베이스에서는 여러 쿼리에 걸쳐서 데이터를 안전하게 다루기 위해 **트랜잭션**이라는 기능을 사용합니다. 트랜잭션의 필요성을 말씀드리기 위해 간단히 예를 들어보겠습니다.

한 은행에서 계좌 정보를 관리하기 위해 데이터베이스를 사용하고 있습니다. 한 계좌에서 다른 계좌로 1000원을 옮기기 위해서는, 아래와 같이 데이터베이스에 두 개의 쿼리를 날려야 합니다.

```sql
-- 첫 번째 쿼리는 'from_account' 계좌에서 1000원을 인출합니다.
UPDATE account
SET balance = balance - 1000
WHERE account_id = 'from_account';
```

```sql
-- 두 번째 쿼리는 'to_account' 계좌에 1000원을 입금합니다.
UPDATE account
SET balance = balance + 1000
WHERE account_id = 'to_account'
```

두 쿼리가 모두 성공적으로 수행된다면, 우리가 처음에 의도했던 작업이 잘 완료됐다고 볼 수 있습니다. 하지만 계좌에 잔액이 부족하거나, 네트워크 오류 혹은 정전 등의 이유로 하나의 쿼리만 실행되고 나머지 하나는 실행이 되지 않는 상황이 발생할 수 있습니다. 즉, 인출은 됐는데 입금이 되지 않은 (혹은 그 반대의) 결과가 나옵니다.

언제 생길 지 알 수 없는 오류 때문에 데이터를 신뢰할 수 없다면, 은행과 같은 기업의 입장에서는 데이터베이스를 사용할 수 없을 것입니다.

이렇게 데이터베이스를 다루다 보면 "여러 쿼리에 걸친 데이터 조작의 신뢰성"을 확보할 필요성이 있습니다. 이를 위해 **트랜잭션**이라는 기능을 사용합니다. 트랜잭션을 사용하면, 여러 개의 쿼리 중 하나라도 실패했을 때 데이터베이스의 상태를 **원상복귀** 시킬 수 있습니다.

# 트랜잭션의 사용

`START TRANSACTION` 구문을 사용하면 현재 커넥션에 대해 트랜잭션이 시작됩니다.

```sql
START TRANSACTION;
```

트랜잭션을 시작한 다음에는 평소처럼 쿼리를 실행할 수 있습니다.

```sql
INSERT INTO employees (emp_no, birth_date, first_name, last_name, gender, hire_date)
VALUES (876543, '1980-03-05', 'Georgi', 'Jackson', 'M', '2017-09-11');
```

여러 번의 쿼리를 통해 필요한 작업을 완료한 뒤에는, `COMMIT` 구문으로 현재까지의 변경사항을 데이터베이스에 반영해주어야 합니다.

```sql
COMMIT;
```

만약, 쿼리를 하는 도중에 이제까지 트랜잭션 안에서 했던 모든 작업을 취소하고 싶은 경우에는 `ROLLBACK` 구문을 사용하면 됩니다.

```sql
ROLLBACK;
```

# 트랜잭션의 격리

커밋하기 전에는 트랜잭션 내에서 변경된 사항을 다른 커넥션에서 볼 수 없습니다. <sub>(단, `READ COMMITTED` 이상의 격리 수준인 경우에 한정)</sub> 이런 성질을 트랜잭션의 **격리(isolation)** 라고 부릅니다. MySQL은 다양한 격리 수준(isolation level)을 지원합니다. 자세한 사항은 [공식문서](https://dev.mysql.com/doc/refman/5.7/en/innodb-transaction-isolation-levels.html) 및 [이 글](http://hyunki1019.tistory.com/111)을 참고해주세요.

```sql
-- 위의 INSERT 쿼리를 실행하고 COMMIT을 하지 않은 경우에, 아무 결과도 안 뜹니다.
SELECT * FROM emplyees
WHERE emp_no = 876543;
```



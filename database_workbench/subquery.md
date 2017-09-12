SQL에는 쿼리 안에 쿼리를 중첩시켜서 중첩된 쿼리의 결과를 바깥쪽 쿼리에서 활용할 수 있는 기능이 있는데, 이렇게 내부에 중첩된 쿼리를 **서브쿼리**라고 부릅니다.

서브쿼리의 용법에는 여러가지가 있습니다.

# 단일 행 서브쿼리

**단일 행 서브쿼리**는 하나의 행을 반환하는 서브쿼리입니다. 단일 행 서브쿼리는 바깥쪽 쿼리의 `WHERE` 구문에서 비교를 위해 사용될 수 있습니다.

아래는 '1997년도 이전에 최고 연봉을 받은 사람의 이름'을 구하기 위한 쿼리입니다.

```sql
SELECT emp_no, first_name FROM employees
WHERE emp_no = (
  SELECT emp_no FROM salaries
  WHERE YEAR(from_date) <= '1997'
  ORDER BY salary DESC
  LIMIT 1
);
```

아래와 같이 **튜플**을 사용해서 여러 컬럼을 동시에 비교할 수도 있습니다.

```sql
-- 튜플을 사용하는 서브쿼리의 예를 보여드리기 위한 쿼리이며, 별 의미는 없습니다.
SELECT emp_no, first_name FROM employees
WHERE (emp_no, first_name) = (
  SELECT emp_no, first_name FROM employees
  LIMIT 1 -- 여러 쿼리를 비교하는 것은 잘 사용되지는 않지만 이러한 것이 있다는 것만 알아두면 됨.
);
```

# 다중 행 서브쿼리

**다중 행 서브쿼리**는 여러 개의 행을 반환하는 서브쿼리입니다. 다중 행 서브쿼리는 바깥쪽 쿼리의 `WHERE` 구문에서 `IN` 연산자와 함께 사용됩니다.

아래는 최고 연봉 15만 달러를 달성한 적이 있는 사람들의 이름을 가져오기 위한 쿼리입니다.

```sql
SELECT first_name FROM employees
WHERE emp_no IN ( -- ~중에 하나와 일치하는 것을 찾음.
  SELECT emp_no FROM salaries
  WHERE salary >= 150000
);
```

# 서브쿼리와 조인

서브쿼리로 짠 쿼리를 조인을 이용해서 짤 수 있는 경우도 있습니다. 위의 첫 번째 예제를 조인을 이용해 다시 작성하면 다음과 같이 됩니다.

```sql
-- '1997년도 이전에 최고 연봉을 받은 사람의 이름'을 구하기 위한 쿼리
SELECT first_name FROM employees
JOIN salaries ON salaries.emp_no = employees.emp_no
WHERE YEAR(salaries.from_date) <= '1997'
ORDER BY salary DESC
LIMIT 1;
```

다만 모든 서브쿼리를 조인으로 대체할 수 있는 것은 아닙니다. 다음과 같이 서브쿼리를 써야만 가능한 쿼리도 있습니다.

```sql
-- '1997년도 이전의 최고 연봉보다 더 많은 연봉을 받은 사람들의 이름'을 구하기 위한 쿼리
SELECT DISTINCT first_name FROM employees
JOIN salaries ON salaries.emp_no = employees.emp_no
WHERE salary > (
  SELECT salary FROM salaries
  WHERE YEAR(salaries.from_date) <= '1997'
  ORDER BY salary DESC
  LIMIT 1
);
```

같은 작업을 하는 쿼리를 조인으로 짤 수도 있고, 서브쿼리로도 짤 수 있다면 둘 중에 어떤 것을 써야 할까요?

`IN` 연산자에 들어가는 서브쿼리의 결과가 크면 **연산 속도가 조인에 비해 느려집니다.**

```sql
-- 0.0021 sec
SELECT first_name FROM employees
WHERE emp_no IN (
  SELECT emp_no FROM salaries
)
LIMIT 1000;
```

```sql
-- 0.00075 sec
SELECT first_name FROM employees
JOIN salaries ON salaries.emp_no = employees.emp_no
LIMIT 1000;
```

대개의 경우, `IN` 연산자에 들어가는 서브쿼리의 길이가 굉장히 긴 (수십 만 행 이상) 경우에는 조인을, 짧은 경우에는 서브쿼리를 사용하는 것이 빠릅니다. 이것을 외우기 귀찮다면, 조인을 쓸 수 있는 상황에서는 조인을 쓰고, 아니라면 서브쿼리를 쓴다고 외워 두어도 무방합니다.
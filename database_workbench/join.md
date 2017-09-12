이제까지 여러 SQL 구문을 사용해서 데이터를 가져오는 방법을 알아봤습니다. 이제까지 배운 것들은 전부 **하나의 테이블**에서 데이터를 가져오는 방법이었습니다.

예를 들어, 사원의 연봉 변동 기록 테이블의 각각의 레코드에 사원의 이름을 붙여서 출력해보려고 합니다. 그런데 문제는 **사원의 연봉 변동 기록**과 **사원의 이름**이 각각 다른 테이블에 저장되어 있다는 것입니다. 이 두 테이블에 저장되어 있는 레코드들을 이어주는 역할을 하는 컬럼이 있는데, 바로 사원 번호(`emp_no`) 입니다. 이 사원 번호를 이용해 두 테이블을 합쳐서 출력할 수 있습니다.

SQL에서의 **조인(join)** 은 여러 테이블의 데이터를 가져와서 하나의 테이블로 합치는 것을 말합니다. MySQL에서는 여러 가지 방법으로 조인을 할 수 있습니다.


# FROM, WHERE 구문을 통한 조인

`FROM` 뒤에 여러 개의 테이블 이름을 적어서, 테이블을 합칠 수 있습니다.

```sql
SELECT salaries.salary, salaries.from_date, employees.first_name
FROM salaries, employees;
```

이렇게 테이블을 합칠 수 있지만, 뭔가 이상합니다. 모든 사원의 연봉 변동 기록이 같은 것으로 나옵니다. 사실 위 코드는 틀린 코드입니다. 테이블을 **어떻게 합칠 것인지** 지정해주지 않았기 때문에, 결과는 두 테이블의 단순한 Cartesian product(곱집합)으로 나오게 됩니다.

그러면 테이블을 어떻게 합칠 것인지 지정해보겠습니다.

```sql
SELECT salaries.salary, salaries.from_date, employees.first_name
FROM salaries, employees
WHERE salaries.emp_no = employees.emp_no;
```

이제야 잘 나오는 것 같습니다. 이렇게 테이블을 합칠 때에는 어떻게 합칠 지를 직접 명시해주어야 합니다. 이렇게 `JOIN` 구문을 사용하지 않고 `FROM`과 `WHERE`만을 사용해 조인하는 것을 암시적 조인(implicit join)이라고 합니다.

# JOIN 구문

위의 예제처럼 테이블을 합칠 수도 있지만, 보통의 경우 `JOIN` 구문을 이용해서 조인을 하는 것이 관례입니다. (조인을 하고 있다는 것을 명확히 알 수 있고, 읽기도 쉽기 때문입니다.) 이렇게 직접 `JOIN` 구문을 사용해서 조인을 하는 것을 명시적 조인(explicit join)이라고 합니다. 아래의 예제는 바로 위의 암시적 조인과 완전히 같은 동작을 합니다.

```sql
SELECT salaries.salary, salaries.from_date, employees.emp_no, employees.first_name
FROM salaries
JOIN employees ON employees.emp_no = salaries.emp_no;
```

`FROM`에 적었던 두 번째 테이블의 이름을 `JOIN` 바로 뒤에 적어주었습니다. 이렇게 `FROM` 구문으로 지정한 하나의 테이블에 `JOIN` 구문을 사용해서 다른 테이블을 합칠 수 있습니다. 이전에 `WHERE`를 이용해 적어주었던 기준은 `ON` 구문을 이용해 지정해줍니다.

`SELECT` 구문 뒤에 오는 컬럼 이름 앞에는 테이블 이름을 `table_name.column_name`과 같은 형식으로 붙여줍니다. 만약 컬럼 이름이 여러 테이블에 걸쳐서 유일하다면 테이블 이름을 아래와 같이 생략할 수 있습니다.

```sql
-- `emp_no`는 두 테이블 모두 가지고 있기 때문에, 앞에 붙이는 테이블 이름을 생략할 수 없습니다.
SELECT first_name, salary, from_date, employees.emp_no
FROM salaries
JOIN employees ON employees.emp_no = salaries.emp_no;
```

`AS` 구문을 이용해서 테이블 이름에도 별칭을 붙일 수 있습니다.

```sql
SELECT first_name, salary, from_date, emp.emp_no
FROM salaries AS sal
JOIN employees AS emp ON emp.emp_no = sal.emp_no;
```

# INNER JOIN & OUTER JOIN

위의 예제에서 '사원 테이블'과 '연봉 변동 내역 테이블'은 우리의 의도대로 잘 합쳐졌습니다. 그런데 조인의 기준을 충족시키지 못하는 레코드들, 다시 말해서 일치하는 `emp_no`가 없거나, 어느 한 쪽의 `emp_no` 컬럼에 `NULL`이 저장되어 있는 경우는 어떻게 될까요? 위에서 사용한 SQL 명령을 그대로 쓰면, 조인의 기준을 충족시키지 못하는 레코드들은 **아예 출력 결과에 포함이 되지 않습니다.**

이와 같은 조인 방식을 `INNER JOIN`이라고 합니다. 사실 위 SQL 명령은 다음과 완전히 같은 의미입니다.

```sql
SELECT first_name, salary, from_date, emp.emp_no
FROM salaries AS sal
INNER JOIN employees AS emp ON emp.emp_no = sal.emp_no;
-- `INNER JOIN`과 `JOIN`은 같은 의미입니다.
```

그런데 가끔, 조인의 기준을 충족시키지 못하는 레코드들도 결과에 포함시켜야 하는 경우가 있습니다. 이러한 조인 방식을 `OUTER JOIN`이라고 합니다. 이 문서에서는 `OUTER JOIN`을 다루지 않으나, 가끔 필요한 경우가 있으니 아래의 문서를 참고해주세요.

- [LEFT OUTER JOIN](https://www.w3schools.com/sql/sql_join_left.asp)
- [RIGHT OUTER JOIN](https://www.w3schools.com/sql/sql_join_right.asp)
- [FULL OUTER JOIN](https://www.w3schools.com/sql/sql_join_full.asp)

# 세 개 이상의 테이블 조인하기

아래와 같이 `JOIN` 구문을 여러 번 써서, 세 개 이상의 테이블을 합치는 것도 가능합니다.

```sql
-- departments 테이블에는 부서 번호와 부서 이름이 저장되어 있습니다.
-- dept_emp 테이블에는 사원의 전보 내역이 기록되어 있습니다.
SELECT employees.first_name, dept_emp.from_date, departments.dept_name
FROM employees
JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
JOIN departments ON departments.dept_no = dept_emp.dept_no;
```
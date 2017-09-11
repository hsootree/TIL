# salaries 테이블

실습용 `employees` 데이터베이스의 `salaries` 테이블에는 각 사원의 **연봉 변동 내역**이 저장되어 있습니다. 본 문서에서는 `salaries` 테이블을 이용해 실습합니다.

# 집계 함수 (Aggregate Function)

MySQL은 여러가지 집계 함수를 지원합니다.

| 집계 함수 | 의미 |
| --- | --- |
| MAX(col_name) | 최대값 |
| MIN(col_name) | 최소값 |
| SUM(col_name) | 합계 |
| AVG(col_name) | 평균 |
| COUNT(col_name) | 컬림에 NULL이 아닌 값이 저장되어 있는 행의 갯수 |
| COUNT(*) | 행의 갯수 |

다음 쿼리를 실행해보세요.

```sql
SELECT MAX(salary) FROM salaries;
```

```sql
SELECT MIN(salary) FROM salaries;
```

```sql
SELECT SUM(salary) FROM salaries;
```

```sql
SELECT AVG(salary) FROM salaries;
```

```sql
SELECT COUNT(*) FROM employees;
```

# GROUP BY

**그룹**이란 **특정 컬럼에 같은 값**을 갖고 있는 행들의 집합입니다. `GROUP BY` 구문을 사용해서, 위에서 했던 집계 작업을 그룹 단위로 수행할 수 있습니다.

```sql
-- 각 사원이 연봉을 가장 많이 받을 때 얼마를 받았는지를 가져옵니다.
SELECT emp_no, max(salary) FROM salaries
GROUP BY emp_no;
```

```sql
-- 각 사원의 연봉이 총 몇 번 변경되었는지를 가져옵니다.
-- AS 구문을 이용해 집계 컬럼의 이름을 변경할 수 있습니다.
SELECT emp_no, count(*) AS salary_count FROM salaries
GROUP BY emp_no;
```

`ORDER BY` 구문을 사용해 그룹 집계의 결과를 정렬할 수도 있습니다.

```sql
-- 각 사원의 연봉이 총 몇 번 변경되었는지를 가져오고, 많이 변경된 순서대로 출력합니다.
SELECT emp_no, count(*) AS salary_count FROM salaries
GROUP BY emp_no
ORDER BY salary_count DESC;
ORDER BY count(*) DESC; -- order by 안에 salary_count, count(*)를 사용해도 됨.

```

`WHERE` 구문을 사용해 집계에 포함될 레코드를 한정시킬 수도 있습니다.

```sql
-- 각 사원의 연봉이 1996년부터 2000년까지 총 몇 번 변경되었는지를 가져오고, 많이 변경된 순서대로 출력합니다.
SELECT emp_no, count(*) AS salary_count FROM salaries
WHERE from_date BETWEEN '1996-01-01' AND '2000-12-31'
GROUP BY emp_no
ORDER BY salary_count DESC;
```

# HAVING

그룹 집계의 결과에서 특정 그룹을 필터링한 결과를 출력할 수도 있습니다. `HAVING` 구문을 사용하면 되고, 문법은 `WHERE` 구문과 비슷합니다.

```sql
-- 최고 연봉이 15만 달러 이상인 사원의 사원 번호와 최고 연봉을 출력합니다.
SELECT emp_no, max(salary) AS max_salary FROM salaries
GROUP BY emp_no
HAVING max_salary > 150000
ORDER BY max_salary DESC;
```

`WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`을 모두 사용한 쿼리입니다. 각 구문은 아래와 같은 순서대로 사용되어야 합니다.

```sql
-- 1996년과 2000년 사이에 받았던 최고 연봉이 15만 달러보다 높았던 사원의 사원 번호와 최고 연봉을 출력합니다.
SELECT emp_no, max(salary) as max_salary FROM salaries
WHERE from_date BETWEEN '1996-01-01' AND '2000-12-31'
GROUP BY emp_no
HAVING max_salary > 150000
ORDER BY max_salary DESC;
```

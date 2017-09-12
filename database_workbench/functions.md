MySQL은 값의 연산을 위한 여러 가지 함수를 제공하고 있습니다.

MySQL의 모든 연산자 및 내장 함수의 목록은 [공식 문서](https://dev.mysql.com/doc/refman/5.7/en/func-op-summary-ref.html)를 참고하세요.

# 문자열 연산

`CONCAT` 함수를 이용해 문자열을 이어붙일 수 있습니다.

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;
```

`LOWER` 함수와 `UPPER` 함수는 각각 문자열을 소문자/대문자로 바꾸어줍니다.

```sql
SELECT UPPER(first_name) FROM employees;
```

```sql
SELECT LOWER(first_name) FROM employees;
```

`LENGTH` 함수는 문자열의 길이를 반환합니다.

```sql
SELECT first_name, LENGTH(first_name) AS length_first_name FROM employees
ORDER BY length_first_name DESC;
```

`SUBSTRING` 함수는 문자열의 일부분을 반환합니다. `SUBSTRING(문자열, 자를 인덱스, 자를 길이)`와 같이 사용합니다. 자를 인덱스는 1부터 시작합니다.

```sql
SELECT SUBSTRING(first_name, 1, 3) FROM employees; -- 앞의 세 글자를 반환
```

# 수 연산

`ABS` 함수는 절대값을 반환합니다.

```sql
SELECT ABS(-1);
```

`ROUND` 함수는 반올림한 결과를 반환합니다.

```sql
SELECT ROUND(1.5);
```

# 기타

`CURRENT_DATE` 함수는 오늘 날짜를 `DATE` 형식을 반환합니다. `NOW` 함수는 현재 시각을 `DATETIME` 형식으로 반환합니다.

```sql
SELECT CURRENT_DATE(); -- 작성된 일자 표현 할때 사용함. 접속할때 시간을 설정할 수 있으며 설정하지 않으면 서버의 시간으로 출력이 됨. 
```

```sql
SELECT NOW();
```

`COALESCE` 함수는 인자들 중 처음으로 `NULL`이 아닌 값을 반환합니다. 이 함수는 `NULL` 값과 `NULL`이 아닌 값이 모두 저장되어 있는 컬럼을 불러올 때, `NULL` 값을 대체하기 위해 사용됩니다.

```sql
-- 1이 출력됨
SELECT COALESCE(NULL, 1, 2); 
-- 처음으로 null이 아닌 값이므로 1이 출력되며 (null, null, 2 )인 경우에는 2가 출력됨.


-- 2가 출력됨
SELECT COALESCE(2, 1);

-- 만약 nullable_column에 NULL이 저장되어 있으면 'DEFAULT_VALUE`를 반환하고, 아니면 컬럼에 저장되어있는 값을 그대로 반환
SELECT COALESCE(nullable_column, 'DEFAULT_VALUE') FROM some_table;
```


# git
## 1. Chronicle of git  
- Linux Kernal을 만들기 위해 Subversion을 쓰다 화가 난 리누스 토발즈는 2주만에 git이라는 버전관리 시스템을 만듦  
[git official repo](https://github.com/git/git)  

## 2. Characteristics of git
- 빠른속도, 단순한 구조  
- 분산형 저장소 지원
- 비선형적 개발(수천개의 브랜치) 가능

## 3. Open-source project

https://github.com/python/cpython  
https://github.com/tensorflow/tensorflow  
https://github.com/JuliaLang/julia  
https://github.com/golang/go

## 4. Git Process and Command
![](https://i.stack.imgur.com/MgaV9.png)

## 5. Install git
https://git-scm.com/
```
$ brew install git
$ sudo apt-get install git
$ git --version
```
## 6. Set configuration
```
$ git config --global user.name "username"
$ git config --global user.email "github email address"
$ git config --list
```

## 7. My First Repo
Make my first repo with github
```
$ git init
$ git add .
$ commit -m "some commit"
```
After create new repo through github
```
$ git remote add origin https://github.com/username/repo.git  
$ git push origin master
```

```
$ git status
```
Sometimes things change and you don't notice it.

## 8. Github 저장소를 활용
github 저장소를 활용해 정적인 사이트 호스팅이 가능  
```
$ username.github.io
```
http://tech.kakao.com/  
https://spoqa.github.io/

## 9. Create new repo throuch github
```
$ git clone https://github.com/username/username.github.io.git
```
Create new file `index.html`
```
$ git add .
$ git commit -m "first page"
$ git push origin master
```

## 10. 블로그 생성기
- Jekyll : Ruby 기반 정적임
  - 설치와 사용이 쉬움
  - 사용자가 많음
- Hugo : Golang 기반 정적임
  - 빠른 속도로 사이트를 생성
  - 사용자 증가 중
- Hexo : Node.js 기반 정적임
  - Node.js를 안다면 커스터마이즈가 쉬움
  - 빠른 속도로 사용자 증가 중

## 11. Branch
master branch
```
print('hello world!')
```
another branch
```
for i in range(1,10) : prin('helloworld for the %s times!'% i)
```
Show availabel local branch
```
$ git branch
```
Show available remote branch
```
$ git branch -r
```
Show available All branch
```
$ git branch -a
```
Create branch
```
$ git branch stem
```
Checkout branch
```
$ git checkout stem
```
Create & Checkout branch
```
git checkout -b new-stem
```
make changes inside `readme.md`
```
$ git commit -a -m 'editreadme.md'
$ git checkout master
```
merge branch
```gi
$ git merge stem
```
delete branch
```
$ git branch -D stem
``` 
push with specified remote branch
```
$ git push origin stem
```
see the difference between two branches
```
$ git diff master stem
```


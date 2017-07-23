# git
## Chronicle of git  
- Linux Kernal을 만들기 위해 Subversion을 쓰다 화가 난 리누스 토발즈는 2주만에 git이라는 버전관리 시스템을 만듦
[git official repo](https://github.com/git/git)  

## Characteristics of git
- 빠른속도, 단순한 구조  
- 분산형 저장소 지원
- 비선형적 개발(수천개의 브랜치) 가능

## Open-source project

https://github.com/python/cpython
https://github.com/tensorflow/tensorflow
https://github.com/JuliaLang/julia
https://github.com/golang/go

## Git Process and Command
![](https://i.stack.imgur.com/MgaV9.png)

## Install git
https://git-scm.com/
```
$ brew install git
$ sudo apt-get install git
$ git --version
```
## Set configuration
```
$ git config --global user.name "username"
$ git config --global user.email "github email address"
$ git config --list
```

## My First Repo
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

## Git add
```
$ git add 
```
# 11. CSS3 Effect

## 11.1. 벤더 프리픽스( Vendor Prefix)
Can I use (link) 을 참고하여 브라우저 호환을 고려
```
* {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
}

Browser	: Vendor Prefix
IE or Edge :	-ms-
Chrome :	-webkit-
Firefox :	-moz-
Safari :	-webkit-
Opera :	-o-
iOS Safari :	-webkit-
Android Browser :	-webkit-
Chrome for Android :	-webkit-
```
## 11.4. 트랜지션 (Transition)
요소를 변형시키는 것




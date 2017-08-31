# 1. Global Object
전역 객체(Global Object)는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 Browser-side에서는 window, Server-side(Node.js)에서는 global 객체를 의미한다.

```javascript
// in browser console
this === window // true

// in Terminal
node
this === global // true
```

```javascript
document.getElementById('foo').style.display = 'none';

===

window.document.getElementById('foo').style.display = 'none';
// window.document.getElementById('foo').style.display = 'none';
```


var express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.use('/static', express.static('public'))

// 프로필을 몇 개 더 추가해보세요
const data = [
  {
    slug: 'seungha',
    name: '김승하',
    avatar: 'https://cdn.glitch.com/50c24104-3d4a-45ce-a960-271977ba01e8%2Fbeb64e6851616833bebee094e7b13b30.jpeg?1503412166247',
    description: '패스트캠퍼스에서 Node.js 강의를 하고 있는 김승하입니다.'
  },
  {
    slug: 'hsootree',
    name: '최혜선',
    avatar: 'https://avatars1.githubusercontent.com/u/28213999?v=4&u=9a0f9564b52332f143e9ecd957469797cac5e01c&s=400',
    description: '노드 공부를 하고 있습니다. 재미있군요. ㅎㅎㅎ'
  },
  {
    slug: 'O-Seok',
    name: '정영석',
    avatar: 'https://avatars3.githubusercontent.com/u/30969991?v=4&s=460',
    description: '노드 공부를 하고 있습니다. 이미지는 여자친구가 그려준 거에요.'
  }
]
// https://avatars3.githubusercontent.com/u/30969991?v=4&s=460
// 프로필 목록
app.get('/', (req, res) => {
  res.render('index.ejs', {data})
})

// 개별 프로필 페이지
app.get('/profile/:slug', (req, res) => { // slug 긴 이름이나 제목, 또는 말을 짧게 사용하는 것을 slug라고 한다.
  const slug = req.params.slug
  const profile = data.find(item => item.slug === slug)
  if (profile) {
    res.render('profile.ejs', profile)
  } else {
    res.status(404)
    res.send('404 Not Found')
  }
})

app.listen(3000, function() {
  console.log('listening...')
})

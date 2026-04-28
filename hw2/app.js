const express = require('express');
const app = express();

// 設定 EJS 為模板引擎
app.set('view engine', 'ejs');
app.set('views', './views');

// 三國英雄資料
const heroes = ['關羽', '張飛', '趙雲', '馬超', '黃忠'];

// 路由：/hero
app.get('/hero', (req, res) => {
  res.render('hero', {
    studentId: 'S23113135', 
    title: '蜀漢五虎將',
    heroes: heroes
  });
});

// 啟動伺服器
app.listen(3000, () => {
  console.log('伺服器啟動中，請造訪 http://localhost:3000/hero');
});

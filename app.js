const express = require('express');
const path = require('path');
const app = express();

// setup EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view')); // sửa lại cho đúng chuẩn

// data
const heroes = ['關羽', '張飛', '趙雲', '馬超', '黃忠'];

// route trang chủ
app.get('/', (req, res) => {
  res.redirect('/hero'); // vào web là tự chuyển sang /hero
});

// route hero
app.get('/hero', (req, res) => {
  res.render('hero', {
    studentId: 'S23113135',
    title: '蜀漢五虎將',
    heroes: heroes
  });
});

// dùng PORT của Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

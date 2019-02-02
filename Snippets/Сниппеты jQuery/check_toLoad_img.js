// Проверить, загрузилось ли изображение
// 
// Вот сниппет, который я часто использую при работе с изображениями, 
// потому что, это лучший способ узнать, загрузилось изображение или нет.

var imgsrc = 'img/image1.png';
$('<img/>').load(function () {
    alert('image loaded');
}).error(function () {
    alert('error loading image');
}).attr('src', imgsrc);
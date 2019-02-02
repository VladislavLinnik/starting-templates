// Сокращение текстового поля

/*
Этот скрипт функции excerpt в WordPress.  Она позволяет обрезать строку с определенным количеством слов и при необходимости добавлять многоточия. 
Скрипт работает с текстом, который имеет и другие встроенные теги, например, strong или  em ссылки.
*/

function excerpt(str, nwords) {
  var words = str.split(' ');
  words.splice(nwords, words.length-1);
  return words.join(' ') +
    (words.length !== str.split(' ').length ? '&hellip;' : '');
}
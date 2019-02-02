// Вложение Youtube-видео из ссылки

/*
Полезный скрипт для создание встроенных YouTube видео по ссылкам с пользовательскими параметрами. 
Он работает в основном с любым форматом ссылок Youtube.
*/



/*
ИСПОЛЬЗОВАНИЕ:

	embedYoutube(
	  'https://www.youtube.com/watch?v=JaAWdljhD5o',
	  { params: 'theme=light&fs=0' }
	);
*/




function embedYoutube(link, ops) {

  var o = $.extend({
    width: 480,
    height: 320,
    params: ''
  }, ops);

  var id = /\?v\=(\w+)/.exec(link)[1];
  return '<iframe style="display: block;"'+
    ' class="youtube-video" type="text/html"'+
    ' width="' + o.width + '" height="' + o.height +
    ' "src="http://www.youtube.com/embed/' + id + '?' + o.params +
    '&amp;wmode=transparent" frameborder="0" />';
}
// Анимированные текстовые эффекты

// Простой скрипт для анимации свойств текста. Это дает некоторые результаты, которые можно обьединять с CSS переходами. 
// Для удобства использования это фрагмент приводится в качестве плагина JQuery.




// Использование:
// Создаем класс CSS с некоторыми стилями и запускаем плагин на элемент, который содержит строчки текста.
// $('p').animateText(15, 'foo');





$.fn.animateText = function(delay, klass) {

  var text = this.text();
  var letters = text.split('');

  return this.each(function(){
    var $this = $(this);
    $this.html(text.replace(/./g, '<span class="letter">$&</span>'));
    $this.find('span.letter').each(function(i, el){
      setTimeout(function(){ $(el).addClass(klass); }, delay * i);
    });
  });
};
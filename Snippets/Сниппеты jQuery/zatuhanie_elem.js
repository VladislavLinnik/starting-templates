// Затухание элементов один за другим

// jQuery плагин, который заставляет по одному исчезать некий набор элементов. 




// Применение:
// $(elements).fadeAll({ delay: 300, speed: 300 });





$.fn.fadeAll = function (ops) {
  var o = $.extend({
    delay: 500, // delay between elements
    speed: 500, // animation speed
    ease: 'swing' // other require easing plugin
  }, ops);
  var $el = this;
  for (var i=0, d=0, l=$el.length; i<l; i++, d+=o.delay) {
    $el.eq(i).delay(d).fadeIn(o.speed, o.ease);
  }
  return $el;
}
// Этот удобный фрагмент кода позволяет создавать растянутый по ширине/высоте вьюпорта div. 
// Код также поддерживает изменение размеров окна. Прекрасное решение для модальных диалогов и popup-окон.

// global vars
var winWidth = $(window).width();
var winHeight = $(window).height();

// set initial div height / width
$('div').css({
    'width': winWidth,
'height': winHeight,
});

// make sure div stays full width/height on resize
$(window).resize(function(){
    $('div').css({
    'width': winWidth,
    'height': winHeight,
});
});
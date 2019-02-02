$(function() {
	

	$('.menuToggle').on('click', function() {
		
		$('.menu').slideToggle(300, function() {
			// Исправление бага с ресайзом (когда при изменении изчезает блок меню)
			// Удаляет style='none' который ставит jQuery
			if($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});

	});
	
});
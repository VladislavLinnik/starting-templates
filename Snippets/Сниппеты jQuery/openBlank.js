// Аттрибут target="_blank" позволяет вам открывать ссылки в новых окнах. 
// Но это относится к открытию внешних ссылок, внутридоменные ссылки должны окрываться в том же окне.
// Этот код находит внешнюю ссылку и добавляет в найденный элемент аттрибут target="_blank".

$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});
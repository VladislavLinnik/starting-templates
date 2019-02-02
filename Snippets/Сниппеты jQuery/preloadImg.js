// jQuery упрощает предзагрузку изображений в фоне, 
// так что посетителям не придется ждать целую вечность, 
// когда появятся желаемые изображения. Код готов к использованию, 
// просто отредактируйте список изоборажений в строке 8.

$.preloadImages = function() {
       for(var i = 0; i<arguments.length; i++) {
               $("<img />").attr("src", arguments[i]);
       }
}

$(document).ready(function() {
       $.preloadImages("hoverimage1.jpg","hoverimage2.jpg");
});
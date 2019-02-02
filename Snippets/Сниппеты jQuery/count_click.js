// Подсчет кликов

/*
Иногда вам нужно знать, сколько раз пользователь нажимает на элемент. 
Наиболее распространенным является счетчик в качестве глобальной переменной,
но с JQuery также это можно сделать с помощью using data() для хранения счетчика.
*/


$(element)
    .data('counter', 0) // begin counter at zero
    .click(function() {
        var counter = $(this).data('counter'); // get
        $(this).data('counter', counter + 1); // set
        // do something else...
});
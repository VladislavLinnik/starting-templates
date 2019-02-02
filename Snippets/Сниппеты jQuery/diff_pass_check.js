// Когда вы предоставляете пользователям самостоятельный выбор пароля, 
// было бы неплохо показать насколько сложен их пароль. Код сниппета именно это и делает.
// 
// Для начала создадим поля ввода:
// 
// <input type="password" name="pass" id="pass" />
// <span id="passstrength"></span>
// 
// И далее немного jQuery кода. Введенный пароль будет проверен с помощью регулярных выражений 
// и на основе этого пользователю будет выведено сообщение насколько сложен его пароль.

$('#pass').keyup(function(e) {
     var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
     var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
     var enoughRegex = new RegExp("(?=.{6,}).*", "g");
     if (false == enoughRegex.test($(this).val())) {
             $('#passstrength').html('More Characters');
     } else if (strongRegex.test($(this).val())) {
             $('#passstrength').className = 'ok';
             $('#passstrength').html('Strong!');
     } else if (mediumRegex.test($(this).val())) {
             $('#passstrength').className = 'alert';
             $('#passstrength').html('Medium!');
     } else {
             $('#passstrength').className = 'error';
             $('#passstrength').html('Weak!');
     }
     return true;
});
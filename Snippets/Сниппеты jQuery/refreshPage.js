// Если вам нужно обновить только часть страницы, то эти 3 строки кода точно помогут. 
// В примере div с id #refresh автоматически обновляется каждые 10 секунд.

setInterval(function() {
  $("#refresh").load(location.href+" #refresh>*","");
}, 10000); // milliseconds to wait
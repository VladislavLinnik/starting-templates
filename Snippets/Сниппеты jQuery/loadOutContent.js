//Вам нужно добавить определенный внешний контент в div? 
//Так вот это очень просто сделать с jQuery, как показано в нижеприведенном примере.
$("#content").load("somefile.html", function(response, status, xhr) {
  // error handling
  if(status == "error") {
    $("#content").html("An error occured: " + xhr.status + " " + xhr.statusText);
  }
});
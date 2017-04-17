$(document).ready(

  $(function(){
     $(".thebutton").click(function () {
        $(this).text(function(i, text){
            return text === "ADDED!" ? "ADDED TO CART!" : "ADDED TO CART!";
        })
     });
  })

);

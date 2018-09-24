$(document).scrollTop(0);

$(document).ready(function(){
    $("#back").on("click", function(event)  {
        $("body").load("../index.html");
    });
});
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
    
    $("#solitaire").on("click", function(event)  {
        window.open("https://github.com/changrif/Solitaire");
    });
    
    $("#tigerisland").on("click", function(event)  {
        window.open("https://github.com/changrif/TigerIsland");
    });
    
    $("#lingo").on("click", function(event)  {
        window.open("https://devpost.com/software/lingo-wnr4yz");
    });
    
    $("#webdev").on("click", function(event)  {
        window.open("https://idael.net");
    });
});
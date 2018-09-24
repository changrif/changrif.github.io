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
    
    var thd = document.getElementById('thd');
    thd.addEventListener('click', loadTHD, false);
    
    var gameon = document.getElementById('gameon');
    gameon.addEventListener('click', loadGameon, false);
    
    var swamphacks = document.getElementById('swamphacks');
    swamphacks.addEventListener('click', loadSwamp, false);
    
    var codepath = document.getElementById('codepath');
    codepath.addEventListener('click', loadCodepath, false);
    
    var ftp = document.getElementById('ftp');
    ftp.addEventListener('click', loadFTP, false);
    
    var eweek = document.getElementById('eweek');
    eweek.addEventListener('click', loadEweek, false);
    
    function loadTHD()  {
        var path = "../thd.html";
        $("body").load(path);
    }
    
    function loadGameon()  {
        var path = "../gameon.html";
        $("body").load(path);
    }
    
    function loadSwamp()  {
        var path = "../swamphacks.html";
        $("body").load(path);
    }
    
    function loadCodepath()  {
        var path = "../codepath.html";
        $("body").load(path);
    }
    
    function loadFTP()  {
        var path = "../ftp.html";
        $("body").load(path);
    }
    
    function loadEweek()  {
        var path = "../eweek.html";
        $("body").load(path);
    }
    
    $("#lingo").on("click", function(event)  {
        window.open("https://devpost.com/software/lingo-wnr4yz");
    });

    $("#tigerisland").on("click", function(event)  {
        window.open("https://github.com/changrif/TigerIsland");
    });

    $("#webdev").on("click", function(event)  {
        window.open("https://idael.net");
    });

    $("#solitaire").on("click", function(event)  {
        window.open("https://github.com/changrif/Solitaire");
    });

});
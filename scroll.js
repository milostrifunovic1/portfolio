$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
       // window.location.hash = hash;
      });
    } // End if
  });
});

// pokretanje animacije kada se stigne na njenu sekciju
var skillsPos = $("#skills").offset().top;
var fromTop;
$(window).scroll(function () {
    fromTop = $(window).scrollTop();
    if(fromTop >= skillsPos){
        $('.fundo1 div').addClass("progresso1");
        $('.fundo2 div').addClass("progresso2");
        $('.fundo3 div').addClass("progresso3");
        $('.fundo4 div').addClass("progresso4");
        $('.fundo5 div').addClass("progresso5");
        $('.fundo6 div').addClass("progresso6");
        $('.fundo7 div').addClass("progresso7");
    };
});

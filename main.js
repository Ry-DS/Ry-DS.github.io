//smooth scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".fixed-side-navbar a, .primary-button a").on('click', function(event) {

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
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  //typed.js
  var options = {
    strings: ["Hi!","My name's Ryan","I'm a developer"],
    typeSpeed: 40,
    backSpeed: 100,
    startDelay: 1000,
    backDelay: 500,
    loop: false,
    loopCount: Infinity,
    smartBackspace: true
};
var typed = new Typed("#name", options);
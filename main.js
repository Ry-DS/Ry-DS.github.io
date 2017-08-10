$(document).ready(function(){
    $(".rotate").textrotator({
        animation: "fade",
        speed: 1250
    });
    $(".rotate2").textrotator({
        animation: "flip",
        speed: 1250
    });
    $(".rotate3").textrotator({
        animation: "flipCube",
        speed: 1500
    });
    $(".rotate4").textrotator({
        animation: "flipUp",
        speed: 1750
    });
    $(".rotate5").textrotator({
        animation: "spin",
        speed: 2000
    });
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
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


});
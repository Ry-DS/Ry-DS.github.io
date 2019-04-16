/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/
//Parallax and owl carousel init
jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS

    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });


    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
    });
      
      // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })

    var owl = $("#owl-testimonials");

      owl.owlCarousel({
        
        pagination : true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,3], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        
    });


});
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
//animate on scroll
AOS.init();
//typed.js
var typedOptions = {
    strings: ["build websites","make games","take photos","edit media","make web-apps"],
    typeSpeed: 40,
    backSpeed: 40,
    startDelay: 1000,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
    smartBackspace: true
};
new Typed("#name", typedOptions);

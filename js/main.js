/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/
//Parallax and owl carousel init
jQuery(document).ready(function($) {

	'use strict';

    var top_header = $('.parallax-content');
    top_header.css({'background-position':'center center'}); // better use CSS


    var isMobile = false;

    if( $('#mobile-detect').css('display')=='none') {
        isMobile = true;       
    }

    

    if (!isMobile) {//animate, computer im running on can handle it
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
            });
        
    }else top_header.css({ 'background-attachment': 'fixed',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        
        'background-size': 'cover'});//freeze it instead. 
   

    $('body').scrollspy({ 
        target: '.fixed-side-navbar',
        offset: 200
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
const typedOptions = {
    strings: ["build websites", "make games", "take photos", "edit media", "make web-apps"],
    typeSpeed: 40,
    backSpeed: 40,
    startDelay: 1000,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
    smartBackspace: true
};
new Typed("#name", typedOptions);
let portfolio = new Shuffle(document.querySelector('.portfolio-items'), {
    itemSelector: 'li'
});
//Portfolio display
$('.portfolio-filters > li > a').on('click', function (e) {
    e.preventDefault();
    let groupName = $(this).attr('data-group');
    $('.portfolio-filters > li > a').removeClass('active');
    $(this).addClass('active');
    portfolio.filter(groupName);
});

window.onload = () => {
    $('#portfolio').addClass($('#portfolio').attr('data-class'));
    $('#contact-us').addClass($('#contact-us').attr('data-class'));
    console.log("Loading Gifs...");
    let numGifs = 0;
//loading gifs after page load cause they take forever
    $('.gif-load').each(function (e) {
        let img = $(this);
        let src = img.attr('data-src');
        img.attr('src', src);
        img.bind('load', () => {
            portfolio.filter();
        });
        numGifs++;
    });
    console.log("Loaded " + numGifs + " Gifs");
    setTimeout(()=>{
        portfolio.filter();
        for (let i = 1; i <= $('.portfolio-content > .container > .row > div >  .portfolio-items > li').length; i++) {

            $('#popup-' + i).iziModal({headerColor: '#ff7d27', icon: 'fas fa-briefcase', background: 'rgb(36, 36, 19)'});


        }

    }, 3000);




};

/* 

Based off Vanilla Template

https://templatemo.com/tm-526-vanilla

Check it out, its pretty awesome. 

*/
//used to disable parralax scrolling and limiting other things to improve performance + change 'click' to 'tap'
let isMobile = false;
//Parallax
jQuery(document).ready(function ($) {


    let top_header = $('.parallax-content');
    top_header.css({'background-position': 'center center'}); // prepare for parallax


    if ($('#mobile-detect').css('display') == 'none') {//detect if on mobile
        isMobile = true;
    }


    if (!isMobile) {//do parallax, computer im running on can handle it
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            top_header.css({'background-position': 'center calc(50% + ' + (st * .5) + 'px)'});
        });

    } else top_header.css({
        'background-attachment': 'fixed',
        'background-position': 'center',
        'background-repeat': 'no-repeat',

        'background-size': 'cover'
    });//freeze it instead. 


    $('body').scrollspy({ //updates side bar nav based on position on webpage
        target: '.fixed-side-navbar',
        offset: 200
    });

    // Add smooth scrolling to all links
    $(".fixed-side-navbar a, .primary-button a").on('click', function (event) {

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
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });


});

//animate on scroll - revealing effects
AOS.init();
//typed.js - intro page effect
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
//Portfolio display - filter buttons
$('.portfolio-filters > li > a').on('click', function (e) {
    e.preventDefault();
    let groupName = $(this).attr('data-group');
    $('.portfolio-filters > li > a').removeClass('active');
    $(this).addClass('active');
    portfolio.filter(groupName);
});

window.onload = () => {
    //load backdrops later to improve loading time
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
            portfolio.filter();// we need to reload portfolio page every image load so cards size correctly
        });
        numGifs++;
    });
    console.log("Loaded " + numGifs + " Gifs");


    //theme izimodals on startup
    $('.iziModal').each(function (index) {
        $(this).iziModal({headerColor: '#ff7d27', icon: 'fas fa-briefcase', background: 'rgb(36, 36, 19)'})
    })

    // read url params and jump to relevant portfolio card if present

    let params = getUrlVars();
    if (window.location.hash.includes('portfolio') && params['card']) {
        setTimeout(() => $(`#popup-${params['card']}`).iziModal('open'), 600);

    }
    //Tooltip for folio section - encourage people to click it
    let holder = $('.tooltip-holder');
    holder.tooltip({
        title: `${isMobile ? 'Tap' : 'Click'} to learn more`,
        trigger: 'manual',
        placement: 'top',
        fade: true
    });

    // code to make the tooltip appear on scroll. 
    let shown = false;
    $(window).scroll(function () {
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + $(window).height();

        const elemTop = $(holder).offset().top;
        const elemBottom = elemTop + $(holder).height();

        if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop) && !shown) {

            setTimeout(() =>
                    holder.tooltip('show')
                , 1000);//small timeout to grab attention

            setTimeout(() =>
                    holder.tooltip('hide')
                , 30000);// Timeout to hide if nothing is done
            shown = true;

        }
    });
    $('.view-project').click(() => holder.tooltip('hide'));//also hide it if a card is clicked

    // load instagram carousel
    const NUM_IMAGES = 10;
    const carousel = $('#insta-carousel');

    carousel.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    for (let i = 1; i <= NUM_IMAGES; i++) {
        const imgUrl = `img/Instagram Photos/${i}.jpg`;

        carousel.slick('slickAdd', `<a href="https://www.instagram.com/ryan_s_life/" style="text-align: center" target="_blank"><img src="${imgUrl}" style="object-fit: cover;width: 100%;height: 285px;" alt="Instagram Photo"/></a>`);

    }


};

//https://html-online.com/articles/get-url-parameters-javascript/
function getUrlVars() {
    const vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
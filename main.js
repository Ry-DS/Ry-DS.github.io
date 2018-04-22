$(document).ready(function () {
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
    $("a").on('click', function (event) {

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
        } // End if
    });

    window.setInterval(changeColor, 1250);


});
window.onload = (e) => {
    console.log("loading gifs...");
    //loading gifs after so they don't lag page
    for (let i = 1; i <= 3; i++) {

        document.getElementById("sec" + i).classList.add("bgimg-" + (i + 1));
    }
    for (let i = 1; i <= 6; i++) {
        document.getElementById("gif" + i).src = "img/gif/" + i + ".gif";

    }


};
/*
                Copyright Ryan Samarakoon
                https://simplyballistic.github.io
                You care welcome to use this color changer if you retain this licence
             */
let color = 0;

function changeColor() {
    let colorString = "#ff9800";
    switch (color) {
        case 0:
            //cyan
            colorString = "#00bcd4";
            break;
        case 1:
            //lime
            colorString = "#cddc39";
            break;
        case 2:
            //teal
            colorString = "#f44336";
            break;

        default:
            //orange
            colorString = "#ff9800";
    }

    $(".color-animate").animate({
        color: colorString
    }, 500);
    color++;
    if (color > 3)
        color = 0;
}
$(document).on('click', 'a', function (event) {

    // Prevent default events
    event.preventDefault();

    // Animate the body (html page) to scroll to the referring element 
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

});
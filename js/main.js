$(document).on('click', '.nav-link', function (event) {

    // Prevent default events
    event.preventDefault();

    // Animate the body (html page) to scroll to the referring element 
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);

});

$(window).scroll(function () {

    let a = 1;
    let pos = $(window).scrollTop();
    if (pos > a) {
        $(".navbar").css({
            background: '#fff'
        });
    }
    else {
        $(".navbar").css({
            background: 'transparent',
        });
    }
});
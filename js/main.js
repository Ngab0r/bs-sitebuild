$(document).on('click', '.nav-link', function (event) {

    event.preventDefault();

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

$('[data-toggle="tooltip"]').tooltip();
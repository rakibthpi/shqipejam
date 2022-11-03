$(document).ready(function () {

    $('.menu ul li a,.scrollSectionBtn').click(function () {

        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);

        return false;
    });

    // Back to TOP 
    $('.scrollBtn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);

        return false;
    });

    $('.hambar').click(function () {
        $('.menu ul').slideToggle();
    })

});


$(window).scroll(function () {

    var scrollValue = $(this).scrollTop();

    if (scrollValue > 500) {
        $('.scrollBtn').fadeIn();
    } else {
        $('.scrollBtn').fadeOut();
    }

    if (scrollValue > 200) {
        $('.menuarea').addClass('FixedHeader');
    } else {
        $('.menuarea').removeClass('FixedHeader');
    }

});

function myFunction(x) {
    x.classList.toggle("change");
}
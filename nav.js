
$(window).on('scroll', function () {
    var el = $('.menubar');
    var tx = el.position().top; // + el.outerHeight(true);
    if ($(this).scrollTop() > tx) {
        if (!$('.menubar').hasClass('menubar-nav')) {
            $('.menubar').addClass('menubar-nav');
        }
    } else {
        if ($('.menubar').hasClass('menubar-nav')) {
            $('.menubar').removeClass('menubar-nav');
        }
    }
});
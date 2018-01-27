
$(window).on('scroll', function () {
    var setItemClass = function(element, className, state){
        if(state){
            if (!element.hasClass(className)) {
               element.addClass(className);
            }
        } else {
            if (element.hasClass(className)) {
                element.removeClass(className);
            }
        }
    };
    var tx = $('.navbar').position().top; // + el.outerHeight(true);
    var show = ($(this).scrollTop() > tx) ? 1 : 0;
    
    var el2 = $('.content-a-inner > h1');
    var tx2 = el2.position().top + el2.offset().top + el2.outerHeight(true);
    var show2 = ($(this).scrollTop() + $('.menubar').height() > tx2) ? 1 : 0;
    setItemClass($('.navbar'), 'navbar-fixed', show);
    setItemClass($('.menubar'), 'menubar-fixed', show);
    setItemClass($('.menu_mark'), 'menu_mark-fixed', show);
});
$(window).bind('hashchange', function() {
    //console.log($(this).scrollTop());
    $('html, body').css('scroll-top',$(this).scrollTop() - $('.navbar-fixed').height());
    /*$('html, body').animate({
        scrollTop: $(this).scrollTop() - $('.navbar-fixed').height()
    }, 1000);*/
});
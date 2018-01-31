
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
/*$(window).bind('hashchange', function() {
    //console.log($(this).scrollTop());
    $('html, body').css('scroll-top',$(this).scrollTop() - $('.navbar-fixed').height());
    / *$('html, body').animate({
        scrollTop: $(this).scrollTop() - $('.navbar-fixed').height()
    }, 1000);* /
});*/
/*var toAnchor = function (n){
    var headerHeight = ($(".navbar").height() + $(".navbar").outerHeight());
    //console.log($("a[name='" + n + "']").offset().top);
    $('html,body').animate({
        scrollTop: $("a[name='" + n + "']").offset().top - headerHeight
    }, 500);
    $('.main-background').scrollTop(0);
};
var switchAnchor = function(h){
    var target = $(h), headerHeight = ($(".navbar").height() + $(".navbar").outerHeight()); // Get fixed header height
    target = target.length ? target : $('[name=' + h.slice(1) +']');

    if (target.length){
        console.log($('html,body'));
        $('html,body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 500);
        console.log($('.main-background').scrollTop());
        $('.main-background').scrollTop(0);
        return false;
    }
};*/
var fixBackgroundScroll = function(){
    if($('.main-background').scrollTop() > 0){
        console.log($('.main-background').scrollTop());
        console.log((new Date()).getTime()/1000.0);
        $('.main-background').scrollTop(0);
    }
};
$(document).ready(function() {
    /*if(window.location.hash && window.location.hash != '#'){
        toAnchor(window.location.hash.slice(1));
    }
    $('.main-background').scrollTop(0);*/
    // FIXME
    $('.menu_mark').on('click',function(){
        //console.log('click');
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });
    var t = setInterval(fixBackgroundScroll, 50);
});
$('.main-background').scroll(fixBackgroundScroll);
/*(function($) {
    $( document ).ready(function() {
       // console.log($(".navbar-fixed").height());
       // console.log($("a[href*='#']:not([href='#'])"));
      $("a[href*='#']:not([href='#'])").click(function(){
          //console.log('XD');
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname){
            ///switchAnchor(this.hash);
        }
        $('.main-background').scrollTop(0);
      });
  });
})(jQuery);*/
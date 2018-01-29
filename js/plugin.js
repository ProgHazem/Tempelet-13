/*global value, $, alert: false, console: false, jQuery: false */
$(function () {
    "use strict";
    $(window).scroll(function () {
        var headScroll = $(this).scrollTop();
        if (headScroll >= 550) {
            $('.head-scroll').fadeIn(1000);
        } else {
            $('.head-scroll').fadeOut(1000);
        }
    });
    $('.header ul li a').click(function () {
        $('html, body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        }, 1500);
    });
});
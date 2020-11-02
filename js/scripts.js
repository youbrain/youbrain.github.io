
jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });
});

jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());
    // --------------------------------------------------------------------
    // Owl Carousal
    // --------------------------------------------------------------------

    (function () {
        $("#review").owlCarousel({
            autoPlay: 10000, //Set AutoPlay to 3 seconds
            items: 2,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });
    }());

    setTimeout(function start (){
      
      $('.bar').each(function(i){  
        var $bar = $(this);
        $(this).append('<span class="count"></span>')
        setTimeout(function(){
          $bar.css('width', $bar.attr('data-percent'));      
        }, i*100);
      });

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).parent('.bar').attr('data-percent')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) +'%');
            }
        });
    });

    }, 500)



}); // JQuery end
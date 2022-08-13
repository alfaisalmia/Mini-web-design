(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $("#sticker").sticky({topSpacing:0});
        
        new WOW().init();
        
        $('li.smoot_scroll a').bind('click' ,function(event) {
            var $anchor = $(this);
            var headerH = '120';
            $('html,body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"}, 800 , 'easeOutQuart');
            return false;
        });
        
        $("#our_carousel").owlCarousel({
            autoPlay: 3000,
            slideSpeed : 500,
            singleItem:true,
            itemsScaleUp : true,
            items : 1
        });
        
        $("#services_carousel").owlCarousel({
            autoPlay: 3000,
            slideSpeed : 500,
            singleItem:true,
            itemsScaleUp : true,
            items : 1
        });
                
        
        $("#slider_carousel").owlCarousel({
            autoPlay: 4000,
            slideSpeed : 500,
            singleItem:true,
            itemsScaleUp : true,
            items : 1,
            navigation : true,
            pagination : true,
            navigationText : ["<",">"]
        });
        
        $("#portfolio_carousel").owlCarousel({
            navigation : false,
            autoPlay: 4000,
            slideSpeed : 800,
            singleItem:true,
            itemsScaleUp : true,
            items : 1,
            pagination : false
        });
        
         $("#client_carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 4,
            pagination : false,
            itemsDesktop : [1170,3],
            itemsDesktopSmall : [970,3]
        });
        
        $('#portfolio_category').mixItUp({
            animation: {
                effects: 'fade, rotateY(-210deg)'
            }
        });
        
        $('.timer').countTo({});
            
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	
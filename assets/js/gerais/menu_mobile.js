/* =================== MENU MOBILE =================== */
jQuery(document).ready(function($){

    $('#menu-mobile-open').on('click', function() {
        $('.menu-mobile').addClass('active');
    });

    $('.menu-mobile').on('click', function(e) {
        if (e.target == this) {
        	$('.menu-mobile').removeClass('active');
        }
    });

    $('.menu-mobile-sub').on('click', function(e) {
        //e.preventDefault();
    	$(this).toggleClass('open');
    	$(this).find('ul').slideToggle();
    });
});
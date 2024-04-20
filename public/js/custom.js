(function($) {
"use strict";

/* ==============================================
ACCORDION -->
=============================================== */

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('fa-minus fa-plus');
    }
    $('#accordion').bind('hidden.bs.collapse', toggleChevron);
    $('#accordion').bind('shown.bs.collapse', toggleChevron);
    
/* ==============================================
MENU -->
=============================================== */

    $('ul.dropdown-menu [data-toggle=dropdown]').bind('click', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        $(this).parent().addClass('open');
        $(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
    });

/* ==============================================
LOADER -->
=============================================== */

    $(window).load(function() {
        $('#loader').delay(300).fadeOut('slow');
        $('#loader-container').delay(200).fadeOut('slow');
        $('body').delay(300).css({'overflow':'visible'});
    })

/* ==============================================
TOOLTIP -->
=============================================== */

	$('body').tooltip({
		selector: "[data-tooltip=tooltip]",
		container: "body"
	});

/* ==============================================
ANIMATION -->
=============================================== */

    new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }).init();

/* ==============================================
CAROUSEL -->
=============================================== */

    $('#owl-sticky').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

})(jQuery);
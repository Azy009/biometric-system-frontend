    (function($) {
      "use strict";
/* ==============================================
MAP -->
=============================================== */

  var locations = [
    ['<div class="infobox"><h3 class="title"><a href="about1.html">OUR USA OFFICE</a></h3><span>NEW YORK CITY 2045 / 65</span><br>+90 555 666 77 88</p></div></div></div>', -37.801578, 145.060508, 2]
    ];
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      scrollwheel: false,
      navigationControl: true,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true,
      
      center: new google.maps.LatLng(-37.801578, 145.060508),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
    var infowindow = new google.maps.InfoWindow();
  
    var marker, i;
  
    for (i = 0; i < locations.length; i++) {  
    
      marker = new google.maps.Marker({ 
      position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
      map: map ,
      icon: 'images/marker.png'
      });
  
  
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

    })(jQuery);
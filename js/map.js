function initialize() {
        var mapOptions = {
          zoom: 17,
          scrollwheel: false,
          center: new google.maps.LatLng(56.8314221,60.6023303)
        }
        var map = new google.maps.Map(document.getElementById("map-canvas"),
                                                  mapOptions);
        var image = "images/map-marker.png";
        var myLatLng = new google.maps.LatLng(56.8314221,60.6020815);
        var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: image
        });
      }
      google.maps.event.addDomListener(window, "load", initialize);
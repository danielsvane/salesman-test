$(function(){  
  var start = new google.maps.LatLng(56.139139, 10.178533);
  var markersArray = [];
  var locationsArray = [];
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  
  var myOptions = {
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    center: start,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  var marker = new google.maps.Marker({
    position: start,
    map: map,
    title: "Kraftvaerk, Aarhus"
  });
  
  directionsDisplay.setMap(map);
  
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng);
    calcRoute();
  });
  
  function calcRoute(){
    var request = {
      origin: start,
      destination: start,
      waypoints: locationsArray,
      optimizeWaypoints: true,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if(status == google.maps.DirectionsStatus.OK){
        directionsDisplay.setDirections(response);
      }
    });
  };
  
  function addMarker(location){
    locationsArray.push({location: location});
  }

});

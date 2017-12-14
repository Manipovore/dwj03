/**** SCRIPT MAP *****/

/*
* Init de la map
* 
* 
*/

var arrayData = new Data_Controller();
var reservation = false;

function initMap() {
        
        var div_info = document.getElementById('info');
        var markers = [];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 48.866667, lng: 2.333333}
        });

        arrayData.map( function(arrayData, i) {
          var latLng = new google.maps.LatLng(arrayData.position);
          var marker = new google.maps.Marker({
            position: latLng
          });
          markers.push(marker);
          marker.addListener('click', function(e) {
              view_station.initMarker(arrayData.id, arrayData.name, arrayData.address, arrayData.bike_available, arrayData.available_bike_stands);
              view_station.readMarker();
              document.getElementById('info').scrollIntoView(true);
          });                    
        });

        var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}



    
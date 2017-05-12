  var config = {
    apiKey: "AIzaSyAa0IsOucOudM_yR0ql8IPcxwgn3TiN_gQ",
    authDomain: "bonapetit-df088.firebaseapp.com",
    databaseURL: "https://bonapetit-df088.firebaseio.com",
    projectId: "bonapetit-df088",
    storageBucket: "bonapetit-df088.appspot.com",
    messagingSenderId: "1001242375810"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var favRestaurants = [];


var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 13
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
            var marker = new google.maps.Marker({
              position: pos,
              map: map
        });
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }



function addFavoriteRestaurant() {
  database.ref().on("value", function(snapshot) {
      name = snapshot.val().Person.Preference.restaurantName;
      lat = snapshot.val().Person.Preference.location.latitude;
      lng = snapshot.val().Person.Preference.location.longitude;
    var locationObject = {name:name, lat:lat, lng:lng};
    favRestaurants.push(locationObject);
  })
}
$(document).ready(function() {

function addMarker() {
  var marker2 = new google.maps.Marker({
          position: {lat: 132, lng: 132},
          map: map
        });
}
addMarker();
addFavoriteRestaurant();
console.log(favRestaurants);
console.log("hi");

})



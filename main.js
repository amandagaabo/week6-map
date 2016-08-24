/*
In class problem: Play with Google Maps API
=======================================================
*/

var map;

function initMap() {
  console.log('initMap called!');
  map = new google.maps.Map(document.getElementById('map'), {
     center: { lat: 51.209288, lng: 3.224211 },
     zoom: 18,
     mapTypeId: google.maps.MapTypeId.SATELLITE,
     // 90' North is Top of Page
     heading: -20
  });
 }

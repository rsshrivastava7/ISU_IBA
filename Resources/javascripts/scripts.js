
$(document).ready(function() {

var map= new GMaps({
  div: '.map',
  lat: 38.7437396,
  lng: -9.05,
    zoom:12
});

    map.addMarker({
  lat: 38.7437396,
  lng: -9.2302434,
  title: 'Lisbon',
    infoWindow: {
      content: '<p>Our Lisbon HQ</p>'
}
});
});

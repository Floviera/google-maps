var platform = new H.service.Platform({
  app_id: "{YOUR_APP_ID}", // // <-- ENTER YOUR APP ID HERE
  app_code: "{YOUR_APP_CODE}" // <-- ENTER YOUR APP CODE HERE
});

var defaultLayers = platform.createDefaultLayers();
var mapPlaceholder = document.getElementById("map-container");

var map = new H.Map(mapContainer, defaultLayers.normal.map);

window.addEventListener("resize", function() {
  map.getViewPort().resize();
});

'use strict';

app.directive('leafletMap', function(){
	// map layer from stamen: https://www.mapbox.com/mapbox.js/example/v1.0.0/external-layers/
	var stamenUrl = 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png';

	return {
		restrict: 'A',
		link: function(scope, elem, attrs){
			// create map
			var nairobi = [-1.282836, 36.829201]
			var map = L.map(elem[0].id).setView(nairobi, 12);

			console.log(elem)
			
			// add tile layer
			L.tileLayer(stamenUrl, {
			    maxZoom: 18
			}).addTo(map);
		}

	}
})
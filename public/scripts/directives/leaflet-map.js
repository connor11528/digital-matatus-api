'use strict';

app.directive('leaflet-map', function(){
	return {
		restrict: 'A',
		link: function(scope, elem, attrs){
			var nairobi = [-1.282836, 36.829201]
			var map = L.map(elem).setView(nairobi, 12);
			L.tileLayer('http://{s}.tile.cloudmade.com/2515f952e6c3418488627c3e24cd773b/997/256/{z}/{x}/{y}.png', {
			    maxZoom: 18
			}).addTo(map);
		}

	}
})
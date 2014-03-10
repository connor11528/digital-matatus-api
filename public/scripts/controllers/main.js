'use strict';

app.controller('MainCtrl', ['$scope', function ($scope) {
	angular.extend($scope, {
        nairobi: {
            lat: 51.505,
            lng: -0.09,
            zoom: 6
        },
        paths: {
            p1: {
                color: 'red',
                weight: 8,
                latlngs: [
                        { lat: 51.50, lng: -0.082 },
                        { lat: 48.83, lng: 2.37 },
                        { lat: 41.91, lng: 12.48 }
                ],
            }
        },
        markers: {},
        defaults: {
        	scrollWheelZoom: false
        }
    });
}]);

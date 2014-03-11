'use strict';

app.controller('MainCtrl', ['$scope', 'Route', function ($scope, Route) {
    Route.getAllRoutes(function(data){
        // convert object into array, excluding first property
        var arrayData = [];
        for(var key in data){
            if (key !== 'route_id')
                arrayData.push(data[key]);
        }
        $scope.routes = arrayData;

    }, function(error){
        $scope.routes = error;
    });

    angular.extend($scope, {
        nairobi: {
            lat: -1.284381, 
            lng: 36.809031,
            zoom: 14
        },
        paths: {
            p1: {
                color: 'red',
                weight: 2,
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

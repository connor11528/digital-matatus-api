'use strict';

app.controller('MainCtrl', ['$scope', 'Route', function ($scope, Route) {
    
    // Create array of route objects
    Route.getAllRoutes(function(data){
        var arrayData = [];
        for(var key in data){
            var routeObj = data[key];

            if (key !== 'route_id'){
                // add route_id to object
                routeObj['route_id'] = key;

                // calculate shape_id
                var shape_id = routeObj['route_id'][0] + routeObj['route_id'].substr(-6);
                routeObj['shape_id'] = shape_id

                arrayData.push(routeObj);
            }
        }
        $scope.routes = arrayData;

    }, function(error){
        $scope.routes = error;
    });

    // draw path to map
    $scope.drawRoute = function(shape_id){
        // get path coordinates
        Route.getCoords(shape_id, function(points){
            var newPath = {
                color:'red',
                weight: 8,
                latlngs: []
            };

            angular.forEach(points, function(point){

                var coord = {
                    lat: point[1],
                    lng: point[2]
                };

                // add to object to draw
                newPath.latlngs.push(coord);
            });
            var pathName = shape_id;
            
            // add path to $scope
            $scope.paths[pathName] = newPath;
            
        }, function(error){
            $scope.routeToDraw  = error;
        });
    };

    angular.extend($scope, {
        nairobi: {
            lat: -1.284381, 
            lng: 36.809031,
            zoom: 12
        },
        paths: {
            defaultPath: {
                color: 'red',
                weight: 4,
                latlngs: [
                        { lat: -1.284381, lng: 36.700974 },
                        { lat: -1.31349, lng: 36.699959 },
                        { lat: -1.311739, lng: 36.698589 }
                ],
            }
        },
        markers: {},
        defaults: {
            scrollWheelZoom: false
        }
    });
	
}]);

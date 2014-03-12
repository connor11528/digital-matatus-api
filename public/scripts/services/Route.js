'use strict';

app.factory('Route', ['$http', function($http){

	var Route = {
		getCoords: function(shape_id, success, error){
			var promise = $http.get('/api/v1/shapes/' + shape_id)
			.success(success)
			.error(error);
		},
		getAllRoutes: function(success, error){
			var promise = $http.get('/api/v1/routes')
			.success(success)
			.error(error);
		}
	};

	return Route;
}]);
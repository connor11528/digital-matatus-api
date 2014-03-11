'use strict';

app.factory('Route', ['$http', function($http){

	var Route = {
		draw: function(route_id){
			return 'Draw route with route_id: ' + route_id;
		},
		getAllRoutes: function(success, error){
			var promise = $http.get('/api/v1/routes')
			.success(success)
			.error(error);
		}
	};

	return Route;
}]);
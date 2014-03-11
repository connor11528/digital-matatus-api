'use strict';

app.filter('searchRoutes', function() {
  return function(routes, searchTerm){
    var filtered = [];

    if (!searchTerm){
      filtered = routes;
    } else {
      angular.forEach(routes, function(route){
        var search = searchTerm.toLowerCase();
        var shortName = route.short_name.toLowerCase();
        var longName = route.long_name.toLowerCase();

        if (longName.indexOf(search) > -1 || shortName.indexOf(search) > -1){
          filtered.push(route);
        }
      });
    }
    return filtered;
  };
});

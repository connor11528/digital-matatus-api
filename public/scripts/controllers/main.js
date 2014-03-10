'use strict';

angular.module('publicApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

        angular.extend($scope, {
            london: {
                lat: 51.505,
                lng: -0.09,
                zoom: 2
            },
                europeanPaths: {
                    p1: {
                        color: 'red',
                        weight: 8,
                        latlngs: [
                            { lat: 51.50, lng: -0.082 },
                            { lat: 48.83, lng: 2.37 },
                            { lat: 41.91, lng: 12.48 }
                        ],
                    }
                }
            });
    
    
  }]);

angular.module('sortable', ['angular-sortable-view'])
.directive('presidentList', function() {
  return {
    restrict: 'E',
    controller: ['$scope', function($scope) {
      $scope.presidents = [
        'Abraham Lincoln',
        'Theodore Roosevelt',
        'William Jefferson Clinton'
      ];
    }]
  }
});

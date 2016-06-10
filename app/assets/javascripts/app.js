angular.module('sortable', ['as.sortable'])
.directive('presidentList', function() {
  return {
    restrict: 'E',
    controller: ['$scope', function($scope) {

      $scope.dragControlListeners = {
        accept: function (sourceItemHandleScope, destSortableScope) { return true },
        itemMoved: function (event) {},
        orderChanged: function(event) {}
      };

      $scope.presidents = [
        'Abraham Lincoln',
        'Theodore Roosevelt',
        'William Jefferson Clinton'
      ];
    }]
  }
});

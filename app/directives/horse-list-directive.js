angular.module('myApp.horseList')
.directive('horseList',
  function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/horse-list.html',
      controller:  'horseListController'
    }
  }
);
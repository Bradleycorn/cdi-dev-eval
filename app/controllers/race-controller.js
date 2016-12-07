angular.module('myApp.race',[])
.controller('raceController', ['$scope', 'myApp.horseService',
  function($scope, horseService){
    $scope.myHorse;

    $scope.setHorse = function() {
      $scope.myHorse = horseService.getWager();
    }

    $scope.clearWager = function(horse) {
      horse.isBet = false;
      $scope.myHorse = null;
    }

    $scope.setHorse();

  }
]);
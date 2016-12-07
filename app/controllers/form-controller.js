angular.module('myApp.form',[])
  .controller('formController', ['$scope', 'myApp.horseService',
    function($scope, horseService){
      $scope.name = "";
      $scope.odds = "";


     }
  ]);
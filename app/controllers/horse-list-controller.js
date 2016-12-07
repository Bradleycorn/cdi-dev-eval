angular.module('myApp.horseList', [])
.controller('horseListController', ['$scope', function($scope, horseService) {
    $scope.horses = horseService.getHorses();


}
]);
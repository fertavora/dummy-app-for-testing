/**
 * Created by tavete on 15/09/16.
 */
'use strict'

app.controller('ParkedCarsController', function ParkedCarsController($scope, $http){
    $scope.selectedCar;
    $scope.checkoutCar = function(a){
        $scope.selectedCar = a;
        $scope.checkoutTime = new Date(Date.now());
        $scope.diff = Math.round(((Math.abs($scope.checkoutTime - $scope.selectedCar.ingreso) / 1000) / 60)) /60;
        $scope.total = $scope.diff !== 0 ? Math.round($scope.diff * $scope.selectedCar.tarifa.tarifa) : $scope.total = $scope.selectedCar.tarifa.tarifa;
        $http.get('./checkout');
    }
    $scope.remove = function(c){
        console.log(c);
    }
});
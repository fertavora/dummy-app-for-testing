/**
 * Created by tavete on 15/09/16.
 */
'use strict'

app.controller('ParkedCarsController', function ParkedCarsController($scope){
    $scope.selectedCar;
    $scope.checkoutCar = function(a){
        $scope.selectedCar = a;

    }
    $scope.remove = function(c){
        console.log(c);
    }
});
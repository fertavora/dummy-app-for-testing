/**
 * Created by tavete on 20/09/16.
 */
'use strict';
app.controller('NewCarController', function NewCarController($scope){
    $scope.nuevoAuto = {};
    $scope.master = {};
    $scope.nuevoAuto.tarifa = $scope.tarifas[0];

    $scope.agregarAuto = function(auto){
        auto.ingreso = new Date();
        auto.patente = auto.patente.toUpperCase();
        $scope.autos.push(auto);
        $scope.nuevoAuto = angular.copy($scope.master);
        $scope.nuevoAuto.tarifa = $scope.tarifas[0];
    }
})
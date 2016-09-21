/**
 * Created by tavete on 20/09/16.
 */
'use strict'
app.controller('NewCarController', function NewCarController($scope){
    $scope.nuevoAuto = {}
    $scope.nuevoAuto.tarifa = $scope.tarifas[0]

    $scope.agregarAuto = function(auto){
        auto.ingreso = new Date()
        $scope.autos.push(auto)
        console.log($scope.autos)
    }
})
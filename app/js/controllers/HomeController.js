/**
 * Created by ftavora on 14/09/16.
 */
'use strict';

app.controller('HomeController', function HomeController($scope){
    $scope.tarifas = [
        { "tipo": "Car", "tarifa": 35 },
        { "tipo": "SUV", "tarifa": 20.50 },
        { "tipo": "Truck", "tarifa": 50 }
    ];

    var date = new Date();
    var date1 = new Date();
    var date2 = new Date();
    var date3 = new Date();
    var date4 = new Date();

    date1.setHours(date.getHours()-3);
    date2.setHours(date.getHours()-1);
    date3.setHours(date.getHours()-2);
    date4.setHours(date.getHours()-4);

    $scope.autos = [
        {
            marca: "Chevrolet",
            patente: "KYP937",
            ingreso: date1,
            tarifa: $scope.tarifas[0]
        },
        {
            marca: "Peugeot",
            patente: "JKU987",
            ingreso: date2,
            tarifa: $scope.tarifas[2]
        },
        {
            marca: "Renault",
            patente: "KIU129",
            ingreso: date3,
            tarifa: $scope.tarifas[0]
        },
        {
            marca: "Ford",
            patente: "TWE983",
            ingreso: date4,
            tarifa: $scope.tarifas[0]
        }
    ]
});
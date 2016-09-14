/**
 * Created by ftavora on 14/09/16.
 */

'use strict';

var app = angular.module('parkingApp', ['ngRoute'])
    .controller('AppController', function AppController($scope){
        $scope.browserTitle = "ParkingApp";
    });